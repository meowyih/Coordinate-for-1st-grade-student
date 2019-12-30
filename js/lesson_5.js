var g_step = 0;
var g_x = 350, g_y = 200;
var g_timer;
var g_timer_alive = false;
var g_fly = false;
var g_flying_up = true;

var g_canvas = document.getElementById("canvas");
var g_ctx = g_canvas.getContext("2d");

var g_img = new Array();
g_img[0] = new Image();
g_img[1] = new Image();
g_img[2] = new Image();
g_img[3] = new Image();
g_img[4] = new Image();

var g_loaded = false;

// set 3rd button as disable
document.getElementById( "btn3" ).style.backgroundColor = "red";

// draw background
g_ctx.fillRect(0, 0, 800, 500);

// load image
g_img[0].onload = function() {
	g_img[1].src = "./image/heli02.png";
}

g_img[1].onload = function() {
	g_img[2].src = "./image/heli03.png";
}

g_img[2].onload = function() {
	g_img[3].src = "./image/heli04.png";
}

g_img[3].onload = function() {
	g_img[4].src = "./image/heli05.png";
}

g_img[4].onload = function() {
	g_loaded = true;
	
	// draw default image
	g_ctx.drawImage( g_img[0], g_x, g_y );
}

g_img[0].src = "./image/heli01.png";

// set button callback
document.getElementById("btn1").addEventListener("click", onclickbtnl, false);

function move()
{	
	// erase previous image
	g_ctx.fillRect( g_x, g_y, 100, 100 );
	
	if ( g_fly ) {
		if ( g_flying_up ) {
			g_y -= 7;			
		}
		else {
			g_y += 7;
		}
	}
	
	if ( g_y < 0 ) {
		g_y == 0;
		g_flying_up = false;
	}
	
	if ( g_y > 400 ) {
		g_y == 400;
		g_flying_up = true;
	}

	g_step ++;
	
	if ( g_step > 4 ) {
		g_step = 0;
	}
	
	g_ctx.drawImage( g_img[g_step], g_x, g_y );
}

function onclickbtnl()
{
	move();
}

document.getElementById("btn2").addEventListener("click", onclickbtn2, false);

function onclickbtn2()
{
	if ( g_timer_alive ) {
		clearInterval( g_timer );
		g_timer_alive = false;
		document.getElementById( "btn1" ).style.backgroundColor = "green";
		document.getElementById( "btn3" ).style.backgroundColor = "red";
		return;
	}
	
	g_timer_alive = true;
	g_timer = setInterval( move, 50 );
	document.getElementById( "btn1" ).style.backgroundColor = "red";
	document.getElementById( "btn3" ).style.backgroundColor = "green";
}

document.getElementById("btn3").addEventListener("click", onclickbtn3, false);

function onclickbtn3()
{
	if ( g_timer_alive ) {
		g_fly = ! g_fly;
		return;
	}
}