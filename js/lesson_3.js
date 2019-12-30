
// global variable represent previous onclick element id
var g_oldx, g_oldy, g_oldxy;

// registry onclick listener to all  necessary div
for ( var i = 1; i <= 8; i ++ )
{
	document.getElementById("btn1" + i).addEventListener("click", onclickx, false);
}

for ( var i = 1; i <= 5;  i ++ )
{
	document.getElementById("btn2" + i).addEventListener("click", onclicky, false);
}

document.getElementById("btnreset").addEventListener("click", onclickreset, false);


// onclickreset callback
function onclickreset() {
	
	// clean the previous image if there is any
	if ( g_oldxy != null )
	{
		document.getElementById( g_oldxy ).src = "./image/blank.png";
		g_oldxy = null;
	}
	
	// clean the previous x button border if any
	if ( g_oldx != null )
	{
		document.getElementById( g_oldx ).style.backgroundColor = "#F5B041";
		g_oldx = null;
	}
	
	// clean the previous y button border if any
	if ( g_oldy != null )
	{
		document.getElementById( g_oldy ).style.backgroundColor = "#E74C3C";
		g_oldy = null;
	}
}

// onclickx callback 
function onclickx() {
	
	var x, y;
	
	// clean the previous image if there is any
	if ( g_oldxy != null )
	{
		document.getElementById( g_oldxy ).src = "./image/blank.png";
		g_oldxy = null;
	}
	
	// clean the previous x button border if any
	if ( g_oldx != null )
	{
		document.getElementById( g_oldx ).style.backgroundColor = "#F5B041";
	}
	
	// add background style	
	document.getElementById( this.id ).style.backgroundColor = "#AED6F1";
	g_oldx = this.id;
	
	if ( g_oldy == null )
	{
		return;
	}
	
	x = parseInt(g_oldx[g_oldx.length - 1]) + 1;
	y = parseInt(g_oldy[g_oldy.length - 1]) + 1;
	g_oldxy = "img" + y + x;
	
	document.getElementById( g_oldxy ).src = "./image/heli01.png";
}

// onclicky callback 
function onclicky() {
	
	// clean the previous image if there is any
	if ( g_oldxy != null )
	{
		document.getElementById( g_oldxy ).src = "./image/blank.png";
		g_oldxy = null;
	}
	
	// clean the previous x button border if any
	if ( g_oldy != null )
	{
		document.getElementById( g_oldy ).style.backgroundColor = "#E74C3C";
	}
	
	// add background style	
	document.getElementById( this.id ).style.backgroundColor = "#AED6F1";
	g_oldy = this.id;
	
	if ( g_oldx == null )
	{
		return;
	}
	
	x = parseInt(g_oldx[g_oldx.length - 1]) + 1;
	y = parseInt(g_oldy[g_oldy.length - 1]) + 1;
	g_oldxy = "img" + y + x;
	
	document.getElementById( g_oldxy ).src = "./image/heli01.png";	
}
