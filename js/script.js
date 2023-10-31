/*MILESTONE 1 
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

-inizializzare vue in script.js
-dichiarare bariabile "todos" in "data()"
-stampare in html "todos" usando un "v-for" passando anche l'index
-usare operatore ternario in :class per stampare la class 'done' (se la proprietà 'done === true' -> aggiungi classe 'done')

Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

## MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- inizializzare vue in script.js
- dichiarare variabile `todos` in `data()`
- stampare in html `todos` 
- usare operatore ternario in :class per stampare la class `done` 

## MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

- aggiungere icona dentro ogni todo in html
- aggiungere un event click che esegue una funzione
- fare console log nella funzione per vedere se funziona
- funzione toglie oggetto cliccato dall'array `todos`

## MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

- creare nuova variabile in `data()` per valore dell'input
- aggiungere input in html e bottone per invio
- al click del bottone esegue funzione
- fare console log nella funzione per vedere se funziona
- la funzione crea un nuovo oggetto todo usando nuova variabile in data() e pusha dentro array `todos`
- svuotare input

1- oltre al click sul pulsante intercettare anche il tasto enter per aggiungere il todo alla lista
1- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente
(se done era uguale a false, impostare true e viceversa)

*/

const {createApp} = Vue;
createApp({
    data(){
        return {
            tasks: [
                {
                    id:1,
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    id:2,
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    id:3,
                    text: 'Telefonare a mamma',
                    done: false
                },
            ],
            idAdder: 3,
            addedText: ''
        }  
    },
    methods: {
        listRemove(index){
            this.tasks.splice(index,1)
        },
        addNewList(){
            this.idAdder++;
            const newTask = {
                id: this.idAdder,
                text: this.addedText,
                done:false
            }
            this.tasks.push(newTask);
            this.addedText = '';
        },
        listCheck(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
}).mount('#app');