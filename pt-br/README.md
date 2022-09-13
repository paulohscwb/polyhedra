<link rel="stylesheet" href="../scripts/style.css">
<h2>Visualização de poliedros com Realidade Aumentada (RA) e Realidade Virtual (RV) em A-frame</h2>
<b>autor:</b> Paulo Henrique Siqueira - Universidade Federal do Paraná
<br><b>contato:</b> <a href="#"> paulohscwb@gmail.com </a>
<br><a href="https://paulohscwb.github.io/polyhedra/">english version</a>
<br><br>Os poliedros de Arquimedes, Platão, Catalan e não convexos podem ser vistos em RA com os marcadores indicados, e por meio dos links criados nos marcadores, cada poliedro pode ser visto em RV.
<br>Um <b>poliedro uniforme</b> possui polígonos regulares como faces e é isogonal, ou seja, possui uma isometria que permite que o conjunto de seus vértices correspondam entre si por meio de relações de simetria. A notação usada para o <b>n-ésimo</b> poliedro uniforme é <b>U<sub>n</sub></b>.
<br>O ambiente RA foi criado com os scripts de <b>Jerome Etienne</b>: <a href="https://github.com/jeromeetienne/AR.js" target="_blank"> AR.js - Augmented Reality for the Web</a>.
<br>Os scripts de órbita desenvolvidos por <b>Kevin Ngo</b> foram usados nas páginas de RV: <a href="https://github.com/supermedium/superframe/tree/master/components/orbit-controls/" target="_blank"> Orbit controls for A-Frame</a>.
<br>

<details id="p1">
  <summary>Poliedros de Arquimedes</summary>
 Um poliedro de Arquimedes é um dos 13 sólidos enumerados pela primeira vez por Arquimedes. Eles são os poliedros convexos semi-regulares compostos de polígonos regulares reunidos em vértices idênticos, excluindo os 5 sólidos platônicos, os prismas e antiprismas.
<br>Para ver os poliedros arquimedeanos em RA, visite a página:
<p align="center"> <a href="../archimedes.html" target="_blank"> https://paulohscwb.github.io/polyhedra/archimedes.html</a></p>
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima dos marcadores.
<br><br><center><img style="border-radius:7px;" src="../ar/example.jpg" width="80%"></center>
<hr>
<h4>1. Octaedro truncado</h4>
 <img src="../ar/hiro.png" class="qr">
 <br><span class="titulo"><b>U<sub>8</sub></b></span> O octaedro truncado é construído a partir de um octaedro regular com comprimento de lado <b>3a</b> pela remoção de seis pirâmides retas à direita, uma de cada ponto. Estas pirâmides têm tanto o comprimento do lado da base como o lado do lado lateral <b>e </b> de <b>a</b>, para formar triângulos equiláteros. O octaedro truncado pode ser dissecado em um octaedro central, circundado por 8 cúpulas triangulares em cada face e 6 pirâmides quadradas acima dos vértices. O octaedro truncado existe na estrutura dos cristais de faujasite.
 <br><b>Faces:</b> 14 | <b>Polígonos:</b> 6 quadrados e 8 hexágonos | <b>Arestas:</b> 36 | <b>Vértices:</b> 24 | <b>Esfericidade:</b> 0.905 | <b>Ângulos diédricos:</b> 125°15′51″ (4-6) e 109°28′16″ (6-6). <a href="http://mathworld.wolfram.com/TruncatedOctahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/truncated_octahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>2. Icosaedro truncado</h4>
 <img src="../ar/kanji.png" class="qr">
 <br><span class="titulo"><b>U<sub>25</sub></b></span> A geometria do icosaedro truncado está associada a bolas de futebol, tipicamente padronizadas com hexágonos brancos e pentágonos pretos. Este poliedro pode ser construído a partir de um icosaedro com os 12 vértices truncados, de modo que um terço de cada canto é cortado em cada uma das duas extremidades. Criam-se então 12 novas faces pentagonais, transformando-se as 20 faces triangulares originais em hexágonos regulares. Assim, o comprimento das arestas é um terço do das arestas originais.
 <br><b>Faces:</b> 32 | <b>Polígonos:</b> 12 pentágonos e 20 hexágonos | <b>Arestas:</b> 90 | <b>Vértices:</b> 60 | <b>Esfericidade:</b> 0.967 | <b>Ângulos diédricos:</b> 138,1897° (6-6) e 142,62° (5-6). <a href="http://mathworld.wolfram.com/TruncatedIcosahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/truncated_icosahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr><h4>3. Icosidodecaedro truncado</h4>
 <img src="../ar/19.png" class="qr">
 <br><span class="titulo"><b>U<sub>28</sub></b></span> O icosidodecaedro truncado também é conhecido como o grande rombicosidodecaedro, e se todos os 13 sólidos arquimedianos fossem construídos com todos os comprimentos de arestas iguais, o icosidodecaedro truncado seria o maior. Tem mais vértices e arestas do que qualquer outro poliedro uniforme não-prismático convexo.
 <br><b>Faces:</b> 62 | <b>Polígonos:</b> 30 quadrados, 20 hexágonos e 12 decágonos | <b>Arestas:</b> 180 | <b>Vértices:</b> 120 | <b>Esfericidade:</b> 0.97 | <b>Ângulos diédricos:</b> 142,62° (6-10), 148,28° (4-10) e 159,095° (4-6). <a href="http://mathworld.wolfram.com/GreatRhombicosidodecahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/truncated_icosidodecahedron.html" target="_blank"><img src="https://paulohscwb.github.io/polyhedra/vr/RVaframe.png" width="200px"></a>
<hr>
<h4>4. Rombicosidodecaedro</h4>
 <img src="../ar/18.png" class="qr">
 <br><span class="titulo"><b>U<sub>27</sub></b></span> O rombicosidodecaedro também é conhecido como o pequeno rombicosidodecaedro ou pequeno dodeicosidodecaedro. Se você expandir um icosaedro movendo as faces para longe da origem na quantidade certa, sem alterar a orientação ou tamanho das faces, e fazer o mesmo com um dodecaedro duplo, e corrigir os espaços com quadrados, você obtém um rombicosidodecaedro. Também pode ser chamado de dodecaedro ou icosaedro expandido a partir de operações de truncamento em poliedros regulares.
<br><b>Faces:</b> 62 | <b>Polígonos:</b> 30 quadrados, 20 triângulos e 12 pentágonos | <b>Arestas:</b> 120 | <b>Vértices:</b> 60 | <b>Esfericidade:</b> 0.979 | <b>Ângulos diédricos:</b> 159°05′41″ (3-4) e 148°16′57″ (4-5). <a href="http://mathworld.wolfram.com/SmallRhombicosidodecahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/rhombicosidodecahedron.html" target="_blank"><img src="https://paulohscwb.github.io/polyhedra/vr/RVaframe.png" width="200px"></a>
<hr>
<h4>5. Dodecaedro snub</h4>
 <img src="../ar/17.png" class="qr">
 <br><span class="titulo"><b>U<sub>29</sub></b></span> O dodecaedro snub tem a mais alta esfericidade de todos os sólidos de Arquimedes. Tem duas formas distintas, que são imagens espelhadas umas da outra. A união de ambas as formas é um composto de dois dodecaedros snub. O dodecaedro snub pode ser gerado tomando-se as doze faces pentagonais do dodecaedro e deslocando-as para fora, para não se interceptarem. A uma distância adequada, esta tranformação pode criar o rombicosidodecaedro preenchendo as faces quadradas entre as arestas divididas e as faces triangulares entre os vértices divididos.
 <br><b>Faces:</b> 92 | <b>Polígonos:</b> 80 triângulos e 12 pentágonos | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Esfericidade:</b> 0.982 | <b>Ângulos diédricos:</b> 164°10′31″ (3-3) e 152°55′53″ (3-5). <a href="http://mathworld.wolfram.com/SnubDodecahedron.html" target="_blank">Mais sobre...</a>  
 <br><a href="../vr/snub_dodecahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>6. Dodecaedro truncado</h4>
 <img src="../ar/16.png" class="qr">
 <br><span class="titulo"><b>U<sub>26</sub></b></span> O dodecaedro truncado é usado na tesselação de preenchimento de espaço hiperbólico celular-transitivo, o favo de mel icosaédrico bitruncado. Esse poliedro pode ser formado a partir de um dodecaedro, truncando os cantos para que as faces dos pentágonos se tornem decágonos e os cantos se tornem triângulos. Faz parte de um processo de truncamento entre um dodecaedro e um icosaedro.
 <br><b>Faces:</b> 32 | <b>Polígonos:</b> 20 triângulos e 12 decágonos | <b>Arestas:</b> 150 | <b>Vértices:</b> 60 | <b>Esfericidade:</b> 0.926 | <b>Ângulos diédricos:</b> 116,57° (10-10) e 142,62° (3-10). <a href="http://mathworld.wolfram.com/TruncatedDodecahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/truncated_dodecahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>7. Icosidodecaedro</h4>
 <img src="../ar/20.png" class="qr">
 <br><span class="titulo"><b>U<sub>24</sub></b></span> O icosidodecaedro contém 12 pentágonos do dodecaedro e 20 triângulos do icosaedro. O cubo truncado pode ser transformado em um icosidodecaedro, dividindo-se os octógonos em dois pentágonos e dois triângulos. O icosidodecaedro possui seis decágonos centrais.
 <br><b>Faces:</b> 32 | <b>Polígonos:</b> 20 triângulos e 12 pentágonos | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Esfericidade:</b> 0.951 | <b>Ângulo diédrico:</b> 142,62° (5-3). <a href="http://mathworld.wolfram.com/Icosidodecahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/icosidodecahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>8. Cubo snub</h4>
 <img src="../ar/15.png" class="qr">
 <br><span class="titulo"><b>U<sub>12</sub></b></span> O cubo snub também é conhecido como cuboctaedro snub e tem duas formas distintas, que são imagens espelhadas uma da outra. O cubo snub pode ser gerado tomando-se as seis faces do cubo, puxando-as para fora de modo que elas não se interceptem, dando a cada uma delas uma pequena rotação em seus centros (todas no mesmo sentido: horário ou anti-horário) até que os espaços possam ser preenchidos com triângulos equiláteros.
<br><b>Faces:</b> 38 | <b>Polígonos:</b> 32 triângulos e 6 quadrados | <b>Arestas:</b> 60 | <b>Vértices:</b> 24 | <b>Esfericidade:</b> 0.965 | <b>Ângulos diédricos:</b> 153°14′04″ (3-3) e 142°59′00″ (3-4). <a href="http://mathworld.wolfram.com/SnubCube.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/snubcube.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>9. Cuboctaedro truncado</h4>
 <img src="../ar/14.png" class="qr">
 <br><span class="titulo"><b>U<sub>11</sub></b></span> O cuboctaedro truncado também é conhecido como grande rombicuboctaedro. O cuboctaedro truncado é o casco convexo de um rombicuboctaedro com cubos acima de seus 12 quadrados em eixos de simetria dupla. O resto de seu espaço pode ser dissecado em seis cúpulas quadradas abaixo dos octógonos e oito cúpulas triangulares abaixo dos hexágonos.
 <br><b>Faces:</b> 26 | <b>Polígonos:</b> 12 quadrados, 8 hexágonos e 6 octógonos | <b>Arestas:</b> 72 | <b>Vértices:</b> 48 | <b>Esfericidade:</b> 0.943 | <b>Ângulos diédricos:</b> 144°44′08″ (4-6), 135° (4-8) e 125°15′51″ (6-8). <a href="http://mathworld.wolfram.com/GreatRhombicuboctahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/truncated_cuboctahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>10. Rombicuboctaedro</h4>
 <img src="../ar/13.png" class="qr">
 <br><span class="titulo"><b>U<sub>10</sub></b></span> O rombicuboctaedro é também conhecido como pequeno rombicuboctaedro. Este sólido também pode ser chamado de cubo ou octaedro expandido  e pode ser dissecado em duas cúpulas quadradas e um prisma octogonal central. Existem três pares de planos paralelos que interceptam o rombicuboctaedro em um octógono regular.
<br><b>Faces:</b> 26 | <b>Polígonos:</b> 18 quadrados e 8 triângulos | <b>Arestas:</b> 48 | <b>Vértices:</b> 24 | <b>Esfericidade:</b> 0.954 | <b>Ângulos diédricos:</b> 144°44′08″ (4-3) e 135° (4-4). <a href="http://mathworld.wolfram.com/SmallRhombicuboctahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/rhombicuboctahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>11. Cubo truncado</h4>
 <img src="../ar/12.png" class="qr">
 <br><span class="titulo"><b>U<sub>9</sub></b></span> O cubo truncado pertence a uma família de poliedros uniformes relacionados ao cubo e octaedro regular. Esse sólido pode ser dissecado em um cubo central, com seis cúpulas quadradas ao redor de cada uma das faces do cubo e oito tetraédricas regulares nos cantos. Essa dissecação também pode ser vista dentro do favo de mel cúbico, com células cubo, tetraedro e rombicuboctaedro.
<br><b>Faces:</b> 14 | <b>Polígonos:</b> 8 triângulos e 6 octógonos | <b>Arestas:</b> 36 | <b>Vértices:</b> 24 | <b>Esfericidade:</b> 0.849 | <b>Ângulos diédricos:</b> 125°15′51″ (8-3) e 90° (8-8). <a href="http://mathworld.wolfram.com/TruncatedCube.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/truncated_cube.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>12. Cuboctaedro</h4>
 <img src="../ar/11.png" class="qr">
 <br><span class="titulo"><b>U<sub>7</sub></b></span> O cuboctaedro é o único poliedro convexo no qual o maior raio (do centro ao vértice) tem o mesmo comprimento que sua aresta. Um hexágono pode ser obtido tomando-se uma seção transversal equatorial de um cuboctaedro. Este sólido pode ser dissecado em duas cúpulas triangulares por um hexágono passando pelo centro do cuboctaedro.
<br><b>Faces:</b> 14 | <b>Polígonos:</b> 8 triângulos e 6 quadrados | <b>Arestas:</b> 24 | <b>Vértices:</b> 12 | <b>Esfericidade:</b> 0.905 | <b>Ângulo diédrico:</b> 125,26° (4-3). <a href="http://mathworld.wolfram.com/Cuboctahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/cuboctahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>13. Tetraedro truncado</h4>
 <img src="../ar/10.png" class="qr">
 <br><span class="titulo"><b>U<sub>2</sub></b></span> O tetraedro truncado pode ser construído truncando todos os 4 vértices de um tetraedro regular com um terço do comprimento original da aresta. Um truncamento mais profundo, removendo um tetraedro de metade do comprimento original da aresta de cada vértice, é chamado de retificação. A retificação de um tetraedro produz um octaedro.
<br><b>Faces:</b> 8 | <b>Polígonos:</b> 4 triângulos e 4 hexágonos | <b>Arestas:</b> 18 | <b>Vértices:</b> 12 | <b>Esfericidade:</b> 0.775 | <b>Ângulos diédricos:</b> 109°28′16′ (6-3) e 70°31′44″ (6-6). <a href="http://mathworld.wolfram.com/TruncatedTetrahedron.html" target="_blank">Mais sobre...</a> 
 <br><a href="../vr/truncated_tetrahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<p class="topop"><a href="#p1" class="topo">voltar ao topo</a></p>
</details>
 
<details id="p2">
  <summary>Poliedros de Platão</summary>
 Um sólido platônico é um poliedro regular e convexo. É construído por faces poligonais regulares e congruentes com o mesmo número de faces reunidas em cada vértice. Eles foram nomeados pelo antigo filósofo grego Platão, o qual classificou que os elementos clássicos foram feitos a partir desses sólidos regulares.
 <br>Para ver o poliedro platônico em AR, visite
<p align="center"> <a href="../platonic.html" target="_blank">https://paulohscwb.github.io/polyhedra/platonic.html </a></p>
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<br><center><img style="border-radius:7px;" src="../ar/example1.jpg" width="70%"></center>
<hr>
<h4>1. Icosaedro</h4>
 <img src="../ar/9.png" class="qr">
 <br><span class="titulo"><b>U<sub>22</sub></b></span> O icosaedro tem cinco faces triangulares reunidas em cada vértice. Um icosaedro regular é uma pirâmide dupla pentagonal giroalongada e um antiprisma pentagonal em qualquer das seis orientações. As 12 arestas de um octaedro regular podem ser subdivididas na proporção áurea de modo que os vértices resultantes definem um icosaedro regular.
<br><b>Faces:</b> 20 triângulos | <b>Arestas:</b> 30 | <b>Vértices:</b> 12 | <b>Esfericidade:</b> 0.939 | <b>Ângulo diédrico:</b> 138,1897°. <a href="http://mathworld.wolfram.com/RegularIcosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/icosahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>2. Dodecaedro</h4>
 <img src="../ar/8.png" class="qr">
 <br><span class="titulo"><b>U<sub>23</sub></b></span> O dodecaedro tem três faces pentagonais regulares se encontrando em cada vértice. O dodecaedro regular é o terceiro em um conjunto infinito de trapezoedros truncados que pode ser construído truncando-se dois vértices axiais de um trapezoedro pentagonal. Se os cinco sólidos platônicos forem construídos com o mesmo volume, o dodecaedro regular tem as arestas de menor comprimento.
<br><b>Faces:</b> 12 pentágonos | <b>Arestas:</b> 30 | <b>Vértices:</b> 20 | <b>Esfericidade:</b> 0.91 | <b>Ângulo diédrico:</b> 116,5651°. <a href="http://mathworld.wolfram.com/RegularDodecahedron.html" target="_blank">Mais sobre...</a>
 <br> <a href="../vr/dodecahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>3. Octaedro</h4>
 <img src="../ar/7.png" class="qr">
 <br><span class="titulo"><b>U<sub>5</sub></b></span> O octaedro tem quatro faces triangulares reunidas em cada vértice. É uma pirâmide dupla quadrada em qualquer uma das três orientações ortogonais. É também um antiprisma triangular em qualquer das quatro orientações. O octaedro é único entre os sólidos platônicos que tem número par de faces que se encontram em cada vértice. Consequentemente, é o único membro desse grupo que possui planos espelhados que não passam por alguma face.
<br><b>Faces:</b> 8 triângulos | <b>Arestas:</b> 12 | <b>Vértices:</b> 6 | <b>Esfericidade:</b> 0.846 | <b>Ângulo diédrico:</b> 109,4712°. <a href="http://mathworld.wolfram.com/RegularOctahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/octahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>4. Cubo</h4>
 <img src="../ar/6.png" class="qr">
 <br><span class="titulo"><b>U<sub>6</sub></b></span> O cubo ou hexaedro tem três faces quadradas reunidas em cada vértice. O cubo é também um paralelepípedo quadrado, um cubóide equilatero ou um romboedro regular. É um prisma quadrado regular em três orientações, e um trapezoedro trígono em quatro orientações. O cubo pode ser cortado em seis pirâmides quadradas idênticas. Se estas pirâmides quadradas são encaixadas às faces de um segundo cubo, um dodecaedro rômbico é obtido.
<br><b>Faces:</b> 6 quadrados | <b>Arestas:</b> 12 | <b>Vértices:</b> 8 | <b>Esfericidade:</b> 0.806 | <b>Ângulo diédrico:</b> 90°. <a href="http://mathworld.wolfram.com/Cube.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/cube.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<hr>
<h4>5. Tetraedro</h4>
 <img src="../ar/5.png" class="qr">
 <br><span class="titulo"><b>U<sub>1</sub></b></span> O tetraedro tem três faces triangulares reunidas em cada vértice. O tetraedro também é conhecido como uma pirâmide triangular e é o mais simples de todos os poliedros convexos comuns e o único que tem menos de 5 faces. O tetraedro tem muitas propriedades análogas àquelas de um triângulo, incluindo um esfera inscrita, esfera circunscrita, tetraedro medial e esferas ex-inscritas.
<br><b>Faces:</b> 4 triângulos | <b>Arestas:</b> 6 | <b>Vértices:</b> 4 | <b>Esfericidade:</b> 0.671 | <b>Ângulo diédrico:</b> 70,5288°. <a href="http://mathworld.wolfram.com/RegularTetrahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/tetrahedron.html" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<p class="topop"><a href="#p2" class="topo">voltar ao topo</a></p>
</details>

<details id ="p3">
  <summary>Poliedros de Catalan</summary>
Os sólidos de Catalan são os duais dos sólidos de Arquimedes. Eles são nomeados em homenagem ao matemático belga Eugene Catalan (1814-1894) que descreveu pela primeira vez o conjunto completo em 1865. O Dodecaedro Rômbico e o Triacontaedro Rômbico foram descritos em 1611 por Johannes Kepler. Cada sólido de Catalan tem um tipo de face e um ângulo diedro constante, e possui a mesma simetria que seu respectivo dual de Arquimedes.
 <br>Para visualizar os poliedros de Catalan em RA, visite a página:
<p align="center"><a href="../catalan.html" target="_blank">https://paulohscwb.github.io/polyhedra/catalan.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example2.jpg" width="85%"></p>
<hr>
<h4>1. Tetraedro triakis</h4>
 <img src="../ar/180.png" class="qr">
 <br>O tetraedro triakis é um dodecaedro não regular que pode ser construído como um aumento positivo de um tetraedro regular: uma pirâmide triangular adicionada a cada face. O tetraedro triakis é o poliedro dual do tetraedro truncado. Suas faces de triângulos isósceles têm ângulos dos vértices com medidas de 112,885° (uma vez) e 33,557° (duas vezes).
<br><b>Faces:</b> 12 triângulos isósceles | <b>Arestas:</b> 18 | <b>Vértices:</b> 8 | <b>Ângulo diédrico:</b> 129,521°. <a href="https://mathworld.wolfram.com/TriakisTetrahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/triakis_tetrahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>2. Dodecaedro rômbico</h4>
 <img src="../ar/165.png" class="qr">
 <br>O dodecaedro rômbico é o poliedro dual do cuboctaedro. Mais especificamente, um cubo, um octaedro e um octaedro estrelado podem ser inscritos nos vértices de um dodecaedro rômbico. Um dodecaedro rômbico aparece no canto superior direito como uma das "estrelas" poliédricas na gravura em madeira "Stars" de M. C. Escher de 1948. Os losangos de suas faces possuem ângulos dos vértices com medidas iguais a 70,53° e 109,47°.
<br><b>Faces:</b> 12 losangos | <b>Arestas:</b> 24 | <b>Vértices:</b> 14 | <b>Ângulo diédrico:</b> 120°. <a href="https://mathworld.wolfram.com/RhombicDodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/rhombic_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>3. Hexaedro tetrakis</h4>
 <img src="../ar/166.png" class="qr">
 <br>Em geral, um hexaedro tetrakis é um icositetraedro não regular que pode ser construído como um aumento de um cubo. O hexaedro tetrakis é o poliedro dual de 24 faces do octaedro truncado. Um cubo, um octaedro e um octaedro estrelado podem ser todos inscritos nos vértices do hexaedro tetrakis. Suas faces de triângulos isósceles têm ângulos dos vértices com medidas iguais a 86,62° (uma vez) e 48,19° (duas vezes).
<br><b>Faces:</b> 24 triângulos isósceles | <b>Arestas:</b> 36 | <b>Vértices:</b> 14 | <b>Ângulo diédrico:</b> 143,13°. <a href="https://mathworld.wolfram.com/TetrakisHexahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/tetrakis_hexahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>4. Octaedro triakis</h4>
 <img src="../ar/167.png" class="qr">
 <br>Em geral, um octaedro triakis é um icositetraedro não regular que pode ser construído como um aumento do octaedro regular. O octaedro triakis é o poliedro dual de 24 faces do cubo truncado. Um octaedro e um octaedro estrelado podem ser inscritos nos vértices do octaedro triakis. Suas faces de triângulos isósceles têm ângulos dos vértices com medidas iguais a 117,2° (uma vez) e 31,4° (duas vezes).
<br><b>Faces:</b> 24 triângulos isósceles | <b>Arestas:</b> 36 | <b>Vértices:</b> 14 | <b>Ângulo diédrico:</b> 147,35°. <a href="https://mathworld.wolfram.com/SmallTriakisOctahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/triakis_octahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>5. Icositetraedro deltoidal</h4>
 <img src="../ar/168.png" class="qr">
 <br>O icositetraedro deltoide é o poliedro dual de 24 faces do rombicuboctaedro. Um icositetraedro deltoide aparece na metade direita como uma das "estrelas" poliédricas na gravura em madeira "Stars" de M. C. Escher de 1948. um octaedro estrelado, um octaedro atrativo 4-composto (cujo dual é um cubo atrativo 4-composto) e um cubo podem ser todos inscritos em um icositetraedro deltoide. Suas faces têm formato de "pipas" tri-equiangulares que possuem ângulos dos vértices com medidas de 94,416° (duas vezes), 71,69° (uma vez) e 99,477° (uma vez).
<br><b>Faces:</b> 24 "pipas" tri-equiangulares | <b>Arestas:</b> 48 | <b>Vértices:</b> 26 | <b>Ângulo diédrico:</b> 138,12°. <a href="https://mathworld.wolfram.com/DeltoidalIcositetrahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/deltoidal_icositetrahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>6. Icositetraedro pentagonal</h4>
 <img src="../ar/170.png" class="qr">
 <br> O icositetraedro pentagonal é o poliedro dual de 24 faces do cubo snub. O mineral cuprita (Cu<sub>2</sub>O) se forma em cristais icositetraédricos pentagonais. Um cubo, um octaedro e um octaedro estrelado podem ser inscritos nos vértices do icositetraedro pentagonal. Suas faces pentagonais irregulares simétricas possuem ângulos dos vértices com medidas de 114,812° (quatro vezes) e 80,7517° (uma vez).
<br><b>Faces:</b> 24 pentágonos irregulares simétricos | <b>Arestas:</b> 60 | <b>Vértices:</b> 38 | <b>Ângulo diédrico:</b> 136,31°. <a href="https://mathworld.wolfram.com/PentagonalIcositetrahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/pentagonal_icositetrahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>7. Triacontaedro rômbico</h4>
 <img src="../ar/172.png" class="qr">
 <br>O triacontaedro rômbico é um zonoedro que é o poliedro dual do icosidodecaedro. As arestas que se cruzam do composto dodecaedro-icosaedro formam as diagonais de 30 losangos que compõem o triacontaedro. O cubo 5-composto possui os 30 planos faciais do triacontaedro rômbico e seu interior é um triacontaedro rômbico. Os losangos de suas faces possuem ângulos dos vértices com medidas iguais a 116,565° e 63,435°.
<br><b>Faces:</b> 30 losangos | <b>Arestas:</b> 60 | <b>Vértices:</b> 32 | <b>Ângulo diédrico:</b> 144°. <a href="https://mathworld.wolfram.com/RhombicTriacontahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/rhombic_triacontahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>8. Dodecaedro disdiakis</h4>
 <img src="../ar/174.png" class="qr">
 <br>O dodecaedro disdiakis é o poliedro dual do cuboctaedro truncado de Arquimedes. A substituição de cada face do dodecaedro rômbico por uma pirâmide plana cria um poliedro que se parece quase com o dodecaedro disdiakis. Os triângulos acutângulos de suas faces possuem ângulos dos vértices com medidas de 87,202°, ​​55,025° e 37,773°. 
<br><b>Faces:</b> 48 triângulos acutângulos | <b>Arestas:</b> 72 | <b>Vértices:</b> 26 | <b>Ângulo diédrico:</b> 155,08°. <a href="https://mathworld.wolfram.com/DisdyakisDodecahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/disdyakis_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>9. Dodecaedro pentakis</h4>
 <img src="../ar/175.png" class="qr">
 <br>O dodecaedro pentakis é o poliedro dual de 60 faces do icosaedro truncado. Um tetraedro composto 10, um cubo composto 5, um icosaedro e um dodecaedro podem ser inscritos nos vértices do dodecaedro pentakis. Suas faces de triângulos isósceles têm ângulos dos vértices com medidas de 68,619° (uma vez) e 55,691° (duas vezes). 
<br><b>Faces:</b> 60 triângulos isósceles | <b>Arestas:</b> 90 | <b>Vértices:</b> 32 | <b>Ângulo diédrico:</b> 156,72°. <a href="https://mathworld.wolfram.com/PentakisDodecahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/pentakis_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>10. Icosaedro triakis</h4>
 <img src="../ar/176.png" class="qr">
 <br>O icosaedro triakis é o poliedro dual de 60 faces do dodecaedro truncado. Um tetraedro composto 10, um cubo composto 5, um icosaedro e um dodecaedro podem ser inscritos nos vértices do icosaedro triakis. Suas faces de triângulos isósceles têm ângulos dos vértices com medidas iguais a 119,039° (uma vez) e 30,48° (duas vezes).
<br><b>Faces:</b> 60 triângulos isósceles | <b>Arestas:</b> 90 | <b>Vértices:</b> 32 | <b>Ângulo diédrico:</b> 160,61°. <a href="https://mathworld.wolfram.com/TriakisIcosahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/triakis_icosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>11. Hexecontaedro pentagonal</h4>
 <img src="../ar/177.png" class="qr">
 <br>O hexecontaedro pentagonal é o poliedro dual de 60 faces do dodecaedro snub. Um tetraedro composto 10, cubo composto 5, icosaedro e dodecaedro podem ser inscritos nos vértices do hexecontaedro pentagonal. Suas faces pentagonais irregulares simétricas possuem ângulos dos vértices com medidas de 118,137° (quatro vezes) e 67,4535° (uma vez).
<br><b>Faces:</b> 60 pentágonos irregulares simétricos | <b>Arestas:</b> 150 | <b>Vértices:</b> 92 | <b>Ângulo diédrico:</b> 153,18°. <a href="https://mathworld.wolfram.com/PentagonalHexecontahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/pentagonal_hexecontahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>12. Hexecontaedro deltoidal</h4>
 <img src="../ar/178.png" class="qr">
 <br>O hexecontaedro deltoide é o poliedro dual de 60 faces do rombicosidodecaedro. Um tetraedro 10-composto, um octaedro 5-composto, um cubo 5-composto, um icosaedro, um dodecaedro e um icosidodecaedro podem todos ser inscritos nos vértices do hexecontaedro deltoidal. Suas faces têm formato de "pipas" tri-equiangulares que possuem ângulos dos vértices com medidas de 86,974° (duas vezes), 67,783° (uma vez) e 118,269° (uma vez). 
<br><b>Faces:</b> 60 "pipas" tri-equiangulares | <b>Arestas:</b> 120 | <b>Vértices:</b> 62 | <b>Ângulo diédrico:</b> 154,12°. <a href="https://mathworld.wolfram.com/DeltoidalHexecontahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/deltoidal_hexecontahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>13. Triacontaedro disdiakis</h4>
 <img src="../ar/179.png" class="qr">
 <br>O triacontaedro disdiakis é o poliedro dual do icosidodecaedro truncado de Arquimedes. Um tetraedro 10-composto, um octaedro 5-composto, um cubo 5-composto, um icosaedro, um dodecaedro e um icosidodecaedro podem ser inscritos nos vértices de um triacontaedro disdiakis. Os triângulos acutângulos de suas faces possuem ângulos dos vértices com medidas de 88,992°, 58,238° e 32,77°.
<br><b>Faces:</b> 120 triângulos acutângulos | <b>Arestas:</b> 180 | <b>Vértices:</b> 62 | <b>Ângulo diédrico:</b> 164,89°. <a href="https://mathworld.wolfram.com/DisdyakisTriacontahedron.html" target="_blank">Mais sobre...</a>
<br><a href="../vr/disdyakis_triacontahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<p class="topop"><a href="#p3" class="topo">voltar ao topo</a></p>
</details>

<details id="p4">
  <summary>Poliedros não convexos</summary>
 <br>Para visualizar os poliedros não convexos em RA, visite a página:
<p align="center"><a href="../nonconvex.html" target="_blank">https://paulohscwb.github.io/polyhedra/nonconvex.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example3.jpg" width="85%"></p>
<hr>
<h4>1. Sólido de Escher</h4>
 <img src="../ar/181.png" class="qr">
 <br>O sólido de Escher está ilustrado no pedestal direito na xilogravura "Waterfall" de M. C. Escher. É obtido aumentando um dodecaedro rômbico até que as arestas incidentes se tornem paralelas, correspondendo ao aumento da altura de um dodecaedro rômbico. É a primeira estrela de dodecaedro rômbico e é um poliedro de preenchimento de espaço. Sua superfície convexo é um cuboctaedro. Suas faces de triângulos isósceles têm ângulos de vértices com medidades de 70,53° (uma vez) e 54,73° (duas vezes).
<br><b>Faces:</b> 48 triângulos isósceles | <b>Arestas:</b> 72 | <b>Vértices:</b> 26. <a href="https://mathworld.wolfram.com/EschersSolid.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/escher.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>2. Octaedro estrelado</h4>
 <img src="../ar/182.png" class="qr">
 <br>O octaedro estrelado é um poliedro composto por um tetraedro e seu dual (um segundo tetraedro girado 180 graus em relação ao primeiro). O octaedro estrelado também é (incorretamente) chamado de tetraedro estrelado e é a única estrela do octaedro. Uma versão "aramada" do octaedro estrelado às vezes é conhecida como merkaba e contém propriedades místicas.
<br><b>Faces:</b> 8 triângulos equiláteros | <b>Arestas:</b> 12 | <b>Vértices:</b> 8 | <b>Ângulo diédrico:</b> 70,53°. <a href="https://mathworld.wolfram.com/StellaOctangula.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/stella_octangula.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>3. Hexecontaedro rômbico</h4>
 <img src="../ar/183.png" class="qr">
 <br>O hexecontaedro rômbico é um poliedro de 60 faces que pode ser obtido estrelando o triacontaedro rômbico, colocando um plano ao longo de cada aresta que é perpendicular ao plano de simetria em que a aresta se encontra, e tomando o sólido limitado por esses planos resulta em um hexecontaedro. Portanto, trata-se de uma estrela rômbica de triacontaedro. Os losangos de suas faces possuem ângulos dos vértices com medidas iguais a 63,43° e 116,57°.
<br><b>Faces:</b> 60 losangos | <b>Arestas:</b> 120 | <b>Vértices:</b> 62 | <b>Ângulos diédricos:</b> 72° e 216°. <a href="https://mathworld.wolfram.com/RhombicHexecontahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/rhombic_hexecontahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>4. Dodecaedro côncavo</h4>
 <img src="../ar/184.png" class="qr">
 <br>O endododecaedro, também chamado de dodecaedro piroédrico côncavo, é o sólido côncavo correspondente ao vazio interior formado quando cada face de um dodecaedro regular é dobrada ao longo de uma diagonal e as faces resultantes são desdobradas para formar um cubo. O endododecaedro com medida unitária de aresta corresponde à remoção de seis cunhas oblíquas de base quadrada de comprimento de aresta &phi; (onde &phi; é a proporção áurea), altura 1/2 e comprimento de crista 1/2 de um cubo de comprimento de aresta &phi;.
<br><b>Faces:</b> 12 pentágonos simétricos côncavos | <b>Arestas:</b> 30 | <b>Vértices:</b> 20 | <b>Ângulos diédricos:</b> 63,43° e 243,43°. <a href="https://mathworld.wolfram.com/Endododecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/concave_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>5. Icosaedro ortogonal de Jessen</h4>
 <img src="../ar/185.png" class="qr">
 <br>O icosaedro ortogonal de Jessen é um poliedro construído substituindo seis pares de triângulos adjacentes em um icosaedro (cujas arestas formam um quadrilátero oblíquo) por pares de triângulos isósceles compartilhando uma base comum. O poliedro pode ser construído dividindo os lados do octaedro na proporção áurea (como usado na construção do icosaedro ao longo das bordas do octaedro), mas invertendo os segmentos longo e curto. O esqueleto do icosaedro ortogonal de Jessen é o gráfico icosaédrico. Este poliedro têm 8 triângulos equiláteros e 12 triângulos isósceles (com ângulos de 109,47 e 35,26°).
<br><b>Faces:</b> 20 triângulos | <b>Arestas:</b> 30 | <b>Vértices:</b> 12 | <b>Ângulos diédricos:</b> 90° e 270°. <a href="https://mathworld.wolfram.com/JessensOrthogonalIcosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/jessens_orthogonal_icosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>6. Pequeno dodecaedro estrelado</h4>
 <img src="../ar/186.png" class="qr">
 <br><span class="titulo"><b>U<sub>34</sub></b></span> O pequeno dodecaedro estrelado é o sólido de Kepler-Poinsot cujo poliedro dual é o grande dodecaedro. O pequeno dodecaedro estrelado apareceu em 1430 como um mosaico de Paolo Uccello no piso da Catedral de San Marco, Veneza. Foi redescoberto por Kepler (que usou o termo "urchin") em sua obra Harmonice Mundi em 1619, e novamente por Poinsot em 1809. As 12 faces em forma de pentagramas podem ser construídas a partir de um icosaedro encontrando os 12 conjuntos de cinco vértices que são coplanares e conectando cada conjunto para formar um pentagrama.
<br><b>Faces:</b> 12 pentagramas regulares | <b>Arestas:</b> 30 | <b>Vértices:</b> 12 | <b>Ângulo diédrico:</b> 116,57°. <a href="https://mathworld.wolfram.com/SmallStellatedDodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/small_stellated_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>7. Grande dodecaedro estrelado</h4>
 <img src="../ar/187.png" class="qr">
 <br><span class="titulo"><b>U<sub>52</sub></b></span> O grande dodecaedro estrelado é um dos sólidos de Kepler-Poinsot, e seu dual é o grande icosaedro. O grande dodecaedro estrelado foi publicado por Wenzel Jamnitzer em 1568. Foi redescoberto por Kepler, e novamente por Poinsot em 1809. O grande dodecaedro estrelado pode ser construído a partir de um dodecaedro, selecionando os 144 conjuntos de cinco vértices coplanares, descartando conjuntos cujas arestas correspondem às arestas do dodecaedro original: o resultado é 12 pentagramas.
<br><b>Faces:</b> 12 pentagramas regulares | <b>Arestas:</b> 30 | <b>Vértices:</b> 20 | <b>Ângulo diédrico:</b> 63,43°. <a href="https://mathworld.wolfram.com/GreatStellatedDodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_stellated_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>8. Grande dodecaedro</h4>
 <img src="../ar/188.png" class="qr">
 <br><span class="titulo"><b>U<sub>35</sub></b></span> O grande dodecaedro é o sólido de Kepler-Poinsot cujo dual é o pequeno dodecaedro estrelado. É côncavo e consiste em 12 faces pentagonais que se cruzam. As 12 faces pentagonais podem ser construídas a partir de um icosaedro encontrando os 12 conjuntos de cinco vértices que são coplanares e conectando cada conjunto para formar um pentágono. O esqueleto do grande dodecaedro é isomórfico ao gráfico icosaédrico.
<br><b>Faces:</b> 12 pentágonos regulares | <b>Arestas:</b> 30 | <b>Vértices:</b> 12 | <b>Ângulo diédrico:</b> 63,43°. <a href="https://mathworld.wolfram.com/GreatDodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_dodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
 <h4>9. Grande icosaedro</h4>
 <img src="../ar/189.png" class="qr">
 <br><span class="titulo"><b>U<sub>53</sub></b></span> O grande icosaedro é um dos sólidos de Kepler-Poinsot cujo dual é o grande dodecaedro estrelado. O grande icosaedro pode ser construído a partir de um icosaedro com comprimentos de aresta unitários, tomando os 20 conjuntos de vértices que são mutuamente espaçados por uma distância &phi; (proporção áurea). O sólido, portanto, consiste em 20 triângulos equiláteros e a simetria de seu arranjo é tal que o sólido resultante contém 12 pentagramas.
<br><b>Faces:</b> 20 triângulos equiláteros | <b>Arestas:</b> 30 | <b>Vértices:</b> 12 | <b>Ângulo diédrico:</b> 41,81°. <a href="https://mathworld.wolfram.com/GreatIcosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_icosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
<p class="topop"><a href="#p4" class="topo">voltar ao topo</a></p>
<hr>
<h4>10. Pequeno dodecahemicosacron</h4>
 <img src="../ar/190.png" class="qr">
 <br><span class="titulo"><b>U<sub>62</sub></b></span> O poliedro uniforme cujo poliedro dual é o pequeno dodecahemicosacron. É uma versão facetada do icosidodecaedro. 
<br><b>Faces:</b> 12 pentagramas regulares e 10 hexágonos regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 79,19°. <a href="https://mathworld.wolfram.com/SmallDodecahemicosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/small_dodecahemicosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>11. Grande dodecahemidodecaedro</h4>
 <img src="../ar/191.png" class="qr">
 <br><span class="titulo"><b>U<sub>70</sub></b></span> O grande dodecahemidodecaedro é um poliedro não convexo uniforme cuja figura de vértice é um quadrilátero cruzado e seu dual é o grande dodecahemidodecacron. Seu raio circunscrito para o comprimento da aresta igual a 1 é &phi;<sup>-1</sup>, onde &phi; é a proporção áurea. 
<br><b>Faces:</b> 12 pentagramas regulares e 6 decagramas regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 63,43°. <a href="https://mathworld.wolfram.com/GreatDodecahemidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_dodecahemidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>12. Grande dodecahemidodecaedro</h4>
 <img src="../ar/192.png" class="qr">
 <br><span class="titulo"><b>U<sub>62</sub></b></span> O grande dodecahemicosaedro (ou pequeno dodecahemicoaedro) é um poliedro uniforme não convexo cuja figura de vértice é um quadrilátero cruzado. É um dodecadodecaedro facetado e o seu raio circunscrito para o comprimento unitário da aresta mede 2.
<br><b>Faces:</b> 12 pentágonos regulares e 10 hexágonos regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 37,38°. <a href="https://mathworld.wolfram.com/GreatDodecahemicosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_dodecahemicosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>13. Pequeno dodecahemidodecaedro</h4>
 <img src="../ar/193.png" class="qr">
 <br><span class="titulo"><b>U<sub>51</sub></b></span> O pequeno dodecahemidodecaedro é um poliedro uniforme não convexo cujo poliedro dual é o pequeno dodecahemidodecacron. Seu raio circunscrito para o comprimento unitário de aresta é R=&phi;, onde &phi; é a proporção áurea.
<br><b>Faces:</b> 12 pentágonos regulares e 10 decágonos regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 63,43°. <a href="https://mathworld.wolfram.com/SmallDodecahemidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/small_dodecahemidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>14. Grande icosihemidodecaedro</h4>
 <img src="../ar/194.png" class="qr">
 <br><span class="titulo"><b>U<sub>71</sub></b></span> O grande icosihemidodecaedro é um poliedro uniforme não convexo cujo dual é o grande icosihemidodecacron. Seu raio circunscrito para o comprimento unitário de aresta é R=&phi;<sup>-1</sup>, onde &phi; é a proporção áurea.
<br><b>Faces:</b> 20 triângulos equiláteros e 6 decagramas | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 37,38°. <a href="https://mathworld.wolfram.com/GreatIcosihemidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_icosihemidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>15. Pequeno icosihemidodecaedro</h4>
 <img src="../ar/195.png" class="qr">
 <br><span class="titulo"><b>U<sub>49</sub></b></span> O pequeno icosihemidodecaedro é um poliedro uniforme não convexo cujo poliedro dual é o pequeno icosihemidodecacron. É uma versão facetada do icosidodecaedro.
<br><b>Faces:</b> 20 triângulos equiláteros e 6 decágonos | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 79,19°. <a href="https://mathworld.wolfram.com/SmallIcosihemidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/small_icosihemidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>16. Octatetraedro</h4>
 <img src="../ar/196.png" class="qr">
 <br><span class="titulo"><b>U<sub>3</sub></b></span> O octatetraedro é um poliedro uniforme não convexo cujo poliedro dual é o octahemioctacron. É um cuboctaedro facetado. Seu raio circunscrito para o comprimento unitário de aresta é R=1.
<br><b>Faces:</b> 8 triângulos equiláteros e 4 hexágonos | <b>Arestas:</b> 24 | <b>Vértices:</b> 12 | <b>Ângulo diédrico:</b> 70,53°. <a href="https://mathworld.wolfram.com/Octahemioctahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/octahemioctahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>17. Tetrahemihexaedro</h4>
 <img src="../ar/197.png" class="qr">
 <br><span class="titulo"><b>U<sub>4</sub></b></span> O tetrahemihexaedro é um poliedro uniforme não convexo cujo poliedro dual é o tetrahemihexacron. É uma forma facetada do octaedro.
<br><b>Faces:</b> 4 triângulos equiláteros e 3 quadrados | <b>Arestas:</b> 12 | <b>Vértices:</b> 6 | <b>Ângulo diédrico:</b> 54,74°. <a href="https://mathworld.wolfram.com/Tetrahemihexahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/tetrahemihexahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>18. Cubohemioctaedro</h4>
 <img src="../ar/198.png" class="qr">
 <br><span class="titulo"><b>U<sub>15</sub></b></span> O cubohemioctaedro é um poliedro uniforme não convexo cujo dual é o hexahemioctacron. É uma versão facetada do cuboctaedro. Seu raio circunscrito para o comprimento unitário de aresta é R=1.
<br><b>Faces:</b> 6 quadrados e 4 hexágonos regulares | <b>Arestas:</b> 24 | <b>Vértices:</b> 12 | <b>Ângulo diédrico:</b> 54,74°. <a href="https://mathworld.wolfram.com/Cubohemioctahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/cubohemioctahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <p class="topop"><a href="#p4" class="topo">voltar ao topo</a></p>
</details>

<details id="p5" style="border-bottom: 1px solid #a2dec0;">
  <summary>Poliedros de autointerseção</summary>
 <br>Para visualizar os poliedros de autointerseção em RA, visite a página:
<p align="center"><a href="../selfintersect.html" target="_blank">https://paulohscwb.github.io/polyhedra/selfintersect.html</a></p> 
com qualquer navegador com um dispositivo de webcam (smartphone, tablet ou notebook).
<br>O acesso às páginas de RV é feito clicando no círculo azul que aparece em cima de cada marcador.
<p align="center"><img style="border-radius:7px;" src="../ar/example3.jpg" width="85%"></p>
 <hr>
<h4>1. Dodecaedro ditrigonal</h4>
 <img src="../ar/199.png" class="qr">
 <br><span class="titulo"><b>U<sub>41</sub></b></span> O dodecaedro ditrigonal é um poliedro uniforme não convexo cujo poliedro dual é o icosaedro triâmbico medial. É uma versão facetada do pequeno icosidodecaedro ditrigonal.
<br><b>Faces:</b> 12 pentágonos regulares e 12 pentagramas regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 20 | <b>Ângulo diédrico:</b> 63,43°. <a href="https://mathworld.wolfram.com/DitrigonalDodecadodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/ditrigonal_dodecadodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>2. Icosaedro triâmbico medial</h4>
 <img src="../ar/200.png" class="qr">
 <br>O icosaedro triâmbico medial é o poliedro dual do dodecadodecaedro ditrigonal cuja aparência externa é a mesma do grande icosaedro triâmbico (o dual do grande icosidodecaedro ditrigonal), pois os vértices internos estão ocultos. O icosaedro triâmbico medial tem faces pentagramas ocultas, enquanto o grande icosaedro triâmbico tem faces triangulares ocultas.
<br><b>Faces:</b> 20 triambis | <b>Arestas:</b> 60 | <b>Vértices:</b> 24 | <b>Ângulo diédrico:</b> 109,47°. <a href="https://mathworld.wolfram.com/MedialTriambicIcosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/medial_triambic_icosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>3. Pequeno icosidodecaedro ditrigonal</h4>
 <img src="../ar/201.png" class="qr">
 <br><span class="titulo"><b>U<sub>30</sub></b></span> O pequeno icosidodecaedro ditrigonal é um poliedro uniforme não convexo cujo poliedro dual é o pequeno icosaedro triâmbico. Uma versão facetada é o dodecadodecaedro ditrigonal. O casco convexo do pequeno icosidodecaedro ditrigonal é um dodecaedro regular, cujo dual é o icosaedro, então o dual do grande dodecicosidodecaedro ditrigonal (o pequeno icosaedro triâmbico) é uma das estrelas do icosaedro.
<br><b>Faces:</b> 20 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 20 | <b>Ângulo diédrico:</b> 142,62°. <a href="https://mathworld.wolfram.com/SmallDitrigonalIcosidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/small_ditrigonal_icosidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>4. Pequeno icosaedro triâmbico</h4>
 <img src="../ar/164.png" class="qr">
 <br>O pequeno icosaedro triâmbico é o poliedro dual do pequeno icosidodecaedro ditrigonal. Ele pode ser construído pelo aumento de um icosaedro de comprimento de aresta unitário por uma pirâmide. O casco convexo do pequeno icosidodecaedro ditrigonal é um dodecaedro regular cujo dual é o icosaedro, então o dual do pequeno icosidodecaedro ditrigonal (ou seja, o pequeno icosaedro triâmbico) é uma das estrelas do icosaedro.
<br><b>Faces:</b> 20 pentágonos | <b>Arestas:</b> 60 | <b>Vértices:</b> 32 | <b>Ângulo diédrico:</b> 109,47°. <a href="https://mathworld.wolfram.com/SmallTriambicIcosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/small_triambic_icosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>5. Grande icosidodecaedro ditrigonal</h4>
 <img src="../ar/163.png" class="qr">
 <br><span class="titulo"><b>U<sub>47</sub></b></span> O grande icosidodecaedro ditrigonal é o poliedro uniforme cujo dual é o grande icosaedro triâmbico. O casco convexo do grande icosaedro triâmbico é um dodecaedro regular, cujo dual é o icosaedro, de modo que o dual do grande icosidodecaedro ditrigonal (o grande icosaedro triâmbico) é uma das estrelas do icosaedro.
<br><b>Faces:</b> 20 triângulos equiláteros e 12 pentágonos regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 20 | <b>Ângulo diédrico:</b> 79,19°. <a href="https://mathworld.wolfram.com/GreatDitrigonalIcosidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_ditrigonal_icosidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>6. Grande icosaedro triâmbico</h4>
 <img src="../ar/162.png" class="qr">
 <br>O grande icosaedro triâmbico é o dual do grande icosidodecaedro ditrigonal cuja aparência é a mesma do icosaedro triâmbico medial (o dual do dodecadodecaedro ditrigonal), pois os vértices internos estão ocultos. O icosaedro triâmbico medial tem faces pentagramas ocultas, enquanto o grande icosaedro triâmbico tem faces triangulares ocultas.
<br><b>Faces:</b> 20 triambis | <b>Arestas:</b> 60 | <b>Vértices:</b> 32 | <b>Ângulo diédrico:</b> 109,47°. <a href="https://mathworld.wolfram.com/GreatTriambicIcosahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_triambic_icosahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>7. Dodecadodecaedro</h4>
 <img src="../ar/161.png" class="qr">
 <br><span class="titulo"><b>U<sub>36</sub></b></span> O dodecadodecaedro é o poliedro uniforme cujo poliedro dual é o triacontaedro rômbico medial. Seu poliedro dual também é chamado de pequeno triacontaedro estrelado. Pode ser obtido truncando um grande dodecaedro ou facetando um icosidodecaedro com pentágonos e cobrindo os espaços abertos restantes com pentagramas.
<br><b>Faces:</b> 12 pentágonos regulares e 12 pentagramas regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 116,57°. <a href="https://mathworld.wolfram.com/Dodecadodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/dodecadodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>8. Triacontaedro rômbico medial</h4>
 <img src="../ar/160.png" class="qr">
 <br>O triacontaedro rômbico medial é um zonoedro que é o dual do dodecadodecaedro. O triacontaedro rômbico medial contém vértices pentagramas interiores que, no entanto, estão ocultos. O sólido também é chamado de pequeno triacontaedro estrelado.
<br><b>Faces:</b> 30 losangos | <b>Arestas:</b> 60 | <b>Vértices:</b> 24 | <b>Ângulo diédrico:</b> 120°. <a href="https://mathworld.wolfram.com/MedialRhombicTriacontahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/medial_rhombic_triacontahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>9. Grande icosidodecaedro</h4>
 <img src="../ar/159.png" class="qr">
 <br><span class="titulo"><b>U<sub>54</sub></b></span> O grande icosidodecaedro é o poliedro uniforme cujo dual é o grande triacontaedro rômbico. É um sólido de Arquimedes estrelado. Seu raio circunscrito para o comprimento unitário da aresta mede R=&phi;<sup>-1</sup>, onde &phi; é a proporção áurea.
<br><b>Faces:</b> 20 triângulos equiláteros e 12 pentagramas regulares | <b>Arestas:</b> 60 | <b>Vértices:</b> 30 | <b>Ângulo diédrico:</b> 100,81°. <a href="https://mathworld.wolfram.com/GreatIcosidodecahedron.html" target="_blank">Mais sobre...</a>
 <br><a href="../vr/great_icosidodecahedron.htm" target="_blank"><img src="../vr/RVaframe.png" width="200px"></a>
 <hr>
<h4>10. Grande triacontaedro rômbico</h4>
 <a href="../vr/great_rhombic_triacontahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/158A.png" class="foto"></a><img src="../ar/158.png" class="qr">
 <br>O grande triacontaedro rômbico, também chamado de grande triacontaedro estrelado, é um zonoedro que é o dual do grande icosidodecaedro. É uma das estrelas rômbicas de triacontaedro. Aparece junto com uma projeção isométrica do 5-hipercubo na capa do conhecido livro de Coxeter sobre politopos.
<br><b>Faces:</b> 30 losangos | <b>Arestas:</b> 60 | <b>Vértices:</b> 32 | <b>Ângulo diédrico:</b> 72°. <a href="https://mathworld.wolfram.com/GreatRhombicTriacontahedron.html" target="_blank">Mais sobre...</a>
 <p class="topop"><a href="#p5" class="topo">voltar ao topo</a></p>
 <hr>
 <h4>11. Pequeno cubicuboctaedro</h4>
 <a href="../vr/small_cubicuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/157A.png" class="foto"></a><img src="../ar/157.png" class="qr">
 <br><span class="titulo"><b>U<sub>13</sub></b></span> O pequeno cubicuboctaedro é o poliedro uniforme cujo poliedro dual é o pequeno icositetraedro hexacrônico. Versões facetadas incluem o grande rombicuboctaedro uniforme e o pequeno rhombihexaedro. O casco convexo do pequeno cubicuboctaedro é o pequeno rombicuboctaedro de Arquimedes.
<br><b>Faces:</b> 8 triângulos equiláteros, 6 quadrados e 6 octógonos regulares | <b>Arestas:</b> 48 | <b>Vértices:</b> 24 | <b>Ângulos diédricos:</b> 90° e 300,26°. <a href="https://mathworld.wolfram.com/SmallCubicuboctahedron.html" target="_blank">Mais sobre...</a>
 <hr>
 <h4>12. Pequeno icositetraedro hexacrônico</h4>
 <a href="../vr/small_hexacronic_icositetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/156A.png" class="foto"></a><img src="../ar/156.png" class="qr">
 <br>O pequeno icositetraedro hexacrônico é o poliedro uniforme dual do pequeno cubicuboctaedro. Parece o mesmo que o pequeno rhombihexacron.
<br><b>Faces:</b> 24 dardos | <b>Arestas:</b> 48 | <b>Vértices:</b> 20 | <b>Ângulo diédrico:</b> 138,12°. <a href="https://mathworld.wolfram.com/SmallHexacronicIcositetrahedron.html" target="_blank">Mais sobre...</a>
<br><hr>
 <h4>13. Grande cubicuboctaedro</h4>
 <a href="../vr/great_cubicuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/155A.png" class="foto"></a><img src="../ar/155.png" class="qr">
 <br><span class="titulo"><b>U<sub>14</sub></b></span> O grande cubicuboctaedro é o poliedro uniforme cujo poliedro dual é o grande icositetraedro hexacrônico. É uma versão facetada do cubo. O casco convexo do grande cubicuboctaedro é o cubo truncado de Arquimedes.
<br><b>Faces:</b> 8 triângulos equiláteros, 6 quadrados e 6 octagramas regulares | <b>Arestas:</b> 48 | <b>Vértices:</b> 24 | <b>Ângulos diédricos:</b> 90° e 125,26°. <a href="https://mathworld.wolfram.com/GreatCubicuboctahedron.html" target="_blank">Mais sobre...</a>
 <hr>
 <h4>14. Grande icositetraedro hexacrônico</h4>
 <a href="../vr/great_hexacronic_icositetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/154A.png" class="foto"></a><img src="../ar/154.png" class="qr">
 <br>O grande icositetraedro hexacrônico é o dual do grande cubicuboctaedro. Suas faces são pipas, e parte de cada pipa fica dentro do sólido, portanto é invisível em modelos sólidos.
<br><b>Faces:</b> 24 pipas | <b>Arestas:</b> 48 | <b>Vértices:</b> 20 | <b>Ângulo diédrico:</b> 94,53°. <a href="https://mathworld.wolfram.com/GreatHexacronicIcositetrahedron.html" target="_blank">Mais sobre...</a>
 <br><hr>
 <h4>15. Grande rombicuboctaedro uniforme</h4>
 <a href="../vr/uniform_great_rhombicuboctahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/153A.png" class="foto"></a><img src="../ar/153.png" class="qr">
 <br><span class="titulo"><b>U<sub>17</sub></b></span> O grande rombicuboctaedro uniforme é o poliedro uniforme, também conhecido como quase-rhombicuboctaedro, cujo dual é o grande icositetraedro deltoidal. O casco convexo do grande cubicuboctaedro é o cubo truncado de Arquimedes.
<br><b>Faces:</b> 8 triângulos equiláteros e 18 quadrados | <b>Arestas:</b> 48 | <b>Vértices:</b> 24 | <b>Ângulos diédricos:</b> 45° e 324,74°. <a href="https://mathworld.wolfram.com/UniformGreatRhombicuboctahedron.html" target="_blank">Mais sobre...</a>
 <hr>
 <h4>16. Grande icositetraedro deltoide</h4>
 <a href="../vr/great_deltoidal_icositetrahedron.htm" target="_blank" title="3D model" class="fotoA"><img src="../ar/152A.png" class="foto"></a><img src="../ar/152.png" class="qr">
 <br>O grande icositetraedro deltoide (ou grande disdodecaedro sagital) é o dual do grande rombicuboctaedro uniforme. Suas faces são dardos, e parte de cada dardo fica dentro do sólido, portanto, é invisível em modelos sólidos.
<br><b>Faces:</b> 24 dardos | <b>Arestas:</b> 48 | <b>Vértices:</b> 26 | <b>Ângulo diédrico:</b> 94,53°. <a href="https://mathworld.wolfram.com/GreatDeltoidalIcositetrahedron.html" target="_blank">Mais sobre...</a>
 <p class="topop"><a href="#p5" class="topo">voltar ao topo</a></p>
</details>

<br><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" loading="lazy"/></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Polyhedra</span> de <a xmlns:cc="http://creativecommons.org/ns#" href="https://paulohscwb.github.io/polyhedra/" property="cc:attributionName" rel="cc:attributionURL">Paulo Henrique Siqueira</a> está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Atribuição-NãoComercial-SemDerivações 4.0 Internacional</a>.

<h4>Como citar este trabalho:</h4> 
<p>Siqueira, P.H., "Polyhedra". Disponível em: <https://paulohscwb.github.io/polyhedra/>, Setembro de 2019.</p>

<br><b>Referências:</b>
<br>Weisstein, Eric W. "Archimedean Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/ArchimedeanSolid.html" target="_blank">http://mathworld.wolfram.com/ArchimedeanSolid.html</a>
<br>Weisstein, Eric W. "Platonic Solid" From MathWorld-A Wolfram Web Resource. <a href="http://mathworld.wolfram.com/PlatonicSolid.html" target="_blank">http://mathworld.wolfram.com/PlatonicSolid.html</a>
<br>Weisstein, Eric W. "Archimedean Dual" From MathWorld-A Wolfram Web Resource. <a href="https://mathworld.wolfram.com/ArchimedeanDual.html" target="_blank">https://mathworld.wolfram.com/ArchimedeanDual.html</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/Archimedean_solid" target="_blank">https://en.wikipedia.org/wiki/Archimedean_solid</a>
<br>Wikipedia <a href="https://en.wikipedia.org/wiki/en.wikipedia.org/wiki/Platonic_solid" target="_blank">https://en.wikipedia.org/wiki/Platonic_solid</a>
<br>McCooey, David I. "Visual Polyhedra". <a href="http://dmccooey.com/polyhedra/" target="_blank">http://dmccooey.com/polyhedra/</a>
