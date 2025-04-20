import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "disabled";
  children: React.ReactNode;
};

const Button = ({ variant = "default", children, className, ...props }: ButtonProps) => {
  const buttonClass = clsx(
    "rounded-3xl min-w-[120px]  py-2 text-md font-bold",
    variant === "default" &&
      "!bg-[#ff8662] text-white hover:!bg-[#ff8662]/80 cursor-pointer",
    variant === "outline" &&
      "bg-white border-[#ff8662] border-1 text-[#ff8662] rounded-3xl cursor-pointer hover:bg-[#ff8662] hover:text-white",
    variant === "disabled" && "bg-gray-200 text-gray-700 cursor-not-allowed",
    className
  );
  return (
    <button type="button" className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
