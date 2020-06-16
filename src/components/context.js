import { createContext } from "react"

export const ContextNum = createContext(
    {
        num: 10,
        setNum: () => {},
    });
