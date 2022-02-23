export const getShips = async () => {
  return fetch(`https://swapi.dev/api/films/1/`
    //  {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json'
    //   }
    // }
  )
    .then((response) => response.json())
    .catch((error) => {
      return { error, results: [] }
    })
}
