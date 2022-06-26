import type { ChangeEventHandler } from 'react'

type Props = {
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
}

export default function InputBox({ value, onChange, placeholder }: Props) {
  return (
    <textarea
      className="h-full w-full p-4 bg-slate-100"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  )
}
