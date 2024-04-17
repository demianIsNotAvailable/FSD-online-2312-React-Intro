Generar mensajes de error en un input:

Primero necesito comprobar si el input cumple las condiciones necesarias. Pues me escribo una función que, dado el valor del input junto con el tipo de input que es, me devuelva el resultado del test. Ya tengo una forma de comprobar un input.

Ahora necesitaré llevar la cuenta del estado de mis inputs para poder hacer algo con ellos. Yo a eso lo llamo useState. Y como no quiero tener que andar haciendo useStates distintos para cada input, lo crearé como un objeto con distintas claves como hacía para las credenciales del registro y el login, etc...