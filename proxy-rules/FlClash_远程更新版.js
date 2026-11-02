// FlClash/Mihomo rule-provider bootstrap. Import once as a script override.
// Node subscriptions remain separate and private. Rules refresh every 24h.
const RULE_BASE = "https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules";
const RULE_INTERVAL_SECONDS = 86400;
function main(config) {
  const groups = Array.isArray(config["proxy-groups"]) ? config["proxy-groups"] : [];
  const proxies = Array.isArray(config.proxies) ? config.proxies : [];
  const providers = Object.keys(config["proxy-providers"] || {});
  const candidates = [...new Set([
    ...groups.map(g => g && g.name),
    ...proxies.map(p => p && p.name),
  ].filter(n => typeof n === "string" && n !== "MY_PROXY"))];
  if (!candidates.length && !providers.length) throw new Error("No proxy groups, nodes or providers found");
  const personalGroup = { name: "MY_PROXY", type: "select", proxies: candidates };
  if (providers.length) personalGroup.use = providers;
  config["proxy-groups"] = [...groups.filter(g => g && g.name !== "MY_PROXY"), personalGroup];
  config["rule-providers"] = config["rule-providers"] || {};
  for (const action of ["direct", "proxy"]) {
    config["rule-providers"]["personal_" + action] = {
      type: "http", behavior: "classical", format: "yaml",
      url: `${RULE_BASE}/rules/${action}.yaml`,
      interval: RULE_INTERVAL_SECONDS,
      proxy: "MY_PROXY",
    };
  }
  config.rules = [
    "PROCESS-NAME,qbittorrent.exe,DIRECT",
    "DOMAIN,localhost,DIRECT",
    "DOMAIN-SUFFIX,local,DIRECT",
    "DOMAIN-SUFFIX,lan,DIRECT",
    "DOMAIN-SUFFIX,internal,DIRECT",
    "IP-CIDR,127.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,172.16.0.0/12,DIRECT,no-resolve",
    "IP-CIDR,192.168.0.0/16,DIRECT,no-resolve",
    "RULE-SET,personal_direct,DIRECT",
    "RULE-SET,personal_proxy,MY_PROXY",
    "MATCH,DIRECT",
  ];
  return config;
}
