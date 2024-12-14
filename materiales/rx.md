@def title = "Rayos X"
@def tags = ["syntax", "code", "math"]

# Rayos X

### 1.1 Definición de Difracción
La difracción se define como el fenómeno ondulatorio que implica la curvatura y dispersión de ondas al encontrarse con obstáculos o aberturas cuyas dimensiones son comparables a la longitud de onda del fenómeno incidente. Este proceso resulta en patrones de interferencia característicos.

![difrac](/materiales/image-2.png)

### 1.2 Asociación con Rayos X
La asociación entre rayos X y difracción se debe a:
- Longitud de onda corta ($\lambda$) de los rayos X, típicamente en el rango de 0.01 a 10 nanómetros.
- Alta frecuencia ($\nu$), relacionada inversamente con la longitud de onda según la ecuación:
  $c = \lambda \nu$
  donde $c$ es la velocidad de la luz.

Esta combinación de longitud de onda corta y alta frecuencia permite que los rayos X interactúen con estructuras atómicas y moleculares de manera altamente resolutiva.

## 2. Difracción de Rayos X en Caracterización Estructural

### 2.1 Principio Básico
La difracción de rayos X (XRD, por sus siglas en inglés) es una técnica no destructiva que permite analizar la estructura cristalina de los materiales a nivel atómico.

### 2.2 Identificación de Fases
- La "fase" en este contexto se refiere a una porción de un sistema que es físicamente homogénea y distinta, con una estructura cristalina específica.
- XRD permite identificar fases cristalinas basándose en los patrones de difracción únicos producidos por cada estructura cristalina.

### 2.3 Información sobre Dimensiones de Celda Unitaria
- La celda unitaria es la unidad estructural más pequeña que, al repetirse, forma el cristal completo.
- Los patrones de difracción proporcionan información sobre las distancias interplanares en la red cristalina.
- Utilizando la ley de Bragg (que se discutirá más adelante), es posible calcular las dimensiones de la celda unitaria a partir de estos patrones.

### 2.4 Cristales como Rejillas de Difracción
Los materiales cristalinos actúan como rejillas de difracción tridimensionales para los rayos X debido a:
- La periodicidad regular de los átomos en la estructura cristalina.
- Las distancias interatómicas en cristales (del orden de ångströms) son comparables a la longitud de onda de los rayos X.
- Esta similitud en escala permite que los rayos X sean difractados por los planos atómicos del cristal, produciendo patrones de interferencia característicos.

## 3. Producción de Rayos X

### 3.1 Tubo de Rayos X
Un tubo de rayos X típico consta de:
- Cátodo: Generalmente un filamento de tungsteno calentado que emite electrones por emisión termoiónica.
- Ánodo: Un objetivo metálico (target) de alto punto de fusión, como cobre o molibdeno.
- Cámara al vacío: Para permitir el libre movimiento de los electrones.

### 3.2 Proceso de Generación
1. Los electrones son acelerados desde el cátodo hacia el ánodo por un alto voltaje (típicamente 30-150 kV).
2. Al impactar en el ánodo, los electrones interactúan con los átomos del target, produciendo dos tipos de radiación:
   a) Radiación de frenado (Bremsstrahlung): Espectro continuo de rayos X.
   b) Radiación característica: Líneas espectrales discretas específicas del material del ánodo.

### 3.3 Líneas Características
Las líneas características más comúnmente utilizadas en XRD son:
- $K_\alpha$: Resultado de la transición de electrones de la capa L a la capa K.
- $K_\beta$: Resultado de la transición de la capa M a la capa K.

La línea $K_\alpha$ es preferida debido a su mayor intensidad y menor ancho espectral.

## 4. Interacción de Rayos X con la Materia y Ley de Bragg

### 4.1 Interacción Básica
Cuando los rayos X inciden sobre un material cristalino, interactúan principalmente con los electrones de los átomos. Esta interacción puede resultar en:
- Dispersión elástica (sin pérdida de energía)
- Dispersión inelástica (con pérdida de energía)
- Absorción

### 4.2 Ley de Bragg
La ley de Bragg describe las condiciones necesarias para la interferencia constructiva de ondas dispersadas por planos cristalinos:

$n\lambda = 2d \sin\theta$

Donde:
- $n$ es un número entero (orden de difracción)
- $\lambda$ es la longitud de onda de los rayos X incidentes
- $d$ es la distancia interplanar
- $\theta$ es el ángulo de incidencia (y reflexión) de los rayos X

## 5. Reglas para Determinar los Planos de Difracción en Cristales Cúbicos

Para cristales con estructura cúbica, los planos de difracción están determinados por los índices de Miller (hkl). Las reglas son:

1. Para estructuras cúbicas simples (SC): Todos los planos (hkl) difractan.

2. Para estructuras cúbicas centradas en el cuerpo (BCC):
   - Difracción ocurre cuando (h + k + l) es par.
   - No hay difracción cuando (h + k + l) es impar.

3. Para estructuras cúbicas centradas en las caras (FCC):
   - Difracción ocurre cuando h, k, y l son todos pares o todos impares.
   - No hay difracción cuando h, k, y l son una mezcla de pares e impares.

