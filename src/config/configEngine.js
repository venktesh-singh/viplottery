import express from 'express';

const configViewEngine = (app) => {
    // Serve static files from the 'public' directory
    app.use(express.static("src/public"));

    // Set the view engine to EJS
    app.set('view engine', 'ejs');

    // Set the views directory to 'views' inside the 'src' directory
    app.set('views', 'src/views');
};

export default configViewEngine;



/*import express from 'express';

const configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set('view engine', "ejs");
    app.set('views', "./src/views");
}

export default configViewEngine; */
