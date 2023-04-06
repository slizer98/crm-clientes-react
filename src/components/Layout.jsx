import { Outlet, NavLink} from 'react-router-dom'

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className='md:w-1/5 bg-indigo-800 px-3 py-8'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
        <nav className='mt-10'>
          <NavLink
              className={({ isActive }) => `${ isActive ? "text-light-blue" : "text-white" } text-2xl block mt-2 hover:text-light-blue` }
              to="/" >
              Inicio
            </NavLink>
  
            <NavLink
              className={({ isActive }) => `${ isActive ? "text-light-blue" : "text-white" } text-2xl block mt-2 hover:text-light-blue` }
              to="/clientes/nuevo" >
              Nuevo cliente
            </NavLink>
        </nav>
      </aside>
      <main className="md:w-4/5 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
