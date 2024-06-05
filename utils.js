// utils.js

// Function to format dates
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  // Function to calculate the sum of an array
  export function calculateSum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }  