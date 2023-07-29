import {connect} from 'mongoose';


const dbConnect = async () => {
    try{
       const conn = await connect(process.env.MONGODB_DB)
       console.log('connection successfully established',conn.connection.host)
    }catch(e){
      console.log('Error - ', e)
    }
}

export default dbConnect;