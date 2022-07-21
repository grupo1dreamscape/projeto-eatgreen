![bc2c1f92a537639b8d31116c5273c6d9ebcc9c5c](https://user-images.githubusercontent.com/109383851/179417523-257cb058-2d89-43e7-9607-c2c009cb1343.png)

### APRESENTAÇÃO DO DESAFIO ###

#### OBJETIVO ####
Desafio da semifinal do programa Hiring Coders#3, executado pela VTEX em parceria com a Gama Academy.
O objetivo deste desafio é calcular o gasto de um consumidor em uma loja e convertê-lo para um programa de pontos.

#### CENÁRIO: ####
Maria tem uma loja e quer implementar um modelo de recompensa.
A cada R$1,00 gasto deve gerar 1 ponto de recompensa. Todo consumidor precisa saber quantos pontos tem em sua carteira virtual, logo um contador deve estar visível para validação do saldo.
Maria não está preocupada com o uso dos pontos após a geração, pois ela já possui um sistema no qual o usuário final pode utilizar os pontos gerados, mas esse sistema demanda uma API para consultar o saldo e outra para debitar um valor.

#### FERRAMENTAS: ####
- Workspaces compartilhados na plataforma **VTEX IO**;
- **Toolbelt VTEX** para criação da UI;
- Backend montado na estrutura **Amazon Web Services**;

#### PASSO A PASSO ENDPOINT SALDO: ####

Atualizar saldo:

URL: https://nes6120zw5.execute-api.sa-east-1.amazonaws.com/atualizarsaldo/{id}/{pontos}
<br>Metodo "POST ":
<br>Onde:
- {id} identificacao do usuario TIPO String
- {pontos} é o valor a ser a ser contabilizado TIPO numerico POSITIVO/NEGATIVO
<br>Retorno: Saldo TIPO numerico

Exemplos:
Somar:
https://nes6120zw5.execute-api.sa-east-1.amazonaws.com/atualizarsaldo/1/100
Debitar:
https://nes6120zw5.execute-api.sa-east-1.amazonaws.com/atualizarsaldo/1/-50

Consultar saldo:

URL: https://nes6120zw5.execute-api.sa-east-1.amazonaws.com/buscasaldo/{id}
<br>Metodo "POST ":
<br>Onde:
- {id} identificacao do usuario TIPO String
<br>Retorno: Saldo TIPO numerico

Exemplo:
https://nes6120zw5.execute-api.sa-east-1.amazonaws.com/buscarsaldo/1


___

![logo-eat-green](https://user-images.githubusercontent.com/109383851/179417609-43b7c796-3994-432e-92eb-42839a4f0fa0.png)

### APRESENTAÇÃO DO PROJETO: ###
O projeto **Eat Green** 🌱 foi desenvolvido para atender àqueles que busca um regime alimentar que exclui os produtos de origem animal. 
>O veganismo, segundo definição da Vegan Society, é um modo de viver (ou poderíamos chamar apenas de "escolha") que busca excluir, na medida do possível e praticável, todas as formas de exploração e crueldade contra os animais - seja na alimentação, no vestuário ou em outras esferas do consumo. <br>
Visite o site: **[Vegan Society](https://www.vegansociety.com/go-vegan/definition-veganism)**
<br>
<img width="467" alt="textomotivacional" src="https://user-images.githubusercontent.com/109383851/179419527-680b5969-1202-4f83-a228-0e81822f398f.png">

#### PRINCÍPIOS: ####
- ###### ÉTICA ######

São abatidos mais de 10 mil animais terrestres por minuto no Brasil para produzir carnes, leite e ovos. A maioria destes animais são frangos, porcos e bois – animais que têm uma complexa capacidade cognitiva e sentem dor, sofrimento e alegria da mesma forma que os cães que temos em casa. Por isso a escolha vegetariana é uma escolha de não compactuar com a exploração, confinamento e abate destes animais.

- ###### SAÚDE ######

Diversos estudos associam efeitos positivos de saúde com a maior utilização de produtos de origem vegetal e restrição de produtos oriundos do reino animal. De acordo com inúmeros estudos científicos – cada vez mais freqüentes e publicados por instituições idôneas –, o consumo de carnes está diretamente associado ao risco aumentado de doenças crônicas e degenerativas como diabetes, obesidade, hipertensão e alguns tipos de câncer.

- ###### MEIO AMBIENTE ######

Segundo a ONU, o setor pecuário é o maior responsável pela erosão de solos e contaminação de mananciais aqüíferos do mundo. A ONU também estimou que cerca de 14,5% das emissões de gases do efeito estufa oriundas de atividades humanas têm origem no setor pecuário. A maior parte do desmatamento da Amazônia tem sua origem na produção de carnes, laticínios e ovos. 97% do farelo de soja e 60% do milho produzidos globalmente são utilizados não para consumo humano, mas para virar ração para as fazendas e granjas industriais, produzindo alimentos a uma eficiência muito baixa.

- ###### SOCIEDADE ######

A produção de alimentos através da atividade pecuária não é apenas ambientalmente degradante, mas também contribui significativamente para o desperdício global de alimentos, uma vez que são consumidos de 2 a 10 Kg de proteína vegetal (por exemplo, soja) para produzir apenas 1 Kg de proteína de origem animal. Em um mundo com 1 bilhão de pessoas que passam fome, jogar toda essa comida no lixo é socialmente inaceitável. Ademais, o setor pecuário concentra a maior parte da mão-de-obra escrava rural brasileira.
<br>
<br>
<img width="406" alt="textomotivacional2" src="https://user-images.githubusercontent.com/109383851/179420651-ef4bba87-c872-4d86-9dfc-5c5936d58224.png">
___
#### NOSSA MISSÃO: ####
>Acreditamos na **mudança**!
Num infinito de possibilidades, encontramos na alimentação consciente uma paixão comum e certeira. <br>
E foi aí que veio a ideia da **Eat Green**🌱!
Aqui temos comidas plant-based surpreendentes, que te ajudam a sentir mais leveza, saúde, disposição, economizar tempo na agenda e ainda reduzir o impacto ambiental.<br>
Tudo isso com receitas incríveis, criativas, elaboradas por nutricionistas que entendem pra chuchu do assunto. Pense **verde**!
Conheca as nossas refeições clicando **[aqui!](https://dreamscapeloja1--dreamscape.myvtex.com/)**
<br>


![VTEX_Logo svg](https://user-images.githubusercontent.com/109383851/179416600-c9f74716-f9d2-44b7-9bef-4f9a02df5bc3.png)
![456b8d86743825 Y3JvcCwyMTUwLDE2ODEsMCwzNDA](https://user-images.githubusercontent.com/109383851/179416794-4181061a-f739-46d3-9b8a-f1abd37cf57f.jpg)
![1280px-Amazon_Web_Services_Logo svg](https://user-images.githubusercontent.com/109383851/179416870-e0155bf3-e2bb-4f1a-a4fa-51384804f2b2.png)
![logodreamscape](https://user-images.githubusercontent.com/109383851/179419264-14332046-e672-499d-bf80-6b6b63df6b0b.png)

