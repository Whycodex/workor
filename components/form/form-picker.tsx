"use client"

import React from 'react'

interface FormPickerProps {
    id: string;
    errors?: Record<string,string[]|undefined>;
}

export const FormPicker = ({
    id,
    errors
}: FormPickerProps) => {
  return (
    <div>form picker</div>
  )
}
