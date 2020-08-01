CREATE PROCEDURE monthlyScholarships()
BEGIN
	 SELECT id, scholarship/12 as scholarship FROM scholarships;
END

-- Best Solution
CREATE PROCEDURE monthlyScholarships()
BEGIN
	SELECT id, scholarship / 12 AS scholarship FROM scholarships;
END
