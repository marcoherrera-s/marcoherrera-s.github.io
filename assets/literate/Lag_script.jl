# This file was generated, do not modify it.

using SymPy, DifferentialEquations, Plots

@syms m g y_cm x_cm l t
θ = SymFunction("θ")(t)
x = SymFunction("x")(t)

xdot = diff(x, t)
xddot = diff(xdot, t)
thetadot = diff(θ, t)
thetaddot = diff(thetadot, t)



x_cm = x + l//2 * sin(θ)
y_cm = l//2*cos(θ)
println(y_cm)

x_cmd = diff(x_cm, t)
y_cmd = diff(y_cm, t)
println(y_cmd)

T_cm = 1//2 * m * (x_cmd^2 + y_cmd^2)
@show T_cm

T_cm = simplify(expand(T_cm));

I = sympy.diag(0, m*l^2 // 12, m*l^2 // 12)
ω = Matrix([0 0 diff(θ, t)])
T_rot = (1//2)*ω*I*ω.T
T_rot = T_rot[1];

T = T_cm + T_rot;

T = expand(T);

@syms Ω



U = (m*g*l//2)*cos(θ) - integrate(1//3 * m*g*cos(Ω*t), x)
U = simplify(U);

L = T - U;

ELX = diff(diff(L, xdot), t) - diff(L, x);

ELθ = diff(diff(L, thetadot), t) - diff(L, θ);

sol_1 = solve(ELX, xddot)

sol_1[1];

sol_2 = solve(ELθ, thetaddot)
sol_2[1];

params = (9.81, 1.0, sqrt(9.81/1.0))
tspan = (0.0, 10.0)



function second_order_system(ddu, du, u, p, t)
    g, l, Ω = p


    ddu[1] = g * cos(t * Ω) / 3 + l * sin(u[2]) * du[2]^2 / 2 - l * cos(u[2]) * ddu[2] / 2
    ddu[2] = 3 * (g * sin(u[2]) - cos(u[2]) * ddu[1]) / (2 * l)
end



u0 = [0.0, 0.0]
du0 = [0.0, 0.0]



prob = SecondOrderODEProblem(second_order_system, du0, u0, tspan, params)
