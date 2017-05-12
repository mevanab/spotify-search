# Spotify Search 
A simple Spotify search using ReactJS.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
This project uses [Material-UI](http://www.material-ui.com/#/) for UI components.

## Running & Deploying Application
### Installation

**Spotify search** requires [Node.js](https://nodejs.org/) v6.9.4 or higher to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spotify-search
$ npm install
$ npm start
```
Run `npm install` to install all dependencies
Run `npm start` or `yarn start` to run application in development mode
Open http://localhost:3000 to view it in the browser.

For production environments...

```sh
$ npm run build
```
Run `npm run build` or `yarn build` to build application for production
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder & File Structure

├── build
├── node_modules
├── public     
├── src
├── .gitignore             
├── package.json
└── README.md

├── ...
├── src
│   ├── assets/         
│   │   ├── css
│   │     ├── App.css
│   │   ├── images
│   ├── components/         
│   │   ├── common/               #Common components
│   │     ├── Footer.js
│   │     ├── Header.js
│   ├── Album.js                  #Component for single Album view
│   ├── Artist.js                 #Component for single Artist view
│   ├── Main.js                   #Main Component for page layout
│   ├── RenderResult.js           #Component to render results from API fetch
│   ├── Search.js                 #Component with search fields
│   └── Track.js                  #Component for single Track view
├── App.js
├── App.test.js
├── index.js
└── ...