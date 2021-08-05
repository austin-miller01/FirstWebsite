console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'dark.css'
	}

	/*if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}*/

	localStorage.setItem('theme', mode)
}


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring,30)

function blurring() {
	load++;


	if(load > 99){
		clearInterval(int)
	}

	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
  	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
	console.log(load)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}