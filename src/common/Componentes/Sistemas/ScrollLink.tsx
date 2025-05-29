import React from "react";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "./ScrollContext.tsx";

type ScrollMode = "center" | "top" | "bottom" | { offset: number };


interface ScrollLinkProps {
    to: string; // ruta + hash, ej: "/Conocenos#HeaderGenerico"
    scrollMode?: ScrollMode;
    className?: string;
    children: React.ReactNode;
}

export default function ScrollLink({
                                       to,
                                       scrollMode = "center",
                                       className,
                                       children,
                                   }: ScrollLinkProps) {
    const navigate = useNavigate();
    const scrollContext = useScrollContext();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Separar ruta y hash
        const [path, hash] = to.split("#");

        // Guardar en contexto el modo de scroll y hash para ScrollToTop
        scrollContext.setScrollMode(scrollMode);
        scrollContext.setTargetHash(hash || null);

        // Navegar a la ruta
        navigate(path);
    };

    return (
        <a href={to} className={className} onClick={handleClick}>
            {children}
        </a>
    );
}
