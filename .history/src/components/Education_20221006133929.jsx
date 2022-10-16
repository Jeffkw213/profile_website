import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education(props) {
  
  useEffect(() =>{
    AOS.init({duration:2000});
  },[]);

  return (
    <div className="h-screen p-2 bg-black text-white static max-w-1/2 w-full px-4" id="education">
      <div data-aos='fade-up' className="bg-rose-500 items-center justify-center p-10 my-8">
        <div>
          <h1 className="font-Nexa text-4xl sm:text-7xl pt-4 pb-2">Education</h1>
        </div>
        <p>{props.School}</p>
        <p>{props.Degree}</p>
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
