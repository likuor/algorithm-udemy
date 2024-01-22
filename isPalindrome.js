// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length === 0) return true;
  return isPalindrome(str.slice(1).slice(0, -1));
}

console.log(isPalindrome('amanaplanacanalpandemonium'));
// isPalindrome('awesome'); // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
