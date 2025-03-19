
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ForestButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const ForestButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ForestButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all transform focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2',
        variant === 'primary' 
          ? 'bg-forest-500 text-white shadow-md hover:shadow-lg hover:bg-forest-600 active:bg-forest-700'
          : 'bg-bark-100 text-forest-800 border border-forest-200 hover:bg-forest-100 hover:border-forest-300 active:bg-forest-200',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ForestButton;
