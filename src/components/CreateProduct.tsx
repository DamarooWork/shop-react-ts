import React, { useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
}
interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  async function submitHandler(e: React.FormEvent) {
    setLoading(true)
    e.preventDefault()
    setError('')
    if (value.trim().length === 0) {
      setError('Please enter valid title')
      setLoading(false)
      return
    }

    productData.title = value
    const resp = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    )
    onCreate(resp.data)
    setLoading(false)
  }
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        name="name"
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter product title...."
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      {loading ? (
        <Loader />
      ) : (
        <button
          type="submit"
          className="py-2 px-4 border opacity-90 bg-yellow-400 hover:opacity-70 active:opacity-100"
        >
          Create
        </button>
      )}
    </form>
  )
}
