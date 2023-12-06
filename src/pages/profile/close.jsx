import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
import { Button, Modal } from '@mui/material';

const Close = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.href = 'your-redirect-url';
  };

  return (
    <div className='close'>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div>
          <p>Modal Content</p>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Close Modal and Redirect
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Close;
