-- Script SQL para Crear la Base de Datos y las Tablas
CREATE DATABASE TiendaOnline;
USE TiendaOnline;

CREATE TABLE Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    proveedor_id INT,
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(id)
);

CREATE TABLE Ventas (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    cliente_id INT,
    producto_id INT,
    cantidad INT,
    fecha_venta DATE,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);


-- Script SQL para Insertar Registros en las Tablas
-- Insertar registros en la tabla Clientes
INSERT INTO Clientes (nombre, direccion, telefono, email)
VALUES
    ('Juan Perez', 'Calle A #123', '1234567890', 'juan@example.com'),
    ('Maria Lopez', 'Avenida B #456', '9876543210', 'maria@example.com'),
    ('Pedro Martinez', 'Calle C #789', '4567890123', 'pedro@example.com'),
    ('Laura Gonzalez', 'Avenida D #321', '7890123456', 'laura@example.com'),
    ('Carlos Sanchez', 'Calle E #567', '3216549870', 'carlos@example.com'),
    ('Ana Ramirez', 'Avenida F #654', '6543210987', 'ana@example.com'),
    ('Luis Torres', 'Calle G #987', '9012345678', 'luis@example.com'),
    ('Elena Gomez', 'Avenida H #876', '2345678901', 'elena@example.com'),
    ('Jorge Rodriguez', 'Calle I #234', '5678901234', 'jorge@example.com'),
    ('Marta Diaz', 'Avenida J #432', '8901234567', 'marta@example.com');

-- Insertar registros en la tabla Proveedores
INSERT INTO Proveedores (nombre, direccion, telefono, email)
VALUES
    ('Proveedor A', 'Calle X #123', '1112223333', 'proveedorA@example.com'),
    ('Proveedor B', 'Avenida Y #456', '4445556666', 'proveedorB@example.com'),
    ('Proveedor C', 'Calle Z #789', '7778889999', 'proveedorC@example.com');

-- Insertar registros en la tabla Productos
INSERT INTO Productos (nombre, precio, proveedor_id)
VALUES
    ('Producto 1', 29.99, 1),
    ('Producto 2', 19.99, 2),
    ('Producto 3', 39.99, 1),
    ('Producto 4', 49.99, 3),
    ('Producto 5', 14.99, 2),
    ('Producto 6', 24.99, 1),
    ('Producto 7', 34.99, 3),
    ('Producto 8', 9.99, 2),
    ('Producto 9', 59.99, 1),
    ('Producto 10', 79.99, 3);

-- Insertar registro en la tabla Ventas (simulación de compra)
INSERT INTO Ventas (cliente_id, producto_id, cantidad, fecha_venta)
VALUES
    (1, 1, 2, CURDATE());

-- Consultas Realizadas
-- Consulta para verificar la cantidad disponible de un producto especifico
SELECT nombre, cantidad_disponible
FROM Productos
WHERE id = 1;

-- Consulta para actualizar la direccion de un proveedor especifico
UPDATE Proveedores
SET direccion = 'Cra #21 78'
WHERE id = 1;

-- Consulta para eliminar un cliente especifico
DELETE FROM Clientes
WHERE id = 11;

-- Consulta para filtrar clientes cuyo nombre contenga 'Lopez'
SELECT *
FROM Clientes
WHERE nombre LIKE '%Lopez%';

-- Consulta para calcular ingresos totales en el ultimo mes
SELECT SUM(precio * cantidad) AS ingresos_totales
FROM Ventas
JOIN Productos ON Ventas.producto_id = Productos.id
WHERE fecha_venta >= DATE_SUB(NOW(), INTERVAL 1 MONTH);

-- Consulta para obtener los productos mas vendidos
SELECT Productos.nombre, SUM(Ventas.cantidad) AS total_vendido
FROM Ventas
JOIN Productos ON Ventas.producto_id = Productos.id
GROUP BY Productos.nombre
ORDER BY total_vendido DESC
LIMIT 5;

-- Consulta para identificar los clientes mas frecuentes
SELECT Clientes.nombre, COUNT(*) AS total_compras
FROM Ventas
JOIN Clientes ON Ventas.cliente_id = Clientes.id
GROUP BY Clientes.nombre
ORDER BY total_compras DESC
LIMIT 5;