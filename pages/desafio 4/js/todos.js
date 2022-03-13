// Array de productos
const productos = {
  producto1: {
    nombre:"Greymon",
    precio: '1350',
    descripcion: 'Un Digimon dinosaurio cuya piel craneal se ha endurecido de manera que se cubre en un caparazón como de escarabajo rinoceronte. ',
    srcImg: 'https://static.wikia.nocookie.net/digimon/images/5/56/Greymon_b.jpg/revision/latest?cb=20120506134026'
  },
  producto2: {
    nombre: 'Devimon',
    precio: '1750',
    descripcion: 'Un Digimon Ángel Caído, su origen era de los Digimon de las especies Angemon, se convirtió en un ángel caído cuando cayó al Área Oscura, en la que existe una distorsión espacial del Mundo Digital.',
    srcImg: 'https://static.wikia.nocookie.net/digimon/images/9/9a/Devimon_b.jpg/revision/latest/scale-to-width-down/320?cb=20120212210014'
  },
  producto3: {
    nombre:"Bidramon",
    precio: '1350',
    descripcion: 'Un Digimon Ave Gigante que tiene un aspecto envuelto en llamas ardientes. Al igual que Meramon, es un Digimon que se generó a partir del "Firewall" defensivo de Internet.',
    srcImg: 'https://static.wikia.nocookie.net/digimon/images/8/8e/Birdramon_b.jpg/revision/latest/scale-to-width-down/320?cb=20150411112412'
  },
  producto4: {
    nombre:"Angemon",
    precio: '1850',
    descripcion: 'Un Digimon Ángel con seis alas brillantes, cuyo cuerpo está recubierto de tela blanca pura como para ser divina.',
    srcImg: 'https://static.wikia.nocookie.net/digimon/images/0/08/Angemon_b.jpg/revision/latest?cb=20130126150556'
  },
  producto5: {
    nombre:"Darcmon",
    precio: '1350',
    descripcion: 'Un Digimon Ángel de bajo rango que tiene la apariencia de una mujer. Su figura que siempre se corta a través de la vanguardia a la batalla.',
    srcImg: 'https://static.wikia.nocookie.net/digimon/images/c/ce/Darcmon_b.jpg/revision/latest?cb=20200513211737'
  },
  producto6: {
    nombre:"Omegamon",
    precio: '2500',
    descripcion: 'Un Digimon Caballero Santo y un miembro de los Caballeros Reales, es el producto de la fusión de los Cazadores de Virus WarGreymon y MetalGarurumon.',
    srcImg: 'https://static.wikia.nocookie.net/digimon/images/2/22/Omegamon_b.jpg/revision/latest?cb=20200514183308&path-prefix=es'
},}
// Se captura el template de los productos
const templateProd = document.getElementById('template-prod').content
const contenedorProd = document.querySelector('.contenedor-productos')
const fragment = document.createDocumentFragment()


// TODO LO RELACIONADO A AGREGAR LOS PRODUCTOS AL DOM
Object.values(productos).forEach( producto => {
  templateProd.querySelector('.div-info .nombre-prod').textContent = producto.nombre
  templateProd.querySelector('.div-precio-boton .precio').textContent = producto.precio
  templateProd.querySelector('.div-info .descripcion-prod').textContent = producto.descripcion
  templateProd.querySelector('.contenedor-img img').setAttribute('alt', producto.nombre)
  templateProd.querySelector('.contenedor-img img').setAttribute('src', producto.srcImg)
  const clone = templateProd.cloneNode(true)
  fragment.appendChild(clone)
})
contenedorProd.appendChild(fragment)

// TODO LO RELACIONADO AL CARRITO DE COMPRA
let carrito = {}
const templateTabla = document.getElementById('agregar-producto-al-carro').content
const tbodyCarrito = document.getElementById('carrito-body')
const fragmentTabla = document.createDocumentFragment()
const templateFoot = document.getElementById('tfooter').content
const tfootCarrito = document.getElementById('footer')

contenedorProd.addEventListener('click', e => {
  
  if(e.target.textContent === "Agregar") {
    setCarrito(e.target.parentElement.parentElement)
  }
  e.stopPropagation();
})
const setCarrito = e => {
  const pivoteCarrito = {
    nombre: e.querySelector('.div-info .nombre-prod').textContent,
    precio: e.querySelector('.div-precio-boton .precio').textContent,
    cantidad: 1
  }
  if(carrito.hasOwnProperty(pivoteCarrito.nombre)){
    carrito[pivoteCarrito.nombre].cantidad += 1
  } else {
    carrito[pivoteCarrito.nombre] = {...pivoteCarrito}
  }
  pintarTabla(carrito)
}

const pintarTabla = objetoCarrito => {
  Object.values(objetoCarrito).forEach( objeto => {
    const cloneTabla = templateTabla.cloneNode(true)
    cloneTabla.getElementById('producto').textContent = objeto.nombre
    cloneTabla.getElementById('cant').textContent = objeto.cantidad
    cloneTabla.getElementById('precio-uni').textContent = objeto.precio
    let precioTotal = parseFloat(objeto.precio) * objeto.cantidad
    cloneTabla.getElementById('precio-total-prod').textContent = precioTotal.toFixed(2)
    fragmentTabla.appendChild(cloneTabla)
  })
  tbodyCarrito.innerHTML = ''
  tbodyCarrito.appendChild(fragmentTabla)
  pintarFooter()
}
const pintarFooter = () => {
  tfootCarrito.innerHTML = ''
  if(Object.keys(carrito).length === 0) {
    tfootCarrito.innerHTML = '<tr><td colspan = 4>¡No hay ningun elemento en el carrito!</td></tr>'
  } else {
    const total = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio),0)
    templateFoot.getElementById('total-a-pagar').textContent = total.toFixed(2)
    const cloneFoot = templateFoot.cloneNode(true)
    fragment.appendChild(cloneFoot)
    tfootCarrito.appendChild(fragment)
    //Boton Vaciar carrito
    const botonVaciar = document.getElementById('vaciar-tabla')
botonVaciar.addEventListener('click', () => {
      carrito = {}
      pintarTabla(carrito)
      pintarFooter()
    })
    
    //Botones aumentar y disminuir cantidades
    
  }
}
tbodyCarrito.addEventListener('click', e => {
  
  if(e.target.classList.contains('button')) {
    aumentarDisminuir(e.target)
  }
})
const aumentarDisminuir = boton => {
  if(boton.textContent === '+'){
    const indicador = boton.parentElement.parentElement.firstElementChild.textContent
    Object.values(carrito).forEach( elemento => {
      if(elemento.nombre === indicador) {
      carrito[elemento.nombre].cantidad++  
      }
    })
  }
  if(boton.textContent === '-') {
    const indicador = boton.parentElement.parentElement.firstElementChild.textContent
    Object.values(carrito).forEach( elemento => {
      if(elemento.nombre === indicador) {
      carrito[elemento.nombre].cantidad--
        if(carrito[elemento.nombre].cantidad === 0) {
          delete carrito[elemento.nombre]
        }
      }
    })
  }
  pintarTabla(carrito)
  pintarFooter()
}
function Mostrarmonitor(){
     alert("Su compra fue realizada, muchas gracias por usar nuestros servicios.")
        
    }



