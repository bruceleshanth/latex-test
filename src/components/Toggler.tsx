import type { ChangeEventHandler } from 'react'

type Props = {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
}

export default function Toggler({ checked, onChange, label }: Props) {
  return (
    <div className="">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="displayMode"
        className="mb-8 h-4 w-4"
      />

      <label htmlFor="displayMode" className="ml-2">
        {label}
      </label>
    </div>
  )
}
