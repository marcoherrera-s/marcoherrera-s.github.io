@def title = "Corchetes de Poisson"
@def tags = ["syntax", "code", "math"]

# corchetes de poisson

En mecánica Hamiltoniana, el estado instantáneo de un sistema con $n$ grados de libertad se describe con punto en el **espacio de fases** $2n$-dimensional, cuyas coordenadas son las $n$ coordenadas generalizadas $q = (q_1, ..., q_n)$ y los $n$ momentos conjugados $p = (p_1, ..., p_n)$. Además, la evolución temporal de este punto $(q(t), p(t))$ está dictada por las ecuaciones de Hamilton que ya vimos:

$$
\dot{q}_i = \frac{\partial \mathcal{H}}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial \mathcal{H}}{\partial q_i}
$$

A veces, no estamos interesados solo en la trayectoria completa $(q(t), p(t))$, sino en el valor de alguna cantidad física a lo largo de esa trayectoria. Esta puede ser la energía, el momento lineal, el momento angular, o simplemente la posición o velocidad. Estas son funciones que dependen del estado del sistema, es decir, de las $q$, y de las $p$, y chance de $t$. Bueno pues cualquiera de estas funciones $f(q,p,t)$ es un **observable**.

Entonces, dado un observable $f(q, p, t)$, ¿cómo cambia su valor a medida que el sistema evoluciona en el tiempo siguiendo las ecuaciones de Hamilton? Es decir, queremos calcular la derivada temporal total de $f$ a lo largo de una trayectoria física.

Usando la regla de la cadena, tenemos:

$$
\frac{df}{dt} = \sum_{i=1}^n \left( \frac{\partial f}{\partial q_i} \frac{dq_i}{dt} + \frac{\partial f}{\partial p_i} \frac{dp_i}{dt} \right) + \frac{\partial f}{\partial t}
$$

Aquí, $\frac{dq_i}{dt} = \dot{q}_i$ y $\frac{dp_i}{dt} = \dot{p}_i$ están descritas por las ecuaciones de Hamilton, entonces sustituyamos

$$
\frac{df}{dt} = \sum_{i=1}^n \left( \frac{\partial f}{\partial q_i} \frac{\partial H}{\partial p_i} - \frac{\partial f}{\partial p_i} \frac{\partial H}{\partial q_i} \right) + \frac{\partial f}{\partial t}
$$

Lo divertido es que esta estructura, la que está dentro de la suma, es muy particular, aparece tan a menudo y es tan fundamental que se le da su propio nombre y notación.

Digamos que, dados dos observables cualesquiera, $f(q, p, t)$ y $g(q, p, t)$, definimos su **Corchete de Poisson**, denotado por $\{f, g\}$, como:

$$
\{f, g\}_{q,p} \equiv \sum_{i=1}^n \left( \frac{\partial f}{\partial q_i} \frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i} \right)
$$

Entonces, usando la definición del Corchete de Poisson, la ecuación que encontramos para la derivada temporal total de un observable $f$ se reescribe tranquilamente como
$$
\boxed{ \frac{df}{dt} = \{f, H\} + \frac{\partial f}{\partial t} }
$$


Un observable $f$ es una constante del movimiento si $\frac{df}{dt} = 0$, es decir

$$
\{f, H\} + \frac{\partial f}{\partial t} = 0
$$

Si, además, el observable $f$ no depende explícitamente del tiempo ($\frac{\partial f}{\partial t} = 0$), entonces la condición se simplifica a:

$$
\{f, H\} = 0
$$

Esto está chido porque un observable que no depende explícitamente del tiempo es una constante del movimiento si y solo si su Corchete de Poisson con el Hamiltoniano es cero.

Los Corchetes de Poisson satisfacen unas propiedades muy interesantes: 
1.  **Antisimetría:**
    $$ \{f, g\} = -\{g, f\} $$

2.  **Bilinealidad:** Para constantes $a, b$:
    $$ \{af + bg, h\} = a\{f, h\} + b\{g, h\} $$
    $$ \{f, ah + bg\} = a\{f, h\} + b\{f, g\} $$

3.  **Regla del Producto:
    $$ \{fg, h\} = f\{g, h\} + \{f, h\}g $$
    $$ \{f, gh\} = \{f, g\}h + g\{f, h\} $$

4.  **Identidad de Jacobi:**
    $$ \{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\} = 0 $$


También son importantes los corchetes de Poisson entre las propias variables canónicas $(q_i, p_j)$:

$$
\boxed{ \{q_i, q_j\} = 0 \quad \{p_i, p_j\} = 0 \quad \{q_i, p_j\} = \delta_{ij} }
$$


La primera relación nos dice que las diferentes posiciones no se relacionan de manera fundamental, y la segunda dice lo mismo para los momentos. La regla clave y más interesante es la tercera que significa que una coordenada de posición solo tiene una conexión directa e intrínseca con *su propio* momento, no con otros momentos.
Estos corchetes definen la **estructura simpléctica**, o acá menos rimbombante, digamos que la geometría inherente del espacio de fases. Son independientes del Hamiltoniano específico del sistema, por lo que son una propiedad intrínseca de las coordenadas canónicas.

---

Finalmente, para conectar la parte anterior que se vio sobre funciones generadoras y los corchetes de Poisson, pues resulta que estos últimos proporcionan un criterio elegante y poderoso para determinar si una transformación $(q, p) \to (Q, P)$ es canónica.

Digamos que una transformación $(q, p) \to (Q(q, p, t), P(q, p, t))$ es canónica **si y solo si** preserva los Corchetes de Poisson fundamentales. Es decir, si se cumplen
$$
\{Q_i, Q_j\}_{q,p} = 0
$$
$$
\{P_i, P_j\}_{q,p} = 0
$$
$$
\{Q_i, P_j\}_{q,p} = \delta_{ij}
$$

Además, también se puede demostrar que si una transformación $(q, p) \to (Q, P)$ satisface estas condiciones, entonces para *cualquier* par de funciones $f, g$, se cumple
$$ \{f, g\}_{q,p} = \{f, g\}_{Q,P} $$
que nos dice que el valor del Corchete de Poisson de dos observables cualesquiera es invariante bajo transformaciones canónicas.

Finalmente, hay otro resultado divertido, conocido como teorema de Poisson, que nos que que si $f(q, p)$ y $g(q, p)$ son dos constantes del movimiento que no dependen explícitamente del tiempo (es decir, $\{f, H\} = 0$ y $\{g, H\} = 0$), entonces su Corchete de Poisson, $h = \{f, g\}$, también es una constante del movimiento (es decir, $\{h, H\} = \{ \{f, g\}, H \} = 0$).

Este lo podemos usar para generar nuevas constantes de movimiento a partir de las conocidas. Si tenemos dos leyes de conservación, su corchete de Poisson nos da otra ley de conservación. 
