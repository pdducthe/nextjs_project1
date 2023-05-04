import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='bg-white'>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className='px-10'>
        <section className='h-screen bg-white'>
          <nav className='py-5 mb-12 flex justify-between'>
            <h1 className='text-xl medium-Roboto'>PROFESSIONAL DEVELOPER</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-pink-600 '>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-md px-4 py-2 ml-10 text-cyan-50' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-2'>
            <h2 className='text-4xl py-2 text-teal-500 font-semibold'>JACK THOMPSON</h2>
            <h3 className='text-2xl py-2 font-semibold'>Fullstack Developer</h3>
            <p className='italic my-3'>
              Providing services for commercial websites, personal portfolio and blogs <br />
              A lot of things are waiting for you to discover <br />
              Don't hesitate to contact me because I'm ready to help you
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-5'>
            <AiFillTwitterCircle style={{ cursor: 'pointer', color: '#55acee' }} />
            <AiFillLinkedin style={{ cursor: 'pointer', color: '#0077b5' }} />
            <AiFillYoutube style={{ cursor: 'pointer', color: '#cd201f' }} />
          </div>
          {/* carousel items */}
          <div className='carousel-wrapper'>
            <Carousel slide interval={400000} activeIndex={index} onSelect={handleSelect} keyboard>
              <Carousel.Item >
                <img src="/images/flower1.jpg" className='img-responsive' alt='First Slide' />
                <Carousel.Caption>
                  <h3 className='text-center font-semibold text-orange-400'>Personal Portfolio</h3>
                  <p className='justify-center px-20 py-1 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, modi voluptate id fuga nisi nulla.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/images/flower2.jpg" className='img-responsive' alt='Second Slide' />
                <Carousel.Caption >
                  <h3 className='text-center font-semibold text-orange-400'>Commercial Websites</h3>
                  <p className='justify-center px-20 py-1 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facere quae consequatur sint quia? Possimus?</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/images/flower3.jpg" className='img-responsive' alt='Third Slide' />
                <Carousel.Caption>
                  <h3 className='text-center font-semibold text-orange-400'>Blogs Design</h3>
                  <p className='justify-center px-20 py-1 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam quae incidunt esse culpa ducimus.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  )
}
