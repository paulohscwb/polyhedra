<link rel="stylesheet" href="../scripts/style.css">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra/selfintersectsnub/">english version</a>
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
		<option disabled value="../../selfintersectsnub/pt-br/">Auto-interseção snub</option>
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

<p id="p9"></p>
  <h2 align="center"><img src="../ar/51A.png" style="margin-bottom:-10px" width="45"> Poliedros truncados snubficados</h2>
  Um poliedro é quase regular snubficado se for transitivo de vértice com figuras irregulares de vértice pentagonal, hexagonal ou octogonal. Transitividade de vértice significa que, para quaisquer dois vértices do poliedro, existe uma translação, rotação e/ou reflexão que deixa a aparência externa do poliedro inalterada, mas move um vértice para o outro. A snubificação de um poliedro é uma operação que permite obter outro poliedro. Esta operação consiste em afastar todas as faces do poliedro, rotacionar as mesmas um certo ângulo e preencher os espaços vazios resultantes com polígonos (por exemplo, triângulos, retângulos ou pentágonos).
  Para visualizar os poliedros truncados snubficados em RA, visite a página:
<p align="center"><a href="../ra.html" target="_blank">https://paulohscwb.github.io/polyhedra/selfintersectsnub/ra.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example8.jpg" width="85%"></p>
 <hr>
<h4>1. Dodecadodecaedro snub</h4>
<a href="../vr/snub_dodecadodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/69A.png" class="foto"></a><img src="../ar/69.png" class="qr">
 <br><span class="titulo">U<sub>40</sub></span> O dodecadodecaedro snub é o poliedro uniforme também chamado de siddid, cujo poliedro dual é o hexecontaedro pentagonal medial. Três triângulos, 1 pentágono e um pentagrama se encontram em cada vértice.
<br><br><b>Faces:</b> 60 triângulos equiláteros, 12 pentágonos regulares e 12 pentagramas regulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 129.79°, 151.49° e 157.78°. <a href="https://mathworld.wolfram.com/SnubDodecadodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>2. Hexecontaedro pentagonal medial</h4>
<a href="../vr/medial_pentagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/68A.png" class="foto"></a><img src="../ar/68.png" class="qr">
 <br>O hexecontaedro pentagonal medial é o poliedro cujo dual é o uniforme dodecadodecaedro snub. Consiste em 60 pentágonos irregulares, cada um com duas arestas curtas, uma média e duas longas.
<br><br><b>Faces:</b> 60 pentágonos irregulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 84 | <b>Ângulo diédrico:</b> 133.8°. <a href="https://en.wikipedia.org/wiki/Medial_pentagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>3. Dodecadodecaedro snub invertido</h4>
<a href="../vr/inverted_snub_dodecadodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/67A.png" class="foto"></a><img src="../ar/67.png" class="qr">
 <br><span class="titulo">U<sub>60</sub></span> O dodecadodecaedro snub invertido é o poliedro uniforme também chamado de dodecadodecaedro vertisnub ou isdid, cujo poliedro dual é o hexecontaedro pentagonal invertido medial. Três triângulos, 1 pentágono e um pentagrama se encontram em cada vértice. Ele pode ser construído pela alternância do dodecadodecaedro quase truncado e, em seguida, definindo todos os comprimentos de arestas para ficarem com mesmo tamanho.
<br><br><b>Faces:</b> 60 triângulos equiláteros, 12 pentágonos regulares e 12 pentagramas regulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 68.64°, 130.49° e 11.12°. <a href="https://mathworld.wolfram.com/InvertedSnubDodecadodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>4. Hexecontaedro pentagonal medial</h4>
<a href="../vr/medial_inverted_pentagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/66A.png" class="foto"></a><img src="../ar/66.png" class="qr">
 <br>O hexecontaedro pentagonal invertido medial é o poliedro cujo dual é o uniforme dodecadodecaedro snub invertido. Consiste em 60 pentágonos irregulares, cada um com duas arestas curtas, uma média e duas longas. Parte de cada pentágono está dentro do sólido, portanto é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 pentágonos irregulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 84 | <b>Ângulo diédrico:</b> 108.09°. <a href="https://polytope.miraheze.org/wiki/Medial_inverted_pentagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>5. Grande icosidodecaedro snub</h4>
<a href="../vr/great_snub_icosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/65A.png" class="foto"></a><img src="../ar/65.png" class="qr">
 <br><span class="titulo">U<sub>57</sub></span> O grande icosidodecaedro snub é o poliedro uniforme também chamado de gosid, cujo poliedro dual é o grande hexecontaedro pentagonal. Quatro triângulos e um pentagrama se encontram em cada vértice. Este poliedro é o membro snubficado da família que inclui o grande icosaedro, o grande dodecaedro estrelado e o grande icosidodecaedro.
<br><br><b>Faces:</b> 80 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 126.82° e 138.82°. <a href="https://mathworld.wolfram.com/GreatSnubIcosidodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>6. Grande hexecontaedro pentagonal</h4>
<a href="../vr/great_pentagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/64A.png" class="foto"></a><img src="../ar/64.png" class="qr">
 <br>O grande hexecontaedro pentagonal é o poliedro cujo dual é o uniforme grande icosidodecaedro snub. Consiste em 60 pentágonos simétricos, cada um com duas arestas curtas e três longas. Parte de cada pentágono está dentro do sólido, portanto é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 pentágonos simétricos | <b>Arestas:</b> 150 | <b>Vértices:</b> 92 | <b>Ângulo diédrico:</b> 104.43°. <a href="https://polytope.miraheze.org/wiki/Great_pentagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>7. Grande icosidodecaedro snub invertido</h4>
<a href="../vr/great_inverted_snub_icosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/63A.png" class="foto"></a><img src="../ar/63.png" class="qr">
 <br><span class="titulo">U<sub>69</sub></span> O grande icosidodecaedro snub invertido é o poliedro uniforme também chamado de gisid, cujo poliedro dual é o grande hexecontaedro pentagonal invertido. Quatro triângulos e um pentagrama se encontram em cada vértice. Ele pode ser construído pela alternância do grande icosidodecaedro quase truncado após definir todos os comprimentos de arestas para serem iguais.
<br><br><b>Faces:</b> 80 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 21.61° e 89.79°. <a href="https://mathworld.wolfram.com/GreatInvertedSnubIcosidodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>8. Grande hexecontaedro pentagonal invertido</h4>
<a href="../vr/great_inverted_pentagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/62A.png" class="foto"></a><img src="../ar/62.png" class="qr">
 <br>O grande hexecontaedro pentagonal invertido é o poliedro cujo dual é o uniforme grande icosidodecaedro snub invertido. Consiste em 60 pentágonos simétricos côncavos, cada um com duas arestas curtas e três longas. Parte de cada pentágono está dentro do sólido, portanto é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 pentágonos simétricos | <b>Arestas:</b> 150 | <b>Vértices:</b> 92 | <b>Ângulo diédrico:</b> 78.36°. <a href="https://polytope.miraheze.org/wiki/Great_inverted_pentagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>9. Grande icosidodecaedro retrosnub</h4>
<a href="../vr/great_retrosnub_icosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/61A.png" class="foto"></a><img src="../ar/61.png" class="qr">
 <br><span class="titulo">U<sub>74</sub></span> O grande icosidodecaedro retrosnub é o poliedro uniforme também chamado de grande icosidodecaedro retrosnub invertido, cujo poliedro dual é o grande hexecontaedro pentagrâmico. Quatro triângulos e um pentagrama se encontram em cada vértice.
<br><br><b>Faces:</b> 80 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 21.72° e 67.31°. <a href="https://mathworld.wolfram.com/GreatRetrosnubIcosidodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>10. Grande hexecontaedro pentagrâmico</h4>
<a href="../vr/great_pentagrammic_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/60A.png" class="foto"></a><img src="../ar/60.png" class="qr">
 <br>O grande hexecontaedro pentagrâmico, também chamado de grande ditriacontaedro dentóide, é o poliedro cujo dual é o uniforme grande retrosnub icosidodecaedro. Consiste em 60 pentágonos simétricos e parte de cada pentágono está dentro do sólido, portanto, é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 pentágonos simétricos | <b>Arestas:</b> 150 | <b>Vértices:</b> 92 | <b>Ângulo diédrico:</b> 60.9°. <a href="https://polytope.miraheze.org/wiki/Great_pentagrammic_hexecontahedron" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p9" class="topo">voltar ao topo</a></p>
<hr>
<h4>11. Icosidodecadodecaedro snub</h4>
<a href="../vr/snub_icosidodecadodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/59A.png" class="foto"></a><img src="../ar/59.png" class="qr">
 <br><span class="titulo">U<sub>46</sub></span> O icosidodecadodecaedro snub é o poliedro uniforme também denominado de sided, cujo poliedro dual é o hexecontaedro hexagonal medial. Quatro triângulos, um pentágono e um pentagrama reunidos em cada vértice. Ele pode ser construído pela alternância do icosidodecatruncado icosidodecaedro e, em seguida, definindo todos os comprimentos de arestas para serem iguais.
<br><br><b>Faces:</b> 80 triângulos equiláteros, 12 pentágonos regulares e 12 pentagramas regulares | <b>Arestas:</b> 180 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 7.35°, 120.43° e 146.78°. <a href="https://mathworld.wolfram.com/SnubIcosidodecadodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>12. Hexecontaedro hexagonal medial</h4>
<a href="../vr/medial_hexagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/58A.png" class="foto"></a><img src="../ar/58.png" class="qr">
 <br>O hexecontaedro hexagonal medial é o poliedro cujo dual é o uniforme icosidodecadodecaedro snub. É composto por 60 hexágonos não convexos assimétricos e cada hexágono tem duas arestas longas, duas de comprimento médio e duas curtas. Parte de cada hexágono está dentro do sólido, portanto, é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 hexágonos assimétricos | <b>Arestas:</b> 180 | <b>Vértices:</b> 104 | <b>Ângulo diédrico:</b> 127.32°. <a href="https://polytope.miraheze.org/wiki/Medial_hexagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>13. Grande dodecicosidodecaedro snub</h4>
<a href="../vr/great_snub_dodecicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/57A.png" class="foto"></a><img src="../ar/57.png" class="qr">
 <br><span class="titulo">U<sub>64</sub></span> O grande dodecicosidodecaedro snub é o poliedro uniforme também chamado de gisdid, cujo poliedro dual é o grande hexecontaedro hexagonal. Quatro triângulos e dois pentagramas se encontram em cada vértice. As arestas desse poliedro são um subconjunto das do grande dirrombicosidodecaedro e compartilham os mesmos vértices.
<br><br><b>Faces:</b> 80 triângulos equiláteros e 24 pentagramas regulares | <b>Arestas:</b> 180 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 16.3°, 109.47° e 125.77°. <a href="https://mathworld.wolfram.com/GreatSnubDodecicosidodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>14. Grande hexecontaedro hexagonal</h4>
<a href="../vr/great_hexagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/56A.png" class="foto"></a><img src="../ar/56.png" class="qr">
 <br>O grande hexecontaedro hexagonal é o poliedro cujo dual é o uniforme grande dodecicosidodecaedro snub. Consiste em 60 hexágonos não convexos assimétricos e cada hexágono tem duas arestas curtas, duas médias e duas longas. Parte de cada hexágono está dentro do sólido, portanto, é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 hexágonos assimétricos | <b>Arestas:</b> 180 | <b>Vértices:</b> 104 | <b>Ângulo diédrico:</b> 90°. <a href="https://polytope.miraheze.org/wiki/Great_hexagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>15. Pequeno icosicosidodecaedro snub</h4>
<a href="../vr/small_snub_icosicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/55A.png" class="foto"></a><img src="../ar/55.png" class="qr">
 <br><span class="titulo">U<sub>32</sub></span> O pequeno icosicosidodecaedro snub é o poliedro uniforme também chamado de seside, cujo poliedro dual é o pequeno hexecontaedro hexagonal. Cinco triângulos e um pentagrama se encontram em cada vértice. É composto por 60 triângulos snubficados, mais 40 triângulos que criam 20 hexagramas devido a pares caindo no mesmo plano e 12 pentagramas.
<br><br><b>Faces:</b> 100 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 180 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 155.67° e 161.02°. <a href="https://mathworld.wolfram.com/SmallSnubIcosicosidodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>16. Pequeno hexecontaedro hexagonal</h4>
<a href="../vr/small_hexagonal_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/54A.png" class="foto"></a><img src="../ar/54.png" class="qr">
 <br>O pequeno hexecontaedro hexagonal é o poliedro cujo dual é o uniforme pequeno icosicosidodecaedro snub. Consiste em 60 hexágonos simétricos e parte de cada hexágono está dentro do sólido, portanto, é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 hexágonos simétricos | <b>Arestas:</b> 180 | <b>Vértices:</b> 112 | <b>Ângulo diédrico:</b> 139.89°. <a href="https://polytope.miraheze.org/wiki/Small_hexagonal_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>17. Pequeno icosicosidodecaedro retrosnub</h4>
<a href="../vr/small_retrosnub_icosicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/53A.png" class="foto"></a><img src="../ar/53.png" class="qr">
 <br><span class="titulo">U<sub>72</sub></span> O pequeno icosicosidodecaedro retrosnub é o poliedro uniforme também chamado de disicosidodecaedro retrosnub, cujo poliedro dual é o pequeno hexecontaedro hexagrâmico. As 40 faces triangulares não snubficadas formam 20 pares coplanares, formando hexágonos estelares que não são regulares. Ao contrário da maioria dos poliedros snub, ele possui simetrias de reflexão.
<br><br><b>Faces:</b> 100 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 180 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 24.33° e 44.46°. <a href="https://mathworld.wolfram.com/SmallRetrosnubIcosicosidodecahedron.html" target="_blank">Mais sobre...</a>
<hr>
<h4>18. Pequeno hexecontaedro hexagrâmico</h4>
<a href="../vr/small_hexagrammic_hexecontahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/52A.png" class="foto"></a><img src="../ar/52.png" class="qr">
 <br>O pequeno hexecontaedro hexagrâmico é o poliedro cujo dual é o uniforme pequeno icosicosidodecaedro retrosnub. Consiste em 60 hexagramas unicursais simétricos espelhados e parte de cada hexágono está dentro do sólido, portanto, é invisível em modelos sólidos.
<br><br><b>Faces:</b> 60 hexagramas simétricos | <b>Arestas:</b> 180 | <b>Vértices:</b> 112 | <b>Ângulo diédrico:</b> 61.13°. <a href="https://polytope.miraheze.org/wiki/Small_hexagrammic_hexecontahedron" target="_blank">Mais sobre...</a>
<hr>
<h4>19. Grande dirrombicosidodecaedro</h4>
<a href="../vr/great_dirhombicosidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/51A.png" class="foto"></a><img src="../ar/51.png" class="qr">
 <br><span class="titulo">U<sub>75</sub></span> O grande dirrombicosidodecaedro é o poliedro uniforme também chamado de gidrid, cujo poliedro dual é o grande dirrombicosidodecacron. É o único poliedro uniforme com mais de seis polígonos envolvendo cada vértice do poliedro: quatro quadrados alternados com dois triângulos e dois pentagramas. O grande dirrombicosidodecaedro é o poliedro uniforme mais complexo e tem faces passando pelo centro. Portanto, alguns dos vértices do grande dirrombicosidodecacron estão em pontos ideais infinitamente distantes da origem.
<br><br><b>Faces:</b> 40 triângulos equiláteros, 60 quadrados e 24 pentagramas regulares | <b>Arestas:</b> 240 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 54.74° e 71.04°. <a href="https://mathworld.wolfram.com/GreatDirhombicosidodecahedron.html" target="_blank">Mais sobre...</a>
  <hr>
<h4>20. Grande disnub dirhombidodecahedron</h4>
<a href="../vr/great_disnub_dirhombidodecahedron.htm" target="_blank" title="modelo 3D" class="fotoA"><img src="../ar/50A.png" class="foto"></a><img src="../ar/50.png" class="qr">
 <br>O grande disnub dirhombidodecaedro, também chamado gididrid ou figura de Skilling, é um poliedro estrelado uniforme degenerado. Devido à sua realização geométrica com algumas arestas duplas onde 4 faces se encontram, é considerado um poliedro uniforme degenerado, mas não estritamente um poliedro uniforme. Seis triângulos, quatro quadrados e dois pentagramas se encontram em cada vértice. Pode ser construído como uma mistura do grande dirrombicosidodecaedro uniforme e do disnub icosaedro, o composto uniforme de 20 octaedros com o qual compartilha seu esqueleto de arestas.
<br><br><b>Faces:</b> 120 triângulos equiláteros, 60 quadrados e 24 pentagramas regulares | <b>Arestas:</b> 360 | <b>Vértices:</b> 60 | <b>Ângulos diédricos:</b> 109.47°, 54.73° e 71.04°. <a href="https://polytope.miraheze.org/wiki/Great_disnub_dirhombidodecahedron" target="_blank">Mais sobre...</a>
<p class="topop"><a href="#p9" class="topo">voltar ao topo</a></p>

 
<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Polyhedra: Self-intersecting snub</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/selfintersectsnub/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Polyhedra: Self-intersecting snub". Disponível em: <https://paulohscwb.github.io/polyhedra/selfintersectsnub/>, Março de 2023.</p>

<br><b>Referências:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Weisstein, Eric W. "Uniform Polyhedron." From MathWorld--A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/UniformPolyhedron.html" target="_blank">https://mathworld.wolfram.com/UniformPolyhedron.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>