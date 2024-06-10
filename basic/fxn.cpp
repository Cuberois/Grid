#include<iostream>
using namespace std;
class over   // class is define
{
    public:
    void display (int x)
    {
        cout<<"value of x="<<x;
        }
        void display (double y) // data fxn + member fxn
    {
        cout<<"value of y="<<y;

    }
    void display (int x, int y)
    {
        cout<<"value of x and y="<<x<<y;
    }

};
int main()
{
    over ob; //object is define 
    ob.display(10);
    return 0;

}