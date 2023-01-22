# Game Winner

Given a string `colors`, where each character is either white or black, Wendy and Bob play a game to manipulate this string as follows:

- They perform moves alternatively in turns and Wendy makes the first move.

- In a single move, Wendy can remove from the string any white character that has exactly 2 white neighbors.

- Similarly, in a single move, Bob can remove from string any black character that has exactly 2 black neighbors.

- When a character is removed, the strings shrink itself, so if a character Y had neighbors X and Z on its left and right respectively before the move, after the move is made, X and Z become each other's neighbors.

- The first player who cannot perform a move loses the game.

For example, if the colors string is `'wwwbb'`, with the first move Wendy will change it to wwbb, and Bob can no longer perform a move. Determine who has a winning strategy assuming that both Wendy and Bob play optimally.
