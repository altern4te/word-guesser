
let fiveLetterWords = [
    'APPLE',
    'HELLO',
    'Abuse',
    'Adult',
    'Agent',
    'Anger',
    'Award',
    'Basis',
    'Beach',
    'Birth',
    'Block',
    'Blood',
    'Board',
    'Brain',
    'Bread',
    'Break',
    'Brown',
    'Buyer',
    'Cause',
    'Chain',
    'Chair',
    'Chest',
    'Chief',
    'Child',
    'China',
    'Claim',
    'Class',
    'Clock',
    'Coach',
    'Coast',
    'Court',
    'Cover',
    'Cream',
    'Crime',
    'Cross',
    'Crowd',
    'Crown',
    'Cycle',
    'Dance',
    'Death',
    'Depth',
    'Doubt',
    'Draft',
    'Drama',
    'Dream',
    'Dress',
    'Drink',
    'Drive',
    'Earth',
    'Enemy',
    'Entry',
    'Error',
    'Event',
    'Faith',
    'Fault',
    'Field',
    'Fight',
    'Final',
    'Floor',
    'Focus',
    'Force',
    'Frame',
    'Frank',
    'Front',
    'Fruit',
    'Glass',
    'Grant',
    'Grass',
    'Green',
    'Group',
    'Guide',
    'Heart',
    'Henry',
    'Horse',
    'Hotel',
    'House',
    'Image',
    'Index',
    'Input',
    'Issue',
    'Japan',
    'Jones',
    'Judge',
    'Knife',
    'Laura',
    'Layer',
    'Level',
    'Lewis',
    'Light',
    'Limit',
    'Lunch',
    'Major',
    'March',
    'Match',
    'Metal',
    'Model',
    'Money',
    'Month',
    'Motor',
    'Mouth',
    'Music',
    'Night',
    'Noise',
    'North',
    'Novel',
    'Nurse',
    'Offer',
    'Order',
    'Other',
    'Owner',
    'Panel',
    'Paper',
    'Party',
    'Peace',
    'Peter',
    'Phase',
    'Phone',
    'Piece',
    'Pilot',
    'Pitch',
    'Place',
    'Plane',
    'Plant',
    'Plate',
    'Point',
    'Pound',
    'Power',
    'Press',
    'Price',
    'Pride',
    'Prize',
    'Proof',
    'Queen',
    'Radio',
    'Range',
    'Ratio',
    'Reply',
    'Right',
    'River',
    'Round',
    'Route',
    'Rugby',
    'Scale',
    'Scene',
    'Scope',
    'Score',
    'Sense',
    'Shape',
    'Share',
    'Sheep',
    'Sheet',
    'Shift',
    'Shirt',
    'Shock',
    'Sight',
    'Simon',
    'Skill',
    'Sleep',
    'Smile',
    'Smith',
    'Smoke',
    'Sound',
    'South',
    'Space',
    'Speed',
    'Spite',
    'Sport',
    'Squad',
    'Staff',
    'Stage',
    'Start',
    'State',
    'Steam',
    'Steel',
    'Stock',
    'Stone',
    'Store',
    'Study',
    'Stuff',
    'Style',
    'Sugar',
    'Table',
    'Taste',
    'Terry',
    'Theme',
    'Thing',
    'Title',
    'Total',
    'Touch',
    'Tower',
    'Track',
    'Trade',
    'Train',
    'Trend',
    'Trial',
    'Trust',
    'Truth',
    'Uncle',
    'Union',
    'Unity',
    'Value',
    'Video',
    'Visit',
    'Voice',
    'Waste',
    'Watch',
    'Water',
    'While',
    'White',
    'Whole',
    'Woman',
    'World',
    'Youth',
];
let currentWord = '';
count = 0;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('guess-button').addEventListener('click', () => {
        if(document.getElementById('guess-button').className.includes('disabled') == false)
            guess();
    });
    document.getElementById('new-game').addEventListener('click', () => {
        startGame();
    });

    startGame();
});
document.addEventListener('keyup', (e) => {
    if(document.getElementById('guess-button').className.includes('disabled') == false)
        if(e.code === 'Enter')
            guess();
});

/**
 * Start the game
 * 
 * Get random word and save it to currentWord
 * Blank out guess text area
 * Blank out guesses div
 */
function startGame()
{
    document.getElementById('guesses').innerHTML = '';
    currentWord = fiveLetterWords[Math.floor(Math.random()*fiveLetterWords.length)].toUpperCase()
    document.getElementById('guess-button').className = 'btn btn-success'
    count = 0

}
/**
 * Handle a guess
 * 
 * Read the guess
 * Compare the guess to currentWord
 * Append to guesses div
 * Check if win
 */
function guess()
{
    let currGuess = document.getElementById('guess').value.toUpperCase();
    if(currGuess.length == 5)
    {
        count++;
        colorList = [];
        for(x=0;x<5;x++)
        {
            if(currGuess.charAt(x) == currentWord.charAt(x))
                colorList.push('#32CD32');
            else if(currentWord.includes(currGuess.charAt(x)))
                colorList.push('#FFD700');
            else
                colorList.push('red');
        }
        
        document.getElementById('guesses').innerHTML += '<div><span style = "color:'+colorList[0]+'">'+currGuess.charAt(0)+'</span><span style = "color:'+colorList[1]+'">'+currGuess.charAt(1)+'</span><span style = "color:'+colorList[2]+'">'+currGuess.charAt(2)+'</span><span style = "color:'+colorList[3]+'">'+currGuess.charAt(3)+'</span><span style = "color:'+colorList[4]+'">'+currGuess.charAt(4)+'</span></div>';
        if(colorList.includes('red') == false && colorList.includes('yellow') == false)
        {
            document.getElementById('guesses').innerHTML += '<span style = "color:#32CD32">Winner!</span>';
            document.getElementById('guess-button').className = 'btn btn-primary disabled';
        }
        else if(count > 5)
        {
            document.getElementById('guesses').innerHTML += '<span style = "color:red">Loser! The answer was '+currentWord+'!</span>';
            document.getElementById('guess-button').className = 'btn btn-primary disabled';
        }
    } 
}