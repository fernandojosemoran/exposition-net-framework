---
sidebar_position: 3
title: Fernando - Windows Service
---
```c# title="Este ejemplo hace uso de las siguientes librerias"
using System.ComponentModel;
using System.ServiceProcess;
using System.Timers;
using System.IO;
using System;
```

## ¿Qué es un servicio de Windows?

Los servicios de Windows son aplicaciones de software que no son UI y que se ejecutan en segundo plano. Los servicios de Windows generalmente se inician cuando se inicia un sistema operativo y está programado para ejecutarse en segundo plano para ejecutar algunas tareas. Los servicios de Windows también se pueden iniciar de forma automática o manual. También puede pausar, detener y reiniciar manualmente los servicios de Windows.

El servicio de Windows es un programa informático que se ejecuta en segundo plano para ejecutar algunas tareas. Algunos ejemplos de servicios de Windows son la actualización automática de Windows, consultar correos electrónicos, imprimir documentos, el Agente SQL Server, escaneo e indexación de archivos y carpetas, etc. Si abre el Administrador de tareas y hace clic en la pestaña Servicios, verá cientos de servicios. ejecutándose en su máquina. También puede ver los estados de estos servicios. Algunos servicios se están ejecutando, otros se han detenido y otros se han detenido. Puede iniciar, detener y pausar un servicio desde aquí haciendo clic derecho en el servicio.

![servicios de windows](pathname:///exposition-net-framework/img/servicios-de-windows.jpg)

## Empezamos

Buscamos **Windows Service** y escogemos la opcion que dice *.net framework*.

![Buscando tecnologia de windows service](pathname:///exposition-net-framework/img/Buscando-tecnologia-de-windows-service.png)

Despues nombramos nuestro proyecto.

:::note Nombra de forma correcta tus proyectos
No uses espacios en blanco, por ejemplo **(No llames tu proyecto asi)**. Ademas no uses caracteres raros como **?%$^()][{}#&** entre otros solo usa letras del alfabeto, recomendablemente solo del alfabero americano.
:::

![nombrando nuestro proyecto de windows service](pathname:///exposition-net-framework/img/nombrando-nuestro-proyecto-de-windows-service.png)

### Panorama principal al iniciar el proyecto.

![panorama de inicio del proyecto](pathname:///exposition-net-framework/img/panorama-de-inicio-del-proyecto.png)

Nos indica que debemos arrastrar un elemento de la caja de herramientas asi la interfaz grafica o canvas.

*[Como activar la toolbox o caja de herramientas](Alex)*, Recuerda ir a la seccion de **Activamos las ventana de caja de herramientas**.

## Agregar un instalador para windows server

Para agregar un instalador, debemos dar click izquierdo y se desplegara una ventana con opciones.
A nosotros nos interesa la que dice **Add Installer o Agregar Instalador**.

![agregar un instalador](pathname:///exposition-net-framework/img/wService/agregar-un-instalador.png)

Despues tendremos un panorama de una pestalla abierta.

![vista previa despues de hacer click en agregar instalador](pathname:///exposition-net-framework/img/wService/vista-previa-despues-de-hacer-click-en-agregar-instalador.png)

Esta pestaña hace referencia al archivo que se creo al agregar el installer. Tu puedes verlo mirando los archivos del proyecto.

![mostrando instalador creado](pathname:///exposition-net-framework/img/wService/mostrando-instalador-creado.png)

Bien, ahora observemos el codigo fuente del installer o instalador. 
Para eso damos click izquierdo y click a la opcion que dice **View Code o Ver Codigo**.

![seleccionando la opcion de ver codigo](pathname:///exposition-net-framework/img/wService/seleccionando-la-opcion-de-ver-codigo.png)

El codigo del installer o instalador se miraria de la siguiente forma.

![mirando el codigo fuente del instalador](pathname:///exposition-net-framework/img/wService/mirando-el-codigo-fuente-del-instalador.png)

Vamos a explicar lo que señala las flechas

    La flecha roja indica a que grupo de logica de codigo pertenece, por ejemplo el installer o instalador pertenece a la misma logica de programacion a la que pertenece nuestra interfaz grafica o interfaz de aplicacion. 

La fecha verde 

    La flecha verder indica el nombre del la clase que hace posible que el installer o instalador exista, ademas hace uso de un metodo que inicializa el instalador.

Bueno verifiquemos si en realidad pertenece a la mismo campo de logica que el installer o instalador.

![mostrando codigo del windows servicio](pathname:///exposition-net-framework/img/wService/mostrando-codigo-del-windows-servicio.png)

## Modificando propiedades del servicio

Ahora Observemos las propiedades mediante el codigo del componente que instancia el metodo de disponse.
Para eso debes de poner el puntero del mouse en el componente marcado en rojo y pretar **la tecla control + click**

![mostrando componente o funcion a ver codigo](pathname:///exposition-net-framework/img/wService/mostrando-componente-o-funcion-a-ver-codigo.png)

Si has echo todo bien, podras ver el codigo que compone internamente el componente **InitializeComponent();**.

Podras notar con las flecha de color rojo el nombre del servicio.
Y con el lo que esta marcado de verde algunas propiedades que conforman el servicio.

![observando codigo del componente que inicializaba el metodo del installer o instalador](pathname:///exposition-net-framework/img/wService/observando-codigo-del-componente-que-inicializaba-el-metodo-del-installer-o-instalador.png)

Perfecto, agregamos una propiedad de cuenta al componente y le asignamos un valor indicandole que es un servicio local.

![agregamos una propiedad y le asignamos un valor](pathname:///exposition-net-framework/img/wService/agregamos-una-propiedad-y-le-asignamos-un-valor.png)

Bien, vamos a agregar dos propiedades mas que son fundamentales para los servicios de windows, ya que son indentificadores visuales.

![agregando otras propiedades excensiales](pathname:///exposition-net-framework/img/wService/agregando-otras-propiedades-excensiales.png)

A que te hace sentido la propiedad **Description y DisplayName**. Bueno si eres informatico, alguna vez escuchastes o has abierto los servicios de windows, aunque no sepas con exactitud sus funcionalidades. las propiedades anteriores hacen referencia a los campos principales de la ventana de servicios de windows.

![mostrando la funcionalidad de las propiedades](pathname:///exposition-net-framework/img/wService/mostrando-la-funcionalidad-de-las-propiedades.png)

## Programando la logica del servicio de windows (Windows Service)

Ahora, vamos a implementar un temporizador y un código para llamar al servicio en un momento determinado. Luego, crearemos un archivo de texto y escribiremos la hora actual en el archivo de texto usando el servicio.

Bien, vamos a la ventana de la derecha donde se encuentran los archivos del proyecto.
buscamos el archivo llamado **Service1.cs** y damos click izquierdo, luego damos click a la **opcion View Code o Ver Codigo**.

![localizando el archivo donde pondremos nuestro codigo](pathname:///exposition-net-framework/img/wService/localizando-el-archivo-donde-pondremos-nuestro-codigo.png)

![indicando la opcion ver codigo](pathname:///exposition-net-framework/img/wService/indicando-la-opcion-ver-codigo.png)

Si todo salio bien, veremos el siguiente codigo.

Observa bien, hay dos metodos interesantes uno llamado **OnStart** y otro **OnStop** estos metodos pueden estar haciendo referencia a eventos.

:::info Los Eventos
La programación dirigida por eventos es un paradigma de programación en el que tanto la estructura como la ejecución de los programas van determinados por los sucesos que ocurran en el sistema.
:::

En otras palabras los eventos estan en la espera de que algo sucesa. Dicho de forma un poco erronea pero que simplifica la idea principal. 

Al iniciar el servicio el metodo **OnStart** ejecutara el codigo que se le programe y dicho igualmente con el metodo **OnStop**, unicamente que este ultimo se ejecutara cuando el servicio este terminando de ejecutarse.
Esto no quiere decir que el servicio finalice y no siga ejecutandose. Unicamente significa que realizo su tarea y ahora esta en alerta de otra la cual realizar siempre que tenga la misma finalidad por la cual el servicio fue creado.

![Vista previa del codigo](pathname:///exposition-net-framework/img/wService/Vista-previa-del-codigo.png)

El codigo se veria de la siguiente forma.

![logica finalizada](pathname:///exposition-net-framework/img/wService/logica-finalizada.png)

```c title="El codigo completo"
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;

namespace MiPrimeraAplicacionDeWindowsService
{
    public partial class Service1 : ServiceBase
    {
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            System.Timers.Timer timer = new System.Timers.Timer(); // name space(using System.Timers;)
            WriteToFile("Service is started at " + DateTime.Now);
            timer.Elapsed += new ElapsedEventHandler(OnElapsedTime);
            timer.Interval = 5000; //number in milisecinds
            timer.Enabled = true;
        }

        protected override void OnStop()
        {
            WriteToFile("Service is stopped at " + DateTime.Now);
        }

        private void OnElapsedTime(object source, ElapsedEventArgs e)
        {
            WriteToFile("Service is recall at " + DateTime.Now);
        }
        public void WriteToFile(string Message)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + "\\Logs";
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string filepath = AppDomain.CurrentDomain.BaseDirectory + "\\Logs\\ServiceLog_" + DateTime.Now.Date.ToShortDateString().Replace('/', '_') + ".txt";
            if (!File.Exists(filepath))
            {
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(filepath))
                {
                    sw.WriteLine(Message);
                }
            }
            else
            {
                using (StreamWriter sw = File.AppendText(filepath))
                {
                    sw.WriteLine(Message);
                }
            }
        }

    }
}
```
:::note Que hace el codigo de arriba
El código anterior llamará al servicio cada 5 segundos, creará una carpeta si no existe ninguna, entonces escribirá nuestro mensaje.
:::

## Procedimientos de busqueda

Bien, ya echo todo. Nos dirigimos a la ventana donde estan nuestros archivos y damos click izquierdo a la carpeta principal del proyecto es decir la que contiene todo los archivos del servicio de windows.

![damos click izquierdo en nuestro proyecto](pathname:///exposition-net-framework/img/wService/damos-click-izquierdo-en-nuestro-proyecto.png)

Se desplegara una ventana con varias opciones, la que nos interesa es la que se llama **Rebuil o Reconstruir**.

![creamos el rebuild](pathname:///exposition-net-framework/img/wService/creamos-el-rebuild.png)

Ahora buscamos en el sistema la **Consola de comandos de windows o cmd**.

![buscamos la consola de comandos](pathname:///exposition-net-framework/img/wService/buscamos-la-consola-de-comandos.png)

Despues damos click izquierdo en el programa y escogemos la opcion llamada **Run as administrator o Ejutar como administrador**.

![ejecutamos la consola de comandos como administrador](pathname:///exposition-net-framework/img/wService/ejecutamos-la-consola-de-comandos-como-administrador.png)

Veremos la siguiente ventana de fondo negro, conocida tambien de la siguientes formas **cmd, consola de comandos, terminal**

![mostramos la consola de comandos](pathname:///exposition-net-framework/img/wService/mostramos-la-consola-de-comandos.png)

Ahora, escribe el siguiente comando y luego presionas enter.

![ejecutamos el comando para ubicarnos en la carpeta que buscamos](pathname:///exposition-net-framework/img/wService/ejecutamos-el-comando-para-ubicarnos-en-la-carpeta-que-buscamos.png)

```bash
cd C:\Windows\Microsoft.NET\Framework\v4.0.30319 
```
:::note Que hace el comando de arriba?
El comando anterior indica que queremos buscar una carpeta en el sistema alojada en una ruta especifica, si la encuentra nos ubicaremos en ella desde la **consola de comandos** de lo contrario nos arrojara un error de que la carpeta que buscamos no existe.
:::

Despues, nos dirigimos a nuestro proyecto una vez mas y despues le damos click izquierdo a la carpeta principal del servicio que estamos creando.

![damos click izquierdo en nuestro proyecto](pathname:///exposition-net-framework/img/wService/damos-click-izquierdo-en-nuestro-proyecto.png)

Ahora escogemos la opcion **Open Folder in File Explorer o Abrir Ubicacion del la Carpeta**.

![seleccionando opcion abrir ubicacion del proyecto](pathname:///exposition-net-framework/img/wService/seleccionando-opcion-abrir-ubicacion-del-proyecto.png)

Se abrira el **Explorador de Archivos de Windows** y te mostrara donde estan ubicados todos los archivos del servicio.

![panorama de la carpeta del servicio](pathname:///exposition-net-framework/img/wService/panorama-de-la-carpeta-del-servicio.png)

Despues nos dirigimos a la seccion superior donde esta el nombre del servicio que creamos y damos click sobre el nombre.
Se desplegara un codigo con fondo azul el cual tienes que copiar, ya que sera de gran importancia.

![copiando ruta del directorio](pathname:///exposition-net-framework/img/wService/copiando-ruta-del-directorio.png)

## Instalando el servicio

![instalando nuestro servicio](pathname:///exposition-net-framework/img/wService/instalando-nuestro-servicio.png)

```bash
InstallUtil.exe C:\Users\ferna\source\repos\MiPrimeraAplicacionDeWindowsService\MiPrimeraAplicacionDeWindowsService\bin\Debug\MiPrimeraAplicacionDeWindowsService.exe
```
Bien, damos enter y si todo salio bien, tendras unos mensajes como los siguientes. Diciendonos que la instalacion fue exitosa.

![verificamos si la instalacion fue exitosa](pathname:///exposition-net-framework/img/wService/verificamos-si-la-instalacion-fue-exitosa.png)

## Verificamos el servicio

![verificamos si la instalacion fue exitosa](pathname:///exposition-net-framework/img/wService/verificamos-si-la-instalacion-fue-exitosa.png)

Nos dirigimos a buscar los servicios de windows **(services o servicios)**, damos click en la opcion de tuerca.

![buscando los servicios de windows](pathname:///exposition-net-framework/img/wService/buscando-los-servicios-de-windows.png)

Ahora, buscamos nuestro servicio.

![buscamos nuestro servicio](pathname:///exposition-net-framework/img/wService/buscamos-nuestro-servicio.png)

Damos click izquierdo sobre nuestro servicio y seleccionamos la opcion **properties o propiedades**.

![configuracion por defecto en las propiedades del servicio](pathname:///exposition-net-framework/img/wService/configuracion-por-defecto-en-las-propiedades-del-servicio.png)

Despues aparecera una ventana con unas propiedades por defecto.

Necesitamos cambiar la opcion de **This Account** a **Local System Account**, damos click en **apply** o **aplicar** y guardamos los cambios.

![cambiando opcion a localSystemAccount](pathname:///exposition-net-framework/img/wService/cambiando-opcion-a-localSystemAccount.png)

Despues de configurar las propiedades del servicio, damos click en **start o iniciar**. Esta opcion se encuentra en la parte superior de la ventana.

![iniciando el servicio](pathname:///exposition-net-framework/img/wService/iniciando-el-servicio.png)

Inmediatamente las opciones del servicio cambiaran a **Stop** y **Restart** o **Parar** y **Reiniciar**.

![se habilitan dos opciones para el servicio](pathname:///exposition-net-framework/img/wService/se-habilitan-dos-opciones-para-el-servicio.png)

## Resultado Final

Borro la carpeta y a los segundos vulve a aparecer sin crearla yo mismo, eso es gracias al servicio que estaba en funcionamiento y como puedes ver cada 5 segundos le agregaba texto extra al archivo de text llamado log.

![mostrando servicio de windows](pathname:///exposition-net-framework/img/wService/mostrando-servicio-de-windows.gif)
