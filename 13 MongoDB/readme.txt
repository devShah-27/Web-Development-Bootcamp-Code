Mongoose is an ODM --> Object Data Mapper / Object Document Mapper

ODMs like Mongoose map documents coming from a database into usable JavaScript objects.

Mongoose provides ways for us to model out our application data and define a schema. 
It offers easy ways to validate data and build complex queries from the comfort of JS.

## Solving mongoose.connect issues

If you are using the latest versions of Node.js with mongoose, and you get a connection refused ECONNREFUSEDI error message when connecting your app to the database, then you might need to change localhost to 127.0.0.l in your mongoose.connect database connection string:
mongoose.connect('mongodb://127.0.0.1:27017/your_database_name_here')

Also, in the currently newest mongoose versions you don't need to pass the options object as the second argument to the mongoose.connect method.


## Models

Models are just JS classes made using Mongoose that represent data stored in a Mongo Database