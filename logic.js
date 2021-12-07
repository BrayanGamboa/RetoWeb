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
let FZ_VERSIÓN_2 = {
  nombre: "FZ VERSIÓN 2.0",
  precio: Number(8800000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/fz-gris.jpg",
};
let YCZ_110 = {
  nombre: "YCZ 110",
  precio: Number(5300000),
  url: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/08/negro-rojo.png",
};
/*Motos Enduro*/
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

let descript = "Hola Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus totam laudantium reiciendis modi soluta et tempora in similique? Excepturi quia quidem maxime reprehenderit magni, ut veritatis libero repellendus impedit expedita?";

let nombr = "Hola mi amor";

function producto() {
  localStorage.setItem("moto2", JSON.stringify(CRYPTON_FI));
}
product();
function product() {
  console.log(CRYPTON_FI["precio"]);
}

function capturarDatos() {
  let hole = JSON.parse(localStorage.getItem("moto2"));
  console.log(hole[nombre]);
}

precio.textContent = "$ " + CRYPTON_FI["precio"];
nombre.textContent = "Nombre: " + CRYPTON_FI["nombre"];
descripcion.textContent = "" + descript
