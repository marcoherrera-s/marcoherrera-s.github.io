@def title = "Ulam y mi cumpleaños"
@def tags = ["syntax", "code"]


# SOBRE MI NÚMERO FAVORITO, LOS NÚMEROS PRIMOS Y MI FONDO DE PANTALLA

Es bien sabido que de los números primos se pueden obtener muchas cosas interesantes, son números muy especiales, pues no tienen divisores, bueno, sólo el 1 y él mismo.

Lo que haré aquí, como todo lo que hago tambíen por aquí, no es nada nuevo, _no hay nada nuevo bajo el sol_.

Resulta que un día, en un rato libre, me puse a hacer un código que replicara la famosa [espiral de Ulam](https://en.wikipedia.org/wiki/Ulam_spiral). Que como su nombre nos dice, es una espiral en donde se distribuyen los números primos. 

Lo primero que había que hacer era justamente una función que nos dijera si un número, cual sea, es primo o no. Entonces, hacemos:



```julia:./ex1
function es_primo(n)
    if n <= 1
        return false
    end
    for i in 2:isqrt(n)
        if n % i == 0
            return false
        end
    end
    return true
end
```
\show{./ex1}

La forma en la que funciona es la siguiente:

1. `if n <= 1`: Aquí checamos si el número `n` es menor o igual a 1. Si es así, la función nos regresa un falso porque sabemos que los números primos son mayores que 1. (No, no vamos a tomar al 1 como primo)

2. `for i in 2:isqrt(n)`: Aqui con un `for` iteramos sobre todos los números desde 2 hasta la raíz cuadrada entera de `n`. Esto lo hacemos para optimizar el rendimiento, ya que si hay un divisor de `n` mayor que su raíz cuadrada, entonces también habrá otro menor que su raíz cuadrada.

3. `if n % i == 0`: Aquí en cada iteración del bucle, verificamos si `n` es divisible por `i` sin dejar residuo (es decir, `n` es divisible por `i`). Si es así, significa que `n` tiene un divisor que no es 1 ni `n` mismo, lo cual contradice la definición de un número primo. En este caso, la función nos regresa `false`.

4. Después de salir del bucle `for`, la función nos regresa `true`, indicando que el número `n` no tiene divisores distintos de 1 y `n`, y por lo tanto, es primo.

## Haciendo una espiral de números

El siguiente paso es hacer una espiral de números, este paso tiene su truquito y podría resultar medio complicado, conseguir acomodar los números en cualquier matriz de nxn en forma de espiral puede resultar un poco laborioso.

![espiral](/assets/espiral.png)

Entonces, lo que haremos será:

```julia:./ex2
function spiral_matrix(n::Int)
    dirs = [(0, 1), (-1, 0), (0, -1), (1, 0)]
    cur = maxsteps = 1
    steps = num = 0
    pos = [n ÷ 2 + 1, isodd(n) ? n ÷ 2 + 1 : n ÷ 2]
    M = Matrix{Int}(undef, n, n)

    while num < n^2
        num += 1
        M[pos[1], pos[2]] = num
        steps += 1

        pos .+= dirs[cur]

        if steps == maxsteps
            steps = 0
            if iseven(cur)
                maxsteps += 1
            end
            cur += 1
            if cur > 4
                cur -= 4
            end
        end
    end

    return M
end
```
\show{./ex2}

Aquí basicamente lo que hacemos es crear una matriz cuadrada de tamaño `n`, comenzamos localizando el centro y empezando ahí, ya sea si la matriz de nxn es con n par o n impar, ya en el centro de la matriz, avanzamos hacia afuera en direcciones predefinidas. Estas direcciones las manejamos mediante la variable `cur`, que representa la dirección actual, y el vector de direcciones `dirs`, que contiene las tuplas de desplazamiento correspondientes a cada dirección: hacia la derecha (0, 1), hacia arriba (-1, 0), hacia la izquierda (0, -1) y hacia abajo (1, 0).
Finalmente utilizamos un bucle `while` que continúa hasta que todos los elementos de la matriz están llenos. En cada iteración del bucle:

Podemos ver nuestro resultado haciendo:

```julia:./ex3
spiral_matrix(7)
```
\show{./ex3}

Genial, funciona. Ahora ya toca la parte fácil, para continuar tenemos que importar una paquetería para hacer nuestras imágenes.


```julia:./ex4
using Images
```
\show{./ex4}

Entonces, lo siguiente que haremos será lo siguiente:

```julia:./ex5
function Ulam(n)
    M = spiral_matrix(n)
    primos = fill(RGB(0.0, 0.0, 0.0), n, n)

    for p in 1:n, q in 1:n
        if es_primo(M[p, q]) 
            primos[p,q] = RGB(1.0, 0.0, 0.0)
        end
    end
    primos
end
```
\show{./ex5}

Lo que hicimos fue una función que nos regresará una imagen de nuestra espiral de Ulam, primero creamos una matriz de nxn, y después con la paquetería creamos otra matriz de las mismas dimensiones con objetos RGB, cada elemento será un pixel negro. 
Después iteramos sobre cada columna y cada fila, es decir, sobre cada número y con nuestra primera función checamos si es primo, si lo es, sustituimos nuestro pixel negro, por uno rojo. Y así para todos los elementos de nuestra matriz. Veamos:

```julia
Ulam(1001)
```

![espabu](/assets/primos1001.png)





Perfecto, se ve muy bien. Ahí tenemos nuestra espiral de Ulam.

Cuando llegué hasta ahí tenía ganas de hacer algo más con todo esto, muy bonito y todo, pero tenía sed de algo más, entonces se me ocurrió algo sencillo. Mi número favorito es el 7, sí, entiendo que es un número favorito _cliché_, pero me gusta, es el día de mi cumpleaños, _en el séptimo día descansó_, hay 7 colores en el espectro visible, hay 7 notas musicales. Entre muchas cosas más, simplemente el 7 es el mejor número y no pienso discutirlo. 

Entonces lo que hice fue lo siguiente:


```julia:./ex7
function tiene_siete(numero)
    cadena_numero = string(numero)
    return '7' in cadena_numero
end
```
\show{./ex7}

Esta es una función simple que lo que hace es checar si un número cualquiera, contiene al 7 entre sus dígitos. Entonces, modifiquemos nuestra función _Ulam()_ añadiendo esa función. 

```julia:./ex8
function Ulam_n(n)
    M = spiral_matrix(n)
    primos = fill(RGB(0.0, 0.0, 0.0), n, n)

    for p in 1:n, q in 1:n
        if es_primo(M[p, q]) && tiene_siete(M[p, q])
            primos[p,q] = RGB(1.0, 0.0, 0.0)
        elseif es_primo(M[p, q]) 
            primos[p,q] = RGB(1.0, 1.0, 1.0)

        end
    end
    primos
end
```
\show{./ex8}

Es la misma función, únicamente agregamos la condición de que si es primo y además tiene el 7, se pinte de rojo, si solamente es un número primo sin tener el 7, es decir, un número primo aburrido, que se pinte de blanco. Volvamos a hacer una imagen de eso. 


```julia
Ulam_n(1001)
```

![espachi](/assets/primoss1001.png)



Bueno, esto sorprendente para mí la primera vez que lo vi, la verdad es que no esperaba para nada esto, lo que yo esperaba era una distribución random de puntos rojos y puntos blancos, pero no, sí, estás viendo bien, se forman especies de márgenes, de cuadrados. 

Resulta que a día de hoy aún no puedo explicar muy bien lo que está pasando, por qué estoy viendo lo que estoy viendo, algún día cuando le pregunté a algún matemático, pondré la respuesta aquí, tengo una idea vaga, pero nada que me atreva a escribir con seguridad. 

Una vez, una amiga mía me preguntó que cuál era mi fondo de pantalla, a punto de enseñarle me dijo que me detuviera, que ella iba a adivinar, empezó diciendo una lista de las cosas que me gustan tales que creía que eso podría ser mi fondo de pantalla, fue un fallo total. Mi fondo de pantalla era un fondo random, algo que literalmente no hubiera recordado cuándo puse, ni por qué, ni dónde lo encontré, algo similar a ese fondo de pantalla del campo verde y el cielo azul que estuvo como predeterminado mucho tiempo en las computadoras.

En el momento en que obtuve mi imagen, de los números primos y mi número favorito, no dudé en ponerla de fondo de pantalla. 

Tiempo después, al volver a encontrar a mi amiga, me preguntó, casi en tono de burla picaresca, que cuál era mi fondo de pantalla ahora. Y bueno, no pude explicar todo lo que está en esta entrada de blog. 







