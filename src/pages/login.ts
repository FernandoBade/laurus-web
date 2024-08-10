import { criarBotao } from '@components/botao';
import { criarInput } from '@components/input';
import { Cor, Tamanho, TipoBotao, TipoInput } from "@utils/enums";
import { renderizarBotoesDesignSystem } from '../pages/dashboard';

export function renderizarLogin(): void {
    const loginForm = `
    <div>${renderizarBotoesDesignSystem()}</div>
    <form class="space-y-6" id="login-form">
    ${criarInput({
        tipo: TipoInput.Texto,
        rotulo: 'Usuário',
        nome: 'username',
        placeholder: 'Digite seu usuário',
        requerido: true,
    })}
    ${criarInput({
        tipo: TipoInput.Email,
        rotulo: 'E-mail',
        nome: 'email',
        placeholder: 'Digite seu e-mail',
        requerido: true,
    })}
    ${criarInput({
        tipo: TipoInput.Senha,
        rotulo: 'Senha',
        nome: 'password',
        placeholder: 'Digite sua senha',
        requerido: true,
    })}
    ${criarBotao({
        tipo: TipoBotao.Primario,
        cor: Cor.Roxo,
        icone: 'wallet-line',
        texto: 'Pagar com Carteira',
        tamanho: Tamanho.Medio,
    })}
    ${criarBotao({
        tipo: TipoBotao.Secundario,
        cor: Cor.Roxo,
        texto: 'Confirmar',
        tamanho: Tamanho.Grande,
    })}
    ${criarBotao({
        tipo: TipoBotao.Secundario,
        cor: Cor.Roxo,
        icone: 'wallet-line',
        tamanho: Tamanho.ExtraGrande,
    })}
    </form>
    `;

    const appElement = document.getElementById('app');

    if (appElement) {
        appElement.innerHTML = loginForm;
    } else {
        console.error("Elemento com ID 'app' não encontrado.");
    }
}