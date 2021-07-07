var screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
var sValue = '';
for(item of buttons){
	item.addEventListener('click',(e)=>{
		buttonText = e.target.innerText;
		if(buttonText=='x'){
			buttonText = '*';
			sValue += buttonText;
			screen.value = sValue;
		}
		else if(buttonText =='CE'){
			sValue = "";
			screen.value = sValue;
		}
		else if(buttonText =='='){
			screen.value = eval(sValue);
		}
		else{
			sValue += buttonText;
			screen.value = sValue;
		}
	});
}