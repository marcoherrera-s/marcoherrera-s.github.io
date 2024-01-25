# This file was generated, do not modify it. # hide
function Ulam_n(n)
    M = spiral_matrix(n)
    primos = fill(RGB(0.0, 0.0, 0.0), n, n)

    for p in 1:n, q in 1:n
        if es_primo(M[p, q]) && tiene_siete(M[p, q])
            primos[p,q] = RGB(1.0, 0.0, 0.0)
        elseif es_primo(M[p, q]) 
            primos[p,q] = RGB(1.0, 1.0, 1.0)

        end
    end
    primos
end