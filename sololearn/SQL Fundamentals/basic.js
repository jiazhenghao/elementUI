/**
 * show databases;
 * show tables;
 * show columns from <table_name>;
 * SELECT FirstName from customers;
 * SELECT City FROM customers;
 * SELECT FirstName,City,LastName FROM customers;
 * SELECT DISTINCT city from customers;
 * distinct 能够把那种重复的记录去掉。
 * 
 */

 /**
  * 选取有限的行记录。limit
  * select ID, FirstName, LastName, City from customers limit 5;
  */
/**
 * 从第几行数据开始选，选多少个
 * select ID, FirstName, LastName, City from customers limit 3, 5;
 * 第一个参数表示，从第几行开始，sql中是0，1，2，3
 * 第二个参数表示，选5行数据
 */

/**
 * Fully Qualified Names
 * SELECT customers.FirstName FROM customers;
 */

/**
 * ORDEY BY is used with select to sort the returned data.
 * SELECT * FROM customers ORDER BY FirstName;
 * 默认order by 是升序的 ascending
 * 还可以多列排序：
 * SELECT * FROM customers ORDER BY FirstName, City;
 */

/**
 * WHERE clause:
 * select column_list from table_name where condition
 * select * from customers where customers.ID = 10;
 * SELECT * from customers WHERE customers.ID BETWEEN 1 AND 3;
 * SELECT * from customers WHERE customers.FirstName = 'Jia';
 * 'can''t'
 */

/**
 * logical operators
 * and;or;in;not
 * select * from customers where City = 'New York' and (age = 30 or age = 35);
 * SELECT * from customers WHERE customers.FirstName IN ('Jia', 'Xia', 'lin','wan');
 * SELECT * from customers WHERE customers.FirstName not IN ('Jia', 'Xia', 'lin','wan');
 */

/**
 * 拼接函数
 * SELECT concat(customers.FirstName, ', ', customers.LastName) FROM customers;
 */
/**
 * as 关键字
 * SELECT concat(customers.FirstName, ', ', customers.LastName) AS fullname FROM customers;
 */

/**
 * Arithmetic Operators
 * + - * /
 * SELECT customers.ID, concat(customers.FirstName,' ',customers.LastName) , customers.Salary+500 as new_salary FROM customers;
 */

/**
 * The UPPER function; the LOWER function
 * SELECT t.ID, upper(t.FirstName) as FirstName, upper(t.LastName) as LastName, 
 * (t.Salary+1500) as new_salary FROM customers AS t;
 */
//If there are characters in the string that are not letters, UPPER or LOWER function will have no effect
//on them.

/**
 * SQRT function AVG function
 * 一个是算每个值的平方根；一个是整体的平均值
 * SUM function
 * 求和
 * SELECT  t.ID, upper(t.FirstName) as FirstName, upper(t.LastName) as LastName, 
 * SUM(t.Salary+1500) as new_salary 
 * FROM customers AS t  
 * WHERE t.Salary>=1000  GROUP BY t.ID ;
 */

/**
SELECT t.FirstName, t.LastName, t.Salary FROM customers AS t where t.Salary > 1500 ORDER BY t.Salary DESC;
SELECT t.FirstName, t.LastName, t.Salary FROM customers AS t where t.Salary > 1500 ORDER BY t.Salary ASC;
 */

/**
 * 子句查询
 * 嵌套的子句不需要；分割
 * 是同一个查询语句
 * SELECT AVG(Salary) FROM customers;
 * SELECT t.ID, t.FirstName, t.LastName, t.Salary FROM customers AS t 
 * WHERE t.Salary > (SELECT AVG(Salary) FROM customers) ORDER BY t.Salary DESC;
 */

/**
 * LIKE
 * SELECT t.ID, t.FirstName, t.LastName	FROM customers as t 
 * where t.FirstName LIKE '%a%' ORDER BY t.ID DESC;
 */

/**
 * min,max
 * SELECT MIN(t.Salary) as min_salary, MAX(t.Salary) as max_salary FROM customers as t;
 */
/** 
SELECT min(t.Salary) as min_salary, t.id, t.FirstName FROM customers AS t 
where t.FirstName in ('Jia','Xia') GROUP BY t.id;

SELECT MAX(t.Salary) as min_salary FROM customers AS t where t.FirstName = 'Jia';

SELECT MAX(t.Salary),t.ID,t.FirstName as min_salary FROM customers AS t where t.FirstName = 'Jia' GROUP BY t.ID DESC;

当你选择多列的时候，就必须使用group by 
*/

/**
 * limit 10
 * 最多10行数据
 */