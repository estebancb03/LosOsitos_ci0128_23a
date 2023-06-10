# Patrones de diseño implementados

## Composite

Este patrón suele implementar la anidación de componentes, es decir, se invocan componentes dentro de otros componentes, esto se puede ejemplificar en el componente ```ShowReservation``` el cual invoca varios componentes como por ejemplo ```ShowPerson```, ```ShowMainData```, ```ShowTickets```, ```ShowSpots```, ```ShowServices```, ```ShowVehicles```. A su vez los componentes de la carpeta Show invocan componentes de la carpeta Add.

Otra característica representativa de este patrón de diseño es la propagación de propiedades, osea, las propiedades se pueden propagar de manera jerárquica. Lo anterior se ve evidenciado en el componente ```ReservationList```, el cual crea un state para almacenar los datos de la reserva, este objeto se pasa al componente ```CreateReservation``` mediante el prop "reservation", y este comoponente les pasa este prop a los componentes ```AddPerson```, ```AddMainData```, ```AddTicket```, ```AddSpot```, ```AddService```, ```AddVehicle``` mediante el prop "currentRecord".

Por último, Composite tiene la finalidad de crear componentes genéricos que se puedan reutilizar en distintas partes de la aplicación. Por ejemplo, el componente ```AddPerson``` es empleado en dos componentes distintos los cuales son ```CreateReservation``` y ```ReservationStep1```. Otro ejemplo es el comoponente ```ShowTickets``` que se invoca en ```ReservationStep4```, ```ReservationStep6``` y ```ShowReservation```.

## Decorator

Se utilizan componentes "wrappers" que encapsulan o envuelven a otros componentes y se les agrega funcionalidades extras sin modificar su estructura interna. Esto se puede apreciar en el componente ```Table``` el cual puede envolver n ```TableItems``` y agregarle la funcionalidad que se desee, por ejemplo, en ```ReservationList``` se utiliza la Table y se le agrega un TableItem por cada reserva encontrada en la base de datos, estos TableItem botones del componente ```Button``` el cual permite acceder y abrir un componente ```ShowReservation```.

Al igual que con el patrón Composite, Decorator implementa encadenamiento de componentes, el cual, se puede apreciar en varias partes de la aplicación como en ```CreateReservation``` y ```ShowReservation```.

## Chain of responsability

Se utiliza este patrón en la sección de reservas para el usuario. Se pensó en el módulo de reservas como una serie de pasos encadenados en donde una vez se pasa los datos de la reserva entre todos los pasos y cada paso trabaja con estos datos de distintas maneras. Dicho lo anterior, se utiliza el componente ```Reservation```, cuyo trabajo es enviar un objeto "reservationData" a través de una cadena de "ReservationStep"s, que utilizan una función virtual```updateReservationData()``` para que cada paso pueda trabajar sobre los datos a su propia manera. El componente ```Reservation``` no conoce la implementación ni naturaleza de ninguno de los pasos de reserva; solamente interactúa con los pasos mediante la interfaz brindada.