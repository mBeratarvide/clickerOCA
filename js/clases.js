class SerDigital {
  constructor(nombre) {
    this.nombre = nombre;
  }
  atacar() {
    if (this.puedeAtacar) {
      console.log("daño: " + 1 * this.fuerza);
    }
  }
}

class Jugador extends SerDigital {
  constructor(nombre) {
    super(nombre);
    this.vida = 10;
    this.fuerza = 1;
    this.puedeAtacar = true;
  }
}

class Mostro extends SerDigital {
  constructor() {
    super(nombres[Math.floor(Math.random() * 4)]);
    this.vida = 10;
    this.fuerza = 1;
    this.puedeAtacar = false;
  }
}

class Jefe extends SerDigital {
  constructor(nombre) {
    super(nombre);
    this.vida = 25;
    this.fuerza = 5;
    this.puedeAtacar = true;
  }
}

// nombres
let nombres = [
   "Peperino"
  ,"Alcalde de Albuquerque"
  ,"Nicanor Medina"
  ,"La ElFa Fafa"
];


/*
var SerDigital = function(nombre) {
  this.nombre = nombre;
};

var Jugador = function(nombre) {
  SerDigital.call(this, nombre);
  this.vida = 10;
  this.fuerza = 1;
  this.puedeAtacar = true;
};

Jugador.prototype = Object.create(SerDigital.prototype);
Jugador.prototype.constructor = Jugador;

var Mostro = function(nombre) {
  SerDigital.call(this, nombre);
  this.vida = 10;
  this.fuerza = 1;
  this.puedeAtacar = false;
};

Mostro.prototype = Object.create(SerDigital.prototype);
Mostro.prototype.constructor = Mostro;

var Jefe = function(nombre) {
  SerDigital.call(this, nombre);
  this.vida = 25;
  this.fuerza = 5;
  this.puedeAtacar = true;
};

Jefe.prototype = Object.create(SerDigital.prototype);
Jefe.prototype.constructor = Jefe;

SerDigital.prototype.atacar = function() {
  if(this.puedeAtacar) {
    console.log("daño: " + 1*this.fuerza);
  }
}
*/