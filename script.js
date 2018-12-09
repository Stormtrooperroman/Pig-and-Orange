document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="orange.png" id="orange">');
var orange = document.getElementById('orange');
orange.style.position = 'fixed';
orange.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="pig.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
pig.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id = "scoreObj"></div>');
var scoreObj = document.getElementById('scoreObj');
scoreObj.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id = "helloText">Нажмите клавишу Enter чтобы начать</div>');
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = "center";
helloText.style.fontSize = 72 + "pt";
scoreObj.style.fontSize = 72 + "pt";

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id ="timerObj"></div>');
var timerObj = document.getElementById('timerObj');
timerObj.style.textAlign = "center";
timerObj.style.fontSize = 72 + "pt";
timerObj.style.display = "none";

scoreObj.style.marginRight =50+ "px";

var minY = 172;
var timer =13;
var intervalId;

setScore(0);
spawnOrange();


var enterListener = function(event){startGame(event);}
var mouseListener = function(event){mouseMoveFunc(event);}

function mouseMoveFunc(event)
{
	pig.style.left = event.clientX - 64 + 'px';
	pig.style.top = event.clientY -64 + 'px';

	if (event.clientY < minY )
	{
		pig.style.top = minY - 64 + 'px';
	} 

	checkCollision();
}

function spawnOrange()
{
	orange.style.left =Math.random()*( window.innerWidth  -128) +'px';
	orange.style.top = Math.random()*(window.innerHeight -128) +'px' ;
}

function checkCollision()
{
	while( Math.sqrt(Math.pow(pig.offsetLeft -orange.offsetLeft,2)+Math.pow(pig.offsetTop - orange.offsetTop,2)) <200)
	{
		spawnOrange();
		pig.src = "pig2.png";
		score+=5;
		setScore(score);
	}
}

function setScore(scoreToSet)
{
	scoreObj.innerHTML= "Очки " + scoreToSet;
}

function startGame(event)
{
	if (event.keyCode ==13) 
	{
		score=0;
		setScore(0);

		helloText.style.display = 'none';
		scoreObj.style.display = 'inline-block';
		orange.style.display = 'block';
		pig.style.display = 'block';
		timerObj.style.display = 'inline-block';

		document.removeEventListener('keydown', enterListener)
		document.addEventListener("mousemove",mouseListener);
		spawnOrange();

		timer = 15;
		setTimer(timer);
		intervalId = setInterval(function(){cntdwn();},1000)
	}
}

function setTimer(timeToSet){
	console.log(timer);
	timerObj.innerHTML = "Время: " + timeToSet;
}

function cntdwn()
{
	timer-=1
	setTimer(timer);
	if (timer==0)
	{
		clearInterval(intervalId);
		document.removeEventListener('mousemove',mouseListener);
		helloText.innerHTML = "Конец игрыб результат: " + score +". <br> Чтобы начать игру заново, нажмите Enter.";
		helloText.style.display = 'block'
		scoreObj.style.display = 'none';
		orange.style.display = 'none';
		pig.style.display = 'none';
		timerObj.style.display = 'none';
		document.addEventListener("keydown",enterListener);

	}
}

document.addEventListener("keydown",enterListener);