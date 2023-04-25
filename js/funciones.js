//let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
document.getElementById("stats").style.display = "none";
div3.style.display = "none";

let oro = document.getElementById("oro");
let contadorAtaque = 0;
let contadorAsesinatos = 0;
let lblVidaEnemigo = document.getElementById("vidaEnemigo");
let lblContadorAsesinatos = document.getElementById("contadorAsesinatos");
let lblNombreEnemigo = document.getElementById("nombreEnemigo");

let nombreJugador = "";
let yo = null;
let enemigo = null;

function iniciar() {
  div2.style.display = "none";
  div3.style.display = "block";
  document.getElementById("stats").style.display = "block";

  nombreJugador = document.getElementById("nombreJugador").value;

  yo = new Jugador(nombreJugador);
  document.getElementById("fuerzaJugador").value = yo.fuerza;
  enemigo = new Mostro();
  lblVidaEnemigo.value = enemigo.vida;
  lblNombreEnemigo.value = enemigo.nombre;
}

function cliquea() {
  contadorAtaque++;
  enemigo.vida -= yo.fuerza;
  bEstaMuerto();
  actualizarDatos();
}

function masFuerza() {
  yo.fuerza++;
  document.getElementById("fuerzaJugador").value = yo.fuerza;
}

function actualizarDatos() {
  lblVidaEnemigo.value = enemigo.vida;
  lblContadorAsesinatos.value = contadorAsesinatos;
}

function bEstaMuerto() {
  if(enemigo.vida <= 0) {
    contadorAsesinatos++;
    if(contadorAsesinatos % 3 == 0) {
      enemigo = new Jefe("Boss Culencio");
    } else {
      enemigo = new Mostro();
    }
    lblNombreEnemigo.value = enemigo.nombre;
  }
}