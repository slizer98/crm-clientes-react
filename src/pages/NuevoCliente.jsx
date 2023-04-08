import { useNavigate, Form, useActionData } from "react-router-dom"
import { useEffect, useRef } from "react";
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function action({request}) {
  const formData  = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')
  const errores = []
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)) {
    errores.push('El email no es válido')
  }
  // validar datos

  if(Object.values(datos).includes('')) {
   errores.push('Todos los campos son obligatorios')
  }

  // Retornar errores
  if(Object.keys(errores).length) {
    return errores
  }

}

function NuevoCliente() {
  
  const navigate = useNavigate()
  const errores = useActionData()
  const errorContainerRef = useRef(null)

  useEffect(() => {
    if (errores?.length && errorContainerRef.current) {
      errorContainerRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [errores])

  
  return (
    <>
      <h1 className="font-black text-4xl text-light-blue">Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-light-blue text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div ref={errorContainerRef} className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
          {errores?.length && errores.map( (error, i) => 
            <Error key={i}>{error}</Error>
          )}
        
        <Form
          method="POST"
          noValidate
        >
          <Formulario />
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

export default NuevoCliente
