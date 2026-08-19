Vue.createApp({
  data() {
    return {
      name: "Mohammed Ismail",
      age: "29",
      imagePath: "./assets/nature.png",
    };
  },
  methods: {
    getRandomNumber() {
     return Math.random().toFixed(1);
    },
  },
}).mount("#assignment");
