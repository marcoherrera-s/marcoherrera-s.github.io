<!-- @def showall = true -->
@def title = "Problema 1"
@def tags = ["syntax", "code"]


\literate{/_literate/Lag.jl}

Muy bien, ya tenemos nuestras ecuaciones de movimiento, ahora nos toca resolverlas. El problema nos pide asumir ángulos pequeños, esto porque así nos libraríamos de varios términos feos, porque a veces trabajar analíticamente con las ecuaciones de movimiento que obtenemos no sólo es difícil, puede resultar imposible. 

Pero aquí no nos estamos manchando las manos, y además tenemos nuestras poderosas computadoras, entonces resolvámosla como dios manda. 

Empezamos importando las siguientes paqueterías de Julia:


```julia:./ex17
using DifferentialEquations, Plots
```
\show{./ex17}

Definimos nuestros parámetros, la gravedad de nuestro planeta, una longitud de 1.0, y la frecuencia definida como el problema nos dice. Además el span de tiempo para el cual queremos resolver la ecuación, en forma de tupla. 

```julia:./ex88
params = (9.81, 1.0, sqrt(9.81/1.0))
tspan = (0.0, 10.0)
```

\show{./ex88}

Ahora, recordamos los dos monstruos que acabamos de obtener:

$\frac{d^{2}}{d t^{2}} x = \frac{g \cos{\left(t Ω \right)}}{3} + \frac{l \sin{\left(θ{\left(t \right)} \right)} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{2} - \frac{l \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} θ{\left(t \right)}}{2}$

y

$\frac{d^{2}}{d t^{2}} θ = \frac{3 \left(g \sin{\left(θ{\left(t \right)} \right)} - \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} x{\left(t \right)}\right)}{2 l}$

Ahora definimos una función de la siguiente forma en donde únicamente transcribiremos esas ecuaciones a código, hay que ser cuidadosos en respetar la estructura. 


```julia:./ex81
function problema_choncho(ddu, du, u, p, t)
    g, l, Ω = p


    ddu[1] = g * cos(t * Ω) / 3 + l * sin(u[2]) * du[2]^2 / 2 - l * cos(u[2]) * ddu[2] / 2
    ddu[2] = 3 * (g * sin(u[2]) - cos(u[2]) * ddu[1]) / (2 * l)
end
```

\show{./ex81}

Definimos nuestras condiciones iniciales, tal cual se nos pide.

```julia:./ex88
u0 = [0.0, 0.0]
du0 = [0.0, 0.0]
```

Y ahora definimos el problema de la siguiente forma:

```julia:./ex89
prob = SecondOrderODEProblem(problema_choncho, du0, u0, tspan, params)
```
\show{./ex89}

Eso significa que todo va bien, que tenemos bien definido nuestro problema con ese span de tiempo, y esas condiciones iniciales.

Ahora, ya se ha discutido aquí, que resolver ecuaciones diferenciales numéricamente, por lo regular no es tan sencillo como oprimir el botón resolver y listo, hay que tener una idea clara del problema que estamos resolviendo, qué nos interesa del problema, y sobre todo, que tipo de algoritmos existen. 

Supongamos que ingenuamente, simplemente le damos a resvolver e imprimimos los primeros 10 resultados, porque pueden ser demasiados y no queremos llenar de números este sitio.


```julia:./ex59
sol_ingenuo = solve(prob)
sol_ingenuo[10]

```
\show{./ex59}


Muy bien, ahora grafiquemos lo que obtuvimos haciendo:


```julia:./ex58
ingenuo = plot(sol_ingenuo, dpi=300)
```
\show{./ex58}


![ingenuo](/assets/ingenuo.png)



Entonces, lo que está pasando es que nos estamos enfrentando a un sistema de ecuaciones diferenciales del tipo _stiff_ o _rígidas_ en español. 
Este tipo de ecuaciones diferenciales son todo un mundo, sobre el cual pueden saber más aquí, aquí y aquí. Entre muchos más lados. 

Pero en esencia lo que está pasando es que los algoritmos tradicionales no funcionan correctamente.

Entonces lo que podemos hacer es ir al siguiente enlace, y buscar algún algoritmo especializado para este tipo de ecuaciones.

Aquí usaremos el algoritmo ESDIRK547L2SA2(), que es un método Runge-Kutta implícito, por sus siglas ESDIRK _(Singly Diagonally Implicit Runge Kutta)_, de séptimo nivel, quinto orden y estable para resolver ecuaciones diferenciales ordinarias. 

Entonces hagamos: 


```julia:./ex51
sol = solve(prob, ESDIRK547L2SA2())
sol[10]

```
\show{./ex51}

Y ahora grafiquemos:

```julia:./ex55
plotsol = plot(sol, dpi=300)
```
\show{./ex55}


![solu](/assets/solu.png)

Le hacemos unos cambios, para observar mejor:


![solu2](/assets/solu2.png)


Entonces, como vemos, ahora ya obtenemos una solución que se ve decente. Para interpretar estos resultados, podemos ver que...