var Vue = require("vue");
import TodoTitle from "./todo-title.vue";
import TodoItem from "./todo-item.vue";

document.addEventListener("DOMContentLoaded", function() {
  var app = new Vue({
    el: "#app",
    components: { TodoTitle, TodoItem },
    data: {
      newTodo: "",
      todos: []
    },
    methods: {
      addTodo: function() {
        var text = this.newTodo.trim();
        if (text) {
          this.todos.push({ text: text });
          this.newTodo = "";
        }
      },
      removeTodo: function(index) {
        this.todos.splice(index, 1);
      }
    }
  });
});
