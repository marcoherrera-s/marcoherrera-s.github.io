# This file was generated, do not modify it. # hide
function oscilador(du, u, p, t)
    b, k, m, F = p 
    -(k/m) * u - (b/m) * du + F(t) 
end