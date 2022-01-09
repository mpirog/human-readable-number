

const getSingleNumber = number =>  [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
][Number(number)]

const getStringNumber = number => {
    if (number < 20) {
        return getSingleNumber(number)
    }

    return [
        ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][number[0]],
        getSingleNumber(number[1])
    ].filter(numStr => numStr !== '').join(' ')
}

module.exports = function toReadable (number) {
    if (!number) {
        return  'zero'
    }

    let result = [];

    const stringNum = number.toString()

    const length = stringNum.length

    const hundred = stringNum.substring(0, length - 2)

    if (hundred !== '') {
        result.push(getStringNumber((hundred)))
        result.push('hundred')
    }

    result.push(getStringNumber((stringNum.substring(length - 2))))

    return result.filter(numStr => numStr !== '').join(' ')
}
