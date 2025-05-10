@def title = "Funciones Generadoras"
@def tags = ["syntax", "code", "math"]

# funciones generadoras

Ya vimos que, una transformación de coordenadas generalizadas y momentos conjugados $(q, p)$ a un nuevo conjunto $(Q, \mathcal{P})$ es canónica si ambas descripciones obedecen la un principio variacional de Hamilton. 

Solo para recordar y tenerlo fresco un poquito; si imaginamos que una partícula se mueve desde un punto $A$ a un punto $B$ entre los tiempos $t_{1}$ y $t_{2}$, el principio de Hamilton nos dice que la trayectoria real que sigue la partícula es aquella que hace estacionaria cierta cantidad llamada acción $S$. Recordamos que con estacionaria nos referimos que si probamos trayectorias ligeramente diferentes, la variación de $S$ es cero. 

La acción $S$ la definimos como la integral en el tiempo del Lagrangiano $\mathcal{L}$
$$
S[q(t)] = \int ^{t_{2}}_{t_{1}} \mathcal{L(q, \dot{q},t) dt}
$$
y matemáticamente el principio lo expresamos como
$$
\delta S = 0
$$
entonces si recordamos que (usando notación de Einstein) 
$$
\mathcal{H} = p_{i}\dot{q}_{i}-\mathcal{L}.
$$
también tendríamos que
$$
\mathcal{L} = p_{i}\dot{q}_{i} - \mathcal{H}.
$$
Como ya dijimos que el principio de Hamilton nos dice que la trayectoria física que sigue un sistema entre dos instantes de tiempo $t_{1}$ y $t_{2}$ es aquella que hace que la acción sea estacionara, entonces para las variables originales $(p, q)$ con Hamiltoniano $\mathcal{H}(q,p,t)$, el principio de Hamilton nos diría que
$$\delta \int_{t_1}^{t_2} \left( p_i \dot{q}_i - \mathcal{H}(q, p, t) \right) dt = 0$$
y si transformamos a nuevas variables $(Q,P)$ con el Kamiltoniano $\mathcal{K}(Q, \mathcal{P}, t)$, el principio de Hamilton nos diría que 

$$\delta \int_{t_1}^{t_2} \left( \mathcal{P}_i \dot{Q}_i - K(Q, \mathcal{P}, t) \right) dt = 0$$

Lo clave aquí es que *ambas integrales deben ser estacionarias para la misma trayectoria física*. 
Si lo anterior tiene que pasar, para cualquier intervalo de tiempo $[t_{1},t_{2}]$, entonces los integrandos de ambas integrales no pueden ser completamente diferentes. Deben diferir, a lo sumo, por la derivada temporal total de una función arbitraria $F$ que puede depender de las coordenadas (viejas y/o nuevas) y del tiempo, esto por que la integral de una derivada total depende sólo de los puntos finales:
$$ \int_{t_1}^{t_2} \frac{dF}{dt} dt = F(t_2) - F(t_1), $$
y la variación de esta integral, con puntos finales fijos, es cero
$$\delta \int_{t_1}^{t_2} \frac{dF}{dt} dt = \delta \left[ F(t_2) - F(t_1)\right] = 0$$
por lo tanto, la condición fundamental que conecta las dos descripciones es:

$$\bigl(p_i \dot{q}_i - \mathcal{H}(q, p, t)\bigr) - \bigl(\mathcal{P}_i \dot{Q}_i - \mathcal{K}(Q, \mathcal{P}, t)\bigr) = \frac{dF}{dt}$$

O reordenando:

$$p_i \dot{q}_i - \mathcal{H}(q, p, t) = \mathcal{P}_i \dot{Q}_i - \mathcal{K}(Q, \mathcal{P}, t) + \frac{dF}{dt}$$

Esta ecuación es el corazón del asunto. La función $F$ es lo que llamaremos una **Función Generadora** de la transformación canónica. Su existencia *garantiza* que la transformación preserva la forma canónica de las ecuaciones de Hamilton (aunque el Hamiltoniano $K$ pueda ser diferente de $H$).

## La Naturaleza de $F$

La función $F$ actúa como un "puente" entre el conjunto de variables antiguo $(q, p)$ y el nuevo $(Q, P)$. Para que la transformación sea útil, debemos poder relacionar las viejas variables con las nuevas. Tenemos $2n$ variables de coordenadas y $2n$ variables de momento (más el tiempo $t$). En total, $4n$ variables de fase más el tiempo. Sin embargo, las variables $(q, p)$ y $(Q, P)$ no son independientes; están relacionadas por la transformación canónica que buscamos.

Una transformación canónica es un mapeo entre el espacio de fases $(q, p)$ y el espacio de fases $(Q, P)$. Por lo tanto, solo $2n$ de estas $4n$ variables de fase son verdaderamente independientes. La función generadora $F$ debe depender de un conjunto de $2n$ variables independientes que incluya una mezcla de variables viejas y nuevas, además del tiempo.

Hay cuatro combinaciones fundamentales posibles para las variables independientes de $F$, que dan lugar a los **cuatro tipos básicos de funciones generadoras**:

1.  $F = F_1(q, Q, t)$: Depende de las coordenadas viejas y nuevas.
2.  $F = F_2(q, \mathcal{P}, t)$: Depende de las coordenadas viejas y los momentos nuevos.
3.  $F = F_3(p, Q, t)$: Depende de los momentos viejos y las coordenadas nuevas.
4.  $F = F_4(p, \mathcal{P}, t)$: Depende de los momentos viejos y nuevos.

Vamos a derivar rapidito las ecuaciones de transformación para los primeros dos tipos, los demás tipo son análogos. 

Podemos reescribir $\bigl(p_i \dot{q}_i - \mathcal{H}(q, p, t)\bigr) - \bigl(\mathcal{P}_i \dot{Q}_i - \mathcal{K}(Q, \mathcal{P}, t)\bigr) = \frac{dF}{dt}$ en forma diferencial. Multiplicando por $dt$:
$$
p_i \dot{q}_i\,dt - \mathcal{H}\,dt = \mathcal{P}_i \dot{Q}_i\,dt - \mathcal{K}\,dt + dF
$$
 como $\dot{q}_{i}=\frac{dq_{i}}{dt}$ entonces $\dot{q}_i\,dt = dq_i$, por lo que

$$
p_i\,dq_i - \mathcal{H}\,dt = \mathcal{P}_i\,dQ_i - \mathcal{K}\,dt + dF \tag{*}
$$

La diferencial total de $F_1(q, Q, t)$ es
$$
dF_1 = \frac{\partial F_1}{\partial q_i}\,dq_i + \frac{\partial F_1}{\partial Q_i}\,dQ_i + \frac{\partial F_1}{\partial t}\,dt
$$

Comparando esto con la forma diferencial de $(*)$:
$$
dF_1 = p_i\,dq_i - \mathcal{P}_i\,dQ_i + (\mathcal{K} - \mathcal{H})\,dt
$$

Esto nos da directamente:
$$
p_i = \frac{\partial F_1}{\partial q_i}, \quad \mathcal{P}_i = -\frac{\partial F_1}{\partial Q_i}, \quad \mathcal{K} - \mathcal{H} = \frac{\partial F_1}{\partial t} \quad \Longrightarrow \quad \mathcal{K} = \mathcal{H} + \frac{\partial F_1}{\partial t}
$$

Ahora, si recordamos nuestra discusión de la transformada de Legendre, teníamos que para obtener una nueva función $g(p)$ que nos de la misma información que $f(x)$ pero con otras variables, era simplemente aplicar
$$
\hat{A}f(x) = \frac{df}{dx}x - f(x) = g(p) 
$$
donde $p = \frac{df}{dx}$, entonces, análogamente, ahora queremos $F_{1}(q,Q,t) \to F_{2}(q,\mathcal{P},t)$ 
$$
\hat{A}F_{1} = \frac{\partial F_{1}}{\partial Q_{i}}Q_{i}-F_{1} = F_{2}
$$
pero en el ejemplo anterior obtuvimos que $\mathcal{P}_{i}=-\frac{\partial F_{1}}{\partial Q_{i}}$, por lo que sustituyendo
$$
F_{2} = -\mathcal{P}_{i}Q_{i} - F_{1}
$$
pero por convención, tomaremos
$$
F_{2} = \mathcal{P}_{i}Q_{i} +F_{1}
$$
calculamos su diferencial
$$
dF_2 = dF_1 + \mathcal{P}_i\,dQ_i + Q_i\,d\mathcal{P}_i
$$
sustituimos $dF_1$ que ya habíamos obtenido
$$
dF_2 = \Bigl( p_i\,dq_i - \mathcal{P}_i\,dQ_i + (\mathcal{K} - \mathcal{H})\,dt\Bigr) + \mathcal{P}_i\,dQ_i + Q_i\,d\mathcal{P}_i
$$
$$
dF_2 = p_i\,dq_i + Q_i\,d\mathcal{P}_i + (\mathcal{K} - \mathcal{H})\,dt
$$

pero también, como $F_2 = F_2(q, P, t)$, su diferencial es:
$$
dF_2 = \frac{\partial F_2}{\partial q_i}\,dq_i + \frac{\partial F_2}{\partial P_i}\,dP_i + \frac{\partial F_2}{\partial t}\,dt
$$

Comparando los coeficientes de los diferenciales independientes $dq_i$, $dP_i$, $dt$:
*   $$p_i = \frac{\partial F_2}{\partial q_i}$$
*   $$Q_i = \frac{\partial F_2}{\partial P_i}$$
*   $$K - H = \frac{\partial F_2}{\partial t} \quad \Longrightarrow \quad K = H + \frac{\partial F_2}{\partial t}$$
Análogamente, obtendríamos para todas nuestras funciones:

|  Tipo  |    Función Generadora    |                                      Ecuaciones de Transformación                                      |                     Relación Hamiltoniana                      |
| :----: | :----------------------: | :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------: |
| **F₁** |      $F_1(q, Q, t)$      | $p_i = \dfrac{\partial F_1}{\partial q_i}$ $\quad\quad$ $\mathcal{P}_i = -\dfrac{\partial F_1}{\partial Q_i}$  | $\mathcal{K} = \mathcal{H} + \dfrac{\partial F_1}{\partial t}$ |
| **F₂** | $F_2(q, \mathcal{P}, t)$ |  $p_i = \dfrac{\partial F_2}{\partial q_i}$ $\quad\quad$ $Q_i = \dfrac{\partial F_2}{\partial \mathcal{P}_i}$  | $\mathcal{K} = \mathcal{H} + \dfrac{\partial F_2}{\partial t}$ |
| **F₃** |      $F_3(p, Q, t)$      | $q_i = -\dfrac{\partial F_3}{\partial p_i}$ $\quad\quad$ $\mathcal{P}_i = -\dfrac{\partial F_3}{\partial Q_i}$ | $\mathcal{K} = \mathcal{H} + \dfrac{\partial F_3}{\partial t}$ |
| **F₄** | $F_4(p, \mathcal{P}, t)$ | $q_i = -\dfrac{\partial F_4}{\partial p_i}$ $\quad\quad$; $Q_i = \dfrac{\partial F_4}{\partial \mathcal{P}_i}$  | $\mathcal{K} = \mathcal{H} + \dfrac{\partial F_4}{\partial t}$ |

Hay un ejemplo bonito y sencillo de esto que se puede ver en la sección 9.3 del *Mecánica Clásica* de Goldstein. 