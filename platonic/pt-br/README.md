<link rel="stylesheet" href="../../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../vr/salas/imagens/icone.png?">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra/platonic/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais poliedros:</option>
		<option value="../../archimedes/pt-br/">Arquimedes</option>
		<option value="../../catalan/pt-br/">Catalan</option>
		<option value="../../nonconvex/pt-br/">Não convexos</option>
		<option disabled value="../../platonic/pt-br/">Platão</option>
		<option value="../../polyhedron/pt-br/">Prismas e antiprismas</option>
		<option value="../../quasiregular/pt-br/">Quase regulares</option>
		<option value="../../selfintersect/pt-br/">Auto-interseção</option>
		<option value="../../selfintersectsnub/pt-br/">Auto-interseção snub</option>
		<option value="../../selfintersecttruncated/pt-br/">Auto-interseção truncados</option>
		<option value="../../johnson1/pt-br/">Johnson: 1-32</option>
		<option value="../../johnson2/pt-br/">Johnson: 33-62</option>
		<option value="../../johnson3/pt-br/">Johnson: 63-92</option>
		<option value="../../infinity/pt-br/">Estrelação ao infinito</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>
 
<p id="p2"></p>
  <h2 align="center"><img src="../vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Poliedros de Platão</h2>
Um sólido platônico é um poliedro regular e convexo. É construído por faces poligonais regulares e congruentes com o mesmo número de faces reunidas em cada vértice. Eles foram nomeados pelo antigo filósofo grego Platão, o qual classificou que os elementos clássicos foram feitos a partir desses sólidos regulares.
<p align="center"><a href="#ra">Realidade Aumentada</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">Modelos 3D</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../../pt-br/">Página Inicial</a></p>
<hr>
<h3 align="center">Sala imersiva</h3>
  <div class="embed-container"><iframe width="100%" src="../sala.htm" title="Sala Imersiva de Platão" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><img align="middle" src="../vr/salas/videos/platao.gif" style="max-width: 47%; border-radius:5px; margin-right:10px" loading="lazy"/><a href="../sala.htm" target="_blank">&#x1f517; link da sala</a></p>
<hr>
  <h3 id="ra" align="center">Realidade Aumentada</h3>
  Para ver o poliedro platônico em AR, visite
<p align="center"> <a href="../ra.html" target="_blank">https://paulohscwb.github.io/polyhedra/platonic/ra.html </a></p>
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas dos modelos 3D é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example1.jpg" width="85%"></p>
<p align="center"><img src="../ar/platonic.gif" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">Modelos 3D</h3>
<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxUG41tIyqLd8vvNxt-5G97s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h4>1. Icosaedro</h4>
 <a href="../vr/icosahedron.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/9A.png" class="foto"></a><img src="../ar/9.png" class="qr">
 <br><span class="titulo">U<sub>22</sub></span> O icosaedro tem cinco faces triangulares reunidas em cada vértice. Um icosaedro regular é uma pirâmide dupla pentagonal giralongada e um antiprisma pentagonal em qualquer das seis orientações. As 12 arestas de um octaedro regular podem ser subdivididas na proporção áurea de modo que os vértices resultantes definem um icosaedro regular.
<br><br><b>Faces:</b> 20 triângulos | <b>Arestas:</b> 30 | <b>Vértices:</b> 12 | <b>Esfericidade:</b> 0.939 | <b>Ângulo diédrico:</b> 138.19°. <a href="http://mathworld.wolfram.com/RegularIcosahedron.html" target="_blank">Mais sobre...</a><br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>2. Dodecaedro</h4>
 <a href="../vr/dodecahedron.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/8A.png" class="foto"></a><img src="../ar/8.png" class="qr">
 <br><span class="titulo">U<sub>23</sub></span> O dodecaedro tem três faces pentagonais regulares se encontrando em cada vértice. O dodecaedro regular é o terceiro em um conjunto infinito de trapezoedros truncados que pode ser construído truncando-se dois vértices axiais de um trapezoedro pentagonal. Se os cinco sólidos platônicos forem construídos com o mesmo volume, o dodecaedro regular tem as arestas de menor comprimento.
<br><br><b>Faces:</b> 12 pentágonos | <b>Arestas:</b> 30 | <b>Vértices:</b> 20 | <b>Esfericidade:</b> 0.91 | <b>Ângulo diédrico:</b> 116.57°. <a href="http://mathworld.wolfram.com/RegularDodecahedron.html" target="_blank">Mais sobre...</a><br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>3. Octaedro</h4>
 <a href="../vr/octahedron.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/7A.png" class="foto"></a><img src="../ar/7.png" class="qr">
 <br><span class="titulo">U<sub>5</sub></span> O octaedro tem quatro faces triangulares reunidas em cada vértice. É uma pirâmide dupla quadrada em qualquer uma das três orientações ortogonais. É também um antiprisma triangular em qualquer das quatro orientações. O octaedro é único entre os sólidos platônicos que tem número par de faces que se encontram em cada vértice. Consequentemente, é o único membro desse grupo que possui planos espelhados que não passam por alguma face.
<br><br><b>Faces:</b> 8 triângulos | <b>Arestas:</b> 12 | <b>Vértices:</b> 6 | <b>Esfericidade:</b> 0.846 | <b>Ângulo diédrico:</b> 109.47°. <a href="http://mathworld.wolfram.com/RegularOctahedron.html" target="_blank">Mais sobre...</a><br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>4. Cubo</h4>
 <a href="../vr/cube.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/6A.png" class="foto"></a><img src="../ar/6.png" class="qr">
 <br><span class="titulo">U<sub>6</sub></span> O cubo ou hexaedro tem três faces quadradas reunidas em cada vértice. O cubo é também um paralelepípedo quadrado, um cubóide equilatero ou um romboedro regular. É um prisma quadrado regular em três orientações, e um trapezoedro trígono em quatro orientações. O cubo pode ser cortado em seis pirâmides quadradas idênticas. Se estas pirâmides quadradas são encaixadas às faces de um segundo cubo, um dodecaedro rômbico é obtido.
<br><br><b>Faces:</b> 6 quadrados | <b>Arestas:</b> 12 | <b>Vértices:</b> 8 | <b>Esfericidade:</b> 0.806 | <b>Ângulo diédrico:</b> 90°. <a href="http://mathworld.wolfram.com/Cube.html" target="_blank">Mais sobre...</a><br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>5. Tetraedro</h4>
 <a href="../vr/tetrahedron.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/5A.png" class="foto"></a><img src="../ar/5.png" class="qr">
 <br><span class="titulo">U<sub>1</sub></span> O tetraedro tem três faces triangulares reunidas em cada vértice. O tetraedro também é conhecido como uma pirâmide triangular e é o mais simples de todos os poliedros convexos comuns e o único que tem menos de 5 faces. O tetraedro tem muitas propriedades análogas àquelas de um triângulo, incluindo um esfera inscrita, esfera circunscrita, tetraedro medial e esferas ex-inscritas.
<br><br><b>Faces:</b> 4 triângulos | <b>Arestas:</b> 6 | <b>Vértices:</b> 4 | <b>Esfericidade:</b> 0.671 | <b>Ângulo diédrico:</b> 70.53°. <a href="http://mathworld.wolfram.com/RegularTetrahedron.html" target="_blank">Mais sobre...</a><br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>6. Composto dos poliedros platônicos</h4>
 <a href="../vr/PlatonicCompound.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/2A.png" class="foto"></a><img src="../ar/2.png" class="qr">
 <br>Um composto de poliedros é um arranjo de vários poliedros interpenetrantes, todos iguais ou de vários tipos distintos, geralmente com propriedades simétricas visualmente atraentes. Neste exemplo, temos um composto de poliedros platônicos usando diagonais, vértices e mediatrizes de arestas.
<br><br><a href="https://mathworld.wolfram.com/PolyhedronCompound.html" target="_blank">Mais sobre...</a><br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<hr>
<h4>7. Poliedros de Platão e seus duais</h4>
 <a href="../vr/dna.html" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/1A.png" class="foto"></a><img src="../ar/1.png" class="qr">
 <br>Representação com cada poliedro de Platão e seu respectivo dual. Neste projeto, temos os poliedros simulando uma fita de DNA com as respectivas ligações entre os poliedros duais de Platão.
<br><a href="../ra.html" class="raAR" title="Realidade aumentada" target="_blank"></a>
<p class="topop"><a href="#p2" class="topo">voltar ao topo</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Platonic polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/platonic/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Platonic polyhedra - Visualization of polyhedra with Augmented Reality and Virtual Reality". Disponível em: <https://paulohscwb.github.io/polyhedra/platonic/>, Setembro de 2019.</p>
<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>
<br><br><b>Referências:</b>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
