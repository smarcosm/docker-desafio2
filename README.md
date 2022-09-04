# Nginx com Node.js
Desafio 2 do Curso Full Cycle 3.0  Docker.

### Descrição do desafio
> A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js.<br>
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.<br>
Gere o docker-compose de uma forma que basta apenas rodarmos: <br>
docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

__O retorno da aplicação node para o nginx deve ser:__
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrados no banco de dados.
```


### Requisitos
1. A porta 8080 deve estar disponível.

  
### Para rodar :zap:
**Execute o comando:
```docker
docker-compose up -d
```