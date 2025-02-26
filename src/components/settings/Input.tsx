interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function Input({ label, className, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-700">{label}</label>
            <input
                className={`px-4 py-3 text-sm rounded-2xl border border-gray-300 text-indigo-400 ${className || ''}`}
                {...props}
            />
        </div>
    );
} 