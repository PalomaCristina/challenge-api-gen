import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected!'));

let db = mongoose.connection;

export default db;