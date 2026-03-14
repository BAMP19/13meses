function iniciar(){
document.getElementById("popup").style.display="none"
document.getElementById("musica").play()
lanzarFuegos()
}



const texto = "Hace 13 meses comenzó una historia que nunca imaginé que sería tan especial, que seria lo mejor de vida, gracias por cada risa, cada abrazo y cada momento juntos, contigo aprendí que el amor es verdadero y que ni la distancia puede afectar esto tan monito y real 💕"

let i=0

function escribir(){
if(i < texto.length){
document.getElementById("mensaje").innerHTML += texto.charAt(i)
i++
setTimeout(escribir,40)
}
}

escribir()



const inicio = new Date("2025-02-14") 

function contador(){

let ahora = new Date()
let diff = ahora - inicio

let dias = Math.floor(diff/(1000*60*60*24))
let horas = Math.floor(diff/(1000*60*60)%24)

document.getElementById("contador").innerText =
"Llevamos juntos "+dias+" días y "+horas+" horas 💕"

}

setInterval(contador,1000)

/* BOTON FINAL */

function respuesta(){

document.getElementById("card").innerHTML = `
<h1>💕Gracias por estos 13 meses💕</h1>
<p>Prometo seguir construyendo momentos contigo.</p>
<p>Te amo infinitamente </p>
`

lanzarFuegos()

}

/* CORAZONES */

setInterval(()=>{

let heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="💕"

heart.style.left=Math.random()*100+"vw"
heart.style.top=Math.random()*100+"vh"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),5000)

},800)

/* MUCHOS FUEGOS ARTIFICIALES */

function lanzarFuegos(){

for(let i=0;i<120;i++){

setTimeout(()=>{

let fire=document.createElement("div")
fire.className="firework"

fire.style.left=Math.random()*100+"vw"
fire.style.top=Math.random()*100+"vh"

document.body.appendChild(fire)

setTimeout(()=>fire.remove(),1000)

},i*30)

}

}