// global variable represent previous onclick element id
var g_oldclickid;

// registry onclick listener to all  necessary div
var g_i, g_j;
for ( g_i = 2; g_i <= 6; g_i ++ )
{
	for ( g_j = 2; g_j <= 9; g_j ++ )
	{
		document.getElementById("img" + g_i + g_j).addEventListener("click", onclick, false);
	}
}

// onclick callback 
function onclick() {
	
	var i, j;
	
	// x-axis and y-axis in string and integer
	var x, y;
	
	// clean the previous image
	if (g_oldclickid != null)
	{
		document.getElementById( g_oldclickid ).src = "./image/blank.png";
		
		x = g_oldclickid[g_oldclickid.length - 1];
		y = g_oldclickid[g_oldclickid.length - 2];

		// change the background to the default
		for ( i = 1; i < x; i ++ )
		{
			document.getElementById( "area" + y + i ).style.backgroundColor = "#eee";
		}
		
		for ( i = 1; i < y; i ++ )
		{
			document.getElementById( "area" + i + x ).style.backgroundColor = "#eee";
		}
		
		document.getElementById( "area" + y + x ).style.backgroundColor = "#eee";
	}
	
	// draw new image
	g_oldclickid = this.id;
	document.getElementById( g_oldclickid ).src = "./image/airplane.png";	
	
	// get axis-x and axis-y and change the text/image background
	x = g_oldclickid[g_oldclickid.length - 1];
	y = g_oldclickid[g_oldclickid.length - 2];
	
	document.getElementById( "textx" ).innerHTML  = parseInt(x) - 1;
	document.getElementById( "texty" ).innerHTML  = parseInt(y) - 1;
	document.getElementById( "area" + y + x ).style.backgroundColor = "#AED6F1";
	
	// change the background of its row and column
	for ( i = 1; i < x; i ++ )
	{
		document.getElementById( "area" + y + i ).style.backgroundColor = "#E74C3C";
	}
	
	for ( i = 1; i < y; i ++ )
	{
		document.getElementById( "area" + i + x ).style.backgroundColor = "#F5B041";
	}
}