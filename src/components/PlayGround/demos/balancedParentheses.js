export default function balancedParentheses(input) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (let char of input) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if ([")", "]", "}"].includes(char)) {
      if (stack.pop() !== map[char]) {
        return "❌ Unbalanced parentheses.";
      }
    }
  }

  return stack.length === 0
    ? "✅ Parentheses are balanced!"
    : "❌ Unbalanced parentheses.";
}

export const description = `
Enter a string with parentheses and click "Run" to check if they are balanced.
Click "Reset" to clear the input.
`;