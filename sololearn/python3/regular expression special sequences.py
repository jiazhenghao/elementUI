import re
pattern = r"(.+) \1"

#.(dot) matches any character, other than a new line.
match = re.match(pattern, "word word")
if match:
    print("m1")
match = re.match(pattern, "?! ?!")
if match:
    print("m2")
match = re.match(pattern, "abc cde")
if match:
    print("m3")

pattern1 = r"(.+) \1"
match1 = re.match(pattern1, "word world world")
if match1:
    print("m4")

pattern2 = r"(.+) (abc)\2"
match2 = re.match(pattern2, "word abcabc xxxx")
if match2:
    print("m5")
match2 = re.match(pattern2, "word abcabcxxxx")
if match2:
    print("m6")

#\d     digits          [0-9]
#\s     whitespace      [\t\n\r\f\v]
#\w     word characters [a-zA-Z0-9_]
#\D \S \W  opposite of the lowercase
