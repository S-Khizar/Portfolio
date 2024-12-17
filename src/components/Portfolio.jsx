import React from 'react'
import Navbar from './Navbar'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Portfolio = ({ show, setShow }) => {
  const projects = [
    {
      _id: "1",
      title: "Culinary compass",
      category: "ReactJs Frontend Application",
      thumbnail: "/restaurant.png",
      projectUrl: "https://culinary-compass-lmpk.vercel.app/",
    },
    {
      _id: "2",
      title: "Travel Tribe",
      category: "ReactJs Frontend Application",
      thumbnail: "/TravelTribe.png",
      projectUrl: "https://travel-tribe-seven.vercel.app/",
    },
    {
      _id: "3",
      title: "Mind Elevate",
      category: "ReactJs Frontend Application",
      thumbnail: "/MindElvate.png",
      projectUrl: "https://mind-elevate.vercel.app/",
    },
    {
      _id: "4",
      title: "GitHub Finder",
      category: "ReactJs Frontend Application",
      thumbnail: "/GithubFinder.png",
      projectUrl: "https://git-hub-finder-bay.vercel.app/",
    },
    
  ];
  return (
    <>
      <section className='page portfolioPage'>
        <Navbar show={show} />
        <TbGridDots onClick={() => { setShow(!show) }} className='hamburger' />
        <div className="banner">
          <div className="header">
            <img src="./star.png" alt="star" />
            <h1>ALL PROJECTS</h1>
            <img src="./star.png" alt="star" />
          </div>
          <div className="latest-projects">
            <div className="first-column">
              {
                projects.map(element => {
                  return (
                    <div className='card' key={element._id}>
                      <img src={element.thumbnail} alt="project-thumbnail" />
                      <div>
                        <span>
                          <p>{element.category}</p>
                          <p>{element.title}</p>
                        </span>
                        <a href={element.projectUrl} target='_blank'> <img src="./arrow.svg" alt="arrow" className='card-svg' /> </a>
                      </div>

                    </div>
                  )
                })
              }

            </div>
            

          </div>
         
        </div>

      </section>
    </>
  )
}

export default Portfolio