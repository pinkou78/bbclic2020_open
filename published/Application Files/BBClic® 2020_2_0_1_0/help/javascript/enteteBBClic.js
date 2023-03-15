function entete(){
	let element = document.getElementById("entetebbclic");
	let texteInner = '<table style="width: 100% ; margin-left:auto; margin-right:auto;"><tbody><tr>'+
	'<td width="200px"><img src="./img/LOGO_BBCLIC2020.png" alt="logo BBClic 2020" width="178" height="108"><br></td>' +
	'<td class="title">Aide & guide d&#39;utilisation</td>'+
	'<td width="200px"><p style="font-size: 16px; text-align: right; margin-top: -50px;">Version 2.0</p></td>'+
	'</tr></tbody></table>';
	element.innerHTML = texteInner;
}

function basPage(){
	let element = document.getElementById("baspagebbclic");
	let texteInner = '<img src="./img/bandeau_bas.png">';
	element.innerHTML = texteInner;
}

function menuItem(){
	let element = document.getElementById("menubbclic");
	let texteInner = '<img src="./img/bandeau_bas.png">';
	element.innerHTML = texteInner;
}

function loadMenu(){
	for(element of dataJSON){
		console.log(element.id);
	};

}

function readNumberPage(){
	for(element of numeroPage){
		return element.id;
	}
}
function displayMenuContenu(pageNumero){
	for(detail of dataJSON){
		if(detail.id == pageNumero){
			const titre1 = document.getElementById('level1');
			titre1.innerHTML = detail.level1;
			const titre2 = document.getElementById('level2');
			titre2.innerHTML = detail.level2;
			if(detail.level2 == ""){
				titre2.hidden = true;
				titre2.className = "";
			}
			const titre3 = document.getElementById('level3');
			titre3.innerHTML = detail.level3;
			if(detail.level3 == ""){
				titre3.hidden = true;
				titre3.className = "";
			}
			const titre4 = document.getElementById('level4');
			titre4.innerHTML = detail.level4;
			if(detail.level4 == ""){
				titre4.hidden = true;
				titre4.className = "";
			}
			
		}

	}
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}

function fct_affichagepage(page) {
	let element = document.getElementsByClassName('page');
	
	for(i = 0; i < element.length; i++){
		if(element[i].id == page){
			element[i].className = "pageon page";
		}
		else{
			element[i].className = "pageoff page";
			//console.log(element[i]);
		}
		
	}
}

function fct_UpdateSrcIframe(pageNumber){
	const element = document.getElementById('iframeconteneur');
	element.src = './contenu.html?pageNumber=' + pageNumber;
}
