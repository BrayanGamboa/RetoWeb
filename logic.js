let descript =
  "Hola Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus totam laudantium reiciendis modi soluta et tempora in similique? Excepturi quia quidem maxime reprehenderit magni, ut veritatis libero repellendus impedit expedita?";
let productMoto = "";

//Creo una moto con todas sus especificaciones
let CRYPTON_FI = {
  nombre: "CRYPTON FI",
  precio: Number(6500000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/verde.png",
};
let Xmax_300 = {
  nombre: "Xmax 300",
  precio: Number(25500000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/09/xmax3.jpg",
};
let NMAX_155 = {
  nombre: "NMAX 155",
  precio: Number(11500000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/nmax-colores-20202-azul.jpg",
};
let SZRR_150 = {
  nombre: "SZRR 150",
  precio: Number(9090000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/sz_gris_verde-1.jpg",
};
let YBRZ_125 = {
  nombre: "YBRZ 125",
  precio: Number(7000000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/03/azul.png",
};
let FZ_VERSION_2_150 = {
  nombre: "FZ VERSIÓN 2 150",
  precio: Number(8800000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/fz-azul.jpg",
};
let FZ25_250 = {
  nombre: "FZ25 250",
  precio: Number(12500000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/08/fz25_negra.jpg",
};
let FZ_VERSION_2 = {
  nombre: "FZ VERSIÓN 2.0",
  precio: Number(8800000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/fz-gris.jpg",
};
let YCZ_110 = {
  nombre: "YCZ 110",
  precio: Number(5300000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/08/negro-rojo.png",
};
//Motos Enduro
let YZ_450F = {
  nombre: "YZ-450F",
  precio: Number(9190000),
  url: "https://www.yamahamotos.cl/wp-content/uploads/2019/10/YZ_450f_1.jpg",
};
let YZ_250F = {
  nombre: "YZ-250F",
  precio: Number(8590000),
  url: "https://www.yamahamotos.cl/wp-content/uploads/2019/10/YZ-250F-2-7.jpg",
};
let YZ_250_2T = {
  nombre: "YZ-250 (2T)",
  precio: Number(7190000),
  url: "https://www.yamahamotos.cl/wp-content/uploads/2019/10/YZ-250F-2-7.jpg",
};
let WR_250F = {
  nombre: "WR-250F",
  precio: Number(9090000),
  url: "https://www.yamahamotos.cl/wp-content/uploads/2019/10/YZ_450f_1.jpg",
};
let XTZ_150 = {
  nombre: "XTZ-150",
  precio: Number(8599000),
  url: "https://www.yamahamotos.cl/wp-content/uploads/2019/06/XTZ-01-negra.jpg",
};
let XTZ_125 = {
  nombre: "XTZ-125",
  precio: Number(6390000),
  url: "https://www.yamahamotos.cl/wp-content/uploads/2018/07/blanco-1.jpg",
};
let XTZ_250 = {
  nombre: "XTZ 250",
  precio: Number(19000000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2019/11/xtz250-2020-blanca.png",
};
let YZ_85LW = {
  nombre: "YZ 85LW",
  precio: Number(7090000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/2021_YZ85LW_DPBSE_JPN.jpg",
};
let TTR_110 = {
  nombre: "TTR 110",
  precio: Number(11500000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/ttr110E.jpg",
};

//Creo una function para llamar u obtener los valosres de cada moto
function _TTR_110() {
  productMoto = TTR_110;
  console.log(productMoto);
}
function _YZ_85LW() {
  productMoto = YZ_85LW;
}
function _XTZ_250() {
  productMoto = XTZ_250;
}
function _YZ_450F() {
  productMoto = JSON.stringify(YZ_450F);
  console.log("HOLA");
}
function _YZ_250F() {
  productMoto = YZ_250F;
}
function _YZ_250_2T() {
  productMoto = YZ_250_2T;
}
function _WR_250F() {
  productMoto = WR_250F;
}
function _XTZ_150() {
  productMoto = XTZ_150;
}
function _XTZ_125() {
  productMoto = XTZ_125;
}

//Urbanas

function _CRYPTON_FI() {
  productMoto = CRYPTON_FI;
}
function _Xmax_300() {
  productMoto = Xmax_300;
}
function _NMAX_155() {
  productMoto = NMAX_155;
}
function _SZRR_150() {
  productMoto = SZRR_150;
}
function _YBRZ_125() {
  productMoto = YBRZ_125;
}
function _FZ_VERSION_2_150() {
  productMoto = FZ_VERSION_2_150;
}
function _FZ25_250() {
  productMoto = FZ25_250;
}
function _FZ_VERSION_2() {
  productMoto = FZ_VERSION_2;
}
function _YCZ_110() {
  productMoto = YCZ_110;
  console.log("Hola");
}
//Tengo un pequeño error a la hora de llmara la función desde la hoja externa, pero si lo hago desde esta hoja la lee completamente y sin problema.
_XTZ_250();
console.log(productMoto);
precio.textContent = "$ " + productMoto["precio"];
nombre.textContent = productMoto["nombre"];
enlace.textContent = productMoto["url"];
descripcion.textContent = descript;

function pago() {
  swal("Felicitaciones","El pago fue exitoso","success");
}
function obtenerDato() {
  let numeroMotos = Number(document.getElementById("cantidad").value);
  //Me aseguro que el número sea positivo, lo convierto
  

}

function completado() {
  swal("Completado","Se ha agregado el producto","success")
}

function guardarProducto(){
  let prueba = verMas.value()
  console.log(prueba);  
  verMas.getElementById
}

function calcularPrecio(){
  let cantidadProductos, valorMoto, vlrTotal, vlrProducto
  cantidadProductos = cantidad.value
  valorMoto = productMoto["precio"]
  if (cantidadProductos < 0) {
    cantidadProductos = cantidadProductos * -1;
    swal("Ingresaste un negativo","Ya hemos hecho la conversión a un número positivo","success");
  } else if  (cantidadProductos == 0) {
    swal("Faltan Datos","Falta el número de productos que deseas comprar","error")
  }
  vlrTotal = valorMoto * cantidadProductos;
  valorTotal.textContent = vlrTotal;
  valorProducto.textContent = vlrTotal;
  cantidadTotal.textContent = cantidadProductos
}