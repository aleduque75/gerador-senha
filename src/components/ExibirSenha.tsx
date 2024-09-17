import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";

interface ExibirSenhaProps {
  senha: string;
}

export default function ExibirSenha(props: ExibirSenhaProps) {
  const [mostrarAviso, setMostrarAviso] = useState<boolean>(false);

  const copiarSenha = () => {
    navigator.clipboard.writeText(props.senha);
    setMostrarAviso(true);
    setTimeout(() => {
      setMostrarAviso(false);
    }, 2000);
  };
  return (
    <div className="mt-3">
      {props.senha.trim() !== "" && (
        <>
          <span className="font-bold">Senha gerada</span>
          <div
            className="
        flex justify-between items-center
        mt-3 text-zinc-100 
        border border-slate-700 p-2 rounded-md
        bg-slate-500 w-full text-center
        "
          >
            {props.senha}
            <IconCopy
              className="hover:text-blue-500 cursor-pointer"
              onClick={copiarSenha}
            />
          </div>
        </>
      )}

      {mostrarAviso && (
        <p className="text-green-500 mt-2">
          Senha copiada para a área de transferência !!
        </p>
      )}
    </div>
  );
}
