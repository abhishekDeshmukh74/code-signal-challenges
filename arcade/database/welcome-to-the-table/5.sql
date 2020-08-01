CREATE PROCEDURE automaticNotifications()
    SELECT email
    FROM users
    WHERE role NOT IN ("admin", "premium")

    ORDER BY email;

-- Best Solution
CREATE PROCEDURE automaticNotifications()
    SELECT email
    FROM users
    WHERE LOWER(role) NOT IN ("admin", "premium")

    ORDER BY email;
