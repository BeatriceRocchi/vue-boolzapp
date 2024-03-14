import contacts from "./db.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContactId: 0,
      messageInputText: "",
    };
  },

  methods: {
    addMessage(messageInputText, activeContactId) {
      // TODO: sistemare formato data messaggio
      const messageToAdd = {
        date: "TBD",
        message: messageInputText,
        status: "sent",
      };

      this.contacts[activeContactId].messages.push(messageToAdd);
      this.messageInputText = "";
    },
  },
}).mount("#app");
