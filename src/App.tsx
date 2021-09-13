import React, { useState } from 'react'

export function App() {
  const [word, setWord] = useState([
    'abdomen',
    'aborted',
    'abought',
    'achiest',
    'acolyte',
    'aconite',
    'acrogen',
    'adipose',
    'adopter',
    'advisor',
    'aileron',
    'ailment',
    'albumen',
    'albumin',
    'aliment',
    'alimony',
    'almoner',
    'alright',
    'ambient',
    'ambling',
  ])
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
  return (
    <div>
      <main>
        <header>Snowman!</header>
        <img src="/images/step_7.png" />
        <nav>_ _ _ _ _ _ _</nav>
      </main>
      <footer>{alphabet}</footer>
    </div>
  )
}
