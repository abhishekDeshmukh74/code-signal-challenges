CREATE PROCEDURE countriesSelection()
BEGIN
    SELECT * FROM COUNTRIES
    WHERE continent = 'Africa'
    ORDER BY NAME ASC;
END

-- Best Solution
CREATE PROCEDURE countriesSelection()
BEGIN
	SELECT name, continent, population
    FROM countries
    WHERE continent = "Africa"
    ORDER BY name ASC;
END
