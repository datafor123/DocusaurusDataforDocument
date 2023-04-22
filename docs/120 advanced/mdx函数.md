---
id: advanced-mdx
title: MDX函数
sidebar_position: 20
---

# MDX函数

MDX（Multidimensional Expressions）是一种多维数据分析语言，主要用于OLAP（On-Line Analytical Processing）系统中的多维数据查询、分析、统计和报表等领域的应用。Datafor通过MDX函数和MDX查询语句来实现对多维数据的访问、聚合、筛选、计算等操作。Datafor中的计算指标是通过MDX函数和MDX查询语句来定义和计算的。

MDX 函数是 MDX 语言中的一种重要元素，用于处理多维数据，包括多维数据的访问、聚合、筛选、计算等。MDX 函数可以分为以下几类：

1. 聚合函数：聚合函数是用来汇总数据的函数，通常用于处理数据集中某个字段的总数、平均值、最大值、最小值等统计信息。聚合函数包括 COUNT、SUM、MIN、MAX、AVG 等。
2. 集合函数：集合函数是用于操作集合的函数，包括并集、交集、补集等。这些函数通常用于多维数据的查询与分析，以获取特定的数据。集合函数包括 INTERSECT、UNION、COMPLEMENT 等。
3. 成员函数：成员函数用于从维度层次结构中获取成员、属性等信息。这些函数通常用于多维数据的查询与分析，以获取特定的数据。成员函数包括 MEMBER、DIMENSION、LEVEL 等。
4. 时间函数：时间函数是用于处理与时间相关的数据，包括日期加减、时间戳转换、日期格式化等。这些函数通常用于多维数据的查询与分析，以获取特定的数据。时间函数包括 DATEADD、TIMESTAMP、FORMAT 等。
5. 逻辑函数：逻辑函数是用于处理逻辑判断与运算的函数，包括 IF、CASE、AND、OR、NOT 等。这些函数通常用于多维数据的查询与分析，以获取特定的数据。
6. 字符串函数：字符串函数是用于处理字符串的函数，包括字符串拼接、字符串替换、字符串格式化等。这些函数通常用于多维数据的查询与分析，以获取特定的数据。字符串函数包括 CONCATENATE、REPLACE、FORMATSTRING 等。
7. 数学函数：数学函数是用于进行数学计算的函数，包括绝对值、平方根、指数等。这些函数通常用于多维数据的查询与分析，以获取特定的数据。数学函数包括 ABS、SQRT、EXP 等。
8. 类型转换：类型转换函数是用于进行数据类型转换的函数，包括将字符串转换为数值、将数值转换为字符串、将日期转换为字符串等。这些函数通常用于多维数据的查询与分析，以获取特定的数据。类型转换函数包括 CSTR、CINT、CDATE 等。

## 聚合函数

| 函数名称      | 描述                               | 语法                              | 样例                                                         |
| ------------- | ---------------------------------- | --------------------------------- | ------------------------------------------------------------ |
| COUNT         | 计算成员或元素的数量               | COUNT( [Set_Expression] )         | COUNT( {[Measures].[Sales]} )                                |
| SUM           | 计算成员或元素的累加值             | SUM( [Set_Expression] )           | SUM( {[Measures].[Sales]} )                                  |
| AVG           | 计算成员或元素的平均值             | AVG( [Set_Expression] )           | AVG( {[Measures].[Sales]} )                                  |
| MIN           | 计算成员或元素的最小值             | MIN( [Set_Expression] )           | MIN( {[Measures].[Sales]} )                                  |
| MAX           | 计算成员或元素的最大值             | MAX( [Set_Expression] )           | MAX( {[Measures].[Sales]} )                                  |
| DISTINCTCOUNT | 计算一个集合中不同成员的数量       | DISTINCTCOUNT( [Set_Expression] ) | DISTINCTCOUNT( {[Customers].Members} )                       |
| AGGREGATE     | 在执行聚合时，返回指定元素的聚合值 | AGGREGATE( [Value] )              | AGGREGATE( {[Time].[1997].[Q1], [Time].[1997].[Q2]} * {[Measures].[Sales]}) |

## 集合函数

| 名称      | 描述                                                         | 语法                                                         | 样例                                                         |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| FILTER    | 从集合中返回满足指定条件的成员或元素                         | FILTER( [Set_Expression], [Boolean_Expression] )             | FILTER( {[Customers].Members}, [Measures].[Sales] > 1000 )   |
| NONEMPTY  | 返回那些与查询中的其他维度成员有交集的非空成员或元素         | NONEMPTY( [Set_Expression] )                                 | NONEMPTY( {[Customers].Members} * {[Time].[1997].[Q1]})      |
| ORDER     | 返回按指定条件排序后的集合中的成员或元素                     | ORDER( [Set_Expression], [Numeric_Expression], [Order_Type] ) | ORDER( {[Customers].Members}, [Measures].[Sales], DESC )     |
| GENERATE  | 返回由一组从第一集合中选定的成员和一个生成表达式生成的成员组成的集合 | GENERATE( [Set_Expression], [Generator_Expression] )         | GENERATE( {[Customers].Members}, {[Products].Members}.CurrentMember.Name ) |
| UNION     | 返回两个集合的并                                             | UNION( [Set_Expression_1], [Set_Expression_2] )              | UNION( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Customers].[USA].[WA]]} |
| INTERSECT | 返回两个集合的交集                                           | INTERSECT( [Set_Expression_1], [Set_Expression_2] )          | INTERSECT( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Customers].[USA].[WA]]} |
| EXCEPT    | 返回两个集合的差集                                           | EXCEPT( [Set_Expression_1], [Set_Expression_2] )             | EXCEPT( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Customers].[USA].[WA]]} |
| DISTINCT  | 返回由一个集合中的所有不同成员或元素组成的子集               | DISTINCT( [Set_Expression] )                                 | DISTINCT( {[Customers].Members} )                            |
| CROSSJOIN | 返回两个或多个集合的笛卡尔积                                 | CROSSJOIN( [Set_Expression_1], [Set_Expression_2], ... )     | CROSSJOIN( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Products].Members} ) |
| TUPLE     | 创建一个包含多个元素的元组                                   | TUPLE( { [Set_Expression_1], [Set_Expression_2], ... } )     | TUPLE( { [Customers].[USA].[CA], [Time].[1997].[Q1] } )      |

## 成员函数

| 名称          | 描述                                                 | 语法                                                         | 样例                                                         |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CURRENTMEMBER | 返回当前上下文中的成员                               | CURRENTMEMBER                                                | {[Customers].[USA].[CA]}                                     |
| PARENT        | 返回指定成员的父级成员                               | PARENT( [Member_Expression] )                                | PARENT( {[Customers].[USA].[CA]} )                           |
| CHILDREN      | 返回指定成员的所有子成员                             | CHILDREN( [Member_Expression] )                              | CHILDREN( {[Time].[1997].[Q1]})                              |
| SIBLINGS      | 返回指定成员的兄弟成员                               | SIBLINGS( [Member_Expression] )                              | SIBLINGS( {[Customers].[USA].[CA]})                          |
| ANCESTOR      | 返回指定成员的所有祖先成员                           | ANCESTOR( [Member_Expression], [Numeric_Expression] )        | ANCESTOR( {[Customers].[USA].[CA]}, 2)                       |
| DESCENDANT    | 返回指定成员的所有后代成员                           | DESCENDANT( [Member_Expression], [Numeric_Expression] )      | DESCENDANT( {[Customers].[USA]}, 2)                          |
| LEAD          | 从当前成员开始，返回指定数量的下一级成员             | LEAD( [Member_Expression], [Numeric_Expression] )            | LEAD( {[Time].[1997].[Q1]}, 2)                               |
| LAG           | 从当前成员开始，返回指定数量的上一级成员             | LAG( [Member_Expression], [Numeric_Expression] )             | LAG( {[Time].[1997].[Q1]}, 2)                                |
| FIRSTCHILD    | 返回指定成员的第一个子成员                           | FIRSTCHILD( [Member_Expression] )                            | FIRSTCHILD( {[Time].[1997].[Q1]})                            |
| LASTCHILD     | 返回指定成员的最后一个子成员                         | LASTCHILD( [Member_Expression] )                             | LASTCHILD( {[Time].[1997].[Q1]})                             |
| HIERARCHIZE   | 以指定的顺序将成员重新排列，使其形成层次结构         | HIERARCHIZE( [Set_Expression] )                              | HIERARCHIZE( {[Customers].[USA].[CA], [Customers].[USA].[OR], [Customers].[USA].[WA]}) |
| STRTOSET      | 将字符串解释为 MDX 集合表达式                        | STRTOSET( [String_Expression] )                              | STRTOSET( "{[Customers].[USA].[CA], [Customers].[USA].[OR], [Customers].[USA].[WA]}" ) |
| STRTOMEMBER   | 将字符串解释为 MDX 成员表达式                        | STRTOMEMBER( [String_Expression] )                           | STRTOMEMBER( "[Customers].[USA].[CA]" )                      |
| TAIL          | 返回指定成员的除第一个子成员以外的所有后代成员       | TAIL( [Member_Expression], [Numeric_Expression] )            | TAIL( {[Customers].[USA]}, 1)                                |
| HEAD          | 返回指定成员的除最后一个子成员以外的所有子孙成员     | HEAD( [Member_Expression], [Numeric_Expression] )            | HEAD( {[Customers].[USA]}, 1)                                |
| ASCENDANTS    | 返回指定成员的所有祖先成员，按照层次结构从低到高排序 | ASCENDANTS( [Member_Expression] )                            | ASCENDANTS( {[Customers].[USA].[CA]})                        |
| DESCENDANTS   | 返回指定成员的所有后代成员，按照层次结构从高到低排序 | DESCENDANTS( [Member_Expression] )                           | DESCENDANTS( {[Customers].[USA]})                            |
| LEVELS        | 返回指定集合中的所有层次结构                         | LEVELS( [Set_Expression] )                                   | LEVELS( {[Customers].Members})                               |
| MEMBERS       | 返回指定维度中的所有成员                             | MEMBERS( [Dimension_Expression], [Optional_Set_Expression] ) | MEMBERS( [Customers] )                                       |
| DIMENSIONS    | 返回一个包含查询中使用的所有维度的集合               | DIMENSIONS                                                   | DIMENSIONS                                                   |
| HIERARCHY     | 返回指定成员所在的层次结构                           | HIERARCHY( [Member_Expression] )                             | HIERARCHY( {[Customers].[USA].[CA]})                         |
| MEMBERCAPTION | 返回指定成员的标题                                   | MEMBERCAPTION( [Member_Expression] )                         | MEMBERCAPTION( {[Customers].[USA].[CA]})                     |
| MEMBERNAME    | 返回指定成员的名称                                   | MEMBERNAME( [Member_Expression] )                            | MEMBERNAME( {[Customers].[USA].[CA]})                        |

## 时间函数

| 函数名称       | 描述和说明                                         | 语法                                                         | 样例                                                     |
| -------------- | -------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| NOW            | 返回当前日期和时间                                 | NOW                                                          | NOW                                                      |
| TODAY          | 返回当前日期                                       | TODAY                                                        | TODAY                                                    |
| YEARTODATE     | 返回从年初到指定日期的时间段                       | YEARTODATE( [Date_Member] )                                  | YEARTODATE( [Time].[1997].[Q1] )                         |
| QUARTERSTODATE | 返回从季度初到指定日期的时间段                     | QUARTERSTODATE( [Date_Member] )                              | QUARTERSTODATE( [Time].[1997].[Q1] )                     |
| MONTHSTODATE   | 返回从月初到指定日期的时间段                       | MONTHSTODATE( [Date_Member] )                                | MONTHSTODATE( [Time].[1997].[Q1] )                       |
| WEEKSTODATE    | 返回从周初到指定日期的时间段                       | WEEKSTODATE( [Date_Member] )                                 | WEEKSTODATE( [Time].[1997].[W1] )                        |
| DAYSTODATE     | 返回从日初到指定日期的时间段                       | DAYSTODATE( [Date_Member] )                                  | DAYSTODATE( [Time].[1997].&[19970401] )                  |
| DATEADD        | 返回指定时间间隔后的日期                           | DATEADD( [Time_Interval], [Date_Member] )                    | DATEADD( "YY", 1, [Time].[1997].[Q1] )                   |
| DATEDIFF       | 返回两个日期之间的时间间隔                         | DATEDIFF( [Time_Interval], [Date_Member_1], [Date_Member_2] ) | DATEDIFF( "YY", [Time].[1997].[Q1], [Time].[1998].[Q1] ) |
| PARALLELPERIOD | 返回前一个与当前成员相同的时间周期的成员           | PARALLELPERIOD( [Time_Interval], [Numeric_Expression], [Member_Expression] ) | PARALLELPERIOD( "Q", 2, [Time].[1997].[Q1] )             |
| OPENINGPERIOD  | 返回从指定日期开始到时间周期的第一个成员的时间段   | OPENINGPERIOD( [Time_Interval], [Date_Member] )              | OPENINGPERIOD( "Q", [Time].[1997].[Q2].[4] )             |
| CLOSINGPERIOD  | 返回从指定日期开始到时间周期的最后一个成员的时间段 | CLOSINGPERIOD( [Time_Interval], [Date_Member] )              | CLOSINGPERIOD( "Q", [Time].[1997].[Q2].[4] )             |
| PERIODSTODATE  | 返回从时间周期开始到指定日期的时间段               | PERIODSTODATE( [Time_Interval], [Date_Member] )              | PERIODSTODATE( "Q", [Time].[1997].[Q1] )                 |
| DATESBETWEEN   | 返回两个日期之间的所有日期                         | DATESBETWEEN( [Date_Member_1], [Date_Member_2] )             | DATESBETWEEN( [Time].[1997].[Q1], [Time].[1998].[Q1] )   |

注意：TIMEINTERVAL 参数是字符串，有以下可选值：

- YY、YYYY：年。
- Q：季度。
- M、MM：月。
- D、DD：日。
- W、WW：周。
- H、HH：小时。
- N、NN：分钟。
- S、SS：秒。

## 逻辑函数

| 函数名称          | 描述和说明                                                   | 语法                                                         | 样例                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IIF               | 根据条件返回两个可能值之一                                   | IIF( [Boolean_Expression], [Value_If_True], [Value_If_False] ) | IIF( [Measures].[Sales] > 5000, "High", "Low" )              |
| SWITCH            | 根据多个条件返回不同的值                                     | SWITCH( [Numeric_Expression_1], [Value_1], [Numeric_Expression_2], [Value_2], ... ) | SWITCH( [Measures].[Sales], 100, "Not 100", 200, "Not 200", "Unknown" ) |
| AND               | 如果所有条件都为真，则返回 TRUE                              | AND( [Boolean_Expression_1], [Boolean_Expression_2], ... )   | AND( [Measures].[Sales] > 5000, [Time].[1997].[Q1] )         |
| OR                | 如果任何条件均为真，则返回 TRUE                              | OR( [Boolean_Expression_1], [Boolean_Expression_2], ... )    | OR( [Measures].[Sales] > 5000, [Time].[1997].[Q1] )          |
| NOT               | 返回单个布尔表达式的相反值（如果为 TRUE，则返回 FALSE，反之亦然） | NOT( [Boolean_Expression] )                                  | NOT( [Measures].[Sales] > 5000 )                             |
| EMPTY             | 如果表达式的计算结果为空，则返回 TRUE；否则返回 FALSE        | EMPTY( [Value] )                                             | EMPTY( [Measures].[Sales])                                   |
| EXISTING          | 在当前上下文中返回指定维度中已经存在的成员                   | EXISTING( [Set_Expression] )                                 | EXISTING( [Customers].[USA].[CA] )                           |
| NONEMPTYCROSSJOIN | 以指定的维度返回非空成员的笛卡尔积                           | NONEMPTYCROSSJOIN( [Set_Expression_1], [Set_Expression_2], ... ) | NONEMPTYCROSSJOIN( { [Customers].[USA].[CA], [Customers].[USA].[WA] }, { [Time].[1997].[Q1], [Time].[1997].[Q2] } ) |
| TUPLETOSET        | 将元组转换为集合                                             | TUPLETOSET( [Tuple_Expression] )                             | TUPLETOSET( ( [Customers].[USA].[CA], [Time].[1997].[Q1] ) ) |

注意：BOOLEAN_EXPRESSION 参数指的是返回 TRUE 或 FALSE 的表达式，例如 [Measures].[Sales] > 5000。

## 字符串函数

| 函数名称  | 描述                                               | 语法                                                         | 样例                                          |
| --------- | -------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| CONCAT    | 返回两个字符串的拼接结果                           | CONCAT( [String_Expression_1], [String_Expression_2] )       | CONCAT( "Hello", "World" )                    |
| LEFT      | 返回字符串的左侧指定数量的字符                     | LEFT( [String_Expression], [Numeric_Expression] )            | LEFT( "Hello", 3 )                            |
| RIGHT     | 返回字符串的右侧指定数量的字符                     | RIGHT( [String_Expression], [Numeric_Expression] )           | RIGHT( "Hello", 3 )                           |
| MID       | 返回字符串中指定范围内的字符                       | MID( [String_Expression], [Numeric_Expression_1], [Numeric_Expression_2] ) | MID( "Hello", 2, 3 )                          |
| STRCOMP   | 比较两个字符串，并返回一个指示它们是否相等的值     | STRCOMP( [String_Expression_1], [String_Expression_2] )      | STRCOMP( "Hello", "HELLO" )                   |
| STRTODATE | 将字符串解释为日期                                 | STRTODATE( [String_Expression], [Format_String] )            | STRTODATE( "01/01/1997", "MM/DD/YYYY" )       |
| LOWER     | 将字符串转换为小写                                 | LOWER( [String_Expression] )                                 | LOWER( "HELLO" )                              |
| UPPER     | 将字符串转换为大写                                 | UPPER( [String_Expression] )                                 | UPPER( "hello" )                              |
| STRLEN    | 返回字符串的长度                                   | STRLEN( [String_Expression] )                                | STRLEN( "Hello" )                             |
| REPLACE   | 替换字符串中的指定字符                             | REPLACE( [String_Expression], [Find_String], [Replace_String] ) | REPLACE( "Hello World", "World", "Mondrian" ) |
| INSTR     | 返回字符串中指定子串第一次出现的位置               | INSTR( [String_Expression], [Search_String] )                | INSTR( "Hello World", "World" )               |
| LEFTSTR   | 返回字符串的左侧指定数量的字符（与 LEFT 函数相同） | LEFTSTR( [String_Expression], [Numeric_Expression] )         | LEFTSTR( "Hello", 3 )                         |

## 数学函数

| 函数名称 | 描述和说明                                             | 语法                                                    | 样例                |
| -------- | ------------------------------------------------------ | ------------------------------------------------------- | ------------------- |
| ABS      | 返回表达式的绝对值                                     | ABS( [Numeric_Expression] )                             | ABS( -3 )           |
| ROUND    | 返回表达式的四舍五入结果                               | ROUND( [Numeric_Expression] )                           | ROUND( 3.14159, 2 ) |
| CEILING  | 返回表达式的上限值，也就是大于或等于表达式的最小整数值 | CEILING( [Numeric_Expression] )                         | CEILING( 3.14159 )  |
| FLOOR    | 返回表达式的下限值，也就是小于或等于表达式的最大整数值 | FLOOR( [Numeric_Expression] )                           | FLOOR( 3.14159 )    |
| EXP      | 返回 e 的指定次幂                                      | EXP( [Numeric_Expression] )                             | EXP( 2 )            |
| LOG      | 返回表达式的自然对数                                   | LOG( [Numeric_Expression] )                             | LOG( 10 )           |
| POWER    | 返回给定数字的给定次幂                                 | POWER( [Numeric_Expression_1], [Numeric_Expression_2] ) | POWER( 2, 3 )       |
| SQRT     | 返回表达式的平方根                                     | SQRT( [Numeric_Expression] )                            | SQRT( 25 )          |
| MOD      | 返回两个数相除的余数                                   | MOD( [Numeric_Expression_1], [Numeric_Expression_2] )   | MOD( 7, 3 )         |
| SIGN     | 返回表达式的符号（1：正数，-1：负数，0：零）           | SIGN( [Numeric_Expression] )                            | SIGN( 3 )           |
| SIN      | 返回指定角度的正弦值                                   | SIN( [Numeric_Expression] )                             | SIN( 45 )           |
| COS      | 返回指定角度的余弦值                                   | COS( [Numeric_Expression] )                             | COS( 45 )           |
| TAN      | 返回指定角度的正切值                                   | TAN( [Numeric_Expression] )                             | TAN( 45 )           |
| ASIN     | 返回指定数字的反正弦值                                 | ASIN( [Numeric_Expression] )                            | ASIN( 0.5 )         |
| ACOS     | 返回指定数字的反余弦值                                 | ACOS( [Numeric_Expression] )                            | ACOS( 0.5 )         |

## 类型转换

| 函数名称  | 描述和说明                                                   | 语法                             | 样例                                                         |
| --------- | ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| CBOOL     | 将表达式转换为布尔型                                         | CBOOL( [Value_Expression] )      | CBOOL( "True" )                                              |
| CSTR      | 将表达式转换为字符串类型                                     | CSTR( [Value_Expression] )       | CSTR( 3.14159 )                                              |
| CINT      | 将表达式转换为整型                                           | CINT( [Value_Expression] )       | CINT( 3.14159 )                                              |
| CDbl      | 将表达式转换为双精度浮点型                                   | CDbl( [Value_Expression] )       | CDbl( 3 )                                                    |
| CDEC      | 将表达式转换为 Decimal 类型（精度更高的浮点型）              | CDEC( [Value_Expression] )       | CDEC( 3.14159 )                                              |
| CDATE     | 将表达式转换为日期型                                         | CDATE( [Value_Expression] )      | CDATE( "01/01/1997" )                                        |
| CVAR      | 将表达式转换为变量类型                                       | CVAR( [Value_Expression] )       | CVAR( "Hello" )                                              |
| CBYTE     | 将表达式转换为 Byte 类型（0-255 之间的整数）                 | CBYTE( [Value_Expression] )      | CBYTE( 255 )                                                 |
| CSHORT    | 将表达式转换为 Short 类型（-32768 到 32767 之间的整数）      | CSHORT( [Value_Expression] )     | CSHORT( 32000 )                                              |
| CLNG      | 将表达式转换为 Long 类型（-2,147,483,648 到 2,147,483,647 之间的整数） | CLNG( [Value_Expression] )       | CLNG( 2147483647 )                                           |
| CSNG      | 将表达式转换为 Single 类型（-3.402823E38 到 3.402823E38 之间的单精度浮点型） | CSNG( [Value_Expression] )       | CSNG( 3.14159 )                                              |
| CBYTE     | 将表达式转换为 Byte 类型（0-255 之间的整数）                 | CBYTE( [Value_Expression] )      | CBYTE( 255 )                                                 |
| CSTRTOSET | 将指定的字符串转换为集合                                     | CSTRTOSET( [String_Expression] ) | CSTRTOSET( "{ [Customers].[USA].[CA], [Customers].[USA].[WA] }" ) |
