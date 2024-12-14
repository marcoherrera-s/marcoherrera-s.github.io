@def title = "2. Problema de dos cuerpos"
@def tags = ["syntax", "code", "math"]

# Resolviendo el problema de dos cuerpos

En la entrada pasada llegamos a que:

$$
\begin{aligned}
\mu(\ddot{r}-r \dot{\theta}^{2}) &= \mu\left( -\frac{\beta}{r^{2}} \right) \\
\mu(r \ddot{\theta}+2 \dot{r} \dot{\theta}) &= 0
\end{aligned}
$$
Simplificando tendríamos que

$$
\begin{aligned}
\ddot{r}-r \dot{\theta}^{2} &= -\frac{\beta}{r^{2}} \\
r \ddot{\theta}+2 \dot{r} \dot{\theta} &= 0
\end{aligned}
$$

Para la segunda ecuación, primero recordamos el momento angular $\boldsymbol{L}$ es el producto vectorial entre el vector de posición $\boldsymbol{r}$ y el momento lineal $\boldsymbol{p}$, que es $\mu \dot{\boldsymbol{r}}$, donde $\mu$ es la masa reducida:

$$
\boldsymbol{L} = \boldsymbol{r} \times \boldsymbol{p} = \boldsymbol{r} \times \mu \dot{\boldsymbol{r}}
$$

Ya que tenemos que:

$$
\boldsymbol{r} = r \hat{\boldsymbol{r}}
$$

Y vimos que la velocidad $\dot{\boldsymbol{r}}$ en coordenadas polares es:

$$
\dot{\boldsymbol{r}} = \dot{r} \hat{\boldsymbol{r}} + r \dot{\theta} \hat{\boldsymbol{\theta}}
$$

Sustituimos esto en la ecuación del momento angular:

$$
\boldsymbol{L} = r \hat{\boldsymbol{r}} \times \mu (\dot{r} \hat{\boldsymbol{r}} + r \dot{\theta} \hat{\boldsymbol{\theta}})
$$

Entonces tenemos que:

$$
\boldsymbol{L} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ r & 0 & 0 \\ \mu \dot{r} & \mu r \dot{\theta} & 0 \end{vmatrix} = 0\hat{i}  - 0\hat{j} +  \mu r^2 \dot{\theta} \hat{\boldsymbol{k}}
$$

Simplificando:

$$
\boldsymbol{L} = \mu r^2 \dot{\theta} \hat{\boldsymbol{k}}
$$

Para ver que el momento angular se conserva, derivamos $\boldsymbol{L}$ con respecto al tiempo:

$$
\frac{d \boldsymbol{L}}{dt} = \frac{d}{dt} (\mu r^2 \dot{\theta} \hat{\boldsymbol{k}})
$$

Como $\hat{\boldsymbol{k}}$ es un vector unitario constante (en la dirección $z$), no varía con el tiempo. Entonces, derivamos el resto de la expresión:

$$
\frac{d \boldsymbol{L}}{dt} = \mu \left( 2r \dot{r} \dot{\theta} + r^2 \ddot{\theta} \right) \hat{\boldsymbol{k}}
$$

Ahora, recordemos la ecuación que obtuvimos previamente del sistema dinámico:

$$
r \ddot{\theta} + 2 \dot{r} \dot{\theta} = 0
$$

Por lo tanto, sustituyendo esto en la expresión de la derivada del momento angular, tenemos:

$$
\frac{d \boldsymbol{L}}{dt} = \mu \  0 = 0
$$

Esto nos dice que el momento angular se conserva, es decir, $\boldsymbol{L}$ es constante en el tiempo.

La magnitud del momento angular es simplemente:

$$
L = \mu r^2 \dot{\theta}
$$

Además dado que el momento angular $L$ es constante, podemos despejar $\dot{\theta}$ de la siguiente manera:

$$
\dot{\theta} = \frac{L}{\mu r^2}
$$

Primero, derivamos esta expresión con respecto al tiempo para obtener $\ddot{\theta}$:

$$
\ddot{\theta} = \frac{d}{dt} \left( \frac{L}{\mu r^2} \right)
$$

Usamos la regla de la cadena para derivar $r^2$ con respecto al tiempo:

$$
\ddot{\theta} = \frac{L}{\mu} \  \frac{d}{dt} \left( \frac{1}{r^2} \right) = \frac{L}{\mu} \  \left( -\frac{2 \dot{r}}{r^3} \right)
$$

Por lo tanto:

$$
\ddot{\theta} = -\frac{2L \dot{r}}{\mu r^3}
$$

Sustituyendo esta expresión de $\ddot{\theta}$ en la ecuación $r \ddot{\theta} + 2 \dot{r} \dot{\theta} = 0$:

$$
r \left( -\frac{2L \dot{r}}{\mu r^3} \right) + 2 \dot{r} \left( \frac{L}{\mu r^2} \right) = 0
$$

Simplificamos:

$$
-\frac{2L \dot{r}}{\mu r^2} + \frac{2L \dot{r}}{\mu r^2} = 0
$$

Por lo que con esta segunda ecuación no necesitamos más trabajo.

### Primera ecuación

Vamos a usar la regla de la cadena para expresar $\dot{r}$ y $\ddot{r}$ en términos de $\theta$ y sus derivadas.

Primero, sabemos que:

$$
\dot{r} = \frac{dr}{d\theta} \dot{\theta}
$$

$$
\ddot{r}=\frac{d}{dt}\left(\frac{dr}{d\theta} \dot{\theta}\right) = \frac{d^2r}{d\theta^2} \dot{\theta}^2 + \frac{dr}{d\theta} \frac{d\dot{\theta}}{dt}
$$


Entonces:
$$
\begin{aligned}
\ddot{r}-r \dot{\theta}^{2} &= -\frac{\beta}{r^{2}}  \\
 \frac{d^2r}{d\theta^2} \dot{\theta}^2 + \frac{dr}{d\theta} \ddot{\theta} - r \dot{\theta}^{2} &= -\frac{\beta}{r^{2}}
\end{aligned}
$$
Recordamos que $\ddot{\theta} = -\frac{2L \dot{r}}{\mu r^3}$, entonces
$$
\ddot{\theta} = -\frac{2L \dot{r}}{\mu r^3} = -\frac{2L}{\mu r^3}\frac{dr}{d\theta} \dot{\theta} = -\frac{2L}{\mu r^3}\frac{dr}{d\theta} \frac{L}{\mu r^2}
$$
$$
\therefore \ddot{\theta}=-\frac{2L^{2}}{\mu^{2}r^{5}} \frac{dr}{d\theta}
$$
Además:
$$
\dot{\theta}^2 = \left( \frac{L}{\mu r^2} \right)^2 = \frac{L^2}{\mu^2 r^4}
$$

Por lo tanto, la ecuación se convierte en:

$$
\frac{d^2r}{d\theta^2}\frac{L^2}{\mu^2 r^4} + \frac{dr}{d\theta}\ddot{\theta} - r\frac{L^2}{\mu^2 r^4} = -\frac{\beta}{r^2}
$$



Ahora, sustituimos $\ddot{\theta} = -\frac{2L^2}{\mu^2 r^5} \frac{dr}{d\theta}$:

$$
\frac{d^2r}{d\theta^2} \  \frac{L^2}{\mu^2 r^4} + \frac{dr}{d\theta} \  \left( -\frac{2L^2}{\mu^2 r^5} \frac{dr}{d\theta} \right) - r \  \frac{L^2}{\mu^2 r^4} = -\frac{\beta}{r^2}
$$

Reacomodando queda:

$$
\frac{L^2}{\mu^2 r^4} \frac{d^2r}{d\theta^2} - \frac{2L^2}{\mu^2 r^5} \left( \frac{dr}{d\theta} \right)^2 - r \frac{L^2}{\mu^2 r^4} = -\frac{\beta}{r^2}
$$
Factorizando y simplificando $r^{2}$:
$$
\frac{L^2}{\mu^2 r^2} \left( \frac{d^2r}{d\theta^2} - \frac{2}{r} \left( \frac{dr}{d\theta} \right)^2 - r \right) = -\beta
$$

Finalmente tendríamos que:

$$
\frac{1}{r^2} \left( \frac{d^2r}{d\theta^2} - \frac{2}{r} \left( \frac{dr}{d\theta} \right)^2 - r \right) = -\frac{\mu^2 \beta}{L^2}
$$

Si ahora hacemos: $u = \frac{1}{r}$

- $r = \frac{1}{u}$
- $\frac{dr}{d\theta} = -\frac{1}{u^2} \frac{du}{d\theta}$
- $\frac{d^2r}{d\theta^2} = \frac{2}{u^3} \left( \frac{du}{d\theta} \right)^2 - \frac{1}{u^2} \frac{d^2u}{d\theta^2}$

Sustituyendo estas expresiones en la ecuación:

La ecuación original es:

$$
\frac{1}{r^2} \left( \frac{d^2r}{d\theta^2} - \frac{2}{r} \left( \frac{dr}{d\theta} \right)^2 - r \right) = -\frac{\mu^2 \beta}{L^2}
$$

Sustituimos en la ecuación:

$$
u^2 \left( \frac{2}{u^3} \left( \frac{du}{d\theta} \right)^2 - \frac{1}{u^2} \frac{d^2u}{d\theta^2} - \frac{2}{u} \left( -\frac{1}{u^2} \frac{du}{d\theta} \right)^2 - \frac{1}{u} \right) = -\frac{\mu^2 \beta}{L^2}
$$
Multiplicando por $u^{2}$:
$$
\frac{2}{u} \left( \frac{du}{d\theta} \right)^2 - \frac{d^2u}{d\theta^2} - \frac{2}{u} \left( \frac{du}{d\theta} \right)^2 - u = -\frac{\mu^2 \beta}{L^2}
$$

Vemos que los términos con $\left( \frac{du}{d\theta} \right)^2$ se cancelan:

$$
-\frac{d^2u}{d\theta^2} - u = -\frac{\mu^2 \beta}{L^2}
$$

Por lo tanto, tenemos que:

$$
\frac{d^2u}{d\theta^2} + u = \frac{\mu^2 \beta}{L^2}
$$
Para resolver, hacemos el cambio de variable:

$$
w = u - \frac{\mu^2 \beta}{L^2}
$$

De esta manera, $w$ satisface la siguiente ecuación diferencial homogénea:

$$
\frac{d^2 w}{d\theta^2} + w = 0
$$

Esta es una ecuación diferencial lineal de segundo orden homogénea cuya solución general la conocemos bien:

$$
w(\theta) = A \cos(\theta - \delta)
$$

donde $A$ es la amplitud y $\delta$ es una fase inicial. Sin embargo, podemos ignorar la fase $\delta$ sin pérdida de generalidad.

Entonces, la solución se reduce a:

$$
w(\theta) = A \cos(\theta)
$$


Recordemos que $w = u - \frac{\mu^2 \beta}{L^2}$, por lo que: 

$$
u(\theta) = A \cos(\theta) + \frac{\mu^2 \beta}{L^2}
$$

Ahora, factoricemos $\frac{\mu^2 \beta}{L^2}$:

$$
u(\theta) = \frac{\mu^2 \beta}{L^2} \left( 1 + \frac{A L^2}{\mu^2 \beta} \cos(\theta) \right)
$$

Definimos la constante $e = \frac{A L^2}{\mu^2 \beta}$:

$$
u(\theta) = \frac{\mu^2 \beta}{L^2} \left( 1 + e \cos(\theta) \right)
$$

Ahora, definimos una nueva constante $c = \frac{L^2}{\mu^2 \beta}$, que es el inverso del coeficiente del término constante:

$$
u(\theta) = \frac{1}{c} \left( 1 + e \cos(\theta) \right)
$$


Dado que originalmente habíamos definido $u = \frac{1}{r}$, ahora podemos volver a esa variable. 
Sustituimos la expresión para $u$:

$$
r(\theta) = \frac{c}{1 + e \cos(\theta)}
$$

Y bueno, esta es la forma estándar de la ecuación de una órbita elíptica en mecánica, donde:

- $c = \frac{L^2}{\mu^2 \beta}$ está relacionado con las propiedades del sistema.
- $e$ es la **excentricidad** de la órbita, que determina cuán elíptica es la trayectoria.


 Describe una trayectoria elíptica o circular dependiendo del valor de $e$ (si $e = 0$, es un círculo, y si $0 < e < 1$, es una elipse).