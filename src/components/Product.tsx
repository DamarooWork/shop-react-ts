import { useState } from 'react'
import { IProduct } from '../models'
import Modal from './Modal'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnCLasses = ['py-2 px-4 border mb-5', btnBgClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center justify-between">
      <img
        className="max-w-48 max-h-40 mb-5 mw"
        src={product.image}
        alt={product.title}
      />
      <p>{product.title}</p>
      <span className="font-bold mb-2">${product.price}</span>

      <button className={btnCLasses.join(' ')} onClick={() => setDetails(true)}>
        Show details
      </button>

      {details && (
        <Modal onClose={() => setDetails(false)} title={product.title}>
          <div className="flex flex-col items-center justify-between">
            <img
              className="max-w-48 max-h-40 mb-5 mw"
              src={product.image}
              alt={product.title}
            />

            <p> {product.description}</p>
            {product?.rating && (
              <p>
                Rate:
                <span style={{ fontWeight: 'bold' }}>
                  {' '}
                  {product?.rating?.rate}
                </span>
              </p>
            )}
            <span className="font-bold mb-2">${product.price}</span>
            <button
              className={btnCLasses.join(' ')}
              onClick={() => setDetails((prev) => !prev)}
            >
              Hide details
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
