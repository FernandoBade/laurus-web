// src/components/Botao.ts

import { PropriedadesBotao } from "@utils/interfaces";
import { CorBotao, TipoBotao } from "@utils/enums";

export function criarBotao({
    texto,
    icone,
    cor,
    tipo,
}: PropriedadesBotao): string {

    const baseClasses = `
    flex justify-center items-center
    py-2 px-4 border border-transparent
    rounded-md shadow-sm text-sm font-medium
    transition duration-200 ease-in-out
  `;

    const tipoClasses = {
        [TipoBotao.Primario]: `
        bg-${cor}
        text-offwhite
        text-lg
        m-2
        rounded-md
        transition-all
        ease-in-out
        duration-500

        hover:shadow-md
        hover:bg-${cor}-light

        focus:shadow-lg

        active:bg-${cor}-dark
        active:shadow-sm`,

        [TipoBotao.Secundario]: `
        bg-${cor}-light
        hover:bg-${cor}
        text-${cor}-dark
        hover:shadow-md
        focus:shadow-lg
        active:bg-${cor}-dark
        active:shadow-sm`,

        [TipoBotao.Icone]: `
        bg-transparent
        text-${cor}
        hover:bg-${cor}-light
        hover:shadow-md
        focus:shadow-lg
        active:bg-${cor}-light
        active:shadow-sm`,
    }[tipo];

    return `
        <button class="
            ${baseClasses}
            ${tipoClasses}
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-${cor}-500
        ">
      ${icone ? `<img src="${icone}" alt="${texto || ''}" class="h-5 w-5" />` : texto}
    </button>
  `;
}
