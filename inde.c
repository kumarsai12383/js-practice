#include <stdio.h>
int factorial(int a){
    int fact = 1;
    for (int i = 1;i <= a;i++){
        fact = fact * i;
    }
    return fact;
}
int main(){
    int number;
    printf("enter number: ");
    scanf("%d",&number);
    printf("%d",factorial(number));
}