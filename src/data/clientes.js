export async function obtenerClientes() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const clientes = await respuesta.json()
    return clientes
}

export async function obtenerCliente(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}` )
    const cliente = await respuesta.json()
    return cliente
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      })
      await respuesta.json()
      
  } catch (error) {
      console.log(error)
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      })
      await respuesta.json()
      
  } catch (error) {
      console.log(error)
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'DELETE'
      })
      await respuesta.json()
      
  } catch (error) {
      console.log(error)
  }
}