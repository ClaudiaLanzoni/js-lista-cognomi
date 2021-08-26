/*Consegna:
1- chiedi all’utente il cognome
2- inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3- stampa la lista ordinata alfabeticamente
4- scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.*/



let arrayCognomi = ['Tanassi', 'Cremonini', 'Zanacchi', 'Lanzoni']; //array di cognomi già esistente

let cognomeUtente = prompt("Qual é il suo cognome?"); //chiedo all'utente il suo cognome

arrayCognomi.push(cognomeUtente);   //inserisco input utente nell'array
    
for (var i = 0 ; i < arrayCognomi.length ; i++){    //per evitare che non funzioni con minuscola, 
                                                    //metto maiuscole tutte le prime lettere degli elem dell'array

    arrayCognomi[i] = arrayCognomi[i].charAt().toUpperCase() + arrayCognomi[i].slice(1);
}

nuovaListaCognomi = arrayCognomi.sort(); //metto in ordine alfabetico gli elementi dell'array


for (i = 0; i<nuovaListaCognomi.length; i++){   //stampo la lista in ordine alfabetico degli elementi dell'array
                                                //se metto i = 1 con i<= non scrive cognomeUtente
                                                //se metto i = 1 con i< mi salva le posizioni da 2 a 6 con l'ultima "undefined"
                                                //se metto i = 0 con i<= salva una posizione in più "undefined"

    //console.log((i + 1) + " " + nuovaListaCognomi[i]); //stampa lista cognomi numerata
    console.log(nuovaListaCognomi[i])

}

let uppercaseCognomeUtente = cognomeUtente.charAt().toUpperCase() + cognomeUtente.slice(1);

console.log("Questa è la posizione in lista del cognome utente" + ": " + (nuovaListaCognomi.indexOf(uppercaseCognomeUtente) + 1));



  





