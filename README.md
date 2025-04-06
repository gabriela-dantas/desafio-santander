# desafio-santander

## SonarQube
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=alert_status<br><br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=bugs <br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=code_smells <br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=coverage <br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=duplicated_lines_density<br><br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=duplicated_lines_density<br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=duplicated_lines_density<br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=security_rating<br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=security_rating<br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=security_rating<br>
https://sonarcloud.io/api/project_badges/measure?project=gabriela-dantas_desafio-santander&metric=security_rating<br><br>



### Explicando o teste unitário que se encontra no diretório src/App.test.js

✅ import { render, screen } from "@testing-library/react";

    render: simula a renderização do componente na tela (como se ele estivesse aparecendo no navegador).

    screen: permite acessar os elementos que foram renderizados.

✅ import App from "./App";

    Está importando o seu componente App para ser testado.

✅ test("renders Hello World text", () => { ... });

    Essa é a definição de um teste unitário.

    A primeira parte ("renders Hello World text") é a descrição do que o teste deve fazer.

    A segunda parte (a função) contém a lógica do teste.

✅ render(<App />);

    Aqui o componente App é renderizado em um ambiente de teste.

    É como se você abrisse a página do seu app no navegador.

✅ const helloWorldText = screen.getByText(/hello world./i);

    Essa linha procura na tela renderizada um elemento que contenha o texto "Hello World.".

    O /hello world./i é uma expressão regular:

        O i no final quer dizer que a busca ignora maiúsculas/minúsculas.

✅ expect(helloWorldText).toBeInTheDocument();

    Aqui é onde o teste de verdade acontece.

    Ele está dizendo: “Espero que o elemento com o texto 'Hello World.' esteja presente no documento”.

📌 Resultado

Se o texto "Hello World." existir na tela renderizada pelo App, o teste passa ✅
Se não existir, o teste falha ❌