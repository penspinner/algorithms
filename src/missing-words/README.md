# Missing Words

Given two strings `s` and `t` where `t` is a subsequence of `s`, return an array of words from `s` that are missing in `t`.

## Constraints

- `1` <= `|T|` <= `|S|` <= `106`, where |X| denotes the length of string X.
- The length of each word will be less than 15.

## Examples

- Input:

  `'I am using hackerrank to improve programming'`
  `'am hackerrank to improve'`

  Output: `['I', 'using', 'programming']`

- Input:

  `'I like apples'`
  `'like'`

  Output: `['I', 'apples']`
