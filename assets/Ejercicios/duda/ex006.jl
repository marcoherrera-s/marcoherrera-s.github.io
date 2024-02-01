# This file was generated, do not modify it. # hide
function cuerpo_rigido_aprox(ddu, du, u, p, t)
    g, l, Ω = p


    ddu[1] = (g * cos(t * Ω) / 3) + (u[2] * du[2]^2 / 2) - (ddu[2] / 2)
    ddu[2] = -3/2 * (g * u[2] + ddu[1]) 
end