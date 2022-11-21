import toast from "react-hot-toast";

export const handleError = (err) => {
  console.log(err);
  if (err?.response?.data) {
    toast.error(err.response.data.message);
  } else {
    toast.error("Unexcepted error occurred. Please try again.");
  }
};
