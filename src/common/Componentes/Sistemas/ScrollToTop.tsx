import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ defaultTargetId = null, scrollConfig = null }) {
    const { pathname, hash, key } = useLocation(); // ¡Añade 'key'!

    useEffect(() => {
        const scrollToCenter = (element: HTMLElement) => {
            const elementRect = element.getBoundingClientRect();
            const elementHalfHeight = elementRect.height / 2;
            const viewportHalfHeight = window.innerHeight / 2;
            const scrollPosition = window.scrollY + elementRect.top - viewportHalfHeight + elementHalfHeight;

            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        };

        // 1. Prioridad: Hash en la URL (#seccion)
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                // ¡Forzar scroll incluso si el hash es el mismo!
                setTimeout(() => scrollToCenter(element), 0);
                return;
            }
        }

        // 2. Scroll configurado para esta ruta específica
        if (scrollConfig && scrollConfig[pathname]) {
            const element = document.getElementById(scrollConfig[pathname]);
            if (element) {
                scrollToCenter(element);
                return;
            }
        }

        // 3. Scroll al ID por defecto
        if (defaultTargetId) {
            const element = document.getElementById(defaultTargetId);
            if (element) {
                scrollToCenter(element);
                return;
            }
        }

        // 4. Si no hay nada más, scroll al top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, hash, key, defaultTargetId, scrollConfig]); // ¡Añade 'key' a las dependencias!

    return null;
}

export default ScrollToTop;