# Loja de colecionáveis Funko — protótipo Angular

Protótipo de loja construído com Angular 14 e PrimeNG. A aplicação fica em E-Commerce-Funko/.

## Requisitos e execução

- Node.js compatível com Angular CLI 14
- npm

~~~sh
cd E-Commerce-Funko
npm ci
npm start
~~~

Abra http://localhost:4201.

## Build e testes

Dentro de E-Commerce-Funko/:

~~~sh
npm run build
npm test
~~~

Os testes usam Karma e podem exigir um navegador compatível. Como verificação manual, navegue pelo catálogo e confira os formulários de cadastro e checkout demonstrativo.

## Limitações

Catálogo, autenticação, cadastro e checkout não estão conectados a um backend. O formulário não cria contas. Não informe dados de cartão. Uma integração real deve usar um provedor de pagamento seguro.