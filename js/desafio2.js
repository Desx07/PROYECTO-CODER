let producto;

function Producto(nombre, dato, precio, iva, descuento) {
    this.nombre = nombre.toUpperCase();
    this.dato = dato.toUpperCase();
    this.precio = parseInt(precio);
    this.iva = parseInt(iva);
    this.descuento = parseInt(descuento);
    this.calculo = function () {

        let iva = (this.precio * this.iva) / 100;
        let precioConIva = this.precio + iva;
        let descuento = (precioConIva * this.descuento) / 100;
        let precioTotal = precioConIva - descuento;
        let detalle = document.write("<br>" + "producto seleccionado: " + "<br>" + "<b>" + this.nombre + " " + dato + "<br>" + "</b>" + " Precio: $" + "<b>" + this.precio + "</b>" + "<br>" + "El precio mas el iva del 21% es: $" + "<b>" + precioConIva + "<br>" + "</b>" + "El precio total con el descuento del " + this.descuento + "% es: $" + "<b>" + precioTotal + "</b>" + "<br>");
        return detalle
    }
}
function Mostrarmonitor(){
    if (document.getElementById("blanco").selected == true) {
        document.getElementById("Pcs").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("blanco1").style.display = "block";
        
    }

    if (document.getElementById("opcion1").selected == true) {
        document.getElementById("Pcs").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("blanco1").style.display = "none";
        document.getElementById("texto1").style.display = "block";
        document.getElementById("Objetos1").style.display = "block";
        document.getElementById("b2").style.display = "none";
        console.log("Has seleccionado Opcion 1");
        

    } else if (document.getElementById("opcion2").selected == true) {

        document.getElementById("blanco1").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("texto2").style.display = "block";
        document.getElementById("Objetos1").style.display = "block";
        console.log("Has seleccionado Opcion 2");
        document.getElementById("Pcs").style.display = "none";
       
    } else if (document.getElementById("opcion3").selected == true) {
        document.getElementById("Pcs").style.display = "none";
        document.getElementById("blanco1").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "block";
        document.getElementById("Objetos1").style.display = "block";
        console.log("Has seleccionado Opción 3");
        

    } 

}