function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function getChecksum(str) {
    return str.split('-')[1];
}

function restoreGame() {
	
	var enc = prompt("Enter your recovery key: ", "");
	
	if(enc == "") {
		return;
	}
	
	var checksum = getChecksum(enc);
	var b64 = enc.split('-')[0];
	console.log(b64);
	if(MD5(b64) == checksum) {
		console.log("All good");
		var restore = b64DecodeUnicode(b64);
		var restore = JSON.parse(restore);
		console.log(restore);
		
		balance = restore.balance;
		
		Gügle.worth = restore.gügle.worth;
		Gügle.owned = restore.gügle.owned;
		Gügle.change = 0;
		var id2search = restore.gügle.chart.replace("Chart", "Count");
		document.getElementById(id2search).innerHTML = "Count: " + restore.gügle.owned;
		
		Juhuu.worth = restore.juhuu.worth;
		Juhuu.owned = restore.juhuu.owned;
		Juhuu.change = 0;
		id2search = restore.juhuu.chart.replace("Chart", "Count");
		document.getElementById(id2search).innerHTML = "Count: " + restore.juhuu.owned;
		
		Micronsoft.worth = restore.micronsoft.worth;
		Micronsoft.owned = restore.micronsoft.owned;
		Micronsoft.change = 0;
		id2search = restore.micronsoft.chart.replace("Chart", "Count");
		document.getElementById(id2search).innerHTML = "Count: " + restore.micronsoft.owned;
		
		updateBalance();
		
	} else {
		alert("The savegame was tampered with!");
	}
}

function saveGame() {
	var save = {balance: balance, gügle: Gügle, juhuu: Juhuu, micronsoft: Micronsoft};
	console.log(save);
	
	var JSONsave = JSON.stringify(save);
	console.log(JSONsave);
	
	var encodedSave = b64EncodeUnicode(JSONsave);
	console.log(encodedSave);
	
	var checksum = MD5(encodedSave);
	console.log(checksum);
	
	encodedSave = encodedSave + "-" + checksum;
	console.log(encodedSave);
	
	document.getElementById("key").value = encodedSave;
}