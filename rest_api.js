var express = require('express');
var app = express();
app.configure(function() {
    app.use(express.bodyParser()); // used to parse JSON object given in the request body
});

function sleep(time) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
}

app.get('/authenticate', function (request, response) {
    sleep(1000);
    response.json(
        {
            'name': 'Nick',
            'systems': [
                {'system_id': 1},
                {'system_id': 2},
                {'system_id': 3}
            ]
        }
    );
});

app.get('/systems', function (request, response) {
    sleep(1000);
    response.json(
        {
            'system_id': 1,
            'name': 'My house'
        }
    );
});

app.get('/devices', function (request, response) {
    sleep(1000);
    response.json(
        {
            'device': [
                {
                    'id': 1,
                    'system_id': 1,
                    'name': 'Front door'
                },
                {
                    'id': 2,
                    'system_id': 1,
                    'name': 'Bedroom window'
                },
                {
                    'id': 3,
                    'system_id': 1,
                    'name': 'Back door'
                }
            ]
        }
    );
});

app.listen(8080); //to port on which the express server listen