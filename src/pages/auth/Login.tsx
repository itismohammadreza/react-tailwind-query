import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { dataService } from "@services/dataService";
import { User } from "@models/business";
import { globalStateService } from "@services/globalStateService";

export const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {isPending, mutateAsync: login} = useMutation({
    mutationFn: async (value: User) => {
      try {
        const {data} = await dataService.login(value);
        localStorage.setItem('token', data.access_token);
        const {data: user} = await dataService.getProfile();
        globalStateService.set(prev => ({...prev, user}));
        return user;
      } catch {
      }
    }
  });

  const onSubmit = async (value: User) => {
    try {
      await login(value);
      navigate(searchParams.get('return') ?? '/');
    } catch {
    }
  }

  return (
      <div>Login</div>
  )
}
