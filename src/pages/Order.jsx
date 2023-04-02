import { XMarkIcon } from '@heroicons/react/20/solid'

const Order = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item[0].price, 0)
  const deleteItem = () => {
    cart.pop(item[0])
  }
  console.log('items below')
  console.log(cart)
  console.log('price')
  console.log(totalPrice)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              <li className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  {cart.map((items) =>
                    items.map((item) => (
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        />
                        <h2>{item.name}</h2>
                        <h3>${item.price}</h3>
                      </div>
                    ))
                  )}
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          {/* <a
                            href={item.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {item.name}
                          </a> */}
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm"></div>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      {/* <label htmlFor={`quantity-${item}`} className="sr-only">
                        Quantity, {item.name}
                      </label> */}
                      {/* <select
                        id={`quantity-${item}`}
                        name={`quantity-${item}`}
                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select> */}

                      <div className="absolute right-0 top-0">
                        <button
                          onClick={() => deleteItem()}
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          Delete Item
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">
                Order total
              </dt>
              <dd className="text-base font-medium text-gray-900">
                ${totalPrice}
              </dd>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Continue Shopping
              </button>
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Order
