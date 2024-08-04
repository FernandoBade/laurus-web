import { PropriedadesInput } from "@utils/interfaces";

export function criarInput({
    tipo,
    rotulo,
    placeholder,
    nome,
    valor = '',
    change,
    requerido = false,
    tamanhoMaximo,
}: PropriedadesInput): string {
    return `
    <div class="mb-6">
      <label for="${nome}" class="
        block
        text-sm
        font-medium
        text-roxo
      ">
        ${rotulo}
      </label>
      <input
        type="${tipo}"
        name="${nome}"
        id="${nome}"
        placeholder="${placeholder}"
        value="${valor}"
        ${requerido ? 'required' : ''}
        ${tamanhoMaximo ? `maxLength="${tamanhoMaximo}"` : ''}
        ${change ? 'onchange="lidarComAlteracaoDeInput(event)"' : ''}
        class="
            mt-1
            block
            w-full
            px-3
            py-2
            bg-transparent
            border-b-2
            border-b-roxo
            border-x-0
            border-t-0
            shadow-sm
            text-offwhite

            focus:outline-none
            focus:ring-0
            focus:border-b-2
            focus:border-b-rosa

            placeholder-cinzaAzulado-light
            placeholder-opacity-75
        "
      />
    </div>
  `;
}

function lidarComAlteracaoDeInput(evento: Event): void {
    const alvo = evento.target as HTMLInputElement;
    if (alvo && typeof alvo.onchange === 'function') {
        alvo.onchange(evento);
    }
}
