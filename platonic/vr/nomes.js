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

function marestasCP() {
	var x = document.getElementById("ar")
	var sceneEl = document.querySelector('a-scene')
	var entityEl1 = sceneEl.querySelector('#arestas1')
	var entityEl2 = sceneEl.querySelector('#arestas2')
	var entityEl3 = sceneEl.querySelector('#arestas3')
	var entityEl4 = sceneEl.querySelector('#arestas4')
	var entityEl5 = sceneEl.querySelector('#arestas5')
	if (x.checked == true) { 
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','true');
	  entityEl5.setAttribute('visible','true');
	}
	else {
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	  entityEl5.setAttribute('visible','false');
	}
}

function mnivel() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelector('#n0')
	var entityEl1 = sceneEl.querySelector('#n1')
	var entityEl2 = sceneEl.querySelector('#n2')
	var entityEl3 = sceneEl.querySelector('#n3')
	var entityEl4 = sceneEl.querySelector('#n4')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 4) {
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','true');
	}
}