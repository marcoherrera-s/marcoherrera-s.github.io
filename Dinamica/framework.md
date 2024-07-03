+++
title = "frame"
hasmath = true
+++


# Casi siempre se empieza definiendo cosas


Antes de que hablemos de dinámica no lineal, tendríamos que saber qué viene siendo la dinámica lineal, pero antes de eso, tenemos que saber entonces qué es la dinámica. 

En pocas palabras, lo que hace la dinámica es estudiar el _cambio_, cómo es que un sistema _cambia_ en el tiempo. Preguntarnos cómo cambia _algo_ puede parecer una pregunta inocente, pero en realidad es una pregunta muy importante, porque este _algo_ o _sistema_ puede alcanzar un equilibrio, puede estar en un ciclo repitieńdose, puede hacer cosas extrañas, bueno, las posibilidades son muchas. Lo que importa es que usamos la dinámica para estudiar estos comportamientos. 

Una de las hazañas más grandes en la historia del estudio de la dinámica, fue cuando Newton resolvió el problema de los dos cuerpos, calcular el movimiento en cualquier momento en un sistema del tipo sol-tierra. Para el problema de tres cuerpos, hubo más problema, pero al final se dio cuenta de que era imposible obtener soluciones analíticas. Y bueno, ya hablar de el problema de n-cuerpos complica nuestra situación magistralmente. 

Pero tal vez, en lugar de preguntarnos por las posiciones por ejemplo, de los n cuerpos en el sistema solar, nos preguntamos:


> ¿Será estable el sistema solar por siempre o algún día algún planeta simplemente se podría aburrir de girar alrededor del sol e irse? 🕊️


## Estudiar no-linealidad es estudiar no-elefantes.

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


Esto lo podemos arreglar con un simple truquito; hacemos que $ x_1 = x $ y $ x_2 = \dot{x} $. 

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


