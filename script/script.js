const app = new Vue({
  el: "#app",
  data: {
    emailArray: [],
  },
  methods: {},
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          this.emailArray.push(res.data.response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
