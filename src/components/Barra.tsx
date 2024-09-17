import { space } from "postcss/lib/list";

interface BaraProps {
    corFundo: string;

}

export default function Barra(props: BaraProps) {
    return (
        <span className={`
            ml-2 w-3 h-8 p-1.5 rounded-sm border-2 border-gray-100
            ${props.corFundo}
            `}></span>
    )
}