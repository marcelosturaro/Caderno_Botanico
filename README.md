# Caderno de Campo Botânico

Aplicativo de anotações de campo para coleta de dados botânicos. Funciona offline e pode ser instalado no celular.

ID único do app: `caderno-botanico-a7f39e21` (usado no manifesto, no cache e nos dados salvos, para não haver conflito com outros apps na mesma conta do GitHub).

## Arquivos (todos juntos, sem subpastas)
- `index.html`: o aplicativo
- `flora-1.js` a `flora-8.js`: lista de famílias, gêneros e espécies (a partir da sua planilha), em partes pequenas
- `manifest.webmanifest` e `sw.js`: permitem instalar e usar sem internet
- `icon.svg`, `icon-192.png`, `icon-512.png`, `maskable-512.png`, `apple-touch-icon.png`, `favicon-32.png`: ícones do app

## Publicar no GitHub (sem programar)
1. Entre em github.com, clique em **New repository**, dê um nome (ex.: `caderno-botanico`), deixe **Public** e crie.
2. Na página do repositório, clique em **uploading an existing file** e arraste (ou selecione com **choose your files**) todos os arquivos de uma vez. Clique em **Commit changes**.
3. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e a pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o endereço aparece: `https://SEU-USUARIO.github.io/caderno-botanico/`.

## Usar no celular
1. Abra o endereço no Chrome (Android) ou Safari (iPhone) **com internet**, uma vez, e espere carregar. Isso guarda tudo para uso offline e baixa os municípios dos 27 estados.
2. Instale: Chrome, menu ⋮ → *Instalar app*; Safari, Compartilhar → *Adicionar à Tela de Início*.
3. Teste: ative o modo avião e abra o app.

## Atualizar depois
Substitua os arquivos no GitHub e, em `sw.js`, troque `V='v1'` por `V='v2'` (e assim por diante) para os aparelhos pegarem a versão nova.

## Cuidados
- Os registros ficam só no aparelho. Exporte o CSV com frequência.
- Se limpar os dados do navegador, os registros são apagados.
