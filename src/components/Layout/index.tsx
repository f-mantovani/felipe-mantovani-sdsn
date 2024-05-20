import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode}) => {
	return <main className={`grid-rows-[auto, 1fr, auto] grid min-h-screen items-center px-12`}>{children}</main>
}