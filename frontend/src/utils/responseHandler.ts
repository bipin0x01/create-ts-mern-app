import toast from "react-hot-toast";

export const handleError = (err) => {
  toast.error(err.response.data?.message);
};

export const handleSucess = (response) => {
  if (response.message !== "") {
    toast.success(response.message);
  }
};
