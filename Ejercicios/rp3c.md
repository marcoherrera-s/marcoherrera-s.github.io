@def title = "3. Problema de tres cuerpos"
@def tags = ["syntax", "code", "math"]

# Resolviendo el problema de tres cuerpos

Recordando las ecuaciones de movimiento que obtuvimos:
$$
\begin{aligned}
\dot{x} &= v_x, \\
\dot{y} &= v_y, \\
\dot{v}_x &= 2 v_y - \frac{(1 - \mu)(x + \mu)}{\left[(x + \mu)^2 + y^2\right]^{3/2}} - \frac{\mu(x - 1 + \mu)}{\left[(x - 1 + \mu)^2 + y^2\right]^{3/2}} + x, \\
\dot{v}_y &= -2 v_x - \frac{(1 - \mu)y}{\left[(x + \mu)^2 + y^2\right]^{3/2}} - \frac{\mu y}{\left[(x - 1 + \mu)^2 + y^2\right]^{3/2}} + y, \\
\end{aligned}
$$
Ahora, vamos a resolver numéricamente. Pero antes, hay algo divertido para comentar.

### El macro `@taylorize`

El macro `@taylorize` es parte de la paquetería que vamos a usar para resolver las ecuaciones numéricamente, TaylorIntegration.jl de Julia, y está pensado para optimizar la integración de ecuaciones diferenciales usando el método de Taylor. Pero antes de entrar en detalles, vale la pena mencionar qué es un macro en Julia: los macros son elementos de *metaprogramación* que permiten generar y transformar código antes de que se ejecute. En pocas palabras, son herramientas que ayudan a escribir programas más eficientes o reducir la repetición de código.

Volviendo a `@taylorize`, su función principal es analizar automáticamente la definición de las EDOs y generar métodos especializados que optimizan las funciones de integración. Esta optimización se logra evitando asignaciones temporales y cálculos redundantes, lo que hace que la integración sea más rápida y eficiente.

Es importante recordar que este macro está en fase experimental, de hecho en la página hay un _WARNING_ enorme, por lo que, aunque puede mejorar el rendimiento, es buena práctica revisar los resultados para garantizar que la optimización sea precisa.

### Estructura de la función `three_body_restricted_param!`

En Julia, las funciones que describen ODEs suelen estructurarse de forma estándar, donde `du` es el vector de derivadas a calcular, `u` contiene las variables de estado, `p` representa parámetros adicionales, y `t` es el tiempo actual. 

La estructura de la función `three_body_restricted_param!` es la siguiente:

```julia
@taylorize function three_body_restricted_param!(du::Vector{T}, u::Vector{T}, p, t) where T

x, y, v_x, v_y, μ = u
x_plus_mu = x + μ
x_minus_one_plus_mu = x - 1 + μ
one_minus_mu = 1 - μ

r1 = sqrt(x_plus_mu^2 + y^2)
r2 = sqrt(x_minus_one_plus_mu^2 + y^2)
r1_cubed = r1^3
r2_cubed = r2^3

du[1] = v_x
du[2] = v_y
du[3] = (2v_y + x) - (one_minus_mu * x_plus_mu / r1_cubed + μ * x_minus_one_plus_mu / r2_cubed)
du[4] = (-2v_x + y) - (one_minus_mu * y / r1_cubed + μ * y / r2_cubed)
du[5] = zero(μ)

end
```

1. **Argumentos de entrada:**
   - `du::Vector{T}`: Vector de salida donde se almacenan las derivadas de las variables de estado (las ecuaciones de movimiento).
   - `u::Vector{T}`: Vector de entrada que contiene las variables de estado, en este caso, la posición `(x, y)`, las velocidades `(v_x, v_y)`, y el parámetro `μ`.
   - `p` y `t`: Se incluyen para seguir la estructura estándar de las funciones ODE en Julia, aunque no se usan en este caso.

### Definiciones previas para optimización

Dentro de la función, se realizan algunas definiciones de variables adicionales antes de calcular las derivadas. Estas definiciones incluyen las siguientes:

- **Posiciones relativas y distancias**: 
   ```julia
   x_plus_mu = x + μ
   x_minus_one_plus_mu = x - 1 + μ
   one_minus_mu = 1 - μ
   r1 = sqrt(x_plus_mu^2 + y^2)
   r2 = sqrt(x_minus_one_plus_mu^2 + y^2)
   r1_cubed = r1^3
   r2_cubed = r2^3
   ```

   Estas expresiones calculan las posiciones relativas y distancias de los cuerpos en el sistema. En vez de calcular estas cantidades en cada derivada, las definimos una sola vez al inicio, almacenando los valores de `r1` y `r2` junto con sus potencias cúbicas (`r1_cubed` y `r2_cubed`). Esto evita cálculos repetidos y reduce el uso de memoria.

   
### Cálculo de las derivadas

Las derivadas se asignan a los elementos del vector `du` de la siguiente manera:

```julia
du[1] = v_x
du[2] = v_y
du[3] = (2v_y + x) - (one_minus_mu * x_plus_mu / r1_cubed + μ * x_minus_one_plus_mu / r2_cubed)
du[4] = (-2v_x + y) - (one_minus_mu * y / r1_cubed + μ * y / r2_cubed)
du[5] = zero(μ)
```

- `du[1]` y `du[2]` representan las ecuaciones de velocidad para `x` y `y`.
- `du[3]` y `du[4]` corresponden a las aceleraciones, donde se incluyen términos de fuerza gravitacional y de la velocidad perpendicular.
- `du[5] = zero(μ)` es un caso especial que se estudiará más tarde para el método de _Jet Trasnport_.

Pero antes, debemos obtener nuestras condiciones iniciales. 