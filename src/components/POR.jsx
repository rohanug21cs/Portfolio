import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PORs } from '../constants';
import Footer from './Footer';


const POR = () => {
  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>EXTRA CURRICULAR RESPONSIBILITIES SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Position Of Responsibility.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {PORs.map((POR) => (
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={POR.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={POR.url} target='_blank'>
                <img
                  src={POR.logo}
                  alt={POR.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{POR.role}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {POR.company}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {POR.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Footer/>
    </div>
  )
}

export default POR;