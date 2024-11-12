@def title = "Deutsch–Jozsa"
@def tags = ["syntax", "code", "math"]

# Deutsch–Jozsa

El algoritmo de Deutsch–Jozsa resuelve el problema que es una generalización del problema anterior. Ahora tenemos una función
$$
f:\left\{ 0,1 \right\} ^{n} \rightarrow \left\{ 0,1 \right\} 
$$
Aquí $\left\{ 0,1 \right\}^{n}$ es el conjunto de todos los posibles vectores binarios de longitud $n$. Nos interesa la misma pregunta, saber si nuestra función es balanceada o constante. 

Es decir, si $f(x)$ es lo mismo para toda $x$, o si $f(x)=0$ para la mitad de entradas y $f(x)=1$ para la otra mitad. 

Pensemos en el caso más simple, veamos qué pasa con el entero más pequeño que no sea 1. 
$$
f:\left\{ 0,1 \right\}^{2}\rightarrow \left\{ 0,1 \right\} 
$$
Nuestras posibles entradas son $\left\{ 00 \right\}$, $\left\{ 01 \right\}$, $\left\{ 10 \right\}$, $\left\{ 11 \right\}$.

Observamos que tenemos $2^{2}$ posibles entradas; el peor de los casos es que nuestras primeras dos entradas, supongamos, sin pérdida de generalidad, que $\left\{ 00 \right\}$ y $\left\{ 01 \right\}$, nos devuelven $0$. Aquí aún no podríamos decir con certeza que la función es constante porque podría ser que nuestra tercer entrada nos de $1$.
Entonces, en el peor de los caos tendríamos que hacer $\text{(numero de mitad de entradas + 1)}$ evaluaciones. 

De nuevo, tomando ventaja de la superposición cuántica y la interferencia, el algoritmo de Deutsch–Jozsa nos dice si $f$ es constante o balanceada haciendo **una** única pregunta/evaluación.

Análogamente tendríamos que definir la operación cuántica:
$$
U_{f}:\ket{\mathbf{x}}\ket{y} \rightarrow \ket{\mathbf{x}}\ket{y \oplus f(x)}    
$$
donde $\mathbf{x}$ ahora es una cadena de $n$-bits.

Ahora, donde antes teníamos que:
![algoritmo](/Cuantica/deutsch.png)

Ahora tendremos:
![dj](/Cuantica/dj.png)

Por lo tanto, empezamos en el estado
$$
\ket{\psi_{0}}=\ket{0} ^{\otimes n}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) 
$$
lo primero que tenemos que ver es qué pasa cuando hacemos $H^{\otimes n}\ket{0}^{\otimes n}$.
Recordamos que $H\ket{0}=\frac{\ket{0}+\ket{1}}{\sqrt{ 2 }}$, entonces, como ejemplo tendríamos:
$$
\begin{aligned}
H^{\otimes_{2}}\ket{0}^{\otimes_{2}} &= H\ket{0} H\ket{0} \\
&=\left( \frac{\ket{0}+\ket{1}}{\sqrt{ 2 }} \right)\otimes \left( \frac{\ket{0}+\ket{1}}{\sqrt{ 2 }} \right) \\
&= \frac{1}{2}(\ket{0}+\ket{1}  )\otimes(\ket{0}+\ket{1}  )   \\
&= \frac{1}{2}(\ket{00}+\ket{01}+\ket{10}+\ket{11}    )
\end{aligned}
$$
como podemos ver, son todas las posibles combinaciones de dos bits.

Si $n=3$ tendríamos que
$$
H\ket{0}H\ket{0}H\ket{0} = \frac{1}{\sqrt{ 2^{3} }}(\ket{0}+\ket{1}  )\otimes(\ket{0}+\ket{1}  )\otimes(\ket{0}+\ket{1}  )   
$$
Entonces, tendríamos algo así

$$
\begin{aligned}
H^{\otimes n}\ket{0}^{\otimes n} &= H\ket{0} \otimes \dots \otimes H\ket{0} \\
&= \frac{1}{\sqrt{ 2^{n} }} \sum_{\mathbf{x}\in \left\{ 0,1 \right\}^{n} } \ket{\mathbf{x}}      
\end{aligned}
$$
Por lo tanto, el siguiente estado al estado inicial sería
$$
\ket{\psi_{1}} = \frac{1}{\sqrt{ 2^{n} }}\sum_{\mathbf{x \in \left\{ 0,1 \right\}^{n} }} \ket{\mathbf{x}} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)
$$
y siguiendo con el algoritmo, tendríamos que

$$
\ket{\psi_{2}}= \frac{1}{\sqrt{ 2^{n} }}U_{f}\left( \sum_{\mathbf{x \in \left\{ 0,1 \right\}^{n} }} \ket{\mathbf{x}} \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \right) 
$$

---
En la entrada anterior se vio detenidamente que
$$
U_{f}:\ket{x}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \rightarrow (-1)^{f(x)}\ket{x}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) 
$$
---
Por lo anterior, tenemos entonces
$$
\ket{\psi_{2}} = \frac{1}{\sqrt{ 2^{n} }}\sum_{\mathbf{x \in \left\{ 0,1 \right\}^{n} }}(-1)^{f(\mathbf{x})}\ket{\mathbf{x}}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)  
$$
Ahora, tendríamos que aplicar $H^{\otimes n}\ket{\mathbf{x}}$ según nuestro circuito.
Primero veamos que para un estado base $\ket{x}$ tendríamos:
$$
\begin{aligned}
H\ket{x} &= \frac{1}{\sqrt{ 2 }}(\ket{0} + (-1)^{x}\ket{1} ) \\
&= \frac{1}{\sqrt{ 2 }}\sum_{z \in \left\{ 0,1 \right\} } (-1)^{xz}\ket{z}  
\end{aligned}
$$

Entonces, tendríamos que (aquí se pone fea la cosa):
$$
\begin{aligned}
H^{\otimes n}\ket{\mathbf{x}}&=H^{\otimes n}(\ket{x_{1}}\ket{x_{2}}\dots \ket{x_{n}}   )  \\
&= H\ket{x_{1}}H\ket{x_{2}}\dots H\ket{x_{n}} \\
&= \frac{1}{\sqrt{ 2 }}(\ket{0} + (-1)^{x_{1}}\ket{1} )\frac{1}{\sqrt{ 2 }}(\ket{0} + (-1)^{x_{2}}\ket{1} )\dots\frac{1}{\sqrt{ 2 }}(\ket{0} + (-1)^{x_{n}}\ket{1} ) \\
&=\frac{1}{\sqrt{ 2 }}\sum_{z_{1} \in \left\{ 0,1 \right\} } (-1)^{x_{1}z_{1}}\ket{z_{1}}  \frac{1}{\sqrt{ 2 }}\sum_{z_{2} \in \left\{ 0,1 \right\} } (-1)^{x_{2}z_{2}}\ket{z_{2}}\dots  \frac{1}{\sqrt{ 2 }}\sum_{z_{n} \in \left\{ 0,1 \right\} } (-1)^{x_{n}z_{n}}\ket{z_{n}}   \\
&=\frac{1}{\sqrt{ 2^{n} }}\sum_{z_{1}z_{2}\dots z_{n}\in \left\{ 0,1 \right\} ^{n}}(-1)^{x_{1}z_{1}+x_{2}z_{2}+\dots+x_{n}z_{n}}\ket{z_{1}} \ket{z_{2}} \dots \ket{z_{n}} \\
&= \frac{1}{\sqrt{ 2^{n} }}\sum_{\mathbf{z}\in \left\{ 0,1 \right\}^{n} }(-1)^{\mathbf{x}\cdot \mathbf{z}}\ket{\mathbf{z}}    
\end{aligned}
$$

Por lo tanto, ahora sí ya sabemos que nuestro siguiente estado sería:
$$
\begin{aligned}
\ket{\psi_{3}} &= \left( \frac{1}{\sqrt{ 2^{n} }}\sum_{\mathbf{x \in \left\{ 0,1 \right\}^{n} }}(-1)^{f(\mathbf{x})}\frac{1}{\sqrt{ 2^{n} }}\sum_{\mathbf{z}\in \left\{ 0,1 \right\}^{n} }(-1)^{\mathbf{x}\cdot \mathbf{z}}\ket{\mathbf{z}} \right) \left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right) \\
&= \frac{1}{2^{n}}\sum_{\mathbf{z}\in \left\{ 0, 1 \right\}^{n} }\left( \sum_{\mathbf{x \in \left\{ 0,1 \right\} ^{n}}}(-1)^{f(\mathbf{x})+\mathbf{x\cdot \mathbf{z}}} \right)\ket{\mathbf{z}}\left( \frac{\ket{0}-\ket{1}}{\sqrt{ 2 }} \right)    
\end{aligned}
$$


Ahora, nuestro objetivo es analizar la amplitud asociada a cada estado base $\ket{\mathbf{z}}$ y ver cómo depende de si $f$ es constante o balanceada.

### Analizando la suma interna

La amplitud asociada a cada $\ket{\mathbf{z}}$ viene dada por:
$$
A(\mathbf{z}) = \sum_{\mathbf{x} \in \{0,1\}^n} (-1)^{f(\mathbf{x}) + \mathbf{x} \cdot \mathbf{z}}
$$
Observamos que podemos separar el exponente:
$$
(-1)^{f(\mathbf{x}) + \mathbf{x} \cdot \mathbf{z}} = (-1)^{f(\mathbf{x})} \cdot (-1)^{\mathbf{x} \cdot \mathbf{z}}
$$
Por lo tanto, la amplitud es:
$$
A(\mathbf{z}) = \sum_{\mathbf{x}} (-1)^{f(\mathbf{x})} (-1)^{\mathbf{x} \cdot \mathbf{z}}
$$
### Si $f$ es constante

**Si $f(\mathbf{x}) = 0$ para todo $\mathbf{x}$:**

- Entonces, $(-1)^{f(\mathbf{x})} = (-1)^0 = 1$.
- La amplitud se convierte en:
$$
A(\mathbf{z}) = \sum_{\mathbf{x}} 1 \cdot (-1)^{\mathbf{x} \cdot \mathbf{z}} = \sum_{\mathbf{x}} (-1)^{\mathbf{x} \cdot \mathbf{z}}
$$
Sabemos que:

- Para $\mathbf{z} = \mathbf{0}$:
$$
\sum_{\mathbf{x}} (-1)^{\mathbf{x} \cdot \mathbf{0}} = \sum_{\mathbf{x}} 1 = 2^n
$$
- Para $\mathbf{z} \neq \mathbf{0}$:
$$
\sum_{\mathbf{x}} (-1)^{\mathbf{x} \cdot \mathbf{z}} = 0
$$
Por lo tanto, la amplitud es:
$$
A(\mathbf{z}) = \begin{cases}
2^n & \text{si } \mathbf{z} = \mathbf{0} \\
0 & \text{si } \mathbf{z} \neq \mathbf{0}
\end{cases}
$$
**Si $f(\mathbf{x}) = 1$ para todo $\mathbf{x}$:**

- Entonces, $(-1)^{f(\mathbf{x})} = (-1)^1 = -1$.
- La amplitud se convierte en:
$$
A(\mathbf{z}) = -\sum_{\mathbf{x}} (-1)^{\mathbf{x} \cdot \mathbf{z}}
$$
Siguiendo el mismo razonamiento:
$$
A(\mathbf{z}) = \begin{cases}
-2^n & \text{si } \mathbf{z} = \mathbf{0} \\
0 & \text{si } \mathbf{z} \neq \mathbf{0}
\end{cases}
$$


Entonces en ambos casos, la única amplitud no nula es para $\mathbf{z} = \mathbf{0}$. Por lo tanto, después de la medición, siempre observaremos el estado $\ket{\mathbf{0}}$ en los primeros $n$ qubits si $f$ es constante.

### Si $f$ es balanceada

Para una función balanceada, hay un número igual de entradas donde $f(\mathbf{x}) = 0$ y $f(\mathbf{x}) = 1$.

Dividimos la suma en dos partes:
$$
A(\mathbf{z}) = \sum_{\mathbf{x}: f(\mathbf{x})=0} (-1)^{0} (-1)^{\mathbf{x} \cdot \mathbf{z}} + \sum_{\mathbf{x}: f(\mathbf{x})=1} (-1)^{1} (-1)^{\mathbf{x} \cdot \mathbf{z}} = S_0 - S_1
$$
Donde:

- $S_0 = \sum_{\mathbf{x}: f(\mathbf{x})=0} (-1)^{\mathbf{x} \cdot \mathbf{z}}$
- $S_1 = \sum_{\mathbf{x}: f(\mathbf{x})=1} (-1)^{\mathbf{x} \cdot \mathbf{z}}$

Como $f$ es balanceada:

- El número de términos en $S_0$ y $S_1$ es $2^{n-1}$ cada uno.
- La suma total $S_0 + S_1 = \sum_{\mathbf{x}} (-1)^{\mathbf{x} \cdot \mathbf{z}}$.

Sabemos que:

- Para $\mathbf{z} = \mathbf{0}$:
$$
S_0 + S_1 = 2^{n} \implies S_0 = S_1 = 2^{n-1}
$$
Entonces, $A(\mathbf{0}) = S_0 - S_1 = 0$.

- Para $\mathbf{z} \neq \mathbf{0}$:
$$
S_0 + S_1 = 0 \implies S_0 = -S_1
$$
Entonces, $A(\mathbf{z}) = S_0 - S_1 = 2S_0$.

Sin embargo, dado que los valores de $(-1)^{\mathbf{x} \cdot \mathbf{z}}$ se distribuyen uniformemente entre $+1$ y $-1$, la suma $S_0$ será cero o muy cercana a cero (dependiendo de la función específica).

Por lo que las amplitudes $A(\mathbf{z})$ son cero para $\mathbf{z} = \mathbf{0}$, y para $\mathbf{z} \neq \mathbf{0}$ pueden ser diferentes de cero. Esto significa que, después de la medición, es altamente improbable (o imposible en el caso ideal) observar $\ket{\mathbf{0}}$ en los primeros $n$ qubits cuando $f$ es balanceada.

### Interpretación de la medición

Después de la medición:

- **Si obtenemos $\mathbf{z} = \mathbf{0}$ en los primeros $n$ qubits**, concluimos que $f$ es **constante**.
- **Si obtenemos cualquier otro valor de $\mathbf{z}$ distinto de $\mathbf{0}$**, concluimos que $f$ es **balanceada**.
