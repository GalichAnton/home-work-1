import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC, FormEvent,  useRef } from 'react';
import { ITestimonial } from '../App';

const Form: FC<{ onSubmit: (testimonial: ITestimonial) => void }> = ({ onSubmit }) => {

  const formRef = useRef<HTMLFormElement>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newData = new FormData(formRef.current)
    const newDate = new Date()
    const newTestimonial: ITestimonial = {
      fullName: '' + newData?.get('name'),
      email: '' + newData.get('email'),
      text: '' + newData.get('msg'),
      createdAt: newDate.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
    }
    onSubmit(newTestimonial)
  }

  return (
    <Box
      onSubmit={handleSubmit}
      ref={formRef}
      component="form"
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        border: '1px solid #868282',
        padding: '10px',
        justifyContent: 'space-between',
        borderRadius: '5px'
      }}
      autoComplete="off"
    >
      <h2>Обратная связь: </h2>
      <TextField
        required
        margin="dense"
        name='name'
        placeholder='Ваше Имя' type='text' sx={{
          padding: '5px',
          borderRadius: '5px',
        }} />
      <TextField
        required
        margin="dense"
        name='email'
        placeholder='Почта'
        type='email'
        sx={{
          padding: '5px',
          borderRadius: '5px'
        }} />
      <TextField
        required
        multiline
        type='text'
        rows={3}
        placeholder='Отзыв'
        margin="dense"
        name='msg'
        sx={{
          padding: '5px',
          borderRadius: '5px'
        }}
      />
      <Button type='submit' variant="contained">Отправить</Button>
    </Box>
  )
}

export default Form
