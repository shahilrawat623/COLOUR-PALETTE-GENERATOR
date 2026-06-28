const button = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector("#Palette-container");

button.addEventListener("click",generatePalette);

function generatePalette(){
    const colours = []

    for(i=0;i<5;i++){
        colours.push(generateRandomColours())    
    }
    updatePalette(colours);
}

function generateRandomColours(){
    const letters = "123456789ABCDEFGH";
    let colour = "#";

    for(let i=0;i<6;i++){
        colour += letters[Math.floor(Math.random() * 16)]
    }
    return colour;
}

function updatePalette(colours){
    const boxes = document.querySelectorAll(".colour-box");
    boxes.forEach((box,index)=>{

        const color = colours[index]
        const colourDiv= box.querySelector(".colour")
        const hexDiv = box.querySelector(".hex-value")
        colourDiv.style.backgroundColor = color;
        hexDiv.textContent= color;
    })
}



