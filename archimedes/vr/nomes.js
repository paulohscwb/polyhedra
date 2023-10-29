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

function mfacesRV() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelectorAll('.faces')
	var x = document.getElementById("face")
	if (x.checked == true) { 
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','true');
	  }
	  x.checked = false;
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	  x.checked = true;
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
	  x.checked = false;
	} else {
	  for (let i = 0; i < entityEl.length; i++) {
		entityEl[i].setAttribute('visible','false');
	  }
	  x.checked = true;
	}
}