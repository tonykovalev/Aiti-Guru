import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation, setCredentials } from "@/entities/session";
import { saveRememberMe, saveToken } from "@/shared/lib";
import { useAppDispatch } from "@/shared/store";
import { loginSchema, type LoginFormValues } from "../model/schema";

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    setError,
    control,
    resetField,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  });
  const rememberMe = useWatch({ control, name: "rememberMe" });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const data = await login({
        username: values.username,
        password: values.password,
        expiresInMins: values.rememberMe ? 60 * 24 * 7 : 30,
      }).unwrap();

      dispatch(
        setCredentials({
          accessToken: data.accessToken,
          user: { id: data.id, username: data.username },
        }),
      );
      saveRememberMe(values.rememberMe);
      if (values.rememberMe) {
        saveToken(data.accessToken);
      }
      navigate("/products");
    } catch {
      const message = "Неверный логин или пароль";
      setError("username", { message });
      setError("password", { message });
    }
  };

  return {
    register,
    handleSubmit,
    resetField,
    errors,
    rememberMe,
    isLoading,
    onSubmit,
  };
};
