const axios = require("axios");

module.exports = {
  name: "withtree",
  alias: ["nsfwtree"],
  desc: "Hentai picture of waifu with tree",
  category: "Nsfw",
  usage: `withtree`,
  react: "👹",
  start: async (Miku, m, { prefix, NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)
    let buff = await axios.get(`https://fantox-apis.vercel.app/tree`)
    let imgURL = buff.data.url


    let Button = [
      {
        buttonId: `${prefix}nsfwmenu`,
        buttonText: { displayText: `NSFW Menu` },
        type: 1,
      },
      {
        buttonId: `${prefix}withtree`,
        buttonText: { displayText: `⏩💦` },
        type: 1,
      },
    ];
    let bmffg = {
      image: { url: imgURL },
      caption: `\n* Here What you are looking for 👀..*\n`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };

    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
