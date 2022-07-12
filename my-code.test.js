const { sum, OneHourNow } = require('./my-code')

describe('math functions', () => {
    it('sums 2 mumbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})


describe('time functions', () => {
    it('verify the hours in miliseconds', () => {
        const realDate = Date.now()
        global.Date.now = () => 0
        expect(OneHourNow()).toBe(3600000)
        global.Date.now = () => realDate
    })
})