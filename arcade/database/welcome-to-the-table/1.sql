CREATE PROCEDURE projectList()
BEGIN
SELECT project_name, team_lead, income from Projects
ORDER BY internal_id ASC;
END

-- Best Solution
CREATE PROCEDURE projectList()
BEGIN
	SELECT project_name, team_lead, income FROM Projects ORDER BY internal_id;
END
