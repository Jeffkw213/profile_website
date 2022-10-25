import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import School from '../data/York.jfif';

export default function Education(props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div
      className="h-screen p-2 bg-cover bg-center text-black flex justify-center text-justify-center static max-w-1/2 w-full px-4"
      id="education"
      style={{ backgroundImage: `url(${School})` }}

    >
      <div
        data-aos="fade-up"
        data-duration="1500"
        data-aos-anchor-placement="center-center"
        className="bg-no-repeat bg-white border-8 border-york-500 p-24 sm:p-10 m-24 w- h-4/6 bg-opacity-80 hover:scale-110"
      >
        <h2 className="font-Nexa font-medium sm:font-bold text-4xl sm:text-8xl pt-4 pb-2">Education</h2>
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
          <button
            className="border border-red-500 sm:text-york-400 md:text-black 
                              rounded-full w-auto m-3 p-3 bg-transparent ease-in-out duration-300 
                              hover:scale-110 hover:text-york-400"
          >
            Skills learnt
          </button>
        </a>
      </div>
    </div>
  );
}
