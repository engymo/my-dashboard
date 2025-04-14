// @ts-nocheck
import { Box, Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Alert, Button, MenuItem, Snackbar } from '@mui/material';
import { useForm } from "react-hook-form";
import React from 'react';

const currencies = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' },
];

function ProfileForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm({
    mode: 'onSubmit', // تأكد من تحقق البيانات عند الإرسال
  });

  const onSubmit = (data) => {
    console.log("done", data);
    if (isValid) {
      handleClick({ vertical: 'top', horizontal: 'center' })(); // إظهار الـ Snackbar فقط إذا كانت البيانات صحيحة
    }
  };

  const role = watch("role") || ""; // نراقب القيمة المختارة من السلكت

  ///////////////////////////// Snackbar ////////////////////////////

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>

      <h2 style={{ fontWeight: '900', marginLeft: '3%' }}>Profile Form</h2>

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: "90%", minHeight: "100vh", mx: "auto" }}
      >

        <Stack direction="row" gap={2}>
          <TextField
            {...register("firstName", { required: "First name is required" })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="outlined"
            color="secondary"
            error={!!errors.firstName}
            helperText={
              typeof errors.role?.message === "string"
                ? errors.role.message
                : "Enter your First Name"
            } />
          <TextField
            {...register("lastName", { required: "Last name is required" })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="outlined"
            color="secondary"
            error={!!errors.lastName}
            helperText={
              typeof errors.role?.message === "string"
                ? errors.role.message
                : "Enter your Last Name"
            } />
        </Stack>

        <TextField
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
          })}
          label="Email"
          variant="outlined"
          color="secondary"
          error={!!errors.email}
          helperText={
            typeof errors.role?.message === "string"
              ? errors.role.message
              : "Enter your Email"
          } />

        <TextField
          {...register("contact", {
            required: "Contact number is required",
            pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number" }
          })}
          label="Contact Number"
          variant="outlined"
          color="secondary"
          error={!!errors.contact}

          helperText={
            typeof errors.role?.message === "string"
              ? errors.role.message
              : "Enter your Contact Number"
          } />

        <TextField
          {...register("address1", { required: "Address 1 is required" })}
          label="Address 1"
          variant="outlined"
          color="secondary"
          error={!!errors.address1}
          helperText={
            typeof errors.role?.message === "string"
              ? errors.role.message
              : "Enter your Address"
          } />

        <TextField
          {...register("address2")}
          label="Address 2"
          variant="outlined"
          color="secondary"
        />

        <TextField
          id="outlined-select-role"
          select
          label="Role"
          color="secondary"
          value={role}
          onChange={(e) => setValue("role", e.target.value)}
          error={!!errors.role}
          helperText={
            typeof errors.role?.message === "string"
              ? errors.role.message
              : "Please select your Position"
          }      >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: 'right' }}>
          <Button type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize", background: '#1a237e' }}>
            Create New User
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={2000}    // المده اللي هيبقي معروض فيه ع الشاشه
            onClose={handleClose}
            key={vertical + horizontal}>
            <Alert severity="success" sx={{ width: '100%' }}>
              Data sent successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}

export default ProfileForm;
