# This file was generated, do not modify it. # hide
cinetica = m .* (velocidad.^2 ./ 2) # El (.) en las operaciones en Julia significa que haremos la operación para cada entrada del vector
potencial = k .* (posicion.^2 ./ 2)
energia = cinetica + potencial