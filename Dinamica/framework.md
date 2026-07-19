+++
title = "1. Dinámica no-lineal."
hasmath = true
description = "Introducción a la dinámica no lineal: distinción entre sistemas lineales y no lineales, representación con ecuaciones diferenciales y mapas iterados, y ejemplos como el péndulo simple y el oscilador armónico forzado."
+++

# Definiendo el patio de juegos

Antes de que hablemos de dinámica no lineal, tendríamos que saber qué viene siendo la dinámica lineal, pero antes de eso, tenemos que saber entonces qué es la dinámica. 

En pocas palabras, lo que hace la dinámica es estudiar el _cambio_, cómo es que un sistema _cambia_ en el tiempo. Preguntarnos cómo cambia _algo_ puede parecer una pregunta inocente, pero en realidad es una pregunta muy importante, porque este _algo_ o _sistema_ puede alcanzar un equilibrio, puede estar en un ciclo repitiéndose, puede hacer cosas extrañas, bueno, las posibilidades son muchas. Lo que importa es que usamos la dinámica para estudiar estos comportamientos. 

Una de las hazañas más grandes en la historia del estudio de la dinámica, fue cuando Newton resolvió el problema de los dos cuerpos, calcular el movimiento en cualquier momento en un sistema del tipo sol-tierra. Para el problema de tres cuerpos, hubo más problema, pero al final se dio cuenta de que era imposible obtener soluciones analíticas. Y bueno, ya hablar de el problema de n-cuerpos complica nuestra situación magistralmente. 

Pero tal vez, en lugar de preguntarnos por las posiciones por ejemplo, de los n cuerpos en el sistema solar, nos preguntamos:


> ¿Será estable el sistema solar por siempre o algún día algún planeta simplemente se podría aburrir de girar alrededor del sol e irse? 🕊️


#### Estudiar no-linealidad es estudiar no-elefantes.

Hay dos formas de representar sistemas dinámicos, una es usando ecuaciones diferenciales y otra es con mapas iterados, la diferencia está simplemente en que cuando tratamos con una ecuación diferencial, el tiempo es continuo, con mapas iterados, el tiempo es discreto. 

Dentro del mundo de las ecuaciones diferenciales, podemos distinguir entre dos grandes casos, las ordinarias y las parciales. No hay que dejarnos llevar por el nombre, que las primeras, de ordinario no tienen nada. 

La siguiente ecuación es un ejemplo de ecuación diferencial ordinaria:

$$ m \frac{d^2 x}{dt^2} + b \frac{dx}{dt} + kx = 0 \label{eq1} $$ 

lo que la hace _ordinaria_ es que sólo tiene derivadas _ordinarias_, solo hay una variable independiente, en este caso el tiempo. 

Por lo que podríamos ahora definir el tipo de estructura con la que se trabajaría:




\begin{equation*}
\begin{aligned}
    \dot{x}_1 &= f_1(x_1, \ldots, x_n) \\
    &\vdots \\
    \dot{x}_n &= f_n(x_1, \ldots, x_n).
\end{aligned}
\end{equation*}

Ahora, podemos observar que la estructura que acabamos de definir no parece parecerse al ejemplo que se dio de ecuación diferencial ordinaria, esto por el simple hecho de que la primera es una ecuación de segundo orden, y en la estrucutura que se definió tenemos únicamente derivadas de primer orden.


Esto lo podemos arreglar con un simple truquito; vamos a definir que $ x_1 = x $ y $ x_2 = \dot{x} $. 

Entonces tenemos que: $ \dot{x_1} = \dot{x} $ y $ \dot{x_2} = \ddot{x} $. 

Por lo que tenemos:

\begin{equation*}
\begin{aligned}
    m \frac{d^2 x}{dt^2} + b \frac{dx}{dt} + kx &= 0 \\
    m \ddot{x} + b \dot{x} + kx &= 0 \\
    m \dot{x_2} + b \dot{x_1} + kx_1 &= 0 
\end{aligned}
\end{equation*}

Ya solo nos falta un pasito más, nos damos cuenta que, como definimos $ x_2 = \dot{x} $, y $ \dot{x_1} = \dot{x} $, entonces: $\dot{x_1} = x_2$. Por lo tanto, tenemos el siguiente sistema:

\begin{equation*}
\begin{aligned}
    \dot{x_1} &= x_2 \\
    m \dot{x_2} + b x_2 + kx_1 &= 0 
\end{aligned}
\end{equation*}

Reacomodando tendríamos:

\begin{equation*}
\begin{aligned}
    \dot{x_1} &= x_2 \\
    \dot{x_2} &= -\frac{b}{m} x_2 - \frac{k}{m}x_1
\end{aligned}
\end{equation*}

Y ahora sí ya tenemos una estructura como la definida. 

Decimos que el sistema que tenemos es lineal porque no tiene cosas _raras_, todo lo que aparece en el lado derecho del sistema solo hay primeras potencias, no hay productos, no hay cuadrados ni cubos, no hay senos, ni cosas feas. 

Un ejemplo, que aunque parece simple, la no-linealidad lo convierte en un dolor de cabeza.

Un sistema físico que puede parecer sencillo pero que es no-lineal es el péndulo simple, la ecuación de segundo grado es de la siguiente forma:

\begin{align*}
\ddot{x} + \frac{g}{L} \sin x &= 0 \\[1ex]
\end{align*}

Usando el truquito que ya vimos, entonces nos quedaría:

\begin{align*}
&\boxed{
\begin{array}{rcl}
\rightarrow \dot{x}_1 &=& x_2 \\[1ex]
\rightarrow \dot{x}_2 &=& -\frac{g}{L} \sin x_1
\end{array}
}
\end{align*}

En la segunda ecuación tenemos un seno, eso ya es algo _raro_, y nada más por eso, este sistema se vuelve muy difícil de resolver, muchas veces en los cursos de física se procede haciendo una aproximación suponiendo ángulos pequeños, eso convierte a nuestro sistema en un problema lineal y mágicamente nos sale un bonito oscilador armónico. Aunque esto pasa con una inmensidad de sistemas físicos, que los podemos aproximar como un oscilador armónico, también es cierto que el costo es alto, pues perdemos mucha física. 

Si quisieramos resolver este problema analíticamente tendríamos que vernos las cara con funciones elípticas y llorar un poquito nada más. 

Entonces el objetivo de todo esto es ir descubriendo técnicas y formas bonitas de ir resolviendo sistemas de este tipo sin mancharnos taaaanto las manos.

$$ \star $$

Ahora, si observamos bien la estructura que se definió, notamos que hay un problemita, parece ser que nuestro sistema no toma en cuenta las ecuaciones que dependen del tiempo, es decir, las ecuaciones no-autónomas. 

Uno de los casos más directos en los que podemos pensar es en un oscilador armónico forzado, me gusta pensar en este tipo de sistema como si se tratase de una persona empujando a otra en un columpio, este tipo de sistema está bien definido de la siguiente forma: $ m \ddot{x} + b\dot{x} + kx = F \cos{\Omega t} $.

Para estos casos tenemos un truco más para que quede una estructura como la que definimos; de la misma forma introducimos que $ x_1 = x$ y $x_2 = \dot{x} $ y además, aquí viene el truquito, introducimos que: $x_3 = \Omega t $, entonces $ \dot{x_3} = \Omega $ y tendríamos:

\begin{align*}
\dot{x}_1 &= x_2 \\
\dot{x}_2 &= \frac{1}{m}(-kx_1 - bx_2 + F \cos x_3) \\
\dot{x}_3 &= \Omega
\end{align*}

Por lo que podríamos decir que un sistema dependiente del tiempo de n-orden, es un caso especial de un sistema $ (n+1) $-dimensional.

Aunque pareza un truco sacado de la manga esto de aumentarle una dimensión a nuestro sistema, si lo pensamos bien, el verdadero estado de un sistema como el oscilador armónico forzado es 3-dimensional, pues necesitamos de una posición, una velocidad, y el tiempo para poder predecir su movimiento. 

$$ \star $$


Finalmente, regresando a la no-linealidad, la razón por la que es necesario desarrollar una serie de técnicas para resolver este tipo de sistemas no es porque se tenga flojera de resolver analíticamente, bueno sí, pero no tanto. Pero pasa que muchas veces este tipo de problemas ni siquiera es posible resolverlos de esta forma. 

Lo que hace no tan difíciles a los problemas lineales es que estos pueden ser divididos en partes y resolverlos en partecitas, son literalmente la suma de sus partes. 

Lo triste es que casi la mayoría de sistemas físicos, de cosas que pasan a nuestro alrededor, son no-lineales. Entonces, al final de cuentas, estos cobran una importancia enorme porque están en todos lados, no son nada extraños, nada _raros_. 

Es por eso que llamarle a un problema, _no-lineal_, es como ir por la vida llamándole a muchos animales _no-elefantes_.







