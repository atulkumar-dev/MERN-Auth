import express from 'express';
import userRoute from './routes/userRoute.js'
import cors from 'cors';
import dbConnection from './util/dbConnection.js'

const app = express();


app.use(cors({
    origin: '*'
})); 


app.use(express.json()); 

//connect to mongodb
dbConnection();


app.use('/',userRoute);



//start the server
app.listen(80,()=>{
    console.log("Server started on http://localhost:80")
})


