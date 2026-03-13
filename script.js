function iniciarSorpresa(){
document.getElementById("popup").style.display="none"
document.getElementById("musica").play()
iniciarFuegos()
}

/* CONTADOR */
const fechaInicio = new Date("2025-02-13") // CAMBIA ESTA FECHA

function actualizarContador(){
const ahora = new Date()
const diferencia = ahora - fechaInicio

const dias = Math.floor(diferencia / (1000*60*60*24))
const horas = Math.floor((diferencia / (1000*60*60)) % 24)

document.getElementById("contador").innerText =
"Llevamos juntos " + dias + " días y " + horas + " horas ❤️"
}

setInterval(actualizarContador,1000)

/* TEXTO TIPO CARTA */
const texto = "Gracias por estos 13 meses tan hermosos. Eres mi sueño, mi abrazo favorito y mi hogar. Como Snoopy siempre vuelve a su casita, yo siempre quiero volver a ti. ❤️"

let i=0
function escribir(){
if(i<texto.length){
document.getElementById("mensaje").innerHTML+=texto.charAt(i)
i++
setTimeout(escribir,40)
}
}
escribir()

/* BOTON NO QUE HUYE */
let noBtn=document.getElementById("noBtn")
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute"
noBtn.style.left=Math.random()*80+"%"
noBtn.style.top=Math.random()*80+"%"
})

/* RESPUESTA SI */
function respuestaSi(){
document.getElementById("respuestaFinal").innerText=
"Sabía que dirías que sí 😌❤️ Te amo infinitamente 🐶💕"
iniciarFuegos()
}

/* SNOOPY LANZA CORAZONES */
setInterval(()=>{
let snoopy=document.getElementById("snoopy")
let heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="❤️"

let rect=snoopy.getBoundingClientRect()
heart.style.left=rect.left+30+"px"
heart.style.top=rect.top+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),4000)
},900)

/* FUEGOS */
function iniciarFuegos(){
for(let i=0;i<30;i++){
setTimeout(()=>{
let fire=document.createElement("div")
fire.className="firework"
fire.style.left=Math.random()*100+"vw"
fire.style.top=Math.random()*100+"vh"
document.body.appendChild(fire)
setTimeout(()=>fire.remove(),1000)
},i*100)
}
}