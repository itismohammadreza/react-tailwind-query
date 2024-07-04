import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { dataService } from "@services/dataService";
import { User } from "@models/business";

export const Register = () => {
  const navigate = useNavigate();

  const {isPending, mutateAsync: register} = useMutation({
    mutationFn: (value: User) => dataService.register(value)
  });

  const onSubmit = async (value: User) => {
    try {
      await register(value);
      navigate('/');
    } catch {
    }
  }

  return (
      <div>Register</div>
  )
}
