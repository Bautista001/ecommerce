const products = [
    {
        id: '001',
        name: 'Samsung Galaxy S21',
        price: 1200,
        category: 'Celulares',
        img: '../images/samsung-galaxy-21.jpg',
        stock: 50,
        description: 'El Samsung Galaxy S21 es uno de los mejores smartphones del mercado, con una pantalla OLED de 6.2 pulgadas, procesador Exynos 2100 y cámara trasera de 12MP+64MP+12MP.'
      },
      {
        id: '002',
        name: 'iPhone 13 Pro',
        price: 1300,
        category: 'Celulares',
        img: '../images/Iphone-13-Pro.3.jpg',
        stock: 30,
        description: 'El iPhone 13 Pro es el último modelo de Apple, con una pantalla OLED de 6.1 pulgadas, procesador A15 Bionic y cámara trasera de 12MP+12MP+12MP.'
      },
      {
        id: '003',
        name: 'OnePlus 9 Pro',
        price: 1000,
        category: 'Celulares',
        img: '../images/oneplus-9-pro.jpg',
        stock: 20,
        description: 'El OnePlus 9 Pro es un smartphone de alta gama, con una pantalla OLED de 6.7 pulgadas, procesador Snapdragon 888 y cámara trasera de 48MP+50MP+8MP+2MP.'
      },
      {
        id: '004',
        name: '../images/oneplus-9-pro.jpg',
        price: 250,
        category: 'Celulares',
        img: '../images/xiaomi-redmi-10.jpg',
        stock: 100,
        description: 'El Xiaomi Redmi Note 10 es un smartphone de gama media, con una pantalla OLED de 6.43 pulgadas, procesador Snapdragon 678 y cámara trasera de 48MP+8MP+2MP+2MP.'
      },
      {
        id: '005',
        name: 'MacBook Pro 16"',
        price: 2399,
        category: 'Computadoras',
        img: '../images/macbook-pro-16.jpg',
        stock: 20,
        description: 'La MacBook Pro 16" es una de las mejores portátiles de Apple, con pantalla Retina de 16 pulgadas, procesador Intel Core i7 o i9 y almacenamiento SSD de hasta 8 TB.'
      },
      {
        id: '006',
        name: 'Dell XPS 13',
        price: 1199,
        category: 'Computadoras',
        img: '../images/dell-xps-13.jpg',
        stock: 30,
        description: 'La Dell XPS 13 es una portátil de alta gama, con pantalla InfinityEdge de 13.3 pulgadas, procesador Intel Core i5 o i7 y almacenamiento SSD de hasta 2 TB.'
      },
      {
        id: '007',
        name: 'HP Spectre x360',
        price: 1299,
        category: 'Computadoras',
        img: '../images/hp-spectre-x360.png',
        stock: 15,
        description: 'La HP Spectre x360 es una portátil convertible de alta gama, con pantalla OLED de 13.3 pulgadas, procesador Intel Core i5 o i7 y almacenamiento SSD de hasta 2 TB.'
      },
      {
        id: '008',
        name: 'Asus ROG Zephyrus G1',
        price: 1499,
        category: 'Computadoras',
        img: '../images/Asus-Zephyrus-G14.jpg',
        stock: 10,
        description: 'La Asus ROG Zephyrus G14 es una portátil para juegos de alta gama, con pantalla Full HD de 14 pulgadas, procesador AMD Ryzen 9 y tarjeta gráfica NVIDIA GeForce RTX 3060.'
      },
      {
        id: '009',
        name: 'Samsung Galaxy S21',
        price: 1200,
        category: 'smartphone',
        img: '../images/samsung-galaxy-21.jpg',
        stock: 50,
        description: 'El Samsung Galaxy S21 es uno de los mejores smartphones del mercado, con una pantalla OLED de 6.2 pulgadas, procesador Exynos 2100 y cámara trasera de 12MP+64MP+12MP.'
      },
      {
        id: '010',
        name: 'Samsung Galaxy S21',
        price: 1200,
        category: 'smartphone',
        img: '../images/samsung-galaxy-21.jpg',
        stock: 50,
        description: 'El Samsung Galaxy S21 es uno de los mejores smartphones del mercado, con una pantalla OLED de 6.2 pulgadas, procesador Exynos 2100 y cámara trasera de 12MP+64MP+12MP.'
      },
      {
        id: '011',
        name: 'Samsung Galaxy S21',
        price: 1200,
        category: 'smartphone',
        img: '../images/samsung-galaxy-21.jpg',
        stock: 50,
        description: 'El Samsung Galaxy S21 es uno de los mejores smartphones del mercado, con una pantalla OLED de 6.2 pulgadas, procesador Exynos 2100 y cámara trasera de 12MP+64MP+12MP.'
      },
      {
        id: '012',
        name: 'Samsung Galaxy S21',
        price: 1200,
        category: 'smartphone',
        img: '../images/samsung-galaxy-21.jpg',
        stock: 50,
        description: 'El Samsung Galaxy S21 es uno de los mejores smartphones del mercado, con una pantalla OLED de 6.2 pulgadas, procesador Exynos 2100 y cámara trasera de 12MP+64MP+12MP.'
      },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (produtcId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === produtcId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
           console.log("categoria por id", categoryId);
        },400)
    })
}