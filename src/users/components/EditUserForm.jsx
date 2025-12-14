import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routs/routsModel";
import dayjs from "dayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function EditUserForm({
  onSubmit,
  onReset,
  validateForm,
  title,
  errors,
  data,
  onInputChange,
}) {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      validateForm={validateForm}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.ROOT}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid
          container
          direction="column"
          spacing={2}
          xs={12}
          md="auto"
          alignItems="center"
        >
          <Grid sx={{ width: "340px" }}>
            <Input
              name="pId"
              label="personal i.d"
              error={errors.pId}
              onChange={onInputChange}
              data={data}
              required={true}
            />
          </Grid>
          <Grid sx={{ width: "340px" }}>
            <Input
              name="lastName"
              label="last name"
              error={errors.lastName}
              onChange={onInputChange}
              data={data}
            />
          </Grid>
          <Grid sx={{ width: "340px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                name="birthDate"
                label="birth Date"
                error={errors.birthDate}
                onChange={(newValue) =>
                  onInputChange({
                    target: {
                      name: "birthDate",
                      value: newValue ? newValue.format("YYYY-MM-DD") : "",
                    },
                  })
                }
                value={data.birthDate ? dayjs(data.birthDate) : null}
                disableFuture
                slotProps={{
                  textField: {
                    inputProps: { readOnly: true },
                    required: true,
                    fullWidth: true,
                    error: Boolean(errors.birthDate),
                    helperText: errors.birthDate,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid sx={{ width: "340px" }}>
            <Input
              name="phone"
              label="phone"
              type="phone"
              error={errors.phone}
              onChange={onInputChange}
              data={data}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          spacing={2}
          xs={12}
          md="auto"
          alignItems="center"
        >
          <Grid sx={{ width: "340px" }}>
            <Input
              name="firstName"
              label="first name"
              error={errors.firstName}
              onChange={onInputChange}
              data={data}
              required={true}
            />
          </Grid>
          <Grid sx={{ width: "340px" }}>
            <Input
              name="email"
              label="email"
              error={errors.email}
              onChange={onInputChange}
              data={data}
            />
          </Grid>
          <Grid sx={{ width: "340px" }}>
            <FormControl fullWidth>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                name="gender"
                labelId="gender"
                value={data.gender}
                label="Gender"
                error={errors.gender}
                onChange={onInputChange}
              >
                <MenuItem value={0}>Male</MenuItem>
                <MenuItem value={1}>Female</MenuItem>
                <MenuItem value={2}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}
