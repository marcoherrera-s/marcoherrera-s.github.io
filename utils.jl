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

"""
    hfun_librosgrid()

Genera una cuadrícula de libros leyendo datos desde _data/libros.toml
Uso en markdown: {{librosgrid}}
"""
function hfun_librosgrid()
    # Leer el archivo TOML
    data_path = joinpath(@__DIR__, "_data", "libros.toml")
    if !isfile(data_path)
        return "<p>Error: No se encontró _data/libros.toml</p>"
    end
    
    data = TOML.parsefile(data_path)
    libros = get(data, "libro", [])
    
    if isempty(libros)
        return "<p>No hay libros disponibles.</p>"
    end
    
    # Generar HTML
    html = """<div class="libros-grid">\n"""
    
    for libro in libros
        titulo = get(libro, "titulo", "Sin título")
        autor = get(libro, "autor", "Autor desconocido")
        cover = get(libro, "cover", "")
        url = get(libro, "url", "#")
        
        html *= """
  <figure class="libro-card">
    <a href="$(url)">
      <img src="$(cover)" alt="$(titulo)" loading="lazy">
      <figcaption>$(titulo), <strong>$(autor)</strong></figcaption>
    </a>
  </figure>
"""
    end
    
    html *= "</div>"
    return html
end
