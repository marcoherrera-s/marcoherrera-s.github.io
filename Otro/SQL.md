
# ¿Por qué aprender SQL?

\toc


Decidí aprender SQL por una sencilla razón, estoy de vacaciones. Qué tal un día se me cruza una chambita que requiera saberle a esto (dios no lo quiera) y pues mejor saberle. Ahorita que no estoy cursando materias, me sobra mucho tiempo para ver qué tal. Si por algún motivo deseo abandonar esta tarea, también quedará registrado aquí. 

---

La primera pared con la que me topé fue el primer día, tal vez una pared un poco rídicula, instalar SQL. Para dar un poco de contexto, el SO que tiene mi computadora es Linux (I use Arch btw), las razones por la que decidí usar Linux en lugar de Windows están fuera de lugar en esta entrada, lo que puedo decir es que me gusta más cómo se comporta mi computadora ahora, aunque no es broma si te digo que tuve que consultar 34 foros para descubrir cómo cambiar mi fondo de pantalla, sí, me gusta complicarme la vida. 

Entonces bueno, en resumen tardé horas tratando de instalar MySQL, pues cuando trataba de instalarlo como normalmente se hace, haciendo: `sudo pacman -S mysql`, me decía que podía instalar un paquete similar llamado **MariaDB**, la neta todo esto me pasa por andar de necio y flojo para leer, porque ahí voy diciendo _no, no, no_ yo quiero instalar MySQL, busqué el paquete en el AUR de Arch, cloné el repositorio y se tardó HORAS instalando para que al final no funcionara. Al final me di cuenta, que ***básicamente*** instalar MariaDB y MySQL era lo mimso. Instalar MariaDB me tomó minutos y configurarlo otros cuántos más. 

---

Después de pelearme otro rato tratando de buscar una interfaz gráfica para comenzar a trabajar, me quedé con **MySQL Workbench**.

Cree una pequeña base de datos usando la interfaz, nada de código aún, y lo primero que aprendí fue:


¡Entendido! Aquí están todas las líneas de código transformadas al formato solicitado:

#### SELECT

```
SELECT * FROM table; # para seleccionar toda la tabla
```
```
SELECT * name FROM table; # para seleccionar la columna _name_ de la tabla
```
```
SELECT * user_id, name FROM table; # para seleccionar más columnas
```

#### DISTINCT

```
SELECT DISTINCT * FROM users; # selecciona los valores distintos
```
```
SELECT DISTINCT email FROM users; # selecciona los diferentes emails de mi tabla users
```

Creo que aprender SQL es simplemente aprenderte un montón de comandos.

#### WHERE

```
SELECT * FROM users WHERE name="Marco"; # selecciona usuarios donde el nombre es Marco
```
```
SELECT name FROM users WHERE surname="Herrera"; # selecciona el nombre de los usuarios cuyo apellido es Herrera
```
```
SELECT DISTINCT name FROM users WHERE surname="Herrera"; # selecciona nombres distintos de usuarios cuyo apellido es Herrera
```

#### ORDER BY

```
SELECT * FROM users ORDER BY name; # ordena los usuarios por nombre de forma ascendente
```
```
SELECT * FROM users ORDER BY name DESC; # ordena los usuarios por nombre de forma descendente
```

#### LIKE 

```
SELECT * FROM users WHERE email LIKE '%gmail.com'; # selecciona usuarios cuyo email termina en gmail.com
```
```
SELECT * FROM users WHERE name LIKE '%m%'; # busca en la columna de nombres, aquellos que contienen la letra m
```

#### NOT, AND, OR

```
SELECT * FROM users WHERE email NOT LIKE "%gmail.com" or surname="Herrera"; # selecciona usuarios cuyo email no contiene gmail.com o cuyo apellido es Herrera
```

#### LIMIT 

```
SELECT * FROM users WHERE name LIKE "%m%" LIMIT 2; # selecciona hasta dos usuarios cuyo nombre contenga la letra m
```

#### NULL

```
SELECT * FROM users WHERE email IS NOT NULL; # selecciona usuarios cuyo email no es nulo
```

#### MAX, MIN

```
SELECT MAX(init_date) FROM users; # devuelve la fecha inicial más reciente entre los usuarios
```

#### COUNT 

```
SELECT COUNT(*) FROM users; # cuenta el total de usuarios
```

#### IN

```
SELECT * FROM users WHERE name IN ('marco', 'roman'); # selecciona usuarios cuyo nombre es Marco o Roman
```

#### BETWEEN 

```
SELECT * FROM users WHERE age BETWEEN 12 and 20; # selecciona usuarios cuyo edad está entre 12 y 20 años
```

#### ALIAS

```
SELECT name, init_date AS 'Fecha de Inicio' FROM users WHERE age BETWEEN 10 and 20; # selecciona nombre y fecha de inicio como 'Fecha de Inicio' para usuarios entre 10 y 20 años
```

#### CONCAT

```
SELECT concat(name, ' ', surname) FROM users; # concatena el nombre y el apellido
```
```
SELECT concat(name, ' ', surname) AS 'Nombre Completo' FROM users; # concatena el nombre y el apellido y lo muestra como 'Nombre Completo'
```

#### GROUP BY

```
SELECT COUNT(age), age FROM users GROUP BY age ORDER BY age ASC; # cuenta la cantidad de usuarios por edad y los ordena de menor a mayor edad
```

#### CASE 

```
SELECT *, 
CASE
	WHEN age > 17 THEN 'Es mayor de edad'
    ELSE 'NO eres mayor de edad'
END AS agetext
FROM users; # asigna un texto dependiendo si el usuario es mayor de edad o no
```

#### IFNULL

```
SELECT name, surname, IFNULL(email, 'no email') FROM users; # selecciona nombre, apellido y email, pero si el email es nulo muestra 'no email'
```

### WRITING

#### INSERT

```
INSERT INTO users (name, surname) VALUES ('Julio', 'Perez'); # inserta un nuevo usuario llamado Julio Perez
```

#### UPDATE

```
UPDATE users SET age = '21' WHERE user_id = 9; # actualiza la edad del usuario con id 9 a 21 años
```

#### DELETE

```
DELETE FROM users WHERE user_id = 8; # elimina el usuario con id 8
```

### DATA BASES

```
CREATE DATABASE test; # crea una base de datos llamada test
```
```
DROP DATABASE test; # elimina la base de datos llamada test
```

### TABLES

#### CREATE TABLE

```
CREATE TABLE persons (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    age int,
    email varchar(50),
    created datetime DEFAULT CURRENT_TIMESTAMP(),
    UNIQUE(id),


    PRIMARY KEY(id),
    CHECK(age>=18)
); # crea una tabla llamada persons con varias columnas y restricciones
```

#### DROP TABLE

```
DROP TABLE persons; # elimina la tabla llamada persons
```



#### ALTER TABLE

```
ALTER TABLE persons8
ADD surname varchar(150);
```

```
ALTER TABLE persons8
RENAME COLUMN surname TO description;
```

```
ALTER TABLE persons8
MODIFY COLUMN description varchar(250);
```

```
ALTER TABLE persons8
DROP COLUMN description;
```

#### RELATIONSHIPS



