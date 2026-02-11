export default function caeserCipher(str, shift) {
  let returnValue = "";
  for (let i = 0; i < str.length; i++) {
    const asciiCode = str.charCodeAt(i);
    // check if string is one of the letter values
    if (
      (asciiCode >= 97 && asciiCode <= 122) ||
      (asciiCode >= 65 && asciiCode <= 90)
    ) {
      // capitals need to be shifted at 65 instead of 97
      let shiftedAsciiLetter;
      if (asciiCode >= 97 && asciiCode <= 122) {
        // lowercase
        shiftedAsciiLetter = ((asciiCode - 97 + shift) % 26) + 97;
      } else {
        //capital
        shiftedAsciiLetter = ((asciiCode - 65 + shift) % 26) + 65;
      }

      const shiftedLetter = String.fromCharCode(shiftedAsciiLetter);
      returnValue += shiftedLetter;
    } else {
      returnValue += str[i];
    }
  }
  return returnValue;
}
