# Personal proxy routing rules

Shadowrocket and FlClash/Mihomo domain-based routing rules. This directory only stores public website rules and contains **no proxy nodes, subscriptions, passwords, or tokens**.

## Remote URLs

- Shadowrocket: https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/Shadowrocket_规则_维护版.conf
- FlClash standalone script (manual refresh): https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/FlClash_规则_维护版.js
- FlClash remote updater (import once): https://raw.githubusercontent.com/HappyWhite666/HappyWhite666/main/proxy-rules/FlClash_远程更新版.js
- Mihomo rule providers: rules/direct.yaml and rules/proxy.yaml (refreshed by Mihomo every 86400 seconds).

The rule policy is selected websites -> PROXY, everything else -> DIRECT. qBittorrent process traffic is DIRECT when processed by Mihomo; this is distinct from routing torrent index websites. Steam download CDN domains remain DIRECT.

For FlClash, keep your proxy-node subscription, import the remote updater JS as a script override, select a working MY_PROXY node, and enable Rule mode. The JS bootstrap itself is not automatically refreshed, but rule providers are.

For Shadowrocket, import the .conf as a remote configuration and use its refresh function; configure a matching PROXY destination separately.

Google Drive backup copies and GitHub are not automatically synchronized with one another.
