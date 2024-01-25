# This file was generated, do not modify it. # hide
function spiral_matrix(n::Int)
    dirs = [(0, 1), (-1, 0), (0, -1), (1, 0)]
    cur = maxsteps = 1
    steps = num = 0
    pos = [n ÷ 2 + 1, isodd(n) ? n ÷ 2 + 1 : n ÷ 2]
    M = Matrix{Int}(undef, n, n)

    while num < n^2
        num += 1
        M[pos[1], pos[2]] = num
        steps += 1

        pos .+= dirs[cur]

        if steps == maxsteps
            steps = 0
            if iseven(cur)
                maxsteps += 1
            end
            cur += 1
            if cur > 4
                cur -= 4
            end
        end
    end

    return M
end