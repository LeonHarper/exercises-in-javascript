const divisibleBy = 976

for (let current = 977; ; current = current + 1)
{
    console.log(`current is ${current} and remainder divided by ${divisibleBy} is ${current % divisibleBy}`);
    if (current % divisibleBy == 0) {
        console.log(current);
        break
    }
}
