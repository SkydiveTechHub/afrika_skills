import { FC, ReactNode } from "react"

export interface ContainerProps{
    children:ReactNode
}

export const PrimaryContainer:FC<ContainerProps> = ({children})=>{
    return(
        <section className="space-y-4 w-full">{children}</section>
    )
}