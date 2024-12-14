@def title = "Church-Turing"
@def tags = ["syntax", "code", "math"]

# Church-Turing

Al comenzar a estudiar computación cuántica, es fundamental comprender qué es una computadora. Podemos definir una computadora como un dispositivo físico que ejecuta algoritmos. Un algoritmo, lo podemos pensar como un procedimiento bien definido cuya descripción es *finita*, esto sólo nos dice que el algoritmo debe tener un número limitado de pasos y debe terminar en algún momento.

## La Tesis Fuerte de Church-Turing

Normalmente nos interesa principalmente la cantidad de recursos que una computadora utiliza para resolver un problema. A esto lo llamamos *complejidad*. Los dos recursos en los que primero pensamos son: 

1. **Tiempo**: La cantidad de pasos o operaciones que el algoritmo necesita para completarse.
2. **Espacio**: La cantidad de memoria o almacenamiento que el algoritmo requiere durante su ejecución.

Además medimos estos recursos como una función del tamaño de la entrada del problema.

Ahora, para describir la complejidad de los algoritmos, utilizamos la notación _Big O_. Por ejemplo:

- Un algoritmo con tiempo de ejecución de $2n^2 + 3$ se describe como $\mathcal{O}(n^2)$
- Un algoritmo con tiempo de ejecución de $4n^3 + n + 7$ se describe como $\mathcal{O}(n^3)$

### Eficiencia de Algoritmos
- Un algoritmo se considera **eficiente** si la cantidad de recursos que utiliza está en $\mathcal{O}(n^k)$ para alguna constante $k$. Estos algoritmos se denominan **polinomiales**.
- Los algoritmos que usan $\Omega(c^n)$ recursos (donde $c > 1$ es una constante) se denominan **exponenciales** y generalmente se consideran ineficientes porque su tiempo de ejecución crece muy rápidamente a medida que aumenta el tamaño de la entrada.

### La Tesis de Church-Turing
La tesis de Church-Turing nos dice que cualquier problema computacional que pueda ser resuelto por cualquier computadora que podamos construir, también puede ser resuelto por una *máquina de Turing*.

- Una **máquina de Turing** es una abstracción matemática. Representa un modelo simple pero poderoso de computación. Consiste en una cinta infinita dividida en celdas, un cabezal de lectura/escritura, y un conjunto finito de estados y reglas de transición.
- Cuando vi el tema de máquina de Turing por primera vez, veía máquinas de Turing en todos lados, similar a cuando estudias el oscilador armónico y comienzas a ver osciladores armónicos en cualquier lugar.
- El término **computable** se refiere a cualquier problema que pueda ser resuelto por una máquina de Turing.
- Es importante notar que la tesis original de Church-Turing no hace afirmaciones sobre la eficiencia de la computación, solo sobre qué problemas son computables en principio.

### Máquina de Turing Probabilística
Para extender la tesis de Church-Turing para que nos pueda servir al hablar de la complejidad de la computación, resulta útil generalizar la definición de una máquina de Turing.

- La máquina de Turing probabilística es una extensión de la máquina de Turing que puede hacer una elección aleatoria binaria (como lanzar una moneda) en cada paso de su ejecución.
- Esta capacidad de tomar decisiones aleatorias puede, en algunos casos, permitir resolver ciertos problemas más eficientemente que una máquina de Turing determinista.

### La Tesis Fuerte de Church-Turing
La tesis fuerte de Church-Turing afirma que una máquina de Turing probabilística puede simular eficientemente cualquier modelo realístico de computación.

- Por "modelo realístico" nos referimos a cualquier modelo de computación que sea consistente con las leyes físicas conocidas.
- Por ejemplo, esto incluiría computadoras basadas en transistores, computación óptica, siempre y cuando estos modelos no violen las leyes de la física.

### Limitaciones de la Tesis Fuerte de Church-Turing Clásica
El problema fundamental con la tesis fuerte de Church-Turing clásica es que parece que la física clásica no es lo suficientemente poderosa para simular eficientemente la física cuántica. Esto se debe a que:

1. Los sistemas cuánticos pueden existir en superposiciones de estados, lo que permite procesar múltiples posibilidades simultáneamente.
2. El entrelazamiento cuántico permite correlaciones entre partículas que no tienen análogo clásico.
3. La dimensión del espacio de estados de un sistema cuántico crece exponencialmente con el número de partículas, lo que hace que la simulación clásica sea exponencialmente costosa.

### La Necesidad de un Nuevo Modelo
Dado que la física cuántica parece ofrecer recursos computacionales que no están disponibles en los modelos clásicos, necesitamos un modelo de computación capaz de simular dispositivos físicos arbitrarios y realísticos, incluyendo dispositivos cuánticos. Esto significaría que:

1. Podríamos aprovechar los fenómenos cuánticos para realizar cálculos.
2. Seríamos capaces de simular sistemas cuánticos de manera eficiente.
3. Podríamos desarrollar algoritmos cuánticos que resuelvan ciertos problemas más rápidamente que cualquier algoritmo clásico conocido.

### La Tesis Cuántica Fuerte de Church-Turing
Se propone la tesis cuántica fuerte de Church-Turing, que afirma que una *máquina de Turing cuántica* puede simular eficientemente cualquier modelo realístico de computación.

- Una máquina de Turing cuántica es una extensión teórica de la máquina de Turing clásica que opera según los principios de la mecánica cuántica.
- Esta máquina puede realizar operaciones en superposiciones de estados y aprovechar el entrelazamiento cuántico.
- Se cree que este modelo es capaz de capturar toda la potencia computacional permitida por las leyes de la física, incluida la física cuántica.
