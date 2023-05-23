// ES 1: Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso bello come Charizard).
//   Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

// let garage = { 
//     'automobili': [
//         {'marca': 'Fiat', 
//         'modelli': ['Pandino tattico rosso bello come Charizard', 'Bravo auto dei carabinieri', 'Multipla la più bella del mondo']},
//         {'marca': 'Bugatti', 
//         'modelli': ['Veyron veloce come un pandino in austrada', "Voiture Noire l'auto più scomoda al mondo"]},
//         {'marca': 'Alfa Romeo', 
//         'modelli': ['Giulietta la macchina per rimorchiare se hai più di 25 anni', 'Mito la macchina per rimorchiare se hai meno di 25 anni', 'Giulia la macchina per chi vuole schiantarsi in rotonda']}
//     ],
//     'auto' : function (marchio) {
//         this.automobili.forEach((auto) => {
//             if(auto.marca.toLowerCase() == marchio.toLowerCase()){
//                 console.log(auto.modelli);
//             } 
//         })
//     }
// }
// garage.auto('fiat')



// EXTRA:   creare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovrà ciclare tutti i giocatori presenti nell’oggetto bowling, e aggiungere ad ogni proprietà scores, dieci punteggi casuali ad ogni giocatore
// Utilizzare l’istruzione per generare un punteggio casuale da 1 a 10: Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples)
// aggiungere un nuovo giocatore
// determinare il vincitore
// Dati di partenza:

let bowling = {
    'players': [
        {'name': 'Benny', 'scores': []},
        {'name': 'Federico', 'scores': []},
        {'name': 'Loris', 'scores': []},
        {'name': 'Pippo', 'scores': []}
    ],
    'addPlayer' : function(nome, punti){
        this.players.push({'name': nome, 'scores': punti }); 
    },
    'punteggio' :function() {
        this.players.forEach(player => { 
            for (let i = 1 ; i <= 10 ; i++) {
                player.scores.push( Math.floor(Math.random() * (10 - 1 +1) + 1));
            }      
        });
    },
    'punteggioFinale' : function () {
        this.players.forEach(player => {
            let total = player.scores.reduce((accumulatore, elemento) => accumulatore + elemento)
            player.scores=total
            console.log(player.scores);
        })
} ,
    'winner' : function() {
        let winner = this.players[0];
        this.players.forEach(player => {
            if (player.scores > winner.scores ) {
                winner = player
            }
        })
        console.log(winner);
    }
}
bowling.addPlayer('Francesco' , [])
bowling.punteggio()
bowling.punteggioFinale()
bowling.winner()
console.log(bowling.players);
