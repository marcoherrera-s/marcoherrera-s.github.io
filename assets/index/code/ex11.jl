# This file was generated, do not modify it. # hide
I = sympy.diag(0, m*l^2 // 12, m*l^2 // 12)
ω = Matrix([0 0 diff(θ, t)])
T_rot = (1//2)*ω*I*ω.T
T_rot = T_rot[1]