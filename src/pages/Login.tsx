import { useNavigate } from "react-router-dom";
import { useForm } from "../common/hooks";
import { httpAdapter, urlBase } from "../common/adapters/httpAdapter";
import { ResponseLoginHTTP } from "../interfaces/Responses";
import Swal from "sweetalert2";
import { FormComponent } from "../components";
import { FieldsFormAuthLogin } from "../components/auth/FieldsFormAuth";
import { FormField } from "../components/auth/FormField";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { values, handleInputChange } = useForm({
    email: "",
    password: "",
  });
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    console.log("Form submitted");

    const resp = await httpAdapter.post<ResponseLoginHTTP>(
      `${urlBase}/api/auth/login`,
      {
        ...values,
      }
    );

    console.log(resp);

    if (resp.ok) {
      await Swal.fire({
        icon: "success",
        title: "Usuario autenticado Correctamente",
        text: "Bienvenido",
      });
      return navigate("/dashboard");
    }

    Swal.fire({
      icon: "error",
      title: "Error",
      text: resp.message,
    });
  };

  return (
    <>
      <FormComponent
        correspondingRoute="/register"
        correspondingRouteText="¿No tienes una cuenta?"
        textLink="Regístrate"
        titulo="Iniciar Sesión"
        handleForm={handleLogin}
      >
        {FieldsFormAuthLogin.map((field) => (
          <FormField
            key={field.id}
            field={field}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value={values[field.name]}
            handleInputChange={handleInputChange}
          />
        ))}
      </FormComponent>
    </>
  );
};
