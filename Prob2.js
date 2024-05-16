import React from 'react'

function Prob2() {

    const suits = ["Diamonds", "Heart", "Spades", "Clubs", "Joker"]
    const animals = ["Lion", "Fox", "Parrot", "Seal", "Snake"]
    const magicPower = ["Apple", "Bananas", "Mango", "Watermelon", "Papaya"]

    function probabilityToBeatBoss(suit, animal, magicPower) {
        const suitProbabilities = {
            'Diamonds': 16 / 78,
            'Hearts': 16 / 78,
            'Spades': 15 / 78,
            'Clubs': 13 / 78,
            'Joker': 15 / 78
        };
        const animalProbabilities = {
            'Lion': 14 / 78,
            'Fox': 15 / 78,
            'Parrot': 15 / 78,
            'Seal': 14 / 78,
            'Snake': 15 / 78
        };
        const magicPowerProbabilities = {
            'Apple': 15 / 78,
            'Bananas': 14 / 78,
            'Mango': 15 / 78,
            'Watermelon': 16 / 78,
            'Papaya': 14 / 78
        };
        //Proba of winning the boss
        let probability = 1;
        probability *= suitProbabilities[suit];
        probability *= animalProbabilities[animal];
        probability *= magicPowerProbabilities[magicPower];

        //Convert to percentage and return
        return (probability * 100).toFixed(2) + '%';
    }

    console.log(probabilityToBeatBoss('Hearts', 'Lion', 'Mango'));

    return (
        <div>
            <h1>Beating the BOSS</h1>
            <div> Proba of having: Hearts,Lion, and Mango: {probabilityToBeatBoss('Hearts', 'Lion', 'Bananas')} </div>
            <p></p>
            <div> Proba of having: Hearts,Fox, and Apple: {probabilityToBeatBoss('Hearts', 'Fox', 'Apple')} </div>
        </div>
    )
}
export default Prob2

/*
By doing some deep analyzation of the file given:

Heart-fox-Mango = false
Heart-fox-!Mango Or Heart-!fox = true

Diamonds-any-any = false

Spades-Parrot-any = false
Spandes-!Parrot-any = true

(Clubs-fox-Mango = 2t)
Clubs-fox-Mango = true
Clubs-!fox OR Clubs-fox-!Mango = false

Joker-Snake-Bananas = 1true 1f = 1/2 True = 0.5
Joker-Snake-!Bananas = false
 */