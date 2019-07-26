水塘抽样(Reservoir Sampling)问题
水塘抽样是一系列的随机算法，其目的在于从包含n个项目的集合S中选取k个样本，其中n为一很大或未知的数量，
尤其适用于不能把所有n个项目都存放到主内存的情况。

在高德纳的计算机程序设计艺术中，有如下问题：可否在一未知大小的集合中，随机取出一元素？。
或者是Google面试题： I have a linked list of numbers of length N. N is very large and 
I don’t know in advance the exact value of N. How can I most efficiently write a 
function that will return k completely random numbers from the list（中文简化的意思就是
：在不知道文件总行数的情况下，如何从文件中随机的抽取一行？）。两题的核心意思都是在总数不知道的情况下
如何等概率地从中抽取一行？即是说如果最后发现文字档共有N行，则每一行被抽取的概率均为1/N？

我们可以：定义取出的行号为choice，第一次直接以第一行作为取出行 choice ，而后第二次以二分之一
概率决定是否用第二行替换 choice ，第三次以三分之一的概率决定是否以第三行替换 choice ……，以此类推。
由上面的分析我们可以得出结论，在取第n个数据的时候，我们生成一个0到1的随机数p，如果p小于1/n，保留第n个数。
大于1/n，继续保留前面的数。直到数据流结束，返回此数，算法结束。
