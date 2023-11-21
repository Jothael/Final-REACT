/*const products = [
    {
      id: '1',
      name: 'Camiseta',
      price: 500,
      category: 'ropa',
      image: '/images/ropa1.jpeg',
      stock: 4,
      description: 'Una camiseta de alta calidad en varios colores.'
    },
    {
      id: '2',
      name: 'Crema facial',
      price: 1500,
      category: 'cosmeticos',
      image: '/images/cosmeticos.jpeg',
      stock: 15,
      description: 'Crema facial hidratante para todo tipo de piel.'
    },
    {
      id: '3',
      name: 'Esmalte de uñas',
      price: 1000,
      category: 'uñas',
      image: '/images/uñas.jpeg',
      stock: 6,
      description: 'Esmalte de uñas de larga duración en varios colores.'
    },
  ]
  
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}*/