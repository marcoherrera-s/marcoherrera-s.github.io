@def title = "Álgebra lineal"
@def tags = ["syntax", "code", "math"]

# Un poquito de álgebra lineal

Comenzamos con una definición tranquilita:

_Un operador normal $A$ es un operador lineal que satisface que $AA^{\dagger}=A^{\dagger}A$_.

Esto básicamente lo que nos está diciendo es que el operador $A$ conmuta con su adjunto $A^{\dagger}$.
Ahora, si recordamos qué son los operadores unitarios y hermitianos, sabemos que son normales, pues un operador unitario es un operador $U$ tal que $U^{\dagger}=U^{-1}$. Entonces $UU^{\dagger}=UU^{-1}=U^{\dagger}U$. Un operador hermitiano es uno tal que $T^{\dagger}=T$, entonces $TT^{\dagger}=T^{\dagger}T$.

Por lo que podemos decir que la mayoría de operadores que nos importan en la física y computación cuántica son normales. 

Ahora sí, a lo bueno.

#### Teorema Espectral
_Para todo operador normal $T$ en un espacio de de Hilbert $\mathcal{H}$ de dimensión finita, existe una base ortonormal de $\mathcal{H}$ de eigenvectores $\ket{T_{i}}$ de $T$._ 

Lo que nos dice este teorema es que siempre podemos diagonalizar un operador normal. Por lo que se puede escribir el teorema también de la siguiente forma.

#### Teorema Espectral
_Para toda matriz normal de dimensión finita $T$, existe una matriz unitaria $P$, tal que $T=P\Lambda P^{\dagger}$, donde $\Lambda$ es una matriz diagonal._


La razón por la cual el teorema espectral será muy importante es porque nos va a permitir simplificar las expresiones por funciones de operadores. 

Si $(\{| T_i \rangle\}$ son los vectores propios ortonormales de  $T$ con los valores propios correspondientes $\{T_i\}$, entonces $T$ se puede expresar como:

$$
T = \sum_i T_i | T_i \rangle \langle T_i |
$$
Aquí recordamos que el proyector es idempotente, por lo que 
$$
(\ket{T_{i}}\bra{T_{i}})^{m} = \ket{T_{i}}\bra{T_{i}}
$$
para cualquier entero $m$. 

Además, como los eigenvectores son ortonormales, entonces
$$
\langle T_{i} | T_{j} \rangle = \delta_{ij}
$$
Por lo tanto, si queremos hacer $T^{m}$, sería
$$
(\sum_i T_i | T_i \rangle \langle T_i |)^{m}= \sum_i T_i^{m} | T_i \rangle \langle T_i |
$$
Lo que nos interesaría ahora, sería definir la acción de una función $f: \mathbb{C} \to \mathbb{C}$ en un operador sobre un espacio de Hilbert.

Para una función analítica $f(x)$ de variable compleja $x$, podemos escribir su expansión en serie de Taylor alrededor de un punto (típicamente $z = 0$):

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n=\sum_{n=0}^{\infty}a_{n}x^{n}
$$
Ahora, tal vez no valga la pena entrar tanto en detalle aquí, pero pensando en lo anterior, entonces podemos definir:
$$
f(T) =\sum_{n}a_{n}T^{n}
$$

Sustituyendo $T^n$ en la serie de $f(T)$:

$$
f(T) = \sum_{n} a_{n} T^{n} = \sum_{n} a_{n} \left(\sum_i T_i^n | T_i \rangle \langle T_i |\right)
$$

Podemos reordenar las sumas ya que son sumas infinitas convergentes (si la serie de Taylor converge correctamente):

$$
f(T) = \sum_{n} \sum_i a_{n} T_i^n | T_i \rangle \langle T_i |
$$

$$
f(T) = \sum_i \left(\sum_{n} a_{n} T_i^n \right) | T_i \rangle \langle T_i |
$$

Observamos que $\sum_{n} a_{n} T_i^n$ es la serie de Taylor de $f(x)$ evaluada en $T_i$:

$$
\sum_{n} a_{n} T_i^n = f(T_i)
$$

Por lo tanto,

$$
f(T) = \sum_i f(T_i) | T_i \rangle \langle T_i |
$$
Esto nos dice cómo la función $f$ actúa sobre el operador $T$ aplicándose a cada uno de sus valores propios $T_i$. Por lo que, cuando $T$ está en su forma diagonal, $f(T)$ simplemente se hace aplicando $f$ en las entradas diagonales de $T$.

Por lo tanto, cuando queremos calcular una función $f$ de un operador $T$, lo primero que hay que hacer es diagonalizar $T$, y que podamos diagonalizar $T$ con tranquilidad, para casi todos los operadores que nos van a importar, nos lo garantiza el teorema espectral. 

## Productos tensoriales

Un producto tensorial es simplemente una forma de combinar espacios, vectores, operadores. 

Supongamos $\mathcal{H_{1}}$ y $\mathcal{H_{2}}$ son espacios de Hilbert de $n$ y $m$ dimensiones. 
Entonces $\mathcal{H_{1}}\otimes \mathcal{H_{2}}$ es un espacio nuevo, más grande de $n\times m$ dimensión. 

Ahora supongamos que $\{\ket{b_{i}}\}_{i \in \{1,\dots,n\}}$ es una base ortonormal de $\mathcal{H_{1}}$ y que $\{\ket{c_{j}}\}_{j \in \{1,\dots,m\}}$ es una base ortonormal de $\mathcal{H_{2}}$. Entonces
$$
\{\ket{b_{i}}\otimes\ket{c_{j}}\}_{ i \in \{1,\dots,n\},     j \in \{1,\dots,m\}  }
$$
es una base ortonormal para el espacio creado por $\mathcal{H_{1}}\otimes \mathcal{H_{2}}$. 

Además, el producto tensorial de dos vectores $\ket{\psi_{1}}$ y $\ket{\psi_{2}}$ de  $\mathcal{H_{1}}$ y $\mathcal{H_{2}}$ respectivamente, es un vector de $\mathcal{H_{1}}\otimes \mathcal{H_{2}}$. 

Siguiendo el mismo procedimiento, ahora consideremos los operadores $A$ y $B$ actuando sobre los espacios de Hilbert $\mathcal{H_{1}}$ y$\mathcal{H_{2}}$, respectivamente.

Supongamos que $A: \mathcal{H_{1}} \to \mathcal{H_{1}}$ es un operador lineal en $\mathcal{H_{1}}$ y $B: \mathcal{H_{2}} \to \mathcal{H_{2}}$ es un operador lineal en $\mathcal{H_{2}}$. Entonces, podemos definir un operador en el espacio tensorial $\mathcal{H_{1}} \otimes \mathcal{H_{2}}$ a través del producto tensorial de $A$ y $B$.

El operador $A \otimes B: \mathcal{H_{1}} \otimes \mathcal{H_{2}} \to \mathcal{H_{1}} \otimes \mathcal{H_{2}}$ se define de manera que actúa sobre un vector $\ket{\psi_{1}} \otimes \ket{\psi_{2}} \in \mathcal{H_{1}} \otimes \mathcal{H_{2}}$ como:

$$
(A \otimes B)(\ket{\psi_{1}} \otimes \ket{\psi_{2}}) = (A\ket{\psi_{1}}) \otimes (B\ket{\psi_{2}}).
$$

Además, si $A$ y $B$ son matrices representando operadores en $\mathcal{H_{1}}$ y $\mathcal{H_{2}}$, respectivamente, ya se había mencionado en una entrada anterior que la representación matricial de $A \otimes B$ en la base ortonormal de $\mathcal{H_{1}} \otimes \mathcal{H_{2}}$ es el producto de Kronecker de las matrices de $A$ y $B$. 

Una cosa importante que decir sobre la notación es que regularmente, en lugar de escribir $\ket{\psi}\otimes \ket{\varphi}$, se escribe simplemente como $\ket{\psi}\ket{\varphi}$, o a veces, simplemente $\ket{\psi\varphi}$.

## Teorema de descomposición de Schmidt

Si $\ket{\psi}$ es un vector en el espacio del producto tensorial $\mathcal{H_{A}}\otimes \mathcal{H_{B}}$, entonces existe una base ortonormal $\{\ket{\varphi_{i}^{A}}\}$ de $\mathcal{H_{A}}$, y una base ortonormal $\{\ket{\varphi_{i}^{B}}\}$ de $\mathcal{H_{B}}$, y reales no negativos $\{p_{i}\}$ tal que
$$
\ket{\psi} = \sum_{i}\sqrt{ p_{i} }\ket{\varphi_{i}^{A}}\ket{\varphi_{i}^{B}}.  
$$

Lo que nos está diciendo este teorema es que si tenemos un estado cuántico $\ket{\psi}$ en el espacio de producto tensorial $\mathcal{H}_A \otimes \mathcal{H}_B$, podemos escribir este estado en una forma especial donde solo hay términos "puros" o "directos".


Los coeficientes de Schmidt $\sqrt{p_{i}}$ cuantifican cuánto contribuye cada par de vectores $\ket{\varphi_i^A}$ y $\ket{\varphi_i^B}$ al estado total. 

