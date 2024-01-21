const productos = [
    {
       id:"zapatilla-1",
       nombre:"Zapatilla Nike 1",
       img:"../img/ZAPATILLA1.avif",
       idCat:"Zapatillas Nike",
       precio: 10000
      },
      {
        id:"zapatilla-2",
        nombre:"Zapatilla Nike 2",
        img:"../img/ZAPATILLA2.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-3",
        nombre:"Zapatilla Nike 3",
        img: "../img/ZAPATILLA3.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-4",
        nombre:"Zapatilla Nike 4",
        img:"../img/ZAPATILLA4.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-5",
        nombre:"Zapatilla Nike 5",
        img:"../img/ZAPATILLA5.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-6",
        nombre:"Zapatilla Nike 6",
        img:"../img/ZAPATILLA6.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-7",
        nombre:"Zapatilla Nike 7",
        img:"../img/ZAPATILLA7.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-8",
        nombre:"Zapatilla Nike 8",
        img:"../img/ZAPATILLA8.avif",
        idCat:"Zapatillas Nike",
        precio: 10000
       },
       {
        id:"zapatilla-9",
        nombre:"Zapatilla Adidas 1",
        img:"../img/ZAPATILLA9.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id:"zapatilla-10",
        nombre:"Zapatilla Adidas 2",
        img:"../img/ZAPATILLA10.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id: "zapatilla-11",
        nombre:"Zapatilla Adidas 3",
        img:"../img/ZAPATILLA11.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id:"zapatilla-12",
        nombre:"Zapatilla Adidas 4",
        img:"../img/ZAPATILLA12.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id: "zapatilla-13",
        nombre: "Zapatilla Adidas 5",
        img: "../img/ZAPATILLA13.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id:"zapatilla-14",
        nombre:"Zapatilla Adidas 6",
        img: "../img/ZAPATILLA14.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id:"zapatilla-15",
        nombre: "Zapatilla Adidas 7",
        img:"../img/ZAPATILLA15.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id:"zapatilla-16",
        nombre:"Zapatilla Adidas 8",
        img: "../img/ZAPATILLA16.avif",
        idCat:"Zapatillas Adidas",
        precio: 10000
       },
       {
        id:"zapatilla-17",
        nombre:"Zapatilla Puma 1",
        img: "../img/ZAPATILLA17.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },
       {
        id:"zapatilla-18",
        nombre:"Zapatilla Puma 2",
        img:"../img/ZAPATILLA18.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },

       {
        id: "zapatilla-19",
        nombre:"Zapatilla Puma 3",
        img: "../img/ZAPATILLA19.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },

       {
        id: "zapatilla-20",
        nombre:"Zapatilla Puma 4",
        img: "../img/ZAPATILLA20.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },
       {
        id:"zapatilla-21",
        nombre:"Zapatilla Puma 5",
        img:"../img/ZAPATILLA21.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },
       {
        id:"zapatilla-22",
        nombre: "Zapatilla Puma 6",
        img:"../img/ZAPATILLA22.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },
       {
        id:"zapatilla-23",
        nombre: "Zapatilla Puma 7",
        img:"../img/ZAPATILLA23.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },
       {
        id:"zapatilla-24",
        nombre:"Zapatilla Puma 8",
        img:"../img/ZAPATILLA24.avif",
        idCat:"Zapatillas Puma",
        precio: 10000
       },
]

export const getProductos = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(productos);
      }, 100)
  })
}

export const getUnProducto = (id) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const producto = productos.find(prod => prod.id === id);
          resolve(producto);
      }, 2000)
  })
}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
          resolve(productosCategoria);
      }, 2000)
  })
}