const X = "*Converted By Ezra-XD*"
const R = "*_Reply To A Image!_*
const { upload } = require('../lib/imgur');
const fs = require('fs');
const { command, isPrivate } = require("../lib/");
const pop = "https://api.popcat.xyz/"
const some = "https://some-random-api.ml/canvas/"

command(
    {
        pattern: "piceditor",
        fromMe: isPrivate,
        desc: "image editor menu",
        type: "gfx",
    },
    async (message, match, client) => {
let msg = "```"
    let zeta =`${msg}\n╔══════════════════════════╖
║ ✇▸ 𝗣𝗛𝗢𝗧𝗢 𝗘𝗗𝗜𝗧𝗢𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ║
╟══════════════════════════╜
║ 𝟷  𝙰𝙳𝚂                         
║ 𝟸  𝙿𝙸𝚇𝙴𝙻𝙰𝚃𝙴
║ 𝟹  𝚁𝙰𝙸𝙽𝙱𝙾
║ 𝟺  𝙷𝙾𝚁𝙽𝚈
║ 𝟻  𝙱𝚆
║ 𝟼  𝚁𝙴𝙳
║ 𝟽  𝙶𝚁𝙴𝙴𝙽
║ 𝟾  𝙱𝙻𝚄𝙴
║ 𝟿  𝙶𝙰𝚈
║ 𝟷𝟶 𝙶𝙻𝙰𝚂𝚂
║ 𝟷𝟷 𝚆𝙰𝚂𝚃𝙴𝙳
║ 𝟷𝟸 𝙿𝙰𝚂𝚂𝙴𝙳
║ 𝟷𝟹 𝙹𝙰𝙸𝙻
║ 𝟷𝟺 𝙲𝙾𝙼𝚁𝙰𝙳𝙴
║ 𝟷𝟻 𝙸𝙽𝚅𝙴𝚁𝚃
║ 𝟷𝟼 𝟸𝙸𝙽𝚅𝙴𝚁𝚃
║ 𝟷𝟽 𝙶𝙾𝙻𝙳𝙴𝙽
║ 𝟷𝟾 𝚂𝙸𝙼𝙿𝙲𝙰𝚁𝙳
║ 𝟷𝟿 𝚃𝙷𝚁𝙴𝚂𝙷𝙾𝙻𝙳
║ 𝟸𝟶 𝙱𝚁𝙸𝙶𝙷𝚃
║ 𝟸𝟷 𝚄𝙽𝙲𝙾𝚅𝙴𝚁
║ 𝟸𝟸 𝙲𝙻𝙾𝚆𝙽
╚═══════════⚇ ${msg} `
return await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗣𝗜𝗖 𝗘𝗗𝗜𝗧𝗢𝗥 𝗠𝗘𝗡𝗨" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (zeta)})
    }
    );

command(
  {
    pattern: "ads",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${pop}ad?image=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "pixelate",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}pixelate?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "horny",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}horny?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "lgbt",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}lgbt?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "bw",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}greyscale?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "bright",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}brightness?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "red",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}red?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "blue",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}blue?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "green",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}green?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "gay",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}gay?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "passed",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}passed?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "wasted",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}wasted?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "glass",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}glass?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "uncover",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${pop}uncover?image=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "jail",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}jail?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "invert",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}invert?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "ginvert",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}invertgreyscale?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "comrade",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}comrade?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "golden",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}sepia?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "simpcard",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}simpcard?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "threshold",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${some}threshold?avatar=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})

command(
  {
    pattern: "clown",
    fromMe: isPrivate,
    desc: "image editor",
    type: "gfx",
  },
  async (message, match, m) => {
if (!message.reply_message)
return await message.reply(R);
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `${pop}clown?image=${link}`
return await message.sendFromUrl(img, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)});
})