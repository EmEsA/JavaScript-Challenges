//https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  return string.split('').map(x => x == x.toUpperCase() ? ' ' + x : x).join('');
}