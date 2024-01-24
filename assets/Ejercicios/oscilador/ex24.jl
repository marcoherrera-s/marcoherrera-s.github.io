# This file was generated, do not modify it. # hide
sol_amortiguado = solve(prob_amortiguado, Tsit5())
sol_amortiguado[1:10]