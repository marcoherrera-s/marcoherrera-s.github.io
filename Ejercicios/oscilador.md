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
   
   $ma = -kx \rightarrow a = -\frac{k}{m} \rightarrow \frac{d^2}{dt^2} = -\frac{k}{m}x $

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


```julia:./ex1
using DifferentialEquations, Plots
```
\show{./ex1}


```julia:./ex2
function oscilador(du, u, p, t)
    b, k, m, F = p 
    -(k/m) * u - (b/m) * du + F(t) 
end
```
\show{./ex2}