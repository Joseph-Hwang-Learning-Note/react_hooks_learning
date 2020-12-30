import { useEffect, useRef } from "react";

const useClick = (onClick) => {
    // if(typeof onClick !== "function") {
    //     return;
    // }
    const element = useRef();
    useEffect(() => {
        let current_state = element.current
        if(current_state) {
            current_state.addEventListener("click",onClick);
        }
        return (() => {
            if (current_state) {
                current_state.removeEventListener("click",onClick);
            }
        })
    },[onClick])
    return element;
}

export default useClick;