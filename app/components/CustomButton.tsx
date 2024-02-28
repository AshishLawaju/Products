import { Link } from "lucide-react";
import { ReactNode } from "react";

type CustomButtonProps = {
  title: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  variants?: "primary" | "secondary" | "default";
};

const CustomButton = ({
  title,
  className,
  icon,
  onClick,
  href,
  variants,
}: CustomButtonProps) => {
  let defaultClassName =
    "py-2 px-5 bg-red-400 text-black flex items-center gap-2";
  const Icon = icon;

  let variantClassName = "";
  if (variants === "primary") {
    variantClassName = "bg-blue-500 hover:bg-blue-700";
  } else if (variants === "secondary") {
    variantClassName = "bg-slate-600 hover:bg-slate-700 ";
  } else if (variants === "default") {
    variantClassName = "bg-red-600 hover:bg-red-700 ";
  } else {
    variantClassName = "";
  }
  const combinedClassName = `${defaultClassName} ${className} ${variantClassName} `;
  return (
    <>
      {href ? (
        <Link href={href} className={""} onClick={onClick}>
          {icon && <span className="text-blue-500">{icon}</span>} ssdasd {title}
        </Link>
      ) : (
        <button className={combinedClassName} onClick={onClick}>
          {icon && <span className="text-blue-500">{icon}</span>} {title}
        </button>
      )}
    </>
  );
};

export default CustomButton;
