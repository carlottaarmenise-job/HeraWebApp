# Wedding Locations Management App

Questa web app permette a location di matrimoni e agli utenti di gestire prenotazioni, menù, vetrine, profili e votazioni.

## Funzionalità principali

### Per le location:
- Modifica della pagina profilo (dati, contatti, descrizione)
- Editor del menù con gestione prezzi e foto dei piatti
- Editor della vetrina con testo e immagini
- Gestione prenotazioni con notifiche, conferme, verifica budget e calendario
- Generazione token monouso per la votazione post-evento
- Statistiche sulle prenotazioni e sugli eventi confermati

### Per gli utenti:
- Profilo personale con dati e data prevista matrimonio
- Gestione lista prenotazioni
- Sezione per inserire token e lasciare voto

## Tecnologie utilizzate
- React.js
- React Router DOM per la navigazione
- React Bootstrap per componenti UI e layout responsive

## Struttura del progetto
- `App.js` - Configurazione delle rotte principali
- `/pages` - Cartella contenente tutte le pagine (LocationProfile, MenuEditor, ShowcaseEditor, BookingManager, StatsPage, UserProfile, ReservationList, TokenVote)

## Come avviare il progetto

1. Clona il repository
   ```bash
   git clone https://github.com/tuo-utente/wedding-app.git
   ```
2. Installa le dipendenze
   ```bash
   npm install
   ```
3. Avvia il server di sviluppo
   ```bash
   npm start
   ```

## Note
- Al momento i dati sono gestiti in stato locale React (useState).
- Per produzione è necessario integrare API backend per persistenza dati, autenticazione e sicurezza.
- Le immagini devono essere caricate tramite URL.
- La generazione token è dimostrativa, da migliorare con logica backend.

---

Creato con ❤️ da [Tuo Nome]
