# This file was generated, do not modify it. # hide
@syms m g y_cm x_cm l t
θ = SymFunction("θ")(t)
x = SymFunction("x")(t);


xdot = diff(x, t)
xddot = diff(xdot, t)
thetadot = diff(θ, t)
thetaddot = diff(thetadot, t);



x_cm = x + l//2 * sin(θ)
y_cm = l//2*cos(θ);