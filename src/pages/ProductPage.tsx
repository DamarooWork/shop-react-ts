import { useContext } from 'react'
import CreateProduct from '../components/CreateProduct'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import Product from '../components/Product'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'

export default function ProductPage() {
  const { loading, products, error, AddProduct } = useProducts()
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)

  function createHandler(product: IProduct) {
    closeModal()
    AddProduct(product)
  }
  return (
    <div className="container m-auto pt-5 text-center grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2  gap-2">
      {loading ? (
        <Loader />
      ) : (
        <>
          <button
            className="fixed right-5 bottom-5 border py-2 px-4 bg-red-400 rounded-lg"
            onClick={() => {
              openModal()
            }}
          >
            Add new cloth
          </button>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </>
      )}
      {error && <ErrorMessage error={error} />}

      {modal && (
        <Modal onClose={() => closeModal()} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  )
}
