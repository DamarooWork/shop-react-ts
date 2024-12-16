import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct } from '../models'

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function AddProduct(product: IProduct) {
    setProducts((prev) => [...prev, product])
  }
  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const resp = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=20'
      )
      setProducts(resp.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  return {
    products,
    error,
    loading,
    AddProduct,
  }
}
