def sockMerchant(n, ar):
    sock_pair = {x:ar.count(x)//2 for x in ar}
    return sum(sock_pair.values())

print(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
print(sockMerchant(8, [10, 20, 20, 10, 10, 20, 10, 20]))
print(sockMerchant(10, [10, 23, 20, 10, 10, 30, 50, 10, 20, 23]))