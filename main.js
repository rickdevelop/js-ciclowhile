
var cognomi_lista = ['topolino', 'drinkwater', 'bale', 'marcelo', 'brazov', 'berga', 'the rock', 'ronaldo', 'politano','storti','ajeje'];

var nuovo_cognome = prompt('scrivi il tuo cognome');

var cognome_trovato, a , ordine_cognomi, sommario;

cognome_trovato = false;
a = 0;
while (a < cognomi_lista.length && !cognome_trovato) {
  if (nuovo_cognome === cognomi_lista[a]) {
    cognome_trovato = true;
  }a++;

}
if (cognome_trovato) {
  console.log('sei già presente nella lista!');

} else {

  cognomi_lista.push(nuovo_cognome);

  ordine_cognomi = cognomi_lista.sort();

  sommario = ordine_cognomi.indexOf(nuovo_cognome);

  console.log ('Il cognome è stato inserito nella posizione: ' + sommario);

}

console.log(cognomi_lista.sort());
