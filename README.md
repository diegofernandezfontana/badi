## This is a Badi Frontend Challenge.

The challenge: Build a recipes book
This challenge should be done by using the free to use ​ RecipePuppy API​ . We would like
you to retrieve some recipes from there, display the recipes and perform certain operations on those recipes.

Hereby the details:

- 1. API connection, you should use their search endpoint and perform recipe
     searches with one or multiple ingredients (​ ie:
     http://www.recipepuppy.com/api/?i=onions,garlic&p=1 ​ ) and parse the results.
- 2. Use a search bar as user input for the
     first point and show the results when
     pressing enter and has more than 3
     characters​ ,
- 3. The results are shown in a list view with a layout like the following. Each recipe should show the image on top,
     the recipe name, ingredients (this one could have multiple lines so the layouts should support dynamic heights) and a label in a 45% angle that would show only if it contains lactose (to simplify consider that only milk and cheese contain lactose).
- 4. In a screen wider than 768px, it should show the results on a grid of 2 columns
- 5. Each recipe has an ​ href ​ parameter, ie a URL pointing to a website with the recipe details. Whenever the user clicks on a recipe using this parameter to open the website.

`BONUS`

- 1. On the search box, add a collapsable component that will show you the last 5
     searches, with the possibility to either "search again" when clicking the option, or
     "remove" search item which will remove the item from the list

## Repo:

### Github

Open [https://github.com/diegofernandezfontana/badi](https://github.com/diegofernandezfontana/badi) to view the repository.

### Open in browser

Open [https://badi-omega.now.sh/](https://badi-omega.now.sh/) to view in the browser.
It has been deployed in [https://zeit.co](https://zeit.co)

## How to run the code:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />

### `npm test:e2e:run`

Launches test E2E in the console.
Note: Might conflict if the application is running on port 3000.

### `npm test:e2e:run`

Launches test E2E in explorer. With this, its posible to see whats is being tested in the Application and its posible to debug in real time.
Note: Might conflict if the application is running on port 3000.
