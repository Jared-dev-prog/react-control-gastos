import { useState } from "react"
import Mensaje from "./Mensaje"

export default function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {
  const [ mensaje, setMensaje ] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    
    if(!presupuesto || presupuesto <= 0) {
      setMensaje({
        msg: 'Presupuesto no válido', 
        status: true
      })

      setTimeout(() => {
        setMensaje({})
      }, 2000)
      return
    } 

    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <>
      <form action="" className='bg-white sm:w-3/5 mx-auto rounded shadow-lg border py-10 px-10'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="presupuesto" className="block text-center mb-4 text-base sm:text-xl font-medium text-gray-900 dark:text-white">Definir presupuesto</label>
           <input type="number" id="presupuesto" className="bg-gray-50 border border-gray-300 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 text-center block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Añade tu presupuesto"
           value={presupuesto}
           onChange={e => setPresupuesto(+e.target.value)}
           ></input>
        </div>

        <div className='sm:flex justify-end mt-5'>
          <button type='submit' className='bg-blue-500 sm:w-auto w-full text-white text-sm py-1 px-6 rounded font-semibold hover:bg-blue-700'>Añadir</button>
        </div>
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
      </form>
    </>
  )
}
