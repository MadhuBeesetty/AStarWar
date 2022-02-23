import { useEffect, useState } from "react";
// import { getShips } from "../api";
import axios from 'axios';

const StarWars = () => {

  const [ships, setShips] = useState();

  // const fetchShips = async () => {
  //   let results = await getShips()

  //   setShips(results)
  // }

  // useEffect(() => {
  //   fetchShips()
  // }, [])

  // console.log(ships);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/1/')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <p>this is ships data</p>
      <p>{ships}</p>
    </div>
  );
}

export default StarWars;
