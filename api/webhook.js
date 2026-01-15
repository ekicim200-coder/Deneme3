const { Telegraf } = require('telegraf');

//(veya Vercel Environment Variables kullan)
const BOT_TOKEN = "8425987610:AAGuEZXm5FhlV4rXohUuchjlVAJQlkNWLlQ";

const bot = new Telegraf(BOT_TOKEN);

// /start komutu gelince
bot.start((ctx) => {
    const webAppUrl = https://deneme2-lac.vercel.app/;

    // Mesaj ve Buton İNGİLİZCE oldu
    ctx.reply("Welcome! Click the button below to open the app:", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "🚀 Open App", web_app: { url: webAppUrl } }
                ]
            ]
        }
    });
});

// Vercel Serverless Function yapısı
module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send('Bot is running (GET request)');
        }
    } catch (e) {
        console.error("Error:", e);
        res.status(500).send('Error occurred');
    }
};
