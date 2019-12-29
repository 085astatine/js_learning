function prime_number_list(max: number): number[] {
  if (max < 2) {
    return []
  }
  let prime_number = [2]
  for(let i = 3; i <= max; ++i) {
    let is_prime = true;
    for(const prime of prime_number) {
      if (i % prime == 0) {
        is_prime = false;
        break
      }
      if (prime * prime > i) {
        break
      }
    }
    if (is_prime) {
      prime_number.push(i)
    }
  }
  return prime_number
}

console.log(prime_number_list(1))
console.log(prime_number_list(100))
