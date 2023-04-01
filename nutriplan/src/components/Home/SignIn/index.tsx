import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import DefaultLayout from "../../defaultLayout";
import NavigationButton from "../../NavigationButton";
import "./style.scss";
const LoginSistema: React.FC = function () {
  return (
    <DefaultLayout
      Title="Login"
      Buttons={<NavigationButton to="/">Entrar</NavigationButton>}
      ForgetPassowrd={
        <>
          <Grid className="ContainerForgetPassword">
            <Grid className="containerCheck">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Guardar Informações"
              />
            </Grid>
            <Grid className="containerPassword">
              <NavigationButton to="/RecPassword">
                Esqueceu sua senha?
              </NavigationButton>
            </Grid>
          </Grid>
        </>
      }
      NoAccount={
        <Grid>
          Não tem uma conta?
          <NavigationButton to="/cadastro"> Se Inscreva</NavigationButton>
        </Grid>
      }
    >
      <form className="ContainerForm">
        <Grid className="ItemTextField">
          <TextField
            fullWidth
            required
            id="standad-login"
            label="E-mail"
            variant="outlined"
          />
        </Grid>
        <Grid>
          <TextField
            fullWidth
            required
            id="standad-login"
            label="Senha"
            variant="outlined"
          />
        </Grid>
      </form>
    </DefaultLayout>
  );
};
export default LoginSistema;
