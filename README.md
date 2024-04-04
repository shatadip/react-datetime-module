# React Datetime Module

## Introduction

This package provides a set of functions that can be used in various JavaScript environments such as React, Next.js, and Node.js for datetime-related operations.

## Installation
```bash
npm i react-datetime-module
```
## Import
```javascript
import { getCurrentTime, getCurrentTimezone, distanceToNow } from 'react-datetime-module'
let timeRightNow = getCurrentTime("MONNAME DD, YYYY. hh:mm:ss a");
{/*In JSX*/}
<h1>{getCurrentTime("HH:mm:ss")}</h1>{/*HH gives you 24-hr format*/}
```

## Functions

### 1. getCurrentTime()

Returns the current time formatted according to the specified format.

#### Usage:

```javascript
let myFormat = getCurrentTime("MONNAME DD, YYYY. hh:mm:ss a");
console.log(myFormat); // Example output: Mar 31, 2024. 06:56:01 pm
```

## Function Options for getCurrentTime()

The `getCurrentTime` function uses the following options to format the time string:

- `'YYYY'`: This option will be replaced with the full year (e.g., 2024).
- `'YY'`: This option will be replaced with the last two digits of the year (e.g., 24 for the year 2024).
- `'MM'`: This option will be replaced with the month (e.g., 03 for March).
- `'DD'`: This option will be replaced with the day of the month (e.g., 26).
- `'hh'`: This option will be replaced with the hour in 12-hour format (e.g., 05 for 5 am or 05 for 5 pm).
- `'HH'`: This option will be replaced with the hour in 24-hour format (e.g., 17 for 5 pm).
- `'mm'`: This option will be replaced with the minutes (e.g., 55).
- `'ss'`: This option will be replaced with the seconds (e.g., 51).
- `'a'`: This option will be replaced with 'am' or 'pm' depending on whether the hour is before or after noon.
- `'MONTHNAME'`: This option will be replaced with the full name of the month (e.g., March).
- `'MONNAME'`: This option will be replaced with the short name of the month (e.g., Mar).

These options allow you to customize the format of the time string that the `getCurrentTime` function returns. For example, if you use the format 'MONNAME DD, YYYY. hh:mm:ss a', the function will return a string like 'Mar 26, 2024. 05:55:51 am'.

### 2. distanceToNow()
Calculates the distance from the current time to the target time.

#### Usage:

```javascript
console.log(distanceToNow('Mar 26, 2034 17:55:51', { addSuffix: true, includeSeconds: true })); // Example output: about 9 years from now
```

### 3. convertToUnixTimestamp()
Converts a given time to a Unix timestamp.

#### Usage:
```javascript
console.log(convertToUnixTimestamp()); // Example output: 1711891857 [No argument gives you the current timestamp]
```
### 4. convertFromUnixTimestamp()
Converts a Unix timestamp to a formatted date string.

#### Usage:
```javascript
console.log(convertFromUnixTimestamp(1711461716, 'MONTHNAME DD, YYYY hh:mm:ss a')); // Output: March 26, 2024 07:31:56 pm [You can mention the output format]
```
### 5. getCurrentTimezone()
Get the current timezone of the user.

#### Usage:
```javascript
console.log(getCurrentTimezone()); // Example output: Asia/Calcutta (UTC+5.5)
```
### Testing
To test these functions, refer to the testIndex.js file in the same folder.

### Issues and Support
For questions, bug reports, or feature requests, please raise an issue on GitHub.

### Connect with the Developer
Connect with me on [LinkedIn](https://www.linkedin.com/in/shatadip/) for any further assistance or collaboration.

Feel free to use this in your project!

