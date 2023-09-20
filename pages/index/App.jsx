import { useDeferredValue, useEffect, useState, useTransition } from 'react'
import Basket from '../../components/Basket'
import Header from '../../components/Header'
import Main from '../../components/Main'
import data from './data'

function App() {
  const [cartItems, setCartItems] = useState([])
  const { products } = data
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  }

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : []
      )
    })
  }, [])

  const cartItemsCount = useDeferredValue(cartItems.length)

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header countCartItems={cartItemsCount} />
      <div className="row">
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  )
}

export default App
