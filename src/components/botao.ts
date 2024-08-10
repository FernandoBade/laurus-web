// src/components/Botao.ts

import { PropriedadesBotao } from "@utils/interfaces";
import { TipoBotao, Tamanho, Cor } from "@utils/enums";

export function criarBotao({
    tipo,
    cor,
    icone,
    texto,
    tamanho = Tamanho.Medio,
}: PropriedadesBotao): string {

    const baseClasses = `
    inline-flex items-center justify-center
    border border-transparent rounded-md shadow-sm
    font-medium transition duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    `;

    const tamanhoClasses = {
        [Tamanho.Pequeno]: 'py-1 px-2 text-sm',
        [Tamanho.Medio]: 'py-2 px-4 text-sm',
        [Tamanho.Grande]: 'py-3 px-6 text-base',
        [Tamanho.ExtraGrande]: 'py-3 px-6 text-base',
    }[tamanho];

    const tipoClasses = {
        [TipoBotao.Primario]: `
        bg-${cor} text-offwhite hover:bg-${cor}-light focus:bg-${cor}-dark`,
        [TipoBotao.Secundario]: `
        bg-${cor}-light text-${cor}-dark hover:bg-${cor} focus:bg-${cor}-dark`,
    }[tipo];

    const corClasses = {
        [Cor.Fundo]: 'fundo',
        [Cor.Offwhite]: 'offwhite',
        [Cor.CinzaAzulado]: 'cinzaAzulado',
        [Cor.Cinza]: 'cinza',
        [Cor.Ciano]: 'ciano',
        [Cor.Verde]: 'verde',
        [Cor.Laranja]: 'laranja',
        [Cor.Rosa]: 'rosa',
        [Cor.Roxo]: 'roxo',
        [Cor.Vermelho]: 'vermelho',
        [Cor.Amarelo]: 'amarelo',
    }[cor];

    return `
    <button class="
        ${baseClasses}
        ${tamanhoClasses}
        ${tipoClasses}
        focus:ring-${corClasses}-500
    ">
        ${icone ? `<i class="ri-${icone} mr-2"></i>` : ''}
        ${texto ? `<span>${texto}</span>` : ''}
    </button>
  `;
}
