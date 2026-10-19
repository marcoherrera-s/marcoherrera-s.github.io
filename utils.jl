using TOML

# ------------------------------------------------------------------
# Helpers de escape HTML (defensa en profundidad para datos TOML)
# ------------------------------------------------------------------

"""
    _escape_html(s)

Escapa los caracteres HTML básicos en una cadena. Se usa antes de
interpolar valores de TOML en plantillas HTML.
"""
function _escape_html(s::AbstractString)
    return replace(replace(replace(replace(s,
        "&" => "&amp;"),
        "<" => "&lt;"),
        ">" => "&gt;"),
        "\"" => "&quot;")
end

# ------------------------------------------------------------------
# Cuadrícula de libros
# ------------------------------------------------------------------

"""
    hfun_librosgrid()

Genera una cuadrícula de libros leyendo datos desde `_data/libros.toml`.
Uso en markdown: `{{librosgrid}}`
"""
function hfun_librosgrid()
    data_path = joinpath(@__DIR__, "_data", "libros.toml")
    if !isfile(data_path)
        return "<p>Error: No se encontró _data/libros.toml</p>"
    end

    data = TOML.parsefile(data_path)
    libros = get(data, "libro", [])

    if isempty(libros)
        return "<p>No hay libros disponibles.</p>"
    end

    html = "<div class=\"libros-grid\">\n"

    for libro in libros
        titulo = _escape_html(get(libro, "titulo", "Sin título"))
        autor  = _escape_html(get(libro, "autor", "Autor desconocido"))
        cover  = get(libro, "cover", "")
        url    = _escape_html(get(libro, "url", "#"))

        # Las portadas mantienen aspect-ratio 2/3 vía CSS, pero damos
        # dimensiones intrínsecas para evitar CLS.
        img = if !isempty(cover)
            "<img src=\"$(cover)\" alt=\"$(titulo)\" width=\"200\" height=\"300\" loading=\"lazy\" decoding=\"async\">"
        else
            ""
        end

        html *= """
  <figure class="libro-card">
    <a href="$(url)">
      $(img)
      <figcaption>$(titulo), <strong>$(autor)</strong></figcaption>
    </a>
  </figure>
"""
    end

    html *= "</div>"
    return html
end

# ------------------------------------------------------------------
# URL canónica
# ------------------------------------------------------------------

"""
    hfun_canonical()

Devuelve la URL canónica de la página actual. Usa `canonical_url` si la
página la define; si no, la construye a partir de `fd_full_url` quitando
el `index.html` final (p. ej. `https://…/Hamilton/poisson/`).
Uso en plantillas: `{{canonical}}`
"""
function hfun_canonical()
    custom = locvar(:canonical_url)
    custom isa AbstractString && !isempty(custom) && return _escape_html(custom)
    url = replace(locvar(:fd_full_url)::String, r"index\.html$" => "")
    return _escape_html(url)
end
