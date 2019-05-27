style without scoped will affect the father component, and the child component.

style with scoped will not affect the father and child component. 

在父节点上，用如下style样式，可以寻找到子节点的，even 是 scoped
.content >>> .robot-name {
  color:red;
  border: 2px solid blue;
}

v-bind style with single
:style="headBorderStyle"
v-bind style with multi 
:style="[headBorderStyle, moreStyle]"
后者会覆盖前者

<div class="top part" :class="{'sale-border': selectedRobot.head.onSale}">
