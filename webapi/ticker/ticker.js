import { getData } from './fetch';
import { formatData } from './data';

app.get('/', function (req, res, next) {

    let json = getData(req.body.ticker);
    let data = formatData(json);

    res.status(200).send(data);
    return next();
});