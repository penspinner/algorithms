# Remove Islands

Given a matrix (2D array) with 0s and 1s, where 0 represents water and 1 represents land, return a new matrix that removes all the islands from the matrix. An island is a 1 that is neither horizontally nor vertically connected to another 1 at the border. The border is the edge of the matrix on the first and last rows and columns.

Example:

- Input:

  ```
  [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ]
  ```

  Output:

  ```
  [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ]
  ```
