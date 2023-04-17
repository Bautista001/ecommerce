const products = [
    {
        id: '001', name: '', price: '', category: '', img: '', stock: '',
        description: '',
    },
    {
        id: '002', name: '', price: '', category: '', img: '', stock: '',
        description: '',
    },
    {
        id: '003', name: '', price: '', category: '', img: '', stock: '',
        description: '',
    },
    {
        id: '004', name: '', price: '', category: '', img: '', stock: '',
        description: '',
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