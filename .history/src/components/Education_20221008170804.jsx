import { useEffect } from 'react';
import York from '../data/G.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education(props) {
  
  useEffect(() =>{
    AOS.init({duration:3000});
  },[]);

  return (
    <div className="h-screen p-2 bg-black text-white static max-w-1/2 w-full px-4" id="education">
      <div data-aos='fade-up' data-duration="1500" data-aos-anchor-placement="center-center" className="border-2 border-york-500 p-10 m-24">
        <div>
          <img src='./data/BergeronCentreForEngineering.jpg'></img>
          <h1 className="font-Nexa text-4xl sm:text-7xl pt-4 pb-2">Education</h1>
        </div>
        <p><strong>School</strong>: {props.School}</p>
        <p><strong>Degree</strong>: {props.Degree}</p>
        <p>
          <strong>Relative Course Work</strong>: {props.RelatativeCoursework}
        </p>
        <p>
          <strong>Date</strong>: {props.Start} - {props.Graduation}
        </p>
      </div>
    </div>
  );
}