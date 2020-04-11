const response = require('./dummy.js');

function formatResponse(response) {

    let time = [];
    response.forEach(element => time.push(element.minute));
  
    let values = [];
    response.forEach(element => values.push(element.open));

    let json = time.map((x, i) => ({x, y: values[i]}));
  
    return json;
  }

let json = formatResponse(response)

function limitTicksBad(data) {
    return (data.length > 15) ? data.filter((item, idx) => 
        {
            if ((idx % Math.floor(data.length / 15)) === 0) {
                return item.x
        }
        }).map(item => (item.x)) : data.map(item => (item.x))
}

function limitTicksGood(arr) {
    let ticks = []
    arr.forEach(obj => {
        let minute = obj.x.slice(-2);
        if (minute % 15 === 0){
            ticks.push(obj.x);
        }
    })
    return ticks.reverse();
}

let badTicks = limitTicksBad(json);
console.log(`Bad Ticks: ${badTicks}`);

let goodTicks = limitTicksGood(json);
console.log(`Good Ticks: ${goodTicks}`);