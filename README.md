# Criação de API RESTful com Express.js

## Fucionalidades do Projeto
- Cadastrar Alunos
- Listar Alunos
- Lista um aluno especifíco pelo ID
- Editar Aluno
- Remover Aluno

## **Endpoints**

### **Cadastrar aluno**

#### `POST` `/students`

Essa é a rota que será utilizada para cadastrar um novo aluno no sistema.

- **Requisição**  
  Sem parâmetros de rota ou de query.  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - name
  - email
  - course_name

- **Resposta**  
  Em caso de **sucesso**, deveremos enviar no corpo (body) da resposta o conteúdo do aluno cadastrado, incluindo seu respectivo `id`.
  Em caso de **falha na validação**, a resposta deverá possuir **_status code_** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **error** que deverá possuir como valor um texto explicando o motivo da falha.

#### **Exemplo de requisição**

```javascript
// POST /students
{
    "name": "John",
    "email": "johm@email.com",
    "course_name": "English"
}
```

#### **Exemplos de resposta**

```javascript
{
    "id": "123e4567-e89b-12d3-a456-426614174000" ,
    "name": "John",
    "email": "john@email.com",
    "course_name": "English"
}
```

### **Listar alunos**

#### `GET` `/students`

Essa é a rota que será chamada quando se quiser obter todos os alunos cadastrados no sistema.  


- **Requisição**  
  Sem parâmetros de rota ou de query.  
  Não deverá possuir conteúdo no corpo da requisição.

- **Resposta**  
  Em caso de **sucesso**, o corpo (body) da resposta deverá possuir uma coleção que representa os alunos encontrados.  
  Em caso de **falha na validação**, a resposta deverá possuir **_status code_** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **error** que deverá possuir como valor um texto explicando o motivo da falha.  
#### **Exemplo de requisição**

```javascript
// GET /students
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000" ,
    "name": "John",
    "email": "john@email.com"
    "course_name": "English"
  }
]
```

### **Detalhar um aluno**
#### `GET` `/students/:id`

Essa é a rota que será chamada quando se deseja obter um aluno em especifíco.  
**Atenção!:** O aluno deverá ser identificado através do ID.

- **Requisição**  
  Não deverá possuir conteúdo no corpo da requisição.

- **Resposta**  
  Em caso de **sucesso**, o corpo (body) da resposta deverá possuir um objeto que representa o aluno encontrado.  
  Em caso de **falha na validação**, a resposta deverá possuir **_status code_** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **error** que deverá possuir como valor um texto explicando o motivo da falha.  
  **Dica:** neste endpoint podemos fazer uso do status code 401 (Unauthorized).

#### **Exemplo de requisição**

```javascript
// GET /students/:id
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
{
    "id": "123e4567-e89b-12d3-a456-426614174000" ,
    "name": "John",
    "email": "john@email.com",
    "course_name": "English"
  }
```

### **Atualizar aluno**

#### `PUT` `/students/:id`

Essa é a rota que será chamada quando for necessária a alteração de um aluno.  
**Atenção!:** O aluno deverá ser identificado através do ID.

- **Requisição**  
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - name
  - email
  - course_name

- **Resposta**  
    Em caso de **sucesso**, deveremos enviar no corpo (body) da resposta o conteúdo do aluno cadastrado, incluindo seu respectivo `id`. 
    Em caso de **falha na validação**, a resposta deverá possuir **_status code_** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **error** que deverá possuir como valor um texto explicando o motivo da falha.

#### **Exemplo de requisição**

```javascript
// PUT /students/123e4567-e89b-12d3-a456-426614174000
{
    "name": "Maria",
    "email": "Maria@email.com",
    "course_name": "Italian"
}
```

#### **Exemplos de resposta**

```javascript
{
    "id": "123e4567-e89b-12d3-a456-426614174000" ,
    "name": "Maria",
    "email": "Maria@email.com",
    "course_name": "Italian"
}
```

### **Excluir aluno**

#### `DELETE` `/students`

Essa é a rota que será chamada quando o for preciso remover um aluno do sistema. 
**Atenção!:** O aluno deverá ser identificado através do ID.


- **Requisição**    
O corpo (body) deverá possuir um objeto com a seguintes propriedade (respeitando este nome):
  - ID
    
- **Resposta**  
  Em caso de **sucesso**, não deveremos enviar conteúdo no corpo (body) da resposta.  
  Em caso de **falha na validação**, a resposta deverá possuir **_status code_** apropriado, e em seu corpo (body) deverá possuir um objeto com uma propriedade **error** que deverá possuir como valor um texto explicando o motivo da falha.

#### **Exemplo de requisição**

```javascript
{
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```

#### **Exemplos de resposta**

```javascript
// Sem conteúdo no corpo (body) da resposta
```

