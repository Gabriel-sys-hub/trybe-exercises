-- EXERCICIO 1 - Mostrar o texto na tela do SQL Workbench;

-- SELECT "This is SQL Exercise, Practice and Solution";

-- EXERCICIO 2 - Escrever 3 numeros em 3 colunas diferentes;

-- SELECT 1, 2, 3;

-- EXERCICIO 3 - Escreva uma query que exiba a soma de 10 + 15;

-- SELECT 10 + 15;

-- EXERCICIO 4 - Escreva uma expressao aritmética qualquer;

-- SELECT 10 * 2;

-- EXERCICIO 5 - Escreva uma query que exiba as informações de todos cientistas;

-- SELECT * FROM sakila.Scientists;

-- EXERCICIO 6 - Escreva uma query para exibir o nome como 'Nome do Projeto' e as Horas como 'Tempo de Trabalho' de cada projeto;

-- SELECT `Nome do Projeto` AS Nome, `Tempo de Trabalho` AS Horas FROM sakila.Projects; (query ao contrario);

-- EXERCICIO 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabetica;

-- SELECT * FROM sakila.Scientists ORDER BY Name ASC; (Não precisa do ASC porquê já vem como padrão)

-- EXERCICIO 8 - Escreva uma query para exibir o nome dos Projetos em order alfabetica descendente;

-- SELECT * FROM sakila.Projects ORDER BY `Nome do Projeto` DESC; 

-- EXERCICIO 9 - Escreva uma query que exiba a string "O projeto 'name' precisou de 'Hours' horas para ser concluído.' para cada projeto;

-- SELECT CONCAT('O projeto',' ',`Nome do Projeto`,' ','precisou de',' ',`Tempo de Trabalho`,' ','horas para ser concluído') FROM sakila.Projects;

-- EXERCICIO 10 - Escreva uma query pra exibir o nome e as horas dos três projetos com a maior quantidade de horas;

-- SELECT `Nome do Projeto`, `Tempo de Trabalho` 
-- FROM sakila.Projects
-- ORDER BY `Tempo de Trabalho` DESC
-- LIMIT 3;

-- EXERCICIO 11 - Escreva uma query para exibir o código de todos os projetos da tablea AssignedTo sem que haja repetições;

-- SELECT DISTINCT * FROM sakila.AssignedTo;

-- EXERCICIO 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas;

-- SELECT * FROM sakila.Projects
-- ORDER BY `Tempo de Trabalho` DESC
-- LIMIT 1;

-- EXERCICIO 13 -  Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas;

-- SELECT * FROM sakila.Projects
-- ORDER BY `Tempo de Trabalho` ASC
-- LIMIT 1
-- OFFSET 1;

-- EXERCICIO 14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

-- SELECT * FROM sakila.Projects
-- ORDER BY `Tempo de Trabalho` ASC
-- LIMIT 5;

-- EXERCICIO 15 - Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

-- SELECT CONCAT('Existem',' ',COUNT(*),' ','cientistas na tablea Scientists') FROM sakila.Scientists;
