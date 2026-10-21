# produtos-cliente

Cliente React + Vite para a API REST de produtos (`http://localhost:8080/produtos`).

## Executar

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Rotas

| Rota            | Página          | Chamadas à API                                  |
|-----------------|-----------------|-------------------------------------------------|
| `/`             | Lista Produtos  | `GET /produtos`, `DELETE /produtos/{id}`        |
| `/novo`         | Novo Produto    | `POST /produtos` (espera HTTP 201)              |
| `/editar/:id`   | Editar Produto  | `GET /produtos/{id}`, `PUT /produtos/{id}`      |

## Corpo JSON enviado (POST e PUT)

```json
{ "nome": "Caneta", "descricao": "Caneta azul", "preco": 2.50 }
```

## CORS

O cliente roda em `localhost:5173` e a API em `localhost:8080`, então o backend
Spring Boot precisa liberar CORS. Exemplo no controller:

```java
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/produtos")
public class ProdutoController { ... }
```
