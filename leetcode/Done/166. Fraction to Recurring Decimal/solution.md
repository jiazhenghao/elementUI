Idea: the core of this problem is identifying and handling repeating decimals correctly. Besides that, you just need to make sure that you're handling edge cases appropriately. One way to think about identifying repeating decimals is to track the "carry" as if you're doing long division by hand. If you've seen the "carry" before, then you're in a loop that started at the index of the first time you saw that carry.

For example, with 2 / 3:

image

Edge cases:

Left side of decimal is >0, or >9 (i.e. multiple digits might throw off your idx counting)
Numerator is zero
Negative numbers (one or both numerator/denominator)
Whole numbers (i.e. no need for decimal point)
Non-repeating decimals