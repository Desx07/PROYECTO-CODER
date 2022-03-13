class skin {
    constructor(skin) {
        this.id = skin.id;
        this.digimon = skin.digimon;
        this.tipo = skin.tipo;
        this.precio = skin.precio;
        this.cantidad = 1;
        this.precioTotal= skin.precio;
    }
    agregarUnidad(){
        this.cantidad++;
    }
    quitarUnidad(){
        this.cantidad--;
    }
    actualizarPrecioTotal(){
        this.precioTotal= this.precio * this.cantidad;
    }
}

const skins = [
    {
        id:0,
        digimon:"Greymon",
        tipo: "Dinosaurio",
        precio: 1350,
    },
    {
        id:1,
        digimon:"Devimon",
        tipo: "Angel caido",
        precio: 1750,
    },
    {   id:2,
        digimon:"Bidramon",
        tipo: "Ave Gigante",
        precio: 1350,
    },
    {
        id:3,
        digimon:"Angemon",
        tipo: "Angel de luz",
        precio: 1850,
    },
    {   
        id:4,
        digimon:"Gigadramon",
        tipo: "Cyborg",
        precio: 1650,
    },
    {
        id:5,
        digimon:"Darcmon",
        tipo: "Diosa de batalla",
        precio: 1350,
    },
    {
        id:6,
        digimon:"Omegamon",
        tipo: "Caballero santo",
        precio: 2500,
    },
];

let carrito=[];
let precioTotal;

function menuCompras() {
    let idProduct = prompt(`
    Escriba el N° del producto, o escriba "EXIT" para finalizar la compra
    0: ${skins[0].digimon}, Descripción: ${skins[0].tipo}, Precio: ${skins[0].precio} Darcana
    1: ${skins[1].digimon}, Descripción: ${skins[1].tipo}, Precio: ${skins[1].precio} Darcana
    2: ${skins[2].digimon}, Descripción: ${skins[2].tipo}, Precio: ${skins[2].precio} Darcana
    3: ${skins[3].digimon}, Descripción: ${skins[3].tipo}, Precio: ${skins[3].precio} Darcana
    4: ${skins[4].digimon}, Descripción: ${skins[4].tipo}, Precio: ${skins[4].precio} Darcana
    5: ${skins[5].digimon}, Descripción: ${skins[5].tipo}, Precio: ${skins[5].precio} Darcana
    6: ${skins[6].digimon}, Descripción: ${skins[6].tipo}, Precio: ${skins[6].precio} Darcana`);
    
    while( idProduct !== "EXIT" && idProduct !== "Exit" && idProduct !== "exit"){
        alert(`Se ha añadido su Skin al carrito ${skins[idProduct].digimon}`);

        let skinCarrito = carrito.find((elemento)=> {
            if (elemento.id == idProduct) {
                return true;
            }
        });
    
    if (skinCarrito) {
        let indice = carrito.findIndex((elemento)=> {
            if (elemento.id === skinCarrito.id){
                return true;
            }
        });
        carrito[indice].agregarUnidad();
        carrito[indice].actualizarPrecioTotal();
    }else {
        carrito.push(new skin(skins[idProduct]));
    }

    idProduct = prompt(`
        Escriba el N° del producto, o escriba "EXIT" para finalizar la compra
        0: ${skins[0].digimon}, Descripción: ${skins[0].tipo}, Precio: ${skins[0].precio} Darcana
        1: ${skins[1].digimon}, Descripción: ${skins[1].tipo}, Precio: ${skins[1].precio} Darcana
        2: ${skins[2].digimon}, Descripción: ${skins[2].tipo}, Precio: ${skins[2].precio} Darcana
        3: ${skins[3].digimon}, Descripción: ${skins[3].tipo}, Precio: ${skins[3].precio} Darcana
        4: ${skins[4].digimon}, Descripción: ${skins[4].tipo}, Precio: ${skins[4].precio} Darcana
        5: ${skins[5].digimon}, Descripción: ${skins[5].tipo}, Precio: ${skins[5].precio} Darcana
        6: ${skins[6].digimon}, Descripción: ${skins[6].tipo}, Precio: ${skins[6].precio} Darcana`);
}
}

function obtPrecioTotal() {
    let precioTotal= 0;

    for(const product of carrito){
        precioTotal += product.precioTotal;
    }

    return precioTotal;
}

menuCompras();
precioTotal= obtPrecioTotal();

alert(`El precio total de tu compra es de ${precioTotal} Darcana
        Gracias por utilizar nuestra tienda`);