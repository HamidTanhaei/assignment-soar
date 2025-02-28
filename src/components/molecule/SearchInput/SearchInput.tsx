import { SearchInputProps } from './SearchInput.type';
import { cn } from '@/lib/utils.ts';
export const SearchInput: React.FC<SearchInputProps> = ({ error, inputProps, suffixButton, suffixProps, prefix, className }) => {
    return (
        <div className={cn('md:w-auto w-full order-last md:order-none bg-slate-100 hover:bg-gray-200 cursor-pointer text-slate-400 rounded-full flex items-center relative align-strech',
            prefix && 'pl-3 xl:pl-6',
            className
        )}>
            {prefix}
            <input
                {...inputProps}
                className={cn('w-full py-2 lg:py-3.5 border-none outline-none bg-transparent text-xs lg:text-[16px] placeholder:text-slate-400 px-3 xl:px-6')}
            />
            {error && (
                <span className='text-red-500 text-xs absolute -bottom-5'>
                    {error}
                </span>
            )}
            {suffixButton && (<button
                className='flex gap-3 py-2 xl:py-4 px-6 bg-zinc-700 text-white rounded-full text-sm xl:text-[16px] xl:font-semibold hover:bg-zinc-600 transition-colors align-center'
                {...suffixProps}
            >
                {suffixButton}
            </button>)}
            
        </div>
    );
};
