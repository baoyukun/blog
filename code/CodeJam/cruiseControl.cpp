#include <bits/stdc++.h>
using namespace std;

int main()
{
    //freopen("in.txt", "r", stdin);
    int testCase;
    scanf("%d", &testCase);

    for (int tc = 1; tc <= testCase; tc++)
    {
        int road, n;
        int pos, v; //position, speed
        scanf("%d %d", &road, &n);

        /*define of "limit horse"
        every intermediate horse ahead of Annie will catch up this horse
        do not need to consider all horses ahead of limit horse
        do not need to consider all intermidiate horses

        strategy we take:
        Annie reach the destination at the same time
        as the limit horse get there

        we just need to take the longest time limit, O(n)*/

        cout << "Case #" << tc << ":";
        double t_limit = 0;
        for (int i = 0; i < n; i++)
        {
            scanf("%d %d", &pos, &v);
            double t = (road - pos) * 1.0 / v;
            t_limit = max(t, t_limit);
        }
        printf(" %0.9f\n", road / t_limit);
    }
    return 0;
}