const {
    command,
    isPrivate
} = require("../lib/");
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
