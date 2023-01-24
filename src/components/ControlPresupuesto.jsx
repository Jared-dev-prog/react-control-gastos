import { useState, useEffect } from "react"
import { formatearDinero } from '../utils'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

export default function ControlPresupuesto({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto }) {
  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)
  const [ porcentaje, setPorcentaje ] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado


    setDisponible(totalDisponible)
    setGastado(totalGastado)

  }, [gastos])

  useEffect(() => {
    const nuevoPorcentaje = (gastado * 100) / presupuesto
    setPorcentaje(nuevoPorcentaje)
  }, [gastado])

  const handleReiniciarApp = () => {
    const respuesta = confirm('¿Desear reiniciar la aplicación?')

    if(respuesta) {
      setPresupuesto(0)
      setGastos([])
      setIsValidPresupuesto(false)
    }
  }

  return (
    <>
      <section className='bg-white sm:w-3/5 mx-auto rounded shadow-xl border py-10 px-10 sm:grid grid-cols-2 gap-4 items-center'>
        <div className="sm:w-full w-3/5 lg:w-3/5 mb-5 sm:mb-0 mx-auto flex items-center">
          <CircularProgressbar 
            value={porcentaje}
            text={`${porcentaje}% gastado`}
            styles={
              buildStyles({
                textSize: "12px", 
                pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6", 
                textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6"
              })
            }
          />
        </div>

        <div className='space-y-3 text-center sm:text-left'>
          <div className="sm:flex justify-end">
            <button className="text-white bg-pink-500 text-sm py-1 px-5 font-semibold rounded"
              onClick={handleReiniciarApp}
            >Reiniciar app</button>
          </div>
          <p className='font-black text-blue-500 sm:text-lg'>Presupuesto: <span className='font-bold text-gray-500 '>{formatearDinero(presupuesto)}</span></p>
          <p className={`${disponible < 0 ? "text-red-500" : "text-blue-500"} font-black sm:text-lg`}>Disponible: <span className='font-bold text-gray-500 '>{formatearDinero(disponible)}</span></p>
          <p className='font-black text-blue-500 sm:text-lg'>Gastado: <span className='font-bold text-gray-500 '>{formatearDinero(gastado)}</span></p>
        </div>
      </section>
    </>
  )
}
