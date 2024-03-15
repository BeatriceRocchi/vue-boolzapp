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
      isDarkMode: false,
      responses: ["Ok", "Perfetto!", "Chiamami","Non posso rispondere adesso"],
    };
  },

  methods: {
    //Aggiunta messaggio (oggetto) nell'array dei messaggi della chat del contatto attivo, reset dell'input e attivazione dopo 1s della funzione di risposta automatica
    addMessage(messageInputText) {
      const messageToAdd = {
        date: DateTime.now().setLocale("it").toFormat("dd/MM HH:mm:ss"),
        message: messageInputText,
        status: "sent",
      };

      this.contactsFiltered[this.activeContactId].messages.push(messageToAdd);
      this.messageInputText = "";

      setTimeout(this.addResponse, 1000);
    },

    //Risposta automatica con aggiunta del messaggio di risposta nell'array dei messaggi della chat del contatto attivo
    addResponse() {
      const responseToAdd = {
        date: DateTime.now().setLocale("it").toFormat("dd/MM HH:mm:ss"),
        message: this.randomResponse(),
        status: "received",
      };

      this.contactsFiltered[this.activeContactId].messages.push(responseToAdd);
    },

    //Funzione di randomizzazione della risposta
    randomResponse() {
      let index = Math.floor(Math.random() * (this.responses.length));
      return this.responses[index];
    },

    //Logica per mappare il messaggio della chat cliccato: al click su un messaggio aggiungo la proprietà isMessageClicked (booleano con valore true) e la metto false a tutti gli altri (ciclo forEach) perchè deve aprirsi un solo menu a tendina alla volta. Se il messaggio che clicco ha già la proprietà true allora cambio ill valore in false (vuol dire che ho cliccato per chiudere la tendina)
    toggleOptions(messageItem) {
      if (messageItem.isMessageClicked === true) {
        messageItem.isMessageClicked = false;
      } else {
        this.contactsFiltered[this.activeContactId].messages.forEach(
          (message) => (message.isMessageClicked = false)
        );
        messageItem.isMessageClicked = true;
      }
    },

    //Eliminazione messaggio
    deleteMessage(messageItemId) {
      this.contactsFiltered[this.activeContactId].messages.splice(
        messageItemId,
        1
      );
    },

    //Formattazione di tutte le date nel db: ciclo tutti i contatti e per ciascun contatto ciclo tutti i messaggi. Per ogni messaggio sfrutto libreria Luxon per passare da un formato generico dato (fromFormat) al formato che voglio mostrare
    formatDate() {
      this.contacts.forEach((contact) => {
        contact.messages.forEach((message) => {
          const messageString = message.date;
          message.date = DateTime.fromFormat(
            `${messageString}`,
            "dd/MM/yyyy HH:mm:ss"
          ).toFormat("dd/MM HH:mm:ss");
        });
      });
    },
  },

  computed: {
    contactsFiltered() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.contactToSearch.toLowerCase())
      );
    },
  },

  mounted() {
    //Al caricamento della pagina, richiamo subito la funzione che formattare le date
    this.formatDate();
  },
}).mount("#app");
