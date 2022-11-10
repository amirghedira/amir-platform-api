# Overview
 As a back end, this rest API(MongoDB, Express, NodeJS), is managing HTTP requests coming from the front end and serving the data from Mongo database. Requests are sent to the backend in different routes 
and each route contains a specific handler.
I have used 4 main routes, which are /user, /project, /banned, /topic.
Each of these routes is configures thought different routes you can download the project and check each route. 
 #Features / Technologies 
 There is not much to talk about features, this rest API is made to serve the front end with data 
The 2 only features that exist are cloudinary and web push 
Actually, I used an external storage which is cloudinary to store the application's images, of course, the storage is limited. For that when I remove any picture or even when i change any picture I automatically delete the old one from the cloud , with that am saving space.
Besides I used webpush to push notification into the client operating system, in this use-case, whenever a user comment a project or post a topic or reply to a post, a receive an instant notification in my operating system, this reduces the delay to respond to your questions or your suggestions. 
 
# Platform & Libraries 
 In this back end , i used well known libraries which are:
```json
{
        "bcrypt": "^4.0.1",
        "body-parse": "^0.1.0",
        "cloudinary": "^1.20.0",
        "express": "^4.17.1",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^5.9.5",
        "multer": "^1.4.2",
        "multer-storage-cloudinary": "^2.2.1",
        "node-sass": "^4.13.1",
        "nodemon": "^2.0.2",
        "socket.io": "^2.3.0",
        "web-push": "^3.4.3"
}
```
The first main libraries are:

[nodemon](https://www.npmjs.com/package/nodemon):
Is a very useful tool , actually with nodemon you don't need to stop the server and rerun it again whenever you update your code. Actually when you save changes the server restart automatically.Also with nodemon installed you can created a file named nodemon.json in which you store your environment variables (process.env.VARIABLE)

[Express](https://www.npmjs.com/package/express):
Which is a framework of nodejs , which makes easier handling HTTP request and responses.

[Mongoose](https://www.npmjs.com/package/mongoose): 
is a mongodb driver in nodejs that provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
You can also use mongodb driver (default) it will work too but with different syntax and methodologies

[body-parse](https://www.npmjs.com/package/body-parser):
Is a library , that allow the backend to parse the body and get data from the request (you can't get data from req.body without this library)
The other packages are optional, but they provide more functionality.

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken):
Is a library responsible to manage tokens, it generates tokens from a payload you add, and you can make user authentication
with it, also you can protect some routes using a middleware that checks the token, you can add more options to it like the expiration time, etc... check out the docs below


[multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)/[multer](multer:https://www.npmjs.com/package/multer):
I used both of those libraries as a middleware to store data in [cloudinary](https://cloudinary.com) which is a cloud storage (storing only images and videos)
You can use multer by its own to store files in your local storage, that's the default use case of multer.

[Cloudinary](https://www.npmjs.com/package/cloudinary): 
Is a driver for cloudinary , responsible to connect and send requests to cloudinary, and provides multiple functionalities.

[bcrypt](https://www.npmjs.com/package/bcrypt):
Is a small library, that provides a secure hashing method that you can use to hash plain text passwords before storing them into the database, also it provides a method that compares the  hashed passwords and an entered password (plain text) 
you can use this functionality in login handler.

[socket.io](https://www.npmjs.com/package/socket.io):
As i mentioned in the front end project, I used client-side socketio , in the back end you have to use socketio server-side to register your listeners, in the server and emit them or broadcast them into all the sockets connected to your website
for example:
```javascript
 io.on('connection', (socket) => {
        socket.on('sendnotification', (notification) => {
            socket.broadcast.emit('sendnotification', notification)
        })
    })
```
This listener is responsible to receive a new notification when you emit it from the front end. Then the server broadcast the new notification to all the connected sockets.

[web-push](https://www.npmjs.com/package/web-push): 
This package allows you to push notifications after registering the service worker in the front end.


 
# What I learned ?
 I learned more things about each of those library I mentioned above.
To begin, I learned how to manipulate the database throw mongoose and to create models and schemas, and also how to perform queries, and fetching data and updating and removing data
Besides, I learned webpush syntax and I knew it's ability to push notifications easily.
In addition, Cloudinary which I used for the first time, I used in past Multer with local storage, but with Cloudinary and multer I learned how to store images in the cloud and deleting them with simple code, and also customize the images name (you can find all this is cloudinary.js in middlewares)
About other libraries like express and bcrypt and jsonwebtoken I already use them in past and it's helpful to use them again and manipulating them deeply.
