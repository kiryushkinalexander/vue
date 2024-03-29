const coffee = {
 state: {
  coffee: [
    {
      id: 0,
      name: "Solimo Coffee Beans 2kg",
      price: 10.73,
      image: "coffee-1.jpg",
    },
    {
      id: 1,
      name: "Malogo Coffee Beans 2kg",
      price: 10.73,
      image: "coffee-2.jpg",
    },
    {
      id: 2,
      name: "Paulig Coffee Beans 2kg",
      price: 10.73,
      image: "coffee-3.jpg",
    },
    {
      id: 3,
      name: "Kimbo Coffee Beans 2kg",
      price: 10.73,
      image: "coffee-1.jpg",
    },
    {
      id: 4,
      name: "Lavazza Coffee Beans 2kg",
      price: 10.73,
      image: "coffee-2.jpg",
    },
    {
      id: 5,
      name: "Kopi Luwak Coffee Beans 2kg",
      price: 10.73,
      image: "coffee-3.jpg",
    },
  ],
 },
getters: {
  getCoffee(state) {
    return state.coffee
  },
  getProductById(state) {
    return (id) => {
      return state.coffee.find((card) => card.id === +id);
    }
  }
}
}

export default coffee