/**
 * Q2
    int n = 6;
    for (int i = 0; i < 3; ++i) {
        try {
            n /= i;
        }
        catch (Exception e) {
            n += 2;
        }
    }
    System.out.print(n);
    //第一次n=8,i=0;
    //n=8, i=1;
    //n=4, i=2;
 */