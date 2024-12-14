@def title = "Cómputo reversible"
@def tags = ["syntax", "code", "math"]

# Cómputo Reversible

La teoría de la computación cuántica está relacionada a una teoría del cómputo reversible. Se dice que un cómputo es reversible si siempre es posible recuperar de forma única la entrada, dada una salida. Esto implica que la función de cómputo es biyectiva, es decir, cada entrada única produce una salida única y viceversa.

La **compuerta NOT** es reversible porque si nos dicen que la salida es 0, sabemos que la entrada fue 1 y viceversa. Esto no pasa con la **compuerta AND** porque si la salida es 0, sabemos que las entradas pudieron ser 00, 01 o 10. En este caso, no podemos determinar de manera única la entrada a partir de la salida, lo que hace que la compuerta AND sea irreversible en su forma estándar.

Sin embargo, **cualquier cómputo puede ser transformado en un cómputo reversible**. Esto se logra generalmente agregando bits adicionales, conocidos como bits ancilla, y extendiendo las funciones lógicas para que sean reversibles. Cada compuerta en una familia finita de compuertas puede hacerse reversible agregando los necesarios cables de entrada y de salida.

Regresando a la **compuerta AND**, esta se puede convertir en reversible agregando un cable de entrada y dos de salida. De hecho, esta **AND** reversible es la compuerta **TOFFOLI**, que de hecho, es una generalización de la compuerta **CNOT**. Donde ahora tenemos dos bits de control, ahora sí que controlando si la compuerta **NOT** se aplica al tercer bit. 

Entonces, la compuerta Toffoli realiza la operación NOT en el qubit de objetivo solo cuando ambos qubits de control están en el estado $|1\rangle$. Esta compuerta es universal para la computación reversible clásica, lo que significa que cualquier función lógica reversible puede ser implementada utilizando solo compuertas Toffoli.

La tabla de verdad de la compuerta Toffoli es la siguiente:

<!-- | $c_1$ (Control 1) | $c_2$ (Control 2) | $t$ (Objetivo) | Salida $c_1$ | Salida $c_2$ | Salida $t' = t \oplus (c_1 \land c_2)$ |
| ----------------- | ----------------- | -------------- | ------------ | ------------ | -------------------------------------- |
| 0                 | 0                 | 0              | 0            | 0            | 0                                      |
| 0                 | 0                 | 1              | 0            | 0            | 1                                      |
| 0                 | 1                 | 0              | 0            | 1            | 0                                      |
| 0                 | 1                 | 1              | 0            | 1            | 1                                      |
| 1                 | 0                 | 0              | 1            | 0            | 0                                      |
| 1                 | 0                 | 1              | 1            | 0            | 1                                      |
| 1                 | 1                 | 0              | 1            | 1            | 1                                      |
| 1                 | 1                 | 1              | 1            | 1            | 0                                      |
 -->

~~~
<table style="width: 80%; border: 1px solid #888; border-collapse: collapse; margin: 20px auto; color: #333; background-color: #f9f9f9;">
  <thead>
    <tr style="background-color: #ddd;">
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">c1 (Control 1)</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">c2 (Control 2)</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">t (Objetivo)</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">Salida c1</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">Salida c2</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">Salida t' = t ⊕ (c1 ∧ c2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
    </tr>
  </tbody>
</table>

~~~

- Si ambos qubits de control $c_1$ y $c_2$ son $1$, la compuerta aplica un NOT al qubit de objetivo $t$, lo cual es equivalente a hacer $t' = t \oplus 1$.
- Si al menos uno de los qubits de control es $0$, el qubit de objetivo $t$ no cambia.
En forma matricial, la podemos ver como:
$$
\text{Toffoli} = 
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 
\end{bmatrix}
$$

### Relación con AND

Para ver cómo es que podemos obtener una AND reversible de esta compuerta, basta notar que los valores de $c_1$ y $c_2$ nunca cambian, por lo que los podemos identificar desde la salida.

Además, tenemos que la salida de $t$ es tal que $t' = t \oplus (c_1 \land c_2)$, y observamos que si $t=0$, entonces $t' = c_1 \land c_2$. Que es simplemente la compuerta AND.

Por lo que tenemos nuestra AND reversible para $t=0$:

~~~
<table style="width: 70%; border: 1px solid #888; border-collapse: collapse; margin: 20px auto; color: #333; background-color: #f9f9f9;">
  <thead>
    <tr style="background-color: #ddd;">
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">c1 (Control 1)</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">c2 (Control 2)</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">t (Objetivo)</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">Salida c1</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">Salida c2</th>
      <th style="border: 1px solid #888; padding: 8px; text-align: center;">Salida t' = t ⊕ (c1 ∧ c2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #e7e7e7;">0</td>
    </tr>
    <tr>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">0</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
      <td style="border: 1px solid #888; padding: 8px; text-align: center; background-color: #f4f4f4;">1</td>
    </tr>
  </tbody>
</table>

~~~

Ahora, volviendo a lo que importa.

Si reemplazamos todos los componentes irreversibles con su contraparte reversible, obtenemos una versión reversible del circuito. Esto es esencial en computación cuántica, ya que las operaciones cuánticas deben ser unitarias, y por lo tanto, reversibles.

Por lo tanto, si empezamos con la salida y corremos el circuito al revés, podemos obtener la entrada original. Esta propiedad será explotada en algoritmos cuánticos.

Aquí lo importante es que, en principio, siempre podemos encontrar algún circuito reversible para cualquier cómputo dado. 

Además, la reversibilidad es crucial para preservar las propiedades de superposición y entrelazamiento, que son fundamentales para el poder computacional de las computadoras cuánticas.

En la computación clásica, la reversibilidad también está relacionada con consideraciones termodinámicas. Según el **principio de Landauer**, el borrado de un bit de información implica una disipación mínima de energía, lo que sugiere que las computaciones reversibles pueden ser más eficientes energéticamente.
