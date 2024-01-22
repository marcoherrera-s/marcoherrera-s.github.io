<!-- @def showall = true -->
@def title = "Problema 1"
@def tags = ["syntax", "code"]


\literate{/_literate/Lag.jl}

```julia:./ex11
using DifferentialEquations, Plots
```
\show{./ex11}


```julia:./ex88
params = (9.81, 1.0, sqrt(9.81/1.0))
tspan = (0.0, 10.0)
```

\show{./ex88}

```julia:./ex81
function second_order_system(ddu, du, u, p, t)
    g, l, Ω = p


    ddu[1] = g * cos(t * Ω) / 3 + l * sin(u[2]) * du[2]^2 / 2 - l * cos(u[2]) * ddu[2] / 2
    ddu[2] = 3 * (g * sin(u[2]) - cos(u[2]) * ddu[1]) / (2 * l)
end
```

\show{./ex81}


```julia:./ex88
u0 = [0.0, 0.0]
du0 = [0.0, 0.0]
```


```julia:./ex89
prob = SecondOrderODEProblem(second_order_system, du0, u0, tspan, params)
```
\show{./ex89}
