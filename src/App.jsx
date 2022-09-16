import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import rec from "./records.json";
//components for list
// const List = (props) => (
//   <ul>
//     {props.list.map((item) => (
//       <Item key={item.objectID} item={item} />
//     ))}
//   </ul>
//   );

// const Item = (props) => (
//   <li>
//     <span>
//     <a href={props.item.url}>{props.item.title}</a>
//       </span>
//     <span>{props.item.author}</span>
//     <span>{props.item.num_comments}</span>
//     <span>{props.item.points}</span>
//  </li>
// );
// // const Item = (props) => {
// //   <li key={props.objectID}>
// //     <span>
// //       <a href={props.url}>{props.title}</a>
// //     </span>
// //     <span>{props.author}</span>
// //     <span>{props.num_comments}</span>
// //     <span>{props.points}</span>
// //   </li>
// // };
// // component for search
// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (event) =>{
//     setSearchTerm(event.target.value);
//   };

//   return(
//     <div>
//       <label htmlFor='search'>Search: </label>
//       <input id='search' type="text" onChange={handleChange}/>
//       <p>
//         Searching for <strong>{searchTerm}</strong>
//       </p>
//     </div>

//   );
// }

const App = () => {
  return (
    <div>
      <Nav {...rec.Social} />
    </div>
  );
};

export default App;
