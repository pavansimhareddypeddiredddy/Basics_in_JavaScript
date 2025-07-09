// Create a new Date object that stores the current date and time
let todayDate = new Date();

// Display the full UTC date-time string (ISO format)
console.log(todayDate); // Example: 2025-07-09T04:58:11.065Z

// Convert the Date object to a readable string in the local timezone
console.log(todayDate.toString()); // Example: Wed Jul 09 2025 10:28:11 GMT+0530 (India Standard Time)

// Format the date and time in the default locale (based on system settings)
console.log(todayDate.toLocaleString()); // Example: 9/7/2025, 10:28:11 am

// Format the date and time specifically in Indian English locale (en-IN)
console.log(todayDate.toLocaleString('en-IN')); // Example: 9/7/2025, 10:28:11 am

// Get the month (0-indexed: Jan = 0, Feb = 1, ..., Dec = 11), so add 1 for correct month number
console.log(todayDate.getMonth() + 1); // Example: 7 (for July)

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
console.log(todayDate.getDay()); // Example: 3 (Wednesday)

// Get the current timestamp in milliseconds since Jan 1, 1970 (Unix Epoch)
console.log(Date.now()); // Example: 1752056891065

// Convert timestamp from milliseconds to seconds (useful for Unix timestamps)
console.log(Math.floor(Date.now() / 1000)); // Example: 1752056891


// Format the date using custom options
let formattedDate = todayDate.toLocaleString('default', {
  weekday: 'long',     // Full name of the day (e.g., Wednesday)
  year: 'numeric',     // 4-digit year (e.g., 2025)
  month: 'long',       // Full month name (e.g., July)
  day: 'numeric',      // Day of the month (e.g., 9)
  hour: '2-digit',     // 2-digit hour (e.g., 10)
  minute: '2-digit',   // 2-digit minutes (e.g., 30)
  second: '2-digit',   // 2-digit seconds (e.g., 45)
  hour12: true         // Use 12-hour format with AM/PM
});

console.log(formattedDate);

