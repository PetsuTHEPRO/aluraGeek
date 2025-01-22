// Simulação do banco de dados com um array de objetos
const products = [
  { id: 1, name: "Produto 1", price: 20.0, image: "https://images-food.ifcshop.com.br/produto/24673_0_20221027181618.jpg" },
];

let currentId = 3; // Controla a criação de novos IDs

// Função para obter a lista de produtos
const productList = () => {
  return products;
};

// Função para criar um novo produto
const createProduct = (name, price, image) => {
  const newProduct = { id: currentId++, name, price, image };
  products.push(newProduct);
  console.log("Produto criado com sucesso:", newProduct);
  return newProduct;
};

// Função para deletar um produto por ID
const deleteProduct = (id) => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    console.log(`Produto com id ${id} deletado com sucesso`, deletedProduct);
    return deletedProduct[0];
  } else {
    console.error(`Produto com id ${id} não encontrado`);
    return null;
  }
};

// Objeto de serviços
export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct,
};
