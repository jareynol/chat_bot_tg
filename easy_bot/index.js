const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const token = 'Choose_your_token';
const bot = new TelegramBot(token, { polling: true });



bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const first_name = msg.chat.first_name;
    if (msg.text) {
        const text = msg.text.toLowerCase();

        if (~text.indexOf("привет")) {
            bot.sendMessage(chatId, 'Привет, ' + first_name + ' !' + '\n' + 'Я знаю три команды: /start , /photo , /opop');
        } else if (~text.indexOf("/start")) {
            start_check_weather(chatId);
        } else if (~text.indexOf("/photo")) {
            var photo = 'S.jpg';
            bot.sendPhoto(chatId, photo);
        } else if (~text.indexOf("/opop")) {
            bot.sendMessage(chatId, ' Follow me', {
                reply_markup: {
                    inline_keyboard: [
                        [{
                            text: 'Vkontakte',
                            url: 'https://vk.com/'
                        }],

                        [{
                            text: 'Instagram',
                            url: 'https://www.instagram.com/'
                        }]
                    ]
                }
            });
        } else {
            bot.sendMessage(chatId, 'Вот список моих команд:' + '\n' + '/start' + '\n' + '/photo ' + '\n' + '/opop ' + '\n' + 'Юзай их');
        }
    }
});

function start_check_weather(chatId) {
    bot.sendMessage(chatId, 'Погода в Москве на ближайшие дни:', {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: 'Погода',
                    url: 'https://yandex.ru/pogoda/moscow'
                }],
            ]
        }
    });
}
