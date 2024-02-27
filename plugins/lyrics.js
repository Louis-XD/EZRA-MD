const { command, isPrivate } = require("../lib");
const fetch = require("node-fetch");
command(
    {
        pattern: "lyrics",
        fromMe: isPrivate,
        desc: "lyrics searcher",
        type: "search",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a Song Name_*");
let sample = await fetch(`https://api-aswin-sparky.koyeb.app/api/search/lyrics?search=${match}`);
var data = await sample.json();
                   await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗟𝗬𝗥𝗜𝗖𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗦
" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (`\n𝗟𝗬𝗥𝗜𝗖𝗦 𝗥𝗘𝗦𝗨𝗟𝗧𝗦\n\n ${data.data} \n\n𝐄𝐙𝐑𝐀-𝐗𝐃\n `)}, {quoted: message })
    }
    );
