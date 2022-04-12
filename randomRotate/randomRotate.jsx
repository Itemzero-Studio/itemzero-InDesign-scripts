/* ---
 RANDOM ROTATE
 version 1.1
 ---
 InDesign script that randomly rotates objects, within a given angle.
 ---
 Script by Itemzero.com
 --- */

var myName = myInput ();
// rest of the script
function myInput () {
  var myWindow = new Window ("dialog", "randomRotation");

  var myInputGroup = myWindow.add ("group");
    myInputGroup.add ("statictext", undefined, "Rotation Max:");

  var myText = myInputGroup.add ("edittext", undefined, "0");
    myText.characters = 20;
    myText.active = true;

  var myButtonGroup = myWindow.add ("group");
    myButtonGroup.alignment = "right";
    myButtonGroup.add ("button", undefined, "OK");
    myButtonGroup.add ("button", undefined, "Cancel");

  if (myWindow.show () == 1) {
    var i;
    for (i = 0; i < app.selection.length; i++) {
      var myObj = app.selection[i];
      myObj.rotationAngle = myObj.rotationAngle + (Math.random() * myText.text) - (myText.text / 2);
    }
  } else {
    exit ();
  }
}
