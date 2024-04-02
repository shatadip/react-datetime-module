// .----------------.  .----------------.  .----------------.  .----------------. 
// | .--------------. || .--------------. || .--------------. || .--------------. |
// | |  _______     | || |  ________    | || |  _________   | || | ____    ____ | |
// | | |_   __ \    | || | |_   ___ `.  | || | |  _   _  |  | || ||_   \  /   _|| |
// | |   | |__) |   | || |   | |   `. \ | || | |_/ | | \_|  | || |  |   \/   |  | |
// | |   |  __ /    | || |   | |    | | | || |     | |      | || |  | |\  /| |  | |
// | |  _| |  \ \_  | || |  _| |___.' / | || |    _| |_     | || | _| |_\/_| |_ | |
// | | |____| |___| | || | |________.'  | || |   |_____|    | || ||_____||_____|| |
// | |              | || |              | || |              | || |              | |
// | '--------------' || '--------------' || '--------------' || '--------------' |
//  '----------------'  '----------------'  '----------------'  '----------------' 


/**
 * There are 5 functions here, and you can use them in React, NextJS, NodeJS etc.:
 * 
 * 1. getCurrentTime()
 * 2. distanceToNow()
 * 3. convertToUnixTimestamp()
 * 4. convertFromUnixTimestamp()
 * 5. getCurrentTimezone()
 * 
 * I have pointed out how to use each of these below, and there's also a testIndex.js file in the same folder, which you can refer or run to test these functions.
 * 
 * Now I know you are lazy and don't want to do that, so here's how each of these functions work:
 * 
 * 1. getCurrentTime()
 * 
 * let myFormat = getCurrentTime("MONNAME DD, YYYY. hh:mm:ss a");
 * console.log(myFormat); //Example output: Mar 31, 2024. 06:56:01 pm
 * 
 * You can also get a 24hour format with HH instead of hh, like the following
 * 
 * let myFormat = getCurrentTime("MONNAME DD, YYYY. HH:mm:ss");
 * console.log(myFormat); //Example output: Mar 31, 2024. 18:56:01
 * 
 * 2. distanceToNow()
 * 
 * console.log(distanceToNow('Mar 26, 2034 17:55:51', { addSuffix: true, includeSeconds: true })); // Example output: about 9 years from now
 * console.log(distanceToNow('Mar 26, 2014 17:55:51', { addSuffix: true, includeSeconds: true })); // Example output: about 10 years ago
 * console.log(distanceToNow('Mar 31, 2024 18:55:51', { addSuffix: true, includeSeconds: true })); // Example output: 3 minutes ago
 * 
 * 3. convertToUnixTimestamp()
 * 
 * console.log(convertToUnixTimestamp()); // Example output: 1711891857 [No argument gives you the current timestamp]
 * console.log(convertToUnixTimestamp('12:07 pm, 25 Mar 2024')); // Output: 1711348620 [You can pass a string argument to convert a specific time to Unix timestamp]
 * 
 * 4. convertFromUnixTimestamp()
 * 
 * console.log(convertFromUnixTimestamp(1711461716, 'MONTHNAME DD, YYYY hh:mm:ss a')); // Output: March 26, 2024 07:31:56 pm [You can mention the output format]
 * console.log(convertFromUnixTimestamp(1670000000)); // Output: 12-02-22 10:23:20 pm
 * console.log(convertFromUnixTimestamp(1711348620, 'MONTHNAME DD, YYYY hh:mm:ss a')); // Output: March 25, 2024 12:07:00 pm
 * 
 * 5. getCurrentTimezone()
 * 
 * console.log(getCurrentTimezone()); // Example output: Asia/Calcutta (UTC+5.5)
 * 
 * Questions or bugs, please raise the issue here: https://github.com/shatadip/react-datetime-module/issues
 * 
 * Or connect with me on LinkedIn: https://www.linkedin.com/in/shatadip/
 * 
 * 
 */


/**
 * Returns the current time formatted according to the specified format.
 *
 * @param {string} [format='MM-DD-YY hh:mm:ss a'] - The format in which to return the time.
 * @returns {string} The current time formatted as a string.
 *
 * @example
 * // Returns the current time in the format 'MM-DD-YY hh:mm:ss a', which looks like 03-26-24 5:55:51 pm
 * // Use only YY for getting the last two digits of the year, e.g. 24 (for the year 2024)
 * getCurrentTime();
 * 
 * // Returns the current time in the format 'YYYY-MM-DD hh:mm:ss a', which looks like 2024-03-26 5:55:51 pm
 * // Use YYYY for getting all the four digits of the year, e.g. 2024
 * getCurrentTime('YYYY-MM-DD hh:mm:ss a');
 * 
 * // Returns the current time in this format, now which is: Mar 26, 2024. 5:55:51 pm
 * // Use MONNAME for getting the short name of the month, e.g. Mar
 * getCurrentTime("MONNAME DD, YYYY. hh:mm:ss a");
 * 
 * // Returns full name of the month, which looks like: March 26, 2024. 5:55:51 pm
 * // Use MONTHNAME for getting the full name of the month, e.g. March
 * getCurrentTime("MONTHNAME DD, YYYY. hh:mm:ss a");
 * 
 * // For getting the time in 24-hour format, use capital HH, that would return: March 26, 2024. 17:55:51
 * getCurrentTime("MONTHNAME DD, YYYY. HH:mm:ss");
 * 
 */

export function getCurrentTime(format = 'MM-DD-YY hh:mm:ss a') {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hour = hours % 12 || 12; // Convert to 12-hour format
    const hour24 = String(hours).padStart(2, '0'); // 24-hour format
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    const fullYear = String(date.getFullYear());

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[date.getMonth()];
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const shortMonthName = shortMonthNames[date.getMonth()];

    const formatOptions = {
        'YYYY': fullYear,
        'YY': year,
        'MM': month,
        'DD': day,
        'hh': String(hour).padStart(2, '0'),
        'HH': hour24, // 24-hour format
        'mm': minutes,
        'ss': seconds,
        'a': ampm,
        'MONTHNAME': monthName,
        'MONNAME': shortMonthName
    };

    let formattedTime = format;
    for (const option in formatOptions) {
        formattedTime = formattedTime.replace(new RegExp(option, 'g'), formatOptions[option]);
    }

    return formattedTime;
}


/**
 * Calculates the distance from the current time to the target time.
 *
 * @param {string|number|Date} targetTime - The target time to calculate the distance from.
 * @param {Object} [options={ includeSeconds: false, addSuffix: false }] - Options for the calculation.
 * @param {boolean} [options.includeSeconds=false] - Whether to include seconds in the calculation.
 * @param {boolean} [options.addSuffix=false] - Whether to add a suffix indicating the time is in the past or future.
 * @returns {string} The distance from the current time to the target time, formatted as a string.
 *
 * @example
 * // Returns 'about 1 hour ago'
 * distanceToNow(new Date(Date.now() - 3600000));
 * 
 * // Returns 'in the future'
 * distanceToNow(new Date(Date.now() + 3600000));
 * 
 * // If now is Mar 26, 2024 17:55:51
 * // Returns about 9 years from now
 * distanceToNow('Mar 26, 2024 17:55:51', { addSuffix: true, includeSeconds: true })
 * 
 * //If now is Mar 26, 2024 17:55:51
 * // Returns about 10 years ago
 * distanceToNow('Mar 26, 2014 17:55:51', { addSuffix: true, includeSeconds: true })
 */


export function distanceToNow(targetTime, options = { includeSeconds: false, addSuffix: false, addPrefix: false }) {
    const now = new Date();
    const targetTimeToCalculate = new Date(targetTime);
    const ago = options.addSuffix ? ' ago' : '';
    const diffInSeconds = Math.floor((now - targetTimeToCalculate) / 1000);
    const prefixAbout = options.addPrefix ? 'about ' : '';    
    const prefixLessThan = options.lessThan ? 'less than ' : '';

    // Check if the target time is in the future
    if (diffInSeconds < 0) {
        const futureDiffInSeconds = Math.abs(diffInSeconds);
        const fromNow = options.addSuffix ? ' from now' : '';
        if (options.includeSeconds) {
            if (futureDiffInSeconds < 5) return 'less than 5 seconds' + fromNow;
            if (futureDiffInSeconds < 10) return 'less than 10 seconds' + fromNow;
            if (futureDiffInSeconds < 20) return 'less than 20 seconds' + fromNow;
            if (futureDiffInSeconds < 40) return 'less than 30 seconds' + fromNow;
            if (futureDiffInSeconds < 60) return 'less than 1 minute' + fromNow;
            if (futureDiffInSeconds < 90) return '1 minute' + fromNow;
        }

        if (futureDiffInSeconds < 30) return 'less than a minute' + fromNow;
        if (futureDiffInSeconds < 60) return `${futureDiffInSeconds} seconds` + fromNow;
        if (futureDiffInSeconds < 90) return '1 minute' + fromNow;

        const diffInMinutes = Math.floor(futureDiffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInMonths = Math.floor(diffInDays / 30.44); // Approximate average month length
        const diffInYears = Math.floor(diffInDays / 365.25); // Approximate average year length

        if (diffInMinutes < 1) return '1 minute' + fromNow;
        if (diffInMinutes < 44) return `${diffInMinutes} minutes` + fromNow;
        if (diffInMinutes < 89) return 'about 1 hour' + fromNow;
        if (diffInHours < 24) {
            return `about ${diffInHours} hour${diffInHours === 1 ? '' : 's'}` + fromNow;
        }    
        if (diffInDays < 1) return '1 day' + fromNow;
        if (diffInDays < 29) return `${diffInDays} days` + fromNow;
        if (diffInDays < 44) return 'about 1 month' + fromNow;
        if (diffInDays < 59) return 'about 2 months' + fromNow;
        if (diffInMonths < 12) return `${diffInMonths} months` + fromNow;
        if (diffInMonths < 18) return 'about 1 year' + fromNow;
        if (diffInMonths < 24) return 'over 1 year' + fromNow;
        if (diffInYears < 2) return 'almost 2 years' + fromNow;
        return `about ${diffInYears} years` + fromNow;
    }

    const diffInMinutes = Math.floor(Math.abs(diffInSeconds) / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30.44); // Approximate average month length
    const diffInYears = Math.floor(diffInDays / 365.25); // Approximate average year length

    if (options.includeSeconds) {
        if (Math.abs(diffInSeconds) < 5) return 'less than 5 seconds' + ago;
        if (Math.abs(diffInSeconds) < 10) return 'less than 10 seconds' + ago;
        if (Math.abs(diffInSeconds) < 20) return 'less than 20 seconds' + ago;
        if (Math.abs(diffInSeconds) < 40) return 'half a minute' + ago;
        if (Math.abs(diffInSeconds) < 60) return 'less than a minute' + ago;
        if (Math.abs(diffInSeconds) < 90) return '1 minute' + ago;
    }

    if (Math.abs(diffInSeconds) < 30) return 'less than a minute' + ago;
    if (Math.abs(diffInMinutes) < 1) return '1 minute' + ago;
    if (Math.abs(diffInMinutes) < 44) return `${Math.abs(diffInMinutes)} minutes` + ago;
    if (Math.abs(diffInMinutes) < 89) return 'about 1 hour' + ago;
    if (Math.abs(diffInHours) < 24) {
        return `about ${Math.abs(diffInHours)} hour${Math.abs(diffInHours) === 1 ? '' : 's'}` + ago;
    }    
    if (Math.abs(diffInDays) < 1) return '1 day' + ago;
    if (Math.abs(diffInDays) < 29) return `${Math.abs(diffInDays)} days` + ago;
    if (Math.abs(diffInDays) < 44) return 'about 1 month' + ago;
    if (Math.abs(diffInDays) < 59) return 'about 2 months' + ago;
    if (Math.abs(diffInMonths) < 12) return `${Math.abs(diffInMonths)} months` + ago;
    if (Math.abs(diffInMonths) < 18) return 'about 1 year' + ago;
    if (Math.abs(diffInMonths) < 24) return 'over 1 year' + ago;
    if (Math.abs(diffInYears) < 2) return 'almost 2 years' + ago;
    return `about ${Math.abs(diffInYears)} years` + ago;
}

/**
 * Converts a given time to a Unix timestamp.
 *
 * If no time is provided or if the string 'now' is passed, the function returns the current Unix timestamp.
 * Otherwise, it converts the provided time to a Unix timestamp.
 *
 * @param {string|undefined} targetTime - The time to convert. If undefined or 'now', the current time is used.
 * @returns {number} The Unix timestamp of the target time.
 *
 * @example
 * // Returns the current Unix timestamp
 * convertToUnixTimestamp();
 *
 * // Returns the Unix timestamp for a specific date and time
 * convertToUnixTimestamp('2023-04-01T12:00:00Z');
 *
 * @throws {TypeError} If targetTime is not a string or 'now'.
 */



export function convertToUnixTimestamp(targetTime) {
    // Check if targetTime is not passed or is 'now'
    if (targetTime === undefined || targetTime.toLowerCase() === 'now') {
        // Return the current timestamp
        return Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
    }

    // Convert the targetTime to a Unix timestamp
    const unixTimestamp = new Date(targetTime).getTime() / 1000; // Convert milliseconds to seconds
    return unixTimestamp;
}


/**
 * Converts a Unix timestamp to a formatted date string.
 *
 * This function takes a Unix timestamp and an optional format string, and returns a string representing the date and time in the specified format.
 * The format string can include placeholders for various date and time components, such as year, month, day, hour, minute, second, and AM/PM indicator.
 *
 * @param {number} timestamp - The Unix timestamp to convert.
 * @param {string} [format='MM-DD-YY hh:mm:ss a'] - The format string. Defaults to 'MM-DD-YY hh:mm:ss a'.
 * @param {boolean} [showTimeZone=false] - Whether to include the timezone information. Defaults to false.
 * @returns {string} The formatted date string.
 *
 * @example
 * // Returns '12-02-22 10:23:20 pm'
 * convertFromUnixTimestamp(1670000000);
 *
 * // Returns 'March 26, 2024 07:31:56 pm'
 * convertFromUnixTimestamp(1711461716, 'MONTHNAME DD, YYYY hh:mm:ss a')
 *
 * @throws {TypeError} If timestamp is not a number or format is not a string.
 */
export function convertFromUnixTimestamp(timestamp, format = 'MM-DD-YY hh:mm:ss a', options={showTimeZone:false}) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hour = hours % 12 || 12; // Convert to 12-hour format
    const hour24 = String(hours).padStart(2, '0'); // 24-hour format
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    const fullYear = String(date.getFullYear());

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[date.getMonth()];
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const shortMonthName = shortMonthNames[date.getMonth()];

    const formatOptions = {
        'YYYY': fullYear,
        'YY': year,
        'MM': month,
        'DD': day,
        'hh': String(hour).padStart(2, '0'),
        'HH': hour24,
        'mm': minutes,
        'ss': seconds,
        'a': ampm,
        'MONTHNAME': monthName,
        'MONNAME': shortMonthName
    };

    let formattedTime = format;
    for (const option in formatOptions) {
        formattedTime = formattedTime.replace(new RegExp(option, 'g'), formatOptions[option]);
    }

    if (options.showTimeZone==true) {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        formattedTime += ` ${timeZone}`;
    }

    return formattedTime;
}


/**
 * Get the current timezone of the user.
 * @returns {string} The current timezone.
 * @example
 * console.log(getCurrentTimezone()); // Example output: "Asia/Calcutta (UTC+5.5)"
 */


export function getCurrentTimezone() {
    // Get the current date
    const now = new Date();

    // Get the timezone offset in minutes
    const offsetInMinutes = now.getTimezoneOffset();

    // Get the timezone name
    const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Combine the offset and name to get the full timezone string
    const fullTimezone = `${timezoneName} (UTC${offsetInMinutes >= 0 ? '-' : '+'}${Math.abs(offsetInMinutes / 60)})`;

    return fullTimezone;
}
