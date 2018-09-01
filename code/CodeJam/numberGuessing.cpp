#include <bits/stdc++.h>
using namespace std;

int main()
{
    //freopen("in.txt", "r", stdin);
    int num_test_cases;
    cin >> num_test_cases;
    for (int caseNum = 1; caseNum <= num_test_cases; ++caseNum)
    {
        int lo, hi;
        cin >> lo >> hi;
        int num_tries;
        cin >> num_tries;
        /****** core ******/
        int head = lo + 1, tail = hi;
        while (true)
        {
            int m = (head + tail) / 2;
            cout << m << endl;
            string s;
            cin >> s;
            if (s == "CORRECT")
                break;
            if (s == "TOO_SMALL")
                head = m + 1;
            else
                tail = m - 1;
        }
        /****** core ******/
    }
    return 0;
}