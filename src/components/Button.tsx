import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  fullWidth?: boolean
};

export const Button = ({ isOutlined, fullWidth, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-12 rounded-lg font- whitespace-nowrap bg-purple text-white px-4 sm:px-8 flex justify-center items-center cursor-pointer border-0 disabled:opacity-60 disabled:cursor-not-allowed hover:filter hover:brightness-90 ${isOutlined && 'bg-white dark:bg-shadow border border-purple text-purple h-10 w-32'} ${fullWidth && 'w-full'}`}
      {...props}
    />
  )
}