// 1-chiedi all’utente il cognome,
var cognome = prompt('inserisci il tuo cognome qui.');
// 2-inseriscilo in un array con altri cognomi,

var cognomi = ['Rossi','Verdi','Grossi','Geppi','Cracco','Barbieri'];
cognomi.push(cognome);
cognomi.sort();

// 3-stampa la lista ordinata alfabeticamente (in html ul > li).
// CICLO FOR
// for (var i = 0; i < cognomi.length; i++) {
//   document.getElementById('cognomi').innerHTML += '<li>' + (i+1) + ' ' + cognomi[i] + ' ' + '</li>';
// }
// CICLO WHILE
var i = 0;
while (i < cognomi.length) {
  document.getElementById('cognomi').innerHTML += '<li>' + (i+1) + ' ' + cognomi[i] + ' ' + '</li>'
  i++
}
// 4-Scrivi anche la posizione della lista in cui il nuovo utente si trova.
var posizione = cognomi.indexOf(cognome);
console.log(posizione);
document.getElementById('posizione').innerHTML = 'La tua posizione è la seguente : ' + (posizione + 1);
