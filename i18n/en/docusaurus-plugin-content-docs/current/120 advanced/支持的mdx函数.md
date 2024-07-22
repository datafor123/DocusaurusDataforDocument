---
id: advanced-mdx
title: MDX Functions
sidebar_position: 30
---
# MDX Functions

MDX (Multidimensional Expressions) is a language for multidimensional data analysis, primarily used in OLAP (On-Line Analytical Processing) systems for multidimensional data querying, analysis, statistics, and reporting. Datafor utilizes MDX functions and MDX query statements to access, aggregate, filter, and compute multidimensional data. The calculated metrics in Datafor are defined and computed through MDX functions and MDX query statements.

MDX functions are a crucial element of the MDX language, used to handle multidimensional data, including accessing, aggregating, filtering, and computing multidimensional data. MDX functions can be categorized as follows:

1. **Aggregate functions:** Used to summarize data, typically for statistics like the total, average, maximum, and minimum of a specific field in a dataset. Examples include COUNT, SUM, MIN, MAX, and AVG.
2. **Set functions:** Used to manipulate sets, including union, intersection, and complement operations. These functions are often used in multidimensional data queries and analysis to retrieve specific data. Examples include INTERSECT, UNION, and COMPLEMENT.
3. **Member functions:** Used to obtain members and attributes from the dimension hierarchy. These functions are typically used in multidimensional data queries and analysis to retrieve specific data. Examples include MEMBER, DIMENSION, and LEVEL.
4. **Time functions:** Used to handle time-related data, including date addition/subtraction, timestamp conversion, and date formatting. These functions are often used in multidimensional data queries and analysis to retrieve specific data. Examples include DATEADD, TIMESTAMP, and FORMAT.
5. **Logical functions:** Used for logical judgments and operations, including IF, CASE, AND, OR, and NOT. These functions are typically used in multidimensional data queries and analysis to retrieve specific data.
6. **String functions:** Used to handle strings, including string concatenation, string replacement, and string formatting. These functions are often used in multidimensional data queries and analysis to retrieve specific data. Examples include CONCATENATE, REPLACE, and FORMATSTRING.
7. **Mathematical functions:** Used to perform mathematical calculations, including absolute value, square root, and exponentiation. These functions are typically used in multidimensional data queries and analysis to retrieve specific data. Examples include ABS, SQRT, and EXP.
8. **Type conversion:** Used to convert data types, such as converting strings to numbers, numbers to strings, and dates to strings. These functions are often used in multidimensional data queries and analysis to retrieve specific data. Examples include CSTR, CINT, and CDATE.

## Aggregation Functions

| Function Name | Description                                                  | Syntax                            | Example                                                      |
| ------------- | ------------------------------------------------------------ | --------------------------------- | ------------------------------------------------------------ |
| COUNT         | Calculates the number of members or elements in a set        | COUNT( [Set_Expression] )         | COUNT( {[Measures].[Sales]} )                                |
| SUM           | Calculates the sum of members or elements in a set           | SUM( [Set_Expression] )           | SUM( {[Measures].[Sales]} )                                  |
| AVG           | Calculates the average of members or elements in a set       | AVG( [Set_Expression] )           | AVG( {[Measures].[Sales]} )                                  |
| MIN           | Calculates the minimum value of members or elements in a set | MIN( [Set_Expression] )           | MIN( {[Measures].[Sales]} )                                  |
| MAX           | Calculates the maximum value of members or elements in a set | MAX( [Set_Expression] )           | MAX( {[Measures].[Sales]} )                                  |
| DISTINCTCOUNT | Calculates the number of distinct members in a set           | DISTINCTCOUNT( [Set_Expression] ) | DISTINCTCOUNT( {[Customers].Members} )                       |
| AGGREGATE     | Returns the aggregated value of specified elements           | AGGREGATE( [Value] )              | AGGREGATE( {[Time].[1997].[Q1], [Time].[1997].[Q2]} * {[Measures].[Sales]}) |

## Set Functions

| Name      | Description                                                  | Syntax                                                       | Example                                                      |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| FILTER    | Returns the members or elements in a set that meet a specified condition | FILTER( [Set_Expression], [Boolean_Expression] )             | FILTER( {[Customers].Members}, [Measures].[Sales] > 1000 )   |
| NONEMPTY  | Returns the non-empty members or elements that intersect with other dimensions in the query | NONEMPTY( [Set_Expression] )                                 | NONEMPTY( {[Customers].Members} * {[Time].[1997].[Q1]})      |
| ORDER     | Returns the members or elements in a set that are sorted according to a specified criterion | ORDER( [Set_Expression], [Numeric_Expression], [Order_Type] ) | ORDER( {[Customers].Members}, [Measures].[Sales], DESC )     |
| GENERATE  | Returns a set composed of a group of members selected from a first set and a set of members generated by a generation expression | GENERATE( [Set_Expression], [Generator_Expression] )         | GENERATE( {[Customers].Members}, {[Products].Members}.CurrentMember.Name ) |
| UNION     | Returns the union of two sets                                | UNION( [Set_Expression_1], [Set_Expression_2] )              | UNION( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Customers].[USA].[WA]]} |
| INTERSECT | Returns the intersection of two sets                         | INTERSECT( [Set_Expression_1], [Set_Expression_2] )          | INTERSECT( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Customers].[USA].[WA]]} |
| EXCEPT    | Returns the set difference of two sets                       | EXCEPT( [Set_Expression_1], [Set_Expression_2] )             | EXCEPT( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Customers].[USA].[WA]]} |
| DISTINCT  | Returns a subset of all distinct members or elements in a set | DISTINCT( [Set_Expression] )                                 | DISTINCT( {[Customers].Members} )                            |
| CROSSJOIN | Returns the Cartesian product of two or more sets            | CROSSJOIN( [Set_Expression_1], [Set_Expression_2], ... )     | CROSSJOIN( {[Customers].[USA].[CA], [Customers].[USA].[OR]}, {[Products].Members} ) |
| TUPLE     | Creates a tuple containing multiple elements                 | TUPLE( { [Set_Expression_1], [Set_Expression_2], ... } )     | TUPLE( { [Customers].[USA].[CA], [Time].[1997].[Q1] } )      |

## Member Functions

| Name          | Description                                                  | Syntax                                                       | Example                                                      |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CURRENTMEMBER | Returns the current member in the context                    | CURRENTMEMBER                                                | {[Customers].[USA].[CA]}                                     |
| PARENT        | Returns the parent member of a specified member              | PARENT( [Member_Expression] )                                | PARENT( {[Customers].[USA].[CA]} )                           |
| CHILDREN      | Returns all children members of a specified member           | CHILDREN( [Member_Expression] )                              | CHILDREN( {[Time].[1997].[Q1]})                              |
| SIBLINGS      | Returns all sibling members of a specified member            | SIBLINGS( [Member_Expression] )                              | SIBLINGS( {[Customers].[USA].[CA]})                          |
| ANCESTOR      | Returns all ancestors of a specified member                  | ANCESTOR( [Member_Expression], [Numeric_Expression] )        | ANCESTOR( {[Customers].[USA].[CA]}, 2)                       |
| DESCENDANT    | Returns all descendants of a specified member                | DESCENDANT( [Member_Expression], [Numeric_Expression] )      | DESCENDANT( {[Customers].[USA]}, 2)                          |
| LEAD          | Returns a specified number of next level members             | LEAD( [Member_Expression], [Numeric_Expression] )            | LEAD( {[Time].[1997].[Q1]}, 2)                               |
| LAG           | Returns a specified number of previous level members         | LAG( [Member_Expression], [Numeric_Expression] )             | LAG( {[Time].[1997].[Q1]}, 2)                                |
| FIRSTCHILD    | Returns the first child member of a specified member         | FIRSTCHILD( [Member_Expression] )                            | FIRSTCHILD( {[Time].[1997].[Q1]})                            |
| LASTCHILD     | Returns the last child member of a specified member          | LASTCHILD( [Member_Expression] )                             | LASTCHILD( {[Time].[1997].[Q1]})                             |
| HIERARCHIZE   | Orders a set to form a hierarchy using a specified order     | HIERARCHIZE( [Set_Expression] )                              | HIERARCHIZE( {[Customers].[USA].[CA], [Customers].[USA].[OR], [Customers].[USA].[WA]}) |
| STRTOSET      | Interprets a string as an MDX set expression                 | STRTOSET( [String_Expression] )                              | STRTOSET( "{[Customers].[USA].[CA], [Customers].[USA].[OR], [Customers].[USA].[WA]}" ) |
| STRTOMEMBER   | Interprets a string as an MDX member expression              | STRTOMEMBER( [String_Expression] )                           | STRTOMEMBER( "[Customers].[USA].[CA]" )                      |
| TAIL          | Returns all descendants of a specified member except for the first child | TAIL( [Member_Expression], [Numeric_Expression] )            | TAIL( {[Customers].[USA]}, 1)                                |
| HEAD          | Returns all descendants of a specified member except for the last child | HEAD( [Member_Expression], [Numeric_Expression] )            | HEAD( {[Customers].[USA]}, 1)                                |
| ASCENDANTS    | Returns all ancestors of a specified member in ascending order | ASCENDANTS( [Member_Expression] )                            | ASCENDANTS( {[Customers].[USA].[CA]})                        |
| DESCENDANTS   | Returns all descendants of a specified member in descending order | DESCENDANTS( [Member_Expression] )                           | DESCENDANTS( {[Customers].[USA]})                            |
| LEVELS        | Returns all levels in a specified set                        | LEVELS( [Set_Expression] )                                   | LEVELS( {[Customers].Members})                               |
| MEMBERS       | Returns all members in a specified dimension                 | MEMBERS( [Dimension_Expression], [Optional_Set_Expression] ) | MEMBERS( [Customers] )                                       |
| DIMENSIONS    | Returns a set containing all dimensions used in the query    | DIMENSIONS                                                   | DIMENSIONS                                                   |
| HIERARCHY     | Returns the hierarchy of a specified member                  | HIERARCHY( [Member_Expression] )                             | HIERARCHY( {[Customers].[USA].[CA]})                         |
| MEMBERCAPTION | Returns the caption of a specified member                    | MEMBERCAPTION( [Member_Expression] )                         | MEMBERCAPTION( {[Customers].[USA].[CA]})                     |
| MEMBERNAME    | Returns the name of a specified member                       | MEMBERNAME( [Member_Expression] )                            | MEMBERNAME( {[Customers].[USA].[CA]})                        |

- ## Time Functions

  | Function Name  | Description and Syntax                                       | Syntax                                                       | Example                                                  |
  | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------------------- |
  | NOW            | Returns the current date and time                            | NOW                                                          | NOW                                                      |
  | TODAY          | Returns the current date                                     | TODAY                                                        | TODAY                                                    |
  | YEARTODATE     | Returns the time period from the beginning of the year to a specified date | YEARTODATE( [Date_Member] )                                  | YEARTODATE( [Time].[1997].[Q1] )                         |
  | QUARTERSTODATE | Returns the time period from the beginning of the quarter to a specified date | QUARTERSTODATE( [Date_Member] )                              | QUARTERSTODATE( [Time].[1997].[Q1] )                     |
  | MONTHSTODATE   | Returns the time period from the beginning of the month to a specified date | MONTHSTODATE( [Date_Member] )                                | MONTHSTODATE( [Time].[1997].[Q1] )                       |
  | WEEKSTODATE    | Returns the time period from the beginning of the week to a specified date | WEEKSTODATE( [Date_Member] )                                 | WEEKSTODATE( [Time].[1997].[W1] )                        |
  | DAYSTODATE     | Returns the time period from the beginning of the day to a specified date | DAYSTODATE( [Date_Member] )                                  | DAYSTODATE( [Time].[1997].&[19970401] )                  |
  | DATEADD        | Returns a date a specified number of intervals after a specified date | DATEADD( [Time_Interval], [Date_Member] )                    | DATEADD( "YY", 1, [Time].[1997].[Q1] )                   |
  | DATEDIFF       | Returns the time interval between two dates                  | DATEDIFF( [Time_Interval], [Date_Member_1], [Date_Member_2] ) | DATEDIFF( "YY", [Time].[1997].[Q1], [Time].[1998].[Q1] ) |
  | PARALLELPERIOD | Returns a member from the same time period as a specified member in the previous period | PARALLELPERIOD( [Time_Interval], [Numeric_Expression], [Member_Expression] ) | PARALLELPERIOD( "Q", 2, [Time].[1997].[Q1] )             |
  | OPENINGPERIOD  | Returns the time period from a specified date to the first member of the time period | OPENINGPERIOD( [Time_Interval], [Date_Member] )              | OPENINGPERIOD( "Q", [Time].[1997].[Q2].[4] )             |
  | CLOSINGPERIOD  | Returns the time period from a specified date to the last member of the time period | CLOSINGPERIOD( [Time_Interval], [Date_Member] )              | CLOSINGPERIOD( "Q", [Time].[1997].[Q2].[4] )             |
  | PERIODSTODATE  | Returns the time period from the beginning of the time period to a specified date | PERIODSTODATE( [Time_Interval], [Date_Member] )              | PERIODSTODATE( "Q", [Time].[1997].[Q1] )                 |
  | DATESBETWEEN   | Returns all dates between two dates                          | DATESBETWEEN( [Date_Member_1], [Date_Member_2] )             | DATESBETWEEN( [Time].[1997].[Q1], [Time].[1998].[Q1] )   |

  Note: The TIMEINTERVAL parameter is a string and can take the following values:

  - YY, YYYY: Year
  - Q: Quarter
  - M, MM: Month
  - D, DD: Day
  - W, WW: Week
  - H, HH: Hour
  - N, NN: Minute
  - S,

## Logical Functions

| Function Name     | Description and Explanation                                  | Syntax                                                       | Example                                                      |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IIF               | Returns one of two possible values based on a condition      | IIF( [Boolean_Expression], [Value_If_True], [Value_If_False] ) | IIF( [Measures].[Sales] > 5000, "High", "Low" )              |
| SWITCH            | Returns different values based on multiple conditions        | SWITCH( [Numeric_Expression_1], [Value_1], [Numeric_Expression_2], [Value_2], ... ) | SWITCH( [Measures].[Sales], 100, "Not 100", 200, "Not 200", "Unknown" ) |
| AND               | Returns TRUE if all conditions are TRUE                      | AND( [Boolean_Expression_1], [Boolean_Expression_2], ... )   | AND( [Measures].[Sales] > 5000, [Time].[1997].[Q1] )         |
| OR                | Returns TRUE if any condition is TRUE                        | OR( [Boolean_Expression_1], [Boolean_Expression_2], ... )    | OR( [Measures].[Sales] > 5000, [Time].[1997].[Q1] )          |
| NOT               | Returns the opposite value of a single Boolean expression    | NOT( [Boolean_Expression] )                                  | NOT( [Measures].[Sales] > 5000 )                             |
| EMPTY             | Returns TRUE if the calculated result of an expression is empty, otherwise returns FALSE | EMPTY( [Value] )                                             | EMPTY( [Measures].[Sales])                                   |
| EXISTING          | Returns members from a specified dimension that already exist in the current context | EXISTING( [Set_Expression] )                                 | EXISTING( [Customers].[USA].[CA] )                           |
| NONEMPTYCROSSJOIN | Returns the Cartesian product of non-empty members for specified dimensions | NONEMPTYCROSSJOIN( [Set_Expression_1], [Set_Expression_2], ... ) | NONEMPTYCROSSJOIN( { [Customers].[USA].[CA], [Customers].[USA].[WA] }, { [Time].[1997].[Q1], [Time].[1997].[Q2] } ) |
| TUPLETOSET        | Converts a tuple to a set                                    | TUPLETOSET( [Tuple_Expression] )                             | TUPLETOSET( ( [Customers].[USA].[CA], [Time].[1997].[Q1] ) ) |

Note: BOOLEAN_EXPRESSION parameter refers to an expression that returns either TRUE or FALSE, such as [Measures].[Sales] > 5000.

## String Functions

| Function Name | Description and Explanation                                  | Syntax                                                       | Example                                       |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------- |
| CONCAT        | Returns the concatenation of two strings                     | CONCAT( [String_Expression_1], [String_Expression_2] )       | CONCAT( "Hello", "World" )                    |
| LEFT          | Returns a specified number of characters from the left side of a string | LEFT( [String_Expression], [Numeric_Expression] )            | LEFT( "Hello", 3 )                            |
| RIGHT         | Returns a specified number of characters from the right side of a string | RIGHT( [String_Expression], [Numeric_Expression] )           | RIGHT( "Hello", 3 )                           |
| MID           | Returns a specified number of characters from within a string | MID( [String_Expression], [Numeric_Expression_1], [Numeric_Expression_2] ) | MID( "Hello", 2, 3 )                          |
| STRCOMP       | Compares two strings and returns a value indicating whether they are equal | STRCOMP( [String_Expression_1], [String_Expression_2] )      | STRCOMP( "Hello", "HELLO" )                   |
| STRTODATE     | Interprets a string as a date                                | STRTODATE( [String_Expression], [Format_String] )            | STRTODATE( "01/01/1997", "MM/DD/YYYY" )       |
| LOWER         | Converts a string to lowercase                               | LOWER( [String_Expression] )                                 | LOWER( "HELLO" )                              |
| UPPER         | Converts a string to uppercase                               | UPPER( [String_Expression] )                                 | UPPER( "hello" )                              |
| STRLEN        | Returns the length of a string                               | STRLEN( [String_Expression] )                                | STRLEN( "Hello" )                             |
| REPLACE       | Replaces specified characters in a string                    | REPLACE( [String_Expression], [Find_String], [Replace_String] ) | REPLACE( "Hello World", "World", "Mondrian" ) |
| INSTR         | Returns the position of the first occurrence of a substring within a string | INSTR( [String_Expression], [Search_String] )                | INSTR( "Hello World", "World" )               |
| LEFTSTR       | Returns a specified number of characters from the left side of a string (same as LEFT function) | LEFTSTR( [String_Expression], [Numeric_Expression] )         | LEFTSTR( "Hello", 3 )                         |

## Math Functions

| Function Name | Description and Explanation                                  | Syntax                                                  | Example             |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------- | ------------------- |
| ABS           | Returns the absolute value of an expression                  | ABS( [Numeric_Expression] )                             | ABS( -3 )           |
| ROUND         | Returns the rounded value of an expression                   | ROUND( [Numeric_Expression] )                           | ROUND( 3.14159, 2 ) |
| CEILING       | Returns the smallest integer greater than or equal to an expression | CEILING( [Numeric_Expression] )                         | CEILING( 3.14159 )  |
| FLOOR         | Returns the largest integer less than or equal to an expression | FLOOR( [Numeric_Expression] )                           | FLOOR( 3.14159 )    |
| EXP           | Returns e raised to the power of an expression               | EXP( [Numeric_Expression] )                             | EXP( 2 )            |
| LOG           | Returns the natural logarithm of an expression               | LOG( [Numeric_Expression] )                             | LOG( 10 )           |
| POWER         | Returns the result of an expression raised to a specified power | POWER( [Numeric_Expression_1], [Numeric_Expression_2] ) | POWER( 2, 3 )       |
| SQRT          | Returns the square root of an expression                     | SQRT( [Numeric_Expression] )                            | SQRT( 25 )          |
| MOD           | Returns the remainder of one number divided by another       | MOD( [Numeric_Expression_1], [Numeric_Expression_2] )   | MOD( 7, 3 )         |
| SIGN          | Returns the sign of an expression (1: positive, -1: negative, 0: zero) | SIGN( [Numeric_Expression] )                            | SIGN( 3 )           |
| SIN           | Returns the sine of a specified angle                        | SIN( [Numeric_Expression] )                             | SIN( 45 )           |
| COS           | Returns the cosine of a specified angle                      | COS( [Numeric_Expression] )                             | COS( 45 )           |
| TAN           | Returns the tangent of a specified angle                     | TAN( [Numeric_Expression] )                             | TAN( 45 )           |
| ASIN          | Returns the arcsine of a specified number                    | ASIN( [Numeric_Expression] )                            | ASIN( 0.5 )         |
| ACOS          | Returns the arccosine of a specified number                  | ACOS( [Numeric_Expression] )                            | ACOS( 0.5 )         |

## Type Conversion

| Function Name | Description and Explanation                                  | Syntax                           | Example                                                      |
| ------------- | ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------ |
| CBOOL         | Converts an expression to Boolean type                       | CBOOL( [Value_Expression] )      | CBOOL( "True" )                                              |
| CSTR          | Converts an expression to String type                        | CSTR( [Value_Expression] )       | CSTR( 3.14159 )                                              |
| CINT          | Converts an expression to Integer type                       | CINT( [Value_Expression] )       | CINT( 3.14159 )                                              |
| CDbl          | Converts an expression to Double-precision floating-point type | CDbl( [Value_Expression] )       | CDbl( 3 )                                                    |
| CDEC          | Converts an expression to Decimal type (Higher precision floating-point type) | CDEC( [Value_Expression] )       | CDEC( 3.14159 )                                              |
| CDATE         | Converts an expression to Date type                          | CDATE( [Value_Expression] )      | CDATE( "01/01/1997" )                                        |
| CVAR          | Converts an expression to Variant type                       | CVAR( [Value_Expression] )       | CVAR( "Hello" )                                              |
| CBYTE         | Converts an expression to Byte type (integer between 0-255)  | CBYTE( [Value_Expression] )      | CBYTE( 255 )                                                 |
| CSHORT        | Converts an expression to Short type (integer between -32768 to 32767) | CSHORT( [Value_Expression] )     | CSHORT( 32000 )                                              |
| CLNG          | Converts an expression to Long type (integer between -2,147,483,648 to 2,147,483,647) | CLNG( [Value_Expression] )       | CLNG( 2147483647 )                                           |
| CSNG          | Converts an expression to Single type (Single-precision floating-point type between -3.402823E38 to 3.402823E38) | CSNG( [Value_Expression] )       | CSNG( 3.14159 )                                              |
| CBYTE         | Converts an expression to Byte type (integer between 0-255)  | CBYTE( [Value_Expression] )      | CBYTE( 255 )                                                 |
| CSTRTOSET     | Converts the specified string to a set                       | CSTRTOSET( [String_Expression] ) | CSTRTOSET( "{ [Customers].[USA].[CA], [Customers].[USA].[WA] }" ) |
