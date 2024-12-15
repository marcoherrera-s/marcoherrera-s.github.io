@def title = "Fundamentos"
@def tags = ["syntax", "code", "math"]

# fundamentos de la mecánica estadística



- la mecánica estadística trata de usar las leyes microscópicas de la física para obtener una descripción macroscópica de  la naturaleza.
- si alguien nos da una caja con $10^{23}$ partículas, y nos dicen su masa, su posición, su carga. ¿qué podemos decir de lo que hay en la caja?
- ¿está mojada? ¿está caliente? ¿qué color es? ¿está en peligro de explotar?}
- hay conceptos que sólo emergen pensando en una colección enorme de partículas.
- no tiene sentido preguntarse por la temperatura de un electrón.
- la mecánica cuántica fue descubierta aplicando métodos estadísticos al analizar el espectro de la luz emitida por objetos calientes. 
# el ensamble microcanónico

- empezamos considerando un sistema aislado con energía fija $E$. 
- cuando tenemos sistemas con pocos grados de libertad definidos por un Hamiltoniano $\hat{H}$, lo que procede es resolver la ecuación de Schrodinger independiente del tiempo. $$
\hat{H}\ket{\psi} = E\ket{\psi}  
$$
- ahora nos interesan hamiltonianos con demasiados grados de libertad.
- los eigenestados de energía $\ket{\psi}$ en estos sistemas son complicados porque contienen información detallada sobre todas las configuraciones posibles de las partículas. y en el contexto de la mecánica estadística, estos eigenestados son llamados _microestados_.
- en la práctica es muy difícil obtener el microestado que describe a estas partículas, pero eso no importa, porque aunque lo tuviéramos, no nos sirve de nada. 
- la función de onda casi nunca captura la física de lo que está pasando porque las cosas que de verdad pasan macroscópicamente, no son descritas por un único estado cuántico puro. 
- el sistema está en contacto con el ambiente y por eso puede haber perturbaciones de cualquier tipo y entonces habrá cierta probabilidad de que transicione a otro estado.  
- si la perturbación es pequeña, las transiciones serán a estados que tengan la misma o casi la misma energía. 
- vamos a describir al sistema en términos de una distribución de probabilidad sobre los estados cuánticos. es decir, el sistema está en un estado mezclado y no en un estado puro.
- como fijamos la energía $E$ entonces ninguna probabilidad se anulará para los estados que tienen esa energía fija. 
- denotamos una base para esos estados como $\ket{\phi_{i}}$ y la probabilidad de que el sistema esté en un estado dado como $p(\phi_{i})$. 

sabemos que más o menos, si pudiéramos repetir un experimento muchas veces, el **valor esperado** sería como una especie de promedio de nuestros resultados. 

entonces, para una variable aleatoria $A$, el valor esperado sabemos que es:
$$
\braket{  A  } = \sum_{i} a_{i}p_{i}  
$$
donde bueno, $a_{i}$ son los valores que puede tomar $A$ y $p_{i}$ sus respectivas probabilidades asociadas. 

---
un paréntesis rapidito. sabemos qbien que un sistema cuántico en un estado puro está representado por el vector de estado $\ket{\psi}$ que vive en un espacio de Hilbert, y que $L_{2}$ y bla, bla, bla. después, los posibles estados de una medición están asociados a un conjunto de eigenestados $\ket{\phi_{i}}$ que forman una base ortonormal en ese espacio. 

entonces, cuando medimos una propiedad del sistema, digamos el valor de un observable $A$, el sistema colapsa a uno de esos eigenestados de ese observable. la probabilidad de que el sistema colapse al estado $\ket{\phi_{i}}$ viene dada por:
$$
p_{i}=|\braket{ \phi_{i}| \psi }|^{2}
$$
$\braket{ \phi_{i} |\psi  }$ es un producto interno, este producto interno, como el producto punto, recuerdo que siempre me gustó verlo como la siguiente pregunta: ¿qué tanto se parece el estado $\ket{\psi}$ al estado $\ket{\phi_{i}}$? si nos da uno, es o porque están totalmente alineados o porque es el mismo estado, si nos da cero, son ortogonales. pero bueno, lo que nos da esto en este caso es un número complejo, que incluye tanto la magnitud o "tamaño de la superposición" y la fase, que bueno eso ahorita no nos importa, pero está relacionada con el ángulo entre los estados en el espacio de Hilbert. 
cuando aplicamos el módulo cuadrado al producto interna se elimina la parte compleja y nos da una magnitud real y positiva. por lo que básicamente nos dice cuánta "contribución" del estado $\ket{\phi_{i}}$ está contenida en el estado $\ket{\psi}$.

se puede decir un poco más sobre esto, pues según la interpretación de copenhague, antes de una medición, el estado del sistema $\ket{\psi}$ es una superposición de los posibles resultados y realizar una medición hace que el sistema "colapse" a uno de los eigenestados del observable medido, justamente con la probabilidad dada por $|\braket{ \phi_{i} | \psi }|^{2}$ y algo importante es que parece que la naturaleza de este colapso es no determinista. 

bohr ya decía que no tiene chiste hablar del sistema sin considerar el aparato de medición, pues la mecánica cuántica solo describe las relaciones entre observables y los resultados medibles. esto es divertido, porque cuando se toma demasiado en serio esta interpretación entonces la mecánica cuántica no necesita alguna otra explicación más profunda, simplemente describe lo que podemos medir, y entonces sale el famoso: [cállate y calcula](https://en.wikipedia.org/wiki/Copenhagen_interpretation#Principles)

pero bueno, aquí no estamos para hablar de interpretaciones de la mecánica cuántica. que fíjense que la de roger penrose suena curiosa, pero en la que habla de la gravedad, porque tiene otra en donde mete temas de conciencia que parece que ahí se fumó un porro. pero básicamente dice que si un objeto está en superposición entonces está asociado con masas en lugares diferentes, supongamos un planeta en dos posiciones, esto hace que la gravedad misma no pueda soportar esta superposición por mucho tiempo, así que es la gravedad la que fuerza al sistema a colapsar a un estado definido sin necesitar de un observador o un medidor. solo es que esa energía gravitacional asociada a la superposición crea una especie de inestabilidad.
esto pues ya está curioso porque ya está implicando que la gravedad puede actuar como un límite entre el mundo cuántico y el clásico, pues en sistemas pequeños, como electrones, esa energía gravitacional, digamos así, es tan insignificante que puede mantenerse en superposición por más tiempo. 

bueno ya ahora sí, que nomás me entretengo en otras cosas. lo único que quería hacer era decir algunas cositas respecto a la probabilidad:
$$
p_{i}=|\braket{ \phi_{i}| \psi }|^{2}
$$
---
entonces, sustituyendo nuestra probabilidad en nuestra expresión para el valor observado, tendríamos que:
$$
\braket{  A  } = \sum_{i} a_{i}p_{i} = \sum_{i}a_{i}|\braket{ \phi_{i}| \psi }|^{2}
$$
por propiedades de los complejos, tenemos que 
$$
\braket{  A  } = \sum_{i}a_{i}\braket{ \psi | \phi_{i}} \braket{ \phi_{i} | \psi } 
$$
y como $a_{i}$ es simplemente un escalar podemos reacomodar tal que:
$$
\braket{  A  } = \sum_{i}\braket{ \psi |a_{i}| \phi_{i}} \braket{ \phi_{i} | \psi } 
$$
si pensamos en $A$ no sólo como una variable aleatoria común, sino como en un observable, entonces notamos que los valores $a_{i}$ que puede tomar, son los eigenvalores asociados a un eigenestado $\ket{\phi_{i}}$ por medio de la ecuación
$$
A\ket{\phi_{i}} = a_{i}\ket{\phi_{i}}  
$$
por lo tanto
$$
\braket{  A  } = \sum_{i}\braket{ \psi |A| \phi_{i}} \braket{ \phi_{i} | \psi } 
$$
---
ahora, aquí recordamos rápidamente que como $\left\{ \ket{\phi_{i}} \right\}$ es una base discreta, entonces cada $\ket{\psi}$ tiene una expansión única 
$$
\ket{\psi} = \sum_{i}c_{i}\ket{\phi_{i}}  
$$
por lo que haciendo 
$$
\braket{ \phi_{j} | \psi } = \sum_{i}c_{i}\braket{ \phi_{j} |  \phi_{i}}   
$$
como $\left\{ \ket{\phi_{i}} \right\}$ es base, usamos la propiedad de ortonormalidad, que nos dice que $\braket{\phi_j | \phi_i} = \delta_{ij}$:
$$
\braket{\phi_j | \psi} = \sum_{i} c_i \delta_{ij}.
$$
y como $\delta_{ij} = 0$ para $i \neq j$ y $1$ para $i = j$, la suma se reduce únicamente al término donde $i = j$:
$$
\braket{\phi_j | \psi} = c_j.
$$
entonces

$$
\begin{aligned}
\ket{\psi} &= \sum_{i}\braket{ \phi_{i} | \psi } \ket{\phi_{i}}   \\
&= \sum_{i}\ket{\phi_{i}} \braket{ \phi_{i} | \psi } \\
&= \left( \sum_{i}\ket{\phi_{i}} \bra{\phi_{i}} \right)\ket{\psi}  
\end{aligned}
$$
por lo tanto, definimos $\sum_{i}\ket{\phi_{i}} \bra{\phi_{i}}$ como el operador identidad. 
$$
\sum_{i}\ket{\phi_{i}} \bra{\phi_{i}} = \mathbb{1}
$$
---
ahora sí, teníamos que
$$
\braket{  A  } = \sum_{i}\braket{ \psi |A| \phi_{i}} \braket{ \phi_{i} | \psi } 
$$
y como vemos, se asoma ahí un operador identidad, por lo que finalmente nos quedaría

$$
\braket{  A  } = \braket{ \psi|A | \psi }  
$$
y como estamos en un estado mezclado, entonces el valor esperado del observable $A$ para el sistema completo es el promedio ponderado de los valores esperados de los distintos estados puros:
$$
\braket{  A  } = \sum_{i}p(\phi_{i})\braket{ \phi_{i} |A| \phi_{i} }  
$$
por lo que nuestra meta sería entender qué distribución de probabilidad $p(\phi_{i})$ es mejor para sistemas grandes.

primero hay que plantear bien el patio de juegos, hablar sobre con qué tipo de situaciones estamos tratando. es con sistemas que han permanecido aislados por un tiempo, ya que esto nos asegura que la energía y el momento en el sistema ya ha sido redistribuida entre las tantas partículas y cualquier memoria de cualesquiera condiciones iniciales por especiales que hayan sido, se ha perdido. 

en lenguaje matemático, lo que queremos es que la distribución de probabilidad sea independiente del tiempo, lo que a su vez nos va a asegurar que el valor esperado de los observables macroscópicos también sean independientes del tiempo.

en estos casos, decimos que el sistema se encuentra en _equilibrio._

entonces, ya en este marco. ja, marco, así me llamo. ya podemos decir nuestra primer idea esencial y gran suposición de la mecánica estadística.

**_para un sistema aislado en equilibrio, todos los microestados accesibles son igualmente probables._**

con accesible nos referimos a que cualquier estado puede ser alcanzado mediante las pequeñas perturbaciones que experimenta el sistema. por ahora tomaremos esto como todos los estados que tienen la misma energía $E$, por lo que
$$
\Omega(E) = \text{\# de estados con energía E}
$$
y como ya dijimos que todos los estados son igualmente probables, entonces la probabilidad de que el sistema con energía fija $E$ esté en el estado $\ket{\phi_{i}}$ es simplemente
$$
p(\phi_{i}) = \frac{1}{\Omega(E)}
$$
y a esta distribución de probabilidad, que es muy importante para sistemas con energía fija es lo que llamamos _**ensamble microcanónico**_.