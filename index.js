const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
 
require('dotenv').config();
 
const token = process.env.TELEGRAM_TOKEN;
let bot;
 
bot = new TelegramBot(token, { polling: true });
 
bot.on('message' , (msg, match) => {
  const chatId = msg.chat.id;
  axios
    .get(`https://simsumi.herokuapp.com/api?text=${msg.text}&lang=id`)
    .then(response => {
      console.log(response.data.success)
      bot.sendMessage(chatId, response.data.success);
    })
    .catch(error => {
      const errorText = error.response.status === 404 ? `No definition found for the word: <b>${word}</b>` : `<b>An error occured, please try again later</b>`;
      bot.sendMessage(chatId, errorText, { parse_mode:'HTML'})
    });
});














