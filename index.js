function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hour = hours % 12 || 12; // Convert to 12-hour format
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

    return `${month}-${day}-${year} ${hour}:${minutes}:${seconds} ${ampm}`;
}

console.log(getCurrentTime()); // Example output: 12-03-23 03:15:45 pm
