const listOfMethods =['Agile', 'Human Centered Design', 'Design Thinking', 'Research', 'User Experience Design', 'Growth Mindset'];
const loopOfText = document.getElementById("loopText");

// const drawText = (arrayListOfMethods) => {
//     const sectionLoop = loopOfText;
//     sectionLoop.innerHTML = "";
//     arrayListOfMethods.map((listOfMethods) =>{
//         sectionLoop.innerHTML += `
//         `
//     })
// }


count = 0
const printMethods = () => {
    //for(let count = 0; i < listOfMethods.length; i++) {
        loopOfText.innerHTML = listOfMethods[count]
        count ++
        if(count > 5){
            count = 0
        }
    //}
}
setInterval(() =>{
    printMethods();
},1600)



// En el h3 quiero iterar el arrar listOfMethhods para que cada 5 segundos aparezca cada el contenido
// de este array 
// H3 con ID
// Recorrer el array
// Que pasen 5 segundos y aparezca el siguiente
// Sobreeescibir el h3
// Que sea un loop

