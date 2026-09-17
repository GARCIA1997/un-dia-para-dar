import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Con hash (p. ej. /#circulos) saltamos a la sección, no al inicio.
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}
