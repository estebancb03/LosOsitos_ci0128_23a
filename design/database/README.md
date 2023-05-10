# Base de datos

## Diseño conceptual

La siguiente imagen muestra el diseño conceptual de la base de datos.

![](conceptual.jpg)

## Diseño relacional

Con base en el diagrama conceptual anterior, se realizó el diseño relacional. Para mappear las entidades involucradas en una ISA, se utilizó el mappeo 8A, dado que se consideró que este mappeo tiene más sentido para el contexto en cuestión. Un ejemplo de esto es que las superclases se encuentran relacionadas a otras entidades, por lo cual conviene conservar esta superclase en el diseño relacional.

## Script

La [script SQL](BD_LosOsitos.sql) con la que se crearon las tablas en la base de datos se puede encontrar en este directorio.
