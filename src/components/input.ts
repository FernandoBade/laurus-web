import { ValidacoesDeInput } from '../utils/enums';

type Validador = {
    regra: ValidacoesDeInput;
    valor?: number | [number, number] | RegExp | ((valor: string) => string | null);
};

function obrigatorio(valor: string): string | null {
    return valor ? null : 'Campo obrigatório';
}

function email(valor: string): string | null {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor) ? null : 'Email inválido';
}

function minMaxCaracteres(valor: string, range: [number, number]): string | null {
    const [min, max] = range;
    if (valor.length < min) return `Mínimo de ${min} caracteres`;
    if (valor.length > max) return `Máximo de ${max} caracteres`;
    return null;
}

function pattern(valor: string, regex: RegExp): string | null {
    return regex.test(valor) ? null : 'Formato inválido';
}

function selecionarValidador(regra: ValidacoesDeInput, valor: string, parametro?: number | [number, number] | RegExp | ((valor: string) => string | null)): string | null {
    switch (regra) {
        case ValidacoesDeInput.OBRIGATORIO:
            return obrigatorio(valor);
        case ValidacoesDeInput.EMAIL:
            return email(valor);
        case ValidacoesDeInput.MIN_MAX:
            return minMaxCaracteres(valor, parametro as [number, number]);
        case ValidacoesDeInput.REGEX:
            return pattern(valor, parametro as RegExp);
        default:
            return null;
    }
}

function parseValidadores(validadores: string[]): Validador[] {
    const mapeamentoRegras: { [chave: string]: ValidacoesDeInput } = {
        obrigatorio: ValidacoesDeInput.OBRIGATORIO,
        email: ValidacoesDeInput.EMAIL,
    };

    return validadores.map(validador => {
        if (validador.startsWith('caracteres')) {
            const match = validador.match(/\((\d+),(\d+)\)/);
            if (match) {
                const min = parseInt(match[1], 10);
                const max = parseInt(match[2], 10);
                return { regra: ValidacoesDeInput.MIN_MAX, valor: [min, max] };
            }
        }

        const regra = mapeamentoRegras[validador];
        if (regra) {
            return { regra };
        }

        throw new Error(`Validador não reconhecido: ${validador}`);
    });
}

export function renderizarPaginaDeLogin() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';

        const formulario = document.createElement('form');
        formulario.className = 'bg-realce p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20';
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validação de todos os campos ao submeter o formulário
            const isValid = Array.from(formulario.querySelectorAll('input')).every(input => {
                input.dispatchEvent(new Event('input')); // Dispara validações
                return input.nextElementSibling?.classList.contains('hidden');
            });

            if (isValid) {
                alert('Formulário enviado com sucesso!');
            }
        });

        // Criando os inputs e adicionando ao formulário
        formulario.appendChild(criarInput('text', 'username', 'Username', 'Digite seu username', ['obrigatorio']));
        formulario.appendChild(criarInput('email', 'email', 'Email', 'Digite seu email', ['obrigatorio', 'email']));
        formulario.appendChild(criarInput('password', 'password', 'Password', 'Digite sua senha', ['caracteres(3,10)', 'obrigatorio']));

        const botaoSubmit = document.createElement('button');
        botaoSubmit.type = 'submit';
        botaoSubmit.className = 'bg-verde text-fundo py-2 px-4 rounded-lg w-full mt-4';
        botaoSubmit.innerText = 'Login';

        formulario.appendChild(botaoSubmit);
        app.appendChild(formulario);
    }
}

export function criarInput(
    tipo: string,
    nome: string,
    label: string,
    placeholder: string,
    validadores?: string[],
    id?: string
): HTMLElement {
    const container = document.createElement('div');
    container.className = 'relative mb-6 flex items-center';

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'relative w-full flex items-center';

    const input = document.createElement('input');
    input.type = tipo;
    input.name = nome;
    input.id = id || nome;
    input.placeholder = placeholder;
    input.className = `
        peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6]
        outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100
        placeholder-amarelo border-b-2 border-cinzaAzulado
        focus:border-roxo focus:border-b-2 focus:outline-none
        text-offwhite
        dark:text-offwhite dark:placeholder:text-cinzaAzulado dark:peer-focus:outline-none
        [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
    `;

    input.style.outline = 'none';
    input.style.boxShadow = 'none';

    let maxChars: number | undefined;

    // Definindo o maxlength e obtendo o valor para a validação
    if (validadores) {
        const parsedValidadores = parseValidadores(validadores);
        const minMaxValidador = parsedValidadores.find(v => v.regra === ValidacoesDeInput.MIN_MAX);
        if (minMaxValidador) {
            const [min, max] = minMaxValidador.valor as [number, number];
            maxChars = max;
            input.setAttribute('maxlength', max.toString());
        }
    }

    input.addEventListener('blur', () => {
        if (input.value) {
            labelElemento.classList.add('scale-[0.8]', '-translate-y-[0.9rem]');
        } else {
            labelElemento.classList.remove('scale-[0.8]', '-translate-y-[0.9rem]');
        }
    });

    input.addEventListener('focus', () => {
        labelElemento.classList.add('scale-[0.8]', '-translate-y-[0.9rem]');
    });

    inputWrapper.appendChild(input);

    const labelElemento = document.createElement('label');
    labelElemento.htmlFor = id || nome;
    labelElemento.innerText = label;
    labelElemento.className = `
        pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]
        text-cinza transition-all duration-200 ease-out
        peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-roxo
        dark:text-cinzaAzulado dark:peer-focus:text-roxo
    `;

    inputWrapper.appendChild(labelElemento);
    container.appendChild(inputWrapper);

    const erro = document.createElement('p');
    erro.className = 'absolute text-vermelho text-sm right-0 ml-4 hidden';
    erro.style.transition = 'none';
    container.appendChild(erro);

    if (validadores) {
        const parsedValidadores = parseValidadores(validadores);
        input.addEventListener('input', () => {
            let mensagemErro: string | null = null;

            if (maxChars !== undefined && input.value.length >= maxChars) {
                mensagemErro = `Máximo de ${maxChars} caracteres atingido`;
            } else {
                for (const validador of parsedValidadores) {
                    mensagemErro = selecionarValidador(validador.regra, input.value, validador.valor);
                    if (mensagemErro) break;
                }
            }

            if (mensagemErro) {
                erro.innerText = mensagemErro;
                erro.classList.remove('hidden');
                input.classList.remove('border-roxo');
                input.classList.add('border-vermelho');
            } else {
                erro.innerText = '';
                erro.classList.add('hidden');
                input.classList.remove('border-vermelho');
                input.classList.add('border-roxo');
            }
        });
    }

    return container;
}