const express = require("express");
const bp = require("body-parser");
const { Botact } = require("botact");

// if (time.getHours < 10) {
//   time.getHours = 0 + time.getHours();
// }
// if (time.getMinutes < 10) {
//   time.getMinutes = 0 + time.getMinutes();
// }
// if (time.getSeconds < 10) {
//   time.getSeconds = 0 + time.getSeconds();
// }

const server = express();
const bot = new Botact({
  token:
    "52552491a5c43d47f57fe522e30a10540882fe2836225cbe4bfb590161b1090d69608d57c7184bbc14c69",
  confirmation: "36f12d41"
});

bot.on(function(ctx) {
  console.log(ctx.body);
  switch (ctx.body) {
    //   case "Ты ебнутый чтоли?":
    //     ctx.reply("Ыааыы как точки строить?");
    //     break;
    //   case "Еблан?":
    //     ctx.reply("Стоп, я не еблан");
    //     break;
    //   case "!help":
    //     ctx.reply(
    //       "Сейчас я могу: \nПостроить точки\n Пососать\nСтать твоим ебланом"
    //     );
    //     break;
    //   case "Сосать будешь?":
    //     ctx.reply("Эй, я не буду сосать");
    //     break;
    //   case "Сосать будешь?":
    //     ctx.reply("Эй, я не буду сосать");
    //     break;
    //   case "Время":
    //     time();
    //     ctx.reply(
    //       "Это стоило мне многих трудов, но я узнал, что сейчас " + time.date
    //     );
    //     break;
    default:
      ctx.reply("Ты мой лучший друг!");
      break;
  }
});
bot.command("Привет, Миша!", function(ctx) {
  ctx.reply("Хай! Я тупой как пробка!");
});
bot.command("Сосать будешь?", function(ctx) {
  ctx.reply("Эй, я не буду сосать");
});
bot.command("Ты ебнутый чтоли?", function(ctx) {
  ctx.reply("Ыааыы как точки строить?");
});
bot.command("!help", function(ctx) {
  ctx.reply(
    "Список команд: \n Привет, Миша! - приветствие; \n Сосать будешь? - обычный диалог, возможно вы сможете снять Мишу на ночь; \n Врмея, аутист - узнать время; \n Ты ебнутый чтоли? - Миша задаст неординарный вопрос;"
  );
});
bot.command("Время, аутист", function(ctx) {
  new (function time() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let date = h + ":" + m + ":" + s;
    ctx.reply(date);
  })();
});
server.use(bp.json());

server.post("/", bot.listen);

server.listen(80);
