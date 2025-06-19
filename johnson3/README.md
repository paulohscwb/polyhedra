<link rel="stylesheet" href="../scripts/style.css">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="vr/salas/imagens/icone.png">
<h2>Visualization of polyhedra with Augmented Reality (AR) and Virtual Reality (VR) in A-frame</h2>
 <b>author:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
 <br><b>contact:</b> <a href="#">paulohscwb@gmail.com</a>
 <br><a href="https://paulohscwb.github.io/polyhedra/johnson3/pt-br/">versão em português</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected value>More polyhedra:</option>
		<option value="../archimedes/">Archimedes</option>
		<option value="../catalan/">Catalan</option>
		<option value="../nonconvex/">Non convex</option>
		<option value="../platonic/">Platonic</option>
		<option value="../polyhedron/">Prisms and antiprisms</option>
		<option value="../quasiregular/">Quasi regular</option>
		<option value="../selfintersect/">Self-intersecting</option>
		<option value="../selfintersectsnub/">Self-intersecting snub</option>
		<option value="../selfintersecttruncated/">Self intersecting truncated</option>
		<option value="../johnson1/">Johnson: 1-32</option>
		<option value="../johnson2/">Johnson: 33-62</option>
		<option disabled value="../johnson3/">Johnson: 63-92</option>
		<option value="../infinity/">Stellation to infinity</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p13"></p>
  <h2 align="center"><img src="vr/salas/imagens/icone.png" style="margin-bottom:-10px" width="45"> Johnson solids - part 3: J<sub>63</sub> - J<sub>92</sub></h2>
  A Johnson solid is a strictly convex regular-faced polyhedron that is not uniform. They are named after Norman Woodason Johnson, who in 1966 first listed all 92 such polyhedra. In third part, we have more 30 Johnson solids. 
 <p align="center"><a href="#ra">Augmented Reality</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#m3d">3D Models</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="../">Home</a></p>
<hr>
  <h3 align="center">Immersive rooms</h3>
  <div class="embed-container"><iframe width="100%" src="sala1.htm" title="Sala Imersiva dos Sólidos de Johnson - parte 3" frameborder="0" loading="lazy"></iframe></div>
  <p align="center"><a href="sala1.htm" target="_blank">&#x1f517; room 1</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala2.htm" target="_blank">&#x1f517; room 2</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="sala3.htm" target="_blank">&#x1f517; room 3</a></p>
  <p align="center"><img src="../../geometria-descritiva/videos/johnson3a.gif" style="max-width: 31.5%; border-radius:5px; margin-right:2%" alt="Immersive room of Johnson solids - part 3" loading="lazy"/><img src="../../geometria-descritiva/videos/johnson3b.gif" alt="Immersive room of Johnson solids - part 3" style="max-width: 31.5%; border-radius:5px; margin-right:2%" loading="lazy"/><img src="../../geometria-descritiva/videos/johnson3c.gif" style="max-width: 31.5%; border-radius:5px" alt="Immersive room of Johnson solids - part 3" loading="lazy"/></p>
<hr>
  <h3 id="ra" align="center">Augmented Reality</h3>
  To view Johnson solids in AR, simply visit:
<p align="center"><a href="ra.html" target="_blank">https://paulohscwb.github.io/polyhedra/johnson3/ra.html</a></p> 
with any browser with a webcam device (smartphone, tablet or notebook). 
<br>Access to the VR sites is done by clicking on the blue circle that appears on top of the marker.
<p align="center"><img style="border-radius:7px;" src="ar/example9.jpg" width="85%"></p>
<p align="center"><img src="ar/johnson3.gif" style="max-width: 92%; border-radius:5px;" loading="lazy"/></p>
<hr>
<h3 id="m3d" align="center">3D models</h3>
<iframe width="560" height="315" style="max-width:100%" src="https://www.youtube.com/embed/videoseries?list=PLy0I_lGW8HxXQoWgT-PKQ-avQgnJ3UXuZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
<h4>1. Tridiminished icosahedron</h4>
<a href="vr/j63_tridiminished_icosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/215A.png" class="foto"></a><img src="ar/215.png" class="qr">
 <br><span class="titulo">J<sub>63</sub></span> The tridiminished icosahedron, or teddi, is one of the 92 Johnson solids. It can be constructed by removing 3 mutually non-adjacent vertices from a regular icosahedron. The name refers to one way of constructing it, by removing three pentagonal pyramids J<sub>2</sub> from a regular icosahedron, which replaces three sets of five triangular faces from the icosahedron with three mutually adjacent pentagonal faces. 
<br><br><b>Faces:</b> 5 triangles and 3 pentagons | <b>Edges:</b> 15 | <b>Vertices:</b> 9 | <b>Dihedral angles:</b> 138.19°, 100.81° and 63.43°. <a href="https://polytope.miraheze.org/wiki/Tridiminished_icosahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>2. Augmented tridiminished icosahedron</h4>
<a href="vr/j64_augmented_tridiminished_icosahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/216A.png" class="foto"></a><img src="ar/216.png" class="qr">
 <br><span class="titulo">J<sub>64</sub></span> The augmented tridiminished icosahedron, or auteddi, is one of the Johnson solids. It can be constructed by attaching a tetrahedron, seen as a triangular pyramid, to the triangular face of the tridiminished icosahedron that is connected only to pentagons. It is the only Johnson solid that is constructed using both diminishing and augmenting, assuming that no diminishing and augmenting cancel each other out.  
<br><br><b>Faces:</b> 7 triangles and 3 pentagons | <b>Edges:</b> 18 | <b>Vertices:</b> 10 | <b>Dihedral angles:</b> 171.34°, 138.19°, 100.81°, 70.53° and 63.43°. <a href="https://polytope.miraheze.org/wiki/Augmented_tridiminished_icosahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>3. Augmented truncated tetrahedron</h4>
<a href="vr/j65_augmented_truncated_tetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/217A.png" class="foto"></a><img src="ar/217.png" class="qr">
 <br><span class="titulo">J<sub>65</sub></span> The augmented truncated tetrahedron, or autut, is one of the Johnson solids. It can be constructed by attaching a triangular cupola J<sub>3</sub> to one of the hexagonal faces of the truncated tetrahedron.  
<br><br><b>Faces:</b> 8 triangles, 3 squares and 3 hexagons | <b>Edges:</b> 27 | <b>Vertices:</b> 15 | <b>Dihedral angles:</b> 164.21°, 141.06°, 125.26°, 109.47° and 70.53°. <a href="https://polytope.miraheze.org/wiki/Augmented_truncated_tetrahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>4. Augmented truncated cube</h4>
<a href="vr/j66_augmented_truncated_cube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/218A.png" class="foto"></a><img src="ar/218.png" class="qr">
 <br><span class="titulo">J<sub>66</sub></span> The augmented truncated cube, or autic, is one of the Johnson solids. It can be constructed by attaching a square cupola J<sub>4</sub> to one of the octagonal faces of the truncated cube.
<br><br><b>Faces:</b> 12 triangles, 5 squares and 5 octagons | <b>Edges:</b> 48 | <b>Vertices:</b> 28 | <b>Dihedral angles:</b> 170.26°, 144.74°, 135°, 125.26° and 90°. <a href="https://polytope.miraheze.org/wiki/Augmented_truncated_cube" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>5. Biaugmented truncated cube</h4>
<a href="vr/j67_biaugmented_truncated_cube.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/219A.png" class="foto"></a><img src="ar/219.png" class="qr">
 <br><span class="titulo">J<sub>67</sub></span> The biaugmented truncated cube, or bautic, is one of the Johnson solids. It can be constructed by attaching square cupolas J<sub>4</sub> to two opposite octagonal faces of the truncated cube.
<br><br><b>Faces:</b> 16 triangles, 10 squares and 4 octagons | <b>Edges:</b> 60 | <b>Vertices:</b> 32 | <b>Dihedral angles:</b> 170.26°, 144.74°, 135°, 125.26° and 90°. <a href="https://polytope.miraheze.org/wiki/Biaugmented_truncated_cube" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>6. Augmented truncated dodecahedron</h4>
<a href="vr/j68_augmented_truncated_dodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/220A.png" class="foto"></a><img src="ar/220.png" class="qr">
 <br><span class="titulo">J<sub>68</sub></span> The augmented truncated dodecahedron, or autid, is one of the Johnson solids. It can be constructed by attaching a pentagonal cupola J<sub>5</sub> to one of the decagonal faces of the truncated dodecahedron.
<br><br><b>Faces:</b> 25 triangles, 5 squares, 1 pentagon and 11 decagons | <b>Edges:</b> 105 | <b>Vertices:</b> 65 | <b>Dihedral angles:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° and 116.57°. <a href="https://polytope.miraheze.org/wiki/Augmented_truncated_dodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>7. Parabiaugmented truncated dodecahedron</h4>
<a href="vr/j69_parabiaugmented_truncated_dodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/221A.png" class="foto"></a><img src="ar/221.png" class="qr">
 <br><span class="titulo">J<sub>69</sub></span> The parabiaugmented truncated dodecahedron, or pabautid, is one of the Johnson solids. It can be constructed by attaching two pentagonal cupolas J<sub>5</sub> to two opposite decagonal faces of the truncated dodecahedron.
<br><br><b>Faces:</b> 30 triangles, 10 squares, 2 pentagons and 10 decagons | <b>Edges:</b> 120 | <b>Vertices:</b> 70 | <b>Dihedral angles:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° and 116.57°. <a href="https://polytope.miraheze.org/wiki/Parabiaugmented_truncated_dodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>8. Metabiaugmented truncated dodecahedron</h4>
<a href="vr/j70_metabiaugmented_truncated_dodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/222A.png" class="foto"></a><img src="ar/222.png" class="qr">
 <br><span class="titulo">J<sub>70</sub></span> The metabiaugmented truncated dodecahedron, or mabautid, is one of the Johnson solids. It can be constructed by attaching two pentagonal cupolas J<sub>5</sub> to two non-opposite, non-adjacent decagonal faces of the truncated dodecahedron.
<br><br><b>Faces:</b> 30 triangles, 10 squares, 2 pentagons and 10 decagons | <b>Edges:</b> 120 | <b>Vertices:</b> 70 | <b>Dihedral angles:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° and 116.57°. <a href="https://polytope.miraheze.org/wiki/Metabiaugmented_truncated_dodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>9. Triaugmented truncated dodecahedron</h4>
<a href="vr/j71_triaugmented_truncated_dodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/223A.png" class="foto"></a><img src="ar/223.png" class="qr">
 <br><span class="titulo">J<sub>71</sub></span> The triaugmented truncated dodecahedron, or tautid, is one of the Johnson solids. It can be constructed by attaching pentagonal cupolas J<sub>5</sub> to three mutually non-adjacent decagonal faces of the truncated dodecahedron.
<br><br><b>Faces:</b> 35 triangles, 10 squares, 3 pentagons and 9 decagons | <b>Edges:</b> 135 | <b>Vertices:</b> 75 | <b>Dihedral angles:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° and 116.57°. <a href="https://polytope.miraheze.org/wiki/Triaugmented_truncated_dodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>10. Gyrate rhombicosidodecahedron</h4>
<a href="vr/j72_gyrate_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/224A.png" class="foto"></a><img src="ar/224.png" class="qr">
 <br><span class="titulo">J<sub>72</sub></span> The gyrate rhombicosidodecahedron, or gyrid, is one of the Johnson solids. It can be constructed by rotating one of the pentagonal cupolaic caps of the small rhombicosidodecahedron by 36°.
<br><br><b>Faces:</b> 20 triangles, 30 squares and 12 pentagons | <b>Edges:</b> 120 | <b>Vertices:</b> 60 | <b>Dihedral angles:</b> 159.09°, 153.94°, 153.43° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Gyrate_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p13" class="topo">back to top</a></p>
<hr>
<h4>11. Parabigyrate rhombicosidodecahedron</h4>
<a href="vr/j73_parabigyrate_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/225A.png" class="foto"></a><img src="ar/225.png" class="qr">
 <br><span class="titulo">J<sub>73</sub></span> The parabigyrate rhombicosidodecahedron, or pabgyrid, is one of the Johnson solids. It can be constructed by rotating two opposite pentagonal cupolaic caps of the small rhombicosidodecahedron by 36°.
<br><br><b>Faces:</b> 20 triangles, 30 squares and 12 pentagons | <b>Edges:</b> 120 | <b>Vertices:</b> 60 | <b>Dihedral angles:</b> 159.09°, 153.94°, 153.43° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Parabigyrate_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>12. Metabigyrate rhombicosidodecahedron</h4>
<a href="vr/j74_metabigyrate_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/226A.png" class="foto"></a><img src="ar/226.png" class="qr">
 <br><span class="titulo">J<sub>74</sub></span> The metabigyrate rhombicosidodecahedron, or mabgyrid, is one of the Johnson solids. It can be constructed by rotating two non-opposite pentagonal cupolaic caps of the small rhombicosidodecahedron by 36°.
<br><br><b>Faces:</b> 20 triangles, 30 squares and 12 pentagons | <b>Edges:</b> 120 | <b>Vertices:</b> 60 | <b>Dihedral angles:</b> 159.09°, 153.94°, 153.43° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Metabigyrate_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>13. Trigyrate rhombicosidodecahedron</h4>
<a href="vr/j75_trigyrate_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/227A.png" class="foto"></a><img src="ar/227.png" class="qr">
 <br><span class="titulo">J<sub>75</sub></span> The trigyrate rhombicosidodecahedron, or tagyrid, is one of the Johnson solids. It can be constructed by rotating three mutually non-adjacent pentagonal cupolaic caps of the small rhombicosidodecahedron by 36°. 
<br><br><b>Faces:</b> 20 triangles, 30 squares and 12 pentagons | <b>Edges:</b> 120 | <b>Vertices:</b> 60 | <b>Dihedral angles:</b> 159.09°, 153.94°, 153.43° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Trigyrate_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>14. Diminished rhombicosidodecahedron</h4>
<a href="vr/j76_diminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/228A.png" class="foto"></a><img src="ar/228.png" class="qr">
 <br><span class="titulo">J<sub>76</sub></span> The diminished rhombicosidodecahedron, or dirid, is one of the Johnson solids. It can be constructed by removing one of the pentagonal cupolaic caps of the small rhombicosidodecahedron. 
<br><br><b>Faces:</b> 15 triangles, 25 squares, 11 pentagons and 1 decagon | <b>Edges:</b> 105 | <b>Vertices:</b> 55 | <b>Dihedral angles:</b> 159.09°, 121.72°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Diminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>15. Paragyrate diminished rhombicosidodecahedron</h4>
<a href="vr/j77_paragyrate_diminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/229A.png" class="foto"></a><img src="ar/229.png" class="qr">
 <br><span class="titulo">J<sub>77</sub></span> The paragyrate diminished rhombicosidodecahedron, or pagydrid, is one of the Johnson solids. It can be constructed by removing one of the pentagonal cupolaic caps of the small rhombicosidodecahedron, and rotating the opposite cap by 36°. 
<br><br><b>Faces:</b> 15 triangles, 25 squares, 11 pentagons and 1 decagon | <b>Edges:</b> 105 | <b>Vertices:</b> 55 | <b>Dihedral angles:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Paragyrate_diminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>16. Metagyrate diminished rhombicosidodecahedron</h4>
<a href="vr/j78_metagyrate_diminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/230A.png" class="foto"></a><img src="ar/230.png" class="qr">
 <br><span class="titulo">J<sub>78</sub></span> The metagyrate diminished rhombicosidodecahedron, or magydrid, is one of the Johnson solids. It can be constructed by removing one of the pentagonal cupolaic caps of the small rhombicosidodecahedron, and rotating another non-opposite cap by 36°. 
<br><br><b>Faces:</b> 15 triangles, 25 squares, 11 pentagons and 1 decagon | <b>Edges:</b> 105 | <b>Vertices:</b> 55 | <b>Dihedral angles:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Metagyrate_diminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>17. Bigyrate diminished rhombicosidodecahedron</h4>
<a href="vr/j79_bigyrate_diminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/231A.png" class="foto"></a><img src="ar/231.png" class="qr">
 <br><span class="titulo">J<sub>79</sub></span> The bigyrate diminished rhombicosidodecahedron, or bagydrid, is one of the Johnson solids. It can be constructed by removing one of the pentagonal cupolaic caps of the small rhombicosidodecahedron, and rotating two further non-opposite caps by 36°. 
<br><br><b>Faces:</b> 15 triangles, 25 squares, 11 pentagons and 1 decagon | <b>Edges:</b> 105 | <b>Vertices:</b> 55 | <b>Dihedral angles:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Bigyrate_diminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>18. Parabidiminished rhombicosidodecahedron</h4>
<a href="vr/j80_parabidiminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/232A.png" class="foto"></a><img src="ar/232.png" class="qr">
 <br><span class="titulo">J<sub>80</sub></span> The parabidiminished rhombicosidodecahedron, or pabidrid, is one of the Johnson solids. It can be constructed by removing two opposite pentagonal cupolaic caps of the small rhombicosidodecahedron. 
<br><br><b>Faces:</b> 10 triangles, 20 squares, 10 pentagons and 2 decagons | <b>Edges:</b> 90 | <b>Vertices:</b> 50 | <b>Dihedral angles:</b> 159.09°, 121.72°, 116.57° and 148.28°. <a href="https://en.wikipedia.org/wiki/Parabidiminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>19. Metabidiminished rhombicosidodecahedron</h4>
<a href="vr/j81_metabidiminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/233A.png" class="foto"></a><img src="ar/233.png" class="qr">
 <br><span class="titulo">J<sub>81</sub></span> The metabidiminished rhombicosidodecahedron, or mabidrid, is one of the Johnson solids. It can be constructed by removing two non-opposite pentagonal cupolaic caps of the small rhombicosidodecahedron. 
<br><br><b>Faces:</b> 10 triangles, 20 squares, 10 pentagons and 2 decagons | <b>Edges:</b> 90 | <b>Vertices:</b> 50 | <b>Dihedral angles:</b> 159.09°, 121.72°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Metabidiminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>20. Gyrate bidiminished rhombicosidodecahedron</h4>
<a href="vr/j82_gyrate_bidiminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/234A.png" class="foto"></a><img src="ar/234.png" class="qr">
 <br><span class="titulo">J<sub>82</sub></span> The gyrate bidiminished rhombicosidodecahedron, or gybadrid, is one of the Johnson solids. It can be constructed by removing two non-opposite pentagonal cupolaic caps of the small rhombicosidodecahedron, and rotating a third cap by 36°. 
<br><br><b>Faces:</b> 10 triangles, 20 squares, 10 pentagons and 2 decagons | <b>Edges:</b> 90 | <b>Vertices:</b> 50 | <b>Dihedral angles:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Gyrate_bidiminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p13" class="topo">back to top</a></p>
<hr>
<h4>21. Tridiminished rhombicosidodecahedron</h4>
<a href="vr/j83_tridiminished_rhombicosidodecahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/235A.png" class="foto"></a><img src="ar/235.png" class="qr">
 <br><span class="titulo">J<sub>83</sub></span> The tridiminished rhombicosidodecahedron, or tedrid, is one of the Johnson solids. It can be constructed by removing three pentagonal cupolaic caps of the small rhombicosidodecahedron. 
<br><br><b>Faces:</b> 5 triangles, 15 squares, 9 pentagons and 3 decagons | <b>Edges:</b> 75 | <b>Vertices:</b> 45 | <b>Dihedral angles:</b> 159.09°, 121.72°, 116.57° and 148.28°. <a href="https://polytope.miraheze.org/wiki/Tridiminished_rhombicosidodecahedron" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>22. Snub disphenoid</h4>
<a href="vr/j84_snub_disphenoid.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/236A.png" class="foto"></a><img src="ar/236.png" class="qr">
 <br><span class="titulo">J<sub>84</sub></span> The snub disphenoid, or snadow, is one of the Johnson solids. It can be constructed from a tetrahedron, seen as a digonal antiprism or disphenoid, by expanding the halves outward and inserting a set of 8 triangles in between the halves.
<br><br><b>Faces:</b> 12 triangles | <b>Edges:</b> 18 | <b>Vertices:</b> 8 | <b>Dihedral angles:</b> 96.2°, 121.74° and 166.44°. <a href="https://polytope.miraheze.org/wiki/Snub_disphenoid" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>23. Snub square antiprism</h4>
<a href="vr/j85_snub_square_antiprism.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/237A.png" class="foto"></a><img src="ar/237.png" class="qr">
 <br><span class="titulo">J<sub>85</sub></span> The snub square antiprism, or snisquap, is one of the Johnson solids. It can be constructed from a square antiprism by expanding the halves outward and inserting a set of 16 triangles in between the halves. 
<br><br><b>Faces:</b> 24 triangles and 2 squares | <b>Edges:</b> 40 | <b>Vertices:</b> 16 | <b>Dihedral angles:</b> 144.14°, 119.11°, 164.26°, 145.44° and 114.65°. <a href="https://polytope.miraheze.org/wiki/Snub_square_antiprism" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>24. Sphenocorona </h4>
<a href="vr/j86_sphenocorona.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/238A.png" class="foto"></a><img src="ar/238.png" class="qr">
 <br><span class="titulo">J<sub>86</sub></span> The sphenocorona, or waco, is one of the Johnson solids. It is one of several polyhedra near the end of the list of Johnson solids with no obvious relation to any of the uniform polyhedra. The name is derived from "spheno" (meaning a wedge-like arrangement of two "lunes", where each lune consists of a square attached to two triangles) and "corona" denoting a crown-like structure composed of 8 triangles. 
<br><br><b>Faces:</b> 12 triangles and 2 squares | <b>Edges:</b> 22 | <b>Vertices:</b> 10 | <b>Dihedral angles:</b> 143.48°, 135.99°, 159.89°, 118.89°, 131.44°, 97.46°, 109.52° and 117.02°. <a href="https://polytope.miraheze.org/wiki/Sphenocorona" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>25. Augmented sphenocorona </h4>
<a href="vr/j87_augmented_sphenocorona.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/239A.png" class="foto"></a><img src="ar/239.png" class="qr">
 <br><span class="titulo">J<sub>87</sub></span> The augmented sphenocorona, or auwaco, is one of the Johnson solids. It can be constructed by attaching a square pyramid to one of the square faces of the sphenocorona J<sub>86</sub>. 
<br><br><b>Faces:</b> 16 triangles and 1 square | <b>Edges:</b> 26 | <b>Vertices:</b> 11 | <b>Dihedral angles:</b> 143.48°, 135.99°, 114.74°, 159.89°, 118.89°, 131.44°, 97.46°, 109.52°, 164.26°, 171.75° and 152.19°. <a href="https://polytope.miraheze.org/wiki/Augmented_sphenocorona" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>26. Sphenomegacorona </h4>
<a href="vr/j88_sphenomegacorona.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/240A.png" class="foto"></a><img src="ar/240.png" class="qr">
 <br><span class="titulo">J<sub>88</sub></span> The sphenomegacorona, or wamco, is one of the Johnson solids. The name is derived from "spheno", meaning a wedge-like arrangement of two "lunes", where each lune consists of a square attached to two triangles, and "megacorona", denoting a large crown-like structure composed of 12 triangles, as opposed to the smaller "corona" of 8 triangles found in the sphenocorona. 
<br><br><b>Faces:</b> 16 triangles and 2 squares | <b>Edges:</b> 28 | <b>Vertices:</b> 12 | <b>Dihedral angles:</b> 86.72°, 117.36°, 129.44°, 137.24°, 143.74°, 154.72°, 161.48° and 171.65°. <a href="https://polytope.miraheze.org/wiki/Sphenomegacorona" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>27. Hebesphenomegacorona</h4>
<a href="vr/j89_hebesphenomegacorona.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/241A.png" class="foto"></a><img src="ar/241.png" class="qr">
 <br><span class="titulo">J<sub>89</sub></span> The hebesphenomegacorona, or hawmco, is one of the Johnson solids. The name is derived from "hebespheno" (meaning a wedge-like arrangement of three "lunes", where each lune consists of a square attached to two triangles) and "megacorona" denoting a crown-like structure composed of 12 triangles (as opposed to the smaller "corona" of 8 triangles found in the sphenocorona). It has a weak relation to the icosahedron: if the middle square is contracted to an edge such that the neighboring squares become triangles and the neighboring triangles touch, the result is an icosahedron.  
<br><br><b>Faces:</b> 18 triangles and 3 squares | <b>Edges:</b> 33 | <b>Vertices:</b> 14 | <b>Dihedral angles:</b> 157.15°, 141.34°, 128.5°, 111.73°, 149.56°, 101.29°, 152.98°, 102.52° and 133.97°. <a href="https://polytope.miraheze.org/wiki/Hebesphenomegacorona" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>28. Disphenocingulum</h4>
<a href="vr/j90_disphenocingulum.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/242A.png" class="foto"></a><img src="ar/242.png" class="qr">
 <br><span class="titulo">J<sub>90</sub></span> The disphenocingulum, or dawci, is one of the Johnson solids. The name is derived from "spheno" (meaning a wedge-like arrangement of two "lunes", where each lune consists of a square attached to two triangles - "di" signifying two such complexes) and "cingulum" denoting a crown-like belt of 12 triangles.  
<br><br><b>Faces:</b> 20 triangles and 4 squares | <b>Edges:</b> 38 | <b>Vertices:</b> 16 | <b>Dihedral angles:</b> 124.7°, 148.43°, 133.59°, 166.81°, 154.42°, 134.34° and 100.19°. <a href="https://polytope.miraheze.org/wiki/Disphenocingulum" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>29. Bilunabirotunda</h4>
<a href="vr/j91_bilunabirotunda.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/243A.png" class="foto"></a><img src="ar/243.png" class="qr">
 <br><span class="titulo">J<sub>91</sub></span> The bilunabirotunda, or bilbiro, is one of the Johnson solids. The "birotunda" in the name signifies two rotundas, while the "biluna" refers to the two lunes (sections with a square connecting to two triangles). If the "rotunda" parts of two bilunabirotundae are aligned with opposite corresponding parts of an icosidodecahedron, they touch at the center of the icosidodecahedron because each bilunabirotunda's height in this direction is exactly half that of the icosidodecahedron height.  
<br><br><b>Faces:</b> 8 triangles, 2 squares and 4 pentagons | <b>Edges:</b> 26 | <b>Vertices:</b> 14 | <b>Dihedral angles:</b> 159.09°, 142.62°, 110.95°, 100.81° and 63.43°. <a href="https://polytope.miraheze.org/wiki/Bilunabirotunda" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<hr>
<h4>30. Triangular hebesphenorotunda</h4>
<a href="vr/j92_triangular_hebesphenorotunda.htm" target="_blank" title="3D model" class="fotoA"><img src="ar/244A.png" class="foto"></a><img src="ar/244.png" class="qr">
 <br><span class="titulo">J<sub>92</sub></span> The triangular hebesphenorotunda, or thawro, is one of the Johnson solids. The triangular hebesphenorotunda has a minor connection with the small rhombicosidodecahedron. The triangles and squares forming the "lune" portion of the shape are congruent with corresponding triangles and squares of the small rhombicosidodecahedron.  
<br><br><b>Faces:</b> 13 triangles, 3 squares, 3 pentagons and 1 hexagon | <b>Edges:</b> 36 | <b>Vertices:</b> 18 | <b>Dihedral angles:</b> 159.09°, 142.62°, 138.19°, 110.95° and 100.81°. <a href="https://polytope.miraheze.org/wiki/Triangular_hebesphenorotunda" target="_blank">More...</a><br><a href="ra.html" class="raAR" title="Augmented reality" target="_blank"></a>
<p class="topop"><a href="#p13" class="topo">back to top</a></p>
<hr>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Johnson solids part 3 (J63 - J92): Visualization of polyhedra with Augmented Reality and Virtual Reality</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/johnson3/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> is licensed with a license <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International</a>.

<h4>How to cite this work:</h4> 
<p>Siqueira, P.H., "Johnson solids part 3 (J63 - J92): Visualization of polyhedra with Augmented Reality and Virtual Reality". Available in: <https://paulohscwb.github.io/polyhedra/johnson3/>, July 2023.</p>
<a target="_blank" href="https://doi.org/10.5281/zenodo.8272770"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.8272770.svg" alt="DOI"></a>
<br><br><b>References:</b>
<br>Weisstein, Eric W. "Johnson Solid" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/JohnsonSolid.html" target="_blank">https://mathworld.wolfram.com/JohnsonSolid.html</a>
<br>Polytope Miraheze <a href="https://polytope.miraheze.org/wiki/Johnson_solid" target="_blank">https://polytope.miraheze.org/wiki/Johnson_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Johnson_solid" target="_blank">https://en.wikipedia.org/wiki/Johnson_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
