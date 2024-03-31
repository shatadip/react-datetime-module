import { getCurrentTime, distanceToNow, convertToUnixTimestamp, convertFromUnixTimestamp, getCurrentTimezone } from './index.js';


// console.log(getCurrentTimezone()); // Example output: Asia/Calcutta (UTC+5.5)

let myFormat = getCurrentTime("MONNAME DD, YY. hh:mm:ss a");
console.log(myFormat); //Example output: Mar 31, 24. 06:56:01 pm
// console.log(convertToUnixTimestamp('5:51:55 pm, 26 Mar 2024'));

// console.log((convertFromUnixTimestamp(1711455715, 'MM-DD-YY HH:mm:ss a'))); // Example output: 03-25-24 12:00:00

// console.log(distanceToNow('Mar 26, 2034 17:55:51', { addSuffix: true, includeSeconds: true })); // Example output: about 9 years from now
// console.log(distanceToNow('Mar 26, 2014 17:55:51', { addSuffix: true, includeSeconds: true })); // Example output: about 10 years ago
// console.log(distanceToNow('Mar 31, 2024 18:55:51', { addSuffix: true, includeSeconds: true })); // Example output: 3 minutes ago
// console.log(distanceToNow('Mar 26, 2224 18:55:51', { addSuffix: false, includeSeconds: true }));
// console.log(convertToUnixTimestamp()); // Example output: 1711891857
// console.log(convertToUnixTimestamp('12:07 pm, 25 Mar 2024')); // Output: 1711348620
// console.log(convertFromUnixTimestamp(1711461716, 'MONTHNAME DD, YYYY hh:mm:ss a')); // Output: March 26, 2024 07:31:56 pm
// console.log(convertFromUnixTimestamp(1670000000)); // Output: 12-02-22 10:23:20 pm
// console.log(convertToUnixTimestamp('12:07 pm, 25 Mar 2024'));
// console.log(convertFromUnixTimestamp(1711348620, 'MONTHNAME DD, YYYY hh:mm:ss a')); // Output: March 25, 2024 12:07:00 pm

// console.log(distanceToNow(new Date(Date.now() - 3600000)));
// console.log(distanceToNow(new Date(Date.now() - 3600000), {addSuffix:true}));


// console.log(getCurrentTime('hh:mm a, DD MONTHNAME YYYY')); // Example output: 03:15 pm, 22 March 2024

// console.log(getCurrentTime('hh:mm a, DD MONTHNAME YYYY')); // Example output: 12:07 pm, 25 March 2024
// console.log(getCurrentTime('hh:mm a, DD MONNAME YYYY')); // Example output: 12:07 pm, 25 Mar 2024

// console.log(getCurrentTime()); // Example output: 03-22-24 03:15:45 pm
// console.log(getCurrentTime('MM/DD/YYYY hh:mm:ss a')); // Example output: 03/22/2024 03:15:45 pm
// console.log(getCurrentTime('YYYY-MM-DD')); // Example output: 2024-03-22
// console.log(getCurrentTime('hh:mm a, DD MONTHNAME YYYY')); // Example output: 03:15 pm, 22 March 2024