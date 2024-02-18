const { 
  command,
  isPrivate 
} = require("../lib");

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
    {
        pattern: "ping",
        fromMe: isPrivate,
        desc: "To check ping",
        type: "user",
    },
    async (message, match, client) => {
        const start = new Date().getTime();
      let { key } = await message.sendMessage(`*𝙿𝚒𝚗𝚐 ㋞*`);
        const end = new Date().getTime();
var speed = end - start;
 
await new Promise(t => setTimeout(t,0))
         await message.client.sendMessage(message.jid,{text:`*𝙿𝚘𝚗𝚐* ㋚
${speed} *𝚖𝚜*` , edit: key});
})

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/



/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "block",
    fromMe: true,
    desc: "Block a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("*_Need a number/reply/mention!_*");
      await message.block(jid);
      return await message.sendMessageMessage(`_@${jid.split("@")[0]} Blocked_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User blocked_");
    }
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "unblock",
    fromMe: true,
    desc: "Unblock a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("*_Need a number/reply/mention!_*");
      await message.block(jid);
      return await message.sendMessage(`*_@${jid.split("@")[0]} unblocked_*`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("*_User unblocked_*");
    }
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
  {
    pattern: "dlt",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
  },
  async (message, match,m,client) => {
    if (!message.reply_message) return await message.reply("*_Reply to a message_*"); {
      await client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);



command(
  {
    pattern: "vo",
    fromMe: isPrivate,
    desc: "anti viewOnce",
    type: "user",
  },
  async (message, match, m) => {
if (!message.reply_message || (!m.quoted.message.viewOnceMessageV2 && !m.quoted.message.viewOnceMessageV2Extension)) return await message.reply('*_Reply at viewOnce message!_*')
    if(m.quoted.message.viewOnceMessageV2Extension){
const downloadedMedia1 = await downloadMediaMessage(m.quoted.message.viewOnceMessageV2Extension, 'buffer', {}, { reuploadRequest: message.client.updateMediaMessage })
await message.client.sendMessage(message.jid, { audio :downloadedMedia1 ,  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐗𝐃",
body: "𝘼𝙣𝙩𝙞 𝙫𝙞𝙚𝙬𝙊𝙣𝙘𝙚 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡",
sourceUrl: "",
mediaUrl: "𝙡",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }} },{ quoted: message })
} else if(m.quoted.message.viewOnceMessageV2){
const downloadedMedia = await downloadMediaMessage(m.quoted.message.viewOnceMessageV2, 'buffer', {}, { reuploadRequest: message.client.updateMediaMessage })
await message.client.sendMessage(message.jid, {image: downloadedMedia, contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝘼𝙣𝙩𝙞 𝙫𝙞𝙚𝙬𝙊𝙣𝙘𝙚 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }} },{ quoted: message })
}
  }
);
