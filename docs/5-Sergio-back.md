---
sidebar_position: 5
title: Sergio - ASP.NET (back)
---

```c# title="Este ejemplo hace uso de las siguientes librerias"
```

## Empezemos

Para facilitar la creacion de **API Web**, crearemos una nueva cmd desde el escritorio. Logrando asi que estes directamente en la ruta del escritorio y poder tener visiblemente la carpeta de desarrollo mas adelante.

![abriendo terminal desde el escritorio](pathname:///exposition-net-framework/img/asp_net_front/abriendo-terminal-desde-el-escritorio.png)

Fijate bien, en la ruta del cmd.

![cmd con la ruta de escritorio](pathname:///exposition-net-framework/img/asp_net_front/cmd-con-la-ruta-de-escritorio.png)

Creemos nuestra aplicacion web.

![creamos nuestra api](pathname:///exposition-net-framework/img/asp_net_back/creamos-nuestra-api.png)

```bash
dotnet new web -o MiPrimeraApiConDotNet -f net6.0
```
Si todo salio bien, tendras los siguientes mensajes en la **consola de comandos** o **cmd**.
Los mensajes de la **cmd** indican que el proyecto fue creado exitosamente y te muestran la ruta donde se creo en este caso fue en escritorio.

![mensaje de creacion de la api correctamente](pathname:///exposition-net-framework/img/asp_net_back/mensaje-de-creacion-de-la-api-correctamente.png)

Si observamos el escritorio, comprobaremos que se ha creado una carpeta con el nombre de nuestro proyecto.

![carpeta del proyecto](pathname:///exposition-net-framework/img/asp_net_back/carpeta-del-proyecto.png)

Bien, nos dirigimos a la carpeta del proyecto. La cual se encuentra en el escritorio.
Damos click izquierdo,Despues click en la opcion **Show more options** o **mostrar mas opciones**.

![opcion mostrar mas opcines archivo del proyecto](pathname:///exposition-net-framework/img/asp_net_front/opcion-mostrar-mas-opcines-archivo-del-proyecto.png)

Seleccionamos la opcion que dice abrir con visual studio.

![opcion abri con visual studio](pathname:///exposition-net-framework/img/asp_net_front/opcion-abri-con-visual-studio.png)

## Abriendo nuestro proyecto

Nos dirigimos a la ventana donde estan nuestros archivos del proyecto que se encuentra a la derecha.

![Mostrando archivos del proyecto](pathname:///exposition-net-framework/img/asp_net_back/Mostrando-archivos-del-proyecto.png)

Observamos un archivo llamado **Program.cs** este archivo es donde nosotros asignaremos nuestras rutas las cuales llevaran logica de programacion usando c#.

Damos doble click en el archivo **Program.cs**.

![abrimos el archivo Programa.cs](pathname:///exposition-net-framework/img/asp_net_back/abrimos-el-archivo-ProgramaCS.png)

Veremos unas cuantas cosas interesantes en el codigo.

:::note
La primero marcado indica el metodo http que se realizara cuando solicitemos la informacion a la API, Lo segundo 
:::

<details>
  <summary>Tocame</summary>
  <div>
    <div>Explicacion del codigo de arriba</div>
    <br/>
    <details>
      <summary>
        La primera linea marcada
      </summary>
      <div>Indica el metodo http que se realizara cuando solicitemos la informacion a la API.</div>
    </details>
    <details>
      <summary>
        La segunda linea marcada
      </summary>
      <div>Indica la ruta por la cual podremos acceder al contenido que la API nos devuelva.</div>
    </details>
    <details>
      <summary>
        La tercera linea marcada.
      </summary>
      <div>Indica el contenido que enviaremos mediante la API, la cual el cliente podra solicitar cuando la necesite.</div>
    </details>
  </div>


</details>

![codigo de inicio de la api](pathname:///exposition-net-framework/img/asp_net_back/codigo-de-inicio-de-la-api.png)

Bien, cambiamos un poco el contenido que mostraremos en el navegador mediante una peticion GET.

![cambiamos el contenido que nos devolvera la api](pathname:///exposition-net-framework/img/asp_net_back/cambiamos-el-contenido-que-nos-devolvera-la-api.png)

Ahora, ejecutamos el proyecto.

![corremos la api](pathname:///exposition-net-framework/img/asp_net_back/corremos-la-api.png)

```bash
dotnet run
```
Tendras unos mensajes por consola como los siguientes.

![mensajes de la consola despues de ejecutar dotnet run](pathname:///exposition-net-framework/img/asp_net_back/mensajes-de-la-consola-despues-de-ejecutar-dotnet-run.png)

Como nosotros no estamos haciendo uso de un certificado ssl usaremos el servicio sin https. Para eso coloca la siguiente url en tu navegador para ver el resultado que te devuelve la API. Tienes que dar click en el siguiente link **[http://localhost:5050/](http://localhost:5050/)**.

Si tu has echo click al enlace anterior y tienes la API corriendo, veras inmediatamente el contenido que escribistes en el codigo, que explique anteriormente.

## Resultado Final

![observando la respuesta de la api](pathname:///exposition-net-framework/img/asp_net_back/observando-la-respuesta-de-la-api.png)

