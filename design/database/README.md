# Base de datos

## Diseño conceptual

La siguiente imagen muestra el diseño conceptual de la base de datos.

![](conceptual.jpg)

## Diseño relacional

Con base en el diagrama conceptual anterior, se realizó el diseño relacional. Para mappear las entidades involucradas en una ISA, se utilizó el mappeo 8A, dado que se consideró que este mappeo tiene más sentido para el contexto en cuestión. Un ejemplo de esto es que las superclases se encuentran relacionadas a otras entidades, por lo cual conviene conservar esta superclase en el diseño relacional.

## Diseño relacional

En la ISA Person utilizamos 8A debido a que tenemos un ST consideramos que sería mejor tener a las subclases en tablas diferentes para mayor control y diferenciación.

En la ISA Employee tenemos un 8B ya que tenemos un DT y la unica diferencia entre las subclases es el tipo, que usaremos para dar permisos y nos funcionaria mas en un atributo que tener diferentes tablas.

En la ISA Reservation utilizamos 8A porque aunque tenemos un DT debemos usar 8A debido a la relación de Camping con Spot para evitar que tuplas de Picnic tengan esta relación si utilizamos 8B.

En el siguiente enlace se puede observar el PDF con el mapeo realizado:

[Diseño relacional de la base de datos](relationalMapping.pdf)

Con base en el diagrama conceptual anterior, se realizó el diseño relacional. Para mappear las entidades involucradas en una ISA, se utilizó el mappeo 8A, dado que se consideró que este mappeo tiene más sentido para el contexto en cuestión. Un ejemplo de esto es que las superclases se encuentran relacionadas a otras entidades, por lo cual conviene conservar esta superclase en el diseño relacional.

## Scripts

* Script SQL de creación de [tablas](BD_LosOsitos.sql)
* Script SQL de creación de [procedimientos almacenados](procedures.sql)
* Script SQL de creación de [triggers](trigger.sql)
