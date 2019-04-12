/**
 * CREATE TABLE table_name
 * (
 *      column_1 datatype(size),
 *      column_2 datatype(size),
 *      column_3 datatype(size),
 *      column_4 datatype(size),
 *      ...
 * )
 */

/**
 * 数据库表中的字段，数据类型
 * INT
 * FLOAT（M,D)       不能是无符号数    M是总长度，D是小数有几位
 * DOUBLE (M,D)      不能是无符号数   
 */
/**
 * Date and Time
 * 
 * DATE ： a date in YYYY-MM-DD format
 * DATETIME:  YYYY-MM-DD HH:MM:SS 
 * TIMESTAMP:   从1970.1.1 开始的时间戳
 * TIME:   HH:MM:SS
 */
/**
 * String Type
 * CHAR  定长 最大255字节
 * VARCHAR 可变长字符串
 * BLOB     二进制大对象 binary large objects   比如文件和别的类型的文件
 * TEXT     Large amount of text data
 */

/**
 * CREATE TABLE Users
 * (
 *      UserID int,
 *      FirstName varchar(100),
 *      LastName varchar(100),
 *      City varchar(100),
 *      PRIMARY KEY(UserID)
 * );
 */

/**
 * SQL constraints
 * NOT NULL:
 * UNIQUE:
 * PRIMARY KEY:
 * CHECK:从一个逻辑表达式来判断值是否合法
 * DEFAULT:
 * 
 * For example;
 * FirstName varchar(100) NOT NULL,
 * UserID int NOT NULL AUTO_INCREMENT,
 * PRIMARY KEY (UserID)
 */

/**
 * Using Constraints:
 * CREATE TABLE Users 
 * (
 *      id int NOT NULL AUTO_INCREMENT,
 *      username varchar(40) NOT NULL,
 *      password varchar(40) NOT NULL,
 *      PRIMARY KEY(id)
 * );
 */

