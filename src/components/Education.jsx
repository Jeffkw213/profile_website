import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education(props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="h-screen flex justify-center items-center" id="education">
      <div
        data-aos="fade-up"
        data-duration="1500"
        data-aos-anchor-placement="center-center"
        className="bg-no-repeat bg-white border-8 border-york-500 p-24 sm:p-10 m-24 w-132 h-fit bg-opacity-80 rounded-2xl"
      >
        <h2 className="font-Nexa font-bold text-4xl sm:text-8xl pt-4 pb-2 text-shadow-md text-york-700">Education</h2>
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
                              hover:scale-110 hover:text-york-400 shadow-md"
          >
            Skills learnt
          </button>
        </a>
      </div>
    </div>
  );
}
