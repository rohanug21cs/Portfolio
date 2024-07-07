import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import image from '../assets/IMG20240504203913.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Home = () => {

	const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % name.length;
      const fullText = name;

      if (!isDeleting && text !== fullText) {
        // Typing forward
        setText(fullText.substring(0, text.length + 1));
      } else if (isDeleting && text !== '') {
        // Deleting backward
        setText(fullText.substring(0, text.length - 1));
      } else if (!isDeleting && text === fullText) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        // Pause before starting to type again
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
	return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);
	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			{/* <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
					<p className='mt-3 text-xl'>I am a MERN stack developer and ML researcher.</p>
				</div>      
			</div> */}
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
        <div className='flex flex-col sm:flex-row items-center w-full max-w-6xl px-4 sm:px-8'>
          <div className='flex-1 pt-4 h-36 backdrop-blur-sm rounded-3xl'>
            <h1 className='text-4xl sm:text-6xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
            <p className='mt-3 text-lg sm:text-xl'>I am a MERN stack developer and ML researcher.</p>
			<div className='flex mt-4'>
              {/* GitHub Link */}
              <a href="https://github.com/rohanug21cs" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaGithub className="text-3xl text-gray-400 hover:text-gray-200 transition-colors duration-300" />
              </a>
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/rohan-kumar-choudhary-2ab819226" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-gray-400 hover:text-gray-200 transition-colors duration-300" />
              </a>
            </div>
          </div>
          <div className='flex-1 mt-8 sm:mt-0 sm:ml-8'>
            <img src={image} alt='Your Photo' className='custom-image' />
          </div>
        </div>
      </div>
			<Footer/>
		</div>	
	);
}

export default Home;