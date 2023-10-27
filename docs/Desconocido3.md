---
sidebar_position: 6
title: Sin Asignar - ASP.NET (Front)
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