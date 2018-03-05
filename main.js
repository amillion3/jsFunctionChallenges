console.log("Hello");

function writeToDom(domString, domId) {
  var myDiv = document.getElementById(domId);
  myDiv.innerHTML += domString;
}
// writeToDom("test","challenge-1");

// ----------------------------------------------------------
// --- Challenge 1 ------------------------------------------
// ----------------------------------------------------------
function challenge1 (yearBirth, yearCount) {
  if (yearCount < yearBirth) {
    var bornInYears = notBornYet(yearBirth, yearCount);
  }
  else if (yearCount === yearBirth) {
    writeToDom("<h3>Challenge 1</h3>" + "<p>You were born this very year!</p>", "challenge-1");
  }
  else {
    var ageInYears = alreadyBorn(yearBirth, yearCount);
  }
}

function notBornYet (a, b) {  //Person not born yet
  writeToDom("<h3>Challenge 1</h3>" + "<p>You will be born in " + (a - b) + " year(s).</p>",
            "challenge-1");
}
function alreadyBorn (c, d) {  //Person already born
  writeToDom("<h3>Challenge 1</h3>" + "<p>You are " + (d - c) + " year(s) old.</p>",
            "challenge-1");
}

challenge1(2000, 2010); // You are 10 years old.
// challenge1(2000, 1995); // You will be born in 5 years.
// challenge1(2000, 2000); // You were born this very year!

// ----------------------------------------------------------
// --- Challenge 2 ------------------------------------------
// ----------------------------------------------------------
function challenge2 (input) {
  var resultsArray = [];
  resultsArray.push(isPrime(input));
  resultsArray.push(isEven(input));
  resultsArray.push(multipleOfTen(input));
  var stringOutput = "<h3>Challenge 2</h3>" + "<p>" + resultsArray + "</p>";
  writeToDom(stringOutput, "challenge-2");
}

function isPrime (e) {
  var check = 0;
  var primeNumberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  for (var i = 0; i < primeNumberArray.length; i++) {
    if (e === primeNumberArray[i]) {
      check = 1;
    }
  }
  if (check === 1) {
    return true;
  }
  else {
    return false;
  }
}

function isEven (f) {
  if (f % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function multipleOfTen (g) {
  if (g % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
}
challenge2(7)  // ==> [true,  false, false]
// challenge2(10) // ==> [false, true,  true]
// ----------------------------------------------------------
// --- Challenge 3 ------------------------------------------
// ----------------------------------------------------------


// ----------------------------------------------------------
// --- Challenge 4 ------------------------------------------
// ----------------------------------------------------------


// ----------------------------------------------------------
// --- Challenge 5 ------------------------------------------
// ----------------------------------------------------------
