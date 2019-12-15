import mongoose from "mongoose";
import config from "./main";

export default () => {
  const { databaseManager, username, password, host, port, databaseName } = config;
  const database = `${databaseManager}://@${host}:${port}/${databaseName}`;
  const options = {
    user: username,
    pass: password,
    useNewUrlParser: true,
  };
  // mongodb://englishDB$$User:!!_+4zdru?8410ck*db*@localhost:27017/englishDB
  console.log(database);

  const connect = () => {
    mongoose.connect(database, options)
    .then(() => {
        return console.log(`Successfuly connected to ${database}`);
    })
    .catch((error) => {
        console.error("Error connecting to database", error);
        return process.exit(1);
    });
  };

  connect();

  mongoose.connection.on("disconnected", connect);
};
