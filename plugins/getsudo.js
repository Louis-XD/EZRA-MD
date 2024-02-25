const { command, isPrivate } = require("../lib/");
command(
  { pattern: "getsudo ?(.*)", 
    fromMe: isPrivate, 
    desc: "shows sudo numbers", 
    type: "heroku" 
  },
  async (message, match, mm) => {
    let zeta = config.SUDO
message.reply("```" + `SUDO number are : ${zeta}` + "```")
  }
);
