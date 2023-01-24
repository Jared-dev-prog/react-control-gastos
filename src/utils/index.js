const formatearDinero = cantidad => {
  const dinero = cantidad
  return new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'}).format(dinero)
}

const generarId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

const formaterFecha = fecha => {
  const nuevaFecha = new Date(fecha)
  const option = {
    year: 'numeric', 
    month: 'long', 
    day: '2-digit'
  }

  return nuevaFecha.toLocaleDateString('es', option)
}

export { formatearDinero, generarId, formaterFecha }