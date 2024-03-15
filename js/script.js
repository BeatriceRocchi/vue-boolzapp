import contacts from "./db.js";

const DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeContactId: 0,
      messageInputText: "",
      contactToSearch: "",
    };
  },

  methods: {
    addMessage(messageInputText) {
      const messageToAdd = {
        date: DateTime.now().setLocale("it").toFormat("dd/MM hh:mm:ss"),
        message: messageInputText,
        status: "sent",
      };

      this.contactsFiltered[this.activeContactId].messages.push(messageToAdd);
      this.messageInputText = "";

      setTimeout(this.addResponse, 1000);
    },

    addResponse() {
      const responseToAdd = {
        date: DateTime.now().setLocale("it").toFormat("dd/MM hh:mm:ss"),
        message: "Ok",
        status: "received",
      };

      this.contactsFiltered[this.activeContactId].messages.push(responseToAdd);
    },

    toggleOptions(messageItem) {
      if (messageItem.isMessageClicked === true) {
        delete messageItem.isMessageClicked;
      } else {
        messageItem.isMessageClicked = true;
      }
    },

    deleteMessage(activeContactId, messageItemId) {
      this.contactsFiltered[activeContactId].messages.splice(messageItemId, 1);
    },
  },

  computed: {
    contactsFiltered() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactToSearch.toLowerCase())
      );
    },
  },
}).mount("#app");
