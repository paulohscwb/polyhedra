<link rel="stylesheet" href="scripts/style.css">
<h2>Visualization of polyhedra with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/polyhedra/platonic/pt-br/">versão em português</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More polyhedra:</option>
		<option value="../archimedes/">Archimedes</option>
		<option value="../catalan/">Catalan</option>
		<option value="../johnson/">Johnson</option>
		<option value="../nonconvex/">Non convex</option>
		<option disabled value="../platonic/">Platonic</option>
		<option value="../polyhedron/">Prisms and antiprisms</option>
		<option value="../quasiregular/">Quasi regular</option>
		<option value="../selfintersect/">Self intersect</option>
		<option value="../selfintersectsnub/">Self intersect snub</option>
		<option value="../selfintersecttruncated/">Self intersect truncated</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p2"></p>
  <h2 align="center">Platonic polyhedra</h2>
  An Platonic solid is a regular and convex polyhedron. It is constructed by congruent and regular polygonal faces with the same number of faces meeting at each vertex. They are named by the ancient Greek philosopher Plato who classified that the classical elements were made from these regular solids.
  <h4>Immersive room</h4>
  <div class="embed-container"><iframe width="100%" src="salaPlatao.htm" title="Sala Imersiva de Platão" frameborder="0" loading="lazy"></iframe></div>
 <br>To view Platonic polyhedra in AR, simply visit 
<p align="center"><a href="ra.html" target="_blank">https://paulohscwb.github.io/polyhedra/platonic/ra.html</a></p> 
with any browser with a webcam device (smartphone, tablet or notebook). 
<br>Access to the VR sites is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" src="ar/example1.jpg" width="85%"></p>
 <iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxUG41tIyqLd8vvNxt-5G97s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<hr>
<h4>1. Icosahedron</h4>
 <a href="vr/icosahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/9A.png" class="foto"></a><img src="ar/9.png" class="qr">
 <br><span class="titulo">U<sub>22</sub></span> The icosahedron has five equilateral triangular faces meeting at each vertex. A regular icosahedron is a gyroelongated pentagonal bipyramid and a biaugmented pentagonal antiprism in any of six orientations. The 12 edges of a regular octahedron can be subdivided in the golden ratio so that the resulting vertices define a regular icosahedron. 
<br><br><b>Faces:</b> 20 triangles | <b>Edges:</b> 30 | <b>Vertices:</b> 12 | <b>Sphericity:</b> 0.939 | <b>Dihedral angle:</b> 138.19°. <a href="http://mathworld.wolfram.com/RegularIcosahedron.html" target="_blank">More...</a>
<hr>
<h4>2. Dodecahedron</h4>
 <a href="vr/dodecahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/8A.png" class="foto"></a><img src="ar/8.png" class="qr">
 <br><span class="titulo">U<sub>23</sub></span> The dodecahedron has three regular pentagonal faces meeting at each vertex. The regular dodecahedron is the third in an infinite set of truncated trapezohedra which can be constructed by truncating the two axial vertices of a pentagonal trapezohedron. If the five Platonic solids are built with same volume, the regular dodecahedron has the shortest edges.
<br><br><b>Faces:</b> 12 pentagons | <b>Edges:</b> 30 | <b>Vertices:</b> 20 | <b>Sphericity:</b> 0.91 | <b>Dihedral angle:</b> 116.57°. <a href="http://mathworld.wolfram.com/RegularDodecahedron.html" target="_blank">More...</a>
<hr>
<h4>3. Octahedron</h4>
 <a href="vr/octahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/7A.png" class="foto"></a><img src="ar/7.png" class="qr">
 <br><span class="titulo">U<sub>5</sub></span> The octahedron has four equilateral triangular faces meeting at each vertex. It is a square bipyramid in any of three orthogonal orientations. It is also a triangular antiprism in any of four orientations. The octahedron is unique among the Platonic solids in having an even number of faces meeting at each vertex. Consequently, it is the only member of that group to possess mirror planes that do not pass through any of the faces.
<br><br><b>Faces:</b> 8 triangles | <b>Edges:</b> 12 | <b>Vertices:</b> 6 | <b>Sphericity:</b> 0.846 | <b>Dihedral angle:</b> 109.47°. <a href="http://mathworld.wolfram.com/RegularOctahedron.html" target="_blank">More...</a>
<hr>
<h4>4. Cube</h4>
 <a href="vr/cube.html" target="_blank" title="3D model" class="fotoA"><img src="ar/6A.png" class="foto"></a><img src="ar/6.png" class="qr">
 <br><span class="titulo">U<sub>6</sub></span> The cube has three square faces meeting at each vertex. The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations. The cube can be cut into six identical square pyramids. If these square pyramids are then attached to the faces of a second cube, a rhombic dodecahedron is obtained.
<br><br><b>Faces:</b> 6 squares | <b>Edges:</b> 12 | <b>Vertices:</b> 8 | <b>Sphericity:</b> 0.806 | <b>Dihedral angle:</b> 90°. <a href="http://mathworld.wolfram.com/Cube.html" target="_blank">More...</a>
<hr>
<h4>5. Tetrahedron</h4>
 <a href="vr/tetrahedron.html" target="_blank" title="3D model" class="fotoA"><img src="ar/5A.png" class="foto"></a><img src="ar/5.png" class="qr">
 <br><span class="titulo">U<sub>1</sub></span> The tetrahedron has three equilateral triangular faces meeting at each vertex. The tetrahedron is also known as a triangular pyramid and it is the simplest of all the ordinary convex polyhedra and the only one that has fewer than 5 faces. The tetrahedron has many properties analogous to those of a triangle, including an insphere, circumsphere, medial tetrahedron, and exspheres. 
<br><br><b>Faces:</b> 4 triangles | <b>Edges:</b> 6 | <b>Vertices:</b> 4 | <b>Sphericity:</b> 0.671 | <b>Dihedral angle:</b> 70.53°. <a href="http://mathworld.wolfram.com/RegularTetrahedron.html" target="_blank">More...</a>
<p class="topop"><a href="#p2" class="topo">back to top</a></p>


<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Polyhedra: Platonic</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/platonic/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Polyhedra: Platonic". Available in: <https://paulohscwb.github.io/polyhedra/platonic/>, September 2019.</p>

<br><b>References:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
