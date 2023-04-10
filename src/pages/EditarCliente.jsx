import { Form, useNavigate, useLoaderData } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { obtenerCliente } from "../data/clientes"
import Formulario from "../components/Formulario"

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId)
  if(Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Cliente no encontrado'
    })
  }
  return cliente
}

function EditarCliente() {
  const navigate = useNavigate()
  const cliente = useLoaderData()

  // const errorContainerRef = useRef(null)

  // useEffect(() => {
  //   if (errores?.length && errorContainerRef.current) {
  //     errorContainerRef.current.scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [errores])
  
  return (
    <>
      <h1 className="font-black text-4xl text-light-blue">Editar Cliente</h1>
      <p className='mt-3'>A continuación podrás modificar los datos de un cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-light-blue text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div  className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
          {/* {errores?.length && errores.map( (error, i) => 
            <Error key={i}>{error}</Error>
          )} */}
        
        <Form
          method="POST"
          noValidate
        >
          <Formulario cliente={cliente} />
          <input 
            type="submit" 
            className="bg-light-blue text-white p-3  font-bold uppercase mt-5 w-full text-lg hover:cursor-pointer"
            value='Registrar Cliente'
          />
        </Form>
      </div>
      
    </>
  )
}

export default EditarCliente
