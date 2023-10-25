"use strict";(self.webpackChunkpresentation_net_framework=self.webpackChunkpresentation_net_framework||[]).push([[950],{9613:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>g});var t=o(9496);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),m=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},p=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(o),u=n,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return o?t.createElement(g,i(i({ref:a},p),{},{components:o})):t.createElement(g,i({ref:a},p))}));function g(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<r;m++)i[m]=o[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7820:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var t=o(8028),n=(o(9496),o(9613));const r={sidebar_position:0,title:"Alex - Windows Form"},i=void 0,s={unversionedId:"Alex",id:"Alex",title:"Alex - Windows Form",description:"Mayor mente estaremos usando la libreriria System.Windows.Forms y la libreria System que nos permitira hacer uso de operaciones basicas.",source:"@site/docs/Alex.md",sourceDirName:".",slug:"/Alex",permalink:"/exposition-net-framework/docs/Alex",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Alex - Windows Form"},sidebar:"tutorialSidebar",next:{title:"Sergio - WPF",permalink:"/exposition-net-framework/docs/Sergio"}},l={},m=[{value:"Empezemos",id:"empezemos",level:2},{value:"Escoge un nombre cualquiera para tu aplicacion de escritorio.",id:"escoge-un-nombre-cualquiera-para-tu-aplicacion-de-escritorio",level:2},{value:"Activamos las ventana de caja de herramientas",id:"activamos-las-ventana-de-caja-de-herramientas",level:2},{value:"Insertemos nuestros primeros elementos",id:"insertemos-nuestros-primeros-elementos",level:2},{value:"Programos las funcionalidades Aritmeticas.",id:"programos-las-funcionalidades-aritmeticas",level:2},{value:"Resultado Final",id:"resultado-final",level:2}],p={toc:m},d="wrapper";function c(e){let{components:a,...o}=e;return(0,n.kt)(d,(0,t.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Que libreria estaremos usando",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"Mayor mente estaremos usando la libreriria ",(0,n.kt)("strong",{parentName:"p"},"System.Windows.Forms")," y la libreria ",(0,n.kt)("strong",{parentName:"p"},"System")," que nos permitira hacer uso de operaciones basicas.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:'language-title="librerias',metastring:'en uso"',en:!0,'uso"':!0},"using System;\nusing System.Windows.Forms;\n")),(0,n.kt)("h2",{id:"empezemos"},"Empezemos"),(0,n.kt)("p",null,"Necesitamos escoger nuestra tecnologia con la cual crearemos nuestra aplicacion de escritorio en nuestro caso usaremos ",(0,n.kt)("strong",{parentName:"p"},"Windows Forms App (.NET Framework)"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/seleccionar-tecnologia.png",alt:"window.form"})),(0,n.kt)("h2",{id:"escoge-un-nombre-cualquiera-para-tu-aplicacion-de-escritorio"},"Escoge un nombre cualquiera para tu aplicacion de escritorio."),(0,n.kt)("admonition",{title:"Nombra tu proyecto usando algunas de las siguientes nomenclaturas.",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"nombreDelProyecto, nombre_del_proyecto, nombre-del-proyecto"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/escoge-nombre-del-projecto.png",alt:"Nombre del proyecto"})),(0,n.kt)("h2",{id:"activamos-las-ventana-de-caja-de-herramientas"},"Activamos las ventana de caja de herramientas"),(0,n.kt)("p",null,"Cuando nosotros ingresamos al espacio de trabajo de ",(0,n.kt)("strong",{parentName:"p"},"Windows Form (.NET Framework)")," por defecto no tiene activado la ventana de caja de herramientas"),(0,n.kt)("admonition",{title:"Por que es importante la toolbox o caja de herramientas.",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"La caja de herramientas es la que nos ayudara a insertar elementos en el espacio de trabajo de nuestra aplicacion de escritorio con la cual el usuario tendra que interactuar.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/no-aparece-la-caja-de-herramientas.png",alt:"no aparece la caja de herramientas de windows form"})),(0,n.kt)("p",null,"Para poder activar esta ventana exencial tendremos que dirigirnos en la parte superior de Visual Studio 2022 en la seccion que dice vista o view. Cuando las opciones esten desplegadas daremos click a la que dice caja de herramientas o toolbox."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/activamos-la-ventana-de-herramientas.png",alt:"activando caja de herramientas de windows form"})),(0,n.kt)("p",null,"Ahora nosotros tenemos activado nuestra ventana de caja de herramientas."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/caja-de-herramientas.png",alt:"caja de herramientas de windows form"})),(0,n.kt)("h2",{id:"insertemos-nuestros-primeros-elementos"},"Insertemos nuestros primeros elementos"),(0,n.kt)("p",null,"Insertamos una caja de texto o textbox con la cual el usuario podra interactuar otorgando datos los cuales podremos procesar despues con codigo c#. Damos click a la opcion caja de texto o textbox para indicar que haremos uso de este elemento."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/insertamos-nuestro-textbox.png",alt:"colocando textbox suma"})),(0,n.kt)("p",null,"Despues nos dirigimos a nuestro canvas o marco de nuestra interfaz y damos click en ella para pegar nuestro caja de texto o textbox.\nDeberia quedarnos algo de la siguiente forma."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/panorama-completo-con-textbox-sumar.png",alt:"panorama completo haciendo uso de textbox sumar"})),(0,n.kt)("p",null,"Ahora modificaremos las propiedades de nuestra caja de texto o textbox."),(0,n.kt)("admonition",{title:"Modifica siempre la propiedad name",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"Es importante modificar esta propiedad con un nombre que haga logica a la funcionalidad del textbox o caja de texto. Ya que gracias a este nombre podremos hacerle referencia en el codigo c# y despues agregarle logica que nos permita agregarle funcionalidades. En otras palabras no moficar la propiedad ",(0,n.kt)("strong",{parentName:"p"},"name")," quivale a no haber agregado un textbox o caja de texto.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/propiedad-name-de-textbox-suma.png",alt:"propiedad name de textbox sumar"})),(0,n.kt)("p",null,"Ahora haremos lo mismo con el label ",(0,n.kt)("strong",{parentName:"p"},"puedes verlo tambien como un texto que dice lo que hace su acompa\xf1ante textbox o caja de texto")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/insertamos-nuestro-label-suma.png",alt:"Insertamos nuestro primer label"})),(0,n.kt)("p",null,"Despues nos dirigimos a nuestro canvas o marco de nuestra interfaz y damos click en ella para pegar nuestro label. Deberia quedarnos algo de la siguiente forma."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/agregando-primer-label-suma.png",alt:"Agregando nuestro primer label suma"})),(0,n.kt)("p",null,"Ahora vamos a modificar su propiedad ",(0,n.kt)("strong",{parentName:"p"},"Text")," para ponerle un nombre que haga sentido a su acompa\xf1ante textbox o caja de texto."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/valor-de-la-propiedad-text-de-label-suma-cambiado.png",alt:"valor de la propiedad text de label suma cambiado"})),(0,n.kt)("p",null,"Veras que se modifico el label."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/nombre-cambiado-a-label-suma.png",alt:"cambio nombre de label suma"})),(0,n.kt)("p",null,"Bien, haremos los mismos pasos para los demas textbox o caja de texto y label. Estos otros elementos haran referencia a la ",(0,n.kt)("strong",{parentName:"p"},"resta,multiplicacion y divicion"),". Recuerda que cada elemento debe de tener un contenido diferente a los demas en su propiedad ",(0,n.kt)("strong",{parentName:"p"},"name"),"."),(0,n.kt)("admonition",{title:"Recuerda",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"Primero agregamos el elemento, si es un textbox o caja de texto debemos moficiar su propiedad ",(0,n.kt)("strong",{parentName:"p"},"name")," ya que esta nos permitira hacer referencia al elemento usando codigo c#. Despues agregaremos el label con el cual describiremos la funcionalidad de nuestro textobox o caja de texto que lo acompa\xf1a. Esto lo haremos moficando su propiedad ",(0,n.kt)("strong",{parentName:"p"},"Text"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/agregando-otros-campos.png",alt:"agregando campos aritmeticos faltantes"})),(0,n.kt)("p",null,"Nos dirigimos a la ventana de caja de herramienta y buscamos el elemento llamado RadioButton"),(0,n.kt)("admonition",{title:"Para que sirve el RadioButton",type:"success"},(0,n.kt)("p",{parentName:"admonition"},"Este elemento ofrece al usuarion escoger una eleccion entre varias que existen. Ya que el RadioButton en un entorno de aplicacion unicamente permite esoger una opcion a diferencia del CheckBox que te permite escoger varias opciones.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/seleccionando-radio-button.png",alt:"seleccionando un RadioButton"})),(0,n.kt)("p",null,"Ahora agregaremos un radioButton a cada operacion aritmetica."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/Agregando-radio-Buttons.png",alt:"Agregando a RadioButtons a cada elemento aritmetico"})),(0,n.kt)("p",null,"Ahora debemos modificar la propiedad ",(0,n.kt)("strong",{parentName:"p"},"Name y Text"),". Para lograr es damos click en el primer RadioButton y nos dirigimos a sus propiedades."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/modificando-propiedad-name-radiButton-sumar.png",alt:"modificando propiedad name RadiButton sumar"})," "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/elminamos-contenido-de-radiobutton-sumar.png",alt:"elminamos contenido de RadioButton sumar"})),(0,n.kt)("p",null,"Haces lo mismo con los demas radio button ",(0,n.kt)("strong",{parentName:"p"},"recuerda modificar la propiedad name con contenido diferente")," la propiedad name no importa el elemento siempre tiene que ser diferente a los demas elementos existentes."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/radioButtons-con-sus-propiedades-modificadas.png",alt:"radioButtons con sus propiedades modificadas"})),(0,n.kt)("p",null,"Ahora agregaremos un botton normal. El cual tendra la funcion de calcular."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/buscando-un-botton-comun.png",alt:"buscando un botton comun"})),(0,n.kt)("p",null,"Agregamos el botton en en la interfaz de la aplicacion."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/vista-previa-de-botton-comun-agregado.png",alt:"vista previa de botton comun agregado"})),(0,n.kt)("p",null,"Debemos de cambiar la propiedad ",(0,n.kt)("strong",{parentName:"p"},"name y text")," del boton normal."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/cambiando-propiedad-del-boton-normal-llamada-name.png",alt:"cambiando propiedad del boton normal llamada nama"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/cambiado-valores-de-la-propiedad-text-de-boton-normal.png",alt:"cambiado valores de la propiedad text de boton normal"})),(0,n.kt)("p",null,"Deberia verse de la siguiente forma."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/vista-previa-del-boton-normal-con-sus-propiedades-modificadas.png",alt:"vista previa del boton normal con sus propiedades modificadas"})),(0,n.kt)("p",null,"Tenemos que agregar un textbox o caja de texto que nos permita complementar nuestras operaciones aritmeticas.\nY un label que haga referencia al textbox acompa\xf1ante."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/modificando-propiedad-textbox-name-de-complemento.png",alt:"modificando propiedad textbox name de complemento"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/agregando-label-complemento.png",alt:"agregando label complemento"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/agregando-boton-compelemento-y-label.png",alt:"agregando boton compelemento y label"})),(0,n.kt)("h2",{id:"programos-las-funcionalidades-aritmeticas"},"Programos las funcionalidades Aritmeticas."),(0,n.kt)("p",null,"Bien, para entrar en el entorno de programacion damos doble click en el boton calcular. Ya que este elementos sera el que maneje la logica aritmetica de los campos textbox o caja de texto y los RadioButton."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Codigo del boton calcular"',title:'"Codigo',del:!0,boton:!0,'calcular"':!0},"private void btnCalcular_Click(object sender, EventArgs e)\n{\n    if (rbSuma.Checked)\n    {\n        // Convertimos los valores ingresados por el usuario en numeros\n        double txtBoxSumar = Convert.ToDouble(txtsuma.Text.Trim()) + Convert.ToDouble(txtComplemento.Text.Trim());\n        // Ahora los convertimos en texto para poder mostrarlos\n        txtResultado.Text = Convert.ToString(txtBoxSumar);\n    }\n    \n    if (rbResta.Checked)\n    {\n        // Convertimos los valores ingresados por el usuario en numeros\n        double txtBoxRestar =  Convert.ToDouble(txtComplemento.Text.Trim()) - Convert.ToDouble(txtResta.Text.Trim());\n        // Ahora los convertimos en texto para poder mostrarlos\n        txtResultado.Text = Convert.ToString(txtBoxRestar);\n    }\n\n\n    if (rbMultiplicacion.Checked)\n    {\n        // Convertimos los valores ingresados por el usuario en numeros\n        double txtBoxMultiplicar = Convert.ToDouble(txtMultiplicacion.Text.Trim()) * Convert.ToDouble(txtComplemento.Text.Trim());\n        // Ahora los convertimos en texto para poder mostrarlos\n        txtResultado.Text = Convert.ToString(txtBoxMultiplicar);\n    }\n\n    if (rbDivicion.Checked)\n    {\n        // Convertimos los valores ingresados por el usuario en numeros\n        double txtBoxDividir = Convert.ToDouble(txtComplemento.Text.Trim()) / Convert.ToDouble(txtDivicion.Text.Trim());\n        // Ahora los convertimos en texto para poder mostrarlos\n        txtResultado.Text = Convert.ToString(txtBoxDividir);\n    }\n}\n")),(0,n.kt)("h2",{id:"resultado-final"},"Resultado Final"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"/exposition-net-framework/img/calculadora-windows-form.gif",alt:"calculadora windows form"})))}c.isMDXComponent=!0}}]);