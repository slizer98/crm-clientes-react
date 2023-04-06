
function Cliente({cliente}) {
  const { nombre, telefono, email, empresa, id } = cliente
  return (
    <tr key={id}>
        <td className="p-6">
        {nombre}
        </td>
    </tr>
  )
}

export default Cliente
