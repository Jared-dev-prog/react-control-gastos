import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"

export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) {
  return (
    <header>
      <h1 className="mb-4 text-xl font-extrabold py-4 leading-none tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl dark:text-white text-center">Planificador de gastos</h1>

      {isValidPresupuesto ? (
        <>
          <ControlPresupuesto 
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />       
        </>

      ):( 
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}

        

    </header>
  )
}
