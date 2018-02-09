console.log ("");
console.log ("##################################");
console.log ("");
console.log ("             БИТВА");
console.log ("");
console.log ("##################################");
console.log ("");

var myHp = 20, rHp = 20;
var damage = Math.floor(Math.random()*5+1);
var z;
var t = 1;

var m = ["1: Вдарити по головi", "2: Вдарити по тiлу", "3: Вдарити по ногах"];
var n = ["1: Захистити голову", "2: Захистити тiло", "3: Захистити ноги"];

console.log ("На Вас напав злочинець!!! Ваша дiя?");
console.log ("");
for (var i = 0; i < m.length; i++) {
	console.log (m[i]);
}

var readline = require('readline');
	rl = readline.createInterface(process.stdin, process.stdout);

	
rl.prompt();
	
rl.on('line', function (line) {
	
	if (t > 0) {
		z = Math.floor(Math.random()*3+1);
	
	switch(line.trim()) {
		case "1":
			if(z==1) {
				console.log ("");
				console.log ("Злочинець заблокував Ваш удар :(");
				console.log ("Його здоров'я - " + rHp);
				console.log ("");
			}
			else {
				damage = Math.floor(Math.random()*5+1);
				rHp = rHp - damage;
				console.log ("");
				console.log ("Ви вдарили злочинця :)");
				console.log ("Сила удару - " + damage);
					if (rHp <= 0) {
						console.log ("Здоров'я злочинця - 0");
						console.log ("");
						console.log ("");
						console.log ("Вiтаємо!!! Ви перемогли");
						console.log ("");
					}
					else {
						console.log ("Здоров'я злочинця - " + rHp);
						console.log ("");
					}
			}
		break;
		case "2":
			if(z==2) {
				console.log ("");
				console.log ("Злочинець заблокував Ваш удар :(");
				console.log ("Його здоров'я - " + rHp);
				console.log ("");
			}
			else {
				damage = Math.floor(Math.random()*5+1);
				rHp = rHp - damage;
				console.log ("");
				console.log ("Ви вдарили злочинця :)");
				console.log ("Сила удару - " + damage);
					if (rHp <= 0) {
						console.log ("Здоров'я злочинця - 0");
						console.log ("");
						console.log ("");
						console.log ("Вiтаємо!!! Ви перемогли");
						console.log ("");
					}
					else {
						console.log ("Здоров'я злочинця - " + rHp);
						console.log ("");
					}
			}
		break;
		case "3":
			if(z==3) {
				console.log ("");
				console.log ("Злочинець заблокував Ваш удар :(");
				console.log ("Його здоров'я - " + rHp);
				console.log ("");
			}
			else {
				damage = Math.floor(Math.random()*5+1);
				rHp = rHp - damage;
				console.log ("");
				console.log ("Ви вдарили злочинця :)");
				console.log ("Сила удару - " + damage);
					if (rHp <= 0) {
						console.log ("Здоров'я злочинця - 0");
						console.log ("");
						console.log ("");
						console.log ("Вiтаємо!!! Ви перемогли");
						console.log ("");
					}
					else {
						console.log ("Здоров'я злочинця - " + rHp);
						console.log ("");
					}
			}
		break;		
	}
		for (var i = 0; i < m.length; i++) {
		console.log (n[i]);
		}
		t *= -1;
	}
	else {
		z = Math.floor(Math.random()*3+1);
	
	switch(line.trim()) {
		case "1":
			if(z==1) {
				console.log ("");
				console.log ("Ви заблокували удар злочинця :)");
				console.log ("Ваше здоров'я - " + myHp);
				console.log ("");
			}
			else {
				damage = Math.floor(Math.random()*5+1);
				myHp = myHp - damage;
				console.log ("");
				console.log ("Вас вдарив злочинець :(");
				console.log ("Сила удару - " + damage);
					if (myHp <= 0) {
						console.log ("Ваше здоров'я - 0");
						console.log ("");
						console.log ("");
						console.log ("Ви програли");
						console.log ("");
					}
					else {
						console.log ("Ваше здоров'я - " + myHp);
						console.log ("");
					}
			}
		break;
		case "2":
			if(z==2) {
				console.log ("");
				console.log ("Ви заблокували удар злочинця :)");
				console.log ("Ваше здоров'я - " + myHp);
				console.log ("");
			}
			else {
				damage = Math.floor(Math.random()*5+1);
				myHp = myHp - damage;
				console.log ("");
				console.log ("Вас вдарив злочинець :(");
				console.log ("Сила удару - " + damage);
					if (myHp <= 0) {
						console.log ("Ваше здоров'я - 0");
						console.log ("");
						console.log ("");
						console.log ("Ви програли");
						console.log ("");
					}
					else {
						console.log ("Ваше здоров'я - " + myHp);
						console.log ("");
					}
			}
		break;
		case "3":
			if(z==3) {
				console.log ("");
				console.log ("Ви заблокували удар злочинця :)");
				console.log ("Ваше здоров'я - " + myHp);
				console.log ("");
			}
			else {
				damage = Math.floor(Math.random()*5+1);
				myHp = myHp - damage;
				console.log ("");
				console.log ("Вас вдарив злочинець :(");
				console.log ("Сила удару - " + damage);
					if (myHp <= 0) {
						console.log ("Ваше здоров'я - 0");
						console.log ("");
						console.log ("");
						console.log ("Ви програли");
						console.log ("");
					}
					else {
						console.log ("Ваше здоров'я - " + myHp);
						console.log ("");
					}
			}
		break;		
	}
		for (var i = 0; i < m.length; i++) {
		console.log (m[i]);
		}
		t *= -1;
	}
	
	
	
	rl.prompt();
}).on('close', function() {
	console.log ("");
	console.log ('Ви закрили гру!');
	process.exit(0);
})