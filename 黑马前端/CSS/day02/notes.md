#### 1.复合选择器

​	后代选择器 .class h1

​	子元素选择器 .class>h1

​	交集选择器 h1.class

​	并集选择器 h1,.class

#### 2.链接伪类选择器（重点）

​	a:link、a:visited、a:hover、a:active

​	lvha顺序不能颠倒

​	text-decoration:none;

#### 3.标签的显示模式

 	1. 块级元素(block-level)
     * 独占一行
     * 可以设置高度和宽度(不给宽度默认为父级的100%)
     * 可以放div 和span
     * p,h1,h2,h3,h4,h5,h6,dt不能放div

 	2. 行内元素(inline-level)
     * 一行可以显示多个
     * width,height无效
     * 默认宽度为内容宽度
     * 行内元素只能放行内元素或文本
     * 链接里不能再放链接
     * a可以放div但是最好给a转化为块级元素
 	3. 行内块元素(inline-block)
     * 一行显示多个
     * 可以设置宽度和高度
     * 默认为内容的宽度
     * img,input,td

4. 用display转化显示模式

5. 单行文本使用line-height的垂直居中

   * 基线和基线的距离为行高

     ![](https://gitee.com/chen_zhilin2324/image/raw/master/img/image-20201107114110348.png)

   * 行高等于盒子高度会垂直居中

   * 行高大于盒子高度文本偏下

   * 行高小于盒子高度文本偏上

#### 4.背景

	* background-color默认值为transparent透明色
	* background-image要加url()
	* background-repeat默认为repeat
 * background-position
   * 必须要设置背景图片
   * 

