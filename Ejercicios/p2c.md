@def title = "1. Problema de dos cuerpos"
@def tags = ["syntax", "code", "math"]

# Planteando el problema de dos cuerpos

Supongamos la fuerza central $\boldsymbol{f}(r)\hat{\boldsymbol{r}}$.

Por el esquema planteado, tenemos que:
$$
\vec{\boldsymbol{r}} = \vec{\boldsymbol{r}}_{1} - \vec{\boldsymbol{r}}_{2}
$$
Entonces 
$$
\begin{align}
r &= |\vec{\boldsymbol{r}}| \\
&= |\vec{\boldsymbol{r}}_{1} - \vec{\boldsymbol{r}}_{2}|
\end{align}
$$
Por la segunda ley de Newton, sabemos que $m \ddot{r} = F$, entonces:

$$
\begin{align}
m_{1} \ddot{\boldsymbol{r}}_{1} &= \boldsymbol{f}(r)\hat{\boldsymbol{r}}  \\ 
m_{2} \ddot{\boldsymbol{r}}_{2} &= -\boldsymbol{f}(r)\hat{\boldsymbol{r}} \quad\text{(por la tercera ley)} \tag{1}
\end{align}
$$
Por cómo definimos $\vec{\boldsymbol{r}}$, observamos que si $\boldsymbol{f}(r) > 0$ entonces hay repulsión, y si $\boldsymbol{f}(r)<0$ entonces los cuerpos se atraen.

Dividiendo por $m_{1}$ y por $m_{2}$ respectivamente, las ecuaciones anteriores quedan así:

$$
\begin{align}
\ddot{\boldsymbol{r}}_{1}&=\frac{\boldsymbol{f}(r)}{m_{1}}\hat{\boldsymbol{r}} \\
\ddot{\boldsymbol{r}}_{2}&=-\frac{\boldsymbol{f}(r)}{m_{2}}\hat{\boldsymbol{r}}
\end{align}
$$
Entonces: 
$$
\ddot{\boldsymbol{r}}_{1}-\ddot{\boldsymbol{r}}_{2}= \frac{\boldsymbol{f}(r)}{m_{1}}\hat{\boldsymbol{r}} + \frac{\boldsymbol{f}(r)}{m_{2}}\hat{\boldsymbol{r}} = \left( \frac{1}{m_{1}} + \frac{1}{m_{2}}\right)\boldsymbol{f}(r)\hat{\boldsymbol{r}}
$$
$$
\therefore \frac{m_{1}m_{2}}{m_{1}+m_{2}}(\ddot{\boldsymbol{r}}_{1}-\ddot{\boldsymbol{r}}_{2})=\boldsymbol{f}(r)\hat{\boldsymbol{r}}
$$
Haciendo $\mu=\frac{m_{1}m_{2}}{m_{1}+m_{2}}$, tal que sea la masa reducida, entonces tenemos simplemente que:
$$
\mu \ddot{\boldsymbol{r}}=\boldsymbol{f}(r)\hat{\boldsymbol{r}}
$$
---
Recordando rápidamente las coordenadas polares, tenemos que:
$$
\begin{align}
\hat{\boldsymbol{r}} &= \cos\theta\hat{\boldsymbol{i}} + \sin \theta  \hat{\boldsymbol{j}} \\
\hat{\boldsymbol{\theta}} &= -\sin \theta  \hat{\boldsymbol{i}} + \cos \theta \hat{\boldsymbol{j}}
\end{align}
$$

Sabemos que $\boldsymbol{r}=r\hat{\boldsymbol{r}}$, entonces:

$$
\begin{align}
\dot{\boldsymbol{r}} = \frac{d}{dt}(r\hat{\boldsymbol{r}}) &= \dot{r}\hat{\boldsymbol{r}} + r \frac{d\hat{\boldsymbol{r}}}{dt} \\
&=\dot{r}\hat{\boldsymbol{r}} + r \frac{d}{dt}(\cos\theta\hat{\boldsymbol{i}} + \sin \theta  \hat{\boldsymbol{j}}) \\
&=\dot{r}\hat{\boldsymbol{r}} + r(-\sin \theta\dot{\theta}\hat{\boldsymbol{i}}+\cos \theta   \dot{\theta}\hat{\boldsymbol{j}}) \\
&=\dot{r}\hat{\boldsymbol{r}}+ r \dot{\theta} \hat{\boldsymbol{\theta}}
\end{align}
$$
Entonces 
$$
\begin{align}
\ddot{\boldsymbol{r}} &= \frac{d}{dt}(\dot{r}\hat{\boldsymbol{r}}+ r \dot{\theta} \hat{\boldsymbol{\theta}}) \\
&=(\ddot{r}-r \dot{\theta}^{2})\hat{\boldsymbol{r}} + (r \ddot{\theta}+2 \dot{r} \dot{\theta})\hat{\boldsymbol{\theta}}
\end{align}
$$
---
Tenemos una componente radial y una tangencial, y como la fuerza sólo depende de $r$, pues $\boldsymbol{f}(r)\hat{\boldsymbol{r}}$, entonces tenemos que $\mu \ddot{r}=\boldsymbol{f}(r)\hat{\boldsymbol{r}}$ se convierte en:
$$
\begin{align}
\mu(\ddot{r}-r \dot{\theta}^{2}) &= \boldsymbol{f}(r) \\
\mu(r \ddot{\theta}+2 \dot{r} \dot{\theta}) &= 0
\end{align}
$$

Ahora, para saber cómo es nuestra $\boldsymbol{f}(r)$, recordemos que por Newton, sabemos que la fuerza de atracción gravitacional está dada por:
$$
\boldsymbol{F}_{1}=G \frac{m_{1}m_{2}}{r_{1,2}^{2}}\hat{\boldsymbol{r}}_{1,2}
$$
Donde $\boldsymbol{F}_{1}$ es la fuerza sobre $m_{1}$ debido a $m_{2}$, entonces, como $\boldsymbol{F}_{1}=m_{1}\ddot{\boldsymbol{r}}_{1}$ tenemos que $\ddot{\boldsymbol{r}}_{1}=\frac{\boldsymbol{F}_{1}}{m_{1}}=-G \frac{m_{2}}{r_{1,2}^{2}}\hat{\boldsymbol{r}}_{1,2}$.
Por lo tanto, tendríamos que
$$
\ddot{\boldsymbol{r}}_{1} -\ddot{\boldsymbol{r}}_{2}= -G \frac{m_{2}}{r^{2}}\hat{\boldsymbol{r}}+G \frac{m_{1}}{r^{2}}\hat{\boldsymbol{r}} = -G \frac{m_{1}m_{2}}{r^{2}}\hat{\boldsymbol{r}} = - \frac{\beta}{r^{2}}\hat{\boldsymbol{r}}
$$
En donde hicimos que $\beta=G(m_{1}+m_{2})$.

Por lo que, continuando, tendríamos que: $\mu \ddot{\boldsymbol{r}}=\mu(\ddot{\boldsymbol{r}}_{1}-\ddot{\boldsymbol{r}}_{2})=\mu\left( -\frac{\beta}{r^{2}} \right)\hat{\boldsymbol{r}}=\boldsymbol{f}(r)$. Por lo tanto:
$$
\begin{align}
\mu(\ddot{r}-r \dot{\theta}^{2}) &= \mu\left( -\frac{\beta}{r^{2}} \right) \\
\mu(r \ddot{\theta}+2 \dot{r} \dot{\theta}) &= 0
\end{align}
$$
