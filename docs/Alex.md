---
sidebar_position: 0
title: Alex - Windows Form
---

:::success Que libreria estaremos usando
Mayor mente estaremos usando la libreriria **System.Windows.Forms** y la libreria **System** que nos permitira hacer uso de operaciones basicas.
:::

```c# title="Este ejemplo hace uso de las siguientes librerias"
using System;
using System.Windows.Forms;
```

## Empezemos

Necesitamos escoger nuestra tecnologia con la cual crearemos nuestra aplicacion de escritorio en nuestro caso usaremos **Windows Forms App (.NET Framework)**.

![window.form](pathname:///exposition-net-framework/img/seleccionar-tecnologia.png)

## Escoge un nombre cualquiera para tu aplicacion de escritorio.

:::warning Nombra tu proyecto usando algunas de las siguientes nomenclaturas.
**nombreDelProyecto, nombre_del_proyecto, nombre-del-proyecto**
:::

![Nombre del proyecto](pathname:///exposition-net-framework/img/escoge-nombre-del-projecto.png)

## Activamos las ventana de caja de herramientas

Cuando nosotros ingresamos al espacio de trabajo de **Windows Form (.NET Framework)** por defecto no tiene activado la ventana de caja de herramientas

:::success Por que es importante la toolbox o caja de herramientas.
La caja de herramientas es la que nos ayudara a insertar elementos en el espacio de trabajo de nuestra aplicacion de escritorio con la cual el usuario tendra que interactuar.
:::

![no aparece la caja de herramientas de windows form](pathname:///exposition-net-framework/img/no-aparece-la-caja-de-herramientas.png)

Para poder activar esta ventana exencial tendremos que dirigirnos en la parte superior de Visual Studio 2022 en la seccion que dice vista o view. Cuando las opciones esten desplegadas daremos click a la que dice caja de herramientas o toolbox.

![activando caja de herramientas de windows form](pathname:///exposition-net-framework/img/activamos-la-ventana-de-herramientas.png)

Ahora nosotros tenemos activado nuestra ventana de caja de herramientas.

![caja de herramientas de windows form](pathname:///exposition-net-framework/img/caja-de-herramientas.png)

## Insertemos nuestros primeros elementos

Insertamos una caja de texto o textbox con la cual el usuario podra interactuar otorgando datos los cuales podremos procesar despues con codigo c#. Damos click a la opcion caja de texto o textbox para indicar que haremos uso de este elemento.

![colocando textbox suma](pathname:///exposition-net-framework/img/insertamos-nuestro-textbox.png)

Despues nos dirigimos a nuestro canvas o marco de nuestra interfaz y damos click en ella para pegar nuestro caja de texto o textbox.
Deberia quedarnos algo de la siguiente forma.

![panorama completo haciendo uso de textbox sumar](pathname:///exposition-net-framework/img/panorama-completo-con-textbox-sumar.png)

Ahora modificaremos las propiedades de nuestra caja de texto o textbox.

:::success Modifica siempre la propiedad name
Es importante modificar esta propiedad con un nombre que haga logica a la funcionalidad del textbox o caja de texto. Ya que gracias a este nombre podremos hacerle referencia en el codigo c# y despues agregarle logica que nos permita agregarle funcionalidades. En otras palabras no moficar la propiedad **name** quivale a no haber agregado un textbox o caja de texto.
:::

![propiedad name de textbox sumar](pathname:///exposition-net-framework/img/propiedad-name-de-textbox-suma.png)

Ahora haremos lo mismo con el label **puedes verlo tambien como un texto que dice lo que hace su acompañante textbox o caja de texto**

![Insertamos nuestro primer label](pathname:///exposition-net-framework/img/insertamos-nuestro-label-suma.png)

Despues nos dirigimos a nuestro canvas o marco de nuestra interfaz y damos click en ella para pegar nuestro label. Deberia quedarnos algo de la siguiente forma.

![Agregando nuestro primer label suma](pathname:///exposition-net-framework/img/agregando-primer-label-suma.png)

Ahora vamos a modificar su propiedad **Text** para ponerle un nombre que haga sentido a su acompañante textbox o caja de texto.

![valor de la propiedad text de label suma cambiado](pathname:///exposition-net-framework/img/valor-de-la-propiedad-text-de-label-suma-cambiado.png)

Veras que se modifico el label.

![cambio nombre de label suma](pathname:///exposition-net-framework/img/nombre-cambiado-a-label-suma.png)

Bien, haremos los mismos pasos para los demas textbox o caja de texto y label. Estos otros elementos haran referencia a la **resta,multiplicacion y divicion**. Recuerda que cada elemento debe de tener un contenido diferente a los demas en su propiedad **name**.

:::success Recuerda
Primero agregamos el elemento, si es un textbox o caja de texto debemos moficiar su propiedad **name** ya que esta nos permitira hacer referencia al elemento usando codigo c#. Despues agregaremos el label con el cual describiremos la funcionalidad de nuestro textobox o caja de texto que lo acompaña. Esto lo haremos moficando su propiedad **Text**.
:::

![agregando campos aritmeticos faltantes](pathname:///exposition-net-framework/img/agregando-otros-campos.png)

Nos dirigimos a la ventana de caja de herramienta y buscamos el elemento llamado RadioButton

:::success Para que sirve el RadioButton
Este elemento ofrece al usuarion escoger una eleccion entre varias que existen. Ya que el RadioButton en un entorno de aplicacion unicamente permite esoger una opcion a diferencia del CheckBox que te permite escoger varias opciones.
:::

![seleccionando un RadioButton](pathname:///exposition-net-framework/img/seleccionando-radio-button.png)

Ahora agregaremos un radioButton a cada operacion aritmetica.

![Agregando a RadioButtons a cada elemento aritmetico](pathname:///exposition-net-framework/img/Agregando-radio-Buttons.png)

Ahora debemos modificar la propiedad **Name y Text**. Para lograr es damos click en el primer RadioButton y nos dirigimos a sus propiedades.

![modificando propiedad name RadiButton sumar](pathname:///exposition-net-framework/img/modificando-propiedad-name-radiButton-sumar.png) 

![elminamos contenido de RadioButton sumar](pathname:///exposition-net-framework/img/elminamos-contenido-de-radiobutton-sumar.png)

Haces lo mismo con los demas radio button **recuerda modificar la propiedad name con contenido diferente** la propiedad name no importa el elemento siempre tiene que ser diferente a los demas elementos existentes.

![radioButtons con sus propiedades modificadas](pathname:///exposition-net-framework/img/radioButtons-con-sus-propiedades-modificadas.png)

Ahora agregaremos un botton normal. El cual tendra la funcion de calcular.

![buscando un botton comun](pathname:///exposition-net-framework/img/buscando-un-botton-comun.png)

Agregamos el botton en en la interfaz de la aplicacion.

![vista previa de botton comun agregado](pathname:///exposition-net-framework/img/vista-previa-de-botton-comun-agregado.png)

Debemos de cambiar la propiedad **name y text** del boton normal.

![cambiando propiedad del boton normal llamada nama](pathname:///exposition-net-framework/img/cambiando-propiedad-del-boton-normal-llamada-name.png)

![cambiado valores de la propiedad text de boton normal](pathname:///exposition-net-framework/img/cambiado-valores-de-la-propiedad-text-de-boton-normal.png)

Deberia verse de la siguiente forma.

![vista previa del boton normal con sus propiedades modificadas](pathname:///exposition-net-framework/img/vista-previa-del-boton-normal-con-sus-propiedades-modificadas.png)

Tenemos que agregar un textbox o caja de texto que nos permita complementar nuestras operaciones aritmeticas.
Y un label que haga referencia al textbox acompañante.

![modificando propiedad textbox name de complemento](pathname:///exposition-net-framework/img/modificando-propiedad-textbox-name-de-complemento.png)

![agregando label complemento](pathname:///exposition-net-framework/img/agregando-label-complemento.png)

![agregando boton compelemento y label](pathname:///exposition-net-framework/img/agregando-boton-compelemento-y-label.png)

## Programos las funcionalidades Aritmeticas.

Bien, para entrar en el entorno de programacion damos doble click en el boton calcular. Ya que este elementos sera el que maneje la logica aritmetica de los campos textbox o caja de texto y los RadioButton.

```c title="Codigo del boton calcular"
private void btnCalcular_Click(object sender, EventArgs e)
{
    if (rbSuma.Checked)
    {
        // Convertimos los valores ingresados por el usuario en numeros
        double txtBoxSumar = Convert.ToDouble(txtsuma.Text.Trim()) + Convert.ToDouble(txtComplemento.Text.Trim());
        // Ahora los convertimos en texto para poder mostrarlos
        txtResultado.Text = Convert.ToString(txtBoxSumar);
    }
    
    if (rbResta.Checked)
    {
        // Convertimos los valores ingresados por el usuario en numeros
        double txtBoxRestar =  Convert.ToDouble(txtComplemento.Text.Trim()) - Convert.ToDouble(txtResta.Text.Trim());
        // Ahora los convertimos en texto para poder mostrarlos
        txtResultado.Text = Convert.ToString(txtBoxRestar);
    }


    if (rbMultiplicacion.Checked)
    {
        // Convertimos los valores ingresados por el usuario en numeros
        double txtBoxMultiplicar = Convert.ToDouble(txtMultiplicacion.Text.Trim()) * Convert.ToDouble(txtComplemento.Text.Trim());
        // Ahora los convertimos en texto para poder mostrarlos
        txtResultado.Text = Convert.ToString(txtBoxMultiplicar);
    }

    if (rbDivicion.Checked)
    {
        // Convertimos los valores ingresados por el usuario en numeros
        double txtBoxDividir = Convert.ToDouble(txtComplemento.Text.Trim()) / Convert.ToDouble(txtDivicion.Text.Trim());
        // Ahora los convertimos en texto para poder mostrarlos
        txtResultado.Text = Convert.ToString(txtBoxDividir);
    }
}
```
## Resultado Final

![calculadora windows form](pathname:///exposition-net-framework/img/calculadora-windows-form.gif)