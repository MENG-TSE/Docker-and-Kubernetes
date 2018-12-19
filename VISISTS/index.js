const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits',0);

app.get('/',(req,res) =>{
    process.exit(0);    ///get crash  when visit this root route
    client.get('visits',(err,visits) =>{
        res.send('Number of visits is' + visits);
        client.set('visits', parseInt(visits) + 1);
    })
});

app.listen(8081,() => {
    console.log('Listening on port 8081');
})


// docker-compose up 
// docker-compose up --build

//Launch in background
    //docker0compose up -d
//Stop Containers
    //docker-compose down