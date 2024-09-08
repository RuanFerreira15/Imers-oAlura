let dados = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte",
]

 let livros = [
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    descricao: "Descobrimos a história de Harry Potter, um garoto órfão que descobre ser um bruxo e é convidado para estudar na Escola de Magia e Bruxaria.",
    link: "https://pt.wikipedia.org/wiki/Harry_Potter_e_a_Pedra_Filosofal"
  },
  {
    titulo: "Harry Potter e a Câmara Secreta",
    descricao: "Um novo ano letivo em Hogwarts traz novos mistérios. Alunos estão sendo petrificados e uma voz antiga ecoa pelos corredores da escola: A Câmara Secreta foi aberta.",
    link: "https://pt.wikipedia.org/wiki/Harry_Potter_e_a_Câmara_Secreta"
  },
  {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    descricao: "A chegada de Sirius Black, um prisioneiro fugitivo de Azkaban, agita Hogwarts. Acusado de trair os pais de Harry, Sirius é considerado um dos mais perigosos bruxos das trevas.",
    link: "https://pt.wikipedia.org/wiki/Harry_Potter_e_o_Prisioneiro_de_Azkaban"
  },
  {
    titulo:"Harry Potter e o Cálice de Fogo",
    descricao:"Harry é misteriosamente escolhido para participar do Torneio Tribruxo, um perigoso torneio entre escolas de magia.",
    link:"https://pt.wikipedia.org/wiki/Harry_Potter_e_o_C%C3%A1lice_de_Fogo",
   },
   {
    titulo:"Harry Potter e a Ordem da Fênix:",
    descricao:"O Ministério da Magia nega a volta de Voldemort e Harry precisa lidar com a desinformação e a opressão.",
    link:"Harry_Potter_and_the_Order_of_the_Phoenix",
   },
   {
    titulo:"Harry Potter e o Enigma do Príncipe",
    descricao:"Harry e seus amigos buscam informações sobre os Horcruxes de Voldemort enquanto se preparam para a batalha final.",
    link:"https://pt.wikipedia.org/wiki/Harry_Potter_e_o_Enigma_do_Pr%C3%ADncipe_wikipedia",
   },
   {
    titulo:"Harry Potter e as Relíquias da Morte",
    descricao:"A batalha final contra Voldemort se aproxima e Harry, Ron e Hermione embarcam em uma perigosa missão para destruir os Horcruxes.",
    link:"https://pt.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
   },
];

function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
if(campoPesquisa == ""){
  section.innerHTML = "<p>Nada Foi Encontrado"
  return
}
  
  
  let resultados = "";

  for (const livro of livros) {
    if (livro.titulo.toLowerCase().includes(campoPesquisa) ||
        livro.descricao.toLowerCase().includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${livro.link}" target="_blank">${livro.titulo}</a>
          </h2>
          <p class="descricao-meta">${livro.descricao}</p>
          <a href="${livro.link}">Mais Informações</a>
        </div>
      `;
    }
  }

  section.innerHTML = resultados;
}