import { Link } from 'react-router-dom'
import { useState } from 'react'
// import Search from './Search'
import { Dialog } from '@headlessui/react'
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const Navbar = ({ user, handleLogOut }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900">
            <Link to="/">HOME</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900">
            <Link to="/about">ABOUT</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900">
            {/* <Link to="/signIn">SIGN IN</Link> */}
            {user ? (
              <button
                onClick={() => handleLogOut()}
                type="button"
                className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                SIGN OUT
              </button>
            ) : (
              <Link to="/signIn">SIGN IN</Link>
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900">
            <Link to="/register">REGISTER</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900">
            <Link to="/order">
              <span>
                <ShoppingBagIcon />
              </span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a> */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    SIGN IN
                  </a> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

export default Navbar
