import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import School from '../data/BergeronCentreForEngineering.jpg'

export default function Education(props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="h-screen p-2 bg-black text-red-700 flex justify-center text-justify-center static max-w-1/2 w-full px-4" id="education">
      <div
        data-aos="fade-up"
        data-duration="1500"
        data-aos-anchor-placement="center-center"
        className="bg-no-repeat bg-cover border-8 border-york-500 p-10 m-24 w-1/2 h-4/6 opacity-50"
        style={{ backgroundImage:`url(${School})` }}
      >

        <h1 className="font-Nexa text-4xl sm:text-7xl pt-4 pb-2">Education</h1>
        <p>
          <strong>School</strong>: {props.School}
        </p>
        <p>
          <strong>Degree</strong>: {props.Degree}
        </p>
        <p>
          <strong>Relative Course Work</strong>: {props.RelatativeCoursework}
        </p>
        <p>
          <strong>Date</strong>: {props.Start} - {props.Graduation}
        </p>
        <a href="#skill">
          <button className="border border-red-500 w-auto m-3 p-3 bg-transparent hover:bg-gradient-to-tr">Skills learnt</button>
        </a>
      </div>
    </div>
  );
}
