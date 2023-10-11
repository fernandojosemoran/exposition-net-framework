import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <header className='bg-emerald-600 flex flex-col items-center text-center gap-10 p-10'>
      {/* <img src=''>QUE ES .NET FRAMEWORK</img> */}
      <h1 className='xl:text-4xl text-lg md:text-xl'>QUE ES .NET FRAMEWORK</h1>
      <div className='xl:w-1/2 text-sm md:text-sm lg:text-xl xl:text-4xl'>
        <p>Es una plataforma de desarrollo para crear aplicaciones para web, Windows y Microsoft Azure.</p>
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
            <h2 className='text-lg xl:text-2xl font-bold'>Que tipos de proyectos se pueden crear con <span>.Net Framework</span>?</h2>
            <div className=' text-sm text-md md:text-lg lg:text-xl'>
              <li className='list-disc'>Backend usando <span className='font-sans'>ASP.NET Core, and .NET</span>.</li>
              <li className='list-disc'>Frontend usando.</li>
              <li className='list-disc'>Aplicaciones de escritorio usando <span className='font-sans'>.NET Core, .NET Framework, .Net</span>.</li>
              <li className='list-disc'>Trabajar con datos usando <span className='font-sans'>ADO.NET</span>.</li>
              <li className='list-disc'>Aplicaciones de consola.</li>
            </div>
          </section>
          <section>
            <h2 className='text-lg xl:text-2xl font-bold'>Caracteristicas de <span className='font-semibold'>.Net Framework</span></h2>
          </section>
        </main>
      </div>
    </Layout>
  );
}
