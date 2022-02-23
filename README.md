## A Star War

Use the [Star Wars API](https://swapi.dev/documentation ) to make a frontend application that is a list of the Star Wars films with an index page and film details page, using the URL and proper browser navigation.

### Index page (`/`)

The index page should have a list of the films that shows:

- Name
- Release date
- Episode id
- Director

Clicking on the name of the film will take you to the details page for that film

### Film detail page (`/films/:id`)

Should display details about a given film. The `id` should be the same as returned from the API (ex. `https://swapi.dev/api/films/1/` would be at `/films/1`)

The page should show

- Film title
- Episode id
- Release date
- Director
- A list of characters in the film:
  - Each character should list their name, mass, height, and name of homeworld  (ex. Luke Skywalker, 77kg, 172cm, Tatooine)
  - The characters should be able to be sorted by any of the four attributes per film (default: name)
- A sum of each species in the film (ex. Human: 8, Wookie: 3, ...)


## Notes

 - Project should be delivered via a git repo (preferably via Github)
 - Commit messages should be as if this were a real application with other developers involved
 - `README` should be descriptive enough to run the application locally
 - Data from API calls should be cached and considered stale after 5 minutes
 - The app should have some minimal styling and thought toward design (css frameworks/etc allowed)
 - Implement in whatever technology you are most comfortable
 - Use of create-react-app or other boilerplate is encouraged
 - Use of [SWAPI-Wrapper](https://github.com/cfjedimaster/SWAPI-Wrapper) is **NOT** acceptable.
 - All routing should be client side with proper back/fwd browser navigation (using a routing lib is allowed)
 - Use of other libs is allowed, but be prepared to justify the payload cost for the benefit

## Bonus Points

 - Having it statically deployed ([Vercel](<https://vercel.com/home>), [Surge](https://surge.sh), etc)
 - Addressing web accessibility concerns
 - Adding unit and/or integration tests

Anything not specified or ambiguous is left to your discretion. Please document any assumptions you make.
