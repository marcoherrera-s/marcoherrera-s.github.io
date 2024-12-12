+++
title = "k2pdfopt"
tags = ["syntax", "code"]

+++

# CÓMO USAR UNA KINDLE PARA LEER PDF's

a lo largo del tiempo, ha sido común que los libros, ya sean académicos o literarios, se compartan por medio del formato PDF. si nuestro propósito es usarlos en una computadora o tableta, no hay problema con ese formato. el problema empieza en otros dispositivos. se sabe que si te gustaría leer un libro en tu celular sin tener que estar leyendo un pdf en modo horizontal, con un tamaño de letra diminuto, probablemente la mejor opción para hacerlo sea buscar el libro en formato _.epub_.

el problema con el kindle es similar, si queremos leer un libro, simplemente buscamos el epub, lo metes a calibre, y lo transfieres. fin de la historia. 

tal vez, si te quieres ver más rimbonte, puedes usar otros formatos, existe el .mobi (desactualizado), .kfx (mi favorito), .azw3, y muchos más, cada uno con características diferentes, sutiles, pero diferentes. 

ahora sí, el problema, viene cuando quieres leer un pdf, pero el formato .epub o similares ni siquiera existen. esto es común en libros académicos. veamos un ejemplo. 


imaginemos que queremos leer este libro en el/la kindle (no sé qué género es, pero creo que me gusta más que sea _la_):

![libro](https://m.media-amazon.com/images/I/61wZBUYSWPL._UF894,1000_QL80_.jpg)

si hacemos el intento medio ingenuo, que es simplemente descargar nuestro pdf y transferirlo. obtendríamos el siguiente resultado, las siguiente imágenes son capturas de pantalla directas de la kindle:

![libroantes](/Otro/pdfantes.png)

esto no es tan mortal, digo, no es que se vea horrible. pero esa letra tan pequeña en una pantalla que de por sí ya es pequeña, con el tiempo, agota. 

entonces, la solución que a mi me gusta se encuentra en un software libre llamado [k2pdfopt](https://www.willus.com/k2pdfopt/). 

la interfaz gráfica del programa se ve medio vieja, y además la primera vez que la usé no se me hizo tan intuitiva. es por eso que creo que si ya se cuenta con linux, es mejor buscar cómo instalar el software en tu distribución. eso es fácil, por lo regular, instalar cosas en linux es mucho más fácil que en windows. 

una vez instalado, abrimos una terminal desde la carpeta en la que está ubicado el libro y ejecutamos `k2pdfopt libro.pdf`, y obtenemos:

![terminal](/Otro/image.png)

aquí vemos muchas opciones, la verdad no sé qué sean la mayoría pero no importa, sólo nos vamos a interesar en una. en la de `device selection`, entonces escribimos la letra `d`y damos enter.

![device](/Otro/image-1.png)

si reconoces tu dispositivo en la lista, pues ganga. pero aunque lo hicieras, para mayor seguridad, yo preferiría ir a esta [página](https://en.wikipedia.org/wiki/Amazon_Kindle#Specifications) y buscar las especificaciones de tu dispositivo. por ejemplo, la mía es esta:

![kindle](/Otro/image-2.png)

de aquí, sólo nos importan los datos de las dimensiones y de los píxeles por pulgada (PPI). entonces ya con esa información en la terminal seleccionamos la opción `24. Other (specify width, height, etc.)`

nos va a pedir justo esa información, y pues simplemente la ponemos:

![datos](/Otro/image-3.png)


ya después simplemente le damos enter a todo hasta que empice a convertir nuestro archivo.

![cobertir](/Otro/image-4.png)


una vez que termine, tendremos nuestro nuevo pdf, que en nuestro dispositivo se verá de la siguiente forma:

![final](/Otro/pdfdespues.png)

y bueno, para compararlos, tenemos los resultados:

~~~
<div style="display: flex; align-items: flex-start;">
  <figure style="margin-right: 10px; text-align: center;">
    <img src="/Otro/pdfantes.png" alt="antes" style="width: 200px;">
    <figcaption>Antes</figcaption>
  </figure>
  <figure style="text-align: center;">
    <img src="/Otro/pdfdespues.png" alt="después" style="width: 200px;">
    <figcaption>Después</figcaption>
  </figure>
</div>

~~~

nuestro nuevo resultado, al menos para mi gusto, creo que es más cómodo.