CREATE DATABASE Yamaha;

CREATE TABLE Sede (
    id_sede INT(5) AUTO_INCREMENT UNIQUE,
    departamento
    SET
        (
            "Amazonas",
            "Antioquia",
            "Chocó",
            "Nariño",
            "Valle del Cauca"
        ) NOT NULL,
        ciudad
    SET
        ("Leticia", "Medellín", "Quibdó", "Pasto", "Cali") NOT NULL,
        direccion VARCHAR(25) NOT NULL,
        PRIMARY KEY(id_sede)
);

CREATE TABLE Cargo (
    id_cargo INT(5) AUTO_INCREMENT UNIQUE,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    valor INT(10) NOT NULL,
    PRIMARY KEY(id_cargo)
);

CREATE TABLE Cliente (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

CREATE TABLE Producto(
    id_producto INT(5) AUTO_INCREMENT UNIQUE,
    nombre VARCHAR(25) NOT NULL,
    modelo YEAR(2) NOT NULL,
    color VARCHAR(25) NOT NULL,
    tipo
    SET
        ("Enduro", "Urbanas", "Otras") NOT NULL,
        valor_Unitario INT(10) NOT NULL,
        cantidad_disponible INT NOT NULL,
        id_sede INT(5) NOT NULL,
        PRIMARY KEY(id_producto),
        FOREIGN KEY(id_sede) REFERENCES Sede(id_sede)
);

CREATE TABLE Empleado(
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        id_cargo INT(5) NOT NULL,
        id_sede INT(5) NOT NULL,
        PRIMARY KEY(documento),
        FOREIGN KEY(id_sede) REFERENCES Sede(id_sede),
        FOREIGN KEY(id_cargo) REFERENCES Cargo(id_cargo)
);

CREATE TABLE Venta (
    id_venta INT(8) AUTO_INCREMENT UNIQUE,
    id_producto INT(5) NOT NULL,
    cantidad INT(5) NOT NULL,
    descuento INT(5) NOT NULL,
    id_vendedor INT(5) NOT NULL,
    id_sede INT(5) NOT NULL,
    id_cliente INT(30) NOT NULL,
    fecha_compra DATE NOT NULL,
    PRIMARY KEY(id_venta),
    FOREIGN KEY(id_producto) REFERENCES Producto(id_producto),
    FOREIGN KEY(id_vendedor) REFERENCES Empleado(documento),
    FOREIGN KEY(id_sede) REFERENCES sede(id_sede),
    FOREIGN KEY(id_cliente) REFERENCES Cliente(documento)
);

/*a) Crear 5 instrucciones (como mínimo) de inserción (INSERT) en las diferentes tablas de la base de datos.*/
INSERT INTO
    sede(
        departamento,
        ciudad,
        direccion
    )
VALUES
    (
        "Amazonas",
        "Leticia",
        "Cr 55c # 8"
    ),
    (
        "Antioquia",
        "Medellín",
        "Cr 55w # 89 - 189"
    ),
    (
        "Chocó",
        "Quibdó",
        "Cll 2b # 5a - 89"
    ),
    (
        "Nariño",
        "Pasto",
        "Cr 55q # 29 - 86"
    ),
    (
        "Valle del Cauca",
        "Cali",
        "Cr 3 # 5 - 1"
    );

INSERT INTO
    Cargo(nombre, descripcion, valor)
VALUES
    (
        "Gerente",
        "Lorem ipsum dolor sit amet, consectetur adipiscig.",
        3000000
    ),
    (
        "Vendedor",
        "Lorem ipsum dolor sit amet, consectetur adipiscig.",
        1800000
    ),
    (
        "Aseador",
        "Lorem ipsum dolor sit amet, consectetur adipiscig.",
        1300000
    ),
    (
        "Secretaria",
        "Lorem ipsum dolor sit amet, consectetur adipiscig.",
        1400000
    );

INSERT INTO
    Cliente (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        2020507634,
        "Lisboa",
        "Londoño",
        "C.C",
        "F",
        "2000-01-30"
    ),
    (
        1921106432,
        "Palermo",
        "Gómez",
        "T.I",
        "M",
        "2003-07-12"
    ),
    (
        43761230,
        "Camilo",
        "Gamboa",
        "C.C",
        "M",
        "2000-07-02"
    ),
    (
        77532875872949092635,
        "Aurora",
        "Prado",
        "Passport",
        "F",
        "1990-10-20"
    ),
    (
        30940285,
        "Manila",
        "Tarantino",
        "C.C",
        "F",
        "1994-08-01"
    );

INSERT INTO
    Producto(
        nombre,
        modelo,
        color,
        tipo,
        valor_Unitario,
        cantidad_disponible,
        id_sede
    )
VALUES
    (
        "XTZ-250",
        "2020",
        "Gris",
        "Enduro",
        17000000,
        7,
        1
    ),
    (
        "XTZ-150",
        "2019",
        "Azul",
        "Enduro",
        9000000,
        4,
        2
    ),
    (
        "SZR-150",
        "2018",
        "Negro Mate",
        "Urbanas",
        8700000,
        15,
        3
    ),
    (
        "NMAX-155",
        "2020",
        "Blanca, Negra, Azul y Roja",
        "Urbanas",
        11000000,
        28,
        4
    ),
    (
        "YBR-125",
        "2019",
        "Gris y Blanca",
        "Urbanas",
        6000000,
        13,
        5
    );

INSERT INTO
    Empleado(
        documento,
        tipo_documento,
        nombres,
        apellidos,
        sexo,
        fecha_nacimiento,
        id_cargo,
        id_sede
    )
VALUES
    (
        1020106835,
        "T.I",
        "Brayan",
        "Gamboa Villegas",
        "M",
        "2005-04-19",
        2,
        2
    ),
    (
        76247672,
        "C.C",
        "Andrea",
        "Villegas ",
        "F",
        "1983-06-29",
        1,
        1
    ),
    (
        9599774,
        "C.C",
        "Jairo",
        "Gamboa",
        "M",
        "1978-06-18",
        1,
        3
    ),
    (
        205805873,
        "Passport",
        "María",
        "Oquendo Díaz",
        "F",
        "1992-05-09",
        3,
        4
    ),
    (
        843508733,
        "C.E",
        "Mónica",
        "Urango Fernández",
        "M",
        "2005-04-19",
        4,
        5
    );

INSERT INTO
    Venta (
        id_producto,
        cantidad,
        descuento,
        id_vendedor,
        id_sede,
        id_cliente,
        fecha_compra
    )
VALUES
    (
        1,
        3,
        30,
        1020106835,
        1,
        2020507634,
        "2020-12-20"
    ),
    (
        2,
        7,
        35,
        1020106835,
        2,
        1921106432,
        "2020-09-10"
    ),
    (
        3,
        1,
        5,
        1020106835,
        3,
        43761230,
        "2019-06-17"
    ),
    (
        4,
        2,
        20,
        1020106835,
        4,
        77532875872949092635,
        "2019-10-24"
    ),
    (
        5,
        1,
        10,
        1020106835,
        5,
        30940285,
        "2020-04-20"
    );

/*b) Crear 5 instrucciones (como mínimo) de inserción (INSERT) en las diferentes tablas de la base de datos.*/
UPDATE
    Empleado
SET
    documento = 43902100
WHERE
    nombres = "Andrea";

UPDATE
    Empleado
SET
    documento = 11807602
WHERE
    nombres = "Jairo";

UPDATE
    Empleado
SET
    fecha_nacimiento = "1978-05-20"
WHERE
    nombres = "Jairo";

UPDATE
    Empleado
SET
    documento = 84298462986826498439
WHERE
    apellidos = "Oquendo Díaz";

UPDATE
    Empleado
SET
    apellidos = "Urango Fernández"
WHERE
    fecha_nacimiento = "2005-04-19";

/*c) Crear 5 instrucciones (como mínimo) de eliminación (DELETE) en las diferentes tablas de la base de datos.*/
CREATE TABLE Cliente_prueba (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

INSERT INTO
    Cliente_prueba (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        2020507634,
        "Lisboa",
        "Londoño",
        "C.C",
        "F",
        "2000-01-30"
    ),
    (
        1921106432,
        "Palermo",
        "Gómez",
        "T.I",
        "M",
        "2003-07-12"
    ),
    (
        43761230,
        "Camilo",
        "Gamboa",
        "C.C",
        "M",
        "2000-07-02"
    ),
    (
        77532875872949092635,
        "Aurora",
        "Prado",
        "Passport",
        "F",
        "1990-10-20"
    ),
    (
        30940285,
        "Manila",
        "Tarantino",
        "C.C",
        "F",
        "1994-08-01"
    );

DELETE FROM
    Cliente_prueba
WHERE
    nombres = "Lisboa";

DELETE FROM
    Cliente_prueba
WHERE
    apellidos = "Tarantino";

DELETE FROM
    Cliente_prueba
WHERE
    fecha_nacimiento = "2003-07-12";

DELETE FROM
    Cliente_prueba
WHERE
    tipo_documento = "Passport"
    AND sexo = "F";

DELETE FROM
    Cliente_prueba;

DROP TABLE Cliente_prueba;

/*d) Crear 5 instrucciones (como mínimo) de vaciado (TRUNCATE) en las diferentes tablas de la base de datos.*/
CREATE TABLE Cliente_prueba (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

INSERT INTO
    Cliente_prueba (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        30940285,
        "Manila",
        "Tarantino",
        "C.C",
        "F",
        "1994-08-01"
    );

CREATE TABLE Cliente_prueba2 (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

INSERT INTO
    Cliente_prueba2 (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        77532875872949092635,
        "Aurora",
        "Prado",
        "Passport",
        "F",
        "1990-10-20"
    );

CREATE TABLE Cliente_prueba3 (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

INSERT INTO
    Cliente_prueba3 (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        43761230,
        "Camilo",
        "Gamboa",
        "C.C",
        "M",
        "2000-07-02"
    );

CREATE TABLE Cliente_prueba4 (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

INSERT INTO
    Cliente_prueba4 (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        1921106432,
        "Palermo",
        "Gómez",
        "T.I",
        "M",
        "2003-07-12"
    );

CREATE TABLE Cliente_prueba5 (
    documento INT(30) UNIQUE,
    nombres VARCHAR(25) NOT NULL,
    apellidos VARCHAR(25) NOT NULL,
    tipo_documento
    SET
        ("T.I", "C.C", "Passport", "C.E") NOT NULL,
        sexo
    SET
        ("M", "F", "?") NOT NULL,
        fecha_nacimiento DATE NOT NULL,
        PRIMARY KEY(documento)
);

INSERT INTO
    Cliente_prueba5 (
        documento,
        nombres,
        apellidos,
        tipo_documento,
        sexo,
        fecha_nacimiento
    )
VALUES
    (
        2020507634,
        "Lisboa",
        "Londoño",
        "C.C",
        "F",
        "2000-01-30"
    );

TRUNCATE TABLE Cliente_prueba;

TRUNCATE TABLE Cliente_prueba2;

TRUNCATE TABLE Cliente_prueba3;

TRUNCATE TABLE Cliente_prueba4;

TRUNCATE TABLE Cliente_prueba5;

DROP TABLE Cliente_prueba,
Cliente_prueba2,
Cliente_prueba3,
Cliente_prueba4,
Cliente_prueba5;

/*a) Construir una consulta que evidencie el uso del SELECT y alias para los campos que proyecta la consulta*/
SELECT
    nombres AS Vendedor
FROM
    Empleado
WHERE
    id_cargo = 2;

/*b) Construir una consulta que evidencie el uso del CASE – WHEN*/
SELECT
    nombres,
    apellidos,
    CASE
        WHEN tipo_documento = "C.C" THEN "El empleado es Colombiano"
        WHEN tipo_documento = "Passport" THEN "El empleado es extranjero"
    END
FROM
    Empleado
WHERE
    sexo = "F";

/*c) Construir una consulta que evidencie el uso de la función DATE_FORMAT.*/
SELECT
    nombres,
    apellidos,
    DATE_FORMAT(fecha_nacimiento, "%W %M %Y")
FROM
    Cliente
WHERE
    sexo = "F";

/*e) Construya una consulta que evidencie el uso de INNER JOIN.*/
SELECT
    Sede.ciudad,
    Producto.nombre,
    Producto.cantidad_disponible
FROM
    Producto
    INNER JOIN Sede ON Sede.id_sede = Producto.id_sede;

/*f) Construya una consulta que evidencie el uso de LEFT JOIN.*/
SELECT
    Sede.ciudad,
    Producto.nombre,
    Producto.cantidad_disponible
FROM
    Producto
    LEFT JOIN Sede ON Sede.id_sede = Producto.id_sede;

/*h) Construya una consulta que evidencie el uso ORDER BY.*/
SELECT
    Sede.ciudad,
    Producto.nombre,
    Producto.cantidad_disponible
FROM
    Producto
    INNER JOIN Sede ON Sede.id_sede = Producto.id_sede
ORDER BY
    Producto.cantidad_disponible;

/*i) Construya una consulta que evidencie el uso GROUP BY.*/
SELECT
    nombre,
    valor
FROM
    Cargo
GROUP BY
    valor;

/*Nota: no entiendo cómo hacer la solución del punto "d", de antemano pido disculpas.*/