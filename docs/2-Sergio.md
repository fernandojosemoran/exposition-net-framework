---
sidebar_position: 2
title: Sergio - WPF
---

```c# title="Este ejemplo hace uso de las siguientes librerias"
using System;
using System.Windows;
using System.Windows.Controls;
```
## Empezamos

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
Este codigo es sacado de la ventana inferior que se abre cuando el proyecto esta recien creado.

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

:::info La Propiedad Name
Recurda la propiedad name debe de ser diferente, ya que es un identificador que usamos para llamar con codigo c# el elemento.
Entonces nunca uses los mismos nombres para la propiedad name. Esta propiedad la tienen la mayoria de elementos que se encuentran en la toolbox o caja de herramientas.
:::

![alternativa para modificar las propiedades del textbox](pathname:///exposition-net-framework/img/wpf/alternativa-para-modificar-las-propiedades-del-textbox.png)

Entonces modifiquemos la propiedad **name**

![agregandole el nombre identificador al textbox wpf](pathname:///exposition-net-framework/img/wpf/agregandole-el-nombre-identificador-al-textbox-wpf.png)

Bien, Agregaremos otro textbox y cambiaremos sus propiedad **Name** que podriamos decir es la mas importante.

![Modificando propiedad name de textbox complemento](pathname:///exposition-net-framework/img/wpf/Modificando-propiedad-name-de-textbox-complemento.png)

Perfecto ya tenemos dos textbox agregados solo falta uno mas.

![vista previa de los textbox](pathname:///exposition-net-framework/img/wpf/vista-previa-de-los-textbox.png)

```powershell
txtValorPrincipal   <--------------- El textbox de la izquierda.
txtValorComplemento  <-------------- El textbox de la derecha
```
Vamos a crear el tercer textbox faltante, este ultimo hara referencia al resultado final de la operacion aritmetica.

![agregando un tercer textbox y modificando su propiedad name](pathname:///exposition-net-framework/img/wpf/agregando-un-tercer-textbox-y-modificando-su-propiedad-name.png)

Ahora debemos seleccionar un label para cada uno de los textbox.

![seleccionando el primer label](pathname:///exposition-net-framework/img/wpf/seleccionando-el-primer-label.png)

Una vista previa de come estaria quedando nuestra calculadora.

![agregamos otros dos label](pathname:///exposition-net-framework/img/wpf/agregamos-otros-dos-labels.png)

Pongamos un texto que haga sentido a la funcionalidad del textbox o caja de texto que le acompana.

![cambiamos valor de texto de label](pathname:///exposition-net-framework/img/wpf/cambiamos-valor-de-texto-de-label.png)

Cambiemos el color de letra para que se mire visualmente mas bonito y mas comodo.

![cambiamos color de texto de label wpf](pathname:///exposition-net-framework/img/wpf/cambiamos-color-de-texto-de-label-wpf.png)

Vista previa de como quedarian los labels.

![resultado final de los textbox y labels wpf](pathname:///exposition-net-framework/img/wpf/resultado-final-de-los-textbox-y-labels-wpf.png)

Seleccionamos el elemento **radioButton** de la ventana de caja de herramientas.

![seleccionando radioButton](pathname:///exposition-net-framework/img/wpf/seleccionando-radioButton.png)

Ahora agregaremos cuatro **radioButton**.

![Agregando cuatro radioButton](pathname:///exposition-net-framework/img/wpf/Agregando-cuatro-radioButton.png)

Tenemos que modificar la **propiedad content** de los radioButton por un texto que haga sentido a su funcionalidad.

![modificando propiedad content de los labels](pathname:///exposition-net-framework/img/wpf/modificando-propiedad-content-de-los-labels.png)

Ahora cambiemos el color de texto para que se mire mejor visualmente.

- La flecha roja indica que la **propiedad foreground** es la propiedad de los labels para cambiar el color.
- La flecha amarilla indica que escojas un color mediante el punto de eleccion.

![cambiando color de texto de los radio buttons](pathname:///exposition-net-framework/img/wpf/cambiando-color-de-texto-de-los-radio-buttons.png)

Ahora agregamos un nombre identificador a cada label modificando la **propiedad Name**.

:::info La Propiedad Name
Recurda la propiedad name debe de ser diferente, ya que es un identificador que usamos para llamar con codigo c# el elemento.
Entonces nunca uses los mismos nombres para la propiedad name. Esta propiedad la tienen la mayoria de elementos que se encuentran en la toolbox o caja de herramientas.
:::

los identificadores que usaremos en este ejemplo para cada label son:

```md title="puedes usar estos identificadores en el proyecto si lo deseas."
rbSumar
rbResta
rbDividir
rbMultiplicar
```

![agregando identificador a cada radio button](pathname:///exposition-net-framework/img/wpf/agregando-identificador-a-cada-radio-button.png)

Vista previa de los radioButton.

![vista previa de los radioButtons](pathname:///exposition-net-framework/img/wpf/vista-previa-de-los-radioButtons.png)

Agreguemos un boton que haga la funcionalidad de calcular.

![seleccionando un botton](pathname:///exposition-net-framework/img/wpf/seleccionando-un-botton.png)

Arrastremos el boton a la interfaz de la aplicacion o canvas.

![agregamos el button](pathname:///exposition-net-framework/img/wpf/agregamos-el-button.png)

Modifiquemos la **propiedad content** del boton para poner un texto que haga sentido a su funcionalidad.

![modificamos la propiedad content del button](pathname:///exposition-net-framework/img/wpf/modificamos-la-propiedad-content-del-button.png)

Agreguemos un identificador al boton para llamarlo desde el codigo c# y agregarle funcionalidades.

![agregamos un identificador al button](pathname:///exposition-net-framework/img/wpf/agregamos-un-identificador-al-button.png)

Ahora que ya tenemos todos los elementos de la interfaz, demos un vistazo por el codigo XAML.

![mostrando codigo XAML](pathname:///exposition-net-framework/img/wpf/mostrando-codigo-XAML.png)

Bien, abajo tienes todo el codigo XAML generado por WPF.

```xml title="Codigo completo creado al usar mas elementos de la ventana caja de herramientas"
<Window x:Class="MiPrimeraAplicacionDeEscritorioUsandoWPF.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:MiPrimeraAplicacionDeEscritorioUsandoWPF"
        mc:Ignorable="d"
        Title="Mi Primer Programa con WPF" 
        Height="488" 
        Width="663" 
        Icon="/docusaurus.png" 
        Background="#FF524FB3" 
        SizeToContent="Height" 
        Topmost="True">

    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="111*"/>
            <RowDefinition Height="221*"/>
            <RowDefinition Height="140*"/>
            <RowDefinition Height="0*"/>
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*"/>
            <ColumnDefinition/>
        </Grid.ColumnDefinitions>
        <TextBox x:Name="txtValorPrincipal" HorizontalAlignment="Center" Margin="0,33,0,0" Grid.Row="1" TextWrapping="Wrap" VerticalAlignment="Top" Width="120" Height="18" Grid.Column="1" TextChanged="txtValorPrincipal_TextChanged"/>
        <TextBox x:Name="txtValorComplemento" Grid.Column="1" HorizontalAlignment="Center" Margin="0,93,0,0" Grid.Row="1" TextWrapping="Wrap" VerticalAlignment="Top" Width="120" Height="18"/>
        <TextBox x:Name="txtResultado" Grid.Column="1" HorizontalAlignment="Center" Margin="0,153,0,0" Grid.Row="1" TextWrapping="Wrap" VerticalAlignment="Top" Width="120" Height="18"/>
        <Label Content="Primer Valor" HorizontalAlignment="Left" Margin="80,100,0,0" VerticalAlignment="Top" RenderTransformOrigin="-0.437,0.992" Height="23" Width="118" Grid.Column="1" Grid.RowSpan="2" Foreground="#FFFFFEFE">
            <Label.RenderTransform>
                <TransformGroup>
                    <ScaleTransform/>
                    <SkewTransform/>
                    <RotateTransform Angle="-0.524"/>
                    <TranslateTransform X="19.121" Y="21.271"/>
                </TransformGroup>
            </Label.RenderTransform>
        </Label>
        <Label Content="Segundo Valor" HorizontalAlignment="Left" Margin="80,49,0,0" VerticalAlignment="Top" RenderTransformOrigin="-0.437,0.992" Height="23" Width="86" Grid.Column="1" Grid.Row="1" Foreground="#FFFFFEFE">
            <Label.RenderTransform>
                <TransformGroup>
                    <ScaleTransform/>
                    <SkewTransform/>
                    <RotateTransform Angle="-0.524"/>
                    <TranslateTransform X="19.121" Y="21.271"/>
                </TransformGroup>
            </Label.RenderTransform>
        </Label>
        <Label Content="Resultado" HorizontalAlignment="Left" Margin="80,107,0,0" VerticalAlignment="Top" RenderTransformOrigin="-0.437,0.992" Height="23" Width="118" Grid.Column="1" Grid.Row="1" Foreground="#FFFFFEFE">
            <Label.RenderTransform>
                <TransformGroup>
                    <ScaleTransform/>
                    <SkewTransform/>
                    <RotateTransform Angle="-0.524"/>
                    <TranslateTransform X="19.121" Y="21.271"/>
                </TransformGroup>
            </Label.RenderTransform>
        </Label>
        <RadioButton Content="Sumar" HorizontalAlignment="Left" Margin="64,46,0,0" Grid.Row="1" VerticalAlignment="Top" Checked="RadioButton_Checked" Background="#FFF5EFEF" BorderBrush="#FFF7F2F2" Foreground="#FFECE3E3"/>
        <RadioButton Content="Restar" HorizontalAlignment="Left" Margin="64,83,0,0" Grid.Row="1" VerticalAlignment="Top" Checked="RadioButton_Checked" Foreground="#FFF3EDED"/>
        <RadioButton Content="Dividir" HorizontalAlignment="Left" Margin="191,49,0,0" Grid.Row="1" VerticalAlignment="Top" Checked="RadioButton_Checked" Foreground="#FFFDFBFB"/>
        <RadioButton Content="Multiplicar" HorizontalAlignment="Left" Margin="191,86,0,0" Grid.Row="1" VerticalAlignment="Top" Checked="RadioButton_Checked" Foreground="#FFFFFBFB"/>
        <Button x:Name="btnCalcular" Content="Calcular" HorizontalAlignment="Center" Margin="0,125,0,0" Grid.Row="1" VerticalAlignment="Top" Width="202" Height="23"/>
    </Grid>
</Window>
```
## Programamos las funcionalidades aritmeticas

Lo siguiente es dar doble click al boton calcular para entrar en el entorno de desarrollo o programacion.

```c title="codigo del boton calcular"
private void btnCalcular_Click(object sender, RoutedEventArgs e)
{   
    // si el label suma es seleccionado entonces ejecutamos el codigo que lo encierra con las {}.
    if (rbSuma.IsChecked == true)
    {
        // convertimos los datos ingresados por el usuario a numeros, una vez esten convertidos a numeros los sumamos entre si.
        double sumaArithmeticOperation = Convert.ToDouble(txtValorComplemento.Text) + Convert.ToDouble(txtValorPrincipal.Text);
        // convertmos el valor sumado a texto y lo ingresamos como valor dentro de el textbox o caja de texto llamado resultado.
        txtResultado.Text = Convert.ToString(sumaArithmeticOperation);
    }

    // si el label resta es seleccionado entonces ejecutamos el codigo que lo encierra con las {}.
    if (rbResta.IsChecked == true)
    {
        // convertimos los datos ingresados por el usuario a numeros, una vez esten convertidos a numeros los restamos entre si.
        double restaArithmeticOperation = Convert.ToDouble(txtValorPrincipal.Text) - Convert.ToDouble(txtValorComplemento.Text);
        // convertmos el valor restado a texto y lo ingresamos como valor dentro de el textbox o caja de texto llamado resultado.
        txtResultado.Text = Convert.ToString(restaArithmeticOperation);
    }

    // si el label dividir es seleccionado entonces ejecutamos el codigo que lo encierra con las {}.
    if (rbDividir.IsChecked == true)
    {
        // convertimos los datos ingresados por el usuario a numeros, una vez esten convertidos a numeros hacemos la operacion de divicion.
        double divideArithmeticOperation = Convert.ToDouble(txtValorPrincipal.Text) / Convert.ToDouble(txtValorComplemento.Text);
        // convertmos el valor dividido a texto y lo ingresamos como valor dentro de el textbox o caja de texto llamado resultado.
        txtResultado.Text = Convert.ToString(divideArithmeticOperation);
    }

    // si el label multiplicar es seleccionado entonces ejecutamos el codigo que lo encierra con las {}.
    if (rbMultiplicar.IsChecked == true)
    {
        // convertimos los datos ingresados por el usuario a numeros, una vez esten convertidos a numeros hacemos la multiplicacion.
        double multiplyArithmeticOperation = Convert.ToDouble(txtValorComplemento.Text) * Convert.ToDouble(txtValorPrincipal.Text);
        // convertmos el valor multiplicado a texto y lo ingresamos como valor dentro de el textbox o caja de texto llamado resultado.
        txtResultado.Text = Convert.ToString(multiplyArithmeticOperation);
    }
}
```
## Resultado Final

![calculadora wpf ](pathname:///exposition-net-framework/img/wpf/calculadora-wpf.gif)