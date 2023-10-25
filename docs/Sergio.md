---
sidebar_position: 1
title: Sergio - WPF
---
```c# title="Este ejemplo hace uso de las siguientes librerias"
using System.Windows;
```

## Comenzamos

Bien, primero buscamos la tecnologia que usaremos. En este caso haremos uso de **WPF aplication o Aplicacion WPF**.
![buscamos la tecnologia de wpf con c#](pathname:///exposition-net-framework/img/wpf/buscamos-la-tecnologia-de-wpf-con.png)

Nombramos nuestro proyecto.

:::note Nombra de forma correcta tus proyectos
No uses espacios en blanco, por ejemplo **(No llames tu proyecto asi)**. Ademas no uses caracteres raros como **?%$^()][{}#&** entre otros solo usa letras del alfabeto, recomendablemente solo del alfabero americano.
:::

![nombramos nuestro proyecto](pathname:///exposition-net-framework/img/wpf/nombramos-nuestro-proyecto.png)

Ahora acedemos a nuestra interfaz de trabajo la cual se mira de la siguiente forma.
![panorama completo del proyecto wpf](pathname:///exposition-net-framework/img/wpf/panorama-completo-del-proyecto-wpf.png)

A simple vista observamos nuestra intefaz de trabajo o canvas de color blanco y mas abajo una ventana con **codigo XAML**.

:::info ¿Que es XAMl?
XAML es un lenguaje de marcado basado en XML que implementa la apariencia de una aplicación de forma declarativa. Normalmente lo utiliza para crear ventanas, cuadros de diálogo, páginas y controles de usuario, y para llenarlos con controles, formas y gráficos.
:::

```xml title="markado o codigo de xamp que se crea al crear el proyecto"
<Window x:Class="MiPrimeraAplicacionDeEscritorioUsandoWPF.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:MiPrimeraAplicacionDeEscritorioUsandoWPF"
        mc:Ignorable="d"
        Title="MainWindow" Height="457" Width="799"> /// El titulo de la ventana.
    <Grid> 
        <Grid.RowDefinitions>
            <RowDefinition Height="24*"/> /// Al parecer esta definiendo la altura de la fila.
            <RowDefinition Height="25*"/>
            <RowDefinition Height="0*"/>
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="0*"/>
            <ColumnDefinition/>
        </Grid.ColumnDefinitions>

    </Grid> /// Usa grillas como los cuadernos cuadriculas.
</Window>
```
Este codigo es saca de la ventana inferior que se abre cuando el proyecto esta recien creado.

Tambien observamos que entre todas las etiquetas de xaml destacan algunas por sus nombres.
por ejemplo las que estan marcadas de rojo son los metadatos de la ventana como el nombre de la interfaz de la aplicacion, como tambien la altura y anchura de la misma.

En color verde destacamos algunas particularidades de como esta conformada la interfaz o mas bien como esta dividida o distribuida.
La interfaz esta haciendo uso de grillas las cuales son parecidas a las hojas del cuaderno cuadricula.

:::note Investiga si tienes dudas
Si no entiendes con exactitud algun termino puedes buscar informacion en google, incluso puedes buscar referencias visuales en google imagenes.
:::

![mostrando el uso de la grid en wpf](pathname:///exposition-net-framework/img/wpf/mostrando-el-uso-de-la-grid-en-wpf.png)

El folder **MainWindow.xaml** y sus archivos internos son los que muestran la interfaz al compilarse el programa, en otras palabras son como el motor del carro para el proyecto.

![ventana de los recursos de la aplicacion echa con wpf](pathname:///exposition-net-framework/img/wpf/ventana-de-los-recursos-de-la-aplicacion-echa-con-wpf.png)

## Modificando propiedades dede el codigo XAML

Tu puedes modificar las propiedades de la ventana directamente desde el marcado o codigo xaml o puedes hacerlo desde la ventana de propiedades.

![cambiando titulo desde la etiqueta xaml](pathname:///exposition-net-framework/img/wpf/cambiando-titulo-desde-la-etiqueta-xaml.png)

![cambiando titulo desde la ventana de propiedades](pathname:///exposition-net-framework/img/wpf/cambiando-titulo-desde-la-ventana-de-propiedades.png)

compruebalo tu mismo.

![cambiando titulo de la interfaz de wpf](pathname:///exposition-net-framework/img/wpf/cambiando-titulo-de-la-interfaz-de-wpf.png)

## Modificamos propiedades desde la ventana de propiedades

Ahora vamos a cambiar el color de la ventana, cabe recalcar que este cambio es opcional.

![cambiando fondo a la interfaz echa con wpf](pathname:///exposition-net-framework/img/wpf/cambiando-fondo-a-la-interfaz-echa-con-wpf.png)

![cambiando fondo a la interfaz echa con wpf 2](pathname:///exposition-net-framework/img/wpf/cambiando-fondo-a-la-interfaz-echa-con-wpf-2.png)

## Agregando el primer elemento

Ahora agregaremos un elemento a nuestra interfaz de aplicacion o de trabajo.
Para eso nos dirigimos a la ventana de toolbox o caja de texto y seleccionamos el elemento textbox.

![seleccionando textbox wpf](pathname:///exposition-net-framework/img/wpf/seleccionando-textbox-wpf.png)

Ahora hay que agregarlo arrastrandolo hasta la interfaz de aplicacion o canvas o espacio de trabajo.

![agrando textbox wpf](pathname:///exposition-net-framework/img/wpf/agrando-textbox-wpf.png)

Por defecto el textbox viene con texto agregado pero a nosotros nos interesa que venga sin texto.
Entonces vamos a modificar su propiedad Text para eliminar el texto por defecto.

![borramos el texto que biene por defecto del textbox wpf](pathname:///exposition-net-framework/img/wpf/borramos-el-texto-que-biene-por-defecto-del-textbox-wpf.png)

El resultado seria lo siguiente.

![texto borrado de textbox wpf](pathname:///exposition-net-framework/img/wpf/texto-borrado-de-textbox-wpf.png)

Perfecto, Nos falta agregarle el nombre identificador por el cual sera llamado para agregarle funcionalidades mediante **codigo c#**.
Para hacer eso necesitamos modificar su propiedad **name**, pero esta vez modificares sus propiedades mediante otro metodo posiblemente mas comodo que el anterior.

![alternativa para modificar las propiedades del textbox](pathname:///exposition-net-framework/img/wpf/alternativa-para-modificar-las-propiedades-del-textbox.png)

Entonces modifiquemos la propiedad **name**

![agregandole el nombre identificador al textbox wpf](pathname:///exposition-net-framework/img/wpf/agregandole-el-nombre-identificador-al-textbox-wpf.png)