import "./styles.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert("Привет " + JSON.stringify(data.firstName));
    reset();
  };

  return (
    <div className="App">
      <h1>Задание по React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов"
              }
            })}
          />
        </label>

        <div style={{ height: 20 }}>
          {errors?.firstName && <p>{errors?.firstName.message || "ERROR"}</p>}
        </div>
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
