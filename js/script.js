import contacts from "./db.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContactId: 0,
    };
  },
}).mount("#app");
