import './App.css';
const list = [
  {
    title: 'React',
    url: 'https://www.youtube.com/?bp=wgUCEAE%3D',
    author: 'Jeff Kwan',
    num_comments: 3,
    points: 4, 
    objectID: 0,
  },
  {
    title: 'WTF',
    url: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3194734192',
    author: 'Who dafuq',
    num_comments: 5,
    points: 6,
    objectID: 7,
  }
]
//components for list
const List = () => {
  return(
    <ul>
      {list.map(function(item){
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}
// component for search 
const Search = () => {
  return(
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type="text"/>
    </div>
  );
}

const App = () => {
  
  // instances
  // const greeting = {
  //   hi: 'Hello',
  //   title: 'React',
  // }; 
  
  // Function
  // function getTitle(title){
  //   return title;
  // }
  
  //Creating a list
  return (
   <div>
      <h1>
        Hello React
      </h1>
      <hr/>
      <List/>
      <Search/>
      {/* <label htmlFor='search'>Search</label>
      <input id='search' type='text' /> */}
   </div>
  );
}

export default App;
