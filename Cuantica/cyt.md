@def title = "Superdensa y Teleportación"
@def tags = ["syntax", "code", "math"]

# Codificación superdensa y teleportación cuántica

Existen protocolos específicos que aprovechan el entrelazamiento. Dos de los más fundamentales  son **codificación superdensa** y la mal llamada **teleportación cuántica**. Estos protocolos no tienen equivalentes clásicos que puedan replicar sus funcionalidades de manera exacta.

### Estado de Bell
Existen cuatro estados de Bell, que son estados maximamente entrelazados de dos qubits. El estado de Bell utilizado en estos protocolos es:
$$
\ket{\beta_{00}} = \frac{1}{\sqrt{2}} (\ket{00} + \ket{11})
$$

- Un **canal de comunicación cuántico** se refiere a una línea de comunicación física, como un cable de fibra óptica. La eficacia de estos protocolos depende de la calidad de este canal y de la preservación del entrelazamiento entre los qubits durante la transmisión.



## Requisitos Iniciales para los Protocolos

Tanto en **codificación superdensa** como en **teleportación cuántica**, Alice y Bob (los dos partes que desean comunicarse) deben compartir inicialmente un par de qubits entrelazados en el estado de Bell $\ket{\beta_{00}}$. Este estado debe ser preparado previamente en un laboratorio donde los qubits pueden interactuar y entrelazarse sin interferencias externas. Una vez creado, cada parte retiene uno de los qubits, y mientras no interactúen con el entorno, el estado conjunto permanecerá entrelazado.

Tenía duda de cómo se hacía esto experimentalmente, y [esta](https://en.wikipedia.org/wiki/Spontaneous_parametric_down-conversion) es una de las formas más comunes por lo que veo.

El **entrelazamiento** actúa como un recurso esencial que permite a Alice y Bob llevar a cabo los protocolos cuánticos mencionados.



## Codificación Superdensa

Este es un protocolo que permite a Alice enviar dos bits clásicos de información a Bob utilizando únicamente un qubit, siempre y cuando compartan un par de qubits entrelazados previamente.

1. **Estado Inicial Compartido:**
   Alice y Bob comparten el estado de Bell $\ket{\beta_{00}} = \frac{1}{\sqrt{2}} (\ket{00} + \ket{11})$. Alice posee el primer qubit y Bob el segundo.

2. **Codificación por Parte de Alice:**
   Alice desea enviar dos bits clásicos a Bob, digamos $m_1m_2$. Para ello, aplica una de las cuatro operaciones de Pauli sobre su qubit según los bits que desea enviar:
$$ I \equiv \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \quad X \equiv \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \quad Y \equiv \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix} \quad Z \equiv \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}. $$

Para enviar 00: 
$$
I \otimes I : \frac{1}{\sqrt{2}} ( \ket{00} + \ket{11} ) \rightarrow \frac{1}{\sqrt{2}} ( \ket{00} + \ket{11} ) = \ket{\beta_{00}}
$$

Para enviar 01: 
$$
X \otimes I : \frac{1}{\sqrt{2}} ( \ket{00} + \ket{11} ) \rightarrow \frac{1}{\sqrt{2}} ( \ket{01} + \ket{10} ) = \ket{\beta_{01}}
$$

Para enviar 10: 
$$
Z \otimes I : \frac{1}{\sqrt{2}} ( \ket{00} + \ket{11} ) \rightarrow \frac{1}{\sqrt{2}} ( \ket{00} - \ket{11} ) = \ket{\beta_{10}}
$$

Para enviar 11: 
$$
Z \cdot X \otimes I : \frac{1}{\sqrt{2}} ( \ket{00} + \ket{11} ) \rightarrow \frac{1}{\sqrt{2}} ( \ket{01} - \ket{10} ) = \ket{\beta_{11}}
$$


3. **Transmisión del Qubit:**
   Después de aplicar la operación correspondiente, Alice envía su qubit a Bob a través del canal de comunicación cuántico.

4. **Decodificación por Parte de Bob:**
   Bob ahora posee ambos qubits del estado de Bell modificado. Para recuperar los dos bits clásicos enviados por Alice, realiza una **medición en la base de Bell**. Esto implica proyectar el estado conjunto de los qubits en los cuatro posibles estados de Bell:
   La proyección resultante revela directamente los dos bits clásicos que Alice quiso enviar.

Me preguntaba un poco, cuál era el sentido de todo esto. Me parecía que era mucho rollo para enviar 2 bits clásicos. Pero podemos destacar dos puntos:

- Como esto permite transmitir dos bits clásicos utilizando solo un qubit, entonces se duplica la capacidad de transmisión en comparación con los métodos clásicos.
- El uso del entrelazamiento asegura que cualquier intento de interceptar o medir el qubit alterará el estado entrelazado, detectando potenciales ataques.



### Teleportación Cuántica

La **teleportación cuántica** es un protocolo fundamental porque permite transferir el estado de un qubit de un lugar a otro sin mover físicamente el qubit mismo. Este proceso utiliza recursos cuánticos como clásicos.

Consideremos el siguiente escenario:

- **Alice** desea comunicar el estado de su qubit a **Bob**.
- Alice dispone únicamente de un canal clásico para enviar información a Bob.
- A primera vista, podría parecer que para enviar el estado exacto de su qubit, Alice tendría que:
  - Enviar el qubit físico tal cual.
  - O bien, transmitir las dos amplitudes complejas del estado del qubit con precisión infinita, lo cual es imposible en la práctica.

Para que quede un poco más claro, lo anterior no se puede porque:

1. El teorema de no-clonación establece que no es posible crear una copia exacta de un estado cuántico arbitrario. Si Alice quisiera enviar el estado exacto de su qubit a Bob a través de un canal clásico, implicaría de alguna forma "copiar" la información cuántica del qubit, lo cual viola este principio. Así que no puede simplemente copiar el estado de su qubit para transmitirlo. Entraré un poquito más en este teorema en la siguiente entrada (espero).

2. Como los qubits se encuentran en una superposición de estados, y la única manera de obtener información sobre el estado de un qubit es realizando una medición, esto colapsaría su estado a una de las dos posibles bases (por ejemplo, 0 o 1), perdiéndose la superposición original. Esto significa que Alice no puede medir el qubit para obtener sus amplitudes complejas con exactitud y luego enviar esta información a Bob, ya que al medir el qubit destruiría su estado original.

Es por eso que la teleportación cuántica permite a Alice transferir exactamente el estado de su qubit a Bob, **solamente** mediante el envío de dos bits clásicos. 

1.  Alice y Bob deben compartir un par de qubits entrelazados, generalmente en uno de los estados de Bell:

   $$
   |\beta_{00}\rangle = \frac{1}{\sqrt{2}} (|00\rangle + |11\rangle)
   $$

2. Alice necesita enviar dos bits clásicos a Bob después de realizar una medición.

##### Paso a Paso del Protocolo

1. **Preparación del Estado Inicial**:
   
   - Supongamos que Alice desea teleportar el estado:  
$$
|\psi\rangle = \alpha_{0}|0\rangle + \alpha_{1}|1\rangle
$$
   - Alice y Bob comparten un par de qubits en el estado de Bell $|\beta_{00}\rangle$.

   - El estado combinado de los tres qubits (el qubit de Alice y el par entrelazado) es el producto tensorial:

Por lo que partimos del estado inicial:
$$
|\psi\rangle |\beta_{00}\rangle =(\alpha|0\rangle + \beta|1\rangle) \otimes |\beta_{00}\rangle
$$
Sabemos que:
$$
(\alpha|0\rangle + \beta|1\rangle) \otimes \frac{|00\rangle + |11\rangle}{\sqrt{2}} = \frac{\alpha|0\rangle \otimes (|00\rangle + |11\rangle) + \beta|1\rangle \otimes (|00\rangle + |11\rangle)}{\sqrt{2}}
$$
Expandiendo:
$$
= \frac{1}{\sqrt{2}} \left( \alpha |0\rangle|00\rangle + \alpha |0\rangle|11\rangle + \beta |1\rangle|00\rangle + \beta |1\rangle|11\rangle \right)
$$
Agrupamos los productos:
$$
= \frac{1}{\sqrt{2}} \left( \alpha |000\rangle + \alpha |011\rangle + \beta |100\rangle + \beta |111\rangle \right)
$$

Para reescribir en términos de los estados de Bell, podemos observar que:
$$
|\beta_{00}\rangle + |\beta_{10}\rangle = \frac{2|00\rangle}{\sqrt{2}}
$$
Por lo tanto:
$$
|00\rangle = \frac{\sqrt{2}}{2} \left( |\beta_{00}\rangle + |\beta_{10}\rangle \right) = \frac{1}{\sqrt{2}} \left( |\beta_{00}\rangle + |\beta_{10}\rangle \right)
$$

De manera similar:
$$
|11\rangle = \frac{1}{\sqrt{2}} \left( |\beta_{00}\rangle - |\beta_{10}\rangle \right)
$$
$$
|01\rangle = \frac{1}{\sqrt{2}} \left( |\beta_{01}\rangle + |\beta_{11}\rangle \right)
$$
$$
|10\rangle = \frac{1}{\sqrt{2}} \left( |\beta_{01}\rangle - |\beta_{11}\rangle \right)
$$

Sustituyendo en la expansión inicial:
$$
= \frac{\alpha}{2} \left( |\beta_{00}\rangle + |\beta_{10}\rangle \right) |0\rangle + \frac{\alpha}{2} \left( |\beta_{01}\rangle + |\beta_{11}\rangle \right) |1\rangle + \frac{\beta}{2} \left( |\beta_{01}\rangle - |\beta_{11}\rangle \right) |0\rangle + \frac{\beta}{2} \left( |\beta_{00}\rangle - |\beta_{10}\rangle \right) |1\rangle
$$

Agrupando términos:
$$
= \frac{|\beta_{00}\rangle}{2} (\alpha|0\rangle + \beta|1\rangle) + \frac{|\beta_{10}\rangle}{2} (\alpha|0\rangle - \beta|1\rangle) + \frac{|\beta_{01}\rangle}{2} (\alpha|1\rangle + \beta|0\rangle) + \frac{|\beta_{11}\rangle}{2} (\alpha|1\rangle - \beta|0\rangle)
$$


Con esto llegamos a la expresión final:
$$
|\psi\rangle |\beta_{00}\rangle = \frac{1}{2} |\beta_{00}\rangle |\psi\rangle + \frac{1}{2} |\beta_{01}\rangle (X|\psi\rangle) + \frac{1}{2} |\beta_{10}\rangle (Z|\psi\rangle) + \frac{1}{2} |\beta_{11}\rangle (XZ|\psi\rangle)
$$

2. **Medición de Bell por Parte de Alice**:

   - Alice realiza una medición conjunta en la base de Bell sobre sus dos qubits (el qubit original y su parte del par entrelazado).

   - Esta medición colapsa el estado del sistema en uno de los cuatro posibles estados de Bell, cada uno con una probabilidad de $\frac{1}{4}$.

3. **Comunicación de los Resultados de la Medición**:

   - Los resultados de la medición de Alice son dos bits clásicos $(a, b)$ que indican cuál de los cuatro estados de Bell se obtuvo.

   - Alice envía estos dos bits clásicos a Bob a través del canal clásico.

4. **Corrección por Parte de Bob**:

   - Bob, al recibir los dos bits clásicos, determina qué operación debe aplicar a su qubit para recuperar el estado original $|\psi\rangle$.

   - Dependiendo de los bits $(a, b)$ recibidos, Bob aplica una de las siguientes operaciones:
$$ a, b \quad \text{Bob hace} $$ $$ 0,0 \quad I : \quad \alpha_0 |0\rangle + \alpha_1 |1\rangle \mapsto \alpha_0 |0\rangle + \alpha_1 |1\rangle = |\psi\rangle $$ $$ 0,1 \quad X : \quad \alpha_0 |1\rangle + \alpha_1 |0\rangle \mapsto \alpha_0 |0\rangle + \alpha_1 |1\rangle = |\psi\rangle $$ $$ 1,0 \quad Z : \quad \alpha_0 |0\rangle - \alpha_1 |1\rangle \mapsto \alpha_0 |0\rangle + \alpha_1 |1\rangle = |\psi\rangle $$ $$ 1,1 \quad Z \cdot X : \quad \alpha_0 |1\rangle - \alpha_1 |0\rangle \mapsto \alpha_0 |0\rangle + \alpha_1 |1\rangle = |\psi\rangle $$

5. **Final**:

   - Tras aplicar la operación correcta, Bob obtiene exactamente el estado $|\psi\rangle$.


