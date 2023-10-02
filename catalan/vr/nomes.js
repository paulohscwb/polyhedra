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