//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = string => {
  if (string.length === 0) return string;

  let result = "";
  const length = string.length - 1;
  const stringArray = string.split("");

  for (let i = length; i >= 0; i--) {
    result += stringArray[i];
  }

  return result;
};