-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT actor_id, COUNT(*) AS `Quantidade de filmes`
    FROM sakila.film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowFilmDescription(IN categoryName VARCHAR(50))
	BEGIN
	SELECT F.film_id, F.title, FC.category_id, C.name FROM sakila.film AS F
    INNER JOIN sakila.film_category AS FC
    ON F.film_id = FC.film_id
    INNER JOIN sakila.category AS C
    ON C.category_id = FC.category_id
    WHERE C.name = categoryName;
END $$
DELIMITER ;

CALL ShowFilmDescription('Action');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckIfActiveClient(
    IN client_email VARCHAR(200),
    OUT isActive BOOL
)
BEGIN
    SET isActive = (
        SELECT active
        FROM sakila.customer
        WHERE email = client_email
    );
END $$

DELIMITER ;

-- Como usar:

SELECT @ActiveStatus;
CALL CheckIfActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;