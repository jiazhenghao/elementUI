# Write your MySQL query statement below
SELECT   follower, num
FROM    (SELECT DISTINCT follower
         FROM   follow) a
JOIN    (SELECT   followee, COUNT(DISTINCT follower) AS num
         FROM     follow
         GROUP BY followee) b
ON       follower = followee
ORDER BY follower ASC;