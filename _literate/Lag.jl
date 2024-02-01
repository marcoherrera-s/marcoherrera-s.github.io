using Pkg # hideall
Pkg.activate("_literate/Project.toml")
Pkg.instantiate()

# # Problema

# A veces, al resolver problemas de física, algunas de las cosas que más me han molestado es: una, sufrir por la _talacha_ y dos; no hay dos.

# A ver, como físicos, siempre nos vamos a enfrentar a la talacha, a veces es el pan de cada día. No hay manera de terminar con ella, pero sí de hacerla más soportable.

# Entonces, lo que haremos hoy, será resolver uno de esos problemas que requeriría un buen arrastre del lápiz, pero sin usar el lápiz.

# El problema es el siguiente:


# 1. El punto A de una barra *AB* se puede mover sin fricción a lo largo de una línea horizontal (_eje x_). La barra es homogénea de masa _m_ y longitud _l_. Se mueve en un plano vertical donde puede rotar libremente alrededor de *A*. Sobre *A* se ejerce una fuerza periódica en el eje horizontal $F_x = \frac{1}{3} mg \cos(\Omega t) $, donde  $\Omega^2 = \frac{g}{l}$. Encontrar las ecuaciones de movimiento y resolverlas asumiendo que el ángulo $\theta$ y la velocidad angular $\dot{\theta}$ son pequeños. Usar las condiciones iniciales $x(0) = \dot{x}(0) = 0 $ y $ \theta(0) = \dot{\theta}(0) $.


# \fig{/_assets/problema.png}

# Lo primero que haremos será importar la primera paquetería que vamos a usar.

# Para la talacha usaremos SymPy, esta es una paquetería de Python que estamos llamando desde Julia, la usaremos para los cálculos simbólicos.

using SymPy



# Comenzamos definiendo nuestras variables y nuestras funciones. Para entender rápidamente cuáles serán variables y cuáles funciones, primero hay que tener una idea clara de los grados de libertad de nuestro sistema y de las [coordenadas canónicas](https://en.wikipedia.org/wiki/Canonical_coordinates), entonces, observando el sistema podemos concluir que las coordenadas canónicas serán la distancia en $x$ y el ángulo $\theta$ en el cual está rotando la barra.

# Como en nuestro problema estamos lidiando con un sólido rígido, entonces nos interesan las coordenadas de su centro de masa: $x_{cm}$ y $y_{cm}$.

# $m$ es la masa, $g$ la gravedad, $l$ la longitud de la barra, $t$ el tiempo.
@syms m g y_cm x_cm l t  # Así definimos variables 
θ = SymFunction("θ")(t)  # Así definimos funciones
x = SymFunction("x")(t)

# Ahora necesitamos definir nuestras derivadas para cada una de nuestras funciones, esto para que nos sean más fáciles algunas operaciones futuras.

xdot = diff(x, t)
xddot = diff(xdot, t)
thetadot = diff(θ, t)
thetaddot = diff(thetadot, t)


# Obtenemos las coordenadas del centro de masa de la barra:
x_cm = x + l//2 * sin(θ)

# $\frac{l \sin{\left(θ{\left(t \right)} \right)}}{2} + x{\left(t \right)}$

y_cm = l//2*cos(θ)

# $\frac{l \cos{\left(θ{\left(t \right)} \right)}}{2}$

# Derivamos nuestras variables haciendo:


x_cmd = diff(x_cm, t)

# $\frac{l \cos{\left(θ{\left(t \right)} \right)} \frac{d}{d t} θ{\left(t \right)}}{2} + \frac{d}{d t} x{\left(t \right)}$

y_cmd = diff(y_cm, t)

# $- \frac{l \sin{\left(θ{\left(t \right)} \right)} \frac{d}{d t} θ{\left(t \right)}}{2}$

# El siguiente paso es obtener la energía cinética, al tratar con un sólido rígido, sabemos que la energía cinética es de la siguiente forma: $T = T_{cm} + T_{rotacional}$. Y es aquí en donde empezaría la talacha si tuviéramos que arrastrar el lápiz. Pero hoy no. Comencemos con $T_{cm}$, esta está fácil, sabemos muy bien que $T_{cm} = \frac{1}{2} m ( \dot{x_{cm}}^2 + \dot{y_{cm}}^2 ) $, entonces:


T_cm = 1//2 * m * (x_cmd^2 + y_cmd^2)


# $\frac{m \left(\frac{l^{2} \sin^{2}{\left(θ{\left(t \right)} \right)} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{4} + \left(\frac{l \cos{\left(θ{\left(t \right)} \right)} \frac{d}{d t} θ{\left(t \right)}}{2} + \frac{d}{d t} x{\left(t \right)}\right)^{2}\right)}{2}$

# Como podemos ver, aún no está tan bien, personas inteligentes como nosotros hubieramos usado la identidad $\sin^2 x + \cos^2 x = 1$

# Eso no es problema, podemos hacer simplemente:


T_cm = simplify(expand(T_cm))


# $\frac{m \left(l^{2} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2} + 4 l \cos{\left(θ{\left(t \right)} \right)} \frac{d}{d t} x{\left(t \right)} \frac{d}{d t} θ{\left(t \right)} + 4 \left(\frac{d}{d t} x{\left(t \right)}\right)^{2}\right)}{8}$

# Y damos gracias no haber hecho esa talachita.

# Nuestro siguiente paso es obtener la energía cinética rotacional. Para esta sabemos que $T_{rot} = \frac{1}{2} \omega I_{cm} \omega$, aquí estamos suponiento que $I_{cm}$ es el tensor de inercia para ejes en el cuerpo respecto al centro de masa, este tensor, si es que la vida no nos odia demasiado aún, la mayoría de las veces es dado en problemas de este tipo. Continuando, $\omega$ es la velocidad angular, nuestro cuerpo rota respecto al ángulo $\theta$, por lo tanto, con la regla de la mano derecha tendríamos: $\omega = \dot{\theta} \hat{z}$.


I = sympy.diag(0, m*l^2 // 12, m*l^2 // 12)

# $\begin{bmatrix} 0 & 0 & 0 \\ 0 & \frac{l^2 m}{12} & 0 \\ 0 & 0 & \frac{l^2 m}{12} \end{bmatrix}$


ω = Matrix([0 0 diff(θ, t)]) 

# $\omega = \begin{bmatrix} 0 & 0 & \frac{d\theta}{dt} \end{bmatrix}$

T_rot = (1//2)*ω*I*ω.T # .T para trasponer la matriz y poder hacer la operación

T_rot = T_rot[1]


# $\frac{l^{2} m \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{24}$

# Finalmente, sumamos nuestras dos energías cinéticas y obtenemos la energía cinética total.
T = T_cm + T_rot

# $\frac{l^{2} m \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{24} + \frac{m \left(l^{2} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2} + 4 l \cos{\left(θ{\left(t \right)} \right)} \frac{d}{d t} x{\left(t \right)} \frac{d}{d t} θ{\left(t \right)} + 4 \left(\frac{d}{d t} x{\left(t \right)}\right)^{2}\right)}{8}$



# La expandimos, para que no se vea tan grosera.
T = expand(T)


# $\frac{l^{2} m \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{6} + \frac{l m \cos{\left(θ{\left(t \right)} \right)} \frac{d}{d t} x{\left(t \right)} \frac{d}{d t} θ{\left(t \right)}}{2} + \frac{m \left(\frac{d}{d t} x{\left(t \right)}\right)^{2}}{2}$

# Ahora definimos una nueva variable, $\Omega$, que es la frecuencia de la fuerza que se aplica en el eje x.
@syms Ω

# Para obtener la energía potencial, tenemos que sumar la que es debido a la gravedad, y el potencial asociado a la fuerza. Lo obtenemos recordando que: $U(\mathbf{x}) = -\int \mathbf{F}(\mathbf{x}) \cdot d\mathbf{x}$

# Por lo tanto:
U = -(m*g*l//2)*cos(θ) - integrate(1//3 * m*g*cos(Ω*t), x)
U = simplify(U)


# $- \frac{g m \left(3 l \cos{\left(θ{\left(t \right)} \right)} + 2 x{\left(t \right)} \cos{\left(t Ω \right)}\right)}{6}$

# Finalmente ya tenemos todo para obtener el Lagrangiano, entonces:

L = T - U


# $\frac{g m \left(3 l \cos{\left(θ{\left(t \right)} \right)} + 2 x{\left(t \right)} \cos{\left(t Ω \right)}\right)}{6} + \frac{l^{2} m \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{6} + \frac{l m \cos{\left(θ{\left(t \right)} \right)} \frac{d}{d t} x{\left(t \right)} \frac{d}{d t} θ{\left(t \right)}}{2} + \frac{m \left(\frac{d}{d t} x{\left(t \right)}\right)^{2}}{2}$

# Obtenemos las ecuaciones de Euler - Lagrange, tal que: $\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}_i} \right) - \frac{\partial L}{\partial q_i} = 0$ 

# Para $x$:

ELX = diff(diff(L, xdot), t) - diff(L, x)


# $- \frac{g m \cos{\left(t Ω \right)}}{3} - \frac{l m \sin{\left(θ{\left(t \right)} \right)} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{2} + \frac{l m \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} θ{\left(t \right)}}{2} + m \frac{d^{2}}{d t^{2}} x{\left(t \right)}$

# Para $\theta$:

ELθ = diff(diff(L, thetadot), t) - diff(L, θ)

# $\frac{g l m \sin{\left(θ{\left(t \right)} \right)}}{2} + \frac{l^{2} m \frac{d^{2}}{d t^{2}} θ{\left(t \right)}}{3} + \frac{l m \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} x{\left(t \right)}}{2}$

# Ahora despejamos para $\frac{d^{2}}{d t^{2}} x$ de la siguiente forma:

sol_1 = solve(ELX, xddot)

sol_1[1]

# $\frac{g \cos{\left(t Ω \right)}}{3} + \frac{l \sin{\left(θ{\left(t \right)} \right)} \left(\frac{d}{d t} θ{\left(t \right)}\right)^{2}}{2} - \frac{l \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} θ{\left(t \right)}}{2}$

# Y para $\frac{d^{2}}{d t^{2}} θ$ :


sol_2 = solve(ELθ, thetaddot)
sol_2[1]



# $- \frac{3 g \sin{\left(θ{\left(t \right)} \right)} + 3 \cos{\left(θ{\left(t \right)} \right)} \frac{d^{2}}{d t^{2}} x{\left(t \right)}}{2 l}$

