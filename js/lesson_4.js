var g_x1, g_timer1, g_timer1_alive = false;
var g_x2, g_timer2, g_timer2_alive = false;
var g_x2, g_timer3, g_timer3_alive = false;
var g_x2, g_timer4, g_timer4_alive = false;
var g_x2, g_timer5, g_timer5_alive = false;

var g_loaded = false;

var g_canvas = document.getElementById("canvas");
var g_ctx = g_canvas.getContext("2d");
let g_img = new Image();

// draw background
g_ctx.fillRect(0, 0, 800, 500);

// load image
g_img.onload = function() {
	g_loaded = true;
	demo();
}
g_img.src = "./image/airplane.png";

// registry button onclick callback
for ( var i = 1; i <= 5; i ++ )
{
	document.getElementById("btn" + i).addEventListener("click", onclick, false);
}

document.getElementById("btn6").addEventListener("click", onclickall, false);

function onclickall()
{
	if ( g_timer1_alive || 
		g_timer2_alive || 
		g_timer3_alive || 
		g_timer4_alive || 
		g_timer5_alive )
	{
		return;		
	}
	
	document.getElementById( "btn1" ).style.backgroundColor = "red";
	document.getElementById( "btn2" ).style.backgroundColor = "red";
	document.getElementById( "btn3" ).style.backgroundColor = "red";
	document.getElementById( "btn4" ).style.backgroundColor = "red";
	document.getElementById( "btn5" ).style.backgroundColor = "red";
	document.getElementById( "btn6" ).style.backgroundColor = "red";
	
	g_x1 = g_x2 = g_x3 = g_x4 = g_x5 = 800;
	
	g_timer1_alive = true;
	g_timer2_alive = true;
	g_timer3_alive = true;
	g_timer4_alive = true;
	g_timer5_alive = true;

	g_timer1 = setInterval( drawUnit1, 1000 );
	g_timer2 = setInterval( drawUnit2, 500 );
	g_timer3 = setInterval( drawUnit3, 200 );
	g_timer4 = setInterval( drawUnit4, 100 );
	g_timer5 = setInterval( drawUnit5, 50 );
}

function onclick()
{
	if (( this.id == "btn1" && g_timer1_alive ) ||
		( this.id == "btn2" && g_timer2_alive ) ||
		( this.id == "btn3" && g_timer3_alive ) ||
		( this.id == "btn4" && g_timer4_alive ) ||
		( this.id == "btn5" && g_timer5_alive ))
	{
		return;
	}
	
	document.getElementById( this.id ).style.backgroundColor = "red";
	document.getElementById( "btn6" ).style.backgroundColor = "red";
	
	if ( this.id == "btn1" )
	{
		g_x1 = 800;
		g_timer1_alive = true;
		g_timer1 = setInterval( drawUnit1, 1000 );
	}
	else if ( this.id == "btn2" )
	{
		g_x2 = 800;
		g_timer2_alive = true;
		g_timer2 = setInterval( drawUnit2, 500 );
	}
	else if ( this.id == "btn3" )
	{
		g_x3 = 800;
		g_timer3_alive = true;
		g_timer3 = setInterval( drawUnit3, 200 );
	}
	else if ( this.id == "btn4" )
	{
		g_x4 = 800;
		g_timer4_alive = true;
		g_timer4 = setInterval( drawUnit4, 100 );
	}
	else if ( this.id == "btn5" )
	{
		g_x5 = 800;
		g_timer5_alive = true;
		g_timer5 = setInterval( drawUnit5, 50 );
	}
}

function drawUnit1()
{
	var y = 0;
	var interval = 100;
	
	if ( g_x1 < 0 )
	{
		clearInterval( g_timer1 );
		g_timer1_alive = false;
		document.getElementById( "btn1" ).style.backgroundColor = "green";
		checkallstop();
		return;
	}
	
	if ( g_x1 < 800 )
	{
		g_ctx.fillRect( g_x1, y, g_x1 + 100, 100 );
	}
	
	g_x1 = g_x1 - interval;
	
	if ( g_x1 >= 0 )
	{
		g_ctx.drawImage( g_img, g_x1, y );
	}
}

function drawUnit2()
{
	var y = 100;
	var interval = 50;
	
	if ( g_x2 < 0 )
	{
		clearInterval( g_timer2 );
		g_timer2_alive = false;
		document.getElementById( "btn2" ).style.backgroundColor = "green";
		checkallstop();
		return;
	}
	
	if ( g_x2 < 800 )
	{
		g_ctx.fillRect( g_x2, y, g_x2 + 100, 100 );
	}
	
	g_x2 = g_x2 - interval;
	
	if ( g_x2 >= 0 )
	{
		g_ctx.drawImage( g_img, g_x2, y );
	}
}

function drawUnit3()
{
	var y = 200;
	var interval = 20;
	
	if ( g_x3 < 0 )
	{
		clearInterval( g_timer3 );
		g_timer3_alive = false;
		document.getElementById( "btn3" ).style.backgroundColor = "green";
		checkallstop();
		return;
	}
	
	if ( g_x3 < 800 )
	{
		g_ctx.fillRect( g_x3, y, g_x3 + 100, 100 );
	}
	
	g_x3 = g_x3 - interval;
	
	if ( g_x3 >= 0 )
	{
		g_ctx.drawImage( g_img, g_x3, y );
	}
}

function drawUnit4()
{
	var y = 300;
	var interval = 10;
	
	if ( g_x4 < 0 )
	{
		clearInterval( g_timer4 );
		g_timer4_alive = false;
		document.getElementById( "btn4" ).style.backgroundColor = "green";
		checkallstop();
		return;
	}
	
	if ( g_x4 < 800 )
	{
		g_ctx.fillRect( g_x4, y, g_x4 + 100, 100 );
	}
	
	g_x4 = g_x4 - interval;
	
	if ( g_x4 >= 0 )
	{
		g_ctx.drawImage( g_img, g_x4, y );
	}
}

function drawUnit5()
{
	var y = 400;
	var interval = 5;
	
	if ( g_x5 < 0 )
	{
		clearInterval( g_timer5 );
		g_timer5_alive = false;
		document.getElementById( "btn5" ).style.backgroundColor = "green";
		checkallstop();
		return;
	}
	
	if ( g_x5 < 800 )
	{
		g_ctx.fillRect( g_x5, y, g_x5 + 100, 100 );
	}
	
	g_x5 = g_x5 - interval;
	
	if ( g_x5 >= 0 )
	{
		g_ctx.drawImage( g_img, g_x5, y );
	}
}

function checkallstop()
{
	if ( ! g_timer1_alive && 
		! g_timer2_alive && 
		! g_timer3_alive && 
		! g_timer4_alive &&
		! g_timer5_alive )
	{
		document.getElementById( "btn6" ).style.backgroundColor = "green";
	}
}