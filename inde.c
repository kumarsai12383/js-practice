#include <stdio.h>

enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
};

int main() {
    enum Day today = WEDNESDAY;

    printf("%d\n", today);

    return 0;
}