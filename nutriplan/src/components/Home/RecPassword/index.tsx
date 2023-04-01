import { Grid, TextField } from "@mui/material";
import NavigationButton from "../../NavigationButton";
import DefaultLayout from "../../defaultLayout";

const RecPassword: React.FC = function () {
  return (
    <DefaultLayout
      Title="Recuperação via e-mail"
      Buttons={
        <>
          <NavigationButton>Enviar</NavigationButton>
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
      </form>
    </DefaultLayout>
  );
};
export default RecPassword;
