using TOML

function hfun_bar(vname)
  val = Meta.parse(vname[1])
  return round(sqrt(val), digits=2)
end

function hfun_m1fill(vname)
  var = vname[1]
  return pagevar("index", var)
end

function lx_baz(com, _)
  # keep this first line
  brace_content = Franklin.content(com.braces[1]) # input string
  # do whatever you want here
  return uppercase(brace_content)
end

function lx_nonumber(com, _)
  Franklin.PAGE_EQREFS[Franklin.PAGE_EQREFS_COUNTER] -= 1
  return "@@nonumber " * Franklin.content(com.braces[1]) * "@@"
end

# ------------------------------------------------------------------
# Helpers de imágenes
# ------------------------------------------------------------------

"""
    _webp_for(path)

Si existe una versión `.webp` junto al archivo dado (mismo nombre base,
buscado en disco bajo el directorio del sitio), devuelve la ruta web
relativa a esa versión WebP. En caso contrario devuelve `nothing`.

`path` es la URL pública (ej.: "/assets/libros/cien.jpg").
"""
function _webp_for(path::AbstractString)
    isempty(path) && return nothing
    occursin(r"^https?://", path) && return nothing
    # Quitar barra inicial para mapear a disco
    rel = startswith(path, "/") ? path[2:end] : path
    base, ext = splitext(rel)
    isempty(ext) && return nothing
    # Verificar que es una imagen rasterizada habitual
    lower_ext = lowercase(ext)
    lower_ext in (".jpg", ".jpeg", ".png") || return nothing
    webp_disk = joinpath(@__DIR__, base * ".webp")
    isfile(webp_disk) || return nothing
    return "/" * base * ".webp"
end

"""
    _picture_html(src; alt, width=nothing, height=nothing, class="", lazy=true)

Genera un bloque `<picture>` con fuente WebP cuando existe en disco,
y un `<img>` fallback con `loading="lazy"` y `decoding="async"`.
"""
function _picture_html(src::AbstractString;
                       alt::AbstractString = "",
                       width = nothing,
                       height = nothing,
                       class::AbstractString = "",
                       lazy::Bool = true)
    webp = _webp_for(src)
    dims = ""
    if width !== nothing
        dims *= " width=\"$(width)\""
    end
    if height !== nothing
        dims *= " height=\"$(height)\""
    end
    cls = isempty(class) ? "" : " class=\"$(class)\""
    loading_attr = lazy ? " loading=\"lazy\" decoding=\"async\"" : " decoding=\"async\""
    img_tag = "<img src=\"$(src)\" alt=\"$(alt)\"$(dims)$(cls)$(loading_attr)>"

    if webp === nothing
        return img_tag
    else
        return """<picture>
  <source srcset="$(webp)" type="image/webp">
  $(img_tag)
</picture>"""
    end
end

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
        titulo = get(libro, "titulo", "Sin título")
        autor  = get(libro, "autor", "Autor desconocido")
        cover  = get(libro, "cover", "")
        url    = get(libro, "url", "#")

        # Las portadas mantienen aspect-ratio 2/3 vía CSS, pero damos
        # dimensiones intrínsecas para evitar CLS.
        img = _picture_html(cover; alt = titulo, width = 200, height = 300)

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

"""
    lx_picture(com, _)

Macro de Franklin: `\\picture{src}{alt}` produce un `<picture>` con WebP
si existe la versión `.webp` correspondiente, o un `<img>` lazy con
`alt` en caso contrario.
"""
function lx_picture(com, _)
    src = Franklin.content(com.braces[1])
    alt = length(com.braces) >= 2 ? Franklin.content(com.braces[2]) : ""
    return _picture_html(src; alt = alt)
end
