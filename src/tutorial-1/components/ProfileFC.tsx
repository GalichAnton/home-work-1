import { FunctionComponent, HTMLAttributes } from 'react'

interface IProfile {
  name: string
  registredAt: Date
}

interface IProfileFC extends FunctionComponent<IProfile & HTMLAttributes<HTMLDivElement>>{

}

const ProfileFC:IProfileFC = (props: IProfile):JSX.Element => {

  const month = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')

  return (
    <div {...props}>
      <p>Привет, <b>{props.name.split(' ')[0]}</b></p>
      <p>Дата регистрации {props.registredAt.getDate()} {month[props.registredAt.getMonth()]} {props.registredAt.getFullYear()}</p>
    </div>
  )
}

export default ProfileFC

