# XiaoYuan_Oral_PK

Use **Quantumult X** rewrite to cheat.

You can download `xiaoyuan.js`.

[rewrite_local]
`^https?:\/\/xyks\.yuanfudao\.com\/leo-game-pk\/iphone\/math\/pk\/match\?.* url script-response-body xiaoyuan.js`

Alternatively, you can use the remote rule.

[rewrite_remote]
`^https?:\/\/xyks\.yuanfudao\.com\/leo-game-pk\/iphone\/math\/pk\/match\?.* url script-response-body https://raw.githubusercontent.com/whiteki08/XiaoYuan_Oral_PK/refs/heads/main/xiaoyuan.js`



[mitm]
`hostname = xyks.yuanfudao.com`

