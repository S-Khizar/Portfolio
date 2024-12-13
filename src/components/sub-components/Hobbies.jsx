import React from "react";
import { SiEpicgames } from "react-icons/si";
import { AiFillCamera } from "react-icons/ai";
import { BiBook, BiSolidPlaneAlt } from "react-icons/bi";
import { MdSportsBaseball } from "react-icons/md";
import { FcReading, FcReadingEbook } from "react-icons/fc";

const Hobbies = () => {
  return <>

    <div className="hobbies">
      <div>
      <h3>HOBBIES AND INTEREST</h3>
      
      <span>
      
        <div>
          <SiEpicgames />
          GAMING
        </div>
        <div>
          <AiFillCamera />
          PHOTOGRAPHY
        </div>
      </span>
      <span>
        <div>
          <BiSolidPlaneAlt />
          TRAVELLING
        </div>
        <div>
          <BiBook />
          Reading
        </div>
      </span>

      </div>
    
     
      
     

      
    </div>







  </>;
};

export default Hobbies;
