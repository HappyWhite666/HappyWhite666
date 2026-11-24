# Personal proxy routing rules

Routing rules for Shadowrocket, FoxyProxy, and FlClash/Mihomo. This directory only stores public website rules and contains **no proxy nodes, subscriptions, passwords, or tokens**.

## Remote URLs

- Shadowrocket: https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/Shadowrocket_规则_维护版.conf
- FlClash standalone script (manual refresh): https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/FlClash_规则_维护版.js
- [FoxyProxy-Geph-Patterns.json](https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/FoxyProxy-Geph-Patterns.json) (Firefox, manual import)

Shadowrocket uses Geph-style split routing. Local traffic, recognized mainland China destinations, and listed Steam and Epic download CDNs go direct. Explicit service rules take priority over the mainland China domain set and GeoIP check. Unmatched destinations use the selected proxy. BitTorrent connections handled by Shadowrocket follow these destination rules.

The maintained FlClash script routes qBittorrent, the listed Steam and Epic download CDNs, and the configured Microsoft domains directly. Explicit rules take priority over the mainland China checks. Unmatched destinations use MY_PROXY.

For FlClash, keep your proxy-node subscription, import the maintained JS as a script override, select a working MY_PROXY node, and enable Rule mode. Refresh the script manually to pick up changes from GitHub.

For Shadowrocket, import or refresh the remote `.conf`, select a proxy node, and set Global Routing to **Config**.

In FoxyProxy for Firefox, open your existing proxy under **Proxies**, import the JSON in **Patterns**, save, and select **Proxy by Patterns**. The JSON is a snapshot of the Shadowrocket rules that match domains or literal IP addresses. Its mainland domain list comes from blackmatrix7's `China_Domain.list`.

Google Drive backup copies and GitHub are not automatically synchronized with one another.
