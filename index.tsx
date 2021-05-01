import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import {AlertComponentPropsWithStyle} from "react-alert";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertSnackbar = ({message, options, close, style}: AlertComponentPropsWithStyle) => {
    // @ts-ignore
    const {type, timeout, position} = options;
    const anchorOrigin = {
        vertical: position.split(" ")[0],
        horizontal: position.split(" ")[1]
    };

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open
            autoHideDuration={timeout}
            style={{
                ...style,
                minWidth: "30vw"
            }}
        >
            <Alert onClose={close} severity={type}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertSnackbar;
