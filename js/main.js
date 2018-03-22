var currentime = new Date();
var balance = 5000;

class stock {
  	constructor(chart) {
     	this.worth = randomIntFromInterval(100,1000);
     	this.change = 0;
		this.chart = chart;
		this.owned = 0;
  	}
  	
	get price() {
	    return this.getPrice();
	}
  	
	getPrice() {
    	return this.height * this.width;
  	}
	
	changeWorth(percent) {
		var newWorth = this.worth * (percent / 100 + 1);
		this.worth = newWorth;
		addData(eval('(' + this.chart + ')'), currentime.getHours() + ":" + currentime.getMinutes() + ":" + currentime.getSeconds(), this.worth)
	}
}

const Google = new stock("googleChart");
const Yahoo = new stock("yahooChart");

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function genChange(stock) {
    var change = Math.random();
    if(change > 0.6) { 	
        stock.changeWorth(change * 5);
    } 
	else if(change < 0.05) {
		genCrash(stock);
	}
	else {
		stock.changeWorth(-Math.abs(change * 5));
	}
}

function genCrash(stock) {
	stock.changeWorth(-10);
}

function buyStock(stock) {
	if(balance > stock.worth) {
		updateBalance();
		stock.owned++; 	
		balance = balance - stock.worth;
		var id2search = stock.chart.replace("Chart", "Count");
		document.getElementById(id2search).innerHTML = "Count: " + stock.owned;
	} else {
		alert("Not enough money!");
		updateBalance();
	}
}

function sellStock(stock) {
	if(stock.owned != 0) {
		stock.owned--;
		var id2search = stock.chart.replace("Chart", "Count");
		document.getElementById(id2search).innerHTML = "Count: " + stock.owned;
		balance = balance + stock.worth;
		updateBalance();
	}
	updateBalance();
}

function updateBalance() {
	document.getElementById("balance").innerHTML = Math.round(balance) + "$";
}

function loop() {
	setInterval(function() {	
		currentime = new Date();
		genChange(Google);
		genChange(Yahoo);
	}, 1000);
}

loop();