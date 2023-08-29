const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Benvenuto in questa paggina!",
      src: "",
      visibleImg: "Non Visibile",
    };
  },
  methods: {
    visible() {
      if (this.src == "04.webp") {
        this.src = "";
        this.visibleImg = "Non Visibile";
      } else {
        this.src = "04.webp";
        this.visibleImg = "Visibile";
      }
    },
  },
}).mount("#app");
