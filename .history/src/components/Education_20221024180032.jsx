import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import School from '../data/York.jfif';

export default function Education(props) {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });

  // const Descript = ({ count }) => (
  //   <div><p>{count}</p></div>
  // );

  return (
    <div
      className="h-screen p-2 bg-black text-red-700 flex justify-center text-justify-center static max-w-1/2 w-full px-4"
      id="education"
      style={`url(${School})`}
    >
      <div
        data-aos="fade-up"
        data-duration="1500"
        data-aos-anchor-placement="center-center"
        className="bg-slate-700 border-8 border-york-500 p-10 m-24 max-w-1/2 h-4/6 bg-opacity-70"
      >
        {/* <Descript count = {props}/> */}
        <p className="font-Nexa font-medium text-4xl sm:text-8xl pt-4 pb-2">Education</p>
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
