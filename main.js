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


// ----------------------------------------------------------
// --- Challenge 3 ------------------------------------------
// ----------------------------------------------------------


// ----------------------------------------------------------
// --- Challenge 4 ------------------------------------------
// ----------------------------------------------------------


// ----------------------------------------------------------
// --- Challenge 5 ------------------------------------------
// ----------------------------------------------------------
