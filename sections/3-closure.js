
const makeStringDivider = (strLength) => (string) => {
    const chunks = Math.ceil(string.length / strLength);
    const newArray = new Array(chunks);

    for (let i = 0, j = 0; i < chunks; ++i, j += strLength) {
        newArray[i] = string.substr(j, strLength);
    }

    return newArray;
}

const makeIteratorFunc = (array) => () => {

}

module.exports = { makeStringDivider, makeIteratorFunc };
