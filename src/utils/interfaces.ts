import { Tamanho, TipoInput } from "@utils/enums";
import { Cor, TipoBotao } from "@utils/enums";

export interface PropriedadesInput {
    tipo: TipoInput;
    rotulo: string;
    placeholder?: string;
    nome: string;
    valor?: string;
    change?: (evento: Event) => void;
    requerido?: boolean;
    tamanhoMaximo?: number;
}


export interface PropriedadesBotao {
    tipo: TipoBotao;
    cor: string;
    icone?: string;
    texto?: string;
    tamanho?: Tamanho;
}