-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .

USE sakila;
DELIMITER $$

CREATE FUNCTION TotalDePagamentosPorConsumidor(id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_gasto INT;
    SELECT COUNT(amount)
    FROM sakila.payment
    WHERE customer_id = id INTO total_gasto;
    RETURN total_gasto;
END $$

DELIMITER ;

-- Como usar:

SELECT TotalDePagamentosPorConsumidor(1);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.

USE sakila;
DELIMITER $$

CREATE FUNCTION GetCorrespondingFilm(id INT)
RETURNS VARCHAR(500) READS SQL DATA -- Essa função vai retornar apenas data para leitura, com limite de 500 characteres;
BEGIN
    DECLARE movie_title VARCHAR(500); -- Declara a variável que será guardado o resultado final
    SELECT DISTINCT F.title -- Exibe todos os titulos não repetidos
    FROM sakila.inventory AS I -- Primeira tabela
    INNER JOIN sakila.film AS F -- Segunda tabela
    ON F.film_id = I.film_id -- Onde o filme_id da segunda tabela seja igual ao film_id da primeira
    WHERE I.inventory_id = id INTO movie_title; -- Quando o inventory_id for igual ao ID passado no parametro
    RETURN movie_title; -- Sempre retornar o valor, quando usando função
END $$

DELIMITER ;

SELECT GetCorrespondingFilm(25);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION getMovieAmountInCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA -- Essa função vai retornar apenas data para leitura, com limite de 500 characteres;
BEGIN
    DECLARE total_movies INT; -- Declara a variável que será guardado o resultado final
    SELECT COUNT(*) -- Exibe todos os titulos não repetidos
    FROM sakila.category AS C -- Primeira tabela
    INNER JOIN sakila.film_category AS FC -- Segunda tabela
    ON FC.category_id = C.category_id -- Onde category_id da primeira tabela igual category_id da segunda tabela;
    WHERE C.name = category INTO total_movies; -- Quando o inventory_id for igual ao ID passado no parametro
    RETURN total_movies; -- Sempre retornar o valor, quando usando função
END $$

DELIMITER ;

SELECT getMovieAmountInCategory('Horror');