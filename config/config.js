/**
 * env : to differentiate between dev and prod modes 
 * port : to define the listening port for the server 
 * jwtSecret : The secret to be used to sign JWT 
 * mongoUri : the location of the mongodb instance for the project
 */
const config = {
  username:"yassine.rassy1@gmail.com",
  password:"mongodb123",
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "JASSINE_FANNI",
  mongoUri:
    process.env.MONGO_URI ||
    process.env.MONGO_HOST ||
    `mongodb://${process.env.IP || "localhost"}:${
      process.env.MONGO_PORT || 27017
    }/mernproject'`,
};

//------ These variables will give us the flexibility to change values from a single file and use it across the backend code
export default config;