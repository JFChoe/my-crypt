This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Heroku deploy [8/7/2020, 12:55]

## Available Scripts

In the project directory, you can run:
### `npm install`
Run this command when initially running this project locally in order to install the needed npm modules

### IMPORTANT
In order for this project to run successfully, the Flask Backend API needs to be upstarted too. 
First create a virtual environment using python within the `api` folder
```
$ cd api
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ _
```
NOTE: The above is for Unix-based operating systems. Use this instead if using windows
```
$ cd api
$ python3 -m venv venv
$ venv\Scripts\activate
(venv) $ _
```

Second, make sure to install the python modules from requirements.txt in the venv
```
(venv) $ cd ..
(venv) $ pip install -r requirements.txt
```


FINALLY, run the flask server using either `npm run-script start-api` or `npm run-script start-api-unix` (depending on your OS)
Make sure to run this command in the ROOT project folder (~/my-crypt)
```
(venv) $ deactivate
$ npm run-script start-api-unix
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run-script start-api`

FOR WINDOWS: Runs the Flask API backend endpoint. Enables the front end to receive information of exchange prices. 

### `npm run-script start-api-unix`

FOR UNIX: Runs the Flask API backend endpoint. Enables the front end to receive information of exchange prices. 

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
