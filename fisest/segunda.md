@def title = "Segunda Ley"
@def tags = ["syntax", "code", "math"]

# ~~~<div class="typewriter-text" data-text="Entropía y la segunda ley de la termodinámica"></div>~~~

En la anterior entrada, pareció que todo giraba alrededor de sistemas cuánticos. Pero en realidad todo el tiempo se trató con casos clásicos. Las probabilidades $p(\phi_{i})$ no tienen nada que ver con indeterminación cuántica, pero sí con nuestra ignorancia. 

La entropía de un sistema se define como
$$
S(E) = k_{B}\log{\Omega(E)}
$$
donde sabemos que $k_{B}$ es la constante de Boltzmann.
$$
k_{B} \approx 1.381 \times 10^{-23}JK^{-1}  
$$
y el logaritmo natural es simplemente para hacer de $\Omega(E)$ un número más razonable. 

El número de estados  está en el orden de $e^{N}$, la entropía en cambio es proporcional al número de partículas del sistema, $S \sim N$. Es por eso que la entropía es un cantidad aditiva. 

Consideremos pues, simplemente dos monedas. Estas tienen dos estados, sol o águila. Pero si pensamos en nuestro sistema como las dos monedas, entonces podemos tener los siguientes estados: AA, AS, SA, SS. 

Si pensamos en dos sistemas ahora, no interactuantes, con energías $E_{1}$ y $E_{2}$ respectivamente, entonces el número total de estados para ambos sistemas es
$$
\Omega(E_{1}, E_{2}) = \Omega_{1}(E_{1})\Omega_{2}(E_{2})
$$
mientras que la entropía de ambos sistemas es
$$
S(E_{1}, E_{2}) = S_{1}(E_{1}) + S_{2}(E_{2})
$$

# La segunda ley
Si juntamos los dos sistemas de arriba está bien suponer que van a intercambiar energía, pero de una forma particular, lo van a hacer tal que los niveles de energía de cada sistema no cambien. 
Me gusta pensar en los niveles de energía como escalones, cada escalón representa una cantidad de energía específica que el sistema puede tener, entonces, cuando juntamos los dos sistemas, la energía se mueve de un lado a otro, pero lo que estamos diciendo ahora es que aunque la energía ya pasó de un lado a otro, los escalones de energía de cada sistema no cambian. 

Esto es raro porque si los sistemas interactúan, esa interacción normalmente afecta los escalones de ambos sistemas. Pero acá vamos a suponer que la interacción SÓLO sirve para mover la energía. 

En términos un poco más serios, cuando los sistemas interactúan, debe de haber algún término de interacción en su Hamiltoniano, y este término cambiaría los niveles de energía de cada sistema. Pero asumimos que estos cambios son tan pequeños que podemos ignorarlos y el único efecto importante de la interacción es permitir que la energía se transfiera entre los sistemas.

La energía de el sistema combinado será $E_{\text{total}} = E_{1}+E_{2}$.  El primer sistema puede tener cualquier energía $E$, mientra que sea menor o igual a $E_{\text{total}}$, mientras que el segundo sistema debe quedarse con lo que resta, es decir: $E_{2}=E_{\text{total}}-E$.
 
En un sistema cuántico, las energías $E$ no pueden tomar valores continuos, sino que están cuantizadas, por lo que solo pueden tomar valores discretos específicos $E_{i}$, estos como ya se dijo en la entrada anterior, serían los eigenvalores del Hamiltoniano $H$, por lo que el sistema combinado no puede acceder a cualquiera energía arbitraria, sólo a las combinaciones de estos valores permitidos. 

El número total de estados posibles disponibles del sistema combinado $\Omega(E_{\text{total}})$ se calcula sumando todas las posibles combinaciones de energía que cumplan:

- $E_{i}$ es una energía permitida del primer sistema.
- $E_{\text{total}}-E_{i}$ es una energía permitida del segundo sistema.

Por lo que el número de estados disponibles del sistema combinado es
$$
\Omega(E_{total}) = \sum_{\left\{ E_{i} \right\} } \Omega_{1}(E_{i})\Omega_{2}(E_{\text{total}}-E_{i})
$$
Pero usando que la entropía es
$$
S = k_{B}\log \Omega
$$
entonces podemos reescribir como

$$
\Omega(E_{\text{total}}) = \sum_{\{E_i\}} \exp\left(\frac{S_1(E_i)}{k_B} + \frac{S_2(E_{\text{total}} - E_i)}{k_B}\right).
$$
Pero aquí pasa algo medio turbio, pues como ambos sistemas tienen niveles de energía discretos, para que $E_{i}$ sea una energía válida para el sistema 1 y $E_{\text{total}}-E_{i}$ sea válida para el sistema 2, tiene que haber una relación precisa entre estos valores. Lo que vamos a hacer va a ser ignorar esto, ya que pues, los niveles de energía suelen estar tan cerca unos de otros en este tipo de sistemas, que podemos tratarlos como si fueran continuos. Así hasta podemos usar integrales. 

En la entrada anterior, hicimos la suposición muy importante de que **todos los estados son igualmente probables**, ahora pensemos en eso pero para nuestro sistema combinado. Pues como la energía $E_{total}$ es fija, estamos hablando del **ensamble microcanónico** y por lo tanto, la probabilidad de que el sistema se encuentre en cualquiera de estos estados es 
$$
p = \frac{1}{\Omega(E_{\text{total}})}
$$
Ahora, algo pasa que en principio suena truculento, y es que la entropía del sistema combinado siempre es mayor o igual a la suma de las entropías de los dos sistemas individuales:
$$
S(E_{\text{total}}) \geq S_{1}(E_{1})+S_{2}(E_{2})
$$
esto es cierto, simplemente porque los estados de los dos sistemas individuales son un subconjunto de los estados accesibles del sistema combinado. 

En sistemas con muchas partículas, es decir cuando $N$ es muy grande, hay una aproximación útil para calcular la entropía total $S(E_{\text{total}})$. La clave es que, como ya dijimos que la entropía es proporcional al número de partículas $S \sim N$ y además, esta suma
$$
\Omega(E_{\text{total}}) = \sum_{\{E_i\}} \exp\left(\frac{S_1(E_i)}{k_B} + \frac{S_2(E_{\text{total}} - E_i)}{k_B}\right).
$$
incluye exponenciales que dependen de $N$, como $N$ es muy grande, esta suma va a estar dominada por su valor máximo. 

Ya sabemos que ese máximo es el que cumple la propiedad tal que si derivamos la función y la evaluamos nos tiene que dar cero, eso ahorita no es importante. El tema es que sea entonces, sea el valor máximo $E=E_{*}$, podemos aproximar de una forma muy buena la entropía del sistema combinado tal que 
$$
S(E_{\text{total}}) \approx S_{1}(E_{*}) + S_{2}(E_{\text{total}}-E_{*}) \geq S_{1}(E_{1}) + S_{2}(E_{2})
$$
A ver,  algo que pasa aquí es que no hay una razón así muy fundamental por la cual el primer sistema debería quedarse con la energía fija $E_{*}$ cuando se pone en contacto con el segundo sistema. Pero pasa que cuando los dos sistemas interactúan, la probabilidad de encontrar al primer sistema con cualquier otra energía que no sea $E_{*}$ es tan baja que casi es imposible. 

Esa energía $E_{*}$ es el valor que maximiza el número de estados del sistema combinado. Esto ocurre porque la entropía total alcanza su valor máximo cuando el sistema está en equilibrio térmico. 

Esto porque, como ya se dijo, la entropía total $S_{\text{total}}$ de los dos sistemas en contacto es la suma de las entropías individuales:
$$
S_{\text{total}} = S_1(E) + S_2(E_{\text{total}} - E),
$$

Para maximizar $S_{\text{total}}$, derivamos con respecto a $E$ e igualamos a cero:
$$
\frac{\partial S_{\text{total}}}{\partial E} = 0.
$$
Dado que $S_{\text{total}} = S_1(E) + S_2(E_{\text{total}} - E)$, su derivada es:
$$
\frac{\partial S_{\text{total}}}{\partial E} = \frac{\partial S_1(E)}{\partial E} + \frac{\partial S_2(E_{\text{total}} - E)}{\partial E}.
$$
Aplicamos la regla de la cadena al segundo término:
$$
\frac{\partial S_2(E_{\text{total}} - E)}{\partial E} = -\frac{\partial S_2}{\partial E}.
$$
Por lo tanto, la ecuación queda:
$$
\frac{\partial S_1(E)}{\partial E} - \frac{\partial S_2(E_{\text{total}} - E)}{\partial E} = 0.
$$
Evaluamos esta condición en el valor $E_{\star}$ que maximiza la entropía:
$$
\frac{\partial S_1(E_{\star})}{\partial E} - \frac{\partial S_2(E_{\text{total}} - E_{\star})}{\partial E} = 0.
$$

La derivada de la entropía con respecto a la energía está relacionada con la temperatura $T$ del sistema (se hablará un poco más sobre la siguiente expresión en la siguiente entrada)
$$
\frac{\partial S}{\partial E} = \frac{1}{T}.
$$
Sustituyendo esta relación en la ecuación anterior, obtenemos:
$$
\frac{1}{T_1} = \frac{1}{T_2}.
$$
Esto significa que las temperaturas de los dos sistemas son iguales en el equilibrio:
$$
T_1 = T_2.
$$

Continuando, una vez que el sistema alcanza el estado de equilibrio, será extremadamente improbable que vuelva a un estado con energía inicial $E_{1}$ o cualquier otra diferente a $E_{*}$.

Esta idea simple, que nos dice que los sistemas evolucionan hacia el estado más probable (con máxima entropía) y que es muuuuy improbable que salgan de él, es la base de la **irreversibilidad** que observamos en el mundo real.

Aquí entra la segunda ley de la termodinámica como la conocemos: la entropía de un sistema aislado nunca disminuye; tiende a aumentar o, en el mejor de los casos, a permanecer constante. El eslogan es simplemente, _**la entropía siempre aumenta**_.

Cuando se piense en la segunda ley de la termodinámica, vale la pena recordar la frase de Eddington:

_**"Si alguien te dice que tu teoría favorita del universo está en desacuerdo con las ecuaciones de Maxwell – bueno, tanto peor para las ecuaciones de Maxwell. Si se encuentra en desacuerdo con la observación – bueno, esos experimentadores a veces cometen errores. Pero si tu teoría está en desacuerdo con la segunda ley de la termodinámica, no hay esperanza; colapsará en la humillación más profunda."**_
