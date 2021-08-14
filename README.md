# Personal Website
Live Preview -> [anonymousaaardvark.github.io]()   

Personal website that is a simple, configureable, and statically-exportable [React](https://reactjs.org/) application. Built using [typescript](https://www.typescriptlang.org/), based on [create-react-app](https://github.com/facebook/create-react-app), with [styled-components](https://styled-components.com/), [react-icons](http://react-icons.github.io/), [react-snap](https://github.com/stereobooster/react-snap), and various other technologies.   
This project deploys automatically to [github pages](https://pages.github.com/).

## Dependencies
Tested with [node](https://nodejs.org) v15, however, earlier versions will probably work fine.

## Set up
To download the repository and install dependencies:
```
git clone https://github.com/AnonymousAAArdvark/anonymousaaardvark.github.io.git
cd anonymousaaardvark.github.io
npm install
```
## Running
Run the command below to build the React app with auto refresh
```
npm start
```
## Deploying
1. Modify ```homepage``` in ```package.json``` to point to where you plan to host your website. If you plan on using the default domain, then just change the username of the domain to your own.
2. Make a commit to ```master``` and push it.
3. Execute npm run deploy in your terminal. That's it!
