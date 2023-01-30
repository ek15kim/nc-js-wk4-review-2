
const deepKeys = (obj, array) => {
    let result = array || []
    for (let key in obj) {
        result.push(key);
        if (typeof obj[key] === "object") deepKeys(obj[key], result)
    }
    return result;
};

const deepRoute = (array, string) => {
    let route = ""
    array.forEach((element, index) => {
        if (element === string) route = index.toString();
        if (Array.isArray(element)) {
            deepRoute(element, string)
        }
    }
    )
    return route;
};


module.exports = { deepKeys, deepRoute };
