import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import helmet from "helmet";
import cors from "cors";



const app = express();
/*---Configuring express----*/

/**
 * bodyParser: Request body-parsing middleware to handle the complexities of parsing streamable request objects
 * so that we can simplify browser-server communication by exchanging JSON in the request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Cookie parsing middleware to parse and set cookies in request objects.
 */
app.use(cookieParser());
/**
 * Compression middleware that will attempt to compress response bodies for all requests that traverse through the middleware
 */
app.use(compress());
/**
 * helmet : Collection of middleware functions to help secure Express apps by settings various HTTP headers
 */
app.use(helmet());
/**
 * cors : Middleware to enable cross-origin ressource sharing (CORS)
 */
app.use(cors());

export default app;
