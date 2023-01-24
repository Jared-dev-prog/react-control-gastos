import Gasto from "./Gasto"

export default function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {
  return (
    <>
      
      { filtro ? (<>
        <h2 className="mb-4 text-xl font-extrabold py-4 leading-none tracking-tight text-gray-400 sm:text-xl md:text-2xl lg:text-3xl dark:text-white ">{gastosFiltrados.length ? 'Gastos' : 'No existen gastos en esta categoría'}</h2>
       {gastosFiltrados.map(gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))}
      </>): (<>
        <h2 className="mb-4 text-xl font-extrabold py-4 leading-none tracking-tight text-gray-400 sm:text-xl md:text-2xl lg:text-3xl dark:text-white ">{gastos.length ? 'Gastos' : 'No existen gastos'}</h2>
        {gastos.map(gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))}
        </>)}


    </>
  )
}
