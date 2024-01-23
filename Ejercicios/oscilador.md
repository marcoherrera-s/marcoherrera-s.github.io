<!-- @def showall = true -->
@def title = "Oscilador armónico"
@def tags = ["syntax", "code"]


# Resolviendo el oscilador armónico

Empezar este blog hablando del oscilador armónico podría resultar hasta irónico, si está en todos lados, es porque todo el tiempo lo estamos invocando, y más porque se sabe que muchos sistemas en física experimentan movimientos oscilatorios, desde la evolución de los planetas, los péndulos, entre los más comunes, otros menos comunes pueden ser las oscilaciones de átomos en sólidos cristalinos, el movimiento de electrones, entre muchos más. 

Decimos que un movimiento es oscilatorio si este repite su movimiento regularmente en el tiempo a lo largo de una trayectoria, y además, se ha visto hasta el cansancio, ametralladoramente, que cada sistema mecánico en las proximidades de su mínimo de potencial realiza movimiento oscilatorio, no son por nada los memes. Está en todos lados. 

Entonces, comencemos con la siguiente ecuación: 
 
 $\frac{d^2 x}{dt^2} + \frac{b}{m} \frac{dx}{dt} + \frac{k}{m} x  = F(t)$

  esta ecuación podría resultar un poco familiar, y no es ninguna sorpresa. Todo empieza si partimos del famosísimo sistema de una masa atada a un resorte. Sabemos que tenemos:

   $F = -kx$
   
   y entonces: 
   
   $ma = -kx \rightarrow a = -\frac{k}{m}x \rightarrow \frac{d^2}{dt^2} = -\frac{k}{m}x $

   Y por lo tanto,

   $\frac{d^2x}{dt^2} + \frac{k}{m}x = 0 $

   agregamos un término de fricción que afecta la velocidad del sistema, entonces:

   $\frac{d^2x}{dt^2} + \frac{b}{m}\frac{dx}{dt}+ \frac{k}{m}x = 0 $

   el cual comúnmente llamamos amortiguamiento. 


Si además agregamos una fuerza, cualquiera sea su naturaleza, dependiente del tiempo, entonces tenemos:

$\frac{d^2x}{dt^2} + \frac{b}{m}\frac{dx}{dt}+ \frac{k}{m}x = F(t) $

Ahora, yo no quiero meterme demasiado en la parte teórica de cómo resolvemos este tipo de ecuaciones diferenciales de forma analítica, y más porque bueno, cuando agregamos este último término al que se le llama forzante, este proceso puede ponerse un poco turbio. Pero hay demasidas fuentes por ahí. 

Lo que haremos será resolverlo de forma numérica, usando Julia. 

Primero comencemos pensando en el oscilador armónico simple, nada de amortiguamiento, nada de forzante, nada de nada. Esto ahora puede parecer demasiado, resolver el oscilador armónico numéricamente se puede entender como matar a bazucazos a un mosquito, ahora sí que _sale mas caro el caldo que las albóndigas_, pero tiene su chiste. Servirá para dejar en claro con un ejemplo simple, aspectos importantes a tomar en cuenta a la hora de resolver ecuaciones diferenciales numéricamente. 


Comenzamos importando las paquterías que vamos a usar, DifferentialEquations, como su nombre nos delata, la usaremos para resolver ecuaciones diferenciales, es una paquetería muy interesante, con bastantes métodos y ejemplos en su documentación, vale la pena [checar](https://docs.sciml.ai/DiffEqDocs/stable/). Además se jacta de ser bastante buena a comparación de otras herramientas disponibles, por ejemplo [aquí](http://www.stochasticlifestyle.com/comparison-differential-equation-solver-suites-matlab-r-julia-python-c-fortran/).

```julia:./ex1
using DifferentialEquations, Plots
```
\show{./ex1}

Es importante prestar atención a la estructura de las funciones que definiremos, comencemos transcribiendo:

$\frac{d^2x}{dt^2} = - \frac{b}{m}\frac{dx}{dt} - \frac{k}{m}x + F(t) $


```julia:./ex2
function oscilador(du, u, p, t)
    b, k, m, F = p 
    -(k/m) * u - (b/m) * du + F(t) 
end
```
\show{./ex2}

Para resolverlo, en primer lugar, en su forma más simple, definamos los siguientes parámetros.

```julia:./ex3
b = 0 # Factor de amortiguamiento en 0
m = 1.0 # Masa unitaria
k = 1.0 # Constante del resorte unitaria
F(t) = 0 # Fuerza externa igual a cero por el momento
p = (b, m, k, F) # Definimos una tupla con nuestros parámetros
```

con esos parámetros, nuestra función _oscilador()_ será unicamente $\frac{d^2x}{dt^2} = - \frac{k}{m}x$.

Ahora, como estamos resolviendo una ecuación diferencial de segundo orden, entonces sabemos que necesitamos dos condiciones iniciales, definamos pues, la posición inicial y la velocidad inicial:

```julia:./ex4
u_inicial = 0.25
du_inicial = 0.0
```

Finalmente, ya sólo nos falta el span de tiempo en el cual queremos resolver, digamos:


```julia:./ex5
tspan = (0.0, 20.0)
```

Usemos la siguiente estructura para definir nuestro problema de segundo orden, que se puede consultar [aquí](https://docs.sciml.ai/DiffEqDocs/stable/types/dynamical_types/#SciMLBase.SecondOrderODEProblem):


```julia:./ex6
prob = SecondOrderODEProblem(oscilador, du_inicial, u_inicial, tspan, p)
```

Si sale lo siguiente, es porque todo va bien. Se ha definido nuestro problema, en nuestro span de tiempo con las condiciones iniciales:

\show{./ex6}

Para resolver, únicamente hacemos:

```julia:./ex7
solucion = solve(prob)
```
Ahora imprimamos únicamente los primeros 10 resultados, para no llenar de números esto:


```julia:./ex8
solucion[1:10]
```
\show{./ex8}

Entonces, lo que estamos viendo es que nos regresa dos vectores, uno es para cada momento del tiempo en que computó la solución, y el otro vector, contiene vectores de dos entradas, la velocidad y la posición respectivamente. 

Grafiquemos la solución, haciendo únicamente:

```julia:./ex9
plot(solucion,
linewidth = 2,
title = "Oscilador armónico",
xaxis = "Tiempo (s)",
yaxis = "Velocidad | Posición",
labels = ["Velocidad" "Posición"],
dpi=300
)
```
Donde obtenemos:

![Oscilador](/assets/Oscilador.png)

Lo que observamos no es nada que no sabíamos con anterioridad, que la solución del oscilador armónico es $x(t) = A \cos(\omega t + \phi)$ o de la misma forma, $x(t) = A \cos(\omega t) + B \sin(\omega t)$, donde $\omega = \sqrt{\frac{k}{m}}$.

Pero entonces, enfocándonos en la parte numérica de todo esto, nos pueden surgir muchas dudas, pareció magia, simplemente se sintió como apretar un botón, pero no nos enteramos de nada, ni del algoritmo, ni del tamaño del paso, ni de la tolerancia, ni de nada de lo que vemos comúnmente cuando estudiamos métodos numéricos.

Vayamos paso por paso, entendiendo que está pasando. En primer lugar, una pregunta natural que nos podemos hacer después de resolver algo numéricamente, es qué tan cierta es nuestra solución, aquí podríamos hacer como comúnmente se hace, traernos la solución analítica y ver el error que tenemos, pero probemos otro enfoque. 

Una de las cosas que tenemos bien claras acerca del oscilador armónico es que este [conserva su energía](https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/15%3A_Oscillations/15.03%3A_Energy_in_Simple_Harmonic_Motion).

Entonces, nuestros resultados nos tienen que mostrar que la energía se conserve.
Comencemos obteniendo los valores de velocidad. Como habíamos mencionado, la velociad son los resultados de la primer entrada del vector *u*, y la posición la segunda entrada, entonces: 


```julia:./ex10
velocidad = solucion[1,:]
posicion = solucion[2,:]
```
Y sabemos que: $E = T + U = \frac{1}{2} m v^2 + \frac{1}{2} k x^2$

```julia:./ex11
cinetica = m .* (velocidad.^2 ./ 2) # El (.) en las operaciones en Julia significa que haremos la operación para cada entrada del vector
potencial = k .* (posicion.^2 ./ 2)
energia = cinetica + potencial 
```

Para obtener las estampas de tiempo de cada resultado, hacemos: 

```julia:./ex12
tiempo = solucion.t
```

Y entonces ahora sí, veamos qué está pasando con la energía:

```julia:./ex13
plot(tiempo, energia,
linewidth = 2,
title = "Energía del scilador armónico",
xaxis = "Tiempo (s)",
yaxis = "Energía",
label = false,
dpi=300
)
```
![Energia](/assets/energia.png)


Como podemos ver, aunque tal vez poco, la energía no se está conservando, de hecho, está aumentando, esto no tendría que pasar con el oscilador armónico simple. Ahí está, la culminación de miles de años de ingenio humano se ve reflejado en que la computadora no puede lograr conservar la energía de un simple oscilador. Fin. 

Alto ahí, qué tal si hacemos lo siguiente, aunque ya tenemos una gráfica de posición _vs_ tiempo allá arriba, veamos qué pasa si graficamos la posición que obtuvimos de seleccionar la segunda entrada de neustros resultados, y el tiempo que obtuvimos haciendo _solucion.t_.


```julia:./ex14
plot(tiempo, posicion,
linewidth = 2,
title = "x vs t",
xaxis = "Tiempo (s)",
yaxis = "Posición",
label = false,
dpi=300
)
```

![Pos](/assets/posnaive.png)

Esto definitivamente no se ve como la gráfica que habíamos obtenido anteriormente, pero si anteriormente hicimos _graficar(solucion)_ y ahora hicimos _graficar(tiempo de la solucion, posicion de la solucion)_, y los resultados se ven bastante diferentes, ¿qué está pasando entonces?

A ver, lo primero que hay que tener en mente es que cuando resolvemos ecuaciones diferenciales de forma numérica, estamos aproximándonos a la solución real de forma discreta, por lo tanto habrá un error en cada paso del cálculo, ya sea porque sabemos que las computadoras no la arman chido con los números flotantes, por la forma en que se implementó el algoritmo, entre muchas cosas más. Algo que podemos hacer es entonces, jugar con los argumentos que le damos a nuestra función. [Aquí](https://docs.sciml.ai/DiffEqDocs/stable/basics/common_solver_opts/#solver_options) podemos encontrar la enorme cantidad de argumentos que podemos especificar para resolver nuestro problema, pero para enfocarnos en uno, en uno fácil, pensemos en la tolerancia del error, modifiquemos la tolerancia absoluta y la tolerancia relativa, volvámonos locos y pongámosla muy pequeña. 


```julia:./ex15
solucion_tolerancias = solve(prob, abstol = 1e-15, reltol = 1e-15)
solucion_tolerancias[1:10]
```
\show{./ex15}

Ahora graficamos:


```julia:./ex16
plot(solucion_tolerancias.t, solucion_tolerancias[2,:],
linewidth = 2,
title = "x vs t",
xaxis = "Tiempo (s)",
yaxis = "Posición",
label = false,
dpi=300
)
```
![Post](/assets/postolera.png)

Como podemos ver, mejoro demasiado, pero ahora veamos qué tal con la energía, repetimos nuestros pasos para calcular la energía, graficamos y obtenemos:


![Ener](/assets/energiatol.png)


Bueno, parece que mejoró un poco, al menos pareciera que la energía ya no está aumentando tanto, aún existen pequeños problemas, así que aquí entra otra cuestión importante a la hora de resolver problemas de esta manera y con el manejo de las soluciones que obtenemos usando esta paquetería. 

Primero observemos lo siguiente, veamos cuántos datos estábamos graficando en el primer ejemplo todo feo:

```julia:./ex17
length(solucion)
```
\show{./ex17}

Con razón, son tan pocos resultados, y si vemos cuantos cuando cambiamos la tolerancia, obtenemos:

```julia:./ex18
length(solucion_tolerancias)
```
\show{./ex18}

Bastante más, entonces tiene sentido que nuestras gŕaficas se vean mejor, además de que estamos disminyendo la toleancia del error, que de por sí eso ya es un costo computacional más alto, estamos simplemente graficando más datos.

PERO, ¿entonces por qué cuando hicimos únicamente _plot(solucion)_ se veía infinitamente mejor, ¿qué no eran únicamente 33 resultados?, ¿para empezar por qué unicamente 33 resultados?, ¿no son demasiado pocos?, ¿qué está pasando?

Bueno, en primer lugar hay que aclarar lo de los resultados, por qué es que nos está regresando tan pocos resultados, la respuedta es que esto no es del todo cierto. Lo que es cierto es que el solucionador, es decir, al hacer _solve(prob)_, nos regresa una solución continua, eso hay que tenerlo claro. Los pocos resultados que estamos viendo son en los puntos tal que el solucionador en efectó computó el problema. 
Sin embargo, el solucionador incluye una función de [interpolación](https://en.wikipedia.org/wiki/Interpolation) que aproxima la solución para cualquier tiempo dado. Rápidamente podemos recordar a la interpolación como un método para construir nuevos puntos de datos dentro de un conjunto discreto de puntos conocidos. 


![inter](/assets/interpolacion.png)


Ahora, para dejar en claro que el solucinador en realiad nos regresa una solución continua podríamos evaluar la solución en algunos puntos en específico. 

Podemos generar una serie de puntos, digamos que también dentro de neustro span de tiempo, pero que sean 1000 puntos.


```julia:./ex19
T = range(0,20,length=1000)
```
\show{./ex19}

Y entonces evaluar esos puntos en nuestra solución:

```julia:./ex20
solucion_1000 = solucion(T)
length(solucion_1000)
```
\show{./ex20}

Como podemos ver, en efecto nos regresa 1000 resultados, podemos evaluarla en diez mil, en cincuenta mil, en un millón, pero bueno ahí ya cada quién sus deseos. El chiste es que la solución es continua. 


Ahora sí, regresando a nuestro problema que estamos teniendo con la energía. Hay que tener en claro que resolver numéricamente ecuaciones diferenciales es más que simplemente presionar el botón _resolver_. Hay una gran cantidad de factores a considerar, como ya vimos, la tolerancia, el tamaño del paso, la rigidez del problema y muchos más. 

La clave está en comprender los algoritmos que estamos utilizando. No todas las ecuaciones son iguales y, de manera similar, no todos los métodos numéricos son universalmente aplicables. Cada algoritmo tiene sus propias fortalezas y debilidades. Por ejemplo, en problemas donde la conservación de la enrgía es primordia, los algoritmos simplécticos brillan. 

Para empezar ¿qué es _simpléctico_? Sí, mira te cuento, simpléctico quiere decir que la solución existe en una variedad simpléctica, y bueno según Wikipedia, ..._En geometría diferencial, una rama de las matemáticas, una variedad simpléctica es una variedad suave, M, equipada con una 2-forma diferencial cerrada y no degenerada $\omega$, llamada la forma simpléctica. El estudio de las variedades simplécticas se llama geometría simpléctica o topología simpléctica..._ y bla, bla, bla, bla...

Hay muchas formas y recursos para estudiar este tema, es muy amplio, denso y hasta bonito, pero sin duda, para eso hay quienes lo expliquen infinitamente mejor de lo que yo podría, [aquí](https://scicomp.stackexchange.com/questions/29149/what-does-symplectic-mean-in-reference-to-numerical-integrators-and-does-scip) una de mis publicaciones favoritas acerca de eso. 

Entonces, vamos a buscar algún algoritmo simpléctico en la [documentación](https://docs.sciml.ai/DiffEqDocs/stable/solvers/dynamical_solve/#Symplectic-Integrators) de la paquetería. 


Aquí usaremos el algoritmo _KahanLi8()_, y para esto nos pide ajustar el paso, entonces hagamos:


```julia:./ex21
solucion_simplectica = solve(prob, KahanLi8(), dt=1/10)
solucion_simplectica[1:10]
```
\show{./ex21}

Ahora hacemos los mismos pasos para graficar la energía, y ahora observamos:

![es](/assets/energiasimple.png)

Se ve mejor, porque en esencia ya no observamos esa especie de _drift_ que se observaba en los casos anteriores, y lo que vemos ahora es que la energía está oscilando entre su valor real. 


