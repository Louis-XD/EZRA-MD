const plugins = require("../lib/event");
const {
    command,
    isPrivate,
    clockString
} = require("../lib");
const {
    BOT_INFO
} = require("../config");
const config = require("../config");
const { tiny } = require("../lib/fancy_font/fancy");
command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match, m, client) => {
try{
    if (match) {
      for (let i of plugins.commands) {
        if (
          i.pattern instanceof RegExp &&
          i.pattern.test(message.prefix + match)
        ) {
          const cmdName = i.pattern.toString().split(/\W+/)[1];
          message.reply(`\`\`\`Command: ${message.prefix}${cmdName.trim()}
Description: ${i.desc}\`\`\``);
        }
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `╭━━━〔 ${BOT_INFO.split(";")[0]} 〕━━━┈
┃    ╭──────────────
┃  ✺ │  *OWNER*:  ${BOT_INFO.split(";")[1]}
┃  ✺ │  *DATE*: ${date}
┃  ✺ │  *TIME*: ${time}
┃  ✺ │  *COMMANDS*: ${plugins.commands.length} 
┃  ✺ │  *VERSION*: 1.0.1
┃  ✺ │  *RAM*: 14.8 GB/ 62.77 GB
┃  ✺ │  *PLATFROM*: linux
┃    ╰──────────────
╰━━━━━━━━━━━━━━━\n\n  ▎▍▌▌▉▏▎▌▉▐▏▌
  ▎▍▌▌▉▏▎▌▉▐▏▌\n   𝐇𝐀𝐍𝐍𝐀-𝐗𝐎-𝐌𝐃\n`
menu += `╭─────────────┈⊷\n`;

      let cmnd = [];
      let cmd;
      let category = [];
      plugins.commands.map((command, num) => {
        if (command.pattern instanceof RegExp) {
          cmd = command.pattern.toString().split(/\W+/)[1];
        }

        if (!command.dontAddCommandList  && cmd !== undefined) {
          let type = command.type ? command.type.toLowerCase() : "misc";

          cmnd.push({ cmd, type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `│  ╭─────────────┈⊷`;
        menu += `\n│  ✥ 「 *${cmmd.toUpperCase()}* 」`;
        menu += `\n│  ├─────────────┈⊷`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }) => {
          menu += `\n│   ||•➛  ${cmd.trim()}`;
        });
        menu += `\n│  ╰─────────────┈⊷`;
        menu += `\n`;
      });
      menu += `╰─────────────┈⊷`;
      let penu = tiny(menu)
      let img = config.BOT_INFO.split(';')[2]
      return await client.sendMessage(message.jid,{image: {url: img}, caption: (penu), contextInfo: { externalAdReply: {
title: config.BOT_INFO.split(';')[0],
sourceUrl: "",
mediaUrl: "https://instagram.com/abhiiiiiyh",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: config.BOT_INFO.split(';')[2] }}
    })
    }
}catch(e){
message.reply(e)
}
  }
);

/*

Heheh

*/


command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All Commands",
    type: "user",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let menu = `╭───────┈┫「 *𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐋𝐢𝐬𝐭* 」┣┈────♡`;
    menu += `\n│\n`;

    let cmnd = [];
    let cmd, desc;
    plugins.commands.map((command) => {
      if (command.pattern) {
        cmd = command.pattern.toString().split(/\W+/)[1];
      }
      desc = command.desc || false;

      if (!command.dontAddCommandList && cmd !== undefined) {
        cmnd.push({ cmd, desc });
      }
    });
    cmnd.sort();
    cmnd.forEach(({ cmd, desc }, num) => {
      menu += `│  ${(num += 1)}. *${cmd.trim()}*`;
      if (desc) menu += `\n│  Use: \`\`\`${desc}\`\`\``;
      menu += `\n│\n`;
    });
    menu += `╰───────┈┫「 𝐄𝐙𝐑𝐀-𝐗𝐃-𝐁𝐎𝐓 」┣┈────♡`;
    return await message.reply(message.jid, { text: (tiny(menu)), contextInfo: { externalAdReply: {
title: "𝚵𝚭𝚪𝚫-𝚾𝐃",
sourceUrl: "",
mediaUrl: "https://instagram.com/abhiiiiiyh",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/PlDhcfI.jpeg" }} }) })
