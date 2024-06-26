
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

Bueno, a partir de aquí retomé el estudio de esto después de una semana. 

#### RELATIONSHIPS

Aquí tenemos distintos tipos de relaciones, SQL, por lo que estoy entendiendo, una de sus fortalezas es que se especializa en bases de datos relacionales. Hay distintos tipos de relaciones, y estas serían:

### Relación 1 : 1

Esta está un poco clara, nos dice que hay una relación entre el registro de una Tabla A y el registro de una Tabla B. 


Aquí vemos que el registro user_id de la tabla "dni" es clave foránea de la clave primaria user_id de la tabla "users"


```
CREATE TABLE dni(
	dni_id int AUTO_INCREMENT PRIMARY KEY,
    dni_number int NOT NULL,
    user_id int,
    UNIQUE(dni_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
)
```

### Relación 1 : N

Aquí, casi de forma análoga se habla de una relación que puede tener un registro con N registros, el ejemplo que da el curso que estoy siguiendo es el de crear una nueva tabla que se encargue de los registros de nombres de compañias, un empleado puede tener varias compañías pero claramente las compañías pueden tener varios empleados. 

La neta siento que está bien triste estar trabajando con estos términos de que: empleado, compañía, registro, etc. Pero bueno, es lo que toca.

Primero creamos esa tabla de compañías.

```
CREATE TABLE companies(
	company_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL
)
```
Después en el tutorial, se utilizó la interfaz gráfica para agregar una columna más a la tabla de users, nombŕandola _company_id_, esta sería nuestra clave foránea, pues es la clave primaria de nuestra otra tabla llamada companies. Entonces, la cree, usando la interfaz, y tal vez, sea más fácil agregar más columnas de esta forma. Después se alteró de la siguiente forma:

```
ALTER TABLE users 
ADD CONSTRAINT fk_companies
FOREIGN KEY(company_id) REFERENCES companies(company_id)
```

Ok, tenía un problemita en entender el ADD CONSTRAINT, pero pues justamente es la línea que añade que habrá una restricción en la tabla users, esta cobra sentido en la siguiente línea pues especifica de qué tratará la constricción, en la relación 1:N no ocupamos esto porque no creabamos ninguna nueva columna en ninguna tabla. O al menos eso es lo que creo. 

Aquí hago un paréntesis. Quiero hablar de la palabra _constraint_, esta palabra fue muy común para mí mientras tomaba mi curso de mecánica analítica, pues al estudiar el formalismo lagrangiano se habla de estas _constraints_. Mi problema con esta palabra es su traducción, la traducción directa es la que escuché en mi curso y la que he escuchado más veces: **constricción**. Se me hace muy fea esta palabra porque siento que suena como cuando estás constriñido del estómago. Por otra parte, la traducción _restricción_ se me hace un poco más buena, sin embargo, aunque sí es una restricción pierde el sentido de una relación que existe, que la traducción _ligadura_ sí comprende, pero a mi parecer, dejando de lado el carácter restrictivo. Así que hasta ahora, no sé muy bien qué palabra me gustaría más usar en estos casos. Ojalá algún día la encuentre, pero no es broma cuando digo que siento un navajazo en el pecho cuando escucho **constricción**. Tal vez la que preferiría sería restricción, pues siento que el carácter restrictivo es más importante que el hecho de que sea claro que exista una relación.

### Relación N : M

El ejemplo que se pone acá es sencillo, creamos una tabla que contiene idiomas, y otra que contiene qué idiomas hablan los usuarios. Es N:M porque varios idiomas pueden ser hablados por varios usuarios y varios usuarios pueden hablar varios idiomas. 

```
CREATE TABLE languages(
	language_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL
);
```

```
CREATE TABLE users_languages(
	users_language_id int AUTO_INCREMENT PRIMARY KEY,
    user_id int,
    language_id int,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(language_id) REFERENCES languages(language_id),
    UNIQUE (user_id, language_id)
);
```