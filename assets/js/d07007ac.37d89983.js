"use strict";(self.webpackChunkpresentation_net_framework=self.webpackChunkpresentation_net_framework||[]).push([[427],{9613:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>v});var o=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,a=function(e,n){if(null==e)return{};var r,o,a={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,a=e.mdxType,t=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||t;return r?o.createElement(v,i(i({ref:n},l),{},{components:r})):o.createElement(v,i({ref:n},l))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=r.length,i=new Array(t);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<t;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7239:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var o=r(8028),a=(r(9496),r(9613));const t={sidebar_position:3,title:"Fernando - Windows Service"},i=void 0,s={unversionedId:"Fernando",id:"Fernando",title:"Fernando - Windows Service",description:"\xbfQu\xe9 es un servicio de Windows?",source:"@site/docs/Fernando.md",sourceDirName:".",slug:"/Fernando",permalink:"/exposition-net-framework/docs/Fernando",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Fernando - Windows Service"},sidebar:"tutorialSidebar",previous:{title:"Sergio - WPF",permalink:"/exposition-net-framework/docs/Sergio"},next:{title:"Sin Asignar - Aplicacion de consola",permalink:"/exposition-net-framework/docs/Desconocido"}},c={},p=[{value:"\xbfQu\xe9 es un servicio de Windows?",id:"qu\xe9-es-un-servicio-de-windows",level:2},{value:"Empezamos",id:"empezamos",level:2},{value:"Panorama principal al iniciar el proyecto.",id:"panorama-principal-al-iniciar-el-proyecto",level:3}],l={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"qu\xe9-es-un-servicio-de-windows"},"\xbfQu\xe9 es un servicio de Windows?"),(0,a.kt)("p",null,"Los servicios de Windows son aplicaciones de software que no son UI y que se ejecutan en segundo plano. Los servicios de Windows generalmente se inician cuando se inicia un sistema operativo y est\xe1 programado para ejecutarse en segundo plano para ejecutar algunas tareas. Los servicios de Windows tambi\xe9n se pueden iniciar de forma autom\xe1tica o manual. Tambi\xe9n puede pausar, detener y reiniciar manualmente los servicios de Windows."),(0,a.kt)("p",null,"El servicio de Windows es un programa inform\xe1tico que se ejecuta en segundo plano para ejecutar algunas tareas. Algunos ejemplos de servicios de Windows son la actualizaci\xf3n autom\xe1tica de Windows, consultar correos electr\xf3nicos, imprimir documentos, el Agente SQL Server, escaneo e indexaci\xf3n de archivos y carpetas, etc. Si abre el Administrador de tareas y hace clic en la pesta\xf1a Servicios, ver\xe1 cientos de servicios. ejecut\xe1ndose en su m\xe1quina. Tambi\xe9n puede ver los estados de estos servicios. Algunos servicios se est\xe1n ejecutando, otros se han detenido y otros se han detenido. Puede iniciar, detener y pausar un servicio desde aqu\xed haciendo clic derecho en el servicio."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/servicios-de-windows.jpg",alt:"servicios de windows"})),(0,a.kt)("h2",{id:"empezamos"},"Empezamos"),(0,a.kt)("p",null,"Buscamos ",(0,a.kt)("strong",{parentName:"p"},"Windows Service")," y escogemos la opcion que dice ",(0,a.kt)("em",{parentName:"p"},".net framework"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/Buscando-tecnologia-de-windows-service.png",alt:"Buscando tecnologia de windows service"})),(0,a.kt)("p",null,"Despues nombramos nuestro proyecto."),(0,a.kt)("admonition",{title:"Nombra de forma correcta tus proyectos",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"No uses espacios en blanco, por ejemplo ",(0,a.kt)("strong",{parentName:"p"},"(No llames tu proyecto asi)"),". Ademas no uses caracteres raros como ",(0,a.kt)("strong",{parentName:"p"},"?%$^()][{}#&")," entre otros solo usa letras del alfabeto, recomendablemente solo del alfabero americano.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/nombrando-nuestro-proyecto-de-windows-service.png",alt:"nombrando nuestro proyecto de windows service"})),(0,a.kt)("h3",{id:"panorama-principal-al-iniciar-el-proyecto"},"Panorama principal al iniciar el proyecto."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/panorama-de-inicio-del-proyecto.png",alt:"panorama de inicio del proyecto"})),(0,a.kt)("p",null,"Nos usar la caja de herramientas y arrastrar los elementos que queremos usar."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"Alex"},"Como activar la toolbox o caja de herramientas")),", Recuerda ir a la seccion de ",(0,a.kt)("strong",{parentName:"p"},"Activamos las ventana de caja de herramientas"),"."))}u.isMDXComponent=!0}}]);