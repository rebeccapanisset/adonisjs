# Aula sobre AdonisJS

Esse projeto foi realizado para o aprendizado da ferramenta AdonisJS, seguindo a aula da Rocketseat.

## Ferramentas utilizadas

* PostgreSQL
* Redis

## Como instalar e configurar

* `git clone https://github.com/rebeccapanisset/adonisjs.git`
* Entre na pasta do projeto `cd rocketseat-adonisjs`
* `yarn install` (para instalar todas as dependências)
* Criar e preencher o arquivo `.env` de acordo com o arquivo base `.env.example`
* `adonis key:generate` (para gerar a APP_KEY)
* Criar um banco de dados com o nome de "adonis"
* `adonis migration:run` (para executar os arquivos de migration)

## Como executar

* `adonis serve --dev` (para executar em modo de desenvlvimento)
* `yarn start` (para executar)
* `adonis kue:listen` (para executar a fila de envio de e-mail)
