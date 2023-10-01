const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const https = require('https');

// Replace 'YOUR_BOT_TOKEN' with the API token you obtained from BotFather
const BOT_TOKEN = '6623437212:AAEO21sjIftZn6FsAc067LwyJO99ayApkzk';

// Create a new instance of the Telegram bot
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Register a command handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am your Telegram botomt.');
    // bot.sendMessage(chatID, 'Enter your customer number');
});

// Register a message handler
bot.on('photo', (msg) => {
    const chatId = msg.chat.id;
    const photoId = msg.photo[3].file_id; // Get the ID of the first photo in the message
    const downloadDir = 'C:/Yuvi/Hackathon/images/'; // Replace with your local directory path
  
    // Use the getFile method to get information about the photo
    bot.getFile(photoId).then((fileInfo) => {
        const photoUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${fileInfo.file_path}`;
        const fileName = `${fileInfo.file_id}.jpg`; // You can customize the file name

        console.log('Here execution')
        // Download the photo to the local directory
        const fileStream = fs.createWriteStream(`${downloadDir}${fileName}`);
        https.get(photoUrl, (response) => {
            response.pipe(fileStream);

            bot.sendMessage(chatId, 'Image downloaded successfully!');
        });
    }).catch((error) => {
        console.error('Error downloading image:', error);
        bot.sendMessage(chatId, 'Failed to download image.');
    });
});

// Start the bot
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});