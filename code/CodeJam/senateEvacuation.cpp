#include <bits/stdc++.h>
using namespace std;
#define maxN 26

int main()
{
    //freopen("in.txt", "r", stdin);
    int testCase;
    scanf("%d", &testCase);

    int a[maxN];
    for (int tc = 1; tc <= testCase; tc++)
    {
        int n;
        scanf("%d", &n);
        for (int i = 0; i < n; i++)
            scanf("%d", &a[i]);
        cout << "Case #" << tc << ":";
        if (n == 2)
        {
            // two parties, no majority
            // so they have equal senators
            while (a[0] > 0)
            {
                cout << " AB";
                a[0]--;
            }
        }
        else
        {
            // number of parties >= 3
            // at each evacuation, just get out one senator from
            // the biggest party at this moment
            // until it only lefts two parties on the end
            // for sure, they are two parties (1, 1)
            // we get them out together at the end
            int parties = n;
            while (parties > 2)
            {
                int maxParty = 0, argMax = -1;
                for (int i = 0; i < n; i++)
                    if (a[i] > maxParty)
                    {
                        maxParty = a[i];
                        argMax = i;
                    }
                char ans = 'A' + argMax;
                cout << " " << ans;
                a[argMax]--;
                if (maxParty == 1)
                    parties -= 1;
            }
            cout << " ";
            for (int i = 0; i < n; i++)
                if (a[i] > 0)
                {
                    char ans = 'A' + i;
                    cout << ans;
                }
        }
        cout << "\n";
    }
    return 0;
}