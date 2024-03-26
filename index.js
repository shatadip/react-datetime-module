/**
 * Returns the current time formatted according to the specified format.
 *
 * @param {string} [format='MM-DD-YY hh:mm:ss a'] - The format in which to return the time.
 * @returns {string} The current time formatted as a string.
 *
 * @example
 * // Returns the current time in the format 'MM-DD-YY hh:mm:ss a'
 * getCurrentTime();
 * // Returns the current time in the format 'YYYY-MM-DD hh:mm:ss a'
 * getCurrentTime('YYYY-MM-DD hh:mm:ss a');
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
 * distanceToNow('Mar 26, 2034 17:55:51', { addSuffix: true, includeSeconds: true })
 * 
 * //If now is Mar 26, 2024 17:55:51
 * // Returns about 10 years ago
 * distanceToNow('Mar 26, 2014 17:55:51', { addSuffix: true, includeSeconds: true })
 */


export function distanceToNow(targetTime, options = { includeSeconds: false, addSuffix: false }) {
    const now = new Date();
    const targetTimeToCalculate = new Date(targetTime);
    const ago = options.addSuffix ? ' ago' : '';
    const diffInSeconds = Math.floor((now - targetTimeToCalculate) / 1000);

    // Check if the target time is in the future
    if (diffInSeconds < 0) {
        const futureDiffInSeconds = Math.abs(diffInSeconds);
        const fromNow = options.addSuffix ? ' from now' : '';
        if (options.includeSeconds) {
            if (futureDiffInSeconds < 5) return 'less than 5 seconds' + fromNow;
            if (futureDiffInSeconds < 10) return 'less than 10 seconds' + fromNow;
            if (futureDiffInSeconds < 20) return 'less than 20 seconds' + fromNow;
            if (futureDiffInSeconds < 40) return 'half a minute' + fromNow;
            if (futureDiffInSeconds < 60) return 'less than a minute' + fromNow;
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


export function convertFromUnixTimestamp(timestamp, format = 'MM-DD-YY hh:mm:ss a') {
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

    return formattedTime;
}

