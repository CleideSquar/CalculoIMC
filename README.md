# Calculadora de IMC
Este é um componente Lightning Web Component que calcula o Índice de Massa Corporal (IMC) com base no peso e altura informados pelo usuário.

## Pré-requisitos:
Antes de começar, certifique-se de que você atende aos seguintes requisitos:

- Você tem uma conta no Salesforce e acesso ao Salesforce Org.

- Você tem acesso a um ambiente de desenvolvimento do Salesforce, como o Salesforce DX.

- Você tem o Salesforce CLI instalado em seu computador.

## Como instalar:
Para instalar o componente em sua org, siga os seguintes passos:

- Clone este repositório em seu computador:
git clone https://github.com/seu-usuario/calculadora-imc-lwc.git

- Navegue até o diretório raiz do projeto:
cd calculadora-imc-lwc

- Crie uma nova org para o componente:
sfdx force:org:create -f config/project-scratch-def.json -s

- Faça o push do código para a org:
sfdx force:source:push

- Abra a org em seu navegador:
sfdx force:org:open

Adicione o componente à página de sua preferência arrastando-o da paleta de componentes e aproveite!

## Como usar:
Ao adicionar o componente à página, você poderá informar o nome, peso e altura do usuário e clicar no botão "Calcular" para obter o valor do IMC.

### Contribuição:
Sinta-se à vontade para contribuir com este projeto criando issues ou pull requests.

#### Licença:
Este projeto está licenciado sob a Licença MIT.
