function stringChop(str, size) {
  // Check if the input string is null or empty
  if (str === null || str === '') {
    return [];
  }

  // Initialize an array to hold the chunks
  const result = [];

  // Loop through the string and slice it into chunks
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
