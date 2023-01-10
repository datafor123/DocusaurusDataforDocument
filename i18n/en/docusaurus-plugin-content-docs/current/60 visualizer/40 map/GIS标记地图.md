---
id: map-gisbjdt
title: GIS标记地图
sidebar_position: 1
---
# GIS标记地图

GIS标记地图用气泡的颜色和大小显示不同地理位置的指标值和分布。

## 何时使用GIS地图

- 对比地理区域的指标差异。
- 获取地理位置的分布的概况。

## 创建GIS标记地图

绑定”地理字段“，例如城市名称、或任何地理名称。或者经纬度信息到”经度“、”纬度“ 数据块。
如果所使用的数据集包含经度和维度字段，请使用经度和维度。经纬度信息更精确定位位置，并且省去了后台地理位置转码（GeoCoding）过程。

<div align="left"><img src="../../../static/img/datafor/visualizer/image-20220604145847013.png"  /></div>

例如，将”省份“字段绑定”地理字段“，选择”销售金额“度量字段。

<div align="left"><img src="../../../static/img/datafor/visualizer/image-20220604150521724.png"  /></div>

## 更改地图引擎

默认地图引擎是Opent Street Map。Datafor支持的GIS系统包括：高德地图、百度地图、Open Street Map、Google Map等。
您可以在地图配置文件里配置和修改地图引擎。

<div align="left"><img src="../../../static/img/datafor/visualizer/image-20220604160153373.png"  /></div>

