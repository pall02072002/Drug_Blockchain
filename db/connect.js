const mongoose = requires("mongoose");

uri =
    "mongodb+srv://tanishka786:<aCrZVREx2FZXlif5>@drugblock.q7h2t.mongodb.net/";
const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
