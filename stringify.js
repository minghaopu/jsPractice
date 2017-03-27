var input = {"a": true,
             "b": "text",
             "c": {
               "d": {
                 "e": "text",
                 "x": 1,
                 "y": true
               }
             },
             "f": ["a", 1, true, function() {}],
             "g": new Date(),
             "h": function() {return 1;}
            };
// var input = function() {};
function stringify(input) {
    if (typeof input === "string") return '"' + input + '"';
    else if (input === undefined || input === null) return "" + input;
    else if (Array.isArray(input)) {
        let res = '[';
        for (let i = 0; i < input.length; ++i) {
            if (typeof input[i] === "function") res += "null";
            else res += stringify(input[i]);
            if (i !== input.length - 1) res += ',';
        }
        res += ']';
        return res;
    } else if (typeof input === "function") {
        return;
    }else if (Object.getPrototypeOf(input) === Object.prototype) {
        let res = '{';
        let keys = Object.keys(input);
        for (let i = 0; i < keys.length; ++i) {
            if (typeof input[keys[i]] === "function") continue;
            res += '"' + keys[i] + '":';
            res += stringify(input[keys[i]]);
            if (i !== keys.length - 1) res += ',';
        }
        if (res[res.length - 1] === ',') res = res.substr(0, res.length - 1);
        res += '}';
        return res;
    } else if (input instanceof Date) {
        return '"' + input.toISOString() + '"';
    }
    else return input;
}

console.log(JSON.stringify(input));
console.log(stringify(input));