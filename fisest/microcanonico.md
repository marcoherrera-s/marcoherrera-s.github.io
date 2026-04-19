@def title = "Fundamentos"
@def tags = ["syntax", "code", "math"]

# fundamentos de la mecánica estadística

- La mecánica estadística trata de usar las leyes microscópicas de la física para obtener una descripción macroscópica de la naturaleza.
- Si alguien nos da una caja con $10^{23}$ partículas, y nos dicen su masa, su posición, su carga. ¿Qué podemos decir de lo que hay en la caja?
- ¿Está mojada? ¿Está caliente? ¿Qué color es? ¿Está en peligro de explotar?
- Hay conceptos que sólo emergen pensando en una colección enorme de partículas.
- No tiene sentido preguntarse por la temperatura de un electrón.
- La mecánica cuántica fue descubierta aplicando métodos estadísticos al analizar el espectro de la luz emitida por objetos calientes.

# El ensamble microcanónico

- Empezamos considerando un sistema aislado con energía fija $E$.
- Cuando tenemos sistemas con pocos grados de libertad definidos por un Hamiltoniano $\hat{H}$, lo que procede es resolver la ecuación de Schrödinger independiente del tiempo. $$
\hat{H}\ket{\psi} = E\ket{\psi}
$$
- Ahora nos interesan hamiltonianos con demasiados grados de libertad.
- Los eigenestados de energía $\ket{\psi}$ en estos sistemas son complicados porque contienen información detallada sobre todas las configuraciones posibles de las partículas. Y en el contexto de la mecánica estadística, estos eigenestados son llamados *microestados*.
- En la práctica es muy difícil obtener el microestado que describe a estas partículas, pero eso no importa, porque aunque lo tuviéramos, no nos serviría de nada.
- La función de onda casi nunca captura la física de lo que está pasando porque las cosas que de verdad pasan macroscópicamente no son descritas por un único estado cuántico puro.
- El sistema está en contacto con el ambiente y por eso puede haber perturbaciones de cualquier tipo y entonces habrá cierta probabilidad de que transite a otro estado.
- Si la perturbación es pequeña, las transiciones serán a estados que tengan la misma o casi la misma energía.
- Vamos a describir al sistema en términos de una distribución de probabilidad sobre los estados cuánticos. Es decir, el sistema está en un estado mezclado y no en un estado puro.
- Como fijamos la energía $E$, entonces ninguna probabilidad se anulará para los estados que tienen esa energía fija.
- Denotamos una base para esos estados como $\ket{\phi_{i}}$ y la probabilidad de que el sistema esté en un estado dado como $p(\phi_{i})$.
- Sabemos que más o menos, si pudiéramos repetir un experimento muchas veces, el **valor esperado** sería como una especie de promedio de nuestros resultados.
- Entonces, para una variable aleatoria $A$, el valor esperado sabemos que es:
$$
\braket{ A } = \sum_{i} a_{i}p_{i}
$$
donde bueno, $a_{i}$ son los valores que puede tomar $A$ y $p_{i}$ sus respectivas probabilidades asociadas.


---
Un paréntesis rapidito. Sabemos bien que un sistema cuántico en un estado puro está representado por el vector de estado $\ket{\psi}$ que vive en un espacio de Hilbert, y que $L_{2}$ y bla, bla, bla. Después, los posibles estados de una medición están asociados a un conjunto de eigenestados $\ket{\phi_{i}}$ que forman una base ortonormal en ese espacio.

Entonces, cuando medimos una propiedad del sistema, digamos el valor de un observable $A$, el sistema colapsa a uno de esos eigenestados de ese observable. La probabilidad de que el sistema colapse al estado $\ket{\phi_{i}}$ viene dada por:
$$
p_{i}=|\braket{ \phi_{i}| \psi }|^{2}
$$

$\braket{ \phi_{i} |\psi  }$ es un producto interno. Este producto interno, como el producto punto, recuerdo que siempre me gustó verlo como la siguiente pregunta: ¿Qué tanto se parece el estado $\ket{\psi}$ al estado $\ket{\phi_{i}}$? Si nos da uno, es porque están totalmente alineados o porque es el mismo estado; si nos da cero, son ortogonales. Lo que nos da esto, en este caso, es un número complejo que incluye tanto la magnitud o "tamaño de la superposición" como la fase, que por ahora no nos importa, pero está relacionada con el ángulo entre los estados en el espacio de Hilbert.

Cuando aplicamos el módulo cuadrado al producto interno, se elimina la parte compleja y nos da una magnitud real y positiva. Por lo que, básicamente, nos dice cuánta "contribución" del estado $\ket{\phi_{i}}$ está contenida en el estado $\ket{\psi}$.
se puede decir un poco más sobre esto, pues según la interpretación de copenhague, antes de una medición, el estado del sistema $\ket{\psi}$ es una superposición de los posibles resultados y realizar una medición hace que el sistema "colapse" a uno de los eigenestados del observable medido, justamente con la probabilidad dada por $|\braket{ \phi_{i} | \psi }|^{2}$ y algo importante es que parece que la naturaleza de este colapso es no determinista. 


Bohr ya decía que no tiene sentido hablar del sistema sin considerar el aparato de medición, pues la mecánica cuántica solo describe las relaciones entre observables y los resultados medibles. Esto es divertido, porque cuando se toma demasiado en serio esta interpretación, entonces la mecánica cuántica no necesita ninguna otra explicación más profunda; simplemente describe lo que podemos medir, y entonces surge el famoso: [cállate y calcula](https://en.wikipedia.org/wiki/Copenhagen_interpretation#Principles).

Pero bueno, aquí no estamos para hablar de interpretaciones de la mecánica cuántica. Que fíjense que la de Roger Penrose suena curiosa, pero en la que habla de la gravedad, porque tiene otra en la que introduce temas de conciencia que parece que ahí se fumó un porro. Básicamente, dice que si un objeto está en superposición, entonces está asociado con masas en lugares diferentes. Supongamos un planeta en dos posiciones: esto hace que la gravedad misma no pueda soportar esta superposición por mucho tiempo, así que es la gravedad la que fuerza al sistema a colapsar a un estado definido sin necesitar de un observador o un medidor. Solo es que esa energía gravitacional asociada a la superposición crea una especie de inestabilidad.

Esto pues ya está curioso porque ya está implicando que la gravedad puede actuar como un límite entre el mundo cuántico y el clásico, pues en sistemas pequeños, como electrones, esa energía gravitacional es tan insignificante que puede mantenerse en superposición por más tiempo.



Bueno, ya ahora sí, que nomás me entretengo en otras cosas. Lo único que quería hacer era decir algunas cositas respecto a la probabilidad:
$$
p_{i}=|\braket{ \phi_{i}| \psi }|^{2}
$$
---
Entonces, sustituyendo nuestra probabilidad en nuestra expresión para el valor observado, tendríamos que:
$$
\braket{ A } = \sum_{i} a_{i}p_{i} = \sum_{i}a_{i}|\braket{ \phi_{i}| \psi }|^{2}
$$
Por propiedades de los complejos, tenemos que
$$
\braket{ A } = \sum_{i}a_{i}\braket{ \psi | \phi_{i}} \braket{ \phi_{i} | \psi }
$$
Y como $a_{i}$ es simplemente un escalar, podemos reacomodar tal que:
$$
\braket{ A } = \sum_{i}\braket{ \psi |a_{i}| \phi_{i}} \braket{ \phi_{i} | \psi }
$$
Si pensamos en $A$ no sólo como una variable aleatoria común, sino como un observable, entonces notamos que los valores $a_{i}$ que puede tomar son los eigenvalores asociados a un eigenestado $\ket{\phi_{i}}$ por medio de la ecuación
$$
A\ket{\phi_{i}} = a_{i}\ket{\phi_{i}}
$$
Por lo tanto
$$
\braket{ A } = \sum_{i}\braket{ \psi |A| \phi_{i}} \braket{ \phi_{i} | \psi }
$$
---
Ahora, aquí recordamos rápidamente que como $\left\{ \ket{\phi_{i}} \right\}$ es una base discreta, entonces cada $\ket{\psi}$ tiene una expansión única
$$
\ket{\psi} = \sum_{i}c_{i}\ket{\phi_{i}}
$$
Por lo que haciendo
$$
\braket{ \phi_{j} | \psi } = \sum_{i}c_{i}\braket{ \phi_{j} | \phi_{i}}
$$
Como $\left\{ \ket{\phi_{i}} \right\}$ es base, usamos la propiedad de ortonormalidad, que nos dice que $\braket{\phi_j | \phi_i} = \delta_{ij}$:
$$
\braket{\phi_j | \psi} = \sum_{i} c_i \delta_{ij}.
$$
Y como $\delta_{ij} = 0$ para $i \neq j$ y $1$ para $i = j$, la suma se reduce únicamente al término donde $i = j$:
$$
\braket{\phi_j | \psi} = c_j.
$$


Entonces
$$
\begin{aligned}
\ket{\psi} &= \sum_{i}\braket{ \phi_{i} | \psi } \ket{\phi_{i}} \\
&= \sum_{i}\ket{\phi_{i}} \braket{ \phi_{i} | \psi } \\
&= \left( \sum_{i}\ket{\phi_{i}} \bra{\phi_{i}} \right)\ket{\psi}
\end{aligned}
$$
Por lo tanto, definimos $\sum_{i}\ket{\phi_{i}} \bra{\phi_{i}}$ como el operador identidad.
$$
\sum_{i}\ket{\phi_{i}} \bra{\phi_{i}} = \mathbb{1}
$$
---
Ahora sí, teníamos que
$$
\braket{ A } = \sum_{i}\braket{ \psi |A| \phi_{i}} \braket{ \phi_{i} | \psi }
$$
Y como vemos, se asoma ahí un operador identidad, por lo que finalmente nos quedaría
$$
\braket{ A } = \braket{ \psi|A | \psi }
$$
Y como estamos en un estado mezclado, entonces el valor esperado del observable $A$ para el sistema completo es el promedio ponderado de los valores esperados de los distintos estados puros:
$$
\braket{ A } = \sum_{i}p(\phi_{i})\braket{ \phi_{i} |A| \phi_{i} }
$$
Por lo que nuestra meta sería entender qué distribución de probabilidad $p(\phi_{i})$ es mejor para sistemas grandes.

Primero hay que plantear bien el patio de juegos, hablar sobre con qué tipo de situaciones estamos tratando. Es con sistemas que han permanecido aislados por un tiempo, ya que esto nos asegura que la energía y el momento en el sistema ya han sido redistribuidos entre las tantas partículas y cualquier memoria de cualesquiera condiciones iniciales por especiales que hayan sido, se ha perdido.

En lenguaje matemático, lo que queremos es que la distribución de probabilidad sea independiente del tiempo, lo que a su vez nos va a asegurar que el valor esperado de los observables macroscópicos también sean independientes del tiempo.

En estos casos, decimos que el sistema se encuentra en *equilibrio*.

Entonces, ya en este marco. Ja, marco, así me llamo. Ya podemos decir nuestra primer idea esencial y gran suposición de la mecánica estadística.

**_Para un sistema aislado en equilibrio, todos los microestados accesibles son igualmente probables._**

Con accesible nos referimos a que cualquier estado puede ser alcanzado mediante las pequeñas perturbaciones que experimenta el sistema. Por ahora tomaremos esto como todos los estados que tienen la misma energía $E$, por lo que
$$
\Omega(E) = \text{\# de estados con energía E}
$$
Y como ya dijimos que todos los estados son igualmente probables, entonces la probabilidad de que el sistema con energía fija $E$ esté en el estado $\ket{\phi_{i}}$ es simplemente
$$
p(\phi_{i}) = \frac{1}{\Omega(E)}
$$
Y a esta distribución de probabilidad, que es muy importante para sistemas con energía fija, es lo que llamamos **ensamble microcanónico**.

