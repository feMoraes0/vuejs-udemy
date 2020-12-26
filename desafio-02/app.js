new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    showAlert() {
      alert('Showing alert');
    },
    updateOnKeyDown(event) {
      this.valor = event.target.value;
    },
    updateOnEnter(event) {
      this.valor = event.target.value
    }
  }
})