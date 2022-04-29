const addMovieModal = document.getElementById("add-modal");
const startAddMovieModal = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const buttonCancel = document.getElementsByClassName("btn");


// startAddMovieModal.addEventListener('click',() => {
//     addMovieModal.style.display = 'block';
//     backdrop.style.display = 'block';


// });

document.addEventListener ('click', (event) => {
    if(event.target === startAddMovieModal){
    addMovieModal.style.display = 'block';
    backdrop.style.display = 'block';

    }
    
    else if (
        event.target.matches(".btn--passive") ||
        !event.target.closest("#add-modal")
    ) {
        closeModal()
    }
}
);

function closeModal(){
    document.querySelector("#add-modal").style.display = "none"
    backdrop.style.display = 'none';
}

// -------------------------------------------

// let variable;
// console.log(variable);

// let gqhqihj = true
// window.alert(gqhqihj);

// let lastname = "goe"
// let firstname = "doe"
// let city = "gabon"
// window.alert("Nom : " + lastname + "\nPrénom:" + firstname + "\nville :" + city) 


// let result = prompt("Bonjour") 

// console.log(result);


// function calcul(number, gf) {

//     let resulat = number*2-3
//     console.log(resulat);
//     window.alert(resulat)

// }

// let nombre= 69
// calcul(nombre)

// let calcul3 = 50
// calcul(calcul3)

// function devision(legume1, legume2){
//     let resulat = legume1 % legume2
// window.alert(resulat)

// }

// let carottes = 12
// let salades = 6

// devision(carottes, salades)


// let patate = 15
// let haricot = 6

// devision(patate, haricot)


// let fff = 18
// let rrr = 15 

// calcul(fff, rrr)


// function oper () {

//     let resultat = nombre*2-3
//     window.alert(resultat);

// }
// let nombre =57
// oper ();



// function multi (nombre){
//     let calcul= nombre * 10
//     console.log(calcul);
// }

