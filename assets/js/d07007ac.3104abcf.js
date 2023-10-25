"use strict";(self.webpackChunkpresentation_net_framework=self.webpackChunkpresentation_net_framework||[]).push([[427],{9613:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>g});var n=r(9496);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||t;return r?n.createElement(g,i(i({ref:a},d),{},{components:r})):n.createElement(g,i({ref:a},d))}));function g(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<t;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7239:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var n=r(8028),o=(r(9496),r(9613));const t={sidebar_position:3,title:"Fernando - Windows Service"},i=void 0,s={unversionedId:"Fernando",id:"Fernando",title:"Fernando - Windows Service",description:"\xbfQu\xe9 es un servicio de Windows?",source:"@site/docs/Fernando.md",sourceDirName:".",slug:"/Fernando",permalink:"/exposition-net-framework/docs/Fernando",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Fernando - Windows Service"},sidebar:"tutorialSidebar",previous:{title:"Sergio - WPF",permalink:"/exposition-net-framework/docs/Sergio"},next:{title:"Sin Asignar - Aplicacion de consola",permalink:"/exposition-net-framework/docs/Desconocido"}},l={},c=[{value:"\xbfQu\xe9 es un servicio de Windows?",id:"qu\xe9-es-un-servicio-de-windows",level:2},{value:"Empezamos",id:"empezamos",level:2},{value:"Panorama principal al iniciar el proyecto.",id:"panorama-principal-al-iniciar-el-proyecto",level:3},{value:"Agregar un instalador para windows server",id:"agregar-un-instalador-para-windows-server",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"qu\xe9-es-un-servicio-de-windows"},"\xbfQu\xe9 es un servicio de Windows?"),(0,o.kt)("p",null,"Los servicios de Windows son aplicaciones de software que no son UI y que se ejecutan en segundo plano. Los servicios de Windows generalmente se inician cuando se inicia un sistema operativo y est\xe1 programado para ejecutarse en segundo plano para ejecutar algunas tareas. Los servicios de Windows tambi\xe9n se pueden iniciar de forma autom\xe1tica o manual. Tambi\xe9n puede pausar, detener y reiniciar manualmente los servicios de Windows."),(0,o.kt)("p",null,"El servicio de Windows es un programa inform\xe1tico que se ejecuta en segundo plano para ejecutar algunas tareas. Algunos ejemplos de servicios de Windows son la actualizaci\xf3n autom\xe1tica de Windows, consultar correos electr\xf3nicos, imprimir documentos, el Agente SQL Server, escaneo e indexaci\xf3n de archivos y carpetas, etc. Si abre el Administrador de tareas y hace clic en la pesta\xf1a Servicios, ver\xe1 cientos de servicios. ejecut\xe1ndose en su m\xe1quina. Tambi\xe9n puede ver los estados de estos servicios. Algunos servicios se est\xe1n ejecutando, otros se han detenido y otros se han detenido. Puede iniciar, detener y pausar un servicio desde aqu\xed haciendo clic derecho en el servicio."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/servicios-de-windows.jpg",alt:"servicios de windows"})),(0,o.kt)("h2",{id:"empezamos"},"Empezamos"),(0,o.kt)("p",null,"Buscamos ",(0,o.kt)("strong",{parentName:"p"},"Windows Service")," y escogemos la opcion que dice ",(0,o.kt)("em",{parentName:"p"},".net framework"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/Buscando-tecnologia-de-windows-service.png",alt:"Buscando tecnologia de windows service"})),(0,o.kt)("p",null,"Despues nombramos nuestro proyecto."),(0,o.kt)("admonition",{title:"Nombra de forma correcta tus proyectos",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"No uses espacios en blanco, por ejemplo ",(0,o.kt)("strong",{parentName:"p"},"(No llames tu proyecto asi)"),". Ademas no uses caracteres raros como ",(0,o.kt)("strong",{parentName:"p"},"?%$^()][{}#&")," entre otros solo usa letras del alfabeto, recomendablemente solo del alfabero americano.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/nombrando-nuestro-proyecto-de-windows-service.png",alt:"nombrando nuestro proyecto de windows service"})),(0,o.kt)("h3",{id:"panorama-principal-al-iniciar-el-proyecto"},"Panorama principal al iniciar el proyecto."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/panorama-de-inicio-del-proyecto.png",alt:"panorama de inicio del proyecto"})),(0,o.kt)("p",null,"Nos indica que debemos arrastrar un elemento de la caja de herramientas asi la interfaz grafica o canvas."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"Alex"},"Como activar la toolbox o caja de herramientas")),", Recuerda ir a la seccion de ",(0,o.kt)("strong",{parentName:"p"},"Activamos las ventana de caja de herramientas"),"."),(0,o.kt)("h2",{id:"agregar-un-instalador-para-windows-server"},"Agregar un instalador para windows server"),(0,o.kt)("p",null,"Para agregar un instalador, debemos dar click izquierdo y se desplegara una ventana con opciones.\nA nosotros nos interesa la que dice ",(0,o.kt)("strong",{parentName:"p"},"Add Installer o Agregar Instalador"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/agregar-un-instalador.png",alt:"agregar un instalador"})),(0,o.kt)("p",null,"Despues tendremos un panorama de una pestalla abierta."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/vista-previa-despues-de-hacer-click-en-agregar-instalador.png",alt:"vista previa despues de hacer click en agregar instalador"})),(0,o.kt)("p",null,"Esta pesta\xf1a hace referencia al archivo que se creo al agregar el installer. Tu puedes verlo mirando los archivos del proyecto."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/mostrando-instalador-creado.png",alt:"mostrando instalador creado"})),(0,o.kt)("p",null,"Bien, ahora observemos el codigo fuente del installer o instalador.\nPara eso damos click izquierdo y click a la opcion que dice ",(0,o.kt)("strong",{parentName:"p"},"View Code o Ver Codigo"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/seleccionando-la-opcion-de-ver-codigo.png",alt:"seleccionando la opcion de ver codigo"})),(0,o.kt)("p",null,"El codigo del installer o instalador se miraria de la siguiente forma."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/wService/mirando-el-codigo-fuente-del-instalador.png",alt:"mirando el codigo fuente del instalador"})),(0,o.kt)("p",null,"Vamos a explicar lo que se\xf1ala las flechas"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"La flecha roja indica a que grupo de logica de codigo pertenece, por ejemplo el installer o instalador pertenece a la misma logica de programacion a la que pertenece nuestra interfaz grafica o interfaz de aplicacion. \n")),(0,o.kt)("p",null,"La fecha verde "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"La flecha verder indica el nombre del la clase que hace posible que el installer o instalador exista, ademas hace uso de un metodo que inicializa el instalador.\n")))}u.isMDXComponent=!0}}]);