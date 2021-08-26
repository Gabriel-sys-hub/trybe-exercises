-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Pixar.Movies AS t1,
    Pixar.Movies AS t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

-- SUB QUERY

SELECT 
    m.title
FROM
    Pixar.Movies AS m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            Pixar.BoxOffice AS b
        WHERE
            b.international_sales >= 500000000)
        AND m.length_minutes > 110;
        
-- INNER JOIN

SELECT 
    m.title
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE
    b.international_sales >= 500000000
        AND m.length_minutes > 110;