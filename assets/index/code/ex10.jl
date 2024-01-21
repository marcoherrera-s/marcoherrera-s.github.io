# This file was generated, do not modify it. # hide
@syms Ω



U = (m*g*l//2)*cos(θ) - integrate(1//3 * m*g*cos(Ω*t), x)
U = simplify(U);