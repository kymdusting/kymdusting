/* Author: 

*/
 
// ***
// Scrolling background
// ***

// height of background image in pixels
var backgroundheight = 500;

var offset = 1;

function scrollbackground() {
	// decrease the offset by 1, or if its less than 1 increase it by
	// the background height minus 1
	offset = (offset < 1) ? offset + (backgroundheight - 1) : offset + 1;
	// apply the background position
	$('body').css("background-position", "50% " + offset + "px");
	// call self to continue animation
	setTimeout(function() {
		scrollbackground();
		}, 100
	);
}






















