<link rel="stylesheet" href="../scripts/style.css">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra/johnson1/">english version</a>
<form style="margin: 0 auto; float:right; text-align:right; width:100%; margin-bottom:15px;">
	<select id="url" onchange="urlHandler(this.value)" style="color:royalblue;">
		<option disabled selected>Mais poliedros:</option>
		<option value="../../archimedes/pt-br/">Arquimedes</option>
		<option value="../../catalan/pt-br/">Catalan</option>
		<option value="../../nonconvex/pt-br/">Não convexos</option>
		<option value="../../platonic/pt-br/">Platão</option>
		<option disabled value="../../polyhedron/pt-br/">Prismas e antiprismas</option>
		<option value="../../quasiregular/pt-br/">Quase regulares</option>
		<option value="../../selfintersect/pt-br/">Auto-interseção</option>
		<option value="../../selfintersectsnub/pt-br/">Auto-interseção snub</option>
		<option value="../../selfintersecttruncated/pt-br/">Auto-interseção truncados</option>
		<option value="../../johnson1/pt-br/">Johnson: 1-32</option>
		<option value="../../johnson2/pt-br/">Johnson: 33-62</option>
		<option value="../../johnson3/pt-br/">Johnson: 63-92</option>
	</select>
</form>
<script>
function urlHandler(value) {                               
    window.location.assign(`${value}`);
}
</script>

<p id="p11"></p>
  <h2 align="center">Sólidos de Johnson - parte 1: J<sub>1</sub> - J<sub>32</sub></h2>
  Um sólido de Johnson é um poliedro de face regular estritamente convexo que não é uniforme. Eles receberam o nome de Norman Woodason Johnson, que em 1966 listou pela primeira vez todos os 92 poliedros. Nesta primeira parte, temos os primeiros 32 sólidos de Johnson. Para visualizar os poliedros de Johnson em RA, visite a página:
<p align="center"><a href="../ra.html" target="_blank">https://paulohscwb.github.io/polyhedra/johnson1/ra.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example9.jpg" width="85%"></p>
<hr>
<h4>1. Pirâmide quadrada</h4>
<a href="../vr/j1_square_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/49A.png" class="foto"></a><img src="../ar/49.png" class="qr">
 <br><span class="titulo">J<sub>1</sub></span> A pirâmide quadrada, ou squippy, é uma pirâmide com uma base quadrada e 4 triângulos como lados. A versão com triângulos equiláteros como lados é o primeiro dos 92 sólidos de Johnson. Duas pirâmides quadradas podem ser unidas em sua base quadrada para formar um octaedro regular.
<br><br><b>Faces:</b> 4 triângulos (faces laterais) e 1 quadrado (base) | <b>Arestas:</b> 8 | <b>Vértices:</b> 5 | <b>Ângulos diédricos:</b> 109.47° e 54.74°. <a href="https://polytope.miraheze.org/wiki/Square_pyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>2. Pirâmide pentagonal</h4>
<a href="../vr/j2_pentagonal_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/48A.png" class="foto"></a><img src="../ar/48.png" class="qr">
 <br><span class="titulo">J<sub>2</sub></span> A pirâmide pentagonal, ou peppy, é uma pirâmide com uma base pentagonal e 5 triângulos como lados. A versão com triângulos equiláteros como lados é o segundo dos 92 sólidos de Johnson. É a tampa do primeiro vértice do icosaedro. Um icosaedro regular pode ser construído anexando duas pirâmides pentagonais às bases de um antiprisma pentagonal.
<br><br><b>Faces:</b> 5 triângulos (faces laterais) e 1 pentágono (base) | <b>Arestas:</b> 10 | <b>Vértices:</b> 6 | <b>Ângulos diédricos:</b> 138.19° e 37.38°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_pyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>3. Cúpula triangular</h4>
<a href="../vr/j3_triangular_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/47A.png" class="foto"></a><img src="../ar/47.png" class="qr">
 <br><span class="titulo">J<sub>3</sub></span> A cúpula triangular, ou tricu, é um dos 92 sólidos de Johnson. É uma cúpula baseada no triângulo equilátero e é uma das três cúpulas sólidas de Johnson, sendo as outras duas a cúpula quadrada e a cúpula pentagonal.
<br><br><b>Faces:</b> 4 triângulos, 3 quadrados e 1 hexágono | <b>Arestas:</b> 15 | <b>Vértices:</b> 9 | <b>Ângulos diédricos:</b> 125.26°, 70.53° e 54.74°. <a href="https://polytope.miraheze.org/wiki/Triangular_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>4. Cúpula quadrada</h4>
<a href="../vr/j4_square_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/46A.png" class="foto"></a><img src="../ar/46.png" class="qr">
 <br><span class="titulo">J<sub>4</sub></span> A cúpula quadrada, ou squacu, é um dos sólidos de Johnson. É uma cúpula baseada no quadrado e é uma das três cúpulas sólidas de Johnson. Pode ser obtida como um segmento do pequeno rombicuboctaedro, quando considerado como uma ortobicúpula quadrada alongada.
<br><br><b>Faces:</b> 4 triângulos, 5 quadrados e 1 octógono | <b>Arestas:</b> 20 | <b>Vértices:</b> 12 | <b>Ângulos diédricos:</b> 144.74°, 135°, 45° e 54.74°. <a href="https://polytope.miraheze.org/wiki/Square_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>5. Cúpula pentagonal</h4>
<a href="../vr/j5_pentagonal_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/45A.png" class="foto"></a><img src="../ar/45.png" class="qr">
 <br><span class="titulo">J<sub>5</sub></span> A cúpula pentagonal, ou pecu, é um dos sólidos de Johnson. É uma cúpula baseada no pentágono e é uma das três cúpulas sólidas de Johnson. Pode ser obtido como um segmento do pequeno rombicosidodecaedro.
<br><br><b>Faces:</b> 5 triângulos, 5 quadrados, 1 pentágono e 1 decágono | <b>Arestas:</b> 25 | <b>Vértices:</b> 15 | <b>Ângulos diédricos:</b> 159.09°, 148.28°, 37.38° e 31.72°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>6. Rotunda pentagonal</h4>
<a href="../vr/j6_pentagonal_rotunda.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/44A.png" class="foto"></a><img src="../ar/44.png" class="qr">
 <br><span class="titulo">J<sub>6</sub></span> A rotunda pentagonal, ou pero, é um dos sólidos de Johnson. É uma rotunda baseada em um pentágono e a única rotunda que resulta em um sólido de Johnson. Pode ser construída cortando um icosidodecaedro ao meio ao longo de um de seus círculos das arestas dos decágonos.
<br><br><b>Faces:</b> 10 triângulos, 6 pentágonos e 1 decágono | <b>Arestas:</b> 35 | <b>Vértices:</b> 20 | <b>Ângulos diédricos:</b> 142.62°, 79.19° e 63.43°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_rotunda" target="_blank">Mais sobre...</a>
<hr>
<h4>7. Pirâmide triangular alongada</h4>
<a href="../vr/j7_elongated_triangular_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/43A.png" class="foto"></a><img src="../ar/43.png" class="qr">
 <br><span class="titulo">J<sub>7</sub></span> A pirâmide triangular alongada, ou etripy, é um dos sólidos de Johnson. Pode ser construída anexando um prisma triangular a uma das faces do tetraedro, visto como uma pirâmide triangular. Se um segundo tetraedro estiver ligado à outra base triangular do prisma, o resultado é a bipirâmide triangular alongada.
<br><br><b>Faces:</b> 4 triângulos e 3 quadrados | <b>Arestas:</b> 12 | <b>Vértices:</b> 7 | <b>Ângulos diédricos:</b> 160.53°, 90°, 60° e 70.53°. <a href="https://polytope.miraheze.org/wiki/Elongated_triangular_pyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>8. Pirâmide quadrada alongada</h4>
<a href="../vr/j8_elongated_square_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/42A.png" class="foto"></a><img src="../ar/42.png" class="qr">
 <br><span class="titulo">J<sub>8</sub></span> A pirâmide quadrada alongada, ou esquipy, é um dos sólidos de Johnson. Pode ser construída anexando um cubo, visto como um prisma quadrado, à base da pirâmide quadrada. Se uma segunda pirâmide for anexada à face oposta do cubo, o resultado é a bipirâmide quadrada alongada.
<br><br><b>Faces:</b> 4 triângulos e 5 quadrados | <b>Arestas:</b> 16 | <b>Vértices:</b> 9 | <b>Ângulos diédricos:</b> 144.74°, 90° e 109.47°. <a href="https://polytope.miraheze.org/wiki/Elongated_square_pyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>9. Pirâmide pentagonal alongada</h4>
<a href="../vr/j9_elongated_pentagonal_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/41A.png" class="foto"></a><img src="../ar/41.png" class="qr">
 <br><span class="titulo">J<sub>9</sub></span> A pirâmide pentagonal alongada, ou epeppy, é um dos sólidos de Johnson. Pode ser construída anexando um prisma pentagonal à base da pirâmide pentagonal. Se uma segunda pirâmide estiver ligada à outra base do prisma pentagonal, o resultado é a bipirâmide pentagonal alongada.
<br><br><b>Faces:</b> 5 triângulos, 5 quadrados e 1 pentágono | <b>Arestas:</b> 20 | <b>Vértices:</b> 11 | <b>Ângulos diédricos:</b> 138.19°, 90°, 108° e 127.38°. <a href="https://polytope.miraheze.org/wiki/Elongated_pentagonal_pyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>10. Pirâmide quadrada giralongada</h4>
<a href="../vr/j10_gyroelongated_square_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/40A.png" class="foto"></a><img src="../ar/40.png" class="qr">
 <br><span class="titulo">J<sub>10</sub></span> A pirâmide quadrada giralongada, ou gyesp, é um dos sólidos de Johnson. Pode ser construída anexando um antiprisma quadrado à base da pirâmide quadrada. Se uma segunda pirâmide estiver ligada à outra base do antiprisma quadrado, o resultado é a bipirâmide quadrada giralongada.
<br><br><b>Faces:</b> 12 triângulos e 1 quadrado | <b>Arestas:</b> 20 | <b>Vértices:</b> 9 | <b>Ângulos diédricos:</b> 158.57°, 127.55°, 109.47° e 103.84°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_square_pyramid" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p11" class="topo">voltar ao topo</a></p>
<hr>
<h4>11. Pirâmide pentagonal giralongada</h4>
<a href="../vr/j11_gyroelongated_pentagonal_pyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/39A.png" class="foto"></a><img src="../ar/39.png" class="qr">
 <br><span class="titulo">J<sub>11</sub></span> A pirâmide pentagonal giralongada, ou gyepic, é um dos sólidos de Johnson. Pode ser construída anexando um antiprisma pentagonal à base da pirâmide pentagonal. Alternativamente, pode ser construída diminuindo um vértice do icosaedro regular, razão pela qual esse poliedro também pode ser chamado de icosaedro diminuído.
<br><br><b>Faces:</b> 15 triângulos e 1 pentágono | <b>Arestas:</b> 25 | <b>Vértices:</b> 11 | <b>Ângulos diédricos:</b> 138.19° e 100.81°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_pentagonal_pyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>12. Dipirâmide triangular</h4>
<a href="../vr/j12_triangular_dipyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/38A.png" class="foto"></a><img src="../ar/38.png" class="qr">
 <br><span class="titulo">J<sub>12</sub></span> A dipirâmide triangular, também chamada de tegum triangular ou bipirâmide triangular ou trit, é um dos sólidos de Johnson. Pode ser construída unindo dois tetraedros regulares em uma de suas faces. É uma das três dipirâmides (tegums) poligonais regulares; as outras são o octaedro regular (tegum quadrado) e o tegum pentagonal.
<br><br><b>Faces:</b> 6 triângulos | <b>Arestas:</b> 9 | <b>Vértices:</b> 5 | <b>Ângulos diédricos:</b> 141.06° e 70.53°. <a href="https://polytope.miraheze.org/wiki/Triangular_tegum" target="_blank">Mais sobre...</a>
<hr>
<h4>13. Dipirâmide pentagonal</h4>
<a href="../vr/j13_pentagonal_dipyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/37A.png" class="foto"></a><img src="../ar/37.png" class="qr">
 <br><span class="titulo">J<sub>13</sub></span> A dipirâmide pentagonal, também chamada de bipirâmide pentagonal ou tegum pentagonal ou pet, é um dos sólidos de Johnson. Pode ser construída unindo duas pirâmides pentagonais em suas bases. É uma das três dipirâmides poligonais regulares (tegums).
<br><br><b>Faces:</b> 10 triângulos | <b>Arestas:</b> 15 | <b>Vértices:</b> 7 | <b>Ângulos diédricos:</b> 138.19° e 74.75°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_tegum" target="_blank">Mais sobre...</a>
<hr>
<h4>14. Dipirâmide triangular alongada</h4>
<a href="../vr/j14_elongated_triangular_dipyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/36A.png" class="foto"></a><img src="../ar/36.png" class="qr">
 <br><span class="titulo">J<sub>14</sub></span> A dipirâmide triangular alongada, também chamada de bipirâmide triangular alongada ou etidpy, é um dos sólidos de Johnson. Pode ser construída inserindo um prisma triangular entre as duas metades da dipirâmide triangular.
<br><br><b>Faces:</b> 6 triângulos e 3 quadrados | <b>Arestas:</b> 15 | <b>Vértices:</b> 8 | <b>Ângulos diédricos:</b> 160.53°, 60° e 70.53°. <a href="https://polytope.miraheze.org/wiki/Elongated_triangular_bipyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>15. Dipirâmide quadrada alongada</h4>
<a href="../vr/j15_elongated_square_dipyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/35A.png" class="foto"></a><img src="../ar/35.png" class="qr">
 <br><span class="titulo">J<sub>15</sub></span> A dipirâmide quadrada alongada, também chamada de bipirâmide quadrada alongada ou esquidpy, é um dos sólidos de Johnson. Pode ser construída inserindo um cubo, visto como um prisma quadrado, entre as duas metades piramidais do octaedro regular, visto como uma dipirâmide quadrada.
<br><br><b>Faces:</b> 8 triângulos e 4 quadrados | <b>Arestas:</b> 20 | <b>Vértices:</b> 10 | <b>Ângulos diédricos:</b> 144.74°, 90° e 109.47°. <a href="https://polytope.miraheze.org/wiki/Elongated_square_bipyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>16. Dipirâmide pentagonal alongada</h4>
<a href="../vr/j16_elongated_pentagonal_dipyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/34A.png" class="foto"></a><img src="../ar/34.png" class="qr">
 <br><span class="titulo">J<sub>16</sub></span> A dipirâmide pentagonal alongada, também chamada de bipirâmide pentagonal alongada ou epedpy, é um dos sólidos de Johnson. Pode ser construída inserindo um prisma pentagonal entre as metades da dipirâmide pentagonal.
<br><br><b>Faces:</b> 10 triângulos e 5 quadrados | <b>Arestas:</b> 25 | <b>Vértices:</b> 12 | <b>Ângulos diédricos:</b> 138.19°, 108° e 127.38°. <a href="https://polytope.miraheze.org/wiki/Elongated_pentagonal_bipyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>17. Dipirâmide quadrada giralongada</h4>
<a href="../vr/j17_gyroelongated_square_dipyramid.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/33A.png" class="foto"></a><img src="../ar/33.png" class="qr">
 <br><span class="titulo">J<sub>17</sub></span> A dipirâmide quadrada giralongada, também chamada de bipirâmide quadrada giralongada ou gyesqidpy, é um dos sólidos de Johnson. Pode ser construída inserindo um antiprisma quadrado entre as duas metades piramidais do octaedro regular, visto como uma dipirâmide quadrada.
<br><br><b>Faces:</b> 16 triângulos | <b>Arestas:</b> 24 | <b>Vértices:</b> 10 | <b>Ângulos diédricos:</b> 158.57°, 127.55° e 109.47°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_square_bipyramid" target="_blank">Mais sobre...</a>
<hr>
<h4>18. Cúpula triangular alongada</h4>
<a href="../vr/j18_elongated_triangular_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/32A.png" class="foto"></a><img src="../ar/32.png" class="qr">
 <br><span class="titulo">J<sub>18</sub></span> A cúpula triangular alongada, também chamada de etcu, é um dos sólidos de Johnson. Pode ser construída anexando um prisma hexagonal à base hexagonal da cúpula triangular. Se uma segunda cúpula for anexada à outra base hexagonal do prisma na mesma orientação, o resultado é a ortobicúpula triangular alongada.
<br><br><b>Faces:</b> 4 triângulos, 9 quadrados e 1 hexágono | <b>Arestas:</b> 27 | <b>Vértices:</b> 15 | <b>Ângulos diédricos:</b> 160.53°, 144.74°, 120°, 60° e 125.26°. <a href="https://polytope.miraheze.org/wiki/Elongated_triangular_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>19. Cúpula quadrada alongada</h4>
<a href="../vr/j19_elongated_square_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/31A.png" class="foto"></a><img src="../ar/31.png" class="qr">
 <br><span class="titulo">J<sub>19</sub></span> A cúpula quadrada alongada, ou escu, é um dos sólidos de Johnson. Pode ser construída anexando um prisma octogonal à base octogonal da cúpula quadrada. Também pode ser vista como um pequeno rombicuboctaedro diminuído, formado cortando um de seus segmentos quadrados de cúpula.
<br><br><b>Faces:</b> 4 triângulos, 13 quadrados e 1 octógono | <b>Arestas:</b> 36 | <b>Vértices:</b> 20 | <b>Ângulos diédricos:</b> 144.74°, 135° e 90°. <a href="https://polytope.miraheze.org/wiki/Elongated_square_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>20. Cúpula pentagonal alongada</h4>
<a href="../vr/j20_elongated_pentagonal_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/30A.png" class="foto"></a><img src="../ar/30.png" class="qr">
 <br><span class="titulo">J<sub>20</sub></span> A cúpula pentagonal alongada, ou epcu, é um dos sólidos de Johnson. Pode ser construída anexando um prisma decagonal à base decagonal da cúpula pentagonal. Se uma segunda cúpula for anexada à outra base decagonal do prisma na mesma orientação, o resultado é a ortobicúpula pentagonal alongada.
<br><br><b>Faces:</b> 5 triângulos, 15 quadrados, 1 pentágono e 1 decágono | <b>Arestas:</b> 45 | <b>Vértices:</b> 25 | <b>Ângulos diédricos:</b> 159.09°, 148.28°, 144°, 127.38°, 121.72° e 90°. <a href="https://polytope.miraheze.org/wiki/Elongated_pentagonal_cúpula" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p11" class="topo">voltar ao topo</a></p>
<hr>
<h4>21. Rotunda pentagonal alongada</h4>
<a href="../vr/j21_elongated_pentagonal_rotunda.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/29A.png" class="foto"></a><img src="../ar/29.png" class="qr">
 <br><span class="titulo">J<sub>21</sub></span> A rotunda pentagonal alongada, ou epro, é um dos sólidos de Johnson. Pode ser construída anexando um prisma decagonal à base decagonal da rotunda pentagonal. Se uma segunda rotunda for anexada à outra base decagonal do prisma na mesma orientação, o resultado é a ortobirotunda pentagonal alongada.
<br><br><b>Faces:</b> 10 triângulos, 10 quadrados, 6 pentágonos e 1 decágono | <b>Arestas:</b> 55 | <b>Vértices:</b> 30 | <b>Ângulos diédricos:</b> 169.19°, 153.43°, 144°, 142.62° e 90°. <a href="https://polytope.miraheze.org/wiki/Elongated_pentagonal_rotunda" target="_blank">Mais sobre...</a>
<hr>
<h4>22. Cúpula triangular giralongada</h4>
<a href="../vr/j22_gyroelongated_triangular_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/28A.png" class="foto"></a><img src="../ar/28.png" class="qr">
 <br><span class="titulo">J<sub>22</sub></span> A cúpula triangular giralongada, ou gyetcu, é um dos sólidos de Johnson. Pode ser construída anexando um antiprisma hexagonal à base hexagonal da cúpula triangular. Se uma segunda cúpula for anexada à outra base hexagonal do antiprisma, o resultado é a bicúpula triangular giralongada.
<br><br><b>Faces:</b> 16 triângulos, 3 quadrados e 1 hexágono | <b>Arestas:</b> 33 | <b>Vértices:</b> 15 | <b>Ângulos diédricos:</b> 169.43°, 153.64°, 145.22°, 125.26° e 98.9°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_triangular_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>23. Cúpula quadrada giralongada</h4>
<a href="../vr/j23_gyroelongated_square_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/27A.png" class="foto"></a><img src="../ar/27.png" class="qr">
 <br><span class="titulo">J<sub>23</sub></span> A cúpula quadrada giralongada, ou gyescu, é um dos sólidos de Johnson. Pode ser construída anexando um antiprisma octogonal à base octogonal da cúpula quadrada. Se uma segunda cúpula for anexada à outra base octogonal do antiprisma, o resultado é a bicúpula quadrada giralongada.
<br><br><b>Faces:</b> 20 triângulos, 5 quadrados e 1 octógono | <b>Arestas:</b> 44 | <b>Vértices:</b> 20 | <b>Ângulos diédricos:</b> 153.96°, 151.33°, 144.74°, 141.59°, 135° e 96.59°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_square_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>24. Cúpula pentagonal giralongada</h4>
<a href="../vr/j24_gyroelongated_pentagonal_cupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/26A.png" class="foto"></a><img src="../ar/26.png" class="qr">
 <br><span class="titulo">J<sub>24</sub></span> A cúpula pentagonal giralongada, ou gyepcu, é um dos sólidos de Johnson. Pode ser construída anexando um antiprisma decagonal à base decagonal da cúpula pentagonal. Se uma segunda cúpula for anexada à outra base decagonal do antiprisma, o resultado é a bicúpula pentagonal giralongada.
<br><br><b>Faces:</b> 25 triângulos, 5 quadrados, 1 pentágono e 1 decágono | <b>Arestas:</b> 55 | <b>Vértices:</b> 25 | <b>Ângulos diédricos:</b> 159.19°, 159.09°, 148.28°, 132.62°, 126.96° e 95.25°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_pentagonal_cúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>25. Rotunda pentagonal giralongada</h4>
<a href="../vr/j25_gyroelongated_pentagonal_rotunda.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/25A.png" class="foto"></a><img src="../ar/25.png" class="qr">
 <br><span class="titulo">J<sub>25</sub></span> A rotunda pentagonal giralongada, ou gyepro, é um dos sólidos de Johnson. Pode ser construída anexando um antiprisma decagonal à base decagonal da rotunda pentagonal. Se uma segunda rotunda for anexada à outra base decagonal do antiprisma, o resultado é a birotunda pentagonal giralongada.
<br><br><b>Faces:</b> 30 triângulos, 6 pentágonos e 1 decágono | <b>Arestas:</b> 65 | <b>Vértices:</b> 30 | <b>Ângulos diédricos:</b> 174.43°, 159.19°, 158.68°, 142.62° e 95.25°. <a href="https://polytope.miraheze.org/wiki/Gyroelongated_pentagonal_rotunda" target="_blank">Mais sobre...</a>
<hr>
<h4>26. Girobiprisma</h4>
<a href="../vr/j26_gyrobifastigium.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/24A.png" class="foto"></a><img src="../ar/24.png" class="qr">
 <br><span class="titulo">J<sub>26</sub></span> O Girobiprisma, ou gybef, é um dos sólidos de Johnson. Ele pode ser construído anexando dois prismas triangulares, vistos como cúpulas digonais, em uma de suas faces quadradas, de modo que suas arestas opostas sejam perpendiculares. Como tal, poderia ser considerado uma girobicúpula digonal.
<br><br><b>Faces:</b> 4 triângulos e 4 quadrados | <b>Arestas:</b> 14 | <b>Vértices:</b> 8 | <b>Ângulos diédricos:</b> 150°, 90° e 60°. <a href="https://polytope.miraheze.org/wiki/Gyrobifastigium" target="_blank">Mais sobre...</a>
<hr>
<h4>27. Ortobicúpula triangular</h4>
<a href="../vr/j27_triangular_orthobicupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/23A.png" class="foto"></a><img src="../ar/23.png" class="qr">
 <br><span class="titulo">J<sub>27</sub></span> A ortobicúpula triangular, ou tobcu, é um dos sólidos de Johnson. Pode ser construída anexando duas cúpulas triangulares em suas bases hexagonais, de modo que as duas bases triangulares estejam na mesma orientação. Se as cúpulas forem unidas de modo que as bases sejam giradas 60°, o resultado é a girobicúpula triangular, mais conhecida como cuboctaedro uniforme.
<br><br><b>Faces:</b> 8 triângulos e 6 quadrados | <b>Arestas:</b> 24 | <b>Vértices:</b> 12 | <b>Ângulos diédricos:</b> 141.06°, 125.26° e 109.47°. <a href="https://polytope.miraheze.org/wiki/Triangular_orthobicúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>28. Ortobicúpula quadrada</h4>
<a href="../vr/j28_square_orthobicupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/22A.png" class="foto"></a><img src="../ar/22.png" class="qr">
 <br><span class="titulo">J<sub>28</sub></span> A ortobicúpula quadrada, ou squobcu, é um dos sólidos de Johnson. Pode ser construída anexando duas cúpulas quadradas em suas bases octogonais, de modo que as duas bases quadradas estejam na mesma orientação. Se as cúpulas forem unidas de modo que as bases sejam giradas 45°, o resultado é a girobicúpula quadrada.
<br><br><b>Faces:</b> 8 triângulos e 10 quadrados | <b>Arestas:</b> 32 | <b>Vértices:</b> 16 | <b>Ângulos diédricos:</b> 144.74°, 135°, 90° e 109.47°. <a href="https://polytope.miraheze.org/wiki/Square_orthobicúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>29. Girobicúpula quadrada</h4>
<a href="../vr/j29_square_gyrobicupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/21A.png" class="foto"></a><img src="../ar/21.png" class="qr">
 <br><span class="titulo">J<sub>29</sub></span> A girobicúpula quadrada, ou squigybcu, é um dos sólidos de Johnson. Pode ser construída anexando duas cúpulas quadradas em suas bases octogonais, de modo que as duas bases quadradas sejam giradas 45° uma da outra. É topologicamente equivalente ao antiprisma quadrado retificado.
<br><br><b>Faces:</b> 8 triângulos e 10 quadrados | <b>Arestas:</b> 32 | <b>Vértices:</b> 16 | <b>Ângulos diédricos:</b> 144.74°, 135° e 99.74°. <a href="https://polytope.miraheze.org/wiki/Square_gyrobicúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>30. Ortobicúpula pentagonal</h4>
<a href="../vr/j30_pentagonal_orthobicupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/20bA.png" class="foto"></a><img src="../ar/20b.png" class="qr">
 <br><span class="titulo">J<sub>30</sub></span> A ortobicúpula pentagonal, ou pobcu, é um dos sólidos de Johnson. Pode ser construída anexando duas cúpulas pentagonais em suas bases decagonais, de modo que as duas bases pentagonais estejam na mesma orientação. Se as cúpulas forem unidas de modo que as bases sejam giradas 36°, o resultado é a girobicúpula pentagonal.
<br><br><b>Faces:</b> 10 triângulos, 10 quadrados e 2 pentágonos | <b>Arestas:</b> 40 | <b>Vértices:</b> 20 | <b>Ângulos diédricos:</b> 159.09°, 148.28°, 74.75° e 63.43°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_orthobicúpula" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p11" class="topo">voltar ao topo</a></p>
<hr>
<h4>31. Girobicúpula pentagonal</h4>
<a href="../vr/j31_pentagonal_gyrobicupola.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/19bA.png" class="foto"></a><img src="../ar/19b.png" class="qr">
 <br><span class="titulo">J<sub>31</sub></span> A girobicúpula pentagonal, ou pegybcu, é um dos sólidos de Johnson. Pode ser construída anexando duas cúpulas pentagonais em suas bases decagonais, de modo que as duas bases pentagonais sejam giradas 36° uma em relação à outra. É topologicamente equivalente ao antiprisma pentagonal retificado.
<br><br><b>Faces:</b> 10 triângulos, 10 quadrados e 2 pentágonos | <b>Arestas:</b> 40 | <b>Vértices:</b> 20 | <b>Ângulos diédricos:</b> 159.09°, 148.28° e 69.09°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_gyrobicúpula" target="_blank">Mais sobre...</a>
<hr>
<h4>32. Ortocúpula rotunda pentagonal</h4>
<a href="../vr/j32_pentagonal_orthocupolarontunda.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/18bA.png" class="foto"></a><img src="../ar/18b.png" class="qr">
 <br><span class="titulo">J<sub>31</sub></span> A ortocúpula rotunda pentagonal, ou pocuro, é um dos sólidos de Johnson. Pode ser construída anexando uma cúpula pentagonal e uma rotunda pentagonal em suas bases decagonais, de modo que as duas bases pentagonais estejam na mesma orientação. Se a cúpula e a rotunda forem unidas de modo que as bases sejam giradas 36°, o resultado é a girocúpula rotunda pentagonal.
<br><br><b>Faces:</b> 15 triângulos, 5 quadrados e 7 pentágonos | <b>Arestas:</b> 50 | <b>Vértices:</b> 25 | <b>Ângulos diédricos:</b> 159.09°, 148.28°, 142.62°, 110.95° e 100.81°. <a href="https://polytope.miraheze.org/wiki/Pentagonal_orthocúpularotunda" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p11" class="topo">voltar ao topo</a></p>

 
<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Polyhedra: Johnson solids part 1</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/johnson1/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Polyhedra: Johnson solids part 1". Disponível em: <https://paulohscwb.github.io/polyhedra/johnson1//>, Julho de 2023.</p>

<br><b>Referências:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
