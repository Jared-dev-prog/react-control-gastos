import React from 'react'

function Filtros({ filtro, setFiltro }) {
  return (
    <div className='mt-5 rounded bg-white shadow-lg sm:flex gap-2 py-5 px-4 items-center '>
      <p className='basis-1/4 text-center text-gray-400 font-extrabold text-xl mb-2'>Filtrar gastos</p>
       <form action="" className='basis-3/4'>
        <select id="categoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          >
            <option value=''>Todas las categorías</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
       </form>
    </div>
  )
}

export default Filtros