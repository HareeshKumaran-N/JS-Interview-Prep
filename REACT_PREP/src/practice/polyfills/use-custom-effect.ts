/* custom useEffect polyfill */

import { useRef, useState } from "react"

export const useCustomEffect = (effect: () => void, deps?: []) => {


    const prevDeps = useRef([]);

    const isFirstRender = useRef(true);

    //mount run
    if(isFirstRender.current)
    {
        isFirstRender.current = false;
        effect();
    }



    
}