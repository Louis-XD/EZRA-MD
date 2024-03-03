const { command, isPrivate, getJson } = require("../lib/");
command(
    {
        pattern: "gdrive",
        fromMe: isPrivate,
        desc: "Google Drive Downloader",
        type: "downloader",
    },
    async (message, match, client) => {
    match = match || message.reply_message.text;
        if (!match) return await message.sendMessage("*_Need a gdrive url_*");
var {data} = await getJson(`https://vihangayt.me/download/gdrive?url=${match}`);
await message.client.sendMessage(message.jid, { text: `*_Downloading ${data.fileName}_*\n\n*size : ${data.fileSize}*\n\n𝐄𝐙𝐑𝐀-𝐗𝐃` },{ quoted: message});
await message.client.sendMessage(message.jid, { document :{ url: data.downloadUrl }, fileName: data.fileName, mimetype: data.mimetype, contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }} }, {quoted: message })
});
