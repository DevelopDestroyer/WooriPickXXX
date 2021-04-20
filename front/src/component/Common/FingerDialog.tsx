import { Box, Button, Dialog, Typography } from '@material-ui/core';
import React from 'react';
interface ACDialogProps {
    open: boolean;
    onClose: () => void;
}

const FingerDialog: React.FC<ACDialogProps> = (props: ACDialogProps) => {
    const { onClose, open } = props;

    const handleOk = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleOk} open={open}>
            <Box mt="15px" mx="15px">
                <Typography>지문등록 ㄱㄱㄱㄱ</Typography>
            </Box>
            <Box>
                <Button onClick={handleOk} className="p_btn_bottom txt_b">
                    확인
                </Button>
            </Box>
        </Dialog>
    );
};

export default FingerDialog;
