Vue.createApp({
  data() {
    return {
      name: "Mohammed Ismail",
      age: 29,
      imagePath: "./assets/nature.png",
    };
  },
  methods: {
    getRandomNumber() {
     return Math.random().toFixed(1);
    },
    getAgeAfterFiveYears() {
        return this.age + 5
    }
  },
}).mount("#assignment");
