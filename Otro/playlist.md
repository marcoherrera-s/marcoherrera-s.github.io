@def title = "playlist"
@def tags = ["syntax", "code", "math"]


# CÓMO HACER UNA PLAYLIST (LA FORMA CORRECTA)

A ver, el título es pura pretensión y clickbait. Hay infinitas formas igual de válidas de hacerlo. Lo que pasa es que últimamente he estado descubriendo nueva música de un género en específico y mi dinámica era sencilla; meter todas las canciones que me gusten en una única playlist.

Así le estuve haciendo un buen rato hasta que sentí que no estaba bien, algo dentro de mí necesitaba un orden dentro de la playlist. Y la verdad es que no me rompí tanto la cabeza (hasta ese momento) y pensé en algo sencillo, ordenar las canciones en una especie de tono creciente, así que primero estén las que se sientan más tranquilas y el tono vaya subiendo hasta las más "ruidosas".

Mi quebradera de cabeza comenzó cuando me dije: a ver, no. No vas a ponerte a ordenar manualmente tantas canciones, se siente que podría haber muchos errores en el proceso.

Pensé en que tenía que haber algo más rápido y confiable, y pues al final de cuentas, la música es sonido, el sonido son ondas y a las ondas las podemos analizar. Wow, descubriendo la rueda por enésima vez.

La primera aproximación que tuve fue con la métrica **RMS**, esta simplemente mide el nivel promedio de la amplitud de una señal, como una pista de audio. Básicamente nos dice cuán fuerte o intenso suena algo en promedio.

Hay una librería en Python; **librosa**, que tiene implementadas muchas funciones para analizar audio, una de esas es justamente la métrica RMS. Entonces dije, ok, esto será fácil. Ya que literalmente meto la canción y me regresa el valor RMS, meto otra canción y me regresa el valor RMS, y así con todas las canciones que quiera, ordeno esos valores de menor a mayor y ya tengo mi playlist.

Entonces hice una prueba para calar, hice una playlist de 4 canciones, estas las ordené de la forma que yo buscaba, que se sintieran acá de la menos movida a la más movida. Las escuché cuidadosamente, tomé mi criterio y las ordené. Ahora era poner a prueba el código, si hacía lo mismo con las 4 canciones y obtenía el mismo resultado entonces podía confiar en el código.

Meto las 4 canciones, me regresa una lista ordenada. Recibo un orden diferente. No entiendo por qué. Ahí es cuando me digo, ok creo que esto no va a funcionar.

Pero entonces aparece una luz de esperanza, y es que resulta que de por sí la aproximación que estaba tomando no me gustaba demasiado por una sencilla razón, esta es que para analizar las canciones, claramente tendría que tener las pistas de audio en mi computadora, y pues las tengo en spotify, entonces no es tan directo poder tener estas pistas (☠︎︎☠︎︎☠︎︎). Justo en esta situación en la que ni el resultado fue bueno, ni me estaba gustando que tenía que estar descargando las canciones fue que me di cuenta de que podía ocupar la API de spotify. Entré a su página para desarrolladores, chequé la documentación para crear aplicaciones web, su API Web, y wow, un paraíso. Era todo incluso más de lo que necesitaba y ahora las posibilidades de hacer cosas divertidas eran enormes.

Pues usando el API, podía acceder a características de las canciones como su danceability, energy, instrumentalness, loudness, tempo, valance y mucho más. Y lo mejor, sin tener que descargar las canciones, únicamente con el ID de la pista de spotify. Me emocioné.

Empecé a construir la aplicación, obtuve mis Keys, ajusté el redirect URL, primero hice algo sencillo, para ver que mis credenciales estuvieran bien, y sí, todo parecía listo.

El código tenía que ser sencillo, te pide el link de la playlist, y le dices que para cada canción te regrese su loudness, o su energy, o lo que sea, y al final te ordene los resultados. Hice el primer intento, fallé. Me salía un error que no entendía muy bien el por qué. Así que hice lo que cualquier persona en estos tiempos hace, le pregunté a chatgpt, me dijo que la solución era tal y tal porque tal y tal. Intenté lo que me dijo, error también.

Estuve un raaaato, tratando de solucionar el error que obtenía. Tonto yo, pues desde que entré a la API Web, justamente en la documentación para obtener las características de las canciones, ya había visto que decía _Deprecated_. Pero en mi mente, y por las veces que he visto esa palabra en este ambiente, para mí, en el peor caso significaba que simplemente los desarrolladores de esos métodos en específico, iban a dejar de actualizarlos, para mudarse a otros métodos o algo por el estilo. Pero nunca pasó por mi mente el hecho de que significara, adiós, no más métodos, les quitamos todo, los odiamos, no lo intenten, ya no hay nada aquí, no pierdan su tiempo. Lo peor de todo es que esto es relativamente hace poco, tiene apenas poco más de un mes. Ya navegando en los foros, me di cuenta de que claramente esto fue una desgracia para muchos, si yo me sentí mal, no puedo imaginar la decepción de personas que se encontraban creando cosas interesantes desde hace mucho tiempo ya, y un día, SIN AVISO, la maldita compañía que [financia guerras](https://migala.mx/au-revoir-spotify/), les quitara el acceso a esos métodos de su API. La verdad es que desde hace tiempo he pensado en cambiarme a otra app, o simplemente hacer mi propio servidor con una computadora antigua y ahí tener toda mi música. Pero bueno, lo de mi servidor es para otra entrada, ya casi está listo.

Aquí dejo algunos ejemplos de lo que diferentes desarrolladores opinaron sobre lo que pasó:

> Literalmente he estado trabajando en una aplicación que utilizaba exactamente estas APIs durante los últimos meses. Estaba intentando crear una app que ayudara a los usuarios a construir playlists encontrando pistas candidatas geniales, creando colas y enviándolas a Spotify como listas de reproducción (para usuarios avanzados, tipo DJs). Un aviso habría estado bien, al menos. Estaba literalmente en medio del desarrollo cuando mi app básicamente dejó de funcionar... No hay ningún otro lugar donde obtener datos como estos, así que, efectivamente, acaban de destruir el trabajo de los últimos meses para mí. Muy agradecido 🙏. - [igold](https://community.spotify.com/t5/Spotify-for-Developers/Changes-to-Web-API/m-p/6540572/highlight/true#M15637)

> Al igual que los demás comentarios anteriores, he invertido meses de esfuerzo y escrito miles de líneas de código para desarrollar una aplicación que dependía en gran medida de estos endpoints. Aunque entiendo el compromiso de Spotify con mejorar la seguridad, la naturaleza repentina de estos cambios ha resultado en una pérdida significativa de tiempo y esfuerzo para muchos desarrolladores. Insto al equipo de Spotify a considerar la implementación de un proceso que permita a las aplicaciones actualmente en modo de desarrollo solicitar una revisión para mantener el acceso a los endpoints en los que han estado confiando. Esto ayudaría enormemente a los desarrolladores afectados por estos cambios y contribuiría a mantener el espíritu innovador de la comunidad de desarrolladores de Spotify. - [cytokineking](https://community.spotify.com/t5/Spotify-for-Developers/Changes-to-Web-API/m-p/6540636/highlight/true#M15643)

Entonces bueno, ese fue mi final con spotify. Prometía mucho.

Después de ese intento largo sin éxito, decidí que la mejor opción sería regresar con **librosa**, tal vez agregar otra métrica, y ahora hacer el orden de acuerdo a alguna fórmula que le dé cierto peso a RMS, cierto peso a otra métrica y a ver qué sale.

Pero entonces descubrí **Pyloudnorm**, también es una librería en Python que mide y ajusta el volumen percibido (loudness) de archivos de audio según un estándar, calculando niveles en **LUFS** (unidades de loudness).

El estándar que usa es **ITU-R BS.1770-4**, es usado para medir **la intensidad percibida** de un sonido (loudness) en lugar de la energía pura que mide el **RMS**. Esto cambia lo que había intentado antes porque nuestros oídos no perciben todos los sonidos de la misma manera, incluso si tienen la misma energía.

Este estándar ajusta las mediciones según cómo escuchamos los sonidos, por lo que vi, eso lo logra con un filtro que simula nuestra percepción auditiva.

Entonces ahora, en lugar de medir la energía en bruto (como RMS), toma en cuenta factores temporales, da más importancia a los momentos donde el sonido es constante y menos a los picos muy breves.

Básicamente, lo que entendí, tal vez mal, es que RMS mide la fuerza física del audio e **ITU-R BS.1770-4** mide cómo sentimos el volumen con nuestros oídos.

Ya entendida esta parte, con esta herramienta sería igual de fácil que en el principio hacer el análisis que busco. De hecho en la documentación de **pyloudnorm** se jactan de que con tres líneas de código es suficiente para hacer un análisis de loudness.

---

## Cómo hacerlo

Todo el código lo he puesto en un repositorio en GitHub para que tanto para mí como para cualquier persona que quiera intentar esto le sea fácil.

Lo primero que tenemos que hacer es clonar el repositorio y posicionarnos en esa carpeta, por lo que en la terminal hacemos:

```bash
git clone https://github.com/marcoherrera-s/LoudnessSorter.git
cd LoudnessSorter
```

A mí en Python me gusta trabajar con entornos virtuales, porque a veces tengo la sensación de que Python tiene un problema con sus dependencias, versiones y esas cosas. Por ejemplo, yo tengo la última versión de Python, pero para usar la primera paquetería que mencioné, me pedía ocupar una versión anterior. Entonces, hacer proyectos en entornos virtuales me ayuda tener todo ordenado. Así cuando ya no quiero nada de ese proyecto, simplemente borro el entorno y ya. Sólo paqueterías que considero de uso muy común las instalo de manera global, como Numpy, Pandas, etc. Entonces, creamos el entorno y lo activamos:

```bash
python -m venv nombre
source nombre/bin/activate  # On Windows: venv\Scripts\activate
```

Ya en nuestro entorno, instalamos las paqueterías que vamos a necesitar:

```bash
pip install pyloudnorm soundfile tqdm
```

En el código hay una sección en donde se tiene que poner la carpeta en donde van a estar las canciones, esto para especificar la dirección por defecto, pero también se podría hacer desde la terminal.

Yo puse el código que literal solo es un archivo .py en el mismo lugar en donde están todas mis canciones.

Y si todo sale bien, deberíamos ver algo como esto:

![alt text](/Otro/image-5.png)

Hay más detalles del código pero todo eso lo dejo en el [repositorio](https://github.com/marcoherrera-s/LoudnessSorter).

Ya que tienes tu lista de canciones ordenadas acorde a esa métrica, toca la parte menos divertida, que de hecho no hubiera hecho falta si Spotify nos prestara su API. Pero bueno, toca ordenar la playlist.

Esta playlist que se irá actualizando, está hecha de esta forma:

~~~
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/18LBAHR8bKnmkqPLWdOJKO?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
~~~