import { useEffect,useRef } from "react/cjs/react.development";
import { createPortal } from "react-dom";

const Modal = ({children}) => {
const elRef = useRef(null);
if(!elRef.current){
    elRef.current = document.createElement("div");
}

useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    //it will behave like compoent did unmount(to avid memory leaks)
    return () => modalRoot.removeChild(elRef.current);
},[]);

return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;