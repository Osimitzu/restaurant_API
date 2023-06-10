# Restaurant API

## Crear un usuario

Vamos a omitir el envio de correos y las validaciones.

## Levantar una orden de compra

Una orden esta relacionada con una mesa
Una orden esta relacionada con un usuario (mesero)

Al crear la orden de compra viene vacia

## Agregar productos a la orden

-->----------------------------------------------------------------------------<--
-->----------------------------------------------------------------------------<--
-->----------------------------------------------------------------------------<--

# Notas de clase

No debemos meter logica de negocio dentro de los controladores.

_Repositorios_

> Comunicación directa con la base de datos.

_Servicios_

> Implementa la logica del negocio usando los repositorios.

**_Paradigmas de programación_**

programación estructurada --> Lenguajes como C
programación funcional --> js / react (su funcionalidad se enfoca en "funciones")
programación orientada a objetos POO --> js, C#, C++, Java, python, php
el mas feo para POO es JS

_Para crear la mesa directamente en psql_
INSERT INTO tables (capacity, "createdAt", "updatedAt") VALUES (4, NOW()::timestamp, NOW()::timestamp);
