import React from 'react'
import Image from 'next/image'
import { IconType } from 'react-icons'

interface CarIconProps {
  Icon?: IconType
  src?: string
}

const CarIcon = ({ src, Icon } : CarIconProps) => {

  if (Icon) return (<Icon />)

  return (
    <div>

    </div>
  )
}

export default CarIcon