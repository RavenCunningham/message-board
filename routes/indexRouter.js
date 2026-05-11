const { Router } = require("express");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


indexRouter.get("/", (request, response) => {
  response.render("index", { title: "Mini Messageboard", messages: messages })
});

indexRouter.get("/new", (request, response) => {
  response.render("form");
});

indexRouter.post("/new", (request, response) => {
  let { messageUser, messageText } = request.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  response.redirect("/");
});

// indexRouter.all("/*splat", (request, response) => {
//   throw new CustomNotFoundError("404 - Page not found");
// });


module.exports = indexRouter;