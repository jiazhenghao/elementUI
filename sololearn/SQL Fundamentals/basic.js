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

