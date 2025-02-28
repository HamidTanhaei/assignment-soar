export interface SearchInputProps {
    error?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    suffixButton?: React.ReactNode;
    suffixProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    prefix?: React.ReactNode;
    className?: string;
}