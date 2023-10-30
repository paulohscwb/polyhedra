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
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	var entityEl0 = sceneEl.querySelector('#esferaG')
	a = entityEl.getAttribute('visible')
	if (a == true) { 
	  entityEl.setAttribute('visible','false');
	  entityEl0.setAttribute('visible','false');
	}
	else {
	  entityEl.setAttribute('visible','true');
	  entityEl0.setAttribute('visible','true');
	}
}

function mfacesRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.faces')
	a = entityEl[0].getAttribute('visible')
	if (a == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	}
}

function marestasRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.arestas')
	a = entityEl[0].getAttribute('visible')
	if (a == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	}
}
