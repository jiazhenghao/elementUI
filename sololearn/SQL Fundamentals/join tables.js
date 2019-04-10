/**
 * In SQL, "joining tables" means combining data from two or more tables.
 * A table join creates a temporary table showing the data from the joined tables.
 */

/**
 * SELECT c.ID, c.FirstName, c.LastName, c.City, o.Name, o.Amount FROM customers as c, orders as o 
 * WHERE c.ID = o.Customer_ID ORDER BY c.ID ASC; 
 */

/**
 * Types of Join
 * inner join
 * left join
 * right join
 */

//INNER JOIN is equivalent to JOIN, which returns rows when there is a match between the tables.
/**
 * Syntax:
 * SELECT column_name 
 * FROM table1 INNER JOIN table2
 * ON table1.column_name = table2.column_name
 */

//LEFT JOIN
//return all rows from the left table even if there are no matches
/**
 * Syntax:
 * SELECT column_name
 * FROM table1 LEFT OUTER JOIN table2
 * ON table1.xx = table2.xx;
 * 
 * For example:
 * SELECT c.ID, c.FirstName, c.LastName, c.City, o.Name, o.Amount 
 * FROM customers as c LEFT JOIN orders as o 
 * ON c.ID = o.Customer_ID ORDER BY c.ID ASC; 
 * 
 * If no match is found for a particular row, NULL is returned
 */

//RIGHT JOIN
/**
 * SELECT c.ID, c.FirstName, c.LastName, c.City, o.Name, o.Amount 
 * FROM customers as c RIGHT JOIN orders as o 
 * ON c.ID = o.Customer_ID ORDER BY c.ID ASC; 
 * 正好和左链接相反，右边表里数据都会有。
 */

/**
 * 有时候，你要把好几张表里的数据一起选出来。比如10张相同的分表。
 * 用UNION 和 UNION ALL
 * 区别是UNION剃重，而UNION ALL不剔重，故效率高。
 */
/**
 * 语法：
 * SELECT xxx FROM table1
 * UNION
 * SELECT xxx FROM table2
 * 但有三点要求：
 * 1、column_names必须相同，没有的话，就在select字句里用NULL填充这列
 * 2、所有的列要有相同的数据类型 data types
 * 3、所有列，必须顺序相同，in the same order
 */

/** 
SELECT a.Customer_Name,a.deliver_address FROM order_flower_1 AS a 
UNION
SELECT b.Customer_Name,b.deliver_address FROM order_flower_2 AS b;
*/

