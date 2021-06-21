- No funciona el `<button />` de "Volver" en `<Character.js>`, no tiene acción de `onClick`.

- No funciona el buscador por nombre, si busco "rick" no me devuelve nada. Esto sucede porque siempre estás usando la misma URL y sólo acepta IDs, para buscar por nombre leé la parte de [la documentación](https://rickandmortyapi.com/documentation/#character) que explica cómo filtrar a los characters, en este caso sería por `name`.
  -  Vas a tener que hacer la `request` a una URL cuando se busque al azar y a otra URL cuando se busque por nombre.