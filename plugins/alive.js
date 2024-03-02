const { command, isPublic } = require("../lib");
command(
    {
        pattern: "alive",
        fromMe: isPrivate,
        desc: "to check bot online",
        type: "user",
       
    },
    async (message, match) => {
        if (!match) return await 
    message.sendMessage(`${config.ALIVE_MSG}`)
    });
