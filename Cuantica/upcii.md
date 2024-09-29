@def title = "Cuántica II"
@def tags = ["syntax", "code", "math"]


# Midiendo 

Decidí dividir en dos la entrada de un poquito de cuántica porque al principio pensé que en serio sería poquito, pero definitivamente habían más cosas de qué hablar. 

- En la evolución de estados cuánticos, generalmente se asume un sistema cerrado sin interacción con el exterior.
- Sin embargo, el proceso de medición implica una interacción inevitable entre el sistema y el aparato de medición.
- Esta interacción viola la condición de sistema cerrado, haciendo que el postulado de evolución unitaria no sea aplicable directamente.
- Solución: Se puede considerar el sistema y el aparato de medición como parte de un sistema cerrado más grande.
- **Es importante notar que la evolución de un estado durante un proceso de medición no es unitaria.**
---
#### Postulado de la medición
Para una base ortonormal $B = \{|\varphi_i\rangle\}$ de un espacio de estados $\mathcal{H}_A$ de un sistema $A$:

1. Estado inicial: $|\psi\rangle = \sum_i \alpha_i|\varphi_i\rangle$
2. Resultado de la medición: 
   - Probabilidad de obtener el resultado $i$: $P(i) = |\alpha_i|^2$
   - Estado post-medición: $|\varphi_i\rangle$

### Para Sistemas Bipartitos
Considerando un estado $|\psi\rangle = \sum_i \alpha_i|\varphi_i\rangle|\gamma_i\rangle$ en $\mathcal{H}_A \otimes \mathcal{H}_B$:
- $|\varphi_i\rangle$ son ortonormales en $\mathcal{H}_A$
- $|\gamma_i\rangle$ tienen norma unitaria en $\mathcal{H}_B$ (no necesariamente ortogonales)
- Medir el sistema $A$ resulta en:
  - Probabilidad de obtener $i$: $P(i) = |\alpha_i|^2$
  - Estado post-medición del sistema completo: $|\varphi_i\rangle|\gamma_i\rangle$

Aquí es importante que notemos que para el estado $\ket{\psi}=\sum_{i}\alpha_{i}\ket{\varphi_{i}}$, tenemos que $\alpha_{i}=\braket{ \varphi_{i}|\psi  }$, por lo que
$$
|\alpha_{i}|^{2}=\alpha_{i}^{*}\alpha_{i}=\braket{ \psi | \varphi_{i} } \braket{ \varphi_{i} | \psi }. 
$$

Solo para ver rápidamente de donde viene esto, porque aunque pueda parecer fácil, no creo que esté de más hacer explícita esta parte. 

1. 
   $$
   \ket{\psi} = \sum_i \alpha_i \ket{\varphi_i}
   $$
   $$
   \braket{\varphi_j | \psi} = \braket{\varphi_j | \sum_i \alpha_i \ket{\varphi_i}}
   $$
   
2. Debido a la linealidad del producto interno, podemos mover la suma y los coeficientes $\alpha_i$ fuera del producto interno:
   $$
   \braket{\varphi_j | \psi} = \sum_i \alpha_i \braket{\varphi_j | \varphi_i}
   $$

3. Como $\ket{\varphi_i}$ forman una base ortonormal, esto implica que $\braket{\varphi_j | \varphi_i} = \delta_{ji}$, donde  $\delta_{ji}$ es la delta de Kronecker. Por lo tanto, la suma  reduce a:
   $$
   \braket{\varphi_j | \psi} = \alpha_j
   $$



---
Para que no quede tan en chino esto, podemos decir los siguientes puntos importantes de lo anterior:

1. La medición causa que el estado cuántico "colapse" a uno de los estados base.
2. La naturaleza probabilística de los resultados de medición es intrínseca a la mecánica cuántica.
3. A diferencia de la física clásica, los resultados individuales de medición no son deterministas.
4. Mediciones sucesivas en el mismo estado base producirán el mismo resultado.


---
Consideremos un qubit en el estado:

$$|\psi\rangle = \frac{1}{\sqrt{2}} |0\rangle + \frac{1}{\sqrt{2}} |1\rangle$$

Midiendo en la base computacional $\{|0\rangle, |1\rangle\}$:
- $P(0) = P(1) = |\frac{1}{\sqrt{2}}|^2 = \frac{1}{2}$
- Post-medición: El estado colapsa a $|0\rangle$ o $|1\rangle$ con igual probabilidad.

---
### Medición Proyectiva
- Generalización de la medición de von Neumann.
- Definida por un conjunto de proyectores ortogonales $\{P_i\}$ que satisfacen:
  1. $P_i^\dagger = P_i$ (hermiticidad)
  2. $P_i^2 = P_i$ (idempotencia)
  3. $\sum_i P_i = I$ (completitud)
  4. $P_i P_j = \delta_{ij} P_i$ (ortogonalidad)
- Un observable es un operador hermitiano $M$ actuando en el espacio de estados.
- Descomposición espectral: $M = \sum_i m_i P_i$
  - $m_i$: autovalores reales
  - $P_i$: proyectores sobre los subespacios propios
- Medir un observable equivale a realizar una medición proyectiva $\{P_i\}$
- El resultado $i$ corresponde al autovalor $m_i$
- Para un estado $|\psi\rangle$ y un observable $M$:
- Valor esperado: $\langle M \rangle = \langle \psi | M | \psi \rangle$
- Varianza: $\Delta M^2 = \langle M^2 \rangle - \langle M \rangle^2$
### Estados mezclados y operaciones cuánticas generales
- Hasta ahora siempre hemos asumido que el estado de un sistema tiene un vector de estado definido. Tal estado lo conocemos como un _estado puro_.
Consideremos un qubit que puede estar en dos estados puros diferentes:
- $|\psi_1\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle$ con probabilidad $\frac{1}{3}$
- $|\psi_2\rangle = \frac{1}{\sqrt{2}}|0\rangle - \frac{1}{\sqrt{2}}|1\rangle$ con probabilidad $\frac{2}{3}$

Este sistema está en un estado mezclado, una combinación probabilística de $|\psi_1\rangle$ y $|\psi_2\rangle$.
- Podemos tener estados mezclados en una combinación de cualquier número $n$ de qubits. 
Un estado mezclado de $n$ qubits se puede representar como:
$\{(|\psi_1\rangle, p_1), (|\psi_2\rangle, p_2), \ldots, (|\psi_k\rangle, p_k)\}$

Donde:
- $|\psi_i\rangle$ son estados puros
- $p_i$ son las probabilidades asociadas (con $\sum_i p_i = 1$)

Esta notación significa que el sistema está en el estado $|\psi_i\rangle$ con probabilidad $p_i$.
- Usar representaciones como la anterior sería talachudo, por lo que, una alternativa muy útil, donde podemos representar estados mezclados en términos de operadores del espacio de Hilber $\mathcal{H}$. Estos son llamados _operadores de densidad_. Y la representación matricial de un operador de densidad es llamada _matriz de densidad_.

Entonces, el **operador de densidad** es una representación más conveniente para estados mezclados:

Para un estado puro $|\psi\rangle$: $\rho = |\psi\rangle\langle\psi|$

Para un estado mezclado: $\rho = \sum_{i=1}^k p_i |\psi_i\rangle\langle\psi_i|$

### Propiedades
1. Hermitiano: $\rho = \rho^\dagger$
2. Traza unitaria: $\text{Tr}(\rho) = 1$
3. Positivo semidefinido: $\langle\phi|\rho|\phi\rangle \geq 0$ para todo $|\phi\rangle$

Para el estado mezclado mencionado anteriormente:

$\rho = \frac{1}{3}|\psi_1\rangle\langle\psi_1| + \frac{2}{3}|\psi_2\rangle\langle\psi_2|$

$= \frac{1}{3}(\frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle)(\frac{1}{\sqrt{2}}\langle0| + \frac{1}{\sqrt{2}}\langle1|) + \frac{2}{3}(\frac{1}{\sqrt{2}}|0\rangle - \frac{1}{\sqrt{2}}|1\rangle)(\frac{1}{\sqrt{2}}\langle0| - \frac{1}{\sqrt{2}}\langle1|)$

$= \frac{1}{2}|0\rangle\langle0| + \frac{1}{2}|1\rangle\langle1|$

Si aplicamos un operador unitario $U$ a un estado puro $|\psi\rangle$, el nuevo operador de densidad es:

$\rho' = U|\psi\rangle\langle\psi|U^\dagger$

Para un estado mezclado:

$\rho' = U(\sum_i p_i |\psi_i\rangle\langle\psi_i|)U^\dagger = \sum_i p_i (U|\psi_i\rangle\langle\psi_i|U^\dagger)$

Esto muestra que podemos calcular el operador de densidad de salida sin conocer la descomposición exacta del estado de entrada, solo su operador de densidad. 

### Mediciones en Estados Mezclados
Vimos que la probabilidad de obtener un resultado $|m\rangle$ al medir un estado es $|\alpha_{i}|^{2}=\alpha_{i}^{*}\alpha_{i}=\braket{ \psi | \varphi_{i} } \braket{ \varphi_{i} | \psi }$ y como el operador de densidad $\rho$ de un estado puro es $\rho = |\psi\rangle\langle\psi|$, entonces:

$P(m) = \braket{ \psi | m }\braket{ m | \psi } = \braket{ m | \psi }\braket{ \psi | m } =\langle m|\rho|m\rangle = \text{Tr}(|m\rangle\langle m|\rho)$

### Demostración
Para un estado puro $|\psi\rangle$:
$P(m) = |\langle m|\psi\rangle|^2 = \langle m|\psi\rangle\langle\psi|m\rangle$

Como cualquier número es la traza de una matriz 1x1, pues sea $A = [2]$, $Tr(A)=2$, entonces:

$P(m) = \text{Tr}(\langle m|\psi\rangle\langle\psi|m\rangle$

La propiedad cíclica de la traza nos dice que:  $\text{Tr}(ABC) = \text{Tr}(BCA) = \text{Tr}(CAB)$.
Por lo que sea $A = \bra{m}$, $B=\ket{\psi} \bra{\psi}$, $c=\ket{m}$. 

$$
\text{Tr}(ABC) =\text{Tr}(CAB)
$$
$$
P(m)=\text{Tr}(\langle m|\psi\rangle\langle\psi|m\rangle = \text{Tr}(\ket{m}\bra{m}\ket{\psi} \bra{\psi})=\text{Tr}(\ket{m} \bra{m}\rho)
$$



Para estados mezclados, esto se generaliza directamente debido a la linealidad de la traza.

- Dos estados mezclados con el mismo operador de densidad son indistinguibles mediante cualquier medición cuántica. Esto es análogo a cómo dos estados puros que difieren solo por una fase global son equivalentes.
- Los estados puros se representan como puntos en la superficie de la esfera de Bloch.
- Los estados mezclados corresponden a puntos en el interior de la esfera.
- El centro de la esfera representa el estado maximalmente mezclado $\rho = \frac{1}{2}I$.

### Traza Parcial y Operador de Densidad Reducido

La **traza parcial** es una operación que nos permite describir el estado de un subsistema de un sistema cuántico compuesto.

Para un sistema bipartito $AB$ con operador de densidad $\rho_{AB}$, el operador de densidad reducido del subsistema $A$ es:

$\rho_A = \text{Tr}_B(\rho_{AB})$

donde $Tr_{B}$ es la traza parcial del sistema $B$, definida como la extensión lineal del operador definido en los estados base por
$$
Tr_{B}=(\ket{a_{1}} \bra{a_{2}} \otimes \ket{b_{1}} \bra{b_{2}} ) = \ket{a_{1}} \bra{a_{2}}Tr(\ket{b_{1}} \bra{b_{2}} ) = \ket{a_{1}} \bra{a_{2}}\braket{ b_{2}|b_{1} }  
$$

### Ejemplo
Consideremos el estado de Bell $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$:

$\rho_{AB} = |\Phi^+\rangle\langle\Phi^+| = \frac{1}{2}(|00\rangle\langle00| + |00\rangle\langle11| + |11\rangle\langle00| + |11\rangle\langle11|)$

Para desarrollar la traza parcial sobre el sistema $B$ y llegar a que $\rho_A = \frac{1}{2}I$, sigamos paso a paso:

$$
\rho_{AB} = \frac{1}{2} \left( |0_A 0_B \rangle \langle 0_A 0_B| + |0_A 0_B \rangle \langle 1_A 1_B| + |1_A 1_B \rangle \langle 0_A 0_B| + |1_A 1_B \rangle \langle 1_A 1_B| \right)
$$

La traza parcial sobre $B$ implica que tomamos la traza sobre los estados de $B$ en cada término. Recordemos que la traza de un operador $\ket{b_1} \bra{b_2}$ es $\delta_{b_1, b_2}$, es decir, solo sobrevive cuando $b_1 = b_2$.
   $$
   \text{Tr}_B\left( |0_A 0_B\rangle \langle 0_A 0_B| \right) = |0_A\rangle \langle 0_A| \cdot \text{Tr}\left( |0_B\rangle \langle 0_B| \right) = |0_A\rangle \langle 0_A| \cdot 1 = |0_A\rangle \langle 0_A|
$$
   $$
   \text{Tr}_B\left( |0_A 0_B\rangle \langle 1_A 1_B| \right) = |0_A\rangle \langle 1_A| \cdot \text{Tr}\left( |0_B\rangle \langle 1_B| \right) = |0_A\rangle \langle 1_A| \cdot 0 = 0
$$

   $$
   \text{Tr}_B\left( |1_A 1_B\rangle \langle 0_A 0_B| \right) = |1_A\rangle \langle 0_A| \cdot \text{Tr}\left( |1_B\rangle \langle 0_B| \right) = |1_A\rangle \langle 0_A| \cdot 0 = 0
$$

$$
   \text{Tr}_B\left( |1_A 1_B\rangle \langle 1_A 1_B| \right) = |1_A\rangle \langle 1_A| \cdot \text{Tr}\left( |1_B\rangle \langle 1_B| \right) = |1_A\rangle \langle 1_A| \cdot 1 = |1_A\rangle \langle 1_A|
$$

Por lo que:
$$
\rho_A = \frac{1}{2} \left( |0_A\rangle \langle 0_A| + |1_A\rangle \langle 1_A| \right)
$$

La expresión $|0_A\rangle \langle 0_A| + |1_A\rangle \langle 1_A|$ es simplemente la identidad en el espacio de Hilbert del sistema $A$:

$$
|0_A\rangle \langle 0_A| + |1_A\rangle \langle 1_A| = I
$$

$$
\rho_A = \frac{1}{2} I
$$

$$
\rho_A = \text{Tr}_B(\rho_{AB}) = \frac{1}{2}(|0\rangle\langle0| + |1\rangle\langle1|) = \frac{1}{2}I
$$

Este resultado muestra que el subsistema $A$, cuando se considera aisladamente, está en un estado maximalmente mezclado.
Pues el hecho de que $\rho_A$​ sea proporcional a la matriz identidad $I$ indica que $A$ tiene una **probabilidad uniforme** de estar en los estados base $\ket{0}$ o $\ket{1}$. Esto significa que no tenemos ninguna información adicional sobre el estado de $A$; todo lo que sabemos es que está en una superposición igual de los dos estados posibles. Esta es la máxima incertidumbre que podemos tener sobre el estado, lo cual caracteriza a un estado **maximalmente mezclado**.



### Operaciones cuánticas generales
Cuando los sistemas cuánticos interactúan con el entorno, a menudo es necesario utilizar estados mezclados para describir su estado. Sin embargo, existe un marco más general para describir operaciones cuánticas que involucran sistemas externos: los superoperadores.

Un superoperador, también conocido como operación cuántica general, es una transformación que actúa sobre operadores de densidad. Estos superoperadores describen cómo evoluciona un sistema cuántico cuando interactúa con un entorno externo de una manera que no necesariamente preserva la pureza del estado.

1. Toman como entrada un sistema descrito por un operador de densidad $\rho_{in}$.
2. El sistema de entrada corresponde a un espacio de Hilbert de dimensión $N$.
3. Pueden agregar un sistema auxiliar (ancilla) de tamaño arbitrario.
4. Realizan una operación unitaria $U$ en el sistema conjunto.
5. Finalmente, descartan algún subsistema.


- Dado un operador de densidad de entrada $\rho_{in}$, un superoperador $\mathcal{E}$ produce un nuevo operador de densidad $\rho_{out}$:

	$\rho_{out} = \mathcal{E}(\rho_{in})$


## Ejemplo: Desfase

Consideremos un ejemplo sencillo de una operación cuántica general: el desfase de un qubit.

Comenzamos con un qubit en el estado puro:
$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$

El operador de densidad inicial es:
$$\rho_{in} = |\psi\rangle\langle\psi| = \begin{pmatrix} 
|\alpha|^2 & \alpha\beta^* \\
\alpha^*\beta & |\beta|^2
\end{pmatrix}$$

Añadimos un qubit auxiliar (ancilla) en el estado $|0\rangle$. El estado conjunto es:
$|\psi_{total}\rangle = (\alpha|0\rangle + \beta|1\rangle) \otimes |0\rangle = \alpha|00\rangle + \beta|10\rangle$

Aplicamos una operación unitaria que realiza un CNOT controlado por el qubit original:
$U|00\rangle = |00\rangle$
$U|10\rangle = |11\rangle$

Después de esta operación:
$U|\psi_{total}\rangle = \alpha|00\rangle + \beta|11\rangle$

Ahora "descartamos" el qubit auxiliar realizando una traza parcial:

$\rho_{out} = Tr_{ancilla}(U|\psi_{total}\rangle\langle\psi_{total}|U^\dagger)$

$$= \begin{pmatrix} 
|\alpha|^2 & 0 \\
0 & |\beta|^2
\end{pmatrix}$$

Vemos que el estado final $\rho_{out}$ ha perdido sus términos de coherencia (los términos fuera de la diagonal). Esto representa un proceso de desfase.
