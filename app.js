const Discord = require("discord.js");
const client = new Discord.Client();
const token = "";
client.on("ready", () => {
  console.log("ready...");
});
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.match(/!steam /)) {
    let channel = message.channel;
    let reply_text = `steam://openurl/${message.content.split("!steam ")[1]}`;
    channel
      .send(reply_text)
      .then((message) => console.log(`${reply_text}`))
      .catch(console.error);
    return;
  }
});
client.login(token);
