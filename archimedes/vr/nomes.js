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
	var x = document.getElementById("ar")
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
	var x = document.getElementById("vertices")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	var entityEl0 = sceneEl.querySelector('#esferaG')
	var entityEl1 = sceneEl.querySelector('#esferaP')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','true');
	  document.getElementById("vertices").checked = false;
	}
	else {
	  entityEl.setAttribute('visible','false');
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  document.getElementById("vertices").checked = true;
	}
}

function mfacesRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.faces')
	var x = document.getElementById("face")
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	  document.getElementById("face").checked = false;
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	  document.getElementById("face").checked = true;
	}
}

function marestasRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.arestas')
	var x = document.getElementById("ar")
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	  document.getElementById("ar").checked = false;
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	  document.getElementById("ar").checked = true;
	}
}
