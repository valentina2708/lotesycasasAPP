import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = (thresh = 0.1) => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: thresh });

    useEffect(() => {
        view ? controls.start("show") : controls.start("hidden");
    });
        
    
    return [element, controls];
}