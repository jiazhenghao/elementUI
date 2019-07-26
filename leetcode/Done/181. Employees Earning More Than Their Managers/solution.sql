--- Write your MySQL query statement below
SELECT 
    t1.Name AS 'Employee' 
FROM 
    Employee AS t1
WHERE
    t1.Salary > (SELECT t2.Salary FROM Employee AS t2 WHERE t2.id = t1.ManagerId);