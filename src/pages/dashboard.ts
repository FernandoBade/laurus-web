import { criarBotao } from '@components/botao';
import { Cor, Tamanho, TipoBotao } from "@utils/enums";

export function renderizarBotoesDesignSystem(): void {
    const cores = [
        Cor.Fundo, Cor.Offwhite, Cor.CinzaAzulado, Cor.Cinza, Cor.Ciano,
        Cor.Verde, Cor.Laranja, Cor.Rosa, Cor.Roxo, Cor.Vermelho, Cor.Amarelo
    ];

    const tamanhos = [
        Tamanho.Pequeno, Tamanho.Medio, Tamanho.Grande, Tamanho.ExtraGrande
    ];

    const combinacoes = cores.map(cor =>
        tamanhos.map(tamanho => `
            ${criarBotao({
                tipo: TipoBotao.Primario,
                cor,
                texto: `Primário ${cor} ${tamanho}`,
                tamanho,
            })}
            ${criarBotao({
                tipo: TipoBotao.Secundario,
                cor,
                texto: `Secundário ${cor} ${tamanho}`,
                tamanho,
            })}
            ${criarBotao({
                tipo: TipoBotao.Primario,
                cor,
                icone: 'wallet-line',
                texto: `Primário ${cor} ${tamanho} com ícone`,
                tamanho,
            })}
            ${criarBotao({
                tipo: TipoBotao.Secundario,
                cor,
                icone: 'wallet-line',
                texto: `Secundário ${cor} ${tamanho} com ícone`,
                tamanho,
            })}
        `).join('')
    ).join('');

    const designSystem = `
    <div class="space-y-4">
        ${combinacoes}
    </div>
    `;

    const appElement = document.getElementById('app');

    if (appElement) {
        appElement.innerHTML = designSystem;
    } else {
        console.error("Elemento com ID 'app' não encontrado.");
    }
}
