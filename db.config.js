import ENV from './env.js';
import mongoose from 'mongoose';

mongoose.connect(ENV.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

export default dbConnection;
