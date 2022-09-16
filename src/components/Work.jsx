export default function Work(props) {
    console.log(props.employ[0])

  return (
    <>
        {props.employ.map((item,index)=>{
            return (
            <div key={index}>
                {item.Role}
                <p>{item.Description}</p>
                <p>{item.Date}</p>
            </div>)
        })}
    </>
  )
}
