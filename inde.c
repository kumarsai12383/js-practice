#include<stdio.h>
struct Student
{
    int id;
    char name[30];
    float marks;
};
int main ()
{
    struct Student s1;
    printf("enter the id: ");
    scanf("%d",&s1.id);
    printf("enter the name: ");
    scanf("%s",s1.name);
    printf("enter the marks: ");
    scanf("%f",&s1.marks);
    printf("id: ");
    printf("%d",s1.id);
    printf("name: ");
    printf("%s",s1.name);
    printf("marks: ");
    printf("%f",s1.marks);
}
