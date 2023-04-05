import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className='md:w-1/5 bg-blue px-3 py-8'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
        <nav className='mt-10'>
          <Link className='text-2xl block mt-2 hover:text-purple text-white ' to='/'>Clientes</Link>
          <Link className='text-2xl block mt-2 hover:text-purple text-white ' to='/clientes/nuevo'>Nuevo Cliente</Link>
        </nav>
      </aside>
      <main className="md:w-4/5 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
