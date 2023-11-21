import { memo } from 'react'
import { useAsync } from '../../hooks/useAsync'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'

const MemoizedItemList = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Error</h1>
    }

    if(products.length === 0) {
        return <h1>Productos Inexistentes</h1>
    }

    return (
        <div>
            <h1 >{greeting }</h1>
            <MemoizedItemList products={products}/>
        </div>
    )
}

export default ItemListContainer