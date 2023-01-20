import ProfileFormData from "./ProfileFormData";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Esse campo é obrigatório."),
  email: yup
    .string()
    .email("Email inválido.")
    .required("Esse campo é obrigatório."),
  password: yup
    .string()
    .required("Esse campo é obrigatório.")
    .min(8, "A senha deve ter no mínimo 8 caracteres."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem."),
});

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form
        id="ProfileForm"
        className="flex justify-center flex-wrap w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProfileFormData
          register={register}
          errors={errors}
        />
      </form>
      <input
        form="ProfileForm"
        className="font-semibold text-xl cursor-pointer self-end bg-[#304596] h-16 hover:bg-[#324899] text-white active:bg-[#18234a] w-[20%]"
        type="submit"
        value="Atualizar"
      />
    </>
  );
}
