import ssri from 'ssri'

const shaValue = process.argv[2]

const integrity = ssri.parse(shaValue)
const hex = integrity.hexDigest()

console.log("integrity: ", integrity)
console.log("hex: ", hex)
