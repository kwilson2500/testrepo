// race day code academy code

let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegister = true;
var runnerAge = 19;
if (earlyRegister && runnerAge > 18) {
  raceNumber = raceNumber + 1000;
} else if (runnerAge < 18) {
  console.log(`Number ${raceNumber} you will race at 12:30pm.`)
} else {
  console.log('Please see registration desk.')
}
if (earlyRegister && runnerAge > 18) {
  console.log(`Number ${raceNumber} you will race at 9:30am.`)
} else if (!earlyRegister && runnerAge > 18) {
  console.log(`Number ${raceNumber} you will race at 11:00am.`)
} 
