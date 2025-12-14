const mapGender = (gender) => {
  switch (gender) {
    case null:
      return "";
    case 0:
      return "Male";
    case 1:
      return "Female";
    case 2:
      return "Other";
    default:
      return "";
  }
};

const userToModelForTable = (UserData) => {
  return {
    personalId: UserData.personalId,
    firstName: UserData.firstName,
    lastName: UserData.lastName === null ? "" : UserData.lastName,
    email: UserData.email,
    birthDate: UserData.birthDate.slice(0, 10),
    gender: mapGender(UserData.gender),
    phone: UserData.phone === null ? "" : UserData.phone,
  };
};

export default userToModelForTable;
