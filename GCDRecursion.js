function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
console.log(gcd(48, 18)); // 6
console.log(gcd(6,2));//2
console.log(gcd(30,130));//10

// For gcd(48, 18):
// gcd(48, 18)
// gcd(18, 48 % 18) which is gcd(18, 12)
// gcd(12, 18 % 12) which is gcd(12, 6)
// gcd(6, 12 % 6) which is gcd(6, 0)
// This takes 4 calls, which is proportional to log(min(48,18))

//so the time complexity is O(log(min(a,b)))