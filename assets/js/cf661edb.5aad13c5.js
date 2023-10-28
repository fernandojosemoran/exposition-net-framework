"use strict";(self.webpackChunkpresentation_net_framework=self.webpackChunkpresentation_net_framework||[]).push([[386],{9613:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>g});var t=o(9496);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),p=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),u=n,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return o?t.createElement(g,s(s({ref:a},c),{},{components:o})):t.createElement(g,s({ref:a},c))}));function g(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},892:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=o(8028),n=(o(9496),o(9613));const r={sidebar_position:6,title:"Alex - ASP.NET (Front)"},s=void 0,i={unversionedId:"Alex-front",id:"Alex-front",title:"Alex - ASP.NET (Front)",description:"Empezemos",source:"@site/docs/4-Alex-front.md",sourceDirName:".",slug:"/Alex-front",permalink:"/exposition-net-framework/docs/Alex-front",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Alex - ASP.NET (Front)"},sidebar:"tutorialSidebar",previous:{title:"Sergio - ASP.NET (back)",permalink:"/exposition-net-framework/docs/Sergio-back"}},l={},p=[{value:"Empezemos",id:"empezemos",level:2},{value:"Creando nuestra aplicacion web",id:"creando-nuestra-aplicacion-web",level:2},{value:"Editemos el codigo",id:"editemos-el-codigo",level:2},{value:"Aplicando estilos",id:"aplicando-estilos",level:2},{value:"Resultado Final",id:"resultado-final",level:2}],c={toc:p},m="wrapper";function d(e){let{components:a,...o}=e;return(0,n.kt)(m,(0,t.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c#",metastring:'title="Este ejemplo hace uso de las siguientes librerias"',title:'"Este',ejemplo:!0,hace:!0,uso:!0,de:!0,las:!0,siguientes:!0,'librerias"':!0},"")),(0,n.kt)("h2",{id:"empezemos"},"Empezemos"),(0,n.kt)("p",null,"Primero haremos una comprobacion si tiene instalado ",(0,n.kt)("strong",{parentName:"p"},".NET SDK")," esta interprete permite crear aplicaciones web, en este ejemplo estaremos haciendo uso de este interprete."),(0,n.kt)("p",null,"Bien, para comprobar si ya lo tienes instalado sigue los siguientes pasos."),(0,n.kt)("p",null,"Ahora buscamos en el sistema la Consola de comandos de windows o cmd."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/buscamos-la-consola-de-comandos.png",alt:"buscamos la consola de comandos"})),(0,n.kt)("p",null,"Despues damos click izquierdo en el programa y escogemos la opcion llamada Run as administrator o Ejutar como administrador."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/ejecutamos-la-consola-de-comandos-como-administrador.png",alt:"ejecutamos la consola de comandos como administrador"})),(0,n.kt)("p",null,"Veremos la siguiente ventana de fondo negro, conocida tambien de la siguientes formas ",(0,n.kt)("strong",{parentName:"p"},"cmd"),", ",(0,n.kt)("strong",{parentName:"p"},"consola de comandos"),", ",(0,n.kt)("strong",{parentName:"p"},"terminal"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/mostramos-la-consola-de-comandos.png",alt:"mostramos la consola de comandos"})),(0,n.kt)("p",null,"Ahora, escribe ",(0,n.kt)("strong",{parentName:"p"},"dotnet")," en el ",(0,n.kt)("strong",{parentName:"p"},"cmd")," y si tienes los siguientes mensajes de texto, estariamos listos para empezar a crear nuestro proyecto web frontend."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/verificando-si-tenemos-sdk.png",alt:"verificando si tenemos sdk"})),(0,n.kt)("p",null,"Si, tu tienes un error. Entonces debes de descargas el sdk para poder seguir con el ejemplo de la guia."),(0,n.kt)("p",null,"Tu puedes descargar el sdk haciendo click en el siguiente enlace ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://download.visualstudio.microsoft.com/download/pr/a099e4b6-a6a8-4d34-bf95-b00739d35bb7/cdad50779717ba0e56caf89a3ba29ab1/dotnet-sdk-7.0.403-win-x64.exe"},"Descargar .NET 7 SDK (64-bit)")),"."),(0,n.kt)("p",null,"Una vez, tengas instalado el sdk. Deberias ser capaz de ejecutar los comandos de comprobacion anteriores en el ",(0,n.kt)("strong",{parentName:"p"},"cmd"),".\nSi esta vez te salen los mensajes mostrados anteriormente. Puedes seguir con la guia de ejemplo sin problemas."),(0,n.kt)("h2",{id:"creando-nuestra-aplicacion-web"},"Creando nuestra aplicacion web"),(0,n.kt)("p",null,"Para facilitar la creacion de aplicacion web, crearemos una nueva cmd desde el escritorio. Logrando asi que estes directamente en la ruta del escritorio y poder tener visiblemente la carpeta de desarrollo mas adelante."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/abriendo-terminal-desde-el-escritorio.png",alt:"abriendo terminal desde el escritorio"})),(0,n.kt)("p",null,"Fijate bien, en la ruta del cmd."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/cmd-con-la-ruta-de-escritorio.png",alt:"cmd con la ruta de escritorio"})),(0,n.kt)("p",null,"Creemos nuestra aplicacion web."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/mostrando-comando-de-creacion-del-proyecto-web.png",alt:"mostrando comando de creacion del proyecto web"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new webapp -o AplicacionWebFrontend --no-https -f net7.0\n")),(0,n.kt)("p",null,"Automaticamente el comando anterior nos ha creado una carpeta en el escritorio con el nombre de ",(0,n.kt)("strong",{parentName:"p"},"AplicacionWebFrontend"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/mostramos-carpeta-del-proyecto-web.png",alt:"mostramos carpeta del proyecto web"})),(0,n.kt)("p",null,"Ahora, nos moveremos a la carpeta del proyecto web."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/moviendonos-al-directorio-del-proyecto.png",alt:"moviendonos al directorio del proyecto"})),(0,n.kt)("p",null,"Como puedes observar en la ruta del cmd, estamos dentro de la carpeta del proyecto que es la misma carpeta que esta en el escritorio."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/mostrando-ruta-del-proyecto-web.png",alt:"mostrando ruta del proyecto web"})),(0,n.kt)("p",null,"Ejecutemos el proyecto."),(0,n.kt)("p",null,"Fijate bien, te muestra informacion del sitio web y algunas funciones para refrescar el sitio y ver cambios y para dejar de ejecutar el proyecto web, tambien te indica que enlace poner en el buscador de tu navegador para haceder a la pagina web."),(0,n.kt)("p",null,"Por ejemplo te dice."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/levantando-el-proyecto.png",alt:"levantando el proyecto"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet watch\n")),(0,n.kt)("p",null,"Automaticamente tu navegador por defecto se abrira y te mostrar una pagina web como la siguiente la cual sera tu proyecto."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/pagina-web-arrojada-por-el-comando-dotnet-watch.png",alt:"pagina-web-arrojada-por-el comando-dotnet-watch"})),(0,n.kt)("h2",{id:"editemos-el-codigo"},"Editemos el codigo"),(0,n.kt)("p",null,"Bien, nos dirigimos a la carpeta del proyecto. La cual se encuentra en el escritorio.\nDamos click izquierdo,Despues click en la opcion ",(0,n.kt)("strong",{parentName:"p"},"Show more options")," o ",(0,n.kt)("strong",{parentName:"p"},"mostrar mas opciones"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/opcion-mostrar-mas-opcines-archivo-del-proyecto.png",alt:"opcion mostrar mas opcines archivo del proyecto"})),(0,n.kt)("p",null,"Seleccionamos la opcion que dice abrir con visual studio."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/opcion-abri-con-visual-studio.png",alt:"opcion abri con visual studio"})),(0,n.kt)("p",null,"Te dirigen a la parte de la ventana donde estan ubicados los archivos del proyecto.\nNotaras en seguida dos carpetas con los siguientes nombres ",(0,n.kt)("strong",{parentName:"p"},"wwwroot y Pages"),", nosotros trabajaremos principalmente con estas carpetas sobre todo con la carpeta ",(0,n.kt)("strong",{parentName:"p"},"Pages"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/las-dos-carpetas-con-las-que-trabajaremos.png",alt:"las-dos-carpetas-con-las-que-trabajaremos"})),(0,n.kt)("p",null,"Ahora, nos dirigimos a la carpeta ",(0,n.kt)("strong",{parentName:"p"},"Pages"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/abrimos-el-archivo-index-del-proyecto.png",alt:"abrimos el archivo index del proyecto"})),(0,n.kt)("p",null,"Damos doble click al archivo ",(0,n.kt)("strong",{parentName:"p"},"index.cshtml.cs"),".\nPodras observar que el contenido de la pagina que se mostrar al ejecutar el proyecto tiene el mismo contenido que te esta mostrando el archivo ",(0,n.kt)("strong",{parentName:"p"},"index.cshtml.cs"),", eso es porque este archivo es el que se esta mostrando en el navegador. Los cambios que tu realices dentro de este archivo se mostraran en la pagina que se mostro al inicio."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/contenido-de-la-pagina-index-del-proyecto.png",alt:"contenido de la pagina index del proyecto"})),(0,n.kt)("p",null,"Es decir esta pagina."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/pagina-web-arrojada-por-el-comando-dotnet-watch-mostrando-contenido.png",alt:"pagina web arrojada por el comando dotnet watch mostrando contenido"})),(0,n.kt)("p",null,"Ahora, modificaremos el contenido del archivo y podras ver como se realiza los cambios desde el navegador que estes usando."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/modificando-contenido-del-archivo-index-del-proyecto.png",alt:"modificando contenido del archivo index del proyecto"})),(0,n.kt)("p",null,"Mira los cambios aplicados."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/resultado-de-haber-modificado-el-archivo-index-del-proyecto.png",alt:"resultado de haber modificado el archivo index del proyecto"})),(0,n.kt)("h2",{id:"aplicando-estilos"},"Aplicando estilos"),(0,n.kt)("p",null,"Para aplicar estilos, tienes que dar click al siguiente link ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://getbootstrap.com/docs/5.0/getting-started/introduction/"},"Boostrap")),"."),(0,n.kt)("p",null,"Este seria el sitio web donde podremos tener algunas funcionalidades o mas bien dicho componentes. Como ",(0,n.kt)("strong",{parentName:"p"},"botones"),", ",(0,n.kt)("strong",{parentName:"p"},"caruseles"),", ",(0,n.kt)("strong",{parentName:"p"},"formularios")," entre otras cosas."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/ingresando-a-boostrap.png",alt:"ingresando a boostrap"})),(0,n.kt)("p",null,"Ahora nos vamos a la seccion de cards que se encuentra a la izquieda y una vez echo click. Podras notar que salen algunas opciones de ",(0,n.kt)("strong",{parentName:"p"},"cards")," o ",(0,n.kt)("strong",{parentName:"p"},"tarjetas")," y te muestran un ejemplo de una tarjeta y mas abajo su codigo para unicamente lo copies y pegues en tu codigo."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/buscando-nuestro-componente-card-de-boostrap.png",alt:"buscando nuestro componente card de boostrap"})),(0,n.kt)("p",null,"Siempre que en boostrap te aparesca example o ejemplo y mas abajo te aparezca algo parecido a lo que buscas. Normalmente viene con un codigo para que copies mas abajo."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/mostrando-boton-copiar.png",alt:"mostrando boton copiar"})),(0,n.kt)("p",null,"Una vez copiado te diriges al codigo de tu proyecto."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/modificando-contenido-del-archivo-index-del-proyecto.png",alt:"modificando contenido del archivo index del proyecto"})),(0,n.kt)("p",null,"Pegas el codigo mas abajo del que temos actualmente."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/pegamos-codigo-de-boostrap.png",alt:"pegamos codigo de boostrap"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card" style="width: 18rem;">\n  <img src="..." class="card-img-top" alt="...">\n  <div class="card-body">\n    <h5 class="card-title">Card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n    <a href="#" class="btn btn-primary">Go somewhere</a>\n  </div>\n</div>\n')),(0,n.kt)("p",null,"Bien, Vamos a ver los cambios en el navegador. Los cambios estan aplicados pero la tarjetausq, buemos una imagen para la tarjeta en ",(0,n.kt)("strong",{parentName:"p"},"google images"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/tarjeta-de-boostrap.png",alt:"tarjeta de boostrap"})),(0,n.kt)("p",null,"Ahora, buscamos una imagen para la ",(0,n.kt)("strong",{parentName:"p"},"tarjeta")," que hemos pegado en el proyecto."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/buscando-una-imagen-de-goku.png",alt:"buscando una imagen de goku"})),(0,n.kt)("p",null,"Una vez encontrado nuestra imagen, damos click izquierdo y escogemos la opcion que dice ",(0,n.kt)("strong",{parentName:"p"},"Abrir en una pesta\xf1a nueva"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/imagen-de-goku-seleccionado-opcion-abrir-en-una-nueva-pestana.png",alt:"imagen de goku seleccionado opcion abrir en una nueva pestana"})),(0,n.kt)("p",null,"Copiamos el enlace la imagen, haciendo click en la parte superior del navegador en la herramienta de busquedas."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/copiand-enlace-de-la-imagen-de-goku.png",alt:"copiand enlace de la imagen de goku"})),(0,n.kt)("p",null,"Nos dirigimos a nuestro proyecto y copiamos el enlace dentro de las comillas que esta despues del ",(0,n.kt)("strong",{parentName:"p"},"=")," de la ",(0,n.kt)("strong",{parentName:"p"},"propiedad src"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/pegamo-el-enlace-en-el-src.png",alt:"pegamo el enlace en el src"})),(0,n.kt)("p",null,"Observemos los cambios desde el navegador."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/mirando-los-cambios-realizados-en-la-tarjeta-de-boostrap.png",alt:"mirando los cambios realizados en la tarjeta de boostrap"})),(0,n.kt)("p",null,"Solo nos falta modificar el contenido de la tarjeta."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/Modificando-contenido-de-la-tarjeta-de-boostrap.png",alt:"Modificando contenido de la tarjeta de boostrap"})),(0,n.kt)("h2",{id:"resultado-final"},"Resultado Final"),(0,n.kt)("p",null,"Observemos los cambios finales."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/asp_net_front/cambios-finales-de-la-tarjeta-de-boostrap.png",alt:"cambios finales de la tarjeta de boostrap"})))}d.isMDXComponent=!0}}]);