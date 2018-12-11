// const convertTime = (timems) => {
//   const convert = {
//     hour: 3600000,
//     minute: 60000
//   }
//   let hours = ''
//   let minutes = ''
//   if (timems >= convert.hour) {
//     hours = Math.floor(timems/convert.hour) > 1 ? `${Math.floor(timems/convert.hour)} hours` : `${Math.floor(timems/convert.hour)} hour`
//     minutes = Math.floor((timems % convert.hour) / convert.minute) > 0 ? (Math.floor((timems % convert.hour) / convert.minute) > 1 ? `${(Math.floor((timems % convert.hour) / convert.minute))} minutes` : `${(Math.floor((timems % convert.hour) / convert.minute))} minute`) : ''
//     return minutes === '' ? `${hours}` : `${hours}, ${minutes}`
//   } else if (timems >= convert.minute) {
//     minutes = Math.floor(timems / convert.minute) > 1 ? `${Math.floor(timems / convert.minute)} minutes` : `${Math.floor(timems / convert.minute)} minute`
//     return `${minutes}`
//   }
// }

const convertTime = (timems) => {
  const convert = {
    minute: 60000
  }
  let minutes = ''
if (timems >= convert.minute) {
    minutes = Math.floor(timems / convert.minute) > 1 ? `${Math.floor(timems / convert.minute)} minutes` : `${Math.floor(timems / convert.minute)} minute`
    return `${minutes}`
  }
}

export default convertTime;
// module.exports = { convertTime }