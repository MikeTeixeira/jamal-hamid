const validates = values => {

  const errors = {};
  if(!values.firstName){
    errors.firstName = "Required";
    console.log("Required");
  }
}

export default validates;