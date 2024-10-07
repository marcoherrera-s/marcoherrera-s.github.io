@def title = "Introducción PR3C"
@def tags = ["syntax", "code", "math"]

El objetivo de toda esta serie de entradas será estudiar el problema de tres cuerpos, pero antes, es mejor darnos cuenta que hay que tener claro qué es lo que está pasando en el problema de dos cuerpos. 

Aún más emocionante es que el problema de dos cuerpos que interactúan bajo una fuerza central lo podemos aproximar con el problema de un cuerpo.

Entonces, supongamos un sistema de únicamente dos cuerpos que interactúan únicamente bajo la acción de la gravedad. Antes de continuar, me gustaría hablar un poco de por qué decimos que la gravedad es una fuerza central. Si buscáramos esto obtendríamos respuestas del tipo:

- Actúa a lo largo de la línea que une a los centros de masa.
- La magnitud depende únicamente de la distancia entre estos centros de masa.
- Siempre está dirigida hacia el centro del objeto que genera el campo gravitatorio. 

Y entonces son cosas como esas lo que hace que la gravedad sea una **fuerza conservativa**.

Que una fuerza sea conservativa tiene implicaciones igual de importantes, por ejemplo:

- El trabajo realizado por esa fuerza sobre un objeto que se mueve entre dos puntos es independiente de la trayectoria, solo importan el punto inicial y final. 
- Podemos definir una energía potencial asociada a la fuerza.
- Si en el sistema solo hay fuerzas conservativas, la energía mecánica total se conserva. 
- El trabajo en cualquier trayectoria cerrada es cero.

Pero, ¿cómo es posible que el trabajo sea el mismo?

La primera vez que escuché esto, yo normalmente me preguntaba cómo es que eso tenía sentido. Mi problema era que entendía trabajo como literalmente pensar en "cuánto trabajo me costó subir estas escaleras, pfff". 
Entonces, si quiero ir del primer piso al segundo piso, pensaba, me va a tomar menos trabajo solo ir del punto $A$ al punto $B$, que ir de $A$, avanzar un poco, regresarme, avanzar otro poco, regresarme y ahora sí, llegar al punto $B$. Por poner otro ejemplo, estar en el punto $A$, pasearme un rato por el primer piso, y después irme al punto $B$. Claramente, aunque en los tres escenarios fui de $A$ - $B$, todos me costaron "_trabajo_" distinto. Entonces, ¿cómo está eso?

El primer problema, es tal vez solo un error de lenguaje, pues lo que estaba entendiendo como "trabajo" era más como una especie de "esfuerzo percibido". 
Si pensamos en la definición más básica de trabajo, esta es la fuerza aplicada en la dirección del movimiento, multiplicada por la distancia recorrida en esa dirección. 

Entonces, NO interesa el camino que tome porque en el caso en donde quiero ir de $A$ - $B$, del primer al segundo piso, y únicamente hay fuerza de gravedad, entonces sabemos que a la gravedad solo "le importa" el cambio de altura. 

Cualquier otro movimiento que haya, horizontal por ejemplo, no requiere trabajo contra la gravedad.  