


const divs = Array.from(document.getElementsByClassName("divs"))
// div.style.backgroundColor = "red";

// setTimeout(() => { div.style.backgroundColor = "red"; }, 1000);



// let conteur = 0;
// let couleur = "red";

// const change_color = setInterval(() => {
//     if (couleur === "red") {
//         div.style.backgroundColor = "blue";
//         couleur = "blue"
//     } else {
//         div.style.backgroundColor = "red";
//         couleur = "red"
//     }
//     conteur++;
//     console.log(conteur)
//     if (conteur === 20) {
//         clearInterval(change_color)
//     }
// }, 1000);






for (let i = 0; i < divs.length; i++) {
    console.log(divs);
    setTimeout(() => {
        divs[i].style.backgroundColor = "red";
        divs[i + 1].style.backgroundColor = ""
    }, 1000);
}