import { useContext } from 'react'
import { Context as FarmsContext } from '../contexts/Farms'

const useFarms = () => {
  const { farms } = useContext(FarmsContext)
  console.log('farms',farms);
  return [farms]
}

export default useFarms
