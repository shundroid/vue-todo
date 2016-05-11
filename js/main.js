var Vue = require("vue");

document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: "#app",
    data: {
      todos: [
        "hoge",
        "fuga"
      ]
    }
  });
});
