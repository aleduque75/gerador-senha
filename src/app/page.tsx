"use client";
import { useEffect, useState } from "react";
import opcoes from "@/data/OpcoesCaracteres";
import Checkbox from "@/components/Checkbox";
import Senha from "@/model/Senha";
import ExibirSenha from "@/components/ExibirSenha";
import ForcaSenha from "@/components/ForcaSenha";

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(8);
  const [tipoCaracteres, setTipoCaracteres] = useState(opcoes);
  const [senha, setSenha] = useState<string>("");
  const [forcaSenha, setForcaSenha] = useState(1);

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tipoCaracteres));
  }, [tamanho, tipoCaracteres]);

  const lidaComMudanca = (indice: number) => {
    const aux = [...tipoCaracteres];
    aux[indice].valor = !aux[indice].valor;
    setTipoCaracteres([...aux]);
  };

  const gerarSenha = () => {
    const novaSenha = Senha.gerarSenha(tamanho, tipoCaracteres);
    setSenha(novaSenha);
  };

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold select-none">
        Gerador de Senha
      </h1>
      <div className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12  bg-slate-600 text-gray-200 rounded-md p-8 select-none">
        <div className="flex flex-col gap-3 text-2xl ">
          <label className="flex justify-between">
            <span className="">Tamanho da senha:</span>
            <span className="text-blue-500 ">{tamanho}</span>
          </label>
          <input
            className=""
            type="range"
            min={5}
            max={30}
            value={tamanho}
            onChange={(e) => setTamanho(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col my-3">
          {tipoCaracteres.map((opcao, i) => {
            return (
              <Checkbox
                key={opcao.id}
                id={opcao.id}
                texto={opcao.nome}
                selecionado={opcao.valor}
                lidaComMudanca={() => lidaComMudanca(i)}
              />
            );
          })}
        </div>
        <ForcaSenha forca={forcaSenha} />
        <button
          className={`
          text-white bg-blue-500 rounded-md p-2 w-full mt-3
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
          onClick={gerarSenha}
        >
          Gerar Senha
        </button>
        <ExibirSenha senha={senha} />
      </div>
    </main>
  );
}
