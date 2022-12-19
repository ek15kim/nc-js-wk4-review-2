
const deepKeys = (obj, array) => {
    let result = array || []
    for (let key in obj) {
        result.push(key);
        if (typeof obj[key] === "object") deepKeys(obj[key], result)
    }
    return result;
};

const deeplyEquals = () => { };


module.exports = { deepKeys };
