import { EmployeeProps } from '@/types/types'
import React from 'react'

const Employee = ({name,email,id,department}:EmployeeProps) => {
  return (
    <div>
        <h2>name:{name}</h2>
        <p>email: {email}</p>
        <p>ID:{id}</p>
        <p>Department:{department}</p>
    </div>
  )
}

export default Employee