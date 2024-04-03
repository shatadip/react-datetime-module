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

