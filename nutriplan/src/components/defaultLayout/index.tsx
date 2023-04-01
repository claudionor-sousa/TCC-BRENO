import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import "./style.scss";
import NavigationButton from "../NavigationButton";
interface IDefaultprops {
  children: React.ReactNode;
  Title?: string;
  Buttons?: React.ReactNode;
  ForgetPassowrd?: React.ReactNode;
  NoAccount?: React.ReactNode;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const DefaultLayout: React.FC<IDefaultprops> = function ({
  children,
  Title,
  Buttons,
  ForgetPassowrd,
  NoAccount,
}) {
  return (
    <Grid className=" ContainerGrid">
      <Grid className="ContainerMain">
        <Grid className="ContainerHeader">
          <Grid className="title">{Title}</Grid>
        </Grid>
        <Grid className="ContainerContent">{children}</Grid>

        <Grid className="ContainerForgetPasswordMain">{ForgetPassowrd}</Grid>

        <Grid className="ContainerFooter">
          <Grid className="ContainerButton">{Buttons}</Grid>

          <Grid className="NoAccount">{NoAccount}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DefaultLayout;
