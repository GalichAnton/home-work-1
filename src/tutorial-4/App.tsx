import { FunctionComponent, useState } from 'react'
import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrase'
import {nounsArr,adjectivesArr} from './data'

const App:FunctionComponent = ():JSX.Element => {
  const [phrases, setPhrases] = useState<string[]>([])

  const getRandomIndex = (num:number):number =>{
    return Math.round(Math.random()*num)
  }

  const onGeneratePhrase = ():void =>{
    const firstAdjective = getRandomIndex(adjectivesArr.length)
    const secondAdjective = getRandomIndex(adjectivesArr.length)
    const noun = getRandomIndex(nounsArr.length)
    const phrase:string = `${adjectivesArr[firstAdjective]}  ${adjectivesArr[secondAdjective]} ${nounsArr[noun]}`
    setPhrases([phrase,...phrases ])
  }

  const clearPhrases = () => {
    setPhrases([])
  }

  return (
    <div className="wrapper">
      {phrases.length ? <Phrase phrases={phrases}/> : <EmptyBlock/>}
      <button className="btn btn_generate" onClick={onGeneratePhrase}>Сгенерировать</button>
      <button className="btn btn_clear" onClick={clearPhrases}>Очистить</button>
    </div>
  )
}

export default App
