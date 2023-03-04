const http = require('http')

const server = http.createServer(
    (req, res) => {
        if(req.url === '/') {
            res.end('Welcome to our home page')
            return
        }
        if(req.url === '/about') {
            res.end('Here is the about page')
            return
        }
        res.end(`<h1>Oops!</h1>
                 <p>We can't find the page you're looking for</p>
                 <a href="/">fuck off</a>`)
    }
)

server.listen(5000)