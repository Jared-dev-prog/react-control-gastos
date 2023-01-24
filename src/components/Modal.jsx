import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import { generarId } from "../utils"

export default function Modal({setModal, animarModal, setAnimarModal, nuevoGasto, setGastoEditar, gastoEditar}) {
  const [ mensaje, setMensaje ] = useState({})
  const [ nombre, setNombre ] = useState('')
  const [ cantidad, setCantidad ] = useState('')
  const [ categoria, setCategoria ] = useState('')
  const [ id, setId ] = useState('')
  const [ fecha, setFecha ] = useState('')

  useEffect(() => {
    if(Object.keys(gastoEditar).length !== 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [gastoEditar])

  const handleSubmit = e => {
    e.preventDefault()
    
    const campos = [ nombre, cantidad, categoria ]

    if(campos.includes('')) {
      setMensaje({
        msg: 'Todos los campos son obligatorios', 
        status: true
      })

      setTimeout(() => {
        setMensaje({})
      }, 2000);
      return
    }

    const gasto = {
      nombre, 
      cantidad, 
      categoria, 
      id, 
      fecha
    }

    nuevoGasto(gasto)
    setGastoEditar({})
  }

  const handleCerrarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
      setGastoEditar({})
    }, 400);
  }

  return (
    <>
      <div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex items-center">
        <div className='bg-white sm:w-2/5 mx-auto py-1 px-2 sm:px-5 w-11/12 rounded'>
          <div className='flex justify-end'>
            <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm mt-5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
            onClick={handleCerrarModal}
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          {mensaje && <Mensaje>{mensaje}</Mensaje>}
          <form className={`${animarModal ? "opacity-100" : "opacity-0"} -mt-5 transition-opacity duration-300 w-4/5 mx-auto`}
            onSubmit={handleSubmit}
          >
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{gastoEditar.nombre ? "Editar gasto" : "Nuevo gasto"}</h3>

            <div>
              <label htmlFor="gasto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre gasto</label>
              <input type="text" name="gasto" id="gasto" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Introduce el nombre del gasto" 
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              ></input>
            </div>

            <div className='mt-5'>
              <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
              <input type="number" name="cantidad" id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Introduce la cantidad del gasto: ej. 300" 
              value={cantidad}
              onChange={e => setCantidad(+e.target.value)}
              ></input>
            </div>

            <div className='mt-5'>
              <label htmlFor="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoría</label>
              <select id="categoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={categoria}
              onChange={e => setCategoria(e.target.value)}
              >
                <option value=''>Selecciona una categoría</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
              </select>
            </div>

            <div className='flex justify-end my-5'>
              <input type="submit" value={gastoEditar.nombre ? "Guardar cambios" : "Agregar gasto"} className='bg-blue-500 sm:w-auto w-full text-white text-sm py-1 px-6 rounded font-semibold hover:bg-blue-700'/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
