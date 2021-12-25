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
let errorMoto = {
  nombre: "Tenemos un pequeño error",
  precio: "x_x",
  url: "https://images.mediotiempo.com/qK6Fc8a_K4qqj2Jcscxd2YTRdd0=/0x530/uploads/media/2017/02/27/la-la-land-no-se-8.jpg",
}
//Creo una function para llamar u obtener los valosres de cada moto
function _TTR_110() {
  productMoto = TTR_110;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _YZ_85LW() {
  productMoto = YZ_85LW
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _XTZ_250() {
  productMoto = XTZ_250;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _YZ_450F() {
  productMoto = YZ_450F;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _YZ_250F() {
  productMoto = YZ_250F
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _YZ_250_2T() {
  productMoto = YZ_250_2T;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _WR_250F() {
  productMoto = WR_250F;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _XTZ_150() {
  productMoto = XTZ_150;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _XTZ_125() {
  productMoto = XTZ_125;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}

//Urbanas

function _CRYPTON_FI() {
  productMoto = CRYPTON_FI;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _Xmax_300() {
  productMoto = Xmax_300;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _NMAX_155() {
  productMoto = NMAX_155;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _SZRR_150() {
  productMoto = SZRR_150;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _YBRZ_125() {
  productMoto = YBRZ_125;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _FZ_VERSION_2_150() {
  productMoto = FZ_VERSION_2_150;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _FZ25_250() {
  productMoto = FZ25_250;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _FZ_VERSION_2() {
  productMoto = FZ_VERSION_2;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}
function _YCZ_110() {
  productMoto = YCZ_110;
  localStorage.setItem("moto", JSON.stringify(productMoto));
}

let tomarValor = JSON.parse(localStorage.getItem("moto"))

let nombreMoto = tomarValor["nombre"];
switch (nombreMoto) {
  case "CRYPTON FI":
    productMoto = CRYPTON_FI;
    break;
  case "Xmax 300":
    productMoto = Xmax_300;
    break;
  case "NMAX 155":
    productMoto = NMAX_155;
    break;
  case "SZRR 150":
    productMoto = SZRR_150;
    break;
  case "YBRZ 125":
    productMoto = YBRZ_125;
    break;
  case "FZ25 250":
    productMoto = FZ25_250;
    break;
  case "FZ VERSIÓN 2 150":
    productMoto = FZ_VERSION_2_150;
    break;
  case "FZ VERSIÓN 2.0":
    productMoto = FZ_VERSION_2;
    break;
  case "YCZ 110":
    productMoto = YCZ_110;
    break;
  case "YZ-450F":
    productMoto = YZ_450F;
    break;
  case "YZ-250F":
    productMoto = YZ_250F;
    break;
  case "YZ-250 (2T)":
    productMoto = YZ_250_2T;
    break;
  case "WR-250F":
    productMoto = WR_250F;
    break;
  case "XTZ-150":
    productMoto = XTZ_150;
    break;
  case "XTZ-125":
    productMoto = XTZ_125;
    break;
  case "YZ 85LW":
    productMoto = YZ_85LW;
    break;
  case "XTZ 250":
    productMoto = XTZ_250;
    break;
  case "TTR 110":
    productMoto = TTR_110;
    break;
  default:
    productMoto = errorMoto;
    break;
}

nombreMoto = productMoto["nombre"];
let precioMoto = productMoto["precio"];
let urlMoto = productMoto["url"];

precio.textContent = "$ " + precioMoto;
nombre.textContent = nombreMoto;
document.getElementById("moto").setAttribute("src", urlMoto);
descripcion.textContent = descript;

function pago() {
  swal("Felicitaciones", "El pago fue exitoso", "success");
}
function obtenerDato() {
  let numeroMotos = Number(document.getElementById("cantidad").value);
}

function completado() {
  swal("Completado", "Se ha agregado el producto", "success");
}

function calcularPrecio() {
  let cantidadProductos, vlrTotal;
  cantidadProductos = cantidad.value;
  if (cantidadProductos < 0) {
    cantidadProductos = cantidadProductos * -1;
    swal(
      "Ingresaste un negativo",
      "Ya hemos hecho la conversión a un número positivo",
      "success"
    );
  } else if (cantidadProductos == 0) {
    swal(
      "Faltan Datos",
      "Falta el número de productos que deseas comprar",
      "error"
    );
  }
  vlrTotal = precioMoto * cantidadProductos;
  valorTotal.textContent = vlrTotal;
  valorProducto.textContent = vlrTotal;
  cantidadTotal.textContent = cantidadProductos;
  String(vlrTotal);
  console.log(vlrTotal.length);
}
