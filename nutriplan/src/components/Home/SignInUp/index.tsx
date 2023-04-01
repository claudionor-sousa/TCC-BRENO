import { Grid, TextField } from "@mui/material";
import NavigationButton from "../../NavigationButton";
import DefaultLayout from "../../defaultLayout";
import "../SignIn/style.scss";
import "./style.scss";
const CadastroSistema: React.FC = function () {
  return (
    <DefaultLayout
      Title="Cadastro de usuário"
      Buttons={
        <>
          <NavigationButton>Cadastrar</NavigationButton>
          <NavigationButton to="/">cancelar</NavigationButton>
        </>
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
export default CadastroSistema;
