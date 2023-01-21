import { useCallback, useState, useRef, useEffect } from "react";

const useHover = () => {
    const [state, setState] = useState(false);
    const ref = useRef(null);

    const isMouseOver = useCallback(() => setState(true), []);
    const isMouseOut = useCallback(() => setState(false), []);

    useEffect(() => {
        const element = ref.current;
        if(!element) return;
        
        element.addEventListener("mouseover", isMouseOver);
        element.addEventListener("mouseout", isMouseOut);

        return () => {
            element.removeEventListener("mouseover", isMouseOver);
            element.removeEventListener("mouseout", isMouseOut);
        };

    }, [ref, isMouseOver, isMouseOut]);

    return [ref, state];
};

export default useHover;