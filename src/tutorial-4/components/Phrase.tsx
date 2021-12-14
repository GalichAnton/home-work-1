import { FunctionComponent } from 'react'
import '../App.css'

interface IPhrase {
  phrases: string[]
}

const Phrase: FunctionComponent<IPhrase> = (props: IPhrase): JSX.Element => {
  return (
    <div className="list">
      {props.phrases.map((phrase) => {
        return <div key={phrase} className="block"><h3>{phrase}</h3></div>
      })
      }

    </div>
  )
}

export default Phrase
