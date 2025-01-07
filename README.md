# Galeria de Fotos

A **Galeria de Fotos** é uma aplicação web desenvolvida em React que permite visualizar, filtrar e pesquisar fotos com base em palavras-chave. Este projeto foi criado como parte de um desafio de programação.

## Funcionalidades

- **Exibição de Fotos**:
  - As fotos são carregadas em um layout em grade (grid).
  - Cada foto exibe um título centralizado abaixo da imagem.
  - Efeito visual ao passar o mouse sobre as fotos (hover).

- **Busca por Palavras-chave**:
  - Campo de busca que permite filtrar fotos pelo nome em tempo real.
  - Exibe uma mensagem "Nenhuma foto encontrada" caso nenhuma foto corresponda à pesquisa.

- **Responsividade**:
  - A aplicação é responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos.

- **Rodapé**:
  - Inclui informações de copyright.

## Tecnologias Utilizadas

- **React**: Framework utilizado para construir a interface do usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento em React.
- **Tailwind CSS**: Framework de CSS para estilização.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js (v23.2.0 ou superior) instalado.
- **Gerenciador de Pacotes**: `npm` (instalado junto com o Node.js).

## Como Executar o Projeto

1. **Clone o Repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd galeria-fotos
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse a Aplicação**:
   Abra o navegador e vá até `http://localhost:5173/`.

## Estrutura do Projeto

```plaintext
src/
├── assets/                # Imagens e recursos estáticos
├── components/            # Componentes React reutilizáveis
│   ├── Header.jsx         # Cabeçalho da aplicação
│   ├── PhotoCard.jsx      # Componente para exibição de fotos
│   ├── SearchBar.jsx      # Barra de busca
│   └── Footer.jsx         # Rodapé
├── pages/                 # Páginas principais
│   └── Gallery.jsx        # Página principal da galeria
├── styles/                # Arquivos CSS
│   └── index.css          # Estilização global
├── App.jsx                # Componente raiz
├── main.jsx               # Ponto de entrada da aplicação
└── vite.config.js         # Configuração do Vite
```

## Instruções de Uso

1. **Busca**:
   - Digite palavras-chave no campo de busca para filtrar fotos.
   - As fotos serão filtradas dinamicamente enquanto você digita.

2. **Interação com as Fotos**:
   - Passe o mouse sobre as fotos para visualizar os efeitos visuais.

3. **Responsividade**:
   - Acesse a aplicação em diferentes dispositivos para verificar a responsividade.

## Personalização

- **Alterar o Conjunto de Fotos**:
  - As fotos são carregadas de uma API ou arquivo estático.
  - Substitua os dados no componente `Gallery.jsx` para usar suas próprias imagens.

## Contribuindo

Contribuições são bem-vindas! Se você tiver ideias para melhorar o projeto, sinta-se à vontade para criar um fork e enviar um pull request.

## Licença

Este projeto está licenciado sob a **MIT License**.

## Contato

Autor: Joseph da Costa Ribeiro  
E-mail: jojojosephdacostaribeiro@gmail.com
