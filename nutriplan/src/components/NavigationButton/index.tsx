import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface INavigationButton {
  action?: () => void;
  to?: string;
  children?: any;
}
const NavigationButton: React.FC<INavigationButton> = ({
  action,
  to,
  children,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const handleclick = () => {
    if (action !== undefined) {
      action();
    }
    if (to !== undefined) {
      navigate(to);
    }
  };
  return <Button onClick={handleclick}>{children}</Button>;
};
export default NavigationButton;
