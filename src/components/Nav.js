import React from 'react'
//This is gonna be the navigation bar
//Need to create a list of 
const Item = (props) =>(
    <lu>
        <li>
            <a href={props.item.url}>{props.item.title}</a>
        </li>
        <li>{props.item.author}</li>
        <li>{props.item.num_comments}</li>
        <li>{props.item.points}</li>
    </lu>
)

export default function Nav(props) {
  return (
    <div>
      
    </div>
  )
}
