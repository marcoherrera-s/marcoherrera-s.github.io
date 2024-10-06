@def title = "Modelo cuántico de computación"
@def tags = ["syntax", "code", "math"]

# Modelo cuántico de computación

Un cómputo cuántico se compone de tres partes fundamentales:

1. **Preparación del estado de entrada**
    - Esta etapa implica inicializar el sistema cuántico en un estado específico antes de que comience el procesamiento de la información.
    - La preparación del estado de entrada no es sencilla debido a la delicadeza de los estados cuánticos. Los sistemas cuánticos son extremadamente sensibles a las perturbaciones externas, lo que puede causar decoherencia y errores en la preparación del estado. 

2. **Implementación de cualquier transformación unitaria sobre el estado de entrada**
    - Esta fase equivale a aplicar una cadena de operaciones que implementan una función específica en el estado cuántico inicial.
    - Al igual que en la computación clásica donde se aplican operaciones lógicas para procesar datos, en la computación cuántica se aplican transformaciones unitarias para manipular los qubits y realizar cálculos complejos.

3. **Medir sobre el estado de salida**
    - La medición colapsa el estado cuántico final a un estado clásico observable.
    - La naturaleza probabilística de la medición cuántica introduce aleatoriedad en el resultado final. Esto es similar a una máquina de Turing probabilística, donde las transiciones de estado pueden depender de resultados aleatorios.

## Poder de los Cómputos Cuánticos por Enmarañamiento o Enredamiento o Entrelazamiento o como quieran ya me vale

- Es una propiedad donde los estados cuánticos de dos o más qubits están interrelacionados de tal manera que el estado de uno no puede describirse independientemente del estado de los otros.
- Los sistemas _enmarañados_ no pueden ser descritos por teorías que solo consideran interacciones locales, lo que significa que poseen correlaciones que exceden lo que es posible en la computación clásica. Esto contribuye a la mayor potencia computacional de los sistemas cuánticos.

## Modelo de Circuitos de la Computadora Cuántica

- El modelo de circuitos para computadoras cuánticas es similar al de las computadoras clásicas reversibles. La principal diferencia es que en lugar de operaciones clásicas, utilizamos operaciones unitarias que preservan la reversibilidad del sistema.
- Si una transformación no es reversible, las operaciones no serán unitarias. La reversibilidad es esencial para evitar pérdida de información, y las operaciones unitarias garantizan que cada paso del cálculo cuántico pueda ser invertido si es necesario.
- **Profundidad y Tamaño del Circuito:** 
    - **Profundidad del circuito:** Se refiere al número de capas de operaciones secuenciales aplicadas en el circuito.
    - **Tamaño del circuito:** Indica la cantidad total de operaciones (compuertas) utilizadas.
    - **Relación con el tiempo de cómputo:** Ambos parámetros son análogos al tiempo de ejecución en la computación clásica, ya que mayor profundidad y tamaño generalmente implican más tiempo para completar el cómputo.


## Compuertas Cuánticas

### Compuertas de 1-Qubit

- Una compuerta cuántica de 1-qubit es cualquier operador unitario que actúa sobre un sistema cuántico de 2 dimensiones, es decir, un qubit.
- **Esfera de Bloch:** 
    - En términos de la esfera de Bloch, la acción de un operador $U$ sobre un estado $\ket{\psi}$ se puede visualizar como una rotación del vector de Bloch correspondiente al estado $\ket{\psi}$ hacia el vector de Bloch de $U\ket{\psi}$.
    - **Ejemplo:** La compuerta NOT, que intercambia $\ket{0}$ por $\ket{1}$ y viceversa, se puede ver como una rotación de $\pi$ radianes alrededor de un eje específico de la esfera de Bloch.

- Las compuertas de Pauli $X$, $Y$ y $Z$ son operadores fundamentales que representan rotaciones específicas en la esfera de Bloch.
- Al exponenciar las compuertas de Pauli, obtenemos operadores unitarios que corresponden a las compuertas de rotación $R_x(\theta)$, $R_y(\theta)$ y $R_z(\theta)$.
- Definición de las compuertas de rotación:
$$
    \begin{align*}
    R_{x}(\theta) &= e^{\frac{-i\theta X}{2}} \\
    R_{y}(\theta) &= e^{\frac{-i\theta Y}{2}} \\
    R_{z}(\theta) &= e^{\frac{-i\theta Z}{2}}
    \end{align*}
    $$



- **Propiedad:**
    - Sea $x$ un número real y $A$ una matriz tal que $A^{2} = I$ (donde $I$ es la matriz identidad), entonces:
    $$
    e^{iAx} = \cos(x)I + i\sin(x)A
    $$
- **Aplicación a Compuertas de Rotación:**
    $$
    \begin{align*}
    R_{x}(\theta) &= e^{\frac{-i\theta X}{2}} = \cos\left( \frac{\theta}{2} \right)I - i\sin\left( \frac{\theta}{2} \right)X \\
    R_{y}(\theta) &= e^{\frac{-i\theta Y}{2}} = \cos\left( \frac{\theta}{2} \right)I - i\sin\left( \frac{\theta}{2} \right)Y \\
    R_{z}(\theta) &= e^{\frac{-i\theta Z}{2}} = \cos\left( \frac{\theta}{2} \right)I - i\sin\left( \frac{\theta}{2} \right)Z
    \end{align*}
    $$
- **Representación Matricial**

$$
R_{x}(\theta) = \begin{pmatrix}
\cos\left(\frac{\theta}{2}\right) & -i\sin\left(\frac{\theta}{2}\right) \\
-i\sin\left(\frac{\theta}{2}\right) & \cos\left(\frac{\theta}{2}\right)
\end{pmatrix}
$$

$$
R_{y}(\theta) = \begin{pmatrix}
\cos\left(\frac{\theta}{2}\right) & -\sin\left(\frac{\theta}{2}\right) \\
\sin\left(\frac{\theta}{2}\right) & \cos\left(\frac{\theta}{2}\right)
\end{pmatrix}
$$

$$
R_{z}(\theta) = \begin{pmatrix}
e^{-i\frac{\theta}{2}} & 0 \\
0 & e^{i\frac{\theta}{2}}
\end{pmatrix}
$$

### Aplicación de $R_z(\theta)$ en la Esfera de Bloch

- Aplicar $R_z(\theta)$ a un estado arbitrario de 1-qubit implica rotar el vector de Bloch correspondiente alrededor del eje $z$ por un ángulo $\theta$.
- Si tenemos un estado $\ket{\psi} = \alpha\ket{0} + \beta\ket{1}$, aplicar $R_z(\theta)$ resulta en:
    $$
    R_z(\theta)\ket{\psi} = \alpha e^{-i\frac{\theta}{2}}\ket{0} + \beta e^{i\frac{\theta}{2}}\ket{1}
    $$
- Esto rotó el vector de Bloch de $\ket{\psi}$ alrededor del eje $z$ en la esfera de Bloch, cambiando la fase relativa entre $\ket{0}$ y $\ket{1}$.

- Saber que cualquier compuerta de 1-qubit puede descomponerse en rotaciones sobre los ejes principales de la esfera de Bloch es fundamental para la implementación de circuitos cuánticos complejos.
- **Teorema de Descomposición:**
- Supongamos que $U$ es una compuerta unitaria de 1-qubit. Entonces, existen reales $\alpha$, $\beta$, $\gamma$ y $\delta$ tales que:
    $$
    U = e^{i\alpha} R_z(\beta) R_y(\gamma) R_z(\delta)
    $$

- Consideremos la compuerta Hadamard $H$. Podemos expresarla como una secuencia de rotaciones:
    $$
    H = R_y\left(\frac{\pi}{2}\right) R_z(\pi) R_y\left(\frac{\pi}{2}\right)
    $$

### Teorema de Descomposición General

- Sea $U$ un operador unitario de 1-qubit. Sean $l$ y $m$ cualesquiera dos ejes no paralelos de la esfera de Bloch. Entonces, existen reales $\alpha$, $\beta$, $\gamma$ y $\delta$ tales que:
    $$
    U = e^{i\alpha} R_l(\beta) R_m(\gamma) R_l(\delta)
    $$
- Este teorema amplía la idea de descomposición, permitiendo el uso de cualquier par de ejes no paralelos para expresar cualquier operación unitaria de 1-qubit.

### Corolario de la Descomposición

- Cualquier compuerta $U$ de 1-qubit puede ser escrita de la forma:
    $$
    U = e^{i\alpha} A X B X C
    $$
    donde $A$, $B$ y $C$ son operadores unitarios que satisfacen $ABC = I$.
- Esto muestra que las compuertas de 1-qubit pueden combinarse de maneras específicas para formar cualquier operación unitaria, esto nos facilita la construcción de circuitos cuánticos complejos a partir de componentes más simples.

### Compuertas CNOT y C-$U$

- **Compuerta CNOT:**
    - Recordamos que es una compuerta cuántica de 2-qubits donde se aplica la compuerta NOT condicionalmente. El primer qubit actúa como control y el segundo como objetivo.
    - **Acción:**
    $$
    \begin{align*}
    \text{CNOT}\ket{00} &= \ket{00} \\
    \text{CNOT}\ket{01} &= \ket{01} \\
    \text{CNOT}\ket{10} &= \ket{11} \\
    \text{CNOT}\ket{11} &= \ket{10}
    \end{align*}
    $$
- **Compuerta C-$U$:**
    - **Definición:** Dada una compuerta $U$ de 1-qubit, la compuerta C-$U$ se define de manera que:
    $$
    \begin{align*}
    \text{C-}U\ket{0}\ket{\psi} &= \ket{0}\ket{\psi} \\
    \text{C-}U\ket{1}\ket{\psi} &= \ket{1}U\ket{\psi}
    \end{align*}
    $$
- La compuerta $U$ se aplica al segundo qubit únicamente si el primer qubit está en el estado $\ket{1}$.


## Conjuntos Universales de Compuertas Cuánticas

- **Definición Formal:**
    - Un conjunto de compuertas es **universal para compuertas de 1-qubit** si cualquier compuerta unitaria de 1-qubit puede ser aproximada con precisión arbitraria por un circuito cuántico que utiliza únicamente compuertas de ese conjunto.
    - **Precisión Arbitraria:** Significa que para cualquier operación unitaria $U$ y cualquier margen de error $\epsilon > 0$, existe una secuencia finita de compuertas del conjunto universal cuyo efecto es indistinguible de $U$ dentro de $\epsilon$.
    - Esto está chido porque permite construir cualquier operación necesaria para la computación cuántica usando un conjunto limitado de compuertas básicas.

### Teorema sobre Conjuntos Universales de Compuertas de Rotación

- **Enunciado del Teorema:**
    - Si un conjunto de dos compuertas de 1-qubit (rotaciones) $\mathcal{G} = \{ R_l(\beta), R_m(\gamma) \}$ cumple con:
        1. $l$ y $m$ son ejes no paralelos de la esfera de Bloch.
        2. $\beta$ y $\gamma$ son números reales en el intervalo $[0, 2\pi)$ tales que $\frac{\beta}{\pi}$ y $\frac{\gamma}{\pi}$ no son irracionales.
    - Entonces, $\mathcal{G}$ es universal para compuertas de 1-qubit.
    - Es decir que, tener dos rotaciones alrededor de ejes distintos y con ángulos que no están relacionados por proporciones irracionales garantiza que cualquier rotación en la esfera de Bloch puede ser aproximada por combinaciones de estas rotaciones.

### Ejemplo de Conjunto Universal

## Compuertas de Hadamard $H$ y $T$

### Compuerta de Hadamard $H$

**Definición:**

$$
H\ket{0} = \frac{1}{\sqrt{2}}(\ket{0} + \ket{1})
$$
$$
H\ket{1} = \frac{1}{\sqrt{2}}(\ket{0} - \ket{1})
$$

**Representación Matricial:**

$$
H = \frac{1}{\sqrt{2}} 
\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$

**Propiedad de ser su propia inversa:**

$$
H = H^{-1}
$$

- **Significado:** Aplicar $H$ dos veces consecutivas devuelve el estado original, lo que implica que $H$ es reversible.

### Compuerta de Fase $T$

**Definición:**

$$
T\ket{0} = \ket{0}
$$
$$
T\ket{1} = e^{i \frac{\pi}{4}}\ket{1}
$$

**Representación Matricial:**

$$
T = 
\begin{pmatrix}
1 & 0 \\
0 & e^{i\frac{\pi}{4}}
\end{pmatrix}
$$

**Detalles Profundos:**

- **Significado:** La compuerta $T$ introduce una fase cuántica específica al estado $\ket{1}$, permitiendo la creación de estados con fases complejas.
- Es importante para la construcción de compuertas universales, ya que, combinada con $H$, permite la aproximación de cualquier compuerta unitaria de 1-qubit.


### Lema y Corolario sobre Conjuntos Universales

- **Lema:**
    - **Enunciado:** El conjunto $G = \{ HTHT, THTH \}$ satisface las condiciones del teorema anterior.
    - Esto nos dice que combinaciones específicas de las compuertas $H$ y $T$ cumplen los criterios para ser un conjunto universal para compuertas de 1-qubit.

- **Corolario:**
    - El conjunto $\{ H, T \}$ es universal para compuertas de 1-qubit.
    - Es decir que,  cualquier compuerta unitaria de 1-qubit puede ser aproximada a cualquier precisión arbitraria utilizando solo las compuertas $H$ y $T$.

- **Teorema sobre Conjunto Universal Completo:**
    - El conjunto $\{ \text{CNOT}, H, T \}$ es un conjunto universal de compuertas.
    - Este conjunto no solo es universal para compuertas de 1-qubit, sino que también incluye la compuerta CNOT, lo que lo hace universal para cualquier operación cuántica, incluyendo aquellas que involucran múltiples qubits.


## Eficiencia en la Aproximación de Transformaciones Unitarias

### Simulación de Transformaciones Unitarias Arbitrarias

- Una transformación unitaria arbitraria puede ser simulada utilizando compuertas de un conjunto fijo universal, como $\{ H, \text{CNOT}, T \}$.
- **Importancia de la Eficiencia:**
    - Para que la simulación sea práctica, deseamos que cualquier transformación unitaria se pueda implementar utilizando un número de compuertas que crece de manera polinomial con respecto al tamaño del sistema.
