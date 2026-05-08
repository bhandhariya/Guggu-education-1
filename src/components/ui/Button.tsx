import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-app-blue text-white shadow-[#49A6C9]',
      secondary: 'bg-app-purple text-white shadow-[#7A66C2]',
      danger: 'bg-app-pink text-white shadow-[#D64D81]',
      success: 'bg-app-green text-slate-800 shadow-[#75C9A4]',
      warning: 'bg-app-yellow text-slate-800 shadow-[#C9A449]',
    };

    const sizes = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6 text-lg font-bold',
      lg: 'py-4 px-8 text-xl font-bold rounded-2xl',
      icon: 'p-3 rounded-full',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, y: 4 }}
        className={cn(
          "relative rounded-xl border-2 border-transparent transition-colors",
          "shadow-[0_6px_0_0_var(--tw-shadow-color)]",
          "active:shadow-[0_0px_0_0_var(--tw-shadow-color)] active:translate-y-[6px]",
          variants[variant],
          sizes[size],
          className
        )}
        style={{
          // Extract the shadow color variable from the variants string for active state
          '--tw-shadow-color': variants[variant].match(/shadow-\[(#[A-Fa-f0-9]+)\]/)?.[1] || '#000'
        } as React.CSSProperties}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
