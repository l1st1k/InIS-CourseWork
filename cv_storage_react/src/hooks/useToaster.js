import { useRef } from "react";
import { toast } from "react-toastify";

export const useToaster = async (func, success, failure, params = null) => {
  const toastId = useRef(null);

  return async () => {
    toastId.current = toast.loading("Processing...", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

    const response = params === null ? await func() : await func(params);
    response === "Failed"
      ? toast.update(toastId.current, {
          autoClose: 3000,
          render: failure,
          type: toast.TYPE.ERROR,
          isLoading: false,
        })
      : toast.update(toastId.current, {
          autoClose: 3000,
          render: success,
          type: toast.TYPE.SUCCESS,
          isLoading: false,
        });
  };
};
