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
    sleep(request.query.delay * 1000);
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
    sleep(request.query.delay * 1000);
    response.json(
        {
            'systems': [
                {
                    'system_id': 1,
                    'name': 'My house'
                },
                {
                    'system_id': 2,
                    'name': 'Lake house'
                },
                {
                    'system_id': 3,
                    'name': 'Cabin'
                }
            ]

        }
    );
});

app.get('/devices', function (request, response) {
    sleep(request.query.delay * 1000);
    response.json(
        {
            'devices': [
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

app.listen(8888); //to port on which the express server listen