//High frequency tone generator
//Made by ifwi4 with inspiration from TheProgrammer's C++ buzzer script

const dialog = require("dialog");
const audio = require("audio");
var ms = 5000;

function selector() {
 const options = ["Freq Gen", "Custom Hz", "Set ms", "Main Menu"];
 const selected = dialog.choice(options);

 if (selected == "Freq Gen") {
  selector2();
 } else if (selected == "Custom Hz") {
  customHz = keyboard();
  customHz = parse_int(customHz);
  audio.tone(customHz, ms);
  selector();
 } else if (selected == "Set ms") {
  ms = keyboard("5000");
  ms = parse_int(ms);
  selector();
 }
}

function selector2() {
 const options2 = ["16400 Hz", "11600 Hz", "9000 Hz", "3070 Hz", "Back"];
 const selected2 = dialog.choice(options2);

 if (selected2 == "16400 Hz") {
  audio.tone(16400, ms);
  selector2();
 } else if (selected2 == "11600 Hz") {
  audio.tone(11600, ms);
  selector2();
 } else if (selected2 == "9000 Hz") {
  audio.tone(9000, ms);
  selector2();
 } else if (selected2 == "3070 Hz") {
  audio.tone(3070, ms);
  selector2();
 } else if (selected2 == "Back") {
  selector();
 }
}

selector();
