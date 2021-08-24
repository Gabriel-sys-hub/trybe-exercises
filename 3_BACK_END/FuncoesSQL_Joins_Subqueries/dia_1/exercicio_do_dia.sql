-- EXERCICIO 1 - Escreva uma query que exiba o maior salário da tabela.

SELECT MAX(SALARY) AS `Maior salario` FROM hr.employees;

-- EXERCICIO 2 - Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(SALARY) - MIN(SALARY) AS `Diferença entre salarios:` FROM hr.employees
ORDER BY SALARY;

-- EXERCICIO 3 - Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

SELECT AVG(SALARY) AS media_salarial, JOB_ID
FROM hr.employees
GROUP BY JOB_ID
ORDER BY media_salarial DESC;

SELECT * FROM hr.employees;

-- EXERCICIO 4 -  Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(SALARY) AS despesa_total FROM hr.employees;

-- EXERCICIO 5 - Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT MAX(ROUND(SALARY, 2)) AS maior_salario,
MIN(ROUND(SALARY, 2)) AS menor_salario,
SUM(ROUND(SALARY, 2)) AS somas_todos_salarios,
AVG(ROUND(SALARY, 2)) AS media_salarial_total FROM hr.employees;

-- EXERCICIO 6 - Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT COUNT(JOB_ID) FROM hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

-- EXERCICIO 7 - Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

SELECT JOB_ID, SUM(SALARY) AS despesa_total FROM hr.employees
GROUP BY JOB_ID;

-- EXERCICIO 8 - Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, SUM(SALARY) AS despesa_total FROM hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

-- EXERCICIO 9 - Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, AVG(SALARY) AS media_sem_programadores FROM hr.employees
WHERE NOT JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

-- EXERCICIO 10 -  Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT COUNT(department_id) AS numero_funcionarios, AVG(SALARY) AS media_salarial FROM hr.employees
GROUP BY department_id
HAVING COUNT(department_id) > 10;

SELECT * FROM hr.employees;

-- EXERCICIO 11 -  Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .

SELECT REPLACE (PHONE_NUMBER, '515', '777') FROM hr.employees;
SELECT PHONE_NUMBER FROM hr.employees;

-- EXERCICIO 12 - Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SELECT FIRST_NAME FROM hr.employees
WHERE LENGTH(FIRST_NAME) > 8;
SELECT * FROM hr.employees;

-- EXERCICIO 13 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano)

SELECT EMPLOYEE_ID, FIRST_NAME, DATE(HIRE_DATE) FROM hr.employees;

-- EXERCICIO 14 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

-- EXERCICIO 15 - Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

-- EXERCICIO 16 -  Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- EXERCICIO 17 - Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE YEAR(HIRE_DATE) = 1987;

-- EXERCICIO 18 - Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(HIRE_DATE, NOW()) AS total_dias_contrato FROM hr.employees;