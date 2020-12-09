new Vue({
  el: "#desafio",
  data: {
    name: "Fernando de Moraes",
    age: 26,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
  },
  methods: {
    tripleAge: function () {
      return this.age * 3;
    },
    getRandomNumber: function () {
      return Math.random();
    }
  }
})