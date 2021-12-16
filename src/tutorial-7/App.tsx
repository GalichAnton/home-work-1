import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function App() {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);




  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <TextField
            label="Имя"
            {...register("firstName", {
              required: "Это обязательное поле!"
            })}
            helperText={formState.errors.firstName && formState.errors.firstName.message}
            error={!!formState.errors.firstName}
            fullWidth
            name="firstName"
            type='text'
          />
          <TextField
            label="Фамилия"
            {...register("lastName", {
              required: "Это обязательное поле!"
            })}
            helperText={formState.errors.lastName && formState.errors.lastName.message}
            error={!!formState.errors.lastName}
            fullWidth
            name="lastName"
            type='text'
          />
        </div>
        <div className="row">
          <TextField
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: "Это неверная почта!"
              }
            })}
            helperText={formState.errors.email && formState.errors.email.message}
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register("password", {
              required: "Это обязательное поле!"
            })}
            helperText={formState.errors.password && formState.errors.password.message}
            error={!!formState.errors.password}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField name="about" label="Обо мне" fullWidth />
        </div>
        <br />
        <div className="row">
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button variant="contained" color="secondary" onClick={() => reset()}>
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
