/* Problem 1
-------------------
 The mindGame() function takes a positive number as input. If input is a valid & positive number then the function perform sequence of math operation
 --> 1st multiplies by 3
 --> 2nd adds 10
 --> 3rd devides by 2
 --> 4th substracts 5 
 Finally returns the result as output
 
 Error case: This function will throw an error if the parameter is not a number and number is negative
 */

function mindGame(positiveNum) {
  if (typeof positiveNum === 'number') {
    if (positiveNum < 0) {
      return 'Your input is negative number. Please input a positive number.';
    } else {
      const result = (positiveNum * 3 + 10) / 2 - 5;
      return result;
    }
  }
  return 'Error! Please input a valid data. The function requires   a positive number';
}

/* Problem 2
-------------------
 The evenOdd() function takes a string as input. If input is a valid string & not empty then the function calculate if the provided string total character is 'even' or 'odd';
 It returns 'even' if total character is even number
 returns 'odd' if total character is odd number
 
 Error case: This function will throw an error if the parameter is not a string & a emptry string
 */
function evenOdd(str) {
  if (typeof str != 'string' || !str) {
    return 'Please input a valid data. The function requires a string';
  } else {
    const character = str.length;
    if (character % 2 == 0) {
      return 'even';
    }
    return 'odd';
  }
}

/* Problem 3: Is Less or Greater than seven
-------------------------------------------
 The isLGSeven() function takes a number as input. If the input is a valid number then the function finds
 the difference between given input and 7. If the difference is less than 7 then it will return the 'difference' otherwise it will return a number (double of input)
 */
function isLGSeven(num) {
  if (typeof num === 'number') {
    const difference = num - 7;
    if (difference < 7) {
      return difference;
    } else return num * 2;
  }
  return 'Please input a valid number';
}

/* Problem 4: Finding Bad Data
-------------------------------
 The findingBadData() function takes an array as input. If given input is array and have valid data (number)
 it will find if there is any bad data which is (negative number). It will return total numbers of bad data in input.
 */

function findingBadData(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return 'Your array is empty. Function requires numbers of array to run';
    } else {
      let badDataCount = 0;
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof element !== 'number') {
          return 'Please provide only array of numbers as input';
        } else if (element < 0) {
          badDataCount++;
        }
      }
      return badDataCount;
    }
  }
  return 'Please provide a valid array';
}

/* Problem 5: Convert your gems into diamond
---------------------------------------------
 Function gemsToDiamond() will take 3 parameter as input. To convert the gems to diamond it will multiply each value by 21, 32, 43 sequentially and stores the value as totalDiamond. If totalDiamond value is greater than 2000 it will substract 2000 from totalDiamond and return it. Otherwise it will retrun the totalDiamond 
 */

function gemsToDiamond(gem1, gem2, gem3) {
  if (arguments.length < 3) {
    return 'You have to provide all 3 friend gems amount as parameter';
  } else if (
    typeof gem1 === 'number' &&
    typeof gem2 === 'number' &&
    typeof gem3 === 'number'
  ) {
    const friendOneDiamond = gem1 * 21;
    const friendTwoDiamond = gem2 * 32;
    const friendThreeDiamond = gem3 * 43;
    let totalDiamond = friendOneDiamond + friendTwoDiamond + friendThreeDiamond;
    if (totalDiamond > 1000 * 2) {
      totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
  }
  return 'Please provide amount of gems as number';
}
