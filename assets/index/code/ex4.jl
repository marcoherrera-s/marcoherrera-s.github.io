# This file was generated, do not modify it. # hide
xdot = diff(x, t)
xddot = diff(xdot, t)
thetadot = diff(θ, t)
thetaddot = diff(thetadot, t)



x_cm = x + l//2 * sin(θ)
y_cm = l//2*cos(θ)
println(y_cm)