---
sidebar_position: 4
title: Alex - ASP.NET (Front)
---

```c# title="Este ejemplo hace uso de las siguientes librerias"
```

## Empezemos

Primero haremos una comprobacion si tiene instalado **.NET SDK** esta interprete permite crear aplicaciones web, en este ejemplo estaremos haciendo uso de este interprete.

Bien, para comprobar si ya lo tienes instalado sigue los siguientes pasos.

Ahora buscamos en el sistema la Consola de comandos de windows o cmd.

![buscamos la consola de comandos](pathname:///exposition-net-framework/img/wService/buscamos-la-consola-de-comandos.png)

Despues damos click izquierdo en el programa y escogemos la opcion llamada Run as administrator o Ejutar como administrador.

![ejecutamos la consola de comandos como administrador](pathname:///exposition-net-framework/img/wService/ejecutamos-la-consola-de-comandos-como-administrador.png)

Veremos la siguiente ventana de fondo negro, conocida tambien de la siguientes formas **cmd**, **consola de comandos**, **terminal**.

![mostramos la consola de comandos](pathname:///exposition-net-framework/img/wService/mostramos-la-consola-de-comandos.png)

Ahora, escribe **dotnet** en el **cmd** y si tienes los siguientes mensajes de texto, estariamos listos para empezar a crear nuestro proyecto web frontend.

![verificando si tenemos sdk](pathname:///exposition-net-framework/img/asp_net_front/verificando-si-tenemos-sdk.png)

Si, tu tienes un error. Entonces debes de descargas el sdk para poder seguir con el ejemplo de la guia.

Tu puedes descargar el sdk haciendo click en el siguiente enlace **[Descargar .NET 7 SDK (64-bit)](https://download.visualstudio.microsoft.com/download/pr/a099e4b6-a6a8-4d34-bf95-b00739d35bb7/cdad50779717ba0e56caf89a3ba29ab1/dotnet-sdk-7.0.403-win-x64.exe)**.

Una vez, tengas instalado el sdk. Deberias ser capaz de ejecutar los comandos de comprobacion anteriores en el **cmd**.
Si esta vez te salen los mensajes mostrados anteriormente. Puedes seguir con la guia de ejemplo sin problemas.

## Creando nuestra aplicacion web

Para facilitar la creacion de aplicacion web, crearemos una nueva cmd desde el escritorio. Logrando asi que estes directamente en la ruta del escritorio y poder tener visiblemente la carpeta de desarrollo mas adelante.

![abriendo terminal desde el escritorio](pathname:///exposition-net-framework/img/asp_net_front/abriendo-terminal-desde-el-escritorio.png)

Fijate bien, en la ruta del cmd.

![cmd con la ruta de escritorio](pathname:///exposition-net-framework/img/asp_net_front/cmd-con-la-ruta-de-escritorio.png)

Creemos nuestra aplicacion web.

![mostrando comando de creacion del proyecto web](pathname:///exposition-net-framework/img/asp_net_front/mostrando-comando-de-creacion-del-proyecto-web.png)

```bash
dotnet new webapp -o AplicacionWebFrontend --no-https -f net7.0
```
Automaticamente el comando anterior nos ha creado una carpeta en el escritorio con el nombre de **AplicacionWebFrontend**.

![mostramos carpeta del proyecto web](pathname:///exposition-net-framework/img/asp_net_front/mostramos-carpeta-del-proyecto-web.png)

Ahora, nos moveremos a la carpeta del proyecto web.

![moviendonos al directorio del proyecto](pathname:///exposition-net-framework/img/asp_net_front/moviendonos-al-directorio-del-proyecto.png)

Como puedes observar en la ruta del cmd, estamos dentro de la carpeta del proyecto que es la misma carpeta que esta en el escritorio.

![mostrando ruta del proyecto web](pathname:///exposition-net-framework/img/asp_net_front/mostrando-ruta-del-proyecto-web.png)

Ejecutemos el proyecto.

Fijate bien, te muestra informacion del sitio web y algunas funciones para refrescar el sitio y ver cambios y para dejar de ejecutar el proyecto web, tambien te indica que enlace poner en el buscador de tu navegador para haceder a la pagina web.

Por ejemplo te dice.

![levantando el proyecto](pathname:///exposition-net-framework/img/asp_net_front/levantando-el-proyecto.png)

```bash
dotnet watch
```
Automaticamente tu navegador por defecto se abrira y te mostrar una pagina web como la siguiente la cual sera tu proyecto.

![pagina-web-arrojada-por-el comando-dotnet-watch](pathname:///exposition-net-framework/img/asp_net_front/pagina-web-arrojada-por-el-comando-dotnet-watch.png)

## Editemos el codigo

Bien, nos dirigimos a la carpeta del proyecto. La cual se encuentra en el escritorio.
Damos click izquierdo,Despues click en la opcion **Show more options** o **mostrar mas opciones**.

![opcion mostrar mas opcines archivo del proyecto](pathname:///exposition-net-framework/img/asp_net_front/opcion-mostrar-mas-opcines-archivo-del-proyecto.png)

Seleccionamos la opcion que dice abrir con visual studio.

![opcion abri con visual studio](pathname:///exposition-net-framework/img/asp_net_front/opcion-abri-con-visual-studio.png)

Te dirigen a la parte de la ventana donde estan ubicados los archivos del proyecto.
Notaras en seguida dos carpetas con los siguientes nombres **wwwroot y Pages**, nosotros trabajaremos principalmente con estas carpetas sobre todo con la carpeta **Pages**.

![las-dos-carpetas-con-las-que-trabajaremos](pathname:///exposition-net-framework/img/asp_net_front/las-dos-carpetas-con-las-que-trabajaremos.png)

Ahora, nos dirigimos a la carpeta **Pages**. 

![abrimos el archivo index del proyecto](pathname:///exposition-net-framework/img/asp_net_front/abrimos-el-archivo-index-del-proyecto.png)

Damos doble click al archivo **index.cshtml.cs**.
Podras observar que el contenido de la pagina que se mostrar al ejecutar el proyecto tiene el mismo contenido que te esta mostrando el archivo **index.cshtml.cs**, eso es porque este archivo es el que se esta mostrando en el navegador. Los cambios que tu realices dentro de este archivo se mostraran en la pagina que se mostro al inicio.

![contenido de la pagina index del proyecto](pathname:///exposition-net-framework/img/asp_net_front/contenido-de-la-pagina-index-del-proyecto.png)

Es decir esta pagina.

![pagina web arrojada por el comando dotnet watch mostrando contenido](pathname:///exposition-net-framework/img/asp_net_front/pagina-web-arrojada-por-el-comando-dotnet-watch-mostrando-contenido.png)

Ahora, modificaremos el contenido del archivo y podras ver como se realiza los cambios desde el navegador que estes usando.

![modificando contenido del archivo index del proyecto](pathname:///exposition-net-framework/img/asp_net_front/modificando-contenido-del-archivo-index-del-proyecto.png)

Mira los cambios aplicados.

![resultado de haber modificado el archivo index del proyecto](pathname:///exposition-net-framework/img/asp_net_front/resultado-de-haber-modificado-el-archivo-index-del-proyecto.png)

## Aplicando estilos

Para aplicar estilos, tienes que dar click al siguiente link **[Boostrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**.

Este seria el sitio web donde podremos tener algunas funcionalidades o mas bien dicho componentes. Como **botones**, **caruseles**, **formularios** entre otras cosas.

![ingresando a boostrap](pathname:///exposition-net-framework/img/asp_net_front/ingresando-a-boostrap.png)

Ahora nos vamos a la seccion de cards que se encuentra a la izquieda y una vez echo click. Podras notar que salen algunas opciones de **cards** o **tarjetas** y te muestran un ejemplo de una tarjeta y mas abajo su codigo para unicamente lo copies y pegues en tu codigo.

![buscando nuestro componente card de boostrap](pathname:///exposition-net-framework/img/asp_net_front/buscando-nuestro-componente-card-de-boostrap.png)

Siempre que en boostrap te aparesca example o ejemplo y mas abajo te aparezca algo parecido a lo que buscas. Normalmente viene con un codigo para que copies mas abajo.

![mostrando boton copiar](pathname:///exposition-net-framework/img/asp_net_front/mostrando-boton-copiar.png)

Una vez copiado te diriges al codigo de tu proyecto.

![modificando contenido del archivo index del proyecto](pathname:///exposition-net-framework/img/asp_net_front/modificando-contenido-del-archivo-index-del-proyecto.png)

Pegas el codigo mas abajo del que temos actualmente.

![pegamos codigo de boostrap](pathname:///exposition-net-framework/img/asp_net_front/pegamos-codigo-de-boostrap.png)

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
Bien, Vamos a ver los cambios en el navegador. Los cambios estan aplicados pero la tarjetausq, buemos una imagen para la tarjeta en **google images**.

![tarjeta de boostrap](pathname:///exposition-net-framework/img/asp_net_front/tarjeta-de-boostrap.png)

Ahora, buscamos una imagen para la **tarjeta** que hemos pegado en el proyecto.

![buscando una imagen de goku](pathname:///exposition-net-framework/img/asp_net_front/buscando-una-imagen-de-goku.png)

Una vez encontrado nuestra imagen, damos click izquierdo y escogemos la opcion que dice **Abrir en una pestaña nueva**.

![imagen de goku seleccionado opcion abrir en una nueva pestana](pathname:///exposition-net-framework/img/asp_net_front/imagen-de-goku-seleccionado-opcion-abrir-en-una-nueva-pestana.png)

Copiamos el enlace la imagen, haciendo click en la parte superior del navegador en la herramienta de busquedas.

![copiand enlace de la imagen de goku](pathname:///exposition-net-framework/img/asp_net_front/copiand-enlace-de-la-imagen-de-goku.png)

Nos dirigimos a nuestro proyecto y copiamos el enlace dentro de las comillas que esta despues del **=** de la **propiedad src**.

![pegamo el enlace en el src](pathname:///exposition-net-framework/img/asp_net_front/pegamo-el-enlace-en-el-src.png)

Observemos los cambios desde el navegador.

![mirando los cambios realizados en la tarjeta de boostrap](pathname:///exposition-net-framework/img/asp_net_front/mirando-los-cambios-realizados-en-la-tarjeta-de-boostrap.png)

Solo nos falta modificar el contenido de la tarjeta.

![Modificando contenido de la tarjeta de boostrap](pathname:///exposition-net-framework/img/asp_net_front/Modificando-contenido-de-la-tarjeta-de-boostrap.png)

## Resultado Final

Observemos los cambios finales.

![cambios finales de la tarjeta de boostrap](pathname:///exposition-net-framework/img/asp_net_front/cambios-finales-de-la-tarjeta-de-boostrap.png)