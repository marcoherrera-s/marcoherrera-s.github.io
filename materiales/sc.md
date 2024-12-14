@def title = "Sólidos cristalinos"
@def tags = ["syntax", "code", "math"]

# La estructura de sólidos cristalinos

   - Todos los cristales son sólidos, pero no todos los sólidos son cristales.
   - Un sólido se considera cristalino cuando su estructura está compuesta por átomos organizados en un patrón repetitivo tridimensional.

   - Se puede comparar con un muro de ladrillos: el ladrillo es al muro lo que la celda unitaria es al cristal.
   - La celda unitaria es la unidad estructural más pequeña que, al repetirse en el espacio, forma el cristal completo.

   - La orientación uniforme no es un requisito para todos los cristales.
   - Cuando existe una orientación uniforme en todo el sólido, se denomina un cristal perfecto o monocristal.

## Sistemas y redes cristalinas
1. Sistemas cristalinos:
   - Existen 7 sistemas cristalinos posibles en tres dimensiones:
     a) Cúbico
     b) Tetragonal
     c) Ortorrómbico
     d) Monoclínico
     e) Triclínico
     f) Hexagonal
     g) Romboédrico (o trigonal)

![sistemas](/materiales/image.png)

2. Celdas unitarias y redes de Bravais:
   - Hay 14 tipos de celdas unitarias, conocidas como las 14 redes de Bravais.
   - Estas representan los 14 grupos de simetría puntual posibles en estructuras cristalinas.
![bravais](/materiales/image-1.png)

   - La idea detrás del de que haya un número finito de redes de Bravais es que, en cualquier dimensión dada, solo hay un número limitado de formas distintas de organizar puntos en el espacio que se repiten periódicamente. [Link](https://math.stackexchange.com/questions/500505/proof-of-the-finite-number-of-bravais-lattices)

Aquí tenía una duda de por qué 14. De dónde salen ese número. [Aquí](https://www.reddit.com/r/learnmath/comments/htcyzz/comment/fygge40/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) aclaré un poco mi duda. 

3. Estructuras cristalinas comunes:
   Se suele concentrar el estudio en 4 estructuras principales:
   a) Cúbica simple (CS)
   b) Cúbica centrada en el cuerpo (BCC, del inglés Body-Centered Cubic)
   c) Cúbica centrada en las caras (FCC, del inglés Face-Centered Cubic)
   d) Hexagonal compacta (HCP, del inglés Hexagonal Close-Packed)

## Factor de empaquetamiento atómico
1. Definición:
   - El factor de empaquetamiento atómico (PF, del inglés Packing Factor) se define como:
     $PF = \frac{\text{Volumen ocupado por átomos}}{\text{Volumen total de la celda unitaria}}$

2. Características generales:
   - Siempre que se trabaje con modelos de esferas duras para representar átomos, habrá algo de espacio libre entre ellas.
   - El factor de empaquetamiento es una medida de la eficiencia en el uso del espacio en la estructura cristalina.

3. Factores de empaquetamiento para estructuras comunes:
   a) Cúbica simple (CS):
      - PF = 0.52 (52%)
      - Esta estructura es rara entre los metales debido a su baja eficiencia de empaquetamiento.
      - El polonio es el único elemento que prefiere esta estructura a temperatura ambiente.

   b) Cúbica centrada en el cuerpo (BCC):
      - Puede visualizarse como una estructura cúbica simple con un átomo adicional en el centro de la celda.
      - Contiene 2 átomos por celda unitaria.
      - PF ≈ 0.68 (68%)
      - Más densa que la estructura cúbica simple.

   c) Cúbica centrada en las caras (FCC):
      - Puede visualizarse como una estructura cúbica simple con átomos adicionales en el centro de cada cara.
      - Contiene 4 átomos por celda unitaria.
      - PF ≈ 0.74 (74%)

   d) Hexagonal compacta (HCP):
      - Aunque tiene una geometría diferente, su factor de empaquetamiento es igual al de la estructura FCC.
      - PF ≈ 0.74 (74%)

4. Implicaciones:
   - Las estructuras FCC y HCP son las más eficientes en términos de empaquetamiento.
   - Esto explica por qué muchos metales adoptan estas estructuras en condiciones normales.

## Consideraciones adicionales
1. Polimorfismo:
   - Algunos materiales pueden adoptar diferentes estructuras cristalinas dependiendo de las condiciones de temperatura y presión.

2. Defectos cristalinos:
   - En la realidad, los cristales perfectos son raros. La mayoría de los materiales cristalinos contienen defectos que afectan sus propiedades.

3. Importancia en ciencia de materiales:
   - La estructura cristalina determina muchas de las propiedades físicas, mecánicas y electrónicas de los materiales sólidos.

