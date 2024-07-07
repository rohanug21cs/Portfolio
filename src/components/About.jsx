import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <br></br>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Rohan Kumar Choudhary,  
          <br/>
          I am a seasoned technologist proficient in C, C++, Python, Java, and JavaScript, specializing in frameworks like React for dynamic front-end experiences and Node.js with Express.js for scalable back-end solutions. I leverage Tailwind CSS and Material UI to create intuitive and responsive user interfaces.</p>
<br></br>
<p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>With hands-on experience in MongoDB and MySQL, I ensure efficient data management and optimization. Academically, I have a strong background in Data Structures, Algorithms, Object-Oriented Programming, and Operating Systems, complemented by soft skills in effective communication, leadership, and problem-solving.</p>
<br></br>
<p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Passionate about the convergence of technology and creativity, I explore Artificial Intelligence, focusing on Deep Learning and Machine Learning frameworks such as TensorFlow and PyTorch. My aim is to innovate and address complex challenges in this evolving field.</p>
<br></br>
          <ButtonLink
            url='https://drive.google.com/file/d/1FL9GG0dALGiWr62hTnzIQ-PS1qOEl8bO/view?usp=sharing'
            text='View Resume →'
            padding={`p-3`}
          />

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;