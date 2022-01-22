# Greedy Algorith Example 1

n = int(input("Enter the amount of change"))
count = 0

coin_types = [500, 100, 50, 10] # Use list! Be brief

for coin in coin_types :
    count += n // coin
    n %= coin

print(count)

# At first, I used while loop. if n >= 500, if n < 500 and n >= 100 etc. But it can be represented briefly!
