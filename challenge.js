const game = {
  team1: 'England',
  team2: 'Germany',
  players: [
    ['Harry Kane', 'Raheem Sterling', 'Phil Foden', 'Jude Bellingham', 'Declan Rice', 'Jack Grealish', 'Mason Mount', 'Trent Alexander-Arnold', 'John Stones', 'Kyle Walker', 'Jordan Pickford'], // Team 1 (England)
    ['Timo Werner', 'Kai Havertz', 'Thomas Müller', 'Ilkay Gündogan', 'Joshua Kimmich', 'Leon Goretzka', 'Serge Gnabry', 'Antonio Rudiger', 'Manuel Neuer', 'Niklas Süle', 'Jonas Hofmann'] // Team 2 (Germany)
  ],
  score: '4:0',
  scored: [
    'Harry Kane', 'Raheem Sterling', 'Phil Foden', 'Jude Bellingham'
  ],
  date: '2024-11-26',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}