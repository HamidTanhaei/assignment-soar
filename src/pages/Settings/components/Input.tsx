interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-2 relative'>
      <label className='text-gray-700' htmlFor={props.name} id={props.name}>{label}</label>
      <input
        className={`px-4 py-3 text-sm rounded-2xl border border-gray-300 text-indigo-400 ${className || ''}`}
        aria-labelledby={props.name}
        aria-placeholder="true"
        {...props}
      />
      {error && (
        <p className='text-red-500 text-xs absolute -bottom-5'>{error}</p>
      )}
    </div>
  );
}
