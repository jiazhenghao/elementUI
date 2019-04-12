/**
 * 视图就是一个虚拟表
 * allow us to:
 * 重构数据从多个表里，显得直观和自然
 * 限制访问某些数据
 * 从多个表里总结数据，然后做报表
 */

/**
 * CREATE VIEW view_name AS
 * SELECT column_name(s)
 * FROM table_name
 * WHERE condition;
 */

/**
 * 修改VIEW
 * CREATE OR REPLACE VIEW xxx AS
 * SELECT column_name(s)
 * FROM table_name
 * WHERE condition;
 */

/**
 * 删除VIEW
 * DROP VIEW view_name
 */
