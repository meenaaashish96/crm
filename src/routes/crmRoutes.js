const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request come from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {  
        res.send("You are on contact route, Congratulations!")
    })
    
    .post( (req, res) => 
        res.send("Request posted successfully")
    )

    app.route('/contact/:contactId')
    .put((req, res) => 
        res.send("You are on put method")
    )

    .delete((req, res) => 
        res.send("Item deleted successfully")
    )
}

export default routes;