function mfaces() {
	var x = document.getElementById('faces')
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
	var x = document.getElementById('ar')
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#arestas')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mvertices() {
	let x = document.getElementById('vertices')
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	var entityEl0 = sceneEl.querySelector('#esferaG')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	  entityEl0.setAttribute('visible','true');
	  x.value = 0;
	}
	else {
	  entityEl.setAttribute('visible','false');
	  entityEl0.setAttribute('visible','false');
	  x.value = 0;
	}
}

function mfacesRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.faces')
	let x = document.getElementById('face')
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	  x.value = 0;
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	  x.value = 0;
	}
}

function marestasRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.arestas')
	let x = document.getElementById('ar')
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	  x.value = 0;
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	  x.value = 0;
	}
}
