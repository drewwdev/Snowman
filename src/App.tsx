import React, { useState } from 'react'
import words from './words.json'

export function App() {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  const [secretWord, setSecretWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  )
  const splitWord = secretWord.split('')
  const [guessedLetters, setGuessedLetters] = useState('')

  function clickOnLetter(letter: string) {
    setGuessedLetters([...guessedLetters, letter])
    console.log(guessedLetters)
    return secretWord.includes(guessedLetters)
      ? console.log('this only works when the string is empty')
      : console.log(
          'this always gets returned because the letter is added after the function ends'
        )
  }

  return (
    <div className="app">
      <main>
        <header>Snowman!</header>
        <img src="/images/step_0.png" />
        <nav>
          {splitWord.map(function (letter) {
            return <p key={letter}>{letter}</p>
          })}
        </nav>
      </main>
      <footer>
        {alphabet.map(function (letter) {
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
    </div>
  )
}
