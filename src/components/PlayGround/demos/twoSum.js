
export default function twoSum(input) {
  try {
    const match = input.match(/nums=\[(.*?)\],\s*target=(\d+)/);
    if (!match) return "⚠️ Please enter input like: nums=[2,7,11,15], target=9";

    const nums = match[1].split(",").map((n) => parseInt(n.trim(), 10));
    const target = parseInt(match[2], 10);
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return `✅ Found indices: [${map.get(complement)}, ${i}]`;
      }
      map.set(nums[i], i);
    }

    return "❌ No two numbers add up to the target.";
  } catch {
    return "⚠️ Invalid input format.";
  }
}

export const description = `
Enter numbers separated by commas, followed by a semicolon and the target sum.
Example: "2,7,11,15;9"
Click "Run" to find the indices that add up to the target.
`;