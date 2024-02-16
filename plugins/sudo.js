const { command, isPrivate } = require("../lib");
const Config = require("../config");
const Heroku = require("heroku-client");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;
const { SUDO } = require("../config");
command(
  { pattern: "getsudo ?(.*)", 
    fromMe: isPrivate, 
    desc: "shows sudo numbers", 
    type: "heroku" 
  },
  async (message, match, mm) => {
    const vars = await heroku
      .get(baseURI + "/config-vars")
      .catch(async (error) => {
        return await message.send("HEROKU : " + error.body.message);
      });
    await message.sendMessage("```" + `SUDO number are : ${config.SUDO}` + "```");
  }
);

command(
  { pattern: "setsudo ?(.*)", fromMe: isPrivate, desc: "set new sudo", type: "heroku" },
  async (message, mm) => {
    var newSudo = (message.reply_message ? message.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo)
      return await message.sendMessage("*Need reply/mention/number*", { quoted: message });
    var setSudo = (SUDO + "," + newSudo).replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await message.sendMessage("```new sudo numbers are: ```" + setSudo, {
      quoted: message,
    });
    await message.sendMessage("_It takes 30 seconds to make effect_", { quoted: message });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);

command(
  {
    pattern: "delsudo ?(.*)",
    fromMe: isPrivate,
    desc: "delete sudo number",
    type: "heroku",
  },
  async (message, mm) => {
    var newSudo = (message.reply_message ? message.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo) return await message.sendMessage("*Need reply/mention/number*");
    var setSudo = SUDO.replace(newSudo, "").replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await message.sendMessage("```new sudo numbers are: ```" + setSudo, {
      quoted: message,
    });
    await message.sendMessage("_It takes 30 seconds to make effect_", { quoted: message });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);
