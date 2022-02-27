function myFunction() {
	
	var numerSMS1 = prompt("Wprowadź numer SMS");
	var dlugoscNumeru = numerSMS1.length;
	var numerSMS = Array.from(numerSMS1);
	
	
	
	if (numerSMS[0] == 7 && numerSMS[1] == 0) {
		
		kosztSMS = numerSMS[1];
		kosztSMS = 0.62;
		alert(`Ten SMS kosztuje: ${kosztSMS} zł`);
		
	}
	
	else if (numerSMS[0] == 7) {
		
		kosztSMS = numerSMS[1];
		kosztSMS = kosztSMS * 1.23;
		alert(`Ten SMS kosztuje: ${kosztSMS} zł`);
		
	}
	
	else if (numerSMS[0] == 9) {
		
		kosztSMS = numerSMS[1] + numerSMS[2];
		kosztSMS = kosztSMS * 1.23;
		alert(`Ten SMS kosztuje: ${kosztSMS} zł`);
		
	}
	
	else if (numerSMS[0] == 8 && numerSMS[0] >= 1) {
		
		kosztSMS = numerSMS[1] + numerSMS[2];
		kosztSMS = kosztSMS / 100;
		kosztSMS = kosztSMS * 1.23;
		kosztSMS = Math.round(kosztSMS * 100) / 100;
		alert(`Ten SMS kosztuje: ${kosztSMS} zł`);
		
	}
	
	else if (numerSMS[0] == 8 && numerSMS[0] == 0) {
		
		kosztSMS = 0;
		alert("Ten SMS jest bezpłatny");
		
	}
	
	else if (numerSMS[0] == 5) {
		
		kosztSMS = numerSMS[1] + numerSMS[2];
		kosztSMS = kosztSMS / 100;
		kosztSMS = kosztSMS * 1.23;
		kosztSMS = Math.round(kosztSMS * 100) / 100;
		alert(`Uwaga to jest subskrybcja, koszt jednego SMS: ${kosztSMS}`);
		
	}
	
	else if (numerSMS[0] == 6) {
		
		kosztSMS = numerSMS[1] + numerSMS[2];
		kosztSMS = kosztSMS * 1.23;
		kosztSMS = Math.round(kosztSMS * 100) / 100;
		alert(`Uwaga to jest subskrybcja, koszt jednego SMS: ${kosztSMS}`);
		
	}
	
}