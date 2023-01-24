import { useState, useEffect } from "react";
import { generarId } from "./utils";
import Header from "./components/Header"
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import Filtros from "./components/Filtros";

function App() {
  const [ presupuesto, setPresupuesto ] = useState(
    +localStorage.getItem('presupuesto') ?? 0
  )
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false)
  const [ modal, setModal ] = useState(false)
  const [ animarModal, setAnimarModal ] = useState(false)

  const [ gastos, setGastos ] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [ gastoEditar, setGastoEditar ] = useState({})

  const [ filtro, setFiltro ] = useState('')
  const [ gastosFiltrados, setGastosFiltrados ] = useState([])

  useEffect(() => {
    if(Object.keys(gastoEditar).length !== 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 400)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if(filtro) {
      const gastosFiltro = gastos.filter(gasto => gasto.categoria === filtro)

      setGastosFiltrados(gastosFiltro)
    }
  }, [filtro])

  useEffect(() => {
    const presupuestoLS = +localStorage.getItem('presupuesto') ?? 0

    if(presupuestoLS !== 0) {
      setIsValidPresupuesto(true)
    } 
  }, [])


  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 400)
  }

  const nuevoGasto = gasto => {
    if(gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    } else {
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 400);
  }

  const eliminarGasto = id => {
    const gastosActualizado = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizado)
  }

  return (
    <div className="bg-blue-500 h-56">
      <div className="container mx-auto w-11/12">
        <Header 
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>

      {isValidPresupuesto && (
        <>
          <main className="container mx-auto sm:w-3/5 px-10">
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>

          <button type="button" className="fixed right-10 bottom-10 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleNuevoGasto}
          >
            <svg fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </button>
        </>

      )}

     {modal && <Modal 
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        nuevoGasto={nuevoGasto}
        setGastoEditar={setGastoEditar}
        gastoEditar={gastoEditar}
     />}
        
    </div>
  )
}

export default App
