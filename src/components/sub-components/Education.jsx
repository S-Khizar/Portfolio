import React from "react";

const Education = () => {
  const educations = [
    
    {
      _id: "1",
      title: "B.E Computer Engineering",
      University: "Chhatrapati Shivaji Maharaj Institute of Technology​",
      description:
        "I graduated from Chhatrapati Shivaji Maharaj Institute of Technology  with a degree in Computer Engineering with a cpga of 7.96.",
    },
    {
      _id: "2",
      title: "Diploma - Computer Engineer",
      University:"VidyaLankar Polytechnic",
      description:
        "I completed my Diploma from VidyaLankar Polytechnic with 80.91%",
    },
    
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.University}</p>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
