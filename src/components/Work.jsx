export default function Work({ employ }) {
  return (
    <>
      {employ.map((item, index) => {
        return (
          <div key={index}>
            {item.Role}
            <p>{item.Description}</p>
            <p>{item.Date}</p>
          </div>
        );
      })}
    </>
  );
}
