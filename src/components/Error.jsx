
function Error({children}) {

  window.scrollTo(0, 0)
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase ">
      {children}
    </div>
  )
}

export default Error
