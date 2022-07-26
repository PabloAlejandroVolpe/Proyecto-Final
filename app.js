let seleccionarCantidad;
let total = 0;
let cantidadCuotas;
alert("Bienvenido a <TodoSushi>");
let seleccionarProductos = Number(
  prompt(
    `Ingrese la opcion del producto que desea llevar\n1-Nigiris x12 $3000 \n2-Rolls Comunes x12 $1500 \n3-Geishas x12 $5000 \n4-Rolls Premiun x12 $6000 `));

cantidad = (cant, precio) => cant * precio;

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Nigiris x12, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 3000);

      break;
    case 2:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Rolls comunes x12, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 1500);

      break;
    case 3:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Geishas x12, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 5000);

      break;
    case 4:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Rolls Premium x12, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 6000);

      break;

    default:
      alert("Debe ingresar un numero valido");
      break;
  }
  seleccionarProductos = Number(
    prompt(
      `Ingrese la opcion del producto que desea llevar\n1-Nigiris x12 $3000 \n2-Rolls Comunes x12 $1500 \n3-Geishas x12 $5000 \n4-Rolls Premiun x12 $6000\nó 0 para finalizar compra.`
    )
  );
}

alert(`El total de la compra es $${total}`);

function retira() {
  let pregunta = Number(
    prompt(
      `seleccione metodo de entrega\n1: retiro en local \n2: Envio a domicilio `));
  if (pregunta === 1) {
    metodoDePago();
  } else if (pregunta === 2) {
    envio();
  } else {
    retira();
  }
}
//CREO UNA FUNCION PARA EL ENVIO, SUPERANDO LOS $10.000 ES GRATIS, SINO TIENE UN COSTO DE $500.
function envio() {
  if (total <= 0) {
    seleccionarProductos;
  } else if (total >= 10000) {
    alert("El envio es gratuito");
    metodoDePago();
  } else {
    total += 500;
    alert(`el costo de envio es de $500, el total es: $${total}`);
    metodoDePago();
  }
}
//CREO UNA FUNCION PARA EL METODO DE PAGO
//PAGANDO CON TARJETA TIENE UN INTERESES, Y EN EFECTIVO UN DESCUENTO
function metodoDePago() {
  alert(`Abonando en EFECTIVO 10% OFF`);
  let metodo = Number(
    prompt("ingrese el metodo de pago: \n1-Tarjeta  \n2-Efectivo")
  );
  if (metodo == 1) {
    let cuotas = Number(prompt("ingrese cantidad de cuotas: 3 - 6 - 12"));

    if (cuotas === 3) {
      let total1 = (total * 12) / 100;
      total2 = total1 + total;
      total3 = (total2 / 3).toFixed(1);
      alert(`El total a pagar es $${total2} en 3 cuotas de $${total3}`);
    } else if (cuotas === 6) {
      let total1 = (total * 18) / 100;
      total2 = total1 + total;
      total3 = (total2 / 6).toFixed(1);
      alert(`El total a pagar es $${total2} en 6 cuotas de $${total3}`);
    } else if (cuotas === 12) {
      let total1 = (total * 30) / 100;
      total2 = total1 + total;
      total3 = (total2 / 12).toFixed(1);
      alert(`El total a pagar es $${total2} en 12 cuotas de $${total3}`);
    } else {
      alert("ERROR!! Vuelva a intentar");
      metodoDePago();
    }
  } else if (metodo == 2) {
    let subtotal = (total * 10) / 100;
    subtotal = total - subtotal;
    alert(`tenes un descuento del 10%, el total es: $${subtotal}`);
  } else {
    metodoDePago();
  }
}

retira();

alert("Gracias por comprar en\n<TodoSushi>");