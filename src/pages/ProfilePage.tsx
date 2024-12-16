import { useState } from 'react'
import Modal from '../components/Modal'

export default function ProfilePage() {
  const [isChanging, setIsChanging] = useState(false)
  return (
    <div className="w-1/2 py-4 px-6 m-auto">
      <section className="text-2xl flex-col items-center justify-between mb-10">
        <h3 className="font-bold">Ваши данные:</h3>
        <div>
          <span>Name: </span>
          <span>Lev</span>
        </div>
        <div>
          <span>LastName: </span>
          <span>Kichigin</span>
        </div>
        <div>
          <span>Email: </span>
          <span>levkichigin</span>
        </div>
        <div>
          <span>Balance: </span>
          <span>$55555</span>
        </div>
      </section>
      <button
        onClick={() => setIsChanging(true)}
        className="border-teal-200 rounded-md px-4 py-2 bg-orange-400 text-xl"
      >
        Change data
      </button>
      {isChanging && (
        <Modal
          onClose={() => setIsChanging(false)}
          title="Type your information"
        >
          <form>
            <label htmlFor="name" className="font-bold text-xl">
              Name:
            </label>
            <input
              name="name"
              type="text"
              className="border py-2 px-4 mb-2 w-full outline-none"
              placeholder="Enter your name..."
              //  value={value}
              //  onChange={changeHandler}
            />
            <label htmlFor="lastName" className="font-bold text-xl">
              LastName:
            </label>
            <input
              name="lastName"
              type="text"
              className="border py-2 px-4 mb-2 w-full outline-none"
              placeholder="Enter yor lastname..."
              //  value={value}
              //  onChange={changeHandler}
            />
            <label htmlFor="email" className="font-bold text-xl">
              Email:
            </label>
            <input
              name="email"
              type="text"
              className="border py-2 px-4 mb-2 w-full outline-none"
              placeholder="Enter product title...."
              //  value={value}
              //  onChange={changeHandler}
            />
            <label htmlFor="balance" className="font-bold text-xl">
              Balance:
            </label>
            <input
              name="balance"
              type="text"
              className="border py-2 px-4 mb-2 w-full outline-none"
              placeholder="Enter product title...."
              //  value={value}
              //  onChange={changeHandler}
            />

            <button
              type="submit"
              className="py-2 px-4 border opacity-90 bg-yellow-400 hover:opacity-70 active:opacity-100"
            >
              Create
            </button>
          </form>
        </Modal>
      )}
    </div>
  )
}
