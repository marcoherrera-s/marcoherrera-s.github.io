@def title = "Series de Lie"
@def tags = ["syntax", "code", "math"]

# series de lie

En la entrada anterior hablamos de tres resultados importantes


* $$ \frac{df}{dt} = \{f, H\} + \frac{\partial f}{\partial t} $$
* $$ \{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0, \quad \{q_i, p_j\} = \delta_{ij} $$
* Las transformaciones canónicas como aquellas que preservan estos corchetes fundamentales.

Lo interesante aquí es que la ecuación de evolución temporal $\frac{df}{dt} = \{f, H\}$ (ignorando la dependencia explícita en $t$ por ahora) sugiere que el Hamiltoniano $H$ "genera" cambios infinitesimales en $f$ a través del corchete de Poisson.

¿Cómo que "generación"? ¿Podemos usar *otras* funciones, además de $H$, para generar transformaciones? 

Consideremos una función cualquiera $g(q, p)$ definida en el espacio de fases. Podemos asociarle un operador $\mathcal{L}_g$, que llamaremos el operador de Lie, que actúa sobre *otras* funciones $f(q, p)$ del espacio de fases tal que

$$
\mathcal{L}_g f \equiv \{f, g\} = \sum_{i=1}^n \left( \frac{\partial f}{\partial q_i} \frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i} \right)
$$

El operador $\mathcal{L}_g$ representa la derivada infinitesimal de $f$ a lo largo del "flujo" generado por $g$. Si pensamos en $g$ como un "pseudo-Hamiltoniano", $\mathcal{L}_g f$ nos dice cómo cambiaría $f$ instantáneamente si el sistema evolucionara según las ecuaciones de Hamilton pero con $g$ en lugar de $H$.

Una vez que tenemos el operador $\mathcal{L}_g$, podemos aplicarlo repetidamente:
*   $\mathcal{L}_g^0 f = f$
*   $\mathcal{L}_g^1 f = \mathcal{L}_g f = \{f, g\}$
*   $\mathcal{L}_g^2 f = \mathcal{L}_g (\mathcal{L}_g f) = \{\{f, g\}, g\}$
*   $\mathcal{L}_g^n f = \mathcal{L}_g (\mathcal{L}_g^{n-1} f) = \underbrace{\{\dots\{\{f, g\}, g\}, \dots\}, g\}}_{n \text{ veces}}$

Ahora, de forma análoga a la serie de Taylor $e^x = \sum x^n/n!$, podemos definir formalmente la **exponencial del operador de Lie**, $\exp(\epsilon \mathcal{L}_g)$, actuando sobre una función $f$. Esta es la **Serie de Lie** generada por $g$:

$$
e^{\epsilon \mathcal{L}_g} f \equiv \sum_{n=0}^{\infty} \frac{\epsilon^n}{n!} \mathcal{L}_g^n f = f + \epsilon \{f, g\} + \frac{\epsilon^2}{2!} \{\{f, g\}, g\} + \frac{\epsilon^3}{3!} \{\{\{f, g\}, g\}, g\} + \dots
$$

Si consideramos el caso especial donde el generador es el Hamiltoniano, $g = H$, y el parámetro es el tiempo, $\epsilon = t$. Supongamos que ni $f$ ni $H$ dependen explícitamente del tiempo ($\partial f/\partial t = 0, \partial H/\partial t = 0$). Entonces la ecuación de evolución es:
$$ \frac{df}{dt} = \{f, H\} = \mathcal{L}_H f $$
Si pensamos en $f(t) = f(q(t), p(t))$ como la función evaluada a lo largo de la trayectoria, podemos calcular sus derivadas superiores:
$$ \frac{d^2 f}{dt^2} = \frac{d}{dt} (\mathcal{L}_H f) = \{\mathcal{L}_H f, H\} = \mathcal{L}_H (\mathcal{L}_H f) = \mathcal{L}_H^2 f $$
$$ \frac{d^n f}{dt^n} = \mathcal{L}_H^n f $$
Ahora, si hacemos una expansión de Taylor de $f(t)$ alrededor de $t=0$:
$$ f(t) = f(0) + t \left.\frac{df}{dt}\right|_{t=0} + \frac{t^2}{2!} \left.\frac{d^2f}{dt^2}\right|_{t=0} + \dots $$
$$ f(t) = f(0) + t (\mathcal{L}_H f)|_{t=0} + \frac{t^2}{2!} (\mathcal{L}_H^2 f)|_{t=0} + \dots $$
$$ f(t) = \sum_{n=0}^{\infty} \frac{t^n}{n!} (\mathcal{L}_H^n f)|_{t=0} = \left( e^{t \mathcal{L}_H} f \right)|_{t=0} $$


Esto ya está muy divertido, porque entonces la Serie de Lie generada por el Hamiltoniano $H$ propaga formalmente cualquier observable $f$ (que no dependa explícitamente de $t$) desde el tiempo $t=0$ hasta el tiempo $t$.
$$ \boxed{ f(q(t), p(t)) = e^{t \mathcal{L}_H} f(q(0), p(0)) } $$

La evolución temporal Hamiltoniana *es* la aplicación de una Serie de Lie generada por $H$.

Por lo tanto, como ejemplo final, calculemos la trayectoria del oscilador armónico usando una serie de Lie, un buen ejemplo de matar una mosca a cañonazos. 

---
El Hamiltoniano del oscilador armónico es
$$H  = \frac{p^2}{2m} + \frac{1}{2} k q^2$$

si definimos $\omega = \sqrt{k/m}$, entonces $k = m\omega^2$. El Hamiltoniano es
  $$ \boxed{ H(q, p) = \frac{p^2}{2m} + \frac{1}{2} m \omega^2 q^2 } $$

Encontremos $q(t)$ usando la Serie de Lie, vimos que
$$ f(t) = e^{t \mathcal{L}_H} f(0) = \sum_{n=0}^{\infty} \frac{t^n}{n!} \mathcal{L}_H^n f(0) $$
donde $\mathcal{L}_H f = \{f, H\}$.

$$ \mathcal{L}_H q = \{q, H\} = \frac{\partial q}{\partial q} \frac{\partial H}{\partial p} - \frac{\partial q}{\partial p} \frac{\partial H}{\partial q} $$
$$ = 1 \cdot \left(\frac{p}{m}\right) - 0 \cdot (m\omega^2 q) = \frac{p}{m} $$


**Calculamos $\mathcal{L}_H^2 f = \{\mathcal{L}_H f, H\}$:**

$$ \mathcal{L}_H^2 q = \{\mathcal{L}_H q, H\} = \{\frac{p}{m}, H\} = \frac{1}{m} \{p, H\} $$
Usando $\{p, H\} = -m\omega^2 q$:
$$ \mathcal{L}_H^2 q = \frac{1}{m} (-m\omega^2 q) = -\omega^2 q $$

**Calculamos $\mathcal{L}_H^3 f = \{\mathcal{L}_H^2 f, H\}$:**
$$ \mathcal{L}_H^3 q = \{\mathcal{L}_H^2 q, H\} = \{-\omega^2 q, H\} = -\omega^2 \{q, H\} $$
$$ = -\omega^2 \left(\frac{p}{m}\right) = -\frac{\omega^2 p}{m} $$


**Calculamos $\mathcal{L}_H^4 f = \{\mathcal{L}_H^3 f, H\}$:**
$$ \mathcal{L}_H^4 q = \{\mathcal{L}_H^3 q, H\} = \{-\frac{\omega^2 p}{m}, H\} = -\frac{\omega^2}{m} \{p, H\} $$
$$ = -\frac{\omega^2}{m} (-m\omega^2 q) = \omega^4 q $$


Podemos ver que
*   $\mathcal{L}_H^{2k} q = (-1)^k \omega^{2k} q$
*   $\mathcal{L}_H^{2k+1} q = (-1)^k \omega^{2k} (p/m)$

**Construimos las Series de Lie evaluadas en $t=0$:**
Sea $q(0) = q_0$

$$ q(t) = \sum_{n=0}^{\infty} \frac{t^n}{n!} \mathcal{L}_H^n q_0 $$
$$ q(t) = q_0 \left(1 - \frac{(\omega t)^2}{2!} + \frac{(\omega t)^4}{4!} - \dots \right) + \frac{p_0}{m} \left( t - \frac{\omega^2 t^3}{3!} + \frac{\omega^4 t^5}{5!} - \dots \right) $$
La primera serie es la serie de Taylor para $\cos(\omega t)$. La segunda, si factorizamos $\omega$ del tiempo, es $(1/\omega) \sin(\omega t)$.
$$ q(t) = q_0 \cos(\omega t) + \frac{p_0}{m\omega} \left( (\omega t) - \frac{(\omega t)^3}{3!} + \frac{(\omega t)^5}{5!} - \dots \right) $$
$$ \boxed{ q(t) = q_0 \cos(\omega t) + \frac{p_0}{m\omega} \sin(\omega t) } $$

