// lista Cognomi
var listaCognomi = ['Kubril', 'Taranvino', 'Scozzese', 'Noban'];
console.log(listaCognomi);
// Chiedo all’utente il cognome,
var cognomeUtente = prompt('Inserisci il tuo cognome').toUpperCase();
while (cognomeUtente.length <= 0) {
  var cognomeUtente = prompt('Inserisci il tuo cognome').toUpperCase();
}
console.log(cognomeUtente);
// aggiungo cognome utente alla lista
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);
// ordino lista alfabeticamente
listaCognomi.sort();
for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('lista_cognomi').innerHTML += '<li>' + listaCognomi[i] + '</li>';
}
// posizione del cognome utente nella lista
var posizioneCognome = listaCognomi.indexOf(cognomeUtente) + 1;
document.getElementById('posizione').innerHTML = posizioneCognome;
