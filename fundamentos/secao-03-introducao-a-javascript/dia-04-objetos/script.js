const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};
const livro = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}

// console.log(`O livro favorito de ${reader.name}  se chama "${reader.favoriteBooks[0].title}".`);

// ------------------------------------
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    const customerInfo = (fullOrder) => {
        const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
        const costumerName = fullOrder.name;
        const phoneNumber = fullOrder.phoneNumber;
        const street = fullOrder.address.street;
        const addressNumber = fullOrder.address.number;
        const apartment = fullOrder.address.apartment;
      
        return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP: ${apartment}.`;
      }
      
      console.log(customerInfo(order));
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    const orderModifier = (fullOrder) => {
        fullOrder.name = 'Luiz Silva';
        fullOrder.payment.total = 50;
        const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
        return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
      }
      
      console.log(orderModifier(order));
  }
  
  console.log(orderModifier(order));
