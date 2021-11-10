const fs = require('fs');

exports.createError = (message, status) => {
    let error = new Error(message);
    error.status = status;
    return error;
}

exports.readCSV = path => {
    let data = fs.readFileSync(path, 'utf-8')
    data = data.split(/\r\n|\n/);

    let cols = []
    let clean_data = []
    for(let col of data[0].split(",")){
        col = col.replaceAll('"', "").toLowerCase()
        cols.push(col)
    }

    for(let i = 1; i < data.length; i++){
        let obj = {};
        //splitting by commas outside double quotes
        data[i] = data[i].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
        for(let j = 0; j < data[i].length; j++){
            let key = cols[j];
            let val = data[i][j].replaceAll('"', "");
            obj[key] = val
        }
        clean_data.push(obj);
    }
    return clean_data;
}

exports.expandLanguage = (obj, languages) => {
    let map = {};
    let names = obj.languages
    obj.languages = []
    for(let i = 0; i < languages.length; i++){
        let key = languages[i].code 
        map[key] = i 
    }

    for(let name of names.split(",")){
        let nl = {}
        let o = map[name] !== undefined ? languages[map[name]]: {code: "", name: ""}
        nl.code = o.code
        nl.name = o.name
        obj.languages.push(nl);
    }
    obj.languages = JSON.stringify(obj.languages)
}