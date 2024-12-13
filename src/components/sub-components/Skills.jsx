import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      progress: 90,
    },
    {
      title: "CSS",
      progress: 85,
    },
    
    {
      title: "JavaScript",
      progress: 95,
    },
    {
      title: "Tailwind CSS",
      progress: 87,
    },
    
    {
      title: "React.JS",
      progress: 83,
    },

  ];
  return (
    <div>
      <h3>DEVELOPEMENT SKILLS</h3>
      {
        skills.map(element=>{
          return (
            <div key={element.title} className='progressBar'>
              <p>{element.title}</p>
              <span>
                <FaRegDotCircle style={{right : `${100 - element.progress}`}}/>
              </span>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default Skills