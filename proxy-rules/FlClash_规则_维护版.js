// FlClash/Mihomo override script generated from Shadowrocket_规则_维护版.conf
// Source updated 2026-11-02. Selected general-purpose routing rules retained.
// The imported proxy subscription continues to supply all nodes/provider groups.
// FlClash: Config -> active subscription -> More -> Override -> Script.
// Use Rule mode. Select a working proxy in the MY_PROXY group.

const MY_RULES = [
  // qBittorrent traffic direct when its connections reach the Mihomo core.
  "PROCESS-NAME,qbittorrent.exe,DIRECT",
  // Private networks corresponding to Shadowrocket skip-proxy intent.
  "DOMAIN,localhost,DIRECT",
  "DOMAIN-SUFFIX,local,DIRECT",
  "DOMAIN-SUFFIX,lan,DIRECT",
  "DOMAIN-SUFFIX,internal,DIRECT",
  "IP-CIDR,127.0.0.0/8,DIRECT,no-resolve",
  "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve",
  "IP-CIDR,172.16.0.0/12,DIRECT,no-resolve",
  "IP-CIDR,192.168.0.0/16,DIRECT,no-resolve",

  // ========================================
  // OpenAI / ChatGPT
  // ========================================
  "DOMAIN-SUFFIX,chatgpt.com,MY_PROXY",
  "DOMAIN-SUFFIX,openai.com,MY_PROXY",
  "DOMAIN-SUFFIX,oaistatic.com,MY_PROXY",
  "DOMAIN-SUFFIX,oaiusercontent.com,MY_PROXY",

  // ========================================
  // Google
  // ========================================
  "DOMAIN-SUFFIX,google.com,MY_PROXY",
  "DOMAIN-SUFFIX,googleapis.com,MY_PROXY",
  "DOMAIN-SUFFIX,googleusercontent.com,MY_PROXY",
  "DOMAIN-SUFFIX,gstatic.com,MY_PROXY",
  "DOMAIN-SUFFIX,ggpht.com,MY_PROXY",
  "DOMAIN-SUFFIX,gvt1.com,MY_PROXY",
  "DOMAIN-SUFFIX,gvt2.com,MY_PROXY",
  "DOMAIN-SUFFIX,googleadservices.com,MY_PROXY",
  "DOMAIN-SUFFIX,googlesyndication.com,MY_PROXY",
  "DOMAIN-SUFFIX,googletagmanager.com,MY_PROXY",
  "DOMAIN-SUFFIX,google-analytics.com,MY_PROXY",
  "DOMAIN-SUFFIX,googleapis.cn,MY_PROXY",

  // Common Google country/region domains
  "DOMAIN-KEYWORD,google,MY_PROXY",

  // ========================================
  // YouTube
  // ========================================
  "DOMAIN-SUFFIX,youtube.com,MY_PROXY",
  "DOMAIN-SUFFIX,youtu.be,MY_PROXY",
  "DOMAIN-SUFFIX,ytimg.com,MY_PROXY",
  "DOMAIN-SUFFIX,googlevideo.com,MY_PROXY",
  "DOMAIN-SUFFIX,youtube-nocookie.com,MY_PROXY",
  "DOMAIN-SUFFIX,youtubei.googleapis.com,MY_PROXY",

  // ========================================
  // Telegram
  // ========================================
  "DOMAIN-SUFFIX,t.me,MY_PROXY",
  "DOMAIN-SUFFIX,telegram.org,MY_PROXY",
  "DOMAIN-SUFFIX,telegram.me,MY_PROXY",
  "DOMAIN-SUFFIX,telegra.ph,MY_PROXY",
  "DOMAIN-SUFFIX,tdesktop.com,MY_PROXY",
  "DOMAIN-SUFFIX,telesco.pe,MY_PROXY",

  // Telegram IPv4
  "IP-CIDR,91.108.4.0/22,MY_PROXY,no-resolve",
  "IP-CIDR,91.108.8.0/22,MY_PROXY,no-resolve",
  "IP-CIDR,91.108.12.0/22,MY_PROXY,no-resolve",
  "IP-CIDR,91.108.16.0/22,MY_PROXY,no-resolve",
  "IP-CIDR,91.108.20.0/22,MY_PROXY,no-resolve",
  "IP-CIDR,91.108.56.0/22,MY_PROXY,no-resolve",
  "IP-CIDR,91.105.192.0/23,MY_PROXY,no-resolve",
  "IP-CIDR,149.154.160.0/20,MY_PROXY,no-resolve",
  "IP-CIDR,185.76.151.0/24,MY_PROXY,no-resolve",

  // ========================================
  // Signal
  // Official Signal domains; *.signal.org is covered by DOMAIN-SUFFIX.
  // ========================================
  "DOMAIN-SUFFIX,signal.org,MY_PROXY",
  "DOMAIN-SUFFIX,signal.art,MY_PROXY",
  "DOMAIN-SUFFIX,signal.group,MY_PROXY",
  "DOMAIN-SUFFIX,signal.link,MY_PROXY",
  "DOMAIN-SUFFIX,signal.me,MY_PROXY",
  "DOMAIN-SUFFIX,signal.tube,MY_PROXY",

  // ========================================
  // Ente Photos
  // Main Ente domains; DOMAIN-SUFFIX covers API, Photos, accounts, albums, and current subdomains.
  // Keep legacy .io endpoints for app/API compatibility.
  // ========================================
  "DOMAIN-SUFFIX,ente.com,MY_PROXY",
  "DOMAIN-SUFFIX,ente.io,MY_PROXY",
  "DOMAIN-SUFFIX,ente.space,MY_PROXY",

  // ========================================
  // Common foreign services that generally require proxy
  // ========================================

  // GitHub
  "DOMAIN-SUFFIX,github.com,MY_PROXY",
  "DOMAIN-SUFFIX,githubusercontent.com,MY_PROXY",
  "DOMAIN-SUFFIX,githubassets.com,MY_PROXY",
  "DOMAIN-SUFFIX,github.io,MY_PROXY",
  "DOMAIN-SUFFIX,github.dev,MY_PROXY",

  // Reddit
  "DOMAIN-SUFFIX,reddit.com,MY_PROXY",
  "DOMAIN-SUFFIX,redd.it,MY_PROXY",
  "DOMAIN-SUFFIX,redditmedia.com,MY_PROXY",
  "DOMAIN-SUFFIX,redditstatic.com,MY_PROXY",

  // ========================================
  // X / Twitter
  // ========================================
  "DOMAIN-SUFFIX,x.com,MY_PROXY",
  "DOMAIN-SUFFIX,twitter.com,MY_PROXY",
  "DOMAIN-SUFFIX,t.co,MY_PROXY",
  "DOMAIN-SUFFIX,twimg.com,MY_PROXY",

  // ========================================
  // Instagram / Threads / Meta
  // ========================================

  // Instagram
  "DOMAIN-SUFFIX,instagram.com,MY_PROXY",
  "DOMAIN-SUFFIX,cdninstagram.com,MY_PROXY",
  "DOMAIN-SUFFIX,instagr.am,MY_PROXY",
  "DOMAIN-SUFFIX,ig.me,MY_PROXY",
  "DOMAIN-SUFFIX,igsonar.com,MY_PROXY",

  // Threads
  // Current web domain + legacy domain kept for compatibility
  "DOMAIN-SUFFIX,threads.com,MY_PROXY",
  "DOMAIN-SUFFIX,threads.net,MY_PROXY",

  // Shared Meta infrastructure
  "DOMAIN-SUFFIX,facebook.com,MY_PROXY",
  "DOMAIN-SUFFIX,facebook.net,MY_PROXY",
  "DOMAIN-SUFFIX,fbcdn.net,MY_PROXY",
  "DOMAIN-SUFFIX,fb.com,MY_PROXY",
  "DOMAIN-SUFFIX,fbsbx.com,MY_PROXY",
  "DOMAIN-SUFFIX,tfbnw.net,MY_PROXY",

  // Discord
  "DOMAIN-SUFFIX,discord.com,MY_PROXY",
  "DOMAIN-SUFFIX,discord.gg,MY_PROXY",
  "DOMAIN-SUFFIX,discordapp.com,MY_PROXY",
  "DOMAIN-SUFFIX,discordapp.net,MY_PROXY",
  "DOMAIN-SUFFIX,discordcdn.com,MY_PROXY",
  "DOMAIN-SUFFIX,discord.media,MY_PROXY",

  // Wikipedia / Wikimedia
  "DOMAIN-SUFFIX,wikipedia.org,MY_PROXY",
  "DOMAIN-SUFFIX,wikimedia.org,MY_PROXY",
  "DOMAIN-SUFFIX,wikimediafoundation.org,MY_PROXY",

  // Twitch
  "DOMAIN-SUFFIX,twitch.tv,MY_PROXY",
  "DOMAIN-SUFFIX,twitchcdn.net,MY_PROXY",
  "DOMAIN-SUFFIX,ttvnw.net,MY_PROXY",
  "DOMAIN-SUFFIX,jtvnw.net,MY_PROXY",

  // Medium
  "DOMAIN-SUFFIX,medium.com,MY_PROXY",
  "DOMAIN-SUFFIX,mediumcdn.com,MY_PROXY",

  // Dropbox
  "DOMAIN-SUFFIX,dropbox.com,MY_PROXY",
  "DOMAIN-SUFFIX,dropboxapi.com,MY_PROXY",
  "DOMAIN-SUFFIX,dropboxusercontent.com,MY_PROXY",
  "DOMAIN-SUFFIX,dropboxstatic.com,MY_PROXY",

  // Vimeo
  "DOMAIN-SUFFIX,vimeo.com,MY_PROXY",
  "DOMAIN-SUFFIX,vimeocdn.com,MY_PROXY",

  // ========================================
  // Steam
  // Store / Community / Web services -> PROXY
  // Game downloads / large content CDN -> DIRECT
  // ========================================

  // Large downloads / content delivery: DIRECT first
  "DOMAIN-SUFFIX,steamcontent.com,DIRECT",
  "DOMAIN-SUFFIX,steamserver.net,DIRECT",
  "DOMAIN,steampipe.akamaized.net,DIRECT",
  "DOMAIN,steamcdn-a.akamaihd.net,DIRECT",

  // Store / Community / account / chat: PROXY
  "DOMAIN-SUFFIX,steampowered.com,MY_PROXY",
  "DOMAIN-SUFFIX,steamcommunity.com,MY_PROXY",
  "DOMAIN-SUFFIX,steamstatic.com,MY_PROXY",
  "DOMAIN-SUFFIX,steamusercontent.com,MY_PROXY",
  "DOMAIN-SUFFIX,steam-chat.com,MY_PROXY",
  "DOMAIN-SUFFIX,steamgames.com,MY_PROXY",
  "DOMAIN-SUFFIX,steamstat.us,MY_PROXY",
  "DOMAIN-SUFFIX,valvesoftware.com,MY_PROXY",

  // ========================================
  // 1337x torrent index: published official domains
  // Website traffic only; torrent peer traffic remains separate.
  // ========================================
  "DOMAIN-SUFFIX,1337x.to,MY_PROXY",
  "DOMAIN-SUFFIX,1337x.st,MY_PROXY",
  "DOMAIN-SUFFIX,x1337x.ws,MY_PROXY",
  "DOMAIN-SUFFIX,x1337x.eu,MY_PROXY",
  "DOMAIN-SUFFIX,x1337x.se,MY_PROXY",
  "DOMAIN-SUFFIX,x1337x.cc,MY_PROXY",

  // Flyint account/landing website; includes to.flyintpro.com
  "DOMAIN-SUFFIX,flyintpro.com,MY_PROXY",

  // ========================================
  // RuTracker website & mirror; BitTorrent peer traffic is separate
  // ========================================
  "DOMAIN-SUFFIX,rutracker.org,MY_PROXY",
  "DOMAIN-SUFFIX,rutracker.net,MY_PROXY",

  // ========================================
  // Z-Library related domains / mirrors
  // Domains change frequently; keep this section easy to update.
  // ========================================
  "DOMAIN-SUFFIX,z-lib.sk,MY_PROXY",
  "DOMAIN-SUFFIX,z-lib.fm,MY_PROXY",
  "DOMAIN-SUFFIX,z-lib.gd,MY_PROXY",
  "DOMAIN-SUFFIX,z-lib.gl,MY_PROXY",
  "DOMAIN-SUFFIX,z-lib.fo,MY_PROXY",
  "DOMAIN-SUFFIX,zlib.li,MY_PROXY",
  "DOMAIN-SUFFIX,z-library.sk,MY_PROXY",
  "DOMAIN-SUFFIX,1lib.sk,MY_PROXY",
  "DOMAIN-SUFFIX,1-lib.sk,MY_PROXY",
  "DOMAIN-SUFFIX,z-library.la,MY_PROXY",
  "DOMAIN-SUFFIX,z-library.ec,MY_PROXY",
  "DOMAIN-SUFFIX,library-access.sk,MY_PROXY",
  "DOMAIN-SUFFIX,101wes.online,MY_PROXY",
  "DOMAIN-SUFFIX,101su.ru,MY_PROXY",
  "DOMAIN-SUFFIX,intcn.online,MY_PROXY",
  "DOMAIN-SUFFIX,z-lib.rest,MY_PROXY",
  "DOMAIN-SUFFIX,intl.su,MY_PROXY",
  "DOMAIN-SUFFIX,fuckfbi.ru,MY_PROXY",

  // ========================================
  // Everything else goes DIRECT
  // ========================================
  "MATCH,DIRECT",
];

function main(config) {
  const groups = Array.isArray(config["proxy-groups"]) ? config["proxy-groups"] : [];
  const proxies = Array.isArray(config.proxies) ? config.proxies : [];
  const providers = Object.keys(config["proxy-providers"] || {});
  const groupNames = groups.map(g => g && g.name).filter(n => typeof n === "string" && n !== "MY_PROXY");
  const proxyNames = proxies.map(p => p && p.name).filter(n => typeof n === "string" && n !== "MY_PROXY");
  const candidates = [...new Set([...groupNames, ...proxyNames])];
  if (candidates.length === 0 && providers.length === 0) {
    throw new Error("No proxy nodes/groups/providers found in this subscription");
  }
  const myGroup = { name: "MY_PROXY", type: "select", proxies: candidates };
  if (providers.length > 0) myGroup.use = providers;
  // Keep the subscription node definitions and existing groups intact.
  config["proxy-groups"] = [...groups.filter(g => g.name !== "MY_PROXY"), myGroup];
  // Replace subscriber routing with the personal rules, including MATCH,DIRECT.
  // The script is re-applied every time the subscription is refreshed.
  config.rules = [...MY_RULES];
  return config;
}
