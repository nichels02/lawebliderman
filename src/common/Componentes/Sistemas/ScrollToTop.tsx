import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollContext } from "./ScrollContext";

function ScrollToTop() {
    const { pathname, key } = useLocation();
    const { scrollMode, targetHash, setTargetHash } = useScrollContext();

    useEffect(() => {
        if (!targetHash) return;

        const scrollToElement = (element: HTMLElement) => {
            const elementRect = element.getBoundingClientRect();
            let scrollPosition: number;

            if (scrollMode === "center") {
                const elementHalfHeight = elementRect.height / 2;
                const viewportHalfHeight = window.innerHeight / 2;
                scrollPosition = window.scrollY + elementRect.top - viewportHalfHeight + elementHalfHeight;
            } else if (scrollMode === "top") {
                scrollPosition = window.scrollY + elementRect.top;
            } else if (typeof scrollMode === "object" && scrollMode.offset !== undefined) {
                scrollPosition = window.scrollY + elementRect.top - scrollMode.offset;
            } else {
                scrollPosition = window.scrollY + elementRect.top; // Fallback
            }

            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        };

        const element = document.getElementById(targetHash);
        if (element) {
            setTimeout(() => scrollToElement(element), 0);
        }

        // Limpiar el target para evitar re-scroll en renders futuros
        setTargetHash(null);

    }, [pathname, key, targetHash, scrollMode, setTargetHash]);

    return null;
}

export default ScrollToTop;


/*


type ScrollMode = "center" | "top" | { offset: number };

function ScrollToTop({ defaultTargetId = null, scrollConfig = null, scrollMode = "center" }: {
    defaultTargetId?: string | null;
    scrollConfig?: Record<string, string> | null;
    scrollMode?: ScrollMode;
}) {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        const scrollToElement = (element: HTMLElement) => {
            const elementRect = element.getBoundingClientRect();
            let scrollPosition: number;

            if (scrollMode === "center") {
                const elementHalfHeight = elementRect.height / 2;
                const viewportHalfHeight = window.innerHeight / 2;
                scrollPosition = window.scrollY + elementRect.top - viewportHalfHeight + elementHalfHeight;
            } else if (scrollMode === "top") {
                scrollPosition = window.scrollY + elementRect.top;
            } else if (typeof scrollMode === "object" && scrollMode.offset !== undefined) {
                scrollPosition = window.scrollY + elementRect.top - scrollMode.offset;
            } else {
                scrollPosition = window.scrollY + elementRect.top; // Fallback
            }

            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        };

        const scrollToTarget = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => scrollToElement(element), 0);
                return true;
            }
            return false;
        };

        if (hash && scrollToTarget(hash.substring(1))) return;
        if (scrollConfig && scrollConfig[pathname] && scrollToTarget(scrollConfig[pathname])) return;
        if (defaultTargetId && scrollToTarget(defaultTargetId)) return;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, hash, key, defaultTargetId, scrollConfig, scrollMode]);

    return null;
}



* */