# SZAKDOLGOZAT

## abscura.
![mini](https://user-images.githubusercontent.com/67963987/163885713-2667f592-ba0e-4a36-8cd2-35e04322f913.png)



This project was bootstrapped with Create React App.
>NOTE: To run the app in development mode Node.js v14.16.1 ( including npm 6.14.12 ) is required.

| **The application's current features**  | **Yet to develop** |
| -------------: | :------------- |
| Functioning side and top navigation bars |  |
| Path / URL control  |  |
| Interface switching  |  |
| Register / Login pages + functions with authorization  |  |
| MongoDB database connecton for user data  |   |
| Mailing system towards support team  |   |
| Session tokens |   |
| Token functionalities  |   |
| Video player and converter  |   |
| Responsive view  |   |


## Dependencies
>DEPENDENCY INSTALLATION example
```
\client
npm install @ffmpeg/ffmpeg
```
# Server dependencies
\server
```
(package.json)
"dependencies": {
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "helmet": "^4.1.0",
    "http-proxy-middleware": "^2.0.4",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.29",
    "socket.io": "^2.3.0"
  }
 ```
# Client dependencies
\client
```
(package.json)
"dependencies": {
    "@ffmpeg/ffmpeg": "^0.9.8",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "body-parser": "^1.19.0",
    "emailjs-com": "^3.2.0",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.1",
    "nodemon": "^2.0.14",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-dropzone": "^12.0.5",
    "react-icons": "^4.1.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "styled-components": "^5.2.1",
    "web-vitals": "^0.2.4"
  }
  +
  @material-ui/core
  @material-ui/lab
```


### To start it in developement mode:
>```cd server```
>
>```npm install```
>
>```npm run serve```

>Backend starts at port: 9000
>

>
>```cd client```
>
>```npm install```
>
>```npm install --save --legacy-peer-deps @material-ui/core @material-ui/lab```
>
>```npm start```

>Frontend starts at port: 3000

### Miskolci Egyetem - 2021
