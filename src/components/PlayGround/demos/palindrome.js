export default function palindrome (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return reversed === cleanStr ? "Yes, it's a palindrome!" : "No, not a palindrome.";
};

export const description = `
Enter a word or phrase and click "Run" to check if it’s a palindrome. 
Click "Reset" to clear the input and start again.
`;