import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import classes from './AlertDialog.module.css';

export default function AlertDialog(alertProps) {

    const handleCancel = () => {
        alertProps.onclose(false);
    }

    const handleConfirm = () => {
        alertProps.onclose(true);
    }

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#000000',
                contrastText: '#FFFFFF',
            },
        },
    });

    return (

        <Dialog open={alertProps.open} onClose={handleCancel}
        >

            <DialogTitle id="alert-dialog-title"
                className={classes.dialogTitle}
            >
                {alertProps.title}
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <DialogContentText id="alert-dialog-description"
                    className={classes.dialogText}>
                    {alertProps.text}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <ThemeProvider theme={theme}>
                    <Button onClick={handleCancel} className={classes.dialogButton} color="neutral">Cancel</Button>
                    <Button onClick={handleConfirm} className={classes.dialogButton} autoFocus color="neutral">
                        Confirm
                    </Button>
                </ThemeProvider>
            </DialogActions>
        </Dialog>
    );
};