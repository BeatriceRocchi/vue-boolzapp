# Boolzapp

Riproduzione del layout di WhatsApp in modalità responsive e inserimento elementi dinamici e funzionalità tramite VueJS.

#### Milestone 1

1. Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
2. Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

#### Milestone 2

1. Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
2. Click sul contatto mostra la conversazione del contatto cliccato

#### Milestone 3

1. Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
2. Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

#### Milestone 4

1. Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

#### Milestone 5

1. Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
2. Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

## Svolgimento
1. Eliminare il markup statico delle chat in chat-list e attraverso un v-for stamparle dinamicamente