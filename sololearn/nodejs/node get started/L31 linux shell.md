[root@linuxserver test]$ ls    //显示不隐藏的文件与文件夹
testing
 
[root@linuxserver test]$ ls -l    //显示不隐藏的文件与文件夹的详细信息
-rw-------    1 root     root            0  4月 21 07:00 testing
 
[root@linuxserver testing]$ ls -al   //显示所有文件与文件夹的详细信息
drwxr--r--    2 gaoliang root         4096  4月 21 07:00 .
drwxrwxrwt    5 root     root         4096  4月 21 07:07 ..
-rw-------    1 root     root            0  4月 21 07:00 testing
