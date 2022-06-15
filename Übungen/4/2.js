"use strict";

document.writeln("Hallo Web-Apps <br>");

for (let i = 1; i <= 10; i++) {
    document.writeln(i+"<br>");
}
let j = 1;
while (j <= 10) {
    document.writeln(j+"<br>");
    j++;
}
let k = 1;
do {
    if ((k%2) == 0) {
        document.writeln(k+" (gerade)<br>");
    } else {
        document.writeln(k+" (ungerade)<br>");
    }
    k++;
} while (k <= 10);

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.writeln(day+"<br>");