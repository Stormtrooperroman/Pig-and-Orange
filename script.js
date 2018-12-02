document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="orange.png" id="orange">');
var pig = document.getElementById('orange')
orange.style.position = 'fixed';
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="pig.png" id="pig">');
var pig = document.getElementById('pig')
pig.style.position = 'fixed';
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id = "scoreObj"></div>');
var scoreObj = document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72 + "pt"
var score = 0;
var speedX =0;
var speedY = 0;
setScore(0);

spawnOrange();

var mouseListener = function(event)
{
	mouseMoveFunc(event);
};
function mouseMoveFunc(event)
{
	pig.style.left =event.clientX - 64 + 'px';
	pig.style.top = event.clientY -64 +'px';
	checkCollision();
	moveOrange();
}
function spawnOrange()
{
	speedX= 10;
	speedY=1;
	orange.style.left =Math.random()*(window.innerWidth -128) +'px';
	orange.style.top = Math.random()*(window.innerHeight -128) +'px' ;

}
function moveOrange()
{
	orange.style.left = parseInt(orange.style.left + speedX) + 'px';
	orange.style.top += speedY + 'px';
}

function checkCollision()
{
	console.log();
	if ( Math.sqrt(Math.pow(pig.offsetLeft -orange.offsetLeft,2)+Math.pow(pig.offsetTop - orange.offsetTop,2)) <200)
	{
		spawnOrange();
		score+=5;
		setScore(score);
	}
}
function setScore(scoreToSet)
{
	scoreObj.innerHTML= "Очки " + scoreToSet;
}

document.addEventListener("mousemove",mouseListener);