import React from "react";
import Footer from './Footer';
import MTDAC from '../assets/MTDAC.png';
import Sudoku from '../assets/Sudoku.png';
import Portfolio from '../assets/Portfolio.png';
import DialougeDome from '../assets/DialougeDome.jpg'
import IndianAirlines from '../assets/IndianAirlines.png'
const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Apple Disease Classifier using Multilayered Vision Transformer' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={MTDAC} alt="" />
            </a>}
            {title=='Real Time Sudoku Solver' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Sudoku} alt="" />
            </a>}
            {title=='Portfolio' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={Portfolio} alt="" />
            </a>}
            {title=='DialogueDome - Chatting App' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={DialougeDome} alt="" />
            </a>}
            {title=='Ticket Price Analysis of Indian Airlines' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={IndianAirlines} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Apple Disease Classifier using Multilayered Vision Transformer',
        description:'Applied data augmentation techniques such as scaling, rotation, and shearing, achieving a test accuracy of 96.26% on an ICAR-curated real-time dataset in an uncontrolled environment, surpassing pre-trained models Inception ResNet (84.37%) and VGG16 (92.92%).',
        image: {MTDAC},
        git:'https://github.com/rohanug21cs/Apple-Disease-Identification-using-Vision-Transformer',
        technologies:['Python', 'Numpy', 'Pandas', 'Tensorflow', 'Sklearn']
    },
    {
        title:'Real Time Sudoku Solver',
        description:'Developed a Sudoku solver that uses the camera to detect a 9x9 Sudoku puzzle in the frame, extracts it, solves it, and overlays the solution on the puzzle. The program employs a CNN model trained on the MNIST dataset for digit recognition and leverages Python, Keras, OpenCV, TensorFlow, and Scipy for image processing and solving algorithms.',
        image: {Sudoku},
        git:"https://github.com/rohanug21cs/Real-Time-Sudoku-Solver",
        technologies:[ 'Python', 'Keras', 'Tensorflow', 'OpenCV', 'Scipy']
    },
    {
        title:'Portfolio',
        description:'Developed a to showcase all my Projects, Experiences, Skills and other works at a single place.',
        image: {Portfolio},
        git:"https://github.com/rohanug21cs/Portfolio",
        technologies:[ 'ReactJS', 'JavaScript', 'HTML', 'TailWind CSS']
    },
    {
        title:'DialogueDome - Chatting App',
        description:'Created a real-time chat app with Node.js, Express, and Socket.IO for instant messaging using WebSocket technology. Features include user management with unique usernames, error handling, and real-time notifications for chat room events. Integrated Google Maps API for dynamic location sharing, enhancing user engagement with location-specific URLs.',
        image: {DialougeDome},
        git:"https://github.com/rohanug21cs/DialogueDome",
        technologies:[ 'HTML', 'CSS', 'JavaScript', 'NodeJs', 'Express', 'Socket.IO']
    },
    {
        title:'Ticket Price Analysis of Indian Airlines',
        description:'Analyzed Indian Airlines flights using Python, Numpy, Pandas, Seaborn, Matplotlib, and PowerBi. Identified ticket price ranges for \'Economy\' and \'Business\' classes and studied the impact of booking timing on prices. Explored departure/arrival times and route-based pricing trends, highlighting cost variations for different flight schedules and stop options.',
        image: {DialougeDome},
        git:"https://github.com/rohanug21cs/Ticket-price-analysis-of-Indian-Airlines",
        technologies:[ 'Python', 'Numpy', 'Pandas', 'Seaborn', 'Matplotlib', 'PowerBI']
    }
]

export default Projects