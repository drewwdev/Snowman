import React, { useState } from 'react'
import step_0 from '/src/images/step_0.png'
import step_1 from '/src/images/step_1.png'
import step_2 from '/src/images/step_2.png'
import step_3 from '/src/images/step_3.png'
import step_4 from '/src/images/step_4.png'
import step_5 from '/src/images/step_5.png'
import step_6 from '/src/images/step_6.png'
import step_7 from '/src/images/step_7.png'
import words from './words.json'

export function App() {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const randomWord = words[Math.floor(Math.random() * words.length)]

  const [secretWord, setSecretWord] = useState(randomWord)
  const [currentWord, setCurrentWord] = useState('_______')
  const [guessedLetters, setGuessedLetters] = useState([''])
  const [playerScore, setPlayerScore] = useState(0)

  async function handleNewGame() {
    setSecretWord(randomWord)
    setCurrentWord('_______')
    setGuessedLetters([])
    setPlayerScore(0)
  }

  function clickOnLetter(letter: string) {
    setGuessedLetters([...guessedLetters, letter])

    if (secretWord.includes(letter)) {
      setPlayerScore(playerScore + 1)
      let newCurrentWord = ''
      for (let index = 0; index < secretWord.length; index++) {
        secretWord[index] === letter
          ? (newCurrentWord = newCurrentWord.concat(letter))
          : (newCurrentWord = newCurrentWord.concat(currentWord[index]))
      }
      setCurrentWord(newCurrentWord)
    }
  }

  function getSnowmanPicture() {
    switch (playerScore) {
      case 0:
        return step_0
      case 1:
        return step_1
      case 2:
        return step_2
      case 3:
        return step_3
      case 4:
        return step_4
      case 5:
        return step_5
      case 6:
        return step_6
      case 7:
        return step_7
    }
  }

  return (
    <div className="app">
      <main>
        <header>Snowman!</header>
        <img src={getSnowmanPicture()} />
        <p className="currentword">{currentWord}</p>
      </main>
      <footer>
        {alphabet.map((letter) => {
          return (
            <button
              key={letter}
              onClick={function () {
                clickOnLetter(letter)
              }}
              disabled={guessedLetters.includes(letter)}
            >
              {letter}
            </button>
          )
        })}
      </footer>
      <div>Your guessed letters are: {guessedLetters}</div>
      <button onClick={handleNewGame}>New Game</button>
    </div>
  )
}
