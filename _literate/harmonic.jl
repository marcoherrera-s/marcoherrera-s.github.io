
# ╔═╡ 278fdf2e-a5bc-11ee-3aa6-9143e42369fa
using DifferentialEquations, Plots, PlutoUI, SymPy; plotly()

# hide 

# ╔═╡ 44c95728-ec3a-47aa-a77a-53c619fd88ec
md"$\frac{d^2 x}{dt^2} = - \frac{k}{m} x$"

# ╔═╡ 4a22af04-843f-4649-a19a-8d95f6d4f0c2
  md"$\frac{d^2 u}{dt^2} = f(du, u, t, p)$"

# $\frac{d^2 u}{dt^2} = f(du, u, t, p)$

# ╔═╡ 5498f26b-ead6-4f43-b792-0a6329f9a7b2
## md"$f(du, u, t, p) = - \frac{k}{m} u$"

# ╔═╡ 223dd3c2-dacc-4009-8959-5454a2f92dd5
md"$f(du, u, t, p) = - \frac{p[1]}{p[2]} u$"

# ╔═╡ 18355e45-8d3b-4588-a8d5-229f58af8e26
function harmonic(du, u, p, t)
	dx = du
	x = u
	k, m = p #hola
	-(k/m) * x
end

lk = 4+7

# ╔═╡ 77cb4b72-17ae-4ec3-a20f-d01e34edc699
dx_begin = 0.0

# ╔═╡ 4e157dfc-4e39-4fd8-9549-2734b2f73ad1
t_inicio = 0.0

# ╔═╡ fb3c74ed-f1a2-4327-9ec0-35aa20a6b965
md"Initial position (m): $(@bind x_begin Slider(-0.25:0.01:0.25, 0.25, true))"

# ╔═╡ e414baae-7552-45ed-be55-b1631848a91b
md"Mass (kg): $(@bind m Slider(0.5:0.01:2.0, 1.0, true))"

# ╔═╡ c7df75a2-c6d6-494d-a5c9-6f8f1354af01
md"Spring constant (N/m): $(@bind k Slider(0.5:0.01:2.0, 1.0, true))"

# ╔═╡ 053b1a20-e87f-46b8-b8c9-2187a9f9dedf
p = [k, m]

# ╔═╡ f39a6c61-046c-4159-81f5-d32f048ffe98
md"Time (seconds): $(@bind t_final Slider(0.0:0.01:20.0, 20.0, true))"

# ╔═╡ 6e23ce48-118e-44f1-82a0-1fd7df3bb94e
tspan = (t_inicio, t_final)

# ╔═╡ 3462ceea-db0a-465a-9c1e-5fc2217c7f44
prob = SecondOrderODEProblem(harmonic, dx_begin, x_begin, tspan, p)

# ╔═╡ f46500a7-cb2e-4165-8769-ecb5930db9e0
sol = solve(prob)

# ╔═╡ 78145999-2317-41e2-ae7f-e0425e832c21
plot(sol,
	legend = (0.8, 0.09),
	linewidth = 2,
	title = "Simple Harmonic Motion (All Values)",
	xaxis = "Time (seconds)",
	yaxis = "Velocity (m/s) | Position (m)",
	labels = ["Velocity" "Position"],
	formatter = :plain,
	widen = true,
	xlims = (0.0, 20.0),
	ylims = (-0.5, 0.5)
)

# ╔═╡ effb933d-e5d9-4344-aca7-98544b822582
phase = plot(sol, idxs = (2, 1),
	legend = false,
	linewidth = 2,
	title = "Simple Harmonic Motion (Phase Space)",
	xaxis = "Position (m)",
	yaxis = "Velocity (m/s)",
	formatter = :plain,
	widen = true,
	xlims = (-0.5, 0.5),
	ylims = (-0.5, 0.5),
	aspect_ratio = 1.1
);

# ╔═╡ 05ba182d-e64f-4117-98b0-0ffe6f80bdb3
position = sol(t_final)[2]

# ╔═╡ 6c2e494e-3260-4f9a-b57f-92cd14ebae3a
velocity = sol(t_final)[1]

# ╔═╡ aa324a52-0c5e-4c45-986e-a66016a6bf58
scatter!(phase, (position, velocity), color = :red, markersize = 5)

# ╔═╡ 00288c13-409d-45e6-94dc-5b8e54284874
md"$\frac{d^2 x}{dt^2} = - \frac{k}{m} x - \frac{b}{m} \frac{dx}{dt}$"

# ╔═╡ a02cfa3d-8467-4dd6-9660-3b8fee562c89
function harmonic_damped(du, u, p, t)
	dx = du
	x = u
	b, k, m = p
	-(k/m) * x - (b/m) * dx
end

# ╔═╡ 25f7c089-9eb6-4a11-8272-9856608e2479
md"Friction: $(@bind b Slider(0.0:0.01:5.0, 1.0, true))"

# ╔═╡ f786e723-5233-448c-8e12-b3c05c7e39b5
p_damped = [b, k, m]

# ╔═╡ a3c6fea1-eef7-4dc4-a4f0-838222f5b23a
prob_damped = SecondOrderODEProblem(harmonic_damped, dx_begin, x_begin, tspan, p_damped)

# ╔═╡ 742b451e-b99f-4659-a561-1802985133de
sol_damped = solve(prob_damped)

# ╔═╡ 9166161e-58e5-41b0-aae8-5d5b4b7a2f05
plot(sol_damped)

# ╔═╡ 78989773-636e-4eef-9d40-524ebfa743ef
phase_damped = plot(sol_damped, idxs = (2, 1))

# ╔═╡ db4faea3-89e3-4af3-9889-0c316711e39a
plotly()


