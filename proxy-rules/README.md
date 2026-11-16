# Personal proxy routing rules

Shadowrocket and FlClash/Mihomo domain-based routing rules. This directory only stores public website rules and contains **no proxy nodes, subscriptions, passwords, or tokens**.

## Remote URLs

- Shadowrocket: https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/Shadowrocket_规则_维护版.conf
- FlClash standalone script (manual refresh): https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/FlClash_规则_维护版.js
- FlClash remote updater (import once): https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/FlClash_远程更新版.js
- Mihomo rule providers: rules/direct.yaml and rules/proxy.yaml (refreshed by Mihomo every 86400 seconds).

Shadowrocket uses Geph-style split routing. Local traffic, recognized mainland China destinations, and listed Steam and Epic download CDNs go direct. Explicit service rules take priority over the mainland China domain set and GeoIP check. Unmatched destinations use the selected proxy. BitTorrent connections handled by Shadowrocket follow these destination rules.

FlClash/Mihomo proxies selected websites and sends unmatched destinations direct. Mihomo routes qBittorrent process traffic and the listed Steam download CDNs direct.

For FlClash, keep your proxy-node subscription, import the remote updater JS as a script override, select a working MY_PROXY node, and enable Rule mode. The JS bootstrap itself is not automatically refreshed, but rule providers are.

For Shadowrocket, import or refresh the remote `.conf`, select a proxy node, and set Global Routing to **Config**.

Google Drive backup copies and GitHub are not automatically synchronized with one another.
