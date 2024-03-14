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

1. Eliminare il markup statico delle chat in chat-list e attraverso un ciclo v-for stamparle dinamicamente
2. Eliminare il markup statico dei messaggi nel pannello della conversazione e attraverso un ciclo v-for stampare dinamicamente tutti i messaggi
3. Dichiarare in data una variabile activeContactId che servirà per indicare il contatto 'attivo' di cui mostrare i messaggi nel pannello della conversazione. Di dafault, il contatto 'attivo' sarà quello ad indice 0
4. Nel ciclo v-for di stampa delle chat (punto 1), passare anche l'indice di ogni contatto (contactId)
5. Al @click sul contatto, la variabile activeContactId assumerà il valore di contactId
6. Al ciclo di stampa dei messaggi (punto 2), passare come indice dell'array contacts il valore di activeContactId
7. Sopra i messaggi nel pannello della conversazione, passare dinamicamente le proprietà del contatto 'attivo' activeContactId
8. Dichiarare in data una variabile messageInput da inizializzare come stringa vuota
9. Aggiungere all'input nel pannello della conversione un v-model con messageInputText e al @keyup.enter attivare la funzione addMessage passando come parametro il testo del messaggio da aggiungere (messageInputText)
10. Nella funzione addMessage dichiarare un oggetto con le proprietà date, message e status (analogamente alla struttura dei messaggi forniti come db) e assegnare a message il valore messageInputText e a status sent
11. Nella funzione addMessage, aggiungere con push il nuovo oggetto appena creato all'array dei messaggi della chat del contatto attivo. Dopo aver pushato, resettare il messaggio inserito nell'input
12. Nella funzione addMessage, dopo aver pushato il nuovo messaggio, con setTimeout richiamare una funzione addResponse che dopo 1 secondo aggiunge all'array dei messaggi della chat del contatto attivo un ulteriore messaggio. Il messaggio sarà un oggetto con le proprietà date, message (ok) e status (received)
13. Dichiarare in data una variabile contactToSearch da inizializzare come stringa vuota
14. Aggiungere all'input della searchbar un v-model con contactToSearch
15. In computed, predisporre una funzione contactsFiltered che filtra la lista di contatti e restituisce i contatti che contengono nel nome la stringa di input
16. Sostituire contacts con contactsFiltered ogni volta che è stato richiamato nell'html (es. nel ciclo v-for di stampa delle chat (punto 1), nel ciclo v-for di stampa dei messaggi (punto 2))
