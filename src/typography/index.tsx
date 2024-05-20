import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string | null
};

export const PageTitle = ({ children, className = null }: TypographyProps) => {
	return <h1 className={`text-4xl ${className}`}>{children}</h1>
};

export const Subtitle = ({ children, className = null }: TypographyProps) => {
	return <h2 className={`text-2xl ${className}`}>{children}</h2>
}

export const Paragraph = ({ children, className = null }: TypographyProps) => {
	return <h2 className={`text-lg ${className}`}>{children}</h2>
}


