// 1-chiedi all’utente il cognome,
var cognome = prompt('inserisci il tuo cognome qui.');
// 2-inseriscilo in un array con altri cognomi,

var cognomi = ['Rossi','Verdi','Grossi','Geppi','Cracco','Barbieri'];
cognomi.push(cognome);
console.log(cognomi.sort());


for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('cognomi').innerHTML = 
}
// 3-stampa la lista ordinata alfabeticamente (in html ul > li).
// 4-Scrivi anche la posizione della lista in cui il nuovo utente si trova.
