import express from "express";
import path from "path";
const app = express();
const port = 3000; // default port to listen
const __dirname = path.resolve();

const publicPath = path.join(__dirname, "/dist")
app.use(express.static(publicPath));

app.get( "/*", ( req, res ) => {
    const mainHtml = path.join(__dirname, '/dist/index.html')
    res.sendFile( mainHtml, function(err) {
        if (err) {
          return res.status(500).send(err)
        }
        return
      });
} );

// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );