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
