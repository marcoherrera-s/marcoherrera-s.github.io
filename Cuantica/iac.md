@def title = "Introducción a los algoritmos cuánticos"
@def tags = ["syntax", "code", "math"]

# Algoritmos cuánticos. Deutsch.

La computación cuántica se puede conceptualizar como una generalización de la computación probabilística. En el marco de la computación probabilística, se emplean valores aleatorios que siguen distribuciones de probabilidad, mientras que la computación cuántica expande estas capacidades al permitir la superposición de estados y la interferencia cuántica, aprovechando las propiedades fundamentales de la mecánica cuántica. Esto abre la posibilidad de que los algoritmos cuánticos resuelvan problemas computacionales específicos de manera exponencialmente más eficiente que cualquier algoritmo probabilístico clásico conocido.

### El algoritmo de Deutsch
El **algoritmo de Deutsch** constituye un ejemplo prototípico de cómo la computación cuántica puede superar a su contraparte clásica. Este algoritmo se fundamenta en la **transformada de Fourier cuántica** y demuestra conceptos fundamentales, tales como el **paralelismo cuántico** y la **interferencia cuántica**.

---
### Paralelismo cuántico e interferencia cuántica
El **paralelismo cuántico** se refiere a la capacidad de un sistema cuántico de evaluar simultáneamente múltiples estados gracias a la **superposición**. En el contexto del algoritmo de Deutsch, podemos preparar el qubit de entrada en una superposición de los dos posibles valores (0 y 1). Esto significa que, al aplicar la caja mágica cuántica, evaluamos la función $f(x)$ tanto para $x=0$ como para $x=1$ de manera simultánea, sin necesidad de hacer consultas separadas como en un algoritmo clásico. Este es el aspecto del paralelismo cuántico: la capacidad de explorar varias posibilidades en paralelo, lo cual incrementa drásticamente la eficiencia de ciertos cálculos.

La **interferencia cuántica** es otro concepto clave y está relacionado con cómo se combinan las amplitudes de probabilidad de los estados cuánticos. En el algoritmo de Deutsch, una vez que la caja mágica ha evaluado simultáneamente la función para ambos valores de entrada, el siguiente paso consiste en manipular los qubits de tal manera que los resultados "interfieran" entre sí. Dependiendo de la naturaleza de la función (constante o balanceada), las amplitudes de probabilidad pueden sumarse constructivamente o cancelarse entre sí. Este proceso de interferencia permite que la información sobre la naturaleza de la función se manifieste en el resultado final de una sola medida.

---

Consideremos una "caja mágica" que recibe un bit de entrada (0 o 1) y devuelve un bit de salida (0 o 1) de acuerdo con una función desconocida $f(x)$. Sabemos que dicha función pertenece a una de dos categorías:

- **Constante**: siempre devuelve el mismo valor (0 o 1), independientemente de la entrada.
- **Balanceada**: devuelve 0 para una entrada y 1 para la otra. Por ejemplo, si $f(0) = 0$, entonces $f(1) = 1$, o viceversa.

El objetivo es **determinar si la función es constante o balanceada**, con la restricción de que solo podemos evaluar la caja una única vez.

En una computadora clásica, sería necesario evaluar la función dos veces:
1. Evaluar $f(0)$ y observar el resultado.
2. Evaluar $f(1)$ y observar el resultado.

En cambio, con un algoritmo cuántico podemos evaluar simultáneamente ambos valores gracias al uso de la **superposición** de los estados cuánticos, lo que nos permite resolver el problema con una única consulta.

### Detallitos
Para comprender cómo opera el algoritmo, supongamos que contamos con un **circuito reversible** que computa una función de un bit desconocida $f: \{0,1\} \to \{0,1\}$. En este contexto, el "circuito" representa nuestra caja mágica. La reversibilidad es esencial en computación cuántica, dado que los circuitos cuánticos deben ser unitarios, lo cual implica que son **reversibles**.

Un circuito reversible permite calcular el valor de $f(x)$ para entradas $x$ dadas, pero no proporciona información directa sobre el funcionamiento interno de la función $f$. El objetivo es determinar el valor de $f(0) \oplus f(1)$, donde el símbolo $\oplus$ denota la **suma módulo 2** (tambén conocida como XOR). Esta operación retorna 0 si ambos valores son iguales y 1 si son diferentes.

- Si $f(0) \oplus f(1) = 0$, podemos inferir que $f(0) = f(1)$, lo cual implica que la función es **constante** (aunque no sepamos si es 0 o 1).
- Si $f(0) \oplus f(1) = 1$, sabemos que $f(0) \neq f(1)$, lo cual implica que la función es **balanceada**.


### Problema de Deutsch
**Input**: Una caja mágica que computa una función desconocida $f: \{0,1\} \to \{0,1\}$.

**Problema**: Determinar el valor de $f(0) \oplus f(1)$ efectuando consultas a $f$.

En la computación cuántica, el circuito reversible que computa $f$ puede implementarse como un **circuito cuántico**, sustituyendo todas las compuertas clásicas reversibles por sus correspondientes **compuertas cuánticas unitarias**. Este circuito cuántico se puede describir mediante un operador unitario $U_f$, que actúa sobre dos qubits de la siguiente manera:

$$
U_{f}: \ket{x} \ket{y} \to \ket{x}\ket{y \oplus f(x)}
$$

Desglosemos esta expresión:
- $\ket{x}$ representa el primer qubit, que contiene el valor de entrada $x$ (0 o 1).
- $\ket{y}$ representa el segundo qubit, que inicialmente contiene 0.
- La operación $U_f$ transforma estos dos qubits en $\ket{x}$ y $\ket{y \oplus f(x)}$. Es decir, el valor del segundo qubit se modifica en función del valor de $f(x)$, aplicando la operación XOR (suma módulo 2).

Podemos observar que definimos esa compuerta de modo que si el segundo qubit está en el estado $\ket{y}=\ket{0}$, y hacemos que $\ket{x}=\ket{0}$ en el primer qubit, entonces para el segundo qubit de salida tendríamos $\ket{0 \oplus f(0)}=\ket{f(0)}$. Mientras que si hacemos que $\ket{x}=\ket{1}$, tendríamos que para el segundo qubit de salida $\ket{0\oplus f(1)}=\ket{f(1)}$.

Entonces podemos pesar en $\ket{x}=0$ como una versión cuántica del bit 0 clásico, y a $\ket{x}=\ket{1}$ como al bit 1 clásico. 

Aunque claro, el estado qubit de entrada puede ser alguna superposición de $\ket{0}$ y $\ket{1}$.

Por ejemplo, sigamos en el caso en que $\ket{y}=\ket{0}$. Pero ahora tenemos el siguiente qubit de entrada:
$$
\ket{x}= \frac{1}{\sqrt{ 2 }} \ket{0} + \frac{1}{\sqrt{ 2 }}\ket{1} 
$$
Por lo que nuestra entrada quedaría como
$$
\ket{x}\ket{y}=  (\frac{1}{\sqrt{ 2 }} \ket{0} + \frac{1}{\sqrt{ 2 }}\ket{1} )\ket{0}
$$
$$
=\frac{1}{\sqrt{ 2 }} \ket{0}\ket{0}  + \frac{1}{\sqrt{ 2 }}\ket{1}\ket{0}  
$$
Entonces, la salida de $U_{f}$ será:

$$
\begin{aligned} U_f \left( \frac{1}{\sqrt{2}} \ket{0}\ket{0} + \frac{1}{\sqrt{2}} \ket{1}\ket{0} \right) &= \frac{1}{\sqrt{2}} U_f \ket{0}\ket{0} + \frac{1}{\sqrt{2}} U_f \ket{1}\ket{0} \\ &= \frac{1}{\sqrt{2}} \ket{0} \ket{0 \oplus f(0)} + \frac{1}{\sqrt{2}} \ket{1} \ket{0 \oplus f(1)} \\ &= \frac{1}{\sqrt{2}} \ket{0} \ket{f(0)} + \frac{1}{\sqrt{2}} \ket{1} \ket{f(1)}. \end{aligned}
$$

Este resultado indica que hemos **calculado ambos valores** de $f(0)$ y $f(1)$ en superposición, lo cual es una característica única de los algoritmos cuánticos. Sin embargo, cuando realizamos una **medición** del estado del sistema en la base computacional, solo obtendremos uno de los valores ($f(0)$ o $f(1)$) con probabilidad del 50%, lo que parece desperdiciar parte de la información obtenida.

Pero, aunque no podemos medir directamente ambos valores simultáneamente, no estamos interesados en conocer $f(0)$ y $f(1)$ individualmente. Lo que buscamos es el valor de **$f(0) \oplus f(1)$**. Para resolver esto, el **algoritmo de Deutsch** utiliza la interferencia cuántica para extraer esta información global sobre la función sin necesidad de conocer $f(0)$ y $f(1)$ por separado.

El circuito del algoritmo es el siguiente:

![algoritmo](/assets/cuantica/deutsch.png)

Por lo que vemos que empezamos en el siguiente estado:
$$
\ket{\psi_{0}}=\ket{0}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)  
$$
Después aplicamos Hadamard al primer qubit y entonces tenemos
$$
\begin{aligned}
\ket{\psi_{1}}&=\frac{1}{\sqrt{2}}\left( |0\rangle + |1\rangle \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&= \frac{1}{\sqrt{ 2 }}\ket{0} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)+\frac{1}{\sqrt{ 2 }}\ket{1}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) 
\end{aligned} 
$$
Ahora tenemos que aplicar $U_{f}$. Recordamos que 
$$
U_{f}:\ket{x} \ket{y} \rightarrow \ket{x} \ket{y \oplus f(x)}
$$
Por lo que observamos que tendríamos que aplicar
$$
U_{f}:\ket{0} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
$$
$$
U_{f}:\ket{1}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) 
$$
---
Para eso veamos qué es lo que pasa con un estado arbitrario $\ket{x}$:
Para empezar tenemos que
$$
\ket{x}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)=\frac{1}{\sqrt{2}}\left( \ket{x} |0\rangle - \ket{x} |1\rangle \right)
$$
Entonces:
$$
U_{f}:\left( \frac{\ket{x} \ket{0} -\ket{x} \ket{1} }{\sqrt{ 2 }} \right) \rightarrow \left( \frac{U_{f}\ket{x} \ket{0} -U_{f}\ket{x} \ket{1} }{\sqrt{ 2 }} \right) 
$$
$$
=\left( \frac{\ket{x} \ket{0 \oplus f(x)} - \ket{x} \ket{1\oplus f(x)} }{\sqrt{ 2 }} \right)
$$
$$
=\ket{x}\left( \frac{\ket{0 \oplus f(x)}-\ket{1 \oplus f(x)}  }{\sqrt{ 2 }} \right) 
$$
Entonces, ahora hacemos un simple recordatorio, de que 
$$
\begin{aligned}
0 \oplus 0 &= 0 \\
0 \oplus 1 &= 1 \\
1 \oplus 0 &= 1 \\
1 \oplus 1 &= 0 
\end{aligned}
$$
Es fácil pensarlo en que si son iguales es 0, si no, es 1. 
Por lo que para la última expresión que obtuvimos consideremos los casos en que $f(x)=0$ y $f(x)=1$.
- Si $f(x)=0$: 
$$
\begin{aligned}
\frac{\ket{0 \oplus f(x)}-\ket{1 \oplus f(x)}  }{\sqrt{ 2 }} &= \frac{\ket{0 \oplus 0}-\ket{1 \oplus 0}  }{\sqrt{ 2 }} \\
&= \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }}
\end{aligned}
$$
- Si $f(x)=1$: 
$$
\begin{aligned}
\frac{\ket{0 \oplus f(x)}-\ket{1 \oplus f(x)}  }{\sqrt{ 2 }} &= \frac{\ket{0 \oplus 1}-\ket{1 \oplus 1}  }{\sqrt{ 2 }} \\
&= -\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
\end{aligned}
$$
Vemos que nuestras dos posibilidades difieren únicamente de una factor de $(-1)$ que depende del valor de $f(x)$.
$$
\therefore \frac{\ket{0\oplus f(x)}-\ket{1 \oplus f(x)}  }{\sqrt{ 2 }} =(-1)^{f(x)}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
$$
Por lo tanto:
$$
\ket{x}\left( \frac{\ket{0 \oplus f(x)}-\ket{1 \oplus f(x)}  }{\sqrt{ 2 }} \right) =\ket{x}(-1)^{f(x)}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) 
$$
Finalmente, sabríamos que:
$$
U_{f}: \ket{x}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \rightarrow (-1)^{f(x)}\ket{x}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \tag{$\alpha$}
$$
---

Regresando a nuestro problema, teníamos que:
$$
\ket{\psi_{1}} = \frac{1}{\sqrt{ 2 }}\ket{0} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)+\frac{1}{\sqrt{ 2 }}\ket{1}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)  
$$

A este estado le tenemos que aplicar $U_{f}$, entonces usando $(\alpha)$:
$$
\begin{aligned}
\ket{\psi_{2}} &= \frac{1}{\sqrt{ 2 }}U_{f}\ket{0} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)+\frac{1}{\sqrt{ 2 }}U_{f}\ket{1}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&= \frac{1}{\sqrt{ 2 }}(-1)^{f(0)}\ket{0} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)+\frac{1}{\sqrt{ 2 }}(-1)^{f(1)}\ket{1} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&=\frac{(-1)^{f(0)}}{\sqrt{ 2 }}\ket{0} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)+\frac{(-1)^{f(1)}}{\sqrt{ 2 }}\ket{1} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)   \\
&=\left( \frac{(-1)^{f(0)}\ket{0} +(-1)^{f(1)}\ket{1}}{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&= (-1)^{f(0)}\left( \frac{\ket{0}+(-1)^{f(0)\oplus f(1)}\ket{1} }{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
\end{aligned}
$$
Esto último porque:
$$
(-1)^{f(0)}(-1)^{f(1)}=(-1)^{f(0)\oplus f(1)}
$$
entonces:
$$
(-1)^{f(0)}(-1)^{f(0)}(-1)^{f(1)}=(-1)^{f(0)\oplus f(0)}(-1)^{f(1)}=(-1)^{0}(-1)^{f(1)}=(-1)^{f(1)}
$$
Por lo que ahora, si $f$ es constante entonces: $(f(0)\oplus f(1)=0)$
El último resultado nos dice que:
$$
\ket{\psi_{2}}= (-1)^{f(0)}\left( \frac{\ket{0}+(-1)^{f(0)\oplus f(1)}\ket{1} }{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
$$
Pero si suponemos que $f$ es balanceada nos queda
$$
\ket{\psi_{2}}=(-1)^{f(0)}\left( \frac{\ket{0}+\ket{1}}{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
$$
Observando el diagrama, el siguiente paso sería aplicar Hadamard al primer qubit
$$
\begin{aligned}
\ket{\psi_{3}} &=(-1)^{f(0)}\left( \frac{H\ket{0}+H\ket{1}}{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&=(-1)^{f(0)} \frac{1}{\sqrt{ 2 }}\left( \frac{\ket{0}+\ket{1}}{\sqrt{ 2 }}+ \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&= (-1)^{f(0)} \frac{1}{\sqrt{ 2 }}\left( \frac{2\ket{0} }{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&=(-1)^{f(0)}\ket{0}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) 
\end{aligned}
$$

Ahora, si $f$ es balanceada entonces tendríamos que $f(0)\oplus f(1)=1$, por lo que análogamente al caso anterior llegaríamos a que:
$$
\begin{aligned}
\ket{\psi_{3}} &=(-1)^{f(0)}\left( \frac{H\ket{0}-H\ket{1}}{\sqrt{ 2 }} \right)\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&=(-1)^{f(0)}\ket{1}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\ 
\end{aligned}
$$
En conclusión, podemos notar que una medida en el primer bit al final del circuito nos determina el valor de $f(0)\oplus f(1)$ y por lo tanto nos dice si la función es balanceada o constante. Ya que si es constante mediríamos $0$ y si es balanceada mediríamos $1$.
