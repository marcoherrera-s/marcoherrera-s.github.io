@def title = "Transformaciones Canónicas"
@def tags = ["syntax", "code", "math"]

# transformaciones canónicas

Supongamos que tenemos el Hamiltoniano
$$
\mathcal{H} = \frac{1}{2} p^{2} + \frac{1}{2}q^{2}
$$
donde ya sabemos que $P = \frac{\partial \mathcal{L}}{\partial \dot{q}}$, y por lo tanto, las ecuaciones de Hamilton son:
$$
\dot{q}= \frac{\partial \mathcal{H}}{\partial p} = p
$$
$$
\dot{p} = - \frac{\partial \mathcal{H}}{\partial q} = -q
$$
Ahora, lo que nos interesa es hacer un cambio de variables que transforme las coordenadas y momentos del sistema de manera que la forma de las ecuaciones de Hamilton se conserven.

$$
(q_{i}, p_{i}) \to (Q_{i}, \mathcal{P}_{i})
$$
Esto está chido porque a veces la elección de las variables adecuadas puede transformar un problema difícil en uno más simple o incluso integrable. 

Entonces, supongamos que hacemos el cambio de variable:

$$Q = q^2 \quad \mathcal{P} = \frac{1}{2} \frac{p}{q}$$

$$q = \sqrt{Q} \quad p = 2\mathcal{P}q = 2\mathcal{P}\sqrt{Q}$$

Por lo que el Hamiltoniano nos quedaría:

$$\mathcal{H} = \frac{1}{2}(2\mathcal{P}\sqrt{Q})^2 + \frac{1}{2}(\sqrt{Q})^2$$

$$= \frac{1}{2} 4\mathcal{P}^2Q + \frac{1}{2}Q = 2\mathcal{P}^2Q + \frac{1}{2}Q$$

$$= \mathcal{H}(q_{(Q,\mathcal{P})}, P_{(Q,\mathcal{P})}) = \mathcal{K}(Q,\mathcal{P})$$
La pregunta natural que nos haríamos es si nuestro nuevo Hamiltoniano $\mathcal{K}$ también tiene sus _ecuaciones de Kamilton_ tal que
$$-\frac{\partial \mathcal{K}}{\partial Q} = \dot{\mathcal{P}}, \quad \frac{\partial \mathcal{K}}{\partial \mathcal{P}} = \dot{Q}$$
Pues la respuesta es que en general NO. Pero en los casos divertidos en que sí lo hace, es porque ese cambio de variable fue justamente una _transformación canónica_.

Veamos qué se tiene que cumplir para saber si nuestra transformación es canónica o no.

Tenemos que:
$$Q = Q(q, p)$$
$$\mathcal{P} = \mathcal{P}(q, p)$$

$$\dot{Q} = \frac{\partial Q}{\partial q} \dot{q} + \frac{\partial Q}{\partial p} \dot{p}$$

$$\dot{\mathcal{P}} = \frac{\partial \mathcal{P}}{\partial q} \dot{q} + \frac{\partial \mathcal{P}}{\partial p} \dot{p}$$

$$
\begin{pmatrix} \dot{Q} \\ \dot{\mathcal{P}} \end{pmatrix} = \underbrace{\begin{pmatrix} \frac{\partial Q}{\partial q} & \frac{\partial Q}{\partial p} \\ \frac{\partial \mathcal{P}}{\partial q} & \frac{\partial \mathcal{P}}{\partial p} \end{pmatrix}}_{M} \begin{pmatrix} \dot{q} \\ \dot{p} \end{pmatrix}
$$
Ahora, podemos definir:
$$z = \begin{pmatrix} q \\ p \end{pmatrix} \Rightarrow \dot{z} = \begin{pmatrix} \dot{q} \\ \dot{p} \end{pmatrix}$$

$$\mathbb{Z} = \begin{pmatrix} Q \\ \mathcal{P} \end{pmatrix} \Rightarrow \dot{\mathbb{Z}} = \begin{pmatrix} \dot{Q} \\ \dot{\mathcal{P}} \end{pmatrix}$$
entonces
$$
\mathbb{\dot{Z}} = M \dot{z}
$$

Lo primero que queremos es que:
$$\mathcal{H}(z) = \mathcal{K}(\mathbb{Z})$$

como las ecuaciones de Hamilton nos dicen cosas cuando derivamos respecto al tiempo, entonces hagamos:

$$\frac{\partial \mathcal{H}}{\partial z} \dot{z} = \frac{\partial \mathcal{K}}{\partial \mathbb{Z}} \dot{\mathbb{Z}}$$

Pero $\dot{\mathbb{Z}} = M \dot{z}$, entonces

$$\frac{\partial \mathcal{H}}{\partial z} \dot{z} = \frac{\partial \mathcal{K}}{\partial \mathbb{Z}} M \dot{z}$$

Y además queremos que las ecuaciones de Hamilton tengan la misma forma en las nuevas variables.
Teníamos que:
$$\begin{pmatrix} \dot{q} \\ \dot{p} \end{pmatrix} = \begin{pmatrix} \frac{\partial \mathcal{H}}{\partial p} \\ -\frac{\partial \mathcal{H}}{\partial q} \end{pmatrix}$$

Haciendo un truquito para que parezca simétrico, entonces:
$$\begin{pmatrix} \dot{q} \\ \dot{p} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} \frac{\partial \mathcal{H}}{\partial q} \\ \frac{\partial \mathcal{H}}{\partial p} \end{pmatrix}$$

Si le llamamos $J = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$

$$\dot{z} = J \begin{pmatrix} \frac{\partial \mathcal{H}}{\partial q} \\ \frac{\partial \mathcal{H}}{\partial p} \end{pmatrix}$$

Y de la misma forma:
$$\dot{\mathbb{Z}} = J \begin{pmatrix} \frac{\partial \mathcal{K}}{\partial Q} \\ \frac{\partial \mathcal{K}}{\partial \mathcal{P}} \end{pmatrix}$$
Podemos decir que:
$$\frac{\partial \mathcal{H}}{\partial z} = \begin{pmatrix} \frac{\partial \mathcal{H}}{\partial q} \\ \frac{\partial \mathcal{H}}{\partial p} \end{pmatrix} \quad \text{y} \quad \frac{\partial \mathcal{K}}{\partial \mathbb{Z}} = \begin{pmatrix} \frac{\partial \mathcal{K}}{\partial Q} \\ \frac{\partial \mathcal{K}}{\partial \mathcal{P}} \end{pmatrix}$$

entonces ahora sí, tenemos que:

$$\dot{z} = J \frac{\partial \mathcal{H}}{\partial z} \quad , \quad \dot{\mathbb{Z}} = J \frac{\partial \mathcal{K}}{\partial \mathbb{Z}}$$

Ahora, teníamos que:
$$\frac{\partial \mathcal{H}}{\partial z} \dot{z} = \frac{\partial \mathcal{K}}{\partial \mathbb{Z}} M \dot{z}$$

De una forma más correcta, tendríamos que:
$$\left( \frac{\partial \mathcal{H}}{\partial z} \right)^T \dot{z} = \left( \frac{\partial \mathcal{K}}{\partial \mathbb{Z}} \right)^T M \dot{z}$$

Como 
$$\dot{z} = J \frac{\partial \mathcal{H}}{\partial z} \quad \Rightarrow \quad J^{-1} \dot{z} = \frac{\partial \mathcal{H}}{\partial z}$$

$$\dot{\mathbb{Z}} = J \frac{\partial \mathcal{K}}{\partial \mathbb{Z}} \quad \Rightarrow \quad J^{-1} \dot{\mathbb{Z}} = \frac{\partial \mathcal{K}}{\partial \mathbb{Z}}$$
Por lo tanto:
$$(J^{-1} \dot{z})^T \dot{z} = (J^{-1} \dot{\mathbb{Z}})^T M \dot{z}$$

Recordando la regla fundamental de que: $(AB)^T = B^T A^T$
y que $\dot{\mathbb{Z}} = M\dot{z}$, entonces:

$$\dot{z}^T (J^{-1})^T \dot{z} = (J^{-1} M \dot{z})^T M \dot{z}$$
$$\dot{z}^T (J^{-1})^T \dot{z} = \dot{z}^T M^T (J^{-1})^T M \dot{z}$$

Notamos que:
$$J J^T = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$

entonces: $J^{-1} = J^T$, por lo tanto:

$$\dot{z}^T J \dot{z} = \dot{z}^T M^T J M \dot{z}$$

y de aquí tendríamos que:
$$J = M^T J M$$
Y esta es la condición que debe cumplir la transformación para que sea canónica.

Porque entonces:
$$\text{det}(J) = \text{det}(M^T J M)$$
$$1 = \text{det} M^T \text{det} J \text{det} M$$
y como $\text{det}(A) = \text{det}(A^T)$ entonces
$$1 = (\text{det} M)^2$$

Por lo que en teoría: $\pm 1 = \text{det} M$

Solo que necesitamos $\text{det} M > 0$, porque si recordamos qué nos dice el determinante, nos habla de áreas y queremos que el espacio de fases se conserve y no se invierta.

Por lo tanto, ya tenemos las herramientas para saber si una transformación es canónica. Tenemos en el ejemplo que habíamos visto que:

$$Q = q^2$$
$$\mathcal{P} = \frac{1}{2} \frac{p}{q}$$
entonces si calculamos la matriz M, tenemos que:

$$M = \begin{pmatrix} \frac{\partial Q}{\partial q} & \frac{\partial Q}{\partial p} \\ \frac{\partial \mathcal{P}}{\partial q} & \frac{\partial \mathcal{P}}{\partial p} \end{pmatrix} = \begin{pmatrix} 2q & 0 \\ -\frac{p}{2q^2} & \frac{1}{2q} \end{pmatrix}$$

$$\text{det } M = 2q \left(\frac{1}{2q}\right) + 0 = 1$$

Por lo tanto, es una transformación canónica.

Hay que notar que hasta ahora no he dicho para qué Hamiltoniano. Así que vale para cualquier Hamiltoniano que queramos.
Aunque no hay que dejarnos llevar por la idea de que $det(M)=1$ es un truci mágico que clona el Hamiltoniano. Simplemente asegura que la _dinámica_ conserva su forma Hamiltoniana.