import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  fullWidth?: boolean
};

export const Button = ({ isOutlined, fullWidth, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-12 rounded-lg font-medium bg-purple text-white px-8 flex justify-center items-center cursor-pointer border-0 disabled:opacity-60 disabled:cursor-not-allowed hover:filter hover:brightness-90 ${isOutlined && 'bg-white border border-purple text-purple h-10'} ${fullWidth && 'w-full'}`}
      {...props}
    />
  )
}