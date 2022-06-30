import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setName(data.results);
      });
  }, []);
  console.log(name);

  return (
    <>
      {name.map((i) => (
        <ul key={i.url}>
          <li>
            name: {i.name}
            <br />
            url: {i.url}
          </li>
        </ul>
      ))}
    </>
  );
}

export default App;
