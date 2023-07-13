<link rel="stylesheet" href="../scripts/style.css">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra/johnson3/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais poliedros:</option>
		<option value="../../archimedes/pt-br/">Arquimedes</option>
		<option value="../../catalan/pt-br/">Catalan</option>
		<option value="../../nonconvex/pt-br/">Não convexos</option>
		<option value="../../platonic/pt-br/">Platão</option>
		<option value="../../polyhedron/pt-br/">Prismas e antiprismas</option>
		<option value="../../quasiregular/pt-br/">Quase regulares</option>
		<option value="../../selfintersect/pt-br/">Auto-interseção</option>
		<option value="../../selfintersectsnub/pt-br/">Auto-interseção snub</option>
		<option value="../../selfintersecttruncated/pt-br/">Auto-interseção truncados</option>
		<option value="../../johnson1/pt-br/">Johnson: 1-32</option>
		<option value="../../johnson2/pt-br/">Johnson: 33-62</option>
		<option disabled value="../../johnson3/pt-br/">Johnson: 63-92</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p13"></p>
  <h2 align="center"><img src="../ar/223A.png" style="margin-bottom:-10px" width="45"> Sólidos de Johnson - parte 3: J<sub>63</sub> - J<sub>92</sub></h2>
  Um sólido de Johnson é um poliedro de face regular estritamente convexo que não é uniforme. Eles receberam o nome de Norman Woodason Johnson, que em 1966 listou pela primeira vez todos os 92 poliedros. Na terceira parte, temos mais 30 sólidos de Johnson. Para visualizar os poliedros de Johnson em RA, visite a página:
<p align="center"><a href="../ra.html" target="_blank">https://paulohscwb.github.io/polyhedra/johnson3/ra.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example9.jpg" width="85%"></p>
<hr>
<h4>1. Icosaedro tridiminuído</h4>
<a href="../vr/j63_tridiminished_icosahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/215A.png" class="foto"></a><img src="../ar/215.png" class="qr">
 <br><span class="titulo">J<sub>63</sub></span> O icosaedro tridiminuído, ou teddi, é um dos 92 sólidos de Johnson. Pode ser construído removendo 3 vértices mutuamente não adjacentes de um icosaedro regular. O nome refere-se a uma maneira de construí-lo, removendo três pirâmides pentagonais J<sub>2</sub> de um icosaedro regular, que substitui três conjuntos de cinco faces triangulares do icosaedro por três faces pentagonais mutuamente adjacentes.
<br><br><b>Faces:</b> 5 triângulos e 3 pentágonos | <b>Arestas:</b> 15 | <b>Vértices:</b> 9 | <b>Ângulos diédricos:</b> 138.19°, 100.81° e 63.43°. <a href="https://polytope.miraheze.org/wiki/Tridiminished_icosahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>2. Icosaedro tridiminuído aumentado</h4>
<a href="../vr/j64_augmented_tridiminished_icosahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/216A.png" class="foto"></a><img src="../ar/216.png" class="qr">
 <br><span class="titulo">J<sub>64</sub></span> O icosaedro tridiminuído aumentado, ou auteddi, é um dos sólidos de Johnson. Ele pode ser construído anexando um tetraedro, visto como uma pirâmide triangular, à face triangular do icosaedro tridiminuído que está conectado apenas aos pentágonos. É o único sólido de Johnson que é construído usando diminuição e aumento, assumindo que nenhuma diminuição e aumento se anulam.
<br><br><b>Faces:</b> 7 triângulos e 3 pentágonos | <b>Arestas:</b> 18 | <b>Vértices:</b> 10 | <b>Ângulos diédricos:</b> 171.34°, 138.19°, 100.81°, 70.53° e 63.43°. <a href="https://polytope.miraheze.org/wiki/Augmented_tridiminished_icosahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>3. Tetraedro truncado aumentado</h4>
<a href="../vr/j65_augmented_truncated_tetrahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/217A.png" class="foto"></a><img src="../ar/217.png" class="qr">
 <br><span class="titulo">J<sub>65</sub></span> O tetraedro truncado aumentado, ou autut, é um dos sólidos de Johnson. Pode ser construído anexando uma cúpula triangular J<sub>3</sub> a uma das faces hexagonais do tetraedro truncado.
<br><br><b>Faces:</b> 8 triângulos, 3 quadrados e 3 hexágonos | <b>Arestas:</b> 27 | <b>Vértices:</b> 15 | <b>Ângulos diédricos:</b> 164.21°, 141.06°, 125.26°, 109.47° e 70.53°. <a href="https://polytope.miraheze.org/wiki/Augmented_truncated_tetrahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>4. Cubo truncado aumentado</h4>
<a href="../vr/j66_augmented_truncated_cube.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/218A.png" class="foto"></a><img src="../ar/218.png" class="qr">
 <br><span class="titulo">J<sub>66</sub></span> O cubo truncado aumentado, ou autic, é um dos sólidos de Johnson. Pode ser construído anexando uma cúpula quadrada J<sub>4</sub> a uma das faces octogonais do cubo truncado.
<br><br><b>Faces:</b> 12 triângulos, 5 quadrados e 5 octógonos | <b>Arestas:</b> 48 | <b>Vértices:</b> 28 | <b>Ângulos diédricos:</b> 170.26°, 144.74°, 135°, 125.26° e 90°. <a href="https://polytope.miraheze.org/wiki/Augmented_truncated_cube" target="_blank">Mais sobre...</a>
<hr>
<h4>5. Cubo truncado biaumentado</h4>
<a href="../vr/j67_biaugmented_truncated_cube.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/219A.png" class="foto"></a><img src="../ar/219.png" class="qr">
 <br><span class="titulo">J<sub>67</sub></span> O cubo truncado biaumentado, ou bautic, é um dos sólidos de Johnson. Ele pode ser construído anexando cúpulas quadradas J<sub>4</sub> a duas faces octogonais opostas do cubo truncado.
<br><br><b>Faces:</b> 16 triângulos, 10 quadrados e 4 octógonos | <b>Arestas:</b> 60 | <b>Vértices:</b> 32 | <b>Ângulos diédricos:</b> 170.26°, 144.74°, 135°, 125.26° e 90°. <a href="https://polytope.miraheze.org/wiki/Biaugmented_truncated_cube" target="_blank">Mais sobre...</a>
<hr>
<h4>6. Dodecaedro truncado aumentado</h4>
<a href="../vr/j68_augmented_truncated_dodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/220A.png" class="foto"></a><img src="../ar/220.png" class="qr">
 <br><span class="titulo">J<sub>68</sub></span> O dodecaedro truncado aumentado, ou autid, é um dos sólidos de Johnson. Pode ser construído anexando uma cúpula pentagonal J<sub>5</sub> a uma das faces decagonais do dodecaedro truncado.
<br><br><b>Faces:</b> 25 triângulos, 5 quadrados, 1 pentágono e 11 decágonos | <b>Arestas:</b> 105 | <b>Vértices:</b> 65 | <b>Ângulos diédricos:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° e 116.57°. <a href="https://polytope.miraheze.org/wiki/Augmented_truncated_dodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>7. Dodecaedro truncado parabiaumentado</h4>
<a href="../vr/j69_parabiaugmented_truncated_dodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/221A.png" class="foto"></a><img src="../ar/221.png" class="qr">
 <br><span class="titulo">J<sub>69</sub></span> O dodecaedro truncado parabiaumentado, ou pabautid, é um dos sólidos de Johnson. Ele pode ser construído anexando duas cúpulas pentagonais J<sub>5</sub> a duas faces decagonais opostas do dodecaedro truncado.
<br><br><b>Faces:</b> 30 triângulos, 10 quadrados, 2 pentágonos e 10 decágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 70 | <b>Ângulos diédricos:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° e 116.57°. <a href="https://polytope.miraheze.org/wiki/Parabiaugmented_truncated_dodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>8. Dodecaedro truncado metabiaumentado</h4>
<a href="../vr/j70_metabiaugmented_truncated_dodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/222A.png" class="foto"></a><img src="../ar/222.png" class="qr">
 <br><span class="titulo">J<sub>70</sub></span> O dodecaedro truncado metabiaumentado, ou mabautid, é um dos sólidos de Johnson. Ele pode ser construído anexando duas cúpulas pentagonais J<sub>5</sub> a duas faces decagonais não opostas e não adjacentes do dodecaedro truncado.
<br><br><b>Faces:</b> 30 triângulos, 10 quadrados, 2 pentágonos e 10 decágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 70 | <b>Ângulos diédricos:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° e 116.57°. <a href="https://polytope.miraheze.org/wiki/Parabiaugmented_truncated_dodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>9. Dodecaedro truncado triaumentado</h4>
<a href="../vr/j71_triaugmented_truncated_dodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/223A.png" class="foto"></a><img src="../ar/223.png" class="qr">
 <br><span class="titulo">J<sub>71</sub></span> O dodecaedro truncado triaumentado, ou tautid, é um dos sólidos de Johnson. Ele pode ser construído anexando cúpulas pentagonais J<sub>5</sub> a três faces decagonais mutuamente não adjacentes do dodecaedro truncado.
<br><br><b>Faces:</b> 35 triângulos, 15 quadrados, 3 pentágonos e 9 decágonos | <b>Arestas:</b> 135 | <b>Vértices:</b> 75 | <b>Ângulos diédricos:</b> 174.34°, 159.09°, 153.94°, 148.28°, 142.62° e 116.57°. <a href="https://polytope.miraheze.org/wiki/Triaugmented_truncated_dodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>10. Rombicosidodecaedro girado</h4>
<a href="../vr/j72_gyrate_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/224A.png" class="foto"></a><img src="../ar/224.png" class="qr">
 <br><span class="titulo">J<sub>72</sub></span> O rombicosidodecaedro girado, ou gyrid, é um dos sólidos de Johnson. Ele pode ser construído girando uma das cúpulas pentagonais do pequeno rombicosidodecaedro em 36°.
<br><br><b>Faces:</b> 20 triângulos, 30 quadrados e 12 pentágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 159.09°, 153.94°, 153.43° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Gyrate_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p13" class="topo">voltar ao topo</a></p>
<hr>
<h4>11. Rombicosidodecaedro parabigirado</h4>
<a href="../vr/j73_parabigyrate_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/225A.png" class="foto"></a><img src="../ar/225.png" class="qr">
 <br><span class="titulo">J<sub>73</sub></span> O rombicosidodecaedro parabigirado, ou pabgyrid, é um dos sólidos de Johnson. Ele pode ser construído girando duas cúpulas pentagonais opostas do pequeno rombicosidodecaedro em 36°.
<br><br><b>Faces:</b> 20 triângulos, 30 quadrados e 12 pentágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 159.09°, 153.94°, 153.43° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Parabigyrate_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>12. Rombicosidodecaedro metabigirado</h4>
<a href="../vr/j74_metabigyrate_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/226A.png" class="foto"></a><img src="../ar/226.png" class="qr">
 <br><span class="titulo">J<sub>74</sub></span> O rombicosidodecaedro metabigirato, ou mabgyrid, é um dos sólidos de Johnson. Ele pode ser construído girando duas cúpulas pentagonais não opostas do pequeno rombicosidodecaedro em 36°.
<br><br><b>Faces:</b> 20 triângulos, 30 quadrados e 12 pentágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 159.09°, 153.94°, 153.43° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Metabigyrate_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>13. Rombicosidodecaedro trigirado</h4>
<a href="../vr/j75_trigyrate_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/227A.png" class="foto"></a><img src="../ar/227.png" class="qr">
 <br><span class="titulo">J<sub>75</sub></span> O rombicosidodecaedro trigirado, ou tagyrid, é um dos sólidos de Johnson. Ele pode ser construído girando três cúpulas pentagonais mutuamente não adjacentes do pequeno rombicosidodecaedro em 36°.
<br><br><b>Faces:</b> 20 triângulos, 30 quadrados e 12 pentágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 159.09°, 153.94°, 153.43° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Trigyrate_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>14. Rombicosidodecaedro diminuído</h4>
<a href="../vr/j76_diminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/228A.png" class="foto"></a><img src="../ar/228.png" class="qr">
 <br><span class="titulo">J<sub>76</sub></span> O rombicosidodecaedro diminuído, ou dirid, é um dos sólidos de Johnson. Pode ser construído removendo uma das cúpulas pentagonais do pequeno rombicosidodecaedro.
<br><br><b>Faces:</b> 15 triângulos, 25 quadrados, 11 pentágonos e 1 decágono | <b>Arestas:</b> 105 | <b>Vértices:</b> 55 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Diminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>15. Rombicosidodecaedro diminuído paragirado</h4>
<a href="../vr/j77_paragyrate_diminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/229A.png" class="foto"></a><img src="../ar/229.png" class="qr">
 <br><span class="titulo">J<sub>77</sub></span> O rombicosidodecaedro diminuído paragirado, ou pagydrid, é um dos sólidos de Johnson. Ele pode ser construído removendo uma das cúpulas pentagonais do pequeno rombicosidodecaedro e girando a cúpula oposta em 36°.
<br><br><b>Faces:</b> 15 triângulos, 25 quadrados, 11 pentágonos e 1 decágono | <b>Arestas:</b> 105 | <b>Vértices:</b> 55 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Paragyrate_diminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>16. Rombicosidodecaedro diminuído metagirado</h4>
<a href="../vr/j78_metagyrate_diminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/230A.png" class="foto"></a><img src="../ar/230.png" class="qr">
 <br><span class="titulo">J<sub>78</sub></span> O rombicosidodecaedro diminuído metagirado, ou magydrid, é um dos sólidos de Johnson. Ele pode ser construído removendo uma das cúpulas pentagonais do pequeno rombicosidodecaedro e girando outra cúpula não oposta em 36°.
<br><br><b>Faces:</b> 15 triângulos, 25 quadrados, 11 pentágonos e 1 decágono | <b>Arestas:</b> 105 | <b>Vértices:</b> 55 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Metagyrate_diminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>17. Rombicosidodecaedro diminuído bigirado</h4>
<a href="../vr/j79_bigyrate_diminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/231A.png" class="foto"></a><img src="../ar/231.png" class="qr">
 <br><span class="titulo">J<sub>79</sub></span> O rombicosidodecaedro diminuído bigirado, ou bagydrid, é um dos sólidos de Johnson. Ele pode ser construído removendo uma das cúpulas pentagonais do pequeno rombicosidodecaedro e girando mais duas cúpulas não opostas em 36°.
<br><br><b>Faces:</b> 15 triângulos, 25 quadrados, 11 pentágonos e 1 decágono | <b>Arestas:</b> 105 | <b>Vértices:</b> 55 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Bigyrate_diminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>18. Rombicosidodecaedro parabidiminuído</h4>
<a href="../vr/j80_parabidiminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/232A.png" class="foto"></a><img src="../ar/232.png" class="qr">
 <br><span class="titulo">J<sub>80</sub></span> O rombicosidodecaedro parabidiminuído, ou pabidrid, é um dos sólidos de Johnson. Ele pode ser construído removendo-se duas cúpulas pentagonais opostas do pequeno rombicosidodecaedro.
<br><br><b>Faces:</b> 10 triângulos, 20 quadrados, 10 pentágonos e 2 decágonos | <b>Arestas:</b> 90 | <b>Vértices:</b> 50 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 116.57° e 148.28°. <a href="https://en.wikipedia.org/wiki/Parabidiminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>19. Rombicosidodecaedro metabidiminuído</h4>
<a href="../vr/j81_metabidiminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/233A.png" class="foto"></a><img src="../ar/233.png" class="qr">
 <br><span class="titulo">J<sub>81</sub></span> O rombicosidodecaedro metabidiminuído, ou mabidrid, é um dos sólidos de Johnson. Ele pode ser construído removendo-se duas cúpulas pentagonais não opostas do pequeno rombicosidodecaedro.
<br><br><b>Faces:</b> 10 triângulos, 20 quadrados, 10 pentágonos e 2 decágonos | <b>Arestas:</b> 90 | <b>Vértices:</b> 50 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Metabidiminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>20. Rombicosidodecaedro bidiminuído girado</h4>
<a href="../vr/j82_gyrate_bidiminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/234A.png" class="foto"></a><img src="../ar/234.png" class="qr">
 <br><span class="titulo">J<sub>82</sub></span> O rombicosidodecaedro bidiminuído girado, ou gybadrid, é um dos sólidos de Johnson. Ele pode ser construído removendo-se duas cúpulas pentagonais não opostas do pequeno rombicosidodecaedro e girando uma terceira cúpula em 36°.
<br><br><b>Faces:</b> 10 triângulos, 20 quadrados, 10 pentágonos e 2 decágonos | <b>Arestas:</b> 90 | <b>Vértices:</b> 50 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 153.43°, 153.94°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Gyrate_bidiminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p13" class="topo">voltar ao topo</a></p>
<hr>
<h4>21. Rombicosidodecaedro tridiminuído</h4>
<a href="../vr/j83_tridiminished_rhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/235A.png" class="foto"></a><img src="../ar/235.png" class="qr">
 <br><span class="titulo">J<sub>83</sub></span> O rombicosidodecaedro tridiminuído, ou tedrid, é um dos sólidos de Johnson. Pode ser construído removendo três cúpulas pentagonais do pequeno rombicosidodecaedro.
<br><br><b>Faces:</b> 5 triângulos, 15 quadrados, 9 pentágonos e 3 decágonos | <b>Arestas:</b> 75 | <b>Vértices:</b> 45 | <b>Ângulos diédricos:</b> 159.09°, 121.72°, 116.57° e 148.28°. <a href="https://polytope.miraheze.org/wiki/Tridiminished_rhombicosidodecahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>22. Disfenóide snub</h4>
<a href="../vr/j84_snub_disphenoid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/236A.png" class="foto"></a><img src="../ar/236.png" class="qr">
 <br><span class="titulo">J<sub>84</sub></span> O disfenóide snub, ou snadow, é um dos sólidos de Johnson. Pode ser construído a partir de um tetraedro, visto como um antiprisma digonal ou disfenóide, expandindo as duas metades para fora e inserindo um conjunto de 8 triângulos entre as metades.
<br><br><b>Faces:</b> 12 triângulos | <b>Arestas:</b> 18 | <b>Vértices:</b> 8 | <b>Ângulos diédricos:</b> 96.2°, 121.74° e 166.44°. <a href="https://polytope.miraheze.org/wiki/Snub_disphenoid" target="_blank">Mais sobre...</a>
<hr>
<h4>23. Antiprisma quadrado snub</h4>
<a href="../vr/j85_snub_square_antiprism.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/237A.png" class="foto"></a><img src="../ar/237.png" class="qr">
 <br><span class="titulo">J<sub>85</sub></span> O antiprisma quadrado snub, ou snisquap, é um dos sólidos de Johnson. Ele pode ser construído a partir de um antiprisma quadrado expandindo as duas metades para fora e inserindo um conjunto de 16 triângulos entre as metades.
<br><br><b>Faces:</b> 24 triângulos e 2 quadrados | <b>Arestas:</b> 40 | <b>Vértices:</b> 16 | <b>Ângulos diédricos:</b> 144.14°, 119.11°, 164.26°, 145.44° e 114.65°. <a href="https://polytope.miraheze.org/wiki/Snub_square_antiprism" target="_blank">Mais sobre...</a>
<hr>
<h4>24. Esfenocorona</h4>
<a href="../vr/j86_sphenocorona.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/238A.png" class="foto"></a><img src="../ar/238.png" class="qr">
 <br><span class="titulo">J<sub>86</sub></span> A esfenocorona, ou waco, é um dos sólidos de Johnson. É um dos vários poliedros próximos ao final da lista de sólidos de Johnson sem alguma relação óbvia com um dos poliedros uniformes. O nome é derivado de "spheno" (que significa um arranjo em forma de cunha de duas "luas", onde cada lua consiste em um quadrado ligado a dois triângulos) e "corona" denotando uma estrutura em forma de coroa composta por 8 triângulos.
<br><br><b>Faces:</b> 12 triângulos e 2 quadrados | <b>Arestas:</b> 22 | <b>Vértices:</b> 10 | <b>Ângulos diédricos:</b> 143.48°, 135.99°, 114.74°, 159.89°, 118.89°, 131.44°, 97.46°, 109.52° e 117.02°. <a href="https://polytope.miraheze.org/wiki/Sphenocorona" target="_blank">Mais sobre...</a>
<hr>
<h4>25. Esfenocorona aumentada</h4>
<a href="../vr/j87_augmented_sphenocorona.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/239A.png" class="foto"></a><img src="../ar/239.png" class="qr">
 <br><span class="titulo">J<sub>87</sub></span> A esfenocorona aumentada, ou auwaco, é um dos sólidos de Johnson. Pode ser construída anexando uma pirâmide quadrada a uma das faces quadradas da esfenocorona J<sub>86</sub>.
<br><br><b>Faces:</b> 16 triângulos e 1 quadrado | <b>Arestas:</b> 26 | <b>Vértices:</b> 11 | <b>Ângulos diédricos:</b> 143.48°, 135.99°, 114.74°, 159.89°, 118.89°, 131.44°, 97.46°, 109.52°, 164.26°, 171.75°, e 152.19°. <a href="https://polytope.miraheze.org/wiki/Augmented_sphenocorona" target="_blank">Mais sobre...</a>
<hr>
<h4>26. Esfenomegacorona</h4>
<a href="../vr/j88_sphenomegacorona.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/240A.png" class="foto"></a><img src="../ar/240.png" class="qr">
 <br><span class="titulo">J<sub>88</sub></span> A esfenomegacorona, ou wamco, é um dos sólidos de Johnson. O nome é derivado de "spheno", que significa um arranjo em forma de cunha de duas "luas", onde cada lua consiste em um quadrado ligado a dois triângulos, e "megacorona", denotando uma grande estrutura em forma de coroa composta por 12 triângulos, oposta à menor "coroa" de 8 triângulos encontrados na esfenocorona.
<br><br><b>Faces:</b> 16 triângulos e 2 quadrados | <b>Arestas:</b> 28 | <b>Vértices:</b> 12 | <b>Ângulos diédricos:</b> 86.72°, 117.36°, 129.44°, 137.24°, 143.74°, 154.72°, 161.48° e 171.65°. <a href="https://polytope.miraheze.org/wiki/Sphenomegacorona" target="_blank">Mais sobre...</a>
<hr>
<h4>27. Hebesfenomegacorona</h4>
<a href="../vr/j89_hebesphenomegacorona.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/241A.png" class="foto"></a><img src="../ar/241.png" class="qr">
 <br><span class="titulo">J<sub>89</sub></span> A hebesfenomegacorona, ou hawmco, é um dos sólidos de Johnson. O nome é derivado de "hebespheno" (que significa um arranjo em forma de cunha de três "luas", onde cada lua consiste em um quadrado ligado a dois triângulos) e "megacorona" denotando uma estrutura em forma de coroa composta por 12 triângulos (em oposição à menor "coroa" de 8 triângulos encontrados na esfenocorona). Tem uma distante relação com o icosaedro: se o quadrado do meio for contraído até uma aresta de modo que os quadrados vizinhos se tornem triângulos e os triângulos vizinhos se toquem, o resultado é um icosaedro.
<br><br><b>Faces:</b> 18 triângulos e 3 quadrados | <b>Arestas:</b> 33 | <b>Vértices:</b> 14 | <b>Ângulos diédricos:</b> 157.15°, 141.34°, 128.5°, 111.73°, 149.56°, 101.29°, 152.98°, 102.52° e 133.97°. <a href="https://polytope.miraheze.org/wiki/Hebesphenomegacorona" target="_blank">Mais sobre...</a>
<hr>
<h4>28. Disphenocingulum</h4>
<a href="../vr/j90_disphenocingulum.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/242A.png" class="foto"></a><img src="../ar/242.png" class="qr">
 <br><span class="titulo">J<sub>90</sub></span> O disphenocingulum, ou dawci, é um dos sólidos de Johnson. O nome é derivado de "spheno" (que significa um arranjo em forma de cunha de duas "luas", onde cada lua consiste em um quadrado ligado a dois triângulos - "di" significando dois desses complexos) e "cingulum" denotando uma forma de coroa de 12 triângulos.
<br><br><b>Faces:</b> 20 triângulos e 4 quadrados | <b>Arestas:</b> 38 | <b>Vértices:</b> 16 | <b>Ângulos diédricos:</b> 124.7°, 148.43°, 133.59°, 166.81°, 154.42°, 134.34° e 100.19°. <a href="https://polytope.miraheze.org/wiki/Disphenocingulum" target="_blank">Mais sobre...</a>
<hr>
<h4>29. Birotunda bilunar</h4>
<a href="../vr/j91_bilunabirotunda.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/243A.png" class="foto"></a><img src="../ar/243.png" class="qr">
 <br><span class="titulo">J<sub>91</sub></span> A birotunda bilunar, ou bilbiro, é um dos sólidos de Johnson. A "birotunda" no nome significa essas duas áreas, enquanto a "bilunar" se refere às duas luas (seções com um quadrado conectando-se a dois triângulos). Se as partes "rotunda" de dois bilunabirotundae estiverem alinhadas com as partes correspondentes opostas de um icosidodecaedro, elas se tocam no centro do icosidodecaedro porque a altura de cada bilunabirotunda nessa direção é exatamente a metade da altura do icosidodecaedro.
<br><br><b>Faces:</b> 8 triângulos, 2 quadrados e 4 pentágonos | <b>Arestas:</b> 26 | <b>Vértices:</b> 14 | <b>Ângulos diédricos:</b> 159.09°, 142.62°, 110.95°, 100.81° e 63.43°. <a href="https://polytope.miraheze.org/wiki/Bilunabirotunda" target="_blank">Mais sobre...</a>
<hr>
<h4>30. Hebesfenorotunda triangular</h4>
<a href="../vr/j92_triangular_hebesphenorotunda.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/244A.png" class="foto"></a><img src="../ar/244.png" class="qr">
 <br><span class="titulo">J<sub>92</sub></span> A hebesfenorotunda triangular, ou thawro, é um dos sólidos de Johnson. A hebesfenorotunda triangular também tem uma conexão com o pequeno rombicosidodecaedro. Os triângulos e quadrados que formam a porção "lunar" da forma são congruentes com os triângulos e quadrados correspondentes do pequeno rombicosidodecaedro.
<br><br><b>Faces:</b> 13 triângulos, 3 quadrados, 3 pentágonos e 1 hexágono | <b>Arestas:</b> 36 | <b>Vértices:</b> 18 | <b>Ângulos diédricos:</b> 159.09°, 142.62°, 138.19°, 110.95° e 100.81°.. <a href="https://polytope.miraheze.org/wiki/Triangular_hebesphenorotunda" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p13" class="topo">voltar ao topo</a></p>

 
<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Polyhedra: Johnson solids - part 3</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/johnson3/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Polyhedra: Johnson solids - part 3". Disponível em: <https://paulohscwb.github.io/polyhedra/johnson3/>, Julho de 2023.</p>

<br><b>Referências:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
