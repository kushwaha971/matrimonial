import { Box, styled } from "@mui/material";
import { useField } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerStyle = styled(Box)(({theme}) => ({
    ".textFieldStyle":{
        width: "90%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    },
}))





const MyDatePicker = ({ ...props }) => {
  const [field, , helpers] = useField(props);

 
  const { setValue } = helpers;

  return (
    <DatePickerStyle>
    <ReactDatePicker
    className="textFieldStyle"
      placeholderText="DD/MM/YYYY"
      dateFormat="dd/MM/yyyy"
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(date) => setValue(date)}
    />
    </DatePickerStyle>
  );
};
export default MyDatePicker;
