@def title = "Ecuaciones de Hamilton"
@def tags = ["syntax", "code", "math"]

# ecuaciones de hamilton

De la entrada anterior podemos rescatar tres resultados importantes

* $$\mathcal{H}(q_i, p_i, t) = \sum_{i=1}^{n} \frac{\partial \mathcal{L}}{\partial \dot{q}_i} \dot{q}_i - \mathcal{L}$$
* $$P_i = \frac{\partial \mathcal{L}}{\partial \dot{q}_i}$$
* $$-\frac{\partial \mathcal{L}}{\partial t} = \frac{d\mathcal{H}}{dt}$$
Ahora, lo primero que vamos a hacer es calcular a _pata_ el diferencial de $\mathcal{H}$.

$$d\mathcal{H} = \frac{\partial \mathcal{H}}{\partial q_1} dq_1 + \frac{\partial \mathcal{H}}{\partial q_2} dq_2 + ... + \frac{\partial \mathcal{H}}{\partial P_1} dP_1 + \frac{\partial \mathcal{H}}{\partial P_2} dP_2 + ... + \frac{\partial \mathcal{H}}{\partial t} dt$$

$$= \sum_{j=1}^{n} \left( \frac{\partial \mathcal{H}}{\partial q_j} dq_j + \frac{\partial \mathcal{H}}{\partial P_j} dP_j \right) + \frac{\partial \mathcal{H}}{\partial t} dt$$
Ahora si diferenciamos la expresión que ya conocemos de $\mathcal{H}$ tendríamos
$$H = \sum_{j=1}^{n} P_j \dot{q}_j - L(q, \dot{q}, t)$$

$$d\mathcal{H} = \sum_{j=1}^{n} \frac{\partial (P_j \dot{q}_j)}{\partial P_j} dP_j + \frac{\partial (P_j \dot{q}_j)}{\partial \dot{q}_j} d\dot{q}_j - d\mathcal{L}$$

$$= \sum_{j=1}^{n} \left[ \dot{q}_j dP_j + P_j d\dot{q}_j \right] - d\mathcal{L}$$

$$d\mathcal{L} = \sum_{j=1}^{n} \left[ \frac{\partial \mathcal{L}}{\partial q_j} dq_j + \frac{\partial \mathcal{L}}{\partial \dot{q}_j} d\dot{q}_j \right] + \frac{\partial \mathcal{L}}{\partial t} dt$$

$$= \sum_{j=1}^{n} \left[ \dot{q}_j dP_j + P_j d\dot{q}_j \right] - \left[ \sum_{j=1}^{n} \left[ \frac{\partial \mathcal{L}}{\partial q_j} dq_j + \frac{\partial \mathcal{L}}{\partial \dot{q}_j} d\dot{q}_j \right] + \frac{\partial \mathcal{L}}{\partial t} dt \right]$$

$$= \sum_{j=1}^{n} \left[ \dot{q}_j dP_j + P_j d\dot{q}_j - \frac{\partial \mathcal{L}}{\partial q_j} dq_j - \frac{\partial \mathcal{L}}{\partial \dot{q}_j} d\dot{q}_j \right] - \frac{\partial \mathcal{L}}{\partial t} dt$$
Recordamos que:
$$\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}_j} \right) = \frac{\partial \mathcal{L}}{\partial q_j}$$

$$\dot{P}_j = \frac{\partial \mathcal{L}}{\partial q_j}$$

$$= \sum_{j=1}^{n} \left[ \dot{q}_j dP_j + P_j d\dot{q}_j - \dot{P}_j dq_j - P_j d\dot{q}_j \right] - \frac{\partial \mathcal{L}}{\partial t} dt$$

$$d \mathcal{H}= \sum_{j=1}^{n} \left[ \dot{q}_j dP_j - \dot{P}_j dq_j \right] - \frac{\partial \mathcal{L}}{\partial t} dt$$

Si recordamos que:

$$d \mathcal{H}= \sum_{j=1}^{n} \left( \frac{\partial \mathcal{H}}{\partial q_j} dq_j + \frac{\partial \mathcal{H}}{\partial P_j} dP_j \right) + \frac{\partial \mathcal{H}}{\partial t} dt$$

entonces:
$$-\frac{\partial \mathcal{H}}{\partial q_j} = \dot{P}_j, \quad \frac{\partial \mathcal{H}}{\partial P_j} = \dot{q}_j$$
pero entonces también 
$$
\frac{\partial \mathcal{H}}{\partial t} = -\frac{\partial \mathcal{L}}{\partial t}
$$
y en la entrada anterior habíamos llegado a que
$$-\frac{\partial \mathcal{L}}{\partial t} = \frac{d\mathcal{H}}{dt}$$
por lo tanto 
$$
\frac{\partial \mathcal{H}}{\partial t} = \frac{d \mathcal{H}}{dt}.
$$
Esta simple ecuación es una gran sentencia: si el Hamiltoniano $\mathcal{H}$ no tiene al tiempo t metido explícitamente, entonces, su derivada total respecto al tiempo es CERO.

Lo divertido es que podemos ver lo anterior con una simple mirada a su estructura. Si la $t$  no figura explícitamente, H es una constante del movimiento. No hay más que buscar. 