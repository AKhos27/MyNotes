const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected from db.js");
    } catch (error) {
        console.error("DB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
