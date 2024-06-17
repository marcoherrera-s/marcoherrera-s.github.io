
# ¿Por qué aprender SQL?

\toc


Decidí aprender SQL por una sencilla razón, estoy de vacaciones. Qué tal un día se me cruza una chambita que requiera saberle a esto (dios no lo quiera) y pues mejor saberle. Ahorita que no estoy cursando materias, me sobra mucho tiempo para ver qué tal. Si por algún motivo deseo abandonar esta tarea, también quedará registrado aquí. 

---

La primera pared con la que me topé fue el primer día, tal vez una pared un poco rídicula, instalar SQL. Para dar un poco de contexto, el SO que tiene mi computadora es Linux (I use Arch btw), las razones por la que decidí usar Linux en lugar de Windows están fuera de lugar en esta entrada, lo que puedo decir es que me gusta más cómo se comporta mi computadora ahora, aunque no es broma si te digo que tuve que consultar 34 foros para descubrir cómo cambiar mi fondo de pantalla, sí, me gusta complicarme la vida. 

Entonces bueno, en resumen tardé horas tratando de instalar MySQL, pues cuando trataba de instalarlo como normalmente se hace, haciendo: `sudo pacman -S mysql`, me decía que podía instalar un paquete similar llamado **MariaDB**, la neta todo esto me pasa por andar de necio y flojo para leer, porque ahí voy diciendo _no, no, no_ yo quiero instalar MySQL, busqué el paquete en el AUR de Arch, cloné el repositorio y se tardó HORAS instalando para que al final no funcionara. Al final me di cuenta, que ***básicamente*** instalar MariaDB y MySQL era lo mimso. Instalar MariaDB me tomó minutos y configurarlo otros cuántos más. 

---

Después de pelearme otro rato tratando de buscar una interfaz gráfica para comenzar a trabajar, me quedé con **MySQL Workbench**.

Cree una pequeña base de datos usando la interfaz, nada de código aún, y lo primero que aprendí fue:


#### SELECT

+ `SELECT * FROM table;` para seleccionar toda la tabla

+ `SELECT * name FROM table;` para seleccionar la columna _name_ de la tabla

+ `SELECT * user_id, name FROM table;` para seleccionar más columnas

#### DISTINCT

+ `SELECT DISTINCT * FROM users;` selecciona los valores distintos

+ `SELECT DISTINCT email FROM users;` selecciona los diferentes emails de mi tabla users

Creo que aprender SQL es simplemente aprenderte un montón de comandos. 

#### WHERE


+ `SELECT * FROM users WHERE name="Marco";` 

+ `SELECT name FROM users WHERE surname="Herrera";`

+ `SELECT DISTINCT name FROM users WHERE surname="Herrera";`

#### ORDER BY

+ `SELECT * FROM users ORDER BY name;`

+ `SELECT * FROM users ORDER BY name DESC;`


#### LIKE 

+ `SELECT * FROM users WHERE email LIKE '%gmail.com';` el arroba aquí me dice, no me importa lo que haya antes, solo lo que va después. 

+ `SELECT * FROM users WHERE name LIKE '%m%';` se puede hacer un poco más complejo, por ejemplo aquí estamos buscano en la columna de nombres, los que llevan la letra _m_ en cualquier posición.

#### NOT, AND, OR

+ `SELECT * FROM users WHERE email NOT LIKE "%gmail.com" or surname="Herrera";`

#### LIMIT 

+ `SELECT * FROM users WHERE name LIKE "%m%" LIMIT 2;` me selecciona los usuarios cuya nombre contiene la letra m, pero sólo los primeros dos. 

#### NULL

`SELECT * FROM users WHERE email IS NOT NULL;` 

#### MAX, MIN

`SELECT MAX(init_date) FROM users`

#### COUNT 

`SELECT COUNT(*) FROM users;` cuenta cuántos elementos. También hay SUM, AVG.

#### IN

`SELECT * FROM users WHERE name IN ('marco', 'roman')` me trae todos los Marco, y todos los Roman, no importa si hago la búsqueda en mayúsculas o no. 

#### BETWEEN 

`SELECT * FROM users WHERE age BETWEEN 12 and 20;`

#### ALIAS

`SELECT name, init_date AS 'Fecha de Inicio' FROM users WHERE age BETWEEN 10 and 20;`

#### CONCAT

`SELECT concat(name, ' ', surname) FROM users;`

`SELECT concat(name, ' ', surname) AS 'Nombre Completo' FROM users;`

#### GROUP BY

`SELECT COUNT(age), age FROM users GROUP BY age ORDER BY age ASC;`

#### CASE 

```
SELECT *, 
CASE
	WHEN age > 17 THEN 'Es mayor de edad'
    ELSE 'NO eres mayor de edad'
END AS agetext
FROM users;
```

#### IFNULL

`SELECT name, surname, IFNULL(email, 'no email') FROM users;`

### Writing

#### INSERT

`INSERT INTO users (name, surname) VALUES ('Julio', 'Perez');`

#### UPDATE

`UPDATE users SET age = '21' WHERE user_id = 9;`

#### DELETE

`DELETE FROM users WHERE user_id = 8;`

### DATA BASES

`CREATE DATABASE test;`
`DROP DATABASE test;`

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
);
```

#### DROP TABLE

`DROP TABLE persons8;`

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



