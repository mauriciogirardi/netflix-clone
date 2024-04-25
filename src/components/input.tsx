import { ComponentProps, ReactNode } from 'react'

type InputProps = ComponentProps<'input'> & {
  label?: string
  icon?: ReactNode
}

export default function Input({ label, icon: Icon, ...props }: InputProps) {
  return (
    <div className="relative flex items-center rounded-sm border border-neutral-600 pr-4">
      <input
        id={label}
        placeholder=" "
        className="text-md peer block w-full appearance-none bg-transparent px-4 pb-1 pt-6 text-white focus:outline-none focus:ring-0"
        {...props}
      />
      <label
        htmlFor={label}
        className="text-md absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>

      {!!Icon && Icon}
    </div>
  )
}
