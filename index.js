// document.querySelector('h4').style.background="yellow"
//  const baliseHTML = document.querySelector("h4");
//  console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

//click event----------------------------


const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");

const backdrop = document.querySelector(".backdrop");

backdrop.addEventListener('click',() => {
    backdrop.classList.toggle("backdrop")
})

btn1.addEventListener('click' , () => {
    text.style.color = 'blue'
    text.classList.toggle("text")
})
Théodore15:35
const monTitre = document.querySelector('h1');
const monBouton = document.querySelector('button');
const backdrop = document.querySelector('.backdrop');

monBouton.addEventListener('click', changerCouleur);
backdrop.addEventListener('click', backdropOff);

function changerCouleur(){
    monTitre.style.color = "blue";
}

function backdropOff (){
    backdrop.style.display = "none";
}

// questionContainer.addEventListener("click", () => {
//     questionContainer.classList.toggle("border");
    
    
// });


// btn1.addEventListener("click" , () => {
    
//     reponse.style.background = "green";
//     reponse.classList.toggle("para");
// })

// btn2.addEventListener("click" , () => {

//     reponse.style.background = "red";
//     reponse.classList.toggle("para");
    
// })



// //----------------------------------------
// const mousemove = document.querySelector(".mousemove")
// window.addEventListener ("mousemove", (e) => {
// mousemove.style.left = e.pageX + "px";
// mousemove.style.top = e.pageY + "px";

// });

// window.addEventListener("mousedown", () => {
//     console.log("test");
// })
// reponse.addEventListener('mouseover' , () => {
//     console.log("7777");
// } )