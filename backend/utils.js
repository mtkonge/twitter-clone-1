
const INT32_MAX = 2147483647;

const randomIntInclusive = (min, max) => {
    const ceiledMin = Math.ceil(min);
    const flooredMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntId = () => randomIntInclusive(0, 2147483647);

module.exports = {
    INT32_MAX,
    randomIntInclusive,
    randomIntId
};
