const data = [{
    "_id": {
        "$oid": "5e9f55c3b6b4f000174ab1a5"
    },
    "imagesurl": [],
    "name": "Amir Platform (BACK)",
    "started": "20 March 2020",
    "date": {
        "$date": "2020-04-01T23:21:23.019Z"
    },
    "overview": "As a back end, this rest API(MongoDB, Express, NodeJS), is managing HTTP requests coming from the front end and serving the data from Mongo database. Requests are sent to the backend in different routes \nand each route contains a specific handler.\nI have used 4 main routes, which are /user, /project, /banned, /topic.\nEach of these routes is configures thought different routes you can download the project and check each route.",
    "whatlearned": "I learned more things about each of those library I mentioned above.\nTo begin, I learned how to manipulate the database throw mongoose and to create models and schemas, and also how to perform queries, and fetching data and updating and removing data\nBesides, I learned webpush syntax and I knew it's ability to push notifications easily.\nIn addition, Cloudinary which I used for the first time, I used in past Multer with local storage, but with Cloudinary and multer I learned how to store images in the cloud and deleting them with simple code, and also customize the images name (you can find all this is cloudinary.js in middlewares)\nAbout other libraries like express and bcrypt and jsonwebtoken I already use them in past and it's helpful to use them again and manipulating them deeply. ",
    "technologie": "NodeJs - Express - MongoDB",
    "commentsCount": 0,
    "gitViewers": 2,
    "downloadcount": 7,
    "status": "Public",
    "summary": "Based on Nodejs / Express / Mongodb, I have created the back end of this website which is a rest API. I added a few dependencies which made it reliable, As I mentioned in the front end, more things will be discussed here. check it out, you can download it and try to understand it. Actually, it's not hard to understand, If you wanna try it in localhost make sure to remove cloudinary and replace it with Multer local storage (if you didn't know how just post a topic in question section). have fun !",
    "platform": "In this back end , i used well known libraries which are:\n###\n        \"bcrypt\": \"^4.0.1\",\n        \"body-parse\": \"^0.1.0\",\n        \"cloudinary\": \"^1.20.0\",\n        \"express\": \"^4.17.1\",\n        \"jsonwebtoken\": \"^8.5.1\",\n        \"mongoose\": \"^5.9.5\",\n        \"multer\": \"^1.4.2\",\n        \"multer-storage-cloudinary\": \"^2.2.1\",\n        \"node-sass\": \"^4.13.1\",\n        \"nodemon\": \"^2.0.2\",\n        \"socket.io\": \"^2.3.0\",\n        \"web-push\": \"^3.4.3\"\n###\nThe first main libraries are:\nnodemon:\nIs a very useful tool , actually with nodemon you don't need to stop the server and rerun it again whenever you update your code. Actually when you save changes the server restart automatically.Also with nodemon installed you can created a file named nodemon.json in which you store your environment variables (process.env.VARIABLE)\n\nExpress:\nWhich is a framework of nodejs , which makes easier handling HTTP request and responses.\nLink: https://www.npmjs.com/package/express\n\nMongoose: \nis a mongodb driver in nodejs that provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.\nYou can also use mongodb driver (default) it will work too but with different syntax and methodologies\nLink: mongodb: https://www.npmjs.com/package/mongodb\nLink: mongoose:https://www.npmjs.com/package/mongoose\n\nbody-parse:\nIs a library , that allow the backend to parse the body and get data from the request (you can't get data from req.body without this library)\nLink: https://www.npmjs.com/package/body-parser\nThe other packages are optional, but they provide more functionality.\njsonwebtoken:\nIs a library responsible to manage tokens, it generates tokens from a payload you add, and you can make user authentication\nwith it, also you can protect some routes using a middleware that checks the token, you can add more options to it like the expiration time, etc... check out the docs below\nLink: https://www.npmjs.com/package/jsonwebtoken\n\nmulter-storage-cloudinary/multer:\nI used both of those libraries as a middleware to store data in cloudinary which is a cloud storage (storing only images and videos)\nYou can use multer by its own to store files in your local storage, that's the default use case of multer.\nCloudinary:https://cloudinary.com/\nLink: multer:https://www.npmjs.com/package/multer\nLink: multer-storage-cloudinary: https://www.npmjs.com/package/multer-storage-cloudinary\n\nCloudinary: \nIs a driver for cloudinary , responsible to connect and send requests to cloudinary, and provides multiple functionalities.\nLink: https://www.npmjs.com/package/cloudinary\n\nbcrypt:\nIs a small library, that provides a secure hashing method that you can use to hash plain text passwords before storing them into the database, also it provides a method that compares the  hashed passwords and an entered password (plain text) \nyou can use this functionality in login handler.\nLink: https://www.npmjs.com/package/bcrypt\n\nsocket.io:\nAs i mentioned in the front end project, I used client-side socketio , in the back end you have to use socketio server-side to register your listeners, in the server and emit them or broadcast them into all the sockets connected to your website\nfor example:\n###\n io.on('connection', (socket) => {\n        socket.on('sendnotification', (notification) => {\n            socket.broadcast.emit('sendnotification', notification)\n        })\n    })\n###\nThis listener is responsible to receive a new notification when you emit it from the front end. Then the server broadcast the new notification to all the connected sockets.\nLink: https://www.npmjs.com/package/socket.io\n\nweb-push: \nThis package allows you to push notifications after registering the service worker in the front end.\nLInk: https://www.npmjs.com/package/web-push\n\n",
    "features": "There is not much to talk about features, this rest API is made to serve the front end with data \nThe 2 only features that exist are cloudinary and web push \nActually, I used an external storage which is cloudinary to store the application's images, of course, the storage is limited. For that when I remove any picture or even when i change any picture I automatically delete the old one from the cloud , with that am saving space.\nBesides I used webpush to push notification into the client operating system, in this use-case, whenever a user comment a project or post a topic or reply to a post, a receive an instant notification in my operating system, this reduces the delay to respond to your questions or your suggestions. \n",
    "github": "https://github.com/amirghedira/mywebsiteRestAPI",
    "filelink": "https://github.com/amirghedira/mywebsiteRestAPI/archive/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "5e9f5646b6b4f000174ab1a6"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501926/1587501906083Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501930/1587501907926Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501945/1587501918521Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501947/1587501930473Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501951/1587501934410Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501955/1587501937919Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501971/1587501949332Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501987/1587501955676Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501978/1587501956240Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501980/1587501962688Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587501984/1587501963786Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587502001/1587501964970Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587502009/1587501994550Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587502010/1587501998863Capture%20d%E2%80%99e%CC%81cran%202020-04-21%20a%CC%80%2021.png"
    ],
    "name": "Amir Platform (FRONT)",
    "started": "14 April 2020",
    "date": {
        "$date": "2020-04-13T23:23:34.874Z"
    },
    "overview": "I started this web application in order to display my projects and to arrange them, Also am learning React for a bit now and I wanted to develop an entire application with it. So I find it as an opportunity to start this application and improve my skills in React. In addition, this application is all about managing my projects displaying them with a nice layout and allow people to interact with each project and give their opinion not also that, but even ask questions about anything related to development and software engineering.",
    "whatlearned": "At the beginning I learned react with class components approach, I used to manage state in a class-based component.\nIn this project, I decided to use react hooks and functional-based components since its the new way for development in reactjs, and I find them quite interesting and fun to use them.\nIn addition, reactstrap, which I learned more things about responsiveness thanks to rows and cols system of reactstrap.\nSecond, managing state, actually I have used the contextAPI of react which is built into it, I have isolated all the state related to projects and profile informations into a global state with I provide it to other components, not only state even handlers which handle projects and profile and logging in actions.\nThe contextAPI allow managing state and reading it easier and more convinient.\nAlso i learned to implement routing and provide a multiple page web application thanks to react-dom router \nLast but not least, socketio (client site) I learned how to emit the events and get the event and unregister them when needed.\nFinally, and the most thing which i find it interesting, is the service workers, they are so useful to build a progressive web apps and more other things, I applied service workers to trigger notifications which pop up in the operating system (phone or PC)",
    "technologie": "ReactJS",
    "commentsCount": 2,
    "gitViewers": 10,
    "downloadcount": 9,
    "status": "Public",
    "summary": "The front end of this website is now available here, in fact, this website is a MERN application. Don't hesitate to check it out and to comment this front end. If you have any question don't hesitate to ask them in the questions sections, if you downloaded the project make sure to run a backend server (localhost:5000). hope you enjoy it!",
    "platform": "Based on react , I used multiple packages from npm which was very helpful. These are dependencies I have used : \n\n###\n        \"@material-ui/core\": \"^4.9.7\",\n        \"axios\": \"^0.19.2\",\n        \"moment-timezone\": \"^0.5.28\",\n        \"react\": \"16.8.6\",\n        \"react-autosize-textarea\": \"^7.0.0\",\n        \"react-dom\": \"16.8.6\",\n        \"react-image-lightbox\": \"^5.1.1\",\n        \"react-loadingg\": \"^1.7.2\",\n        \"react-moment\": \"^0.9.7\",\n        \"react-router\": \"5.0.1\",\n        \"react-router-dom\": \"5.0.1\",\n        \"react-scripts\": \"3.0.1\",\n        \"react-syntax-highlighter\": \"^12.2.1\",\n        \"react-toastify\": \"^5.5.0\",\n        \"reactstrap\": \"8.0.1\",\n        \"socket.io\": \"^2.3.0\"\n\n###\n\nReact-Moment:\nLink: https://www.npmjs.com/package/react-moment\nActually, this library is responsible to format date in any way you like, for example, you can choose \"from now\" option to make the date relative to now date (1 minute ago, one hour ago, etc...)\n\nmaterial-ui/core:\nLink: https://material-ui.com/\nThis huge an awesome library provide amazing pre-built components which are sweetly styled and responsive check out this library if you wanna make your web app looks amazing.\nIn fact, I used this library to display a progress bar whenever an HTTP request is sent\n.\nreact-autosize-textarea:\nLink: https://www.npmjs.com/package/react-autosize-textarea\nThis is a pre-built components for react which is a responsive textarea, in fact, it resizes depends on your inputs.\n\nreact-syntax-highlighter:\nLink: https://www.npmjs.com/package/react-syntax-highlighter\n\nThis component is responsible to display code with a good format in a div block, I will upload images in photos section about this.\n\nreact-image-lightbox:\nLink: https://www.npmjs.com/package/react-image-lightbox\nThis component is responsible for displaying images in a modal with a cool design (like Facebook images displayer but without comments)\n\nReact-loadingg:\nLink: https://www.npmjs.com/package/react-loadingg\nThis component, as the names mentioned, contains a variety of \nloading styles you can check the demo here:http://139.196.82.33:8080/iframe.html?id=demo--demo\n\nreact-toastify:\nLink: https://www.npmjs.com/package/react-toastify\nThis component makes notifications easy to display and quite stylish, I will upload some photos of some notifications I have here.\n\nreactstrap: \nLink: https://www.npmjs.com/package/reactstrap\nAs material UI provides cool pre-built components , Reactstrap makes the same thing and personally I choosed to built the entire front end with it , its easy to learn and easy to use \ncheck the docs for more information about what reactstrap provides\ndocs: https://reactstrap.github.io/\n\nreact-router , react-router-dom:\nLink: https://www.npmjs.com/package/react-router-dom\nBasically, this library provides the utility to make multiple pages in your application using routing \n\nAxios: \nLink: https://www.npmjs.com/package/axios\nThis library is an alternative to fetch in javascript, it's easier to manipulate and easy to learn, and to use. Actually, the most liked feature that provides It, is the ability to make a base URL to HTTP requests, without repeating it each HTTP request.\n\nsocket.io:\nLink: https://www.npmjs.com/package/socket.io\nSocket is known to be a front and a back end service, i will talk more about the service side of socketio in the backend project,\nthis library you can use it to emit any changes to the users which are connected to the page (to the socket) this makes the user interface more reactive and more interactive with changes without even loading the page.",
    "features": "This platform is made in a way that provides several features including its protection.\nIn fact a ban system has been added in order to ban users who spam comment sections or questions/suggestions sections..\nAfter being banned, the user can see all the project as all users but he will not have access to comment on any project or even to post a topic.\nIn addition, the platform can detect your IP address and ban it if you didn't respect the rules.\nAlso, the integration of socket, make the user experience better, in fact it allows an instant change whenever a project is updated or posted, also in suggestions/questions sections, the interface will be updated automatically whenever a topic or a reply has been posted. Also for banned users once it's banned, he will be prevented from posting instantly.\nWithout forgetting libraries I used which improved the responsiveness of this front end and made it more interactive.",
    "github": "https://github.com/amirghedira/mypersonalweb",
    "filelink": "https://github.com/amirghedira/mypersonalweb/archive/master.zip",
    "Comments": [
        {
            "_id": {
                "$oid": "5ea0d5c8ae01150017d82521"
            },
            "ip": "197.15.130.206",
            "autor": "wael laataoui",
            "content": "great job 😃",
            "date": {
                "$date": "2020-04-22T23:39:52.724Z"
            }
        },
        {
            "_id": {
                "$oid": "5ea4fcf85c165503e4b4be5e"
            },
            "ip": "197.26.110.249",
            "autor": "admin",
            "content": "thanks wael for your support <3",
            "date": {
                "$date": "2020-04-26T03:16:08.311Z"
            }
        }
    ],
    "__v": 0
}, {
    "_id": {
        "$oid": "5ea6178c8f37a30017f839de"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944836/15879448231431.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944838/15879448363852.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944840/15879448382963.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944841/15879448401034.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944841/15879448412605.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944843/15879448416226.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944844/15879448431457.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944845/15879448448398.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944848/15879448456459.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944852/158794484862410.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587944855/158794485197411.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1587945118/158794510950812.png"
    ],
    "name": "Rent Manager",
    "started": "5 july 2019",
    "date": {
        "$date": "2019-07-08T23:21:48.884Z"
    },
    "overview": "After discovering java and diving into it in 2019, I wanted to use my knowledge in java to create an application from scratch using swing. So this application is all about managing rents, cars and clients, this app could be helpful for managers who rent cars.\nActually, with it you can control your rents, your cars and getting all details about a specific client or a specific rents such as  the history of clients who rented the car, or the history of cars which been rented by a client",
    "whatlearned": "When I finished learning coding with java, the goal was to make a functional user interface with java. So with this application, I learned how components work in java and how you apply layouts to style your application. Also, I learned how to connect to a database and managing requests. it was a long project and a nice experience for me.",
    "technologie": "Java - Swing",
    "commentsCount": 0,
    "gitViewers": 12,
    "downloadcount": 8,
    "status": "Public",
    "summary": "This is a java swing application which I made about one year ago,\nI wanted to create a connected application with database that time and I manage to make it without any knowledge about swing.\nI wanted to create a styled and well-designed application.\nWith this application, I tackled rent car services. Hope you will like this one and i hope you learn something new about swing applications. Remember a swing application is not always ugly, it depends on your style !!",
    "platform": "Actually the file contains the database file, you can simply import it and work with it. surely I used MySQL as a database. \nI used MySQL driver for Java which I added in the project folder \nThe project itself is in the project folder you will find all the classes.\nThe main class which I implemented the swing application and other classes such as database, client, location, car, agency and etc..\nI used ImageCellRenderer class to display an image in the cell of a Jtable.\nAnd i used also IconCellRendered to display an icon in the cell of a Jtable.\nFinally, I used JTattoo-1.6.11 jar file to make the application looks good and well designed. I wanted to use jcalendar but I didn't find a use case for it. With this jar file, you can display a nice selector of date without actually coding it.",
    "features": "To begin the main feature I toggled it was the facility to manage rends and cars and clients, actually, you can add cars with all the specific details of it such as serial number, color, price for one day renting, you can even upload the photo of the car.\nIn addition you can add rents which is the main feature of this application. In fact, if the client exists previously, his in will show up while you type it and you can select it. Once you select the NCIN all the fields will be filled automatically for that client. The other case, when the client doesn't exist, you need to feel the fields specific to that client such as his name his address his NCIN number, etc..., and you need to upload an image about his NCIN for rent security purposes.\nAfter validating the rent, the client will be added automatically with the rent. The car will not be available anymore.\nAlso, the manager can free his cars and get the list of available cars and the rented cars with all the details of each car.\nIn addition, when a specific location expires the manager will automatically receive a notification, which mention location ( car serial number, NCIN client) has been expired.\nAdding to all that, this application can be shared between the managers and his workers. In fact, accessing the application is requiring an account. The first account created is the 'root' account which belongs to the manager. The root account has access which a \"user\" account don't have, such as deleting client, editing the username or password of a specific client, etc...\nTo create an account you have to click on login and add a secret key which is hardcoded in the database, with that, you guarantee that not anyone can create an account and access the application. Only the root account can edit that key.\nFinally, the root account can access the history of the application is self and can see all the actions made in the application such as deleting a car, adding a location, etc...",
    "github": "https://github.com/amirghedira/RentManagment",
    "filelink": "https://github.com/amirghedira/RentManagment/archive/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "5ea8a607a8f9a400174139d5"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1588110889/1588110888537Capture%20d%E2%80%99e%CC%81cran%202020-04-28%20a%CC%80%2022.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1588110893/1588110889603Capture%20d%E2%80%99e%CC%81cran%202020-04-28%20a%CC%80%2022.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1588110895/1588110893575Capture%20d%E2%80%99e%CC%81cran%202020-04-28%20a%CC%80%2022.png"
    ],
    "name": "RentManager-RestAPI(MySQL)",
    "started": "28 April 2020",
    "date": {
        "$date": "2020-04-28T23:54:15.482Z"
    },
    "overview": "This a small API I started it in the past, I was actually starting a web service which is a web site that anyone can access and create an account in it, and then, the client can rent the car. \nBoth clients and managers are included in this API as users.\nAfter a period, I decided to switch to MongoDB for multiple reasons.\nI wanted to share this version (MySQL), because it's helpful for beginners to understand how MySQL queries work with express and Nodejs. (this API doesn't include all functionality of renting cars, it was just a prototype. You can expend it how you want and even change the context of it to another subject.)",
    "whatlearned": "When I first used nodejs I built more API with Mysql, this is not my first API manipulating MySQL databases.\nBut you can learn more things from this project, actually its really simple and easy to learn from it.\nAlso you can expend it how you want. \nFinally, with your creativity, you can actually build your own rest API \nbased on this model.",
    "technologie": "NodeJS - Express - MySQL",
    "commentsCount": 0,
    "gitViewers": 6,
    "downloadcount": 2,
    "status": "Public",
    "summary": "This is a small RestAPI manipulating MySQL database, Actually, you can learn from it how you can manipulate a MySQL database and how you make queries and manipulate the data. It's not complicated to learn from and to expend it, I hope you will learn how NodeJs/Express works with MySQL databases.\nIf you wanna try it, don't forget to create a database online or in localhost and to add database credential in config/database.js. For the database tables, you can check the database.sql file located in the database folder.\nIf all this is ready you can type npm start and the server will be on.",
    "platform": "###\n        \"bcrypt\": \"^4.0.1\",\n        \"body-parser\": \"^1.19.0\",\n        \"express\": \"^4.17.1\",\n        \"jsonwebtoken\": \"^8.5.1\",\n        \"multer\": \"^1.4.2\",\n        \"mysql\": \"^2.18.1\",\n        \"nodemon\": \"^2.0.3\"\n###\nI will begin with the basic packages:\n\nnodemon:\n This packages allow you to restart the server whenever you save your code, but also you can create with it environment variables, you can add a file called nodemon.json and you add your environment variables such as your database credential.\nlink: https://www.npmjs.com/package/nodemon\nexpress: \nWhich is the framework I used to develop this RestApi\nlink:https://www.npmjs.com/package/express\nbody-parser:\nI added this package because I was working with a front end, this package allow you to parse incoming requests and parse the body on it. if you don't have a front end, and u will use postman, you can simply use this code in app.js file without the package itself.\n###\napp.use(express.json())\n###\nLink: https://www.npmjs.com/package/body-parser\n\njsonwebtoken:\nThis package is responsible for manipulating tokens and check for user authentication. Also, you can store data in the token as a payload, and then get it back from the request.\nLink: https://www.npmjs.com/package/jsonwebtoken\n\nmulter:\nThis package is very useful to manipulate files such as saving them deleting them, you can also edit their names before saving them. it's really simple to use and to configure.\nLink: https://www.npmjs.com/package/multer\n\nmysql:\nThis is the basic package to build a rest API with MySQL database. Actually, there is another package I will cover it next time which is sequelize, this package is more complicated and featured.\nBoth of these packages act like a driver between the database and your server.\nLink: https://www.npmjs.com/package/mysql",
    "features": "Well, this small API doesn't include too much functionality, it actually demonstrates the basic way to communicate with MySQL database, retrieving the data, and editing it. \nThe main feature this API have are user authentication and manipulating tokens. Also protecting some routes to be accessed from non-authenticated users. Also manipulating images and saving them in \"uploads\" folder. Also whenever a car or a user is deleted the images will be deleted too for a better storage management. I will mention the libraries I used below.",
    "github": "https://github.com/amirghedira/RentManager-RestAPI-MySQL-",
    "filelink": "https://github.com/amirghedira/RentManager-RestAPI-MySQL-/archive/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "5ec305982718ea00174a5064"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1589843193/1589843191213Capture%20d%E2%80%99e%CC%81cran%202020-05-19%20a%CC%80%2000.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1589843194/1589843193307Capture%20d%E2%80%99e%CC%81cran%202020-05-19%20a%CC%80%2000.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1589843196/1589843194339Capture%20d%E2%80%99e%CC%81cran%202020-05-19%20a%CC%80%2000.png"
    ],
    "name": "RentManager-RestAPI(Sequelize)",
    "started": "14 May 2020",
    "date": {
        "$date": "2020-05-13T23:00:56.734Z"
    },
    "overview": "more informations here: https://www.amir-ghedira.com/projects/5ea8a607a8f9a400174139d5",
    "whatlearned": "Although , I have a good experience in writing MySQL queries, this library doesn't help me personally that much but Sequelize allows you to write much cleaner code and readable from a non-SQL programmer. Also, this huge library provides too many methods to cover all types of MySQL queries you have to know them and learn them and also practice them.\nFinally, as mongoose that provides schemas and models to store data, sequelize have the same strategy by creating models and manipulating them with specific schemas in which you precise your database columns with their specific types.",
    "technologie": "NodeJS - Express - Sequelize",
    "commentsCount": 0,
    "gitViewers": 4,
    "downloadcount": 0,
    "status": "Public",
    "summary": "Well, as said in the MySQL version of rent manager, that I will make another version with Sequelize with same features and functionality. However, the syntax is a bit different than MySQL version. Actually you don't have to write MySQL queries to communicate with the database.",
    "platform": "###\n   \"dependencies\": {\n        \"bcrypt\": \"^4.0.1\",\n        \"body-parser\": \"^1.19.0\",\n        \"express\": \"^4.17.1\",\n        \"jsonwebtoken\": \"^8.5.1\",\n        \"multer\": \"^1.4.2\",\n        \"mysql2\": \"^2.1.0\",\n        \"sequelize\": \"^4.41.2\"\n    },\n    \"devDependencies\": {\n        \"nodemon\": \"^2.0.3\"\n    }\n###\nI will begin with the basic packages:\n\nnodemon:\nThis packages allow you to restart the server whenever you save your code, but also you can create with it environment variables, you can add a file called nodemon.json and you add your environment variables such as your database credential.\nlink: https://www.npmjs.com/package/nodemon\nexpress: \nWhich is the framework I used to develop this RestApi\nlink:https://www.npmjs.com/package/express\nbody-parser:\nI added this package because I was working with a front end, this package allow you to parse incoming requests and parse the body on it. if you don't have a front end, and u will use postman, you can simply use this code in app.js file without the package itself.\n###\napp.use(express.json())\n###\nLink: https://www.npmjs.com/package/body-parser\n\njsonwebtoken:\nThis package is responsible for manipulating tokens and check for user authentication. Also, you can store data in the token as a payload, and then get it back from the request.\nLink: https://www.npmjs.com/package/jsonwebtoken\n\nmulter:\nThis package is very useful to manipulate files such as saving them deleting them, you can also edit their names before saving them. it's really simple to use and to configure.\nLink: https://www.npmjs.com/package/multer\n\nSequelize/mysql2:\nThese are the basic packages to build a rest API with MySQL database. Actually, sequelize makes interactions with database a bit easier for someone who don't know MySQL language. It provides a built in functions that you use them to fetch , store and update data without writing MySQL queries. Also to make all this work with sequelize mysql2 package is need to convert behind the scenes the functions provided by Sequelize into Mysql query before hitting the database.\n\nLink: https://www.npmjs.com/package/mysql2\nLink: https://www.npmjs.com/package/sequelize",
    "features": "more informations here: https://www.amir-ghedira.com/projects/5ea8a607a8f9a400174139d5",
    "github": "https://github.com/amirghedira/RentManager-RestAPI-Sequelize-",
    "filelink": "https://github.com/amirghedira/RentManager-RestAPI-Sequelize-/archive/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "5f428660f169c40017459e6e"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294155Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294499Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294672Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294801Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195294866Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195294920Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195295111Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195295374Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png"
    ],
    "name": "Task manager",
    "started": "01 july 2020",
    "date": {
        "$date": "2020-06-30T23:08:16.094Z"
    },
    "overview": "This project is all about managing tasks and assigning them to users. Only admins can assign tasks to users. the first account created in the database will automaticaly have an admin access and any other account will have a normal user access.Admins can edit any user and can provide admin access to them. Once a task is assigned to a user , it will be displayed to him. He can close the task when ever he finish it.",
    "whatlearned": "My goal with this application is to train my self with nestjs which is a new framework for me specially using typescript and other features like decorators and accessors. Its a small CRUD application which allowed me to learn this amazing framework of ExpressJs and get interested in it , and i have started the same project with the same frond end using NestJs but with GraphQL this time i will post this project right after this one.",
    "technologie": "Angular-NodeJs-NestJs-MongoDB",
    "commentsCount": 0,
    "gitViewers": 7,
    "downloadcount": 3,
    "status": "Public",
    "summary": "This is a complete full CRUD application with both front-end and back-end using Angular for the front-end and NestJs as a framework of ExpressJs in the back-end and MongoDB as a DataBase. This project is very simple and made in order to improve my skills in NestJs and get more deeply into it.",
    "platform": "== FRONT END ==\n\n###\n    \"dependencies\": {\n        \"@angular/animations\": \"~8.2.14\",\n        \"@angular/common\": \"~8.2.14\",\n        \"@angular/compiler\": \"~8.2.14\",\n        \"@angular/core\": \"~8.2.14\",\n        \"@angular/forms\": \"~8.2.14\",\n        \"@angular/platform-browser\": \"~8.2.14\",\n        \"@angular/platform-browser-dynamic\": \"~8.2.14\",\n        \"@angular/router\": \"~8.2.14\",\n        \"moment\": \"^2.27.0\",\n        \"rxjs\": \"~6.4.0\",\n        \"sweetalert2\": \"^9.15.2\",\n        \"tslib\": \"^1.10.0\",\n        \"zone.js\": \"~0.9.1\"\n    }\n###\n\nAngular (@angular):\nthose packages are imported directly using angular CLI when you start a new project to work with angular.\nLink: https://cli.angular.io/\n\nmoment:\nthis library allow you to .deal with date more efficiently and from it you can create dynamic dates like from-now date (1 min ago, 1 hour ago, etc..)\nLink: https://www.npmjs.com/package/moment\n\nrxjs:\nthis amazing and huge library has a lot to say about , but to be brief it allow you to manage some state in your angular project.\nLink: https://www.npmjs.com/package/rxjs\n\nsweetalert2:\nthis library provides a pre-build modals you can use to display success messages or errors, without adding HTML or CSS to your project.\nLink: https://www.npmjs.com/package/sweetalert2\n\n\n=== BACK END ===\n###\n  \"dependencies\": {\n    \"@nestjs/common\": \"^7.0.0\",\n    \"@nestjs/config\": \"^0.5.0\",\n    \"@nestjs/core\": \"^7.0.0\",\n    \"@nestjs/jwt\": \"^7.0.0\",\n    \"@nestjs/mongoose\": \"^7.0.1\",\n    \"@nestjs/passport\": \"^7.1.0\",\n    \"@nestjs/platform-express\": \"^7.0.0\",\n    \"@types/bcrypt\": \"^3.0.0\",\n    \"bcrypt\": \"^5.0.0\",\n    \"helmet\": \"^3.23.3\",\n    \"jsonwebtoken\": \"^8.5.1\",\n    \"mongoose\": \"^5.9.21\",\n    \"passport\": \"^0.4.1\",\n    \"passport-jwt\": \"^4.0.0\",\n    \"passport-local\": \"^1.0.0\",\n  }\n###\n\nNestJs (@nestjs): \n@nestjs packages are imported automatically once you start a project with nestjs CLI\nLink: https://docs.nestjs.com/cli/usages\n\nbcrypt:\nIs a small library, that provides a secure hashing method that you can use to hash plain text passwords before storing them into the database, also it provides a method that compares the hashed passwords and an entered password (plain text) \nyou can use this functionality in login handler.\nLink: https://www.npmjs.com/package/bcrypt\n\njsonwebtoken:\nIs a library responsible to manage tokens, it generates tokens from a payload you add, and you can make user authentication\nwith it, also you can protect some routes using a middleware that checks the token, you can add more options to it like the expiration time, etc... check out the docs below\nLink: https://www.npmjs.com/package/jsonwebtoken\n \nHelmet:\nThis library protect your express/nestjs back end applications from multiple threads\nLink:https://www.npmjs.com/package/helmet\n\npassport/ passport-local / passport-jwt:\nall of those libraries serve to extract the token from the header and protect some routes from being access by non authenticated users",
    "features": "The core feature of this application , is to manipulate data, and treat each type of user differently. An admin can edit his own profile and edit any other user profile and also assigning tasks to users. Those tasks can be edited by the admin , he can delete the task or update the content and/or the title and  opening/closing it\nThe main goal of this application is to build a full CRUD application that uses NestJs in the back-end  ",
    "github": "https://github.com/amirghedira/Todos-Angular-nestjs-mongoDB-",
    "filelink": "https://github.com/amirghedira/Todos-Angular-nestjs-mongoDB-/archive/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d74736d7e12a0017340e6e"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808823/1624808822988Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808823/1624808823426Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808824/1624808823719Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808824/1624808824007Screen%20Shot%202021-06-27%20at%204.png"
    ],
    "name": "Magic burger",
    "started": "Feb 25, 2020",
    "date": {
        "$date": "2020-02-24T23:26:46.160Z"
    },
    "overview": "This application is a burger maker, you just choose the ingredient you want to add to the burger and the quantity of each ingredient. Each time you add a specific ingredient the UI updates the burger and displays the ingredient you added and also the price change whenever you add/remove an ingredient.\nFinally, you can order the burger. \nThe user has a dedicated page displaying the orders made.",
    "whatlearned": "As a first step, it was a new experience for me to learn MERN stack developement. I made this project to get familiar with react and nodejs. Actually, i learned though out this project \nhow to build a restAPI using an express server with routes and controllers. I also learned how to interact with mongoDB database using mongoose (find, update, delete..)\nIn the other hand i knew how to fetching data using axios by making APIs calls and managing the state of the application.",
    "technologie": "Nodejs - Express - MongoDB - Reactjs",
    "commentsCount": 0,
    "gitViewers": 1,
    "downloadcount": 0,
    "status": "Public",
    "summary": "Using MERN stack technologies, this was my first application developed with the newest technologies. As simple as it looks, it was a great start to learn React and dive deep into Nodejs and express servers",
    "platform": "=== FRONT END ===\n###\n        \"antd\": \"^4.3.5\",\n        \"axios\": \"^0.19.2\",\n        \"react\": \"^16.12.0\",\n        \"react-dom\": \"^16.12.0\",\n        \"react-router-dom\": \"^5.2.0\",\n        \"react-scripts\": \"3.4.0\"\n###\n\nAxios:\nLink: https://www.npmjs.com/package/axios\nThis library is an alternative to fetch in javascript, it's easier to manipulate and easy to learn, and to use. Actually, the most liked feature that provides It, is the ability to make a base URL to HTTP requests, without repeating it each HTTP request.\n\nantd (ant Design):\nLink: https://www.npmjs.com/package/antd\nIs a React UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.\n\n=== BACK END ===\n###\n        \"body-parser\": \"^1.19.0\",\n        \"cors\": \"^2.8.5\",\n        \"express\": \"^4.17.1\",\n        \"mongoose\": \"^5.9.20\"\n###\n\n\nExpress:\nWhich is a framework of nodejs , which makes easier handling HTTP request and responses.\nLink: https://www.npmjs.com/package/express\n\nMongoose:\nis a mongodb driver in nodejs that provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.\nYou can also use mongodb driver (default) it will work too but with different syntax and methodologies\nLink: mongodb: https://www.npmjs.com/package/mongodb\nLink: mongoose:https://www.npmjs.com/package/mongoose\n\nbody-parse:\nIs a library , that allow the backend to parse the body and get data from the request (you can't get data from req.body without this library)\nLink: https://www.npmjs.com/package/body-parser\nThe other packages are optional, but they provide more functionality.\n\ncors:\nIs a library for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.\n\n",
    "features": "The core feature of this application is data binding and making the UI is reactive to each ingredient added or removed.\nAlso building a RestAPI with MongoDB that saves the orders into the database and fetches the ingredients.",
    "github": "https://github.com/amirghedira/magic-burger",
    "filelink": "https://github.com/amirghedira/magic-burger/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d747d2d7e12a0017340e6f"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817390/1624817388135Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817391/1624817390744Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817403/1624817391353Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817410/1624817403462Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817413/1624817410682Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817414/1624817412939Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817418/1624817414342Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817422/1624817418135Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817422/1624817422151Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817426/1624817422395Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817465/1624817461615Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817466/1624817465207Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817466/1624817466242Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817467/1624817466851Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817467/1624817467393Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817470/1624817467868Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817470/1624817470588Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817473/1624817470633Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817474/1624817473451Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817482/1624817474244Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817511/1624817508855Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817516/1624817511737Screen%20Shot%202021-06-27%20at%207.png"
    ],
    "name": "Karyatn Frontend",
    "started": "Apr 18, 2020",
    "date": {
        "$date": "2020-04-17T23:29:22.828Z"
    },
    "overview": "This is application is made as a private project. Infact this project mainly focuses on managing renting cars and has made the relationship between a customer and a company that rents cars easier. Actually, this app provides cars for rent from different companies in different cities/regions in Tunisia. Clients can reserve cars and subscribe to a company so that the customer will be mailed and notified about any news made by that company.\nNot only that, the company has a dedicated dashboard that provides a lot of utilies.",
    "whatlearned": "A project with that scale learned me more things. First how to concept and manage data in an efficient way so that the application runs smoothly and faster during data retrievement.\nSecond, in a huge project, any complexity can lead to more problems that's why it's important to keep things simple and easy.\nFinally, I learned how to offer an efficient statistic board by learning some key concepts about business intelligence which I applied in this project.\nThe statistics are meaningful and provides a lot of information for the business company that rent cars\n",
    "technologie": "Angular",
    "commentsCount": 0,
    "gitViewers": 0,
    "downloadcount": 0,
    "status": "Finished",
    "summary": "This was a professional web application built with MEAN stack technologies.\nThe goal of this application was to learn every aspect of Angular and Nodejs and manage the scalability of the application.",
    "platform": "-",
    "features": "With its simple and intuitive UI, this application provides a lot of features.\nFirst of all, a system was built to reserve cars even if they are currently occupied. Cars can be automatically affected to the customer that reserved the car after the company accepts the request. Each company needs to check about the client's validity and contact him before accepting the reservation request. \nAlso, car's mileage is automatically updated whenever a rent has finished.\nLast but not least clients are alerted when the rent of the car will end and when it's over the client is requested to give back the car to the company he rented the car from.\nFinally, a mailing service is built to keep clients notified about any news such as company updated or rents information.",
    "github": "https://github.com/amirghedira/karyatn",
    "filelink": "https://github.com/amirghedira/karyatn/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d7487ad7e12a0017340e70"
    },
    "imagesurl": [],
    "name": "Karyatn Backend",
    "started": "Apr 18, 2020",
    "date": {
        "$date": "2020-04-17T23:32:10.787Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Nodejs - Express - MongoDB",
    "commentsCount": 0,
    "gitViewers": 0,
    "downloadcount": 0,
    "status": "Public",
    "summary": "Implementing a complex RestApi with complex data is a bit challenging.\nThe efficiency of the conception of data and relations is required. Also, Managing data with pagination and lazy loading is used to provide a better user experience. Also, this backend handle email service which sends automatically emails to clients using SMTP email. Finally SocketIO is heavily used to send real-time notifications to platform users",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/karyatnRestAPI",
    "filelink": "https://github.com/amirghedira/karyatnRestAPI/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d74924d7e12a0017340e71"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817607/1624817606664Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817608/1624817607909Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817609/1624817608855Screen%20Shot%202021-06-27%20at%207.png"
    ],
    "name": "karyatn GraphQLAPI",
    "started": "May 19, 2020",
    "date": {
        "$date": "2020-05-17T23:35:00.046Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Nodejs - GraphQL - MongoDB",
    "commentsCount": 0,
    "gitViewers": 0,
    "downloadcount": 0,
    "status": "Public",
    "summary": "After creating the Rest Api version of KaryaTn, the data become so huge, and manipulating it becomes so hard especially with the response time that was intolerable.\nI built this GraphQL API in order to scale the application and provides a better user experience to the final customer.",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/karyatnGraphQLAPI",
    "filelink": "https://github.com/amirghedira/karyatnGraphQLAPI/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d75121e1fc7100173fcde1"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294155Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294499Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294672Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195294/1598195294801Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195294866Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195295111Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195294920Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1598195295/1598195295374Capture%20d%E2%80%99e%CC%81cran%202020-08-23%20a%CC%80%2016.png"
    ],
    "name": "Task manager V2",
    "started": "Jul 5, 2020",
    "date": {
        "$date": "2020-07-04T23:09:05.444Z"
    },
    "overview": "This project is all about managing tasks and assigning them to users. Only admins can assign tasks to users. the first account created in the database will automaticaly have an admin access and any other account will have a normal user access.Admins can edit any user and can provide admin access to them. Once a task is assigned to a user , it will be displayed to him. He can close the task when ever he finish it.",
    "whatlearned": "Most of all I learned how to implement a GraphQL server from schemas to resolvers. Also, how to interact with a GraphQL server from a front end using apollo client that provides nice querying features and caching methods.\n",
    "technologie": "Angular - Nestjs - GraphQL - MongoDB",
    "commentsCount": 0,
    "gitViewers": 2,
    "downloadcount": 2,
    "status": "Public",
    "summary": "After completing the first version which was built with Angular and Nestjs, I decided to switch the Backend from a Rest API to GraphQL API, in order to improve my skills in GraphQL implementation in NestJs",
    "platform": "== FRONT END ==\n###\n    \"dependencies\": {\n        \"@angular/animations\": \"~8.2.14\",\n        \"@angular/common\": \"~8.2.14\",\n        \"@angular/compiler\": \"~8.2.14\",\n        \"@angular/core\": \"~8.2.14\",\n        \"@angular/forms\": \"~8.2.14\",\n        \"@angular/platform-browser\": \"~8.2.14\",\n        \"@angular/platform-browser-dynamic\": \"~8.2.14\",\n        \"@angular/router\": \"~8.2.14\",\n        \"apollo-angular\": \"^1.9.1\",\n        \"apollo-angular-link-http\": \"^1.10.0\",\n        \"apollo-cache-inmemory\": \"^1.6.6\",\n        \"apollo-client\": \"^2.6.10\",\n        \"apollo-link-context\": \"^1.0.20\",\n        \"apollo-link-error\": \"^1.1.13\",\n        \"graphql\": \"^15.3.0\",\n        \"graphql-tag\": \"^2.10.3\",\n        \"moment\": \"^2.27.0\",\n        \"rxjs\": \"~6.4.0\",\n        \"sweetalert2\": \"^9.15.2\",\n        \"tslib\": \"^1.10.0\",\n        \"zone.js\": \"~0.9.1\"\n    }\n###\n\nAngular (@angular):\nthose packages are imported directly using angular CLI when you start a new project to work with angular.\nLink: https://cli.angular.io/\n\nmoment:\nthis library allows you to .deal with date more efficiently and from it you can create dynamic dates like from-now date (1 min ago, 1 hour ago, etc..)\nLink: https://www.npmjs.com/package/moment\n\nrxjs:\nthis amazing and huge library has a lot to say about, but to be brief it allow you to manage some state in your angular project.\nLink: https://www.npmjs.com/package/rxjs\n\nsweetalert2:\nthis library provides a pre-build modals you can use to display success messages or errors, without adding HTML or CSS to your project.\nLink: https://www.npmjs.com/package/sweetalert2\n\napollo-client:\nApollo Client is a fully-featured caching GraphQL client with integrations for React, Angular, and more. It allows you to easily build UI components that fetch data via GraphQL.\nLink:https://www.npmjs.com/package/apollo-client\n\n=== BACK END ===\n###\n  \"dependencies\": {\n        \"@nestjs/common\": \"^7.0.0\",\n        \"@nestjs/config\": \"^0.5.0\",\n        \"@nestjs/core\": \"^7.0.0\",\n        \"@nestjs/graphql\": \"^7.5.1\",\n        \"@nestjs/jwt\": \"^7.0.0\",\n        \"@nestjs/mongoose\": \"^7.0.1\",\n        \"@nestjs/passport\": \"^7.1.0\",\n        \"@nestjs/platform-express\": \"^7.0.0\",\n        \"@types/bcrypt\": \"^3.0.0\",\n        \"apollo-server-express\": \"^2.15.1\",\n        \"bcrypt\": \"^5.0.0\",\n        \"graphql\": \"^15.2.0\",\n        \"graphql-tools\": \"^6.0.12\",\n        \"helmet\": \"^3.23.3\",\n        \"jsonwebtoken\": \"^8.5.1\",\n        \"mongoose\": \"^5.9.21\",\n        \"passport\": \"^0.4.1\",\n        \"passport-jwt\": \"^4.0.0\",\n        \"passport-local\": \"^1.0.0\",\n  }\n###\n\n\nNestJs (@nestjs):\n@nestjs packages are imported automatically once you start a project with nestjs CLI\nLink: https://docs.nestjs.com/cli/usages\n\nbcrypt:\nIs a small library, that provides a secure hashing method that you can use to hash plain text passwords before storing them into the database, also it provides a method that compares the hashed passwords and an entered password (plain text)\nyou can use this functionality in login handler.\nLink: https://www.npmjs.com/package/bcrypt\n\njsonwebtoken:\nIs a library responsible to manage tokens, it generates tokens from a payload you add, and you can make user authentication\nwith it, also you can protect some routes using a middleware that checks the token, you can add more options to it like the expiration time, etc... check out the docs below\nLink: https://www.npmjs.com/package/jsonwebtoken\n\nHelmet:\nThis library protect your express/nestjs back end applications from multiple threads\nLink: https://www.npmjs.com/package/helmet\n\npassport/ passport-local / passport-jwt:\nall of those libraries serve to extract the token from the header and protect some routes from being access by non authenticated users\n\napollo-server-express:\nThis is the Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with many Node.js HTTP server frameworks.\nLink: https://www.npmjs.com/package/apollo-server-express",
    "features": "The core feature of this application , is to manipulate data, and treat each type of user differently. An admin can edit his own profile and edit any other user profile and also assigning tasks to users. Those tasks can be edited by the admin , he can delete the task or update the content and/or the title and  opening/closing it\nThe main goal of this application is to build a full CRUD application that uses NestJs and GraphQL in the back-end by implementing schemas and resolvers and services that treats every GraphQL query",
    "github": "https://github.com/amirghedira/Todos-Angular-nestjs-mongoDB-",
    "filelink": "https://github.com/amirghedira/Todos-Angular-nestjs-mongoDB-/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d751f8e1fc7100173fcde2"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735251/1624735251373Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735251/1624735251647Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735252/1624735251860Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735252/1624735252074Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735253/1624735252431Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735253/1624735252930Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735254/1624735253418Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735255/1624735254052Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735256/1624735254897Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735257/1624735256843Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735257/1624735257029Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735257/1624735257334Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735257/1624735257606Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735258/1624735257786Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624735258/1624735258019Screen%20Shot%202021-06-26%20at%208.png"
    ],
    "name": "Messenger clone",
    "started": "Jun 30, 2020",
    "date": {
        "$date": "2020-06-29T23:12:40.562Z"
    },
    "overview": "After getting advanced in MEAN stack development I decided to take it further by making a messenger clone that contains most of its functionalities",
    "whatlearned": "-",
    "technologie": "Angular - Nodejs - Expressjs - MongoDB",
    "commentsCount": 0,
    "gitViewers": 1,
    "downloadcount": 0,
    "status": "Public",
    "summary": "Implemented with MEAN stack technologies and sockets I was able to build a messenger clone from scratch including most of the existing functionalities, such as real-time messaging, online status, conversation customization (color, emoji, pseudo name, etc..) archiving conversations, deleting conversations, deleting messages, sending files, voice recording, and also voice and video calls using WebRTC.",
    "platform": "-",
    "features": "As messenger, it provides instant messaging between users and seen message functionality. Also, it provides conversation customization from the color, the emoji to pseudo names.\nNot only that, sharing vocals photos and videos can be possible using a cloud service (Cloudinary) to save those files.\nBesides, vocal calls and video calls are part of this application using webRTC and sockets the result was pretty amazing.\nWithout forgetting deleting conversation, and deleting messages with an instant update, archiving conversation, and blocking users.\n\ndemo video: https://www.youtube.com/watch?v=D6L4mB4El00",
    "github": "https://github.com/amirghedira/MEAN---Messenger-Clone",
    "filelink": "https://github.com/amirghedira/MEAN---Messenger-Clone/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d752b0e1fc7100173fcde3"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817716/1624817715656Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624817717/1624817716895Screen%20Shot%202021-06-27%20at%207.png"
    ],
    "name": "Events GraphQLAPI",
    "started": "Apr 30, 2020",
    "date": {
        "$date": "2020-04-29T23:15:44.270Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Nodejs - GraphQL - MongoDB",
    "commentsCount": 0,
    "gitViewers": 0,
    "downloadcount": 0,
    "status": "Public",
    "summary": "After manipulating restful APIs, I discovered GraphQL as a new way to think about web services. This amazing tool provides a lot of utilities and advantages such as reducing the bandwidth of data transmission by selecting required fields within the request. Also, GraphQL provides a query language to retrieve data and updating it. Using GraphiQL, which is a complete UI to perform GraphQL queries built into the application, testing GraphQL Apis is so easy and very intuitive.\nThis small GraphQL API  focusing on handling events is built to try this new tool and learn how to implement it.",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/eventsGraphQLAPI",
    "filelink": "https://github.com/amirghedira/eventsGraphQLAPI/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d753cbe1fc7100173fcde4"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818030/1624818015778Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818042/1624818030326Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818052/1624818042636Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818053/1624818052611Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818056/1624818052661Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818057/1624818056277Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818059/1624818057810Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818060/1624818059486Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818068/1624818060942Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818077/1624818068412Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818079/1624818077408Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818191/1624818079684Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818192/1624818191701Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818193/1624818192869Screen%20Shot%202021-06-27%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624818194/1624818193382Screen%20Shot%202021-06-27%20at%207.png"
    ],
    "name": "Amir Platform (NextJs)",
    "started": "Jan 14, 2021",
    "date": {
        "$date": "2021-01-13T23:20:27.975Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "ReactJs - NextJs",
    "commentsCount": 0,
    "gitViewers": 2,
    "downloadcount": 0,
    "status": "Public",
    "summary": "Facing SEO (Search Engine Optimisation) problems with React and client-side rendering, the best approach was to find a solution to build my website as a service-side rendering app. \nNextJs was the best solution to this problem. Not only it provides server-side rendering but also wraps a react app into a node server and adds on it multiple tools to improve the SEO. With that, I converted my react web app into a NextJs and added few improvements to the UI.",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/mypersonalweb-nextjs",
    "filelink": "https://github.com/amirghedira/mypersonalweb-nextjs/archive/refs/heads/main.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d75467e1fc7100173fcde5"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733063/1624733061980Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733119/1624733118566Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733126/1624733122499Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733132/1624733129043Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733161/1624733157152Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733164/1624733161256Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733168/1624733164243Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733171/1624733168275Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733210/1624733207123Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733213/1624733210018Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733218/1624733213675Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733231/1624733226700Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624733233/1624733231674Screen%20Shot%202021-06-26%20at%207.png"
    ],
    "name": "Medical manager (Tunisie Telecom)",
    "started": "May 17, 2021",
    "date": {
        "$date": "2021-05-16T23:23:03.030Z"
    },
    "overview": "This app contains three roles, an admin (webmaster) that adds doctors and nurses, and agents.\nDoctors are granted access by an admin to perform a consultation and check for the agent's medical file. They can also generate certificates for their agents and download them as a pdf document then print it. The data of the agent is dynamically injected into the certificates.\nThe nurse provides consultations to the agents so the doctors can be able to see them and schedule them, and they also mark the presence of a doctor each day.",
    "whatlearned": "-",
    "technologie": "Angular - Nodejs - Expressjs - MongoDB",
    "commentsCount": 0,
    "gitViewers": 7,
    "downloadcount": 2,
    "status": "Public",
    "summary": "Made as a freelance project, it's built using MEAN stack technologies and mainly manage doctors and nurses that assists Telecom agent's health\n",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/tt-med-mean-app",
    "filelink": "https://github.com/amirghedira/tt-med-mean-app/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d756416e53e40017bd8d6e"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741488/1624741476847Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741506/1624741488761Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741697/1624741667262Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741709/1624741697061Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741725/1624741709332Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741763/1624741725082Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741774/1624741763568Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741783/1624741774638Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741815/1624741783018Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741817/1624741815487Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741819/1624741817116Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741822/1624741819082Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741990/1624741986628Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624741999/1624741990829Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742005/1624741999181Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742012/1624742004950Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742024/1624742012741Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742142/1624742118166Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742159/1624742142441Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742164/1624742159166Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742173/1624742164769Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742184/1624742173185Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742186/1624742183968Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742203/1624742186611Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742211/1624742203495Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742219/1624742211849Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742224/1624742219614Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742281/1624742278214Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742290/1624742281241Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742297/1624742290299Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742302/1624742297055Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742307/1624742302910Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742312/1624742307886Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742322/1624742312512Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742333/1624742322037Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742344/1624742333339Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742347/1624742344260Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742498/1624742489205Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742507/1624742498671Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742512/1624742507447Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742514/1624742512664Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742518/1624742514845Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742520/1624742518172Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742528/1624742520585Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742534/1624742528038Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742538/1624742534642Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742539/1624742538035Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742591/1624742588033Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742600/1624742591610Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742603/1624742600054Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742605/1624742603627Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742863/1624742857035Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742881/1624742863438Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624742900/1624742898734Screen%20Shot%202021-06-26%20at%209.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624820700/1624820683695Screen%20Shot%202021-06-27%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624820711/1624820700599Screen%20Shot%202021-06-27%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624820782/1624820778376Screen%20Shot%202021-06-27%20at%208.png"
    ],
    "name": "Addresti web app",
    "started": "Sep 16, 2020",
    "date": {
        "$date": "2020-09-15T23:30:57.205Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Reactjs",
    "commentsCount": 0,
    "gitViewers": 0,
    "downloadcount": 0,
    "status": "Private",
    "summary": "This is a freelance project that lasted for nearly one year.\nThis MERN application involved several technologies. From SocketIO, SMTP \nmailing, PDF generation, chat service, google maps manipulation, retrieving locations, and directions to real-time map tracking.\nBuilt in order to solve the problem of delivery addresses, by providing an 8 digit code that references your location with real-time tracking. But also exposing partners that sells products, food, or services",
    "platform": "-",
    "features": "-",
    "github": "",
    "filelink": "",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d758426e53e40017bd8d6f"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732433/1624732432084Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732434/1624732433544Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732434/1624732434190Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732437/1624732434399Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732437/1624732437608Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732437/1624732437649Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732440/1624732437674Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732445/1624732440856Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732446/1624732445684Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732447/1624732446584Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732449/1624732447788Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732451/1624732449804Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624732452/1624732450776Screen%20Shot%202021-06-26%20at%207.png"
    ],
    "name": "E-commerce (MGRN)",
    "started": "Jul 17, 2020",
    "date": {
        "$date": "2020-07-16T23:39:30.235Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Reactjs - Appolo - Nodejs - GraphQL",
    "commentsCount": 0,
    "gitViewers": 2,
    "downloadcount": 0,
    "status": "Public",
    "summary": "This is the first time I use Apollo client to link a React web application to a GraphQL API. For that, I made a basic E-commerce web app to dive deep into Apollo client and understanding the concept of apollo and learning react-apollo hooks which are essential blocks to build a MERNG app.",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/E-Commerce--MGRN-APP-demo-",
    "filelink": "https://github.com/amirghedira/E-Commerce--MGRN-APP-demo-/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d758fd6e53e40017bd8d70"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734154/1624734153925Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734155/1624734154190Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734157/1624734155253Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734162/1624734156952Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734166/1624734162880Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734166/1624734166107Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734168/1624734166126Screen%20Shot%202021-06-26%20at%207.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734169/1624734168186Screen%20Shot%202021-06-26%20at%208.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624734170/1624734169399Screen%20Shot%202021-06-26%20at%208.png"
    ],
    "name": "Trip tracker",
    "started": "Mar 7, 2021",
    "date": {
        "$date": "2021-03-06T23:42:37.958Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Angular",
    "commentsCount": 0,
    "gitViewers": 1,
    "downloadcount": 0,
    "status": "Public",
    "summary": "Made under university projects, this app is developed in order to discover and learn how to implement a portal website. Featuring map rendering that displays the location and distances of restaurants and hotels of your trip. This small app also provides you with a trip according to your budget and days to spend. It also provides you with recommendations according to your previous searches and can be selected and viewed on the map. ",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/Trip-tracker-Front-end-",
    "filelink": "https://github.com/amirghedira/Trip-tracker-Front-end-/archive/refs/heads/main.zip",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "60d89a5dfd531500178c808c"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808010/1624808007604Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808017/1624808010854Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808017/1624808017339Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808017/1624808017729Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808020/1624808017743Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808024/1624808020067Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808026/1624808024677Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808027/1624808026451Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808028/1624808027255Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808028/1624808028218Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808330/1624808328710Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808332/1624808330414Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808334/1624808332192Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808334/1624808334687Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808336/1624808334966Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808336/1624808336351Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808337/1624808336535Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808337/1624808337026Screen%20Shot%202021-06-27%20at%204.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1624808338/1624808337452Screen%20Shot%202021-06-27%20at%204.png"
    ],
    "name": "E-learning platform",
    "started": "Jun 01, 2020",
    "date": {
        "$date": "2020-05-31T23:33:49.202Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "Angular - Apollo - Nestjs - GraphQL - MongoDB",
    "commentsCount": 0,
    "gitViewers": 0,
    "downloadcount": 0,
    "status": "Private",
    "summary": "During my first year of internship in Five Points the talent pool, I worked with a development team to build an E-learning platform that basically sells Bootcamps, modules, and courses. Within the application are a team of couches that provides support for a customer that has a question about a course or something else via chat built into the platform. Customers receive a certificate after completing a Bootcamp, module or a course.",
    "platform": "-",
    "features": "-",
    "github": "",
    "filelink": "",
    "Comments": [],
    "__v": 0
}, {
    "_id": {
        "$oid": "615381e4dc578700178786f7"
    },
    "imagesurl": [
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862660/1632862658675Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862672/1632862660762Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862674/1632862672837Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862676/1632862674138Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862680/1632862676170Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862682/1632862680593Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862683/1632862682167Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862685/1632862683134Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862691/1632862685275Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1632862692/1632862691219Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018837/1633018836702Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018837/1633018836982Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018837/1633018837216Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018837/1633018837407Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018839/1633018837630Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018844/1633018839832Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018844/1633018844300Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018844/1633018844451Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018844/1633018844631Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018845/1633018844740Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018898/1633018898146Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018898/1633018898356Screen%20Shot%202021-09-05%20at%2011.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018898/1633018898563Screen%20Shot%202021-09-06%20at%2012.png",
        "https://res.cloudinary.com/hoz1jpmp7/image/upload/v1633018903/1633018898821Screen%20Shot%202021-09-07%20at%2012.png"
    ],
    "name": "Google meet clone",
    "started": "28/09/2021",
    "date": {
        "$date": "2021-09-28T20:58:12.701Z"
    },
    "overview": "-",
    "whatlearned": "-",
    "technologie": "ReactJs - NodeJs - Express - MongoDB - SocketIO - PeerJs",
    "commentsCount": 0,
    "gitViewers": 4,
    "downloadcount": 1,
    "status": "Public",
    "summary": "-",
    "platform": "-",
    "features": "-",
    "github": "https://github.com/amirghedira/Google-meet-clone-MERN-APP",
    "filelink": "https://github.com/amirghedira/Google-meet-clone-MERN-APP/archive/refs/heads/master.zip",
    "Comments": [],
    "__v": 0
}]



let imagesCount = 0
data.forEach(project => {
    imagesCount += project.imagesurl.length
})
console.log(imagesCount)