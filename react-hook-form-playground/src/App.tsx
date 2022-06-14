import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";

interface Form {
  age: number;
}

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState("");

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(() => onSubmit)}>
      <div className="container">
        <Controller
          name="age"
          control={control}
          defaultValue={33}
          rules={{ required: true, min: 17, max: 40 }}
          render={({ field }) => <Input {...field} />}
        />
        {errors.age?.type === "required" && <span>Age is required</span>}
        {errors.age?.type === "min" && <span>Minimum Age is 17</span>}
        {errors.age?.type === "max" && <span>Maximum Age is 40</span>}
      </div>
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default App;
