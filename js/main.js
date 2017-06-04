$(document).ready(function(){
	let d = new Date();
	let n = d.getHours();
  const picFrame = document.getElementById("picFrame")

	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  picFrame.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  picFrame.className = "sunset";
	else
	  // Else use ‘day’ theme
	  picFrame.className = "day";
});
