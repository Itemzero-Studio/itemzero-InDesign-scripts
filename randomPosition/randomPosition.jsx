/* ---
 RANDOM POSITION
 version 1.1
 ---
 InDesign script positions objects randomly, within an input range.
 ---
 Script by Itemzero.com
 --- */

var myName = myInput ();
// rest of the script
function myInput () {
  var myWindow = new Window ("dialog", "randomPosition");

  var myInputGroup = myWindow.add ("group");
    myInputGroup.add ("statictext", undefined, "X Max:");

  var myTextX = myInputGroup.add ("edittext", undefined, "0");
    myTextX.characters = 20;
    myTextX.active = true;
    
  var myInputGroup = myWindow.add ("group");
    myInputGroup.add ("statictext", undefined, "Y Max:");

  var myTextY = myInputGroup.add ("edittext", undefined, "0");
    myTextY.characters = 20;
    myTextY.active = true;

  var myButtonGroup = myWindow.add ("group");
    myButtonGroup.alignment = "right";
    myButtonGroup.add ("button", undefined, "OK");
    myButtonGroup.add ("button", undefined, "Cancel");

  if (myWindow.show () == 1) {
    var i;
    for (i = 0; i < app.selection.length; i++) {
      var myObj = app.selection[i];
      myObj.move(["", ""], [(Math.random() * myTextX.text) - (myTextX.text / 2) + "mm", (Math.random() * myTextY.text) - (myTextY.text / 2) + "mm"]);
    }
  } else {
    exit ();
  }
}
