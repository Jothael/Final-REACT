export const createAdaptedProducts = (doc) => {
    const fields = doc.data()

    return {
        id: doc.id,
        name: fields.name,
        image: fields.image,
        stock: fields.stock,
        category: fields.category,
        price: fields.price,
        description: fields.description
    }
}