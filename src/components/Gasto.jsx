import { formaterFecha } from '../utils'
import iconoAhorro from "../img/icono_ahorro.svg"
import iconoCasa from "../img/icono_casa.svg"
import iconoComida from "../img/icono_comida.svg"
import iconoGastos from "../img/icono_gastos.svg"
import iconoOcio from "../img/icono_ocio.svg"
import iconoSalud from "../img/icono_salud.svg"
import iconoSuscripciones from "../img/icono_suscripciones.svg"

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import "../../node_modules/react-swipeable-list/dist/styles.css"

export default function ({gasto, setGastoEditar, eliminarGasto}) {
  const { nombre, cantidad, categoria, id, fecha } = gasto

  const icono = {
    ahorro: iconoAhorro, 
    casa: iconoCasa, 
    comida: iconoComida, 
    gastos: iconoGastos, 
    ocio: iconoOcio, 
    salud: iconoSalud, 
    suscripciones: iconoSuscripciones
  }

const leadingActions = () => (
  <LeadingActions >
    <SwipeAction 
      onClick={() => setGastoEditar(gasto)}
      >
      <div className='bg-blue-500 flex items-center justify-center h-32 rounded shadow-lg '>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
          <line x1="16" y1="5" x2="19" y2="8" />
      </svg>
      </div>
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => eliminarGasto(id)}
    >
      <div className='bg-red-500 flex items-center justify-center h-32 rounded shadow-lg '>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-off" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="3" y1="3" x2="21" y2="21" />
          <path d="M4 7h3m4 0h9" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="14" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
          <line x1="18.384" y1="14.373" x2="19" y2="7" />
          <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </div>
    </SwipeAction>
  </TrailingActions>
);

  return (
    <SwipeableList >
      <SwipeableListItem 
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='bg-white rounded border shadow-xl sm:flex justify-between mb-5 py-5 px-5 sm:w-3/4 mx-auto items-center'>
          <div className='flex gap-4'>
            <img src={icono[categoria]} alt={`icono ${categoria}`} className="sm:w-20 w-14 mr-1"/>
            <div>
              <p className='capitalize text-gray-400 font-bold'>{categoria}</p>
              <p className='capitalize text-gray-500 font-bold text-lg'>{nombre}</p>
              <p className='text-gray-500 font-bold text-sm'>Agregado el: <span className='text-gray-400 font-bold'>{formaterFecha(fecha)}</span></p>
            </div>
            
          </div>
          <div>
            <p className='text-gray-500 font-extrabold text-lg text-end'>${cantidad}</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
