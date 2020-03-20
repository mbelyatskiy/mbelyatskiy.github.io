function openMenu(){
	var hideMenu = document.getElementById('hideMenu')
	var mobileSitebar = document.getElementById('mobile_sitebar')
	
	if (hideMenu.style.display == 'inline-block'){
		hideMenu.style.display = 'none'
		mobileSitebar.style.borderBottom = '1px solid rgba(83, 83, 83, .7)'
		mobileSitebar.style.background = 'linear-gradient(to top, rgba(0,0,0, .7) 20%, rgba(23,23,26, .7) 50% , rgba(46,48,51, .7))'
	}else{
		hideMenu.style.display = 'inline-block'
		mobileSitebar.style.borderBottom = 'none'
		mobileSitebar.style.background = 'linear-gradient(to top, rgba(100,100,100, .7), rgba(146,148,151, .7))'	
	}
}

window.onload = function() {
	document.getElementById("preload").style.opacity = '0';
	setTimeout(function() {
		document.getElementById("preload").style.display = 'none';
	}, 1500);
};

//_______________________________________Функции Меню______________________________________________________________________________

var menu = document.getElementsByClassName('menu_headers')
var menulist = document.getElementsByClassName('menu_list')

menu[0].style.color = 'rgb(117, 139, 92)'
menulist[0].style.display = 'inline-block'

function funk(elem) {
	for (var i = 0; i < 4; i++){
		menu[i].style = 'color: white;'
	}
	elem.style.color = 'rgb(117, 139, 92)'
	hide()
}

function hide(){
	for (var i = 0; i < 4; i++) {
		if (menu[i].style.color == 'rgb(117, 139, 92)'){
			menulist[i].style.display = 'inline-block'
		} else {
			menulist[i].style.display = 'none'
		}
	}
}

