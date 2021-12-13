import { FormEvent, FunctionComponent, HTMLAttributes } from 'react'


const Form: FunctionComponent<HTMLAttributes<HTMLFormElement>> = (props): JSX.Element => {

  let email: string = ''
  let password: string = ''

  const handleChangeInput = (e: FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement
    if (target.type === 'text') {
      email = target.value
    } else if (target.type === 'password')
      password = target.value
  }
  const handleSubmit = (e: FormEvent<EventTarget>): void => {
    e.preventDefault()
    let target = e.target as HTMLFormElement
    if (email === '' || password === '') {
      alert('Пожалуйста заполните поля')
    } else {
      console.log({ email, password })
      email = ''
      password = ''
      target.reset()
    }

  }


  return (
    <form {...props} onSubmit={handleSubmit}>
      <input style={{margin:'5px',height:'50px'}} type='text' placeholder='E-Mail' onChange={handleChangeInput} />
      <input style={{margin:'5px',height:'50px'}} type='password' placeholder='Пароль' onChange={handleChangeInput} />
      <button style={{margin:'5px',height:'50px'}} type='submit'>Войти</button>
    </form>
  )
}

export default Form
