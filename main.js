var canvas=new fabric.Canvas("myCanvas")
var block_image_width=30
var block_image_height=30
var playerx=10
var playery=10
var playerobject=""
var blockimageobject=""
function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerobject=Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(150)
        playerobject.set({
            top:playery, left: playerx
        })
        canvas.add(playerobject)
    })
}
function newimage(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
        blockimageobject=Img
        blockimageobject.scaleToWidth(block_image_width)
        blockimageobject.scaleToHeight(block_image_height)
        blockimageobject.set({
            top:playery, left: playerx
        })
        canvas.add(blockimageobject)
    })
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypressed=e.keyCode
    if (e.shiftKey && keypressed == "80") {
        console.log("shiftKey && p key")
      block_image_width=block_image_width+10  
      block_image_height=block_image_height+10
      document.getElementById("width").innerHTML=block_image_width
      document.getElementById("height").innerHTML.block_image_height
    }
    if (e.shiftKey && keypressed == "77") {
        console.log("shiftKey && m key")
        block_image_width=block_image_width+10
        block_image_height=block_image_height+10
        document.getElementById("width").innerHTML=block_image_width
        document.getElementById("height").innerHTML.block_image_height
      }
      if (keypressed=="38") {
        up()
      }
      if (keypressed=="40") {
        down()
      }
      if (keypressed=="37") {
        left()
      }
      if (keypressed=="39") {
        right()
      }
      if (keypressed=="87") {
        newimage("wall.jpg")
        console.log("w")

    }      if (keypressed=="71") {
        newimage("ground.png")
        console.log("g")

    }
    if (keypressed=="85") {
        newimage("unique.png")
        console.log("u")

    }
    if (keypressed=="67") {
        newimage("cloud.jpg")
        console.log("c")

    }
    if (keypressed=="68") {
        newimage("dark_green.png")
        console.log("d")

    }
    if (keypressed=="76") {
        newimage("light_green.png")
        console.log("l")

    }
    if (keypressed=="82") {
        newimage("roof.jpg")
        console.log("r")

    }
    if (keypressed=="84") {
        newimage("trunk.jpg")
        console.log("t")

    }
    if (keypressed=="89") {
        newimage("yellow_wall.png")
        console.log("y")

    }
}
function up(){
    if (playery >=0) {
        playery = playery - block_image_height;
        canvas.remove(playerobject);
        playerupdate();
    }
}
function down(){
    if (playery <=600) {
        playery = playery + block_image_height;
        canvas.remove(playerobject);
        playerupdate();
    }
}
function left(){
    if (playerx >=0) {
        playerx = playerx - block_image_width;
        canvas.remove(playerobject);
        playerupdate();
    }
}function right(){
    if (playerx <=1000) {
        playerx = playerx + block_image_width;
        canvas.remove(playerobject);
        playerupdate();
    }
}