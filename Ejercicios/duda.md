<!-- @def showall = true -->
@def title = "Problema 1"
@def tags = ["syntax", "code"]


\literate{/_literate/Lag.jl}

Muy bien, ya tenemos nuestras ecuaciones de movimiento, ahora nos toca resolverlas. El problema nos pide asumir ángulos pequeños, esto porque así nos libraríamos de varios términos feos, porque a veces trabajar analíticamente con las ecuaciones de movimiento que obtenemos no sólo es difícil, puede resultar imposible. 

Pero aquí no nos estamos manchando las manos, y además tenemos nuestras poderosas computadoras, entonces resolvamos como dios manda. 

Empezamos importando las siguientes paqueterías de Julia:


```julia:./ex00
using DifferentialEquations, Plots
```
\show{./ex00}

Definimos nuestros parámetros, la gravedad de nuestro planeta, una longitud de 1.0, y la frecuencia definida como el problema nos dice. Además el span de tiempo para el cual queremos resolver la ecuación, en forma de tupla. 

```julia:./ex1
params = (9.81, 1.0, sqrt(9.81/1.0))
tspan = (0.0, 10.0)
```

\show{./ex1}

Recordamos los dos monstruos que acabamos de obtener:

$\frac{d^{2}}{d t^{2}} x = \frac{g \cos{\left(t Ω \right)}}{3} + \frac{l \sin{\left(θ{\left(t \right)} \right)} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{2} - \frac{l \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} θ{\left(t \right)}}{2}$

y

$\frac{d^{2}}{d t^{2}} θ = - \frac{3 g \sin{\left(θ{\left(t \right)} \right)} + 3 \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} x{\left(t \right)}}{2 l}$

Definimos una función de la siguiente forma en donde únicamente transcribiremos esas ecuaciones a código, hay que ser cuidadosos en respetar la estructura. Tomamos de una vez $l = 1$ para que se vea más limpio el código.


```julia:./ex02
function cuerpo_rigido(ddu, du, u, p, t)
    g, l, Ω = p


    ddu[1] = (g * cos(t * Ω) / 3) + (sin(u[2]) * du[2]^2 / 2) - (cos(u[2]) * ddu[2] / 2)
    ddu[2] = -3/2 * (g * sin(u[2]) + cos(u[2]) * ddu[1]) 
end
```

\show{./ex02}

Definimos nuestras condiciones iniciales, tal cual se nos pide.

```julia:./ex03
u0 = [0.0, 0.0]
du0 = [0.0, 0.0]
```

Y ahora definimos el problema de la siguiente forma:

```julia:./ex04
prob_CR = SecondOrderODEProblem(cuerpo_rigido, du0, u0, tspan, params)
```
\show{./ex04}

Eso significa que todo va bien, que tenemos bien definido nuestro problema con ese span de tiempo, y esas condiciones iniciales.

Ahora, ya se ha discutido [aquí](https://marcoherrera-s.github.io/Problemas/Ejercicios/oscilador/), que resolver ecuaciones diferenciales numéricamente, por lo regular no es tan sencillo como oprimir el botón resolver y listo, hay que tener una idea clara del problema que estamos resolviendo, qué nos interesa del problema, y sobre todo, que tipo de algoritmos existen. 

Supongamos que ingenuamente, simplemente le damos a resolver:


```julia
sol_CR_ingenuo = solve(prob_CR)
```
<!-- \show{./ex59} -->


Muy bien, ahora grafiquemos lo que obtuvimos haciendo:


```julia
ingenuo = plot(sol_CR_ingenuo)
```
<!-- \show{./ex58} -->


![ingenuo](/assets/ingenuo.png)


Nuestra gráfica no tiene ningun sentido. 
Entonces, lo que está pasando es que nos estamos enfrentando a un sistema de ecuaciones diferenciales del tipo _stiff_ o _rígidas_ en español. 
Este tipo de ecuaciones diferenciales son todo un mundo, sobre el cual pueden saber más [aquí](https://en.wikipedia.org/wiki/Stiff_equation), [aquí](https://scicomp.stackexchange.com/questions/891/the-definition-of-stiff-ode-system) y [aquí](https://docs.sciml.ai/SciMLTutorialsOutput/html/introduction/02-choosing_algs.html). Entre muchos más lados. 

Pero en esencia lo que está pasando es que los algoritmos tradicionales no funcionan correctamente.

Lo que podemos hacer es ir al siguiente [enlace](https://docs.sciml.ai/DiffEqDocs/stable/solvers/ode_solve/#OrdinaryDiffEq.jl-for-Stiff-Equations), y buscar algún algoritmo especializado para este tipo de ecuaciones.

Aquí usaremos el algoritmo KenCarp47(), este es un método ESDIRK _(Explicit Singly Diagonally Implicit Runge Kutta)_, de siete etapas de cuarto orden. Este método es parte de una [familia de algoritmos](https://arxiv.org/abs/1803.01613) que están diseñados para manejar ecuaciones diferenciales rígidas. Aumentaremos el número máximo de iteraciones sólo por si las moscas. 

Entonces hagamos: 


```julia:./ex05
prob_CR = SecondOrderODEProblem(cuerpo_rigido, du0, u0, tspan, params)
```
\show{./ex05}

```julia:./ex06
sol_CR= solve(prob_CR, KenCarp47(), maxiters=1e7)
sol_CR[1:5]

```
\show{./ex06}


Y además, para comparar, podemos hacer la comparación con lo que sería el sistema aproximado, es decir, haciendo: 

$\sin{x} = x$

y 

$\cos{x} = 1$

Por lo que nuestro sistema aproximado nos quedaría:


```julia:./ex006
function cuerpo_rigido_aprox(ddu, du, u, p, t)
    g, l, Ω = p


    ddu[1] = (g * cos(t * Ω) / 3) + (u[2] * du[2]^2 / 2) - (ddu[2] / 2)
    ddu[2] = -3/2 * (g * u[2] + ddu[1]) 
end

```
\show{./ex006}

Y resolviendo con las mismas condiciones, tendríamos:

```julia:./ex0006
prob_CR_aprox = SecondOrderODEProblem(cuerpo_rigido_aprox, du0, u0, (0.0, 10.0), params)
```
\show{./ex0006}

```julia:./ex00006
sol_CR_aprox= solve(prob_CR_aprox, KenCarp47(), maxiters=1e6)
sol_CR_aprox[1:5]

```
\show{./ex00006}

Ahora, graficando en primer lugar la posición del punto, tanto la solución numérica como la solución aproximada tendríamos:

```julia
plot(sol_m, idxs = (0, 2), color=:black, label="Numérico", dpi=500)
plot!(sol_m_aprox, idxs = (0, 2), linestyle=:dash, label="Aproximación", ylabel="Posición del punto", ylims=(-7,7), color=:red, title="Posición del punto en cuerpo rígido")
```
Y obtenemos:

![poscr](/assets/pospunto.png)

De la misma forma podemos graficar los demás resultados. El índice 0 es el tiempo, el 1 la velocidad del punto, el 2 es la posición del punto como se hizo para graficar el resultado anterior, el índice 3 es la velocidad del ángulo, y el índice 4 es el valor del ángulo, entonces tendríamos:


![velpu](/assets/velpunto.png)

![velangu](/assets/velangulo.png)

![valan](/assets/anguba.png)

Y como podemos observar, obtenemos movimientos oscilatorios, y también, como era de esperarse, las solución numérica y la aproximada se parecen demasiado recién comienza el sistema. 
