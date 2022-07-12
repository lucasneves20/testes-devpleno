const sum = (a, b) => {
    return a + b
}

function OneHourNow() {
    const now = Date.now()
    const OneHourInMili = 1 * 60 *60 * 1000
    return now + OneHourInMili
}

module.exports = { sum, OneHourNow }