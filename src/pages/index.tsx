import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
// import BrowserOnly from '@docusaurus/BrowserOnly';
// import useTheme from '../hooks/useTheme';

function HomepageHeader() {
  return (
    <header className='bg-emerald-600 flex flex-col items-center text-center gap-10 p-10 text-white'>
      <h1 className='xl:text-4xl text-lg md:text-xl'>¿QUE ES .NET FRAMEWORK?</h1>
      <div>
        <p className='xl:w-10/12 text-sm md:text-lg lg:text-xl xl:text-2xl'>Es una plataforma de desarrollo para crear aplicaciones para web, Windows y Microsoft Azure.</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div className='md:px-10 lg:px-16 xl:px-20'>
        <main className='pt-10 flex flex-col gap-20 p-5'>

          <section className='flex flex-col gap-4'>
            <h2 className='text-lg xl:text-2xl font-bold'>¿Que tipos de proyectos se pueden crear con <span>.Net Framework</span>?</h2>
            <div className=' text-sm text-md md:text-lg lg:text-xl flex flex-col gap-2'>
              <li className='list-disc'>Backend usando <span className='font-sans'>ASP.NET Core, and .NET</span></li>
              <li className='list-disc'>Frontend usando.</li>
              <li className='list-disc'>Aplicaciones de escritorio usando <span className='font-sans'>.NET Core, .NET Framework, .Net</span>.</li>
              <li className='list-disc'>Trabajar con datos usando <span className='font-sans'>ADO.NET</span>.</li>
              <li className='list-disc'>Aplicaciones de consola.</li>
            </div>
          </section>

          <section className='flex flex-col gap-4'>
            <h2 className='text-lg xl:text-2xl font-bold'>Caracteristicas de <span className='font-semibold'>.Net Framework</span></h2>
            <div className=' text-sm text-md md:text-lg lg:text-xl flex flex-col gap-2'>
                <li className='list-disc'>Es a framework en tiempo de ejecución de lenguaje común <span className='font-sans'>(CLR)</span></li>
                <li className='list-disc'>Proporcione un entorno de programación coherente y orientado a objetos.</li>
                <li className='list-disc'>Es a un framework robusto, Por las implementaciones de seguridad que tiene.</li>
                <li className='list-disc'>La experiencia del desarrollador es consistente en una variedad de tipos de aplicaciones.</li>
                <li className='list-disc'>Elimina los problemas de rendimiento.</li>
                <li className='list-disc'>Pueden coexistir varias versiones de .NET Framework en una sola computadora al mismo tiempo.</li>
            </div>
          </section>
        </main>

        <section className='flex flex-col gap-4 p-5 pt-16 pb-10'>
          <h2 className='text-lg xl:text-2xl font-bold'>Como instalar .Net Framework</h2>
          <div className=' text-sm text-md md:text-lg lg:text-xl flex flex-col gap-10'>
            <p className=''>
              No es necesario que tenga conocimientos específicos sobre .NET Framework o su funcionamiento. En su mayor parte, el marco es completamente transparente para los usuarios. 
              Si está utilizando el sistema operativo Windows, <span className=' font-bold'>es posible que .NET Framework ya esté instalado en su computadora.</span> <span className='font-bold'>Además, si instala una aplicación que requiere .NET Framework, el programa de instalación de la aplicación podría instalar una versión específica del marco en su computadora.</span> En algunos casos, es posible que vea un cuadro de diálogo que le solicita que instale .NET Framework. Si acaba de intentar ejecutar una aplicación cuando aparece este cuadro de diálogo y si su computadora tiene acceso a Internet, puede ir a una página web que le permite instalar la versión faltante de .NET Framework. Para obtener más información, consulte la guía de instalación.
            </p>
            <div className='flex flex-col gap-2'>
              <p>
                En general, no debe desinstalar las versiones de .NET Framework que estén instaladas en su computadora. Hay dos razones para esto:
              </p>
              <div className='text-sm text-md md:text-lg lg:text-xl flex flex-col gap-2'>
                <li>Si una aplicación que utiliza depende de una versión específica de .NET Framework, esa aplicación puede fallar si se elimina esa versió</li>
                <li>Algunas versiones de .NET Framework son actualizaciones locales de versiones anteriores. Por ejemplo, .NET Framework 4.8 es una actualización local de las versiones 4 a 4.7.2</li>
              </div>
            </div>
          </div>
        </section>
        
        <section className='flex flex-col gap-4 p-5 pt-16 pb-10'>
          <h2 className='text-lg xl:text-2xl font-bold'>.Net Framework es de tipo Common Language Runtime (CLR)</h2>
          <div className='text-sm text-md md:text-lg lg:text-xl flex flex-col gap-3'>
            <p>
              .NET Framework consta de Common Language Runtime (CLR) y la biblioteca de clases de .NET Framework. <span className='font-bold'>Common Language Runtime es la base de .NET Framework</span>. Piense en el tiempo de ejecución como un agente que <span className='font-bold'>administra el código</span> en el momento de la ejecución, brindando servicios centrales como <span className='font-bold'>administración de memoria, administración de subprocesos y comunicación remota</span>, al mismo tiempo que aplica una estricta seguridad de tipos y otras <span className='font-bold'>formas de precisión del código que promueven la seguridad y la solidez</span>. De hecho, el concepto de gestión de código es un principio fundamental del tiempo de ejecución. El código que tiene como destino el tiempo de ejecución se conoce como código administrado, mientras que el código que no tiene como destino el tiempo de ejecución se conoce como código no administrado. La biblioteca de clases es una colección completa y orientada a objetos de tipos reutilizables que se utilizan para desarrollar aplicaciones que van desde aplicaciones tradicionales de línea de comandos o de interfaz gráfica de usuario (GUI) hasta aplicaciones basadas en las últimas innovaciones proporcionadas por ASP.NET, como Web Formularios y servicios web XML.
            </p>
            <p>
              .NET Framework puede alojarse en componentes no administrados que cargan Common Language Runtime en sus procesos e inician la ejecución de código administrado, creando así un entorno de software que explota características tanto administradas como no administradas. .NET Framework no solo proporciona varios hosts de ejecución sino que también admite el desarrollo de hosts de ejecución de terceros.
            </p>
            <p>
              Por ejemplo, ASP.NET aloja el tiempo de ejecución para proporcionar un entorno escalable del lado del servidor para el código administrado. ASP.NET trabaja directamente con el tiempo de ejecución para habilitar aplicaciones ASP.NET y servicios web XML, los cuales se analizan más adelante en este artículo.
            </p>
            <p>
              La siguiente ilustración muestra la relación de Common Language Runtime y la biblioteca de clases con sus aplicaciones y con el sistema en general. La ilustración también muestra cómo funciona el código administrado dentro de una arquitectura más grande.
            </p>
          </div>
        </section>

        <section className='flex flex-col gap-4 p-5 pt-16 pb-10'>
          <h2 className='text-lg xl:text-2xl font-bold'>Participantes de la exposicion</h2>
          <div className='text-sm text-md md:text-lg lg:text-xl flex flex-col gap-2'>
                <li className='list-disc'>Fernando Jose Moran Arita</li>
                <li className='list-disc'>Sergio Samir Canales Mejia</li>
                <li className='list-disc'>Alex</li>
                <li className='list-disc'>Yalixa</li>
          </div>
        </section>
      </div>
    </Layout>
  );
}
