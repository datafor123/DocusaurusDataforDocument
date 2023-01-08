# URL调用分析报表传参说明

 修订时间2021月8月11日

## 概述

​	Datafor报表支持url地址传参，主要为满足如下应用场景：打开datafor报表时，通过url传递参数，对报表进行数据过滤、筛选组件默认值设定、页面辅助配置等操作。

​	本文将对数据过滤、默认值设定、页面辅助配置这三种使用场景逐一介绍。

​	同时，在文档最后再介绍下datafor报表基于xdm跨文档消息传输机制的传参。这种传参适用于不刷新页面的情况下，修改数据过滤参数只刷新页面中图表的应用场景。

## 数据过滤

​	根据参数值的不同，分两种形式的数据过滤：明文传值、编码传值。

​	明文传值，即参数的赋值是一串简单的数字或字符串，不进行额外编码。一般的数据过滤，使用这种形式即可。比如传参过滤某个省份、某个产品线，将对应的省份值、产品线值直接赋值给参数即可。

​	表达式传值，参数的赋值是一个mdx表达式，先对表达式进行base64编码，然后赋值给参数。极少数应用场景可能会用到，比如过滤页面YTD时间范围内的数据等。

​	接下来，就参数名命名规则，以及参数如何赋值分别进行说明。

## 参数命名规则

​     参数名以param_{参数名}格式出现在url地址上。报表工具将从url地址里解析出参数名，然后逐一去检查页面上每个图表组件的分析模型，如果分析模型满足如下三种情况，参数将对这个图表起作用：

- 分析模型里，存在某个level的caption属性值，等于参数名；

- 分析模型里，存在某个level的uniqueName属性值，等于参数名；

- 分析模型里，cube的uniqueName属性值，以~拼接某个level的uniqueName属性值后，等于参数名。

  例如，某个分析模型里

​	其中cube的uniqueName=[gosalesdw-geo].[gosalesdw-geo].[gosalesdw-geo].[Sales]

​	某个level的uniqueName=[Geo.Default].[Province]

​	某个level的caption=省份

​     则如下三种参数名，均可以对页面上基于该分析模型创建的图表起到数据过滤作用。

- param_省份=广东;湖北  

- param_[Geo.Default].[Province]=广东;湖北
- param_[gosalesdw-geo].[gosalesdw-geo].[gosalesdw-geo].[Sales]~[Geo.Default].[Province]=广东;湖北

​	完整的url地址示例：

```
http://localhost:8080/report/plugin/datafor/api/open/98af3850-aef1-4b4f-8ba4-967e601377ad?param_省份=广东;湖北
```

## 参数传值

​	正如前文所属，参数传值有两种形式。明文传值，和表达式传值。其中明文传值，可以满足绝大多数应用场景的要求，使用门槛也低。表达式传值比较复杂，应用不多。接下来逐一介绍。

#### 明文传值

​	参数值直接以明文方式赋值在参数名后面。当需要传递多个值时，以英文分号拼接。例如:

```
http://localhost:8080/report/plugin/datafor/api/open/98af3850- 967e601377ad?param_Province广东;湖北
```

#### 编码传值

​     参数值是一段复杂对象的base64编码文本。例如当我们需要通过MONTH KEY这个参数名传值如下表达式时

```
{
    "location":"filters",
    "type":"Filter",
    "value":"[Go time dim.天].CurrentMember in {{DateToMember([Go time dim.天].[MONTH KEY], '>=', 1133366400000,'Asia/Shanghai','en'):DateToMember([Go time dim.天].[MONTH KEY],'<=', 1164902400000,'Asia/Shanghai','en')}}"
}
```

​	对应的完整地址示例：

```
http://localhost:8080/pentaho/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vY2hhbm5lbF9wcm92aW5jZV9saXN0LmRhdGFmb3I=?__compact=true&param_MONTH%20KEY=JTdCJTIybG9jYXRpb24lMjIlM0ElMjJmaWx0ZXJzJTIyJTJDJTIydHlwZSUyMiUzQSUyMkZpbHRlciUyMiUyQyUyMnZhbHVlJTIyJTNBJTIyJTVCR28lMjB0aW1lJTIwZGltLiVFNSVBNCVBOSU1RC5DdXJyZW50TWVtYmVyJTIwaW4lMjAlN0IlN0JEYXRlVG9NZW1iZXIoJTVCR28lMjB0aW1lJTIwZGltLiVFNSVBNCVBOSU1RC4lNUJNT05USCUyMEtFWSU1RCUyQyUyMCclM0UlM0QnJTJDJTIwMTEzMzM2NjQwMDAwMCUyQydBc2lhJTJGU2hhbmdoYWknJTJDJ2VuJyklM0FEYXRlVG9NZW1iZXIoJTVCR28lMjB0aW1lJTIwZGltLiVFNSVBNCVBOSU1RC4lNUJNT05USCUyMEtFWSU1RCUyQyclM0MlM0QnJTJDJTIwMTE2NDkwMjQwMDAwMCUyQydBc2lhJTJGU2hhbmdoYWknJTJDJ2VuJyklN0QlN0QlMjIlN0Q=

```
复杂对象的标准格式为:

```
{
    "location":"filters",
    "type":"Filter",
    "value":"[Go time dim.天].CurrentMember in {{DateToMember([Go time dim.天].[MONTH KEY], '>=', 1133366400000,'Asia/Shanghai','en'):DateToMember([Go time dim.天].[MONTH KEY],'<=', 1164902400000,'Asia/Shanghai','en')}}"
}

```

​	编码传值，可以完成一些高级复杂的过滤，和工具底层技术耦合较大。明文传参能解决的情况下，不建议使用这种方式。 

#### 默认值设定

​	默认值，用来控制页面第一次加载完成后，筛选组件的默认选中值。参数以default_[参数名]=[value]格式出现在url地址里。参数名取值以下两种均可：

- 筛选组件的**id**（可以通过dom树找到这个id，如图1-1所示）

- 组件的**显示标题**（有些情况下没看到组件标题，可能是标题被设置为隐藏了）


![img](file:///C:/Users/Jim/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

​     根据筛选组件的不同，默认值参数赋值有两种形式：uniqueName赋值（查询类筛选组件）、时间戳赋值（日期组件）。下面逐一介绍。 

### uniqueName赋值

​     对于页面查询类的筛选组件，需要使用这种形式对参数进行赋值。即参数值必须是目标筛选组件所绑定level的member.uniqueName值。如图1-1所示，目标筛选组件绑定了分析模型上省份这个level，则参数值必须是这个level下member成员的uniqueName值。

​     可以在浏览器打开报表时，通过浏览器控制台筛选组件对应的查询返回里，找到这些成员的uniqueName值，如图1-2所示。

![img](file:///C:/Users/Jim/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)



​	**为什么查询类筛选组件的默认值参数，其传参值必须是uniqueName？** 

​	**原因1**：页面内容加载完成后，会立即启动页面上各个图表组件进行数据查询，包括筛选组件和数据组件，两类组件查询将并发进行。而筛选组件的选中值是以uniqueName传入数据组件作为过滤条件影响其查询的。因此，影响查询类筛选组件的默认值参数，其取值必须是一个uniqueName值；换成其他，比如caption，将不符合筛选组件影响数据组件的关联机制，起不到数据过滤的作用。

​	**原因2**：筛选组件选中值状态（包括编辑时设置的默认选中值）只保存选中条目的id值（id能保证唯一性，而caption可能重名）。筛选组件渲染时，根据选中值确定筛选组件列表里哪些条目是选中状态。其中id即筛选组件绑定level的member.uniqueName值。

默认值参数如果赋值为一个caption值，不符合筛选组件的状态保存机制，将会引起显示异常。 

#### 时间戳赋值

​	日期范围筛选组件的传参值，传入时间戳，起始时间戳和结束时间戳。起始和结束时间戳之间，以英文分号拼接。

​     注：此处传参值时间戳，必须是毫秒单位的时间戳。

## 页面辅助配置

​	开放了部分特殊参数，通过这些特殊的url参数，可以对页面实现一些特殊功能的控制。

```
__compact
```

​	是否去掉页面和页面容器之间的默认间距，取值true或者false。例如

http://localhost:8080/report/plugin/datafor/api/open/98af3850-aef1-4b4f-8ba4-967e601377ad?__compact=true

​	当datafor页面需要嵌入第三方系统的iframe等容器时，该参数可以消除或者保留页面和容器之间的默认间距。

```
__ajax
```

​	取值为当前用户名，则打印出所有返回数据明文、以及查询请求内容明文。

```
__xdmEnable
```

​	取值为true时，页面将假设自己被嵌套在一个iframe框架里，主动向外通过xdm机制发送页面启动事件。外界如需向页面传输初始参数，可按指定格式进行传输。 

```
__forceAdjust
```

​	页面以集成&阅读模式打开页面时参数有效，取值为true页面将在iframe框架内强制渲染为宽度自适应模式 

```
__clean
```

​	去掉页面纸张阴影效果。只有在集成模式（不带工具栏）打开页面时有效，取值true或其他  

## 模型参数传参

​	模型参数，是指在分析模型schema文件里使用的参数。前端通过query.parameters对象，将页面上动态修改后的参数及参数值发送到后端，后查询数据使用。后端参数值后将最新的参数值替换schema中的参数变量，重新刷新数据。

​     模型参数，约定以sch_{参数名}格式出现在页面地址链接里。其中参数名是已经定义预先好的模型参数。如果地址栏里的模型参数，和页面里筛选组件绑定的参数冲突，优先使用页面内绑定的参数。

​	报表工具模块，提供dashboard.model. tryGetSqlParameterValue方法动态获取页面上指定模型参数的参数值。


## 基于XDM机制的传参（开发完善中）

​	外部第三方系统，在集成了datafor页面之后，可通过XDM向datafor实时地发送一些交互信息，Datafor会对被支持的信息作出及时的响应。这些支持被处理的信息包括：

- 过滤页面数据
- 样式控制（开发中）
- 交互事件通知（开发中）

### 机制

​	为实现页面跨iframe无刷新交互，引入XDM跨文档消息传输机制。datafor页面在加载启动时，会在页面配置内容加载完、图表数据加载前向iframe框架外发送通知，告知以iframe方式集成datafor页面的父框架页：datafor页加载已进入准备就绪阶段。

​	通知会携带base64编码格式的消息

```
{

    id: “”, //datafor页面的身份ID
    event: “”, //通知名称，如上启动通知event取值为Page init

}
```

​	父框架页可在接收到这个通知后，回送消息以便控制datafor页面启动状态，如筛选页面初始加载时的数据等。这里有两种情况：

1. 如父框架没有回送消息需要发送。知会到事件后，可什么事情都不做。
2. 如父框架需要向datafor页面回送消息，以达到控制页面的初始状态效果，请在集成datafor页面的iframe链接上带上 __xdmEnable=true参数。此时，datafor页面会在Page init通知发送出去后，等待外面消息响应（默认等待500ms），接受到响应消息（或等待超时后）接着启动图表的数据加载。如果等待时长500ms不够用，请在集成datafor页面的iframe链接上带上__xdmTimeout参数，参数值为自定义等待时长，单位ms。

> 目前版本，只支持datafor向外界发送Page init通知。外界可通过指定规范，向datafor发送数据过滤消息。 

### 数据页面过滤

​	父框架页开启了datafor页面__xdmEnable的情况下，Page init事件后的任何时候，都可以向datafor页面发送数据过滤消息，实现页面不刷新，只刷新图表的效果。发送数据过滤消息的规范如下：

-  消息体须携带如下属性
   id: 字符串，标明自己的唯一身份。

​	trustMark: 字符串，信任标志，由字符串RESPONSE和Page init消息里收到的id拼接而成。

```
filters:{ 
		/**
*uniqueName列表，每个成员是一个对象，这个对象包括
		 *hierarchy筛选成员所属的hierarchy的name值
		 *level筛选成员所属的level的name值，非levelUniqueName值
		 *uniqueName筛选成员的uniqueName值
		 **/
uniqueName: [], 
		/**
*时间范围过滤，包括属性
*hierarchy：作用目标的hierarchy.name值
*level: 作用目标的level.name值，非levelUniqueName值
		 *start: 起始时间戳
		 *end: 结束时间戳
		 **/
range:{},
/**
*url参数列表的每个成员是一个对象，包括
*name: 目标level的caption或者name值，例如省份或者Province
*value: 筛选成员的caption值，是个列表。例如广东，上海等。
		 **/
		url:[]
} 

```

-   消息体序列化为字符串后，以Base64格式进行编码。