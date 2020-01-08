const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} catch (error) {
  console.log('Error connecting to database', error);
}