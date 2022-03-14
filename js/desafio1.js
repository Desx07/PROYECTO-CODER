let step = parseInt(prompt("Ingrese la cantidad de pasos del 1 al 10, para acercarse al destino."));

while (step != 0) {

    if (step >= 1 && step <= 10) {
        for (let  N = 1; N <= step; N++) {
            if (step != 0)
          if (step2 = step + 1 - N) 
          {alert("Queda poco para llegar a destino," + " siga." + " Pasos restantes "+step2+".")};
        }
    } else {
        alert("Ingrese 0 para detener la ubicación.");
    }
    step = parseInt(prompt("Ingrese 0 para detener la ubicación."));
}
alert("Ah llegado a destino.");