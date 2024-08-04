// src/pages/login.ts
import { criarInput } from '../components/input';

export function renderizarPaginaDeLogin() {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = '';

        const formulario = document.createElement('form');
        formulario.className = 'bg-realce p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-20';
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const isValid = Array.from(formulario.querySelectorAll('input')).every(input => {
                input.dispatchEvent(new Event('input'));
                return input.nextElementSibling?.classList.contains('hidden');
            });

            if (isValid) {
                alert('Formulário enviado com sucesso!');
            }
        });

        formulario.appendChild(criarInput('text', 'username', 'Username', 'Digite seu username', ['obrigatorio']));
        formulario.appendChild(criarInput('email', 'email', 'Email', 'Digite seu email', ['obrigatorio', 'email']));
        formulario.appendChild(criarInput('password', 'password', 'Password', 'Digite sua senha', ['caracteres(3,10)', 'obrigatorio']));

        const botaoSubmit = document.createElement('button');
        botaoSubmit.type = 'submit';
        botaoSubmit.className = 'bg-roxo text-offwhite py-2 px-4 rounded-lg w-full mt-4 hover:bg-rosa hover:transition-all duration-500 hover:text-offwhite hover:ease-in-out';
        botaoSubmit.innerText = 'Login';
        botaoSubmit.title = 'Preehcha todos os campos para prosseguir';


        formulario.appendChild(botaoSubmit);
        app.appendChild(formulario);
    }
}
