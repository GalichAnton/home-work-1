import { Component, HTMLAttributes } from 'react'

interface IProfile {
  name: string
  registredAt: Date
}


export default class ProfileCC extends Component<IProfile & HTMLAttributes<HTMLDivElement>, {}> {
  constructor(props: IProfile) {
    super(props)
  }
  month = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')
  
  render() {
    return (
      <div>
        <div {...this.props}>
          <p>Привет, <b>{this.props.name.split(' ')[0]}</b></p>
          <p>Дата регистрации {this.props.registredAt.getDate()} {this.month[this.props.registredAt.getMonth()]} {this.props.registredAt.getFullYear()}</p>
        </div>
      </div>
    )
  }
}
