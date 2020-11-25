var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

		player_object.set({
			top:player_y,
			left:player_x
		});
		
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80")
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_Width").innerHTML = block_image_width;
        document.getElementById("current_Height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == "77")
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_Width").innerHTML = block_image_width;
        document.getElementById("current_Height").innerHTML = block_image_height;
    }
    
	if(keyPressed == '87')
	{
		up();
		console.log("W");
	}
	if(keyPressed == '83')
	{
		down();
		console.log("S");
	}
	if(keyPressed == '65')
	{
		left();
		console.log("A");
	}
	if(keyPressed == '68')
	{
		right();
		console.log("D");
    }
    if(keyPressed == '66')
	{
		new_image('hulk_face.png'); 
		console.log("b");
	}
	if(keyPressed == '67')
	{
		new_image('hulk_left_hand.png'); 
		console.log("h");
	}
	if(keyPressed == '69')
	{
		new_image('hulk_right_hand.png'); 
		console.log("e");
	}
	if(keyPressed == '70')
	{
		new_image('hulk_legs.png'); 
		console.log("f");
	}
	if(keyPressed == '71')
	{
		new_image('hulkd_body.png'); 
		console.log("g");
	}
	if(keyPressed == '72')
	{
		new_image('captain_america_left_hand.png'); 
		console.log("h");
	}
	if(keyPressed == '73')
	{
		new_image('ironman_body.png'); 
		console.log("i");
	}
	if(keyPressed == '74')
	{
		new_image('ironman_face.png'); 
		console.log("j");
    }
    if(keyPressed == '75')
	{
		new_image('ironman_left_hand.png'); 
		console.log("k");
    }
    if(keyPressed == '76')
	{
		new_image('ironman_right_hand.png'); 
		console.log("l");
    }
    if(keyPressed == '78')
	{
		new_image('ironman_legs.png'); 
		console.log("n");
    }
    if(keyPressed == '79')
	{
		new_image('spiderman_body.png'); 
		console.log("o");
    }
    if(keyPressed == '81')
	{
		new_image('spiderman_face.png'); 
		console.log("q");
    }
    if(keyPressed == '82')
	{
		new_image('spiderman_left_hand.png'); 
		console.log("r");
    }
    if(keyPressed == '84')
	{
		new_image('spiderman_right_hand.png'); 
		console.log("t");
    }
    if(keyPressed == '85')
	{
		new_image('spiderman_legs.png'); 
		console.log("u");
    }
    if(keyPressed == '86')
	{
		new_image('thor_face.png'); 
		console.log("v");
    }
    if(keyPressed == '88')
	{
		new_image('thor_left_hand.png'); 
		console.log("x");
    }
    if(keyPressed == '89')
	{
		new_image('thor_right_hand.png'); 
		console.log("y");
    }
}
function up()
{
	if(player_y >=0)
	{  player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x +" , Y ="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function down()
{
	if(player_y <=450)
	{  player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height)
		console.log("When Up arrow key is pressed, X =  " + player_x +" , Y ="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left()
{
	if(player_x >=0)
	{  player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width)
		console.log("When Up arrow key is pressed, X =  " + player_x +" , Y ="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right()
{
	if(player_x <=850)
	{  player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width)
		console.log("When Up arrow key is pressed, X =  " + player_x +" , Y ="+player_y);
		canvas.remove(player_object);
		player_update();
	}
}