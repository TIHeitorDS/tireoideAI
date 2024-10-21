# tireoideAI

O projeto TiroidAI é uma aplicação web voltada para a área da saúde, desenvolvida com o objetivo de auxiliar profissionais no diagnóstico de doenças da tireoide. Utilizando um modelo de Machine Learning, o sistema realiza predições e exibe os resultados aos médicos, servindo como uma ferramenta de apoio para avaliações clínicas. O sistema será implementado em JavaScript e Python, acessível via login social (Google ou Facebook) para facilitar a autenticação e segurança dos dados.

### Requisitos funcionais:
- **Login social**: O sistema deve permitir login via contas Google ou Facebook.
- **Cadastro de pacientes**: Interface para inserir dados como nome, idade, sexo e níveis hormonais.
- **Busca e edição de pacientes**: O médico pode pesquisar, atualizar ou remover pacientes cadastrados.
- **Diagnóstico**: Realizar predições com base em dados do paciente, utilizando um modelo de Machine Learning.

### Requisitos não funcionais:
- **Desempenho**: Predições em até 10 segundos e carregamento de páginas em até 2 segundos.
- **Escalabilidade**: Suporte para múltiplos usuários simultâneos sem perda de desempenho.
- **Segurança**: Autenticação multifatorial e acesso controlado para operações em dados de pacientes.
- **Usabilidade**: Interface simples e intuitiva, garantindo fácil navegação para médicos sem necessidade de treinamento.
- **Confiabilidade**: Garantia de disponibilidade mínima de 99,5%.
  
Esses requisitos visam garantir que o TiroidAI seja uma ferramenta eficiente, segura e de fácil uso para os profissionais de saúde.

### Executar o projeto
Para usar o projero atualmente os seguintes comandos

> Front

```bash
cd app
npm install
npm run dev
```

> back

```bash
python -m venv .venv
.venv/Scripts/activate
pip install -r requirements.txt
cd tireoideai
python manage.py runserver
```
