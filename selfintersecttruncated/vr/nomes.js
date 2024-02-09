function mfaces() {
	var x = document.getElementById("faces")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function sairVR() {
	const sceneEl = document.querySelector('a-scene');
	if (sceneEl.is('vr-mode')) {
		sceneEl.exitVR();
	}
}

function marestas() {
	var x = document.getElementById("arestas")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#ar')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mvertices() {
	var x = document.getElementById("vertices")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}


function mfacesDNA() {
	var x = document.getElementById('facesA')
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.faces')
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	}
	else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	}
}

function marestasDNA() {
	var x = document.getElementById('ar')
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.arestas')
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	}
	else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	}
}