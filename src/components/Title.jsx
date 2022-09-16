import React from 'react'
// This is the title of the website
// There would be a breif discription of who I am 
// And there would be a navigation button to scroll to a certain section of the page
const ButtonNavi = (props) => (
  <ul>  
    <li>
      <button className='p-2 px-3 bg-black text-white rounded-full'>Education</button>
    </li>
    <li>
      <button className='p-2 px-3 bg-black text-white rounded-full'>Work Experience</button>
    </li>
  </ul>
);

export default function Title(props) {
  return (
    <div>
        <h1><strong>{props.Name}</strong></h1>
        <p>{props.Description}</p>
        <ButtonNavi {...props}/>

    </div>
  )
}
