const mapArrToStr = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(String);
}

//console.log(mapArrToStr([1, 2 ,3]))
module.exports = mapArrToStr; 