"use client"; /*necessario para rodar a animação*/
import React from 'react'
import Image from 'next/image';
import Foto from '../../Images/Foto.jpeg'
import { TypeAnimation } from 'react-type-animation'; /*import para a animação*/

export const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
         <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Ola, sou a {" "} 
              </span>
              <br></br>
    {/*Animação*/}
    <TypeAnimation 
      sequence={[
        'Mariana',
        1000, 
        'Desenvolvedora Front-end',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> 
    {/*Animação*/}
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
              Desenvolvedora front-end, cursando Sistemas de Informação atualmente no 6º periodo.
              Tenho como objetivo ser capaz de crescer na área e melhorar como profissional.
            </p>
            <div>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200'>Me Contrate
              </button>
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white  mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Baixar currículo</span>
              </button>
            </div>
         </div>
         <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[400px] h-[400px] relative'>
          <Image 
          src={Foto}
          alt='Foto'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={220}
          height={300}
          />
          </div>
         </div>
        </div>
    </section>
  )
}

export default HeroSection;
