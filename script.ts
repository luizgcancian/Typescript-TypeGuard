const url = "https://api.origamid.dev/json/notebook.json";

async function fetchProduto() {
  const response = await fetch(url);
  const data = await response.json();
  showProductData(data);
}

interface Produto {
  nome: string;
  preco: number;
}

function showProductData(data: Produto) {
  if ("preco" in data) {
    document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco}</p>
    `;
  }
}

fetchProduto();
