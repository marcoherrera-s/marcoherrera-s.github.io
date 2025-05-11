@def title = "Introducción"
@def tags = ["syntax", "code", "math"]

# introducción a la mecánica hamiltoniana

Antes de comenzar a hablar de la mecánica hamiltoniana, es importante tener fresco el concepto de la **transformada de Legendre**, para hacerlo más fácil todo, imaginemos que sólo queremos dar respuesta a la siguiente pregunta:

> Sea alguna función $f(x)$. ¿Puedo construir OTRA función con OTRA variable que contenga la misma información?

Es decir:
$$
f(x)\;\xrightarrow{\hat A}\;g(p)\;\xrightarrow{\hat A}\;f(x)
$$
La respuesta es que sí y justamente es la transformada de Legendre la que nos ayuda a hacer eso, tan solo pensemos en la derivada de nuestra función tal que
$$
\frac{df}{dx} = p
$$
donde sabemos que la información de cómo cambia la pendiente de $f(x)$ está ahora contenida en $p$. 
Para construir $g(p)$, la transformada de Legendre nos dice que 
$$
g(p) = px - f(x)
$$
o visto de otra forma más explícita 
$$
g(p) = \frac{df(x)}{dx} x - f(x)
$$
lo que nos permite definir el operador $\hat{A}$ tal que $\hat{A} = \left[ x\frac{d}{dx} -1 \right]$, en donde, ahora sí
$$
\hat{A}f(x)=g(p)
$$
y además
$$
\hat{A}g(p) = f(x)
$$
Esto se ve más bonito cuando se ve geométricamente qué es lo que está pasando. Pero lamentablemente no me quiero meter tanto en eso en este espacio. Sin embargo, si es de interés, hay algunas cosas divertidas aquí: [1](https://arxiv.org/pdf/0806.1147), [2](https://physics.stackexchange.com/questions/4384/physical-meaning-of-legendre-transformation/69374#69374).

---

También, antes de ir a lo que de verdad nos interesa, es importante tener claro que una función $f(x_{1},x_{2},\dots,x_{n})$ es homogénea de grado $r$ si, para todo número real $\lambda>0$
$$
f(\lambda x_{1}, \lambda x_{2},\dots, \ \lambda x_{n}) = \lambda^{r}f(x_{1},x_{2},\dots,x_{n})
$$
Entonces, ahora podemos hablar de el **Teorema de Euler sobre funciones homogéneas**.

Este es simplemente que

$$
\sum_{i=1}^{n} x_{i} \frac{\partial f}{\partial x_{i}} = r \cdot f(x_{1},x_{2},\dots,x_{n})
$$
O, escrito de forma más explícita 
$$
x_{1}\frac{\partial f}{\partial x_{1}} + x_{2}\frac{\partial f}{\partial x_{2}} + \dots + x_{n}\frac{\partial f}{\partial x_{n}} = r \cdot f(x_{1},x_{2},\dots,x_{n})
$$

 Esto nos dice que la suma ponderada de las derivadas parciales de la función (donde cada derivada parcial se multiplica por su variable respectiva) es simplemente la función original multiplicada por su grado de homogeneidad.

Con lo anterior en mente, ahora recordemos la definición más fundamental de la energía cinética $T$ de una partícula de masa $m$ con velocidad $\mathbf{v}$:
$$
T = \frac{1}{2} m \mathbf{v} \cdot \mathbf{v} = \frac{1}{2} m |\mathbf{v}|^2
$$
Aquí, la energía cinética es una función de las componentes de la velocidad. Consideremos estas componentes como las variables de nuestra función.

En coordenadas cartesianas tenemos que
$$
T(v_x, v_y, v_z) = \frac{1}{2} m (v_x^2 + v_y^2 + v_z^2)
$$
Si checamos la homogeneidad, tendríamos que
$$
T(\lambda v_x, \lambda v_y, \lambda v_z) = \frac{1}{2} m ((\lambda v_x)^2 + (\lambda v_y)^2 + (\lambda v_z)^2)
$$
$$
= \frac{1}{2} m (\lambda^2 v_x^2 + \lambda^2 v_y^2 + \lambda^2 v_z^2) = \lambda^2 \left[ \frac{1}{2} m (v_x^2 + v_y^2 + v_z^2) \right]
$$
$$
= \lambda^2 T(v_x, v_y, v_z)
$$
Por lo que vemos que la energía cinética $T(v_x, v_y, v_z)$ es una función homogénea de grado $r=2$.

En coordenadas esféricas $(r, \theta, \phi)$, tenemos que
$$
T(\dot{r}, \dot{\theta}, \dot{\phi}; r, \theta) = \frac{1}{2} m (\dot{r}^2 + r^2 \dot{\theta}^2 + r^2 \sin^2\theta \dot{\phi}^2)
$$
Si escalamos las velocidades: $(\dot{r}, \dot{\theta}, \dot{\phi}) \rightarrow (\lambda\dot{r}, \lambda\dot{\theta}, \lambda\dot{\phi})$:
$$
T(\lambda\dot{r}, \lambda\dot{\theta}, \lambda\dot{\phi}; r, \theta) = \frac{1}{2} m ((\lambda\dot{r})^2 + r^2 (\lambda\dot{\theta})^2 + r^2 \sin^2\theta (\lambda\dot{\phi})^2)
$$
$$
= \frac{1}{2} m (\lambda^2\dot{r}^2 + r^2 \lambda^2\dot{\theta}^2 + r^2 \sin^2\theta \lambda^2\dot{\phi}^2)
$$
$$
= \lambda^2 \left[ \frac{1}{2} m (\dot{r}^2 + r^2 \dot{\theta}^2 + r^2 \sin^2\theta \dot{\phi}^2) \right] = \lambda^2 T(\dot{r}, \dot{\theta}, \dot{\phi}; r, \theta)
$$
Una vez más, tenemos que la energía cinética es homogénea de grado $r=2$ 

De forma más general, en un espacio con coordenadas generalizadas $q_1, \dots, q_n$, las "velocidades" son $\dot{q}_1, \dots, \dot{q}_n$. La energía cinética se puede escribir usando los componentes $g_{ij}(q)$ de un tensor métrico (que pueden depender de las posiciones $q_k$, pero no de las velocidades $\dot{q}_k$):
$$
T(q_1,\dots,q_n, \dot{q}_1, \dots, \dot{q}_n) = \frac{1}{2} m \sum_{i,j} g_{ij}(q_1,\dots,q_n) \dot{q}_i \dot{q}_j
$$
Si solo nos enfocamos en la dependencia de $T$ con respecto a las velocidades generalizadas $\dot{q}_k$, vemos que cada término $\dot{q}_i \dot{q}_j$ es de segundo grado en las velocidades.
Si escalamos todas las velocidades generalizadas por $\lambda$: $\dot{q}_k \rightarrow \lambda \dot{q}_k$.
$$
T(\dots, \lambda \dot{q}_1, \dots, \lambda \dot{q}_n) = \frac{1}{2} m \sum_{i,j} g_{ij}(q) (\lambda \dot{q}_i) (\lambda \dot{q}_j)
$$
$$
= \frac{1}{2} m \sum_{i,j} g_{ij}(q) \lambda^2 \dot{q}_i \dot{q}_j = \lambda^2 \left[ \frac{1}{2} m \sum_{i,j} g_{ij}(q) \dot{q}_i \dot{q}_j \right]
$$
$$
= \lambda^2 T(\dots, \dot{q}_1, \dots, \dot{q}_n)
$$

Obtenemos otra vez que la energía cinética es homogénea de grado $r=2$.

Ahora, como ya podemos decir que la energía cinética $T$ es consistentemente una función homogénea de grado $r=2$ con respecto a las componentes de la velocidad (sean estas $v_x, v_y, v_z$ o $\dot{q}_1, \dots, \dot{q}_n$), el Teorema de Euler nos dice que:
$$
\sum_{k} v_k \frac{\partial T}{\partial v_k} = 2T
$$
Sin embargo, es importante mencionar que no _todas_ las energías cinéticas son homogéneas de grado 2. Esto está un poco fuera del tema actual, pero por ahora puedo decir que sí es cierto que sean de grado 2 siempre y cuando la energía cinética pueda expresase exclusivamente como una forma cuadrática pura en velocidades generalizadas libres.

Dicho de otra manera, porque creo que sonó un poco en chino lo anterior, digo que esta propiedad se cumple únicamente cuando todas las velocidades que aparecen en la energía cinética son grados de libertas reales del sistema, variables dinámicas independientes. Si alguna de estas velocidades es impuesta externamente, entonces la energía cinética pierde esta homogeneidad, ya que aparecen términos que dependen directamente del tiempo y no escalan adecuadamente, pero como siempre, es de mucha ayuda ver esto con un ejemplo sencillo:

Supongamos alguna partícula tal que su energía cinética en coordenadas polares es
$$
T = \frac{m}{2}\left( \dot{r}^{2}+r^{2}\dot{\varphi}^{2} \right) 
$$
esta ya vimos que sí es homogénea de grado 2, pero si imponemos una condición adicional como $\varphi (t) = \sin t$, entonces $\dot{\varphi}(t)=\cos t$ ya no es una velocidad generalizada libre, sino una función conocida del tiempo. Así la energía cinética se convierte en
$$
T = \frac{m}{2}\left( \dot{r}^{2}+r^{2}\cos^{2}t \right) 
$$
que claramente ya no es homogénea de grado 2 en las velocidades libres. Por lo tanto, ahora sí, ya no suena a chino decir que la energía cinética será homogénea de grado 2 si todas las velocidades involucradas son variables libres independientes y no impuestas externamente. 

---

Ahora sí, empecemos a lo que vinimos. Para empezar a hablar de mecánica hamiltoniana, podemos partir de una inocente pregunta aún desde el marco de la mecánica lagrangiana. 

La pregunta es:

> ¿Es el Lagrangiano $\mathcal{L}(q, \dot{q}, t)$ constante en el tiempo?

Para contestar esta pregunta podemos hacer la derivada total y ver qué pasa.
$$
\frac{d\mathcal{L}}{dt} = \frac{\partial \mathcal{L}}{\partial q} \dot{q} + \frac{\partial \mathcal{L}}{\partial \dot{q}} \ddot{q} + \frac{\partial \mathcal{L}}{\partial t} 
$$
Pero por las ecuaciones de Euler-Lagrange sabemos que
$$
\frac{d}{dt}\left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \right) = \frac{\partial \mathcal{L}}{\partial q} 
$$
y sustituyendo eso, nos queda
$$
\frac{dL}{dt} = \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \right) \dot{q} + \frac{\partial \mathcal{L}}{\partial \dot{q}} \ddot{q} + \frac{\partial \mathcal{L}}{\partial t} .
$$
Sin embargo, podemos observar que
$$
\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \right) \dot{q} + \frac{\partial \mathcal{L}}{\partial \dot{q}} \ddot{q} = \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \dot{q} \right)
$$
entonces
$$
\frac{dL}{dt} = \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \dot{q} \right) + \frac{\partial \mathcal{L}}{\partial t}
$$
y reordenando
$$
-\frac{\partial \mathcal{L}}{\partial t} = \frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \dot{q} \right) - \frac{d\mathcal{L}}{dt} 
$$
$$
-\frac{\partial \mathcal{L}}{\partial t} = \frac{d}{dt} \left[ \frac{\partial \mathcal{L}}{\partial \dot{q}} \dot{q} - \mathcal{L} \right]
$$
$$
-\frac{\partial \mathcal{L}}{\partial t} = \frac{d}{dt} \left[ \left(\dot{q} \frac{\partial}{\partial \dot{q}} - 1 \right) \mathcal{L} \right]
$$
entonces, si vemos bien a
$$
\left( \dot{q}\frac{\partial}{\partial \dot{q}} - 1 \right)
$$
vemos que tenemos lo mismo que cuando definimos el operador
$$
\hat{\Lambda} = \left[ x \frac{d}{dx} - 1 \right]
$$
de la transformada de Legendre. Entonces, si teníamos que
$$
\hat{A}f(x)=g(p)
$$
donde $\hat{A}$ ahora es $\left[ \dot{q}\frac{\partial}{\partial \dot{q}} - 1 \right]$ y $f(x)$ es $\mathcal{L}(q,\dot{q},t)$
$$
\hat{A}f(x) = \dot{q} \frac{\partial \mathcal{L}}{\partial \dot{q}} -  \mathcal{L} = g(p)
$$

¿Y entonces quién es esa nueva función $g(p)$?
Pues esa función es a lo que vamos a llamar el Hamiltoniano
$$
\begin{equation*}
\mathcal{H}(q_{1},\dots,q_{n}, p_1, \dots, p_n) = \frac{\partial \mathcal{L}}{\partial \dot{q}} \dot{q} - \mathcal{L}
\end{equation*}
$$
donde vamos a definir
$$
\begin{equation*}
\frac{\partial \mathcal{L}}{\partial \dot{q}} = p
\end{equation*}
$$
como el momento canónico conjugado.

Entonces regresando a donde nos habíamos quedado, tenemos que
$$
\begin{equation*}
-\frac{\partial \mathcal{L}}{\partial t} = \frac{d\mathcal{H}}{dt}
\end{equation*}
$$
por lo que podemos ver que si $\mathcal{L}$ depende explícitamente del tiempo $\mathcal{H}$ no se conserva, y si $L$ no depende del tiempo, $\mathcal{H}$ se conserva. 
Toda la discusión anterior se puede llevar fácilmente al caso de más variables pero por simplicidad solo se trabajó con una, pero no debería parecer extraño que
$$
\mathcal{H} = \sum_{i}p_{i}\dot{q}_{i}-\mathcal{L}.
$$


Finalmente, cierro esta parte con un pequeño comentario, es común que confundamos $\mathcal{H}$ con la energía. Son cosas distintas, que en ocasiones suelen coincidir, y de hecho, $\mathcal{H}$ de puede conservar y no ser la energía. 

Ahora bien, ¿cuándo coincide el Hamiltoniano $\mathcal{H}$ con la energía $E$ del sistema? Esto ocurre bajo dos condiciones que se cumplen en muchos sistemas clásicos: que la energía sea una función homogénea de grado dos y que la energía potencial $V$ dependa únicamente de las coordenadas generalizadas $q_{i}$ y no de las velocidades generalizadas $\dot{q}_{i}$ ni explícitamente del tiempo, solo $V=V(q_{1}\dots q_{n})$.

Por lo que si regresamos a nuestra definición
$$
\mathcal{H} = \sum_{i}p_{i}\dot{q}_{i}-\mathcal{L}.
$$
y primero acordamos que la energía potencial dependa únicamente de las coordenadas generalizadas $q_{i}$ entonces
$$
p_{i} = \frac{\partial \mathcal{L}}{\partial \dot{q}_{i}} = \frac{\partial (T-V)}{\partial \dot{q}_{i}} = \frac{\partial T}{\partial \dot{q}_{i}}
$$
y si ahora, acordamos que la energía cinética $T$ sea una función homogénea de grado dos como habíamos visto, podemos aplicar el teorema de Euler para funciones homogéneas
$$
\sum_{i=1}^{n} x_{i} \frac{\partial f}{\partial x_{i}} = r \cdot f(x_{1},x_{2},\dots,x_{n})
$$
para $T$ que es de grado dos, tendríamos (aunque ya habíamos obtenido este resultado)
$$
\sum_{i=1}^{n} \dot{q}_{i} \frac{\partial T}{\partial \dot{q}_{i}} = 2T
$$
sustituyendo que $p_{i}=\frac{\partial T}{\partial \dot{q}_{i}}$
$$
\sum_{i=1}^{n} p_{i}\dot{q}_{i} = 2T
$$
regresando a nuestra definición de $\mathcal{H}$
$$
\mathcal{H} = \sum_{i}p_{i}\dot{q}_{i}-\mathcal{L} = 2T - L
$$
$$
\mathcal{H} = 2T - (T-V)
$$
$$
\mathcal{H} = T + V
$$
Y como sabemos, $E = T+V$. Por lo tanto, bajo estas condiciones, el Hamiltoniano $H$  no solo se conserva, sino que coincide con la energía total $E$ del sistema.