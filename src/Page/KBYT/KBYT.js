import Form from "../../Components/Form/Form";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import FormOTP from "../../Components/Form/FormOTP";
import FormCheckingCode from "../../Components/Form/FormCheckingCode";

const KBYT = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkingCode, setCheckingCode] = useState(false);
  const [isVerify, setIsVerify] = useState(false);

  const sendDataHandler = (data) => {
    return fetch("http://45.32.102.61:8080/api/declare", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const confirmHandler = (data) => {
    setIsSubmitting(true);
    const body = {
      ho_ten: data.name,
      nam_sinh: data.dob,
      email: data.email,
      gioi_tinh: data.gender,
      sdt: data.phoneNumber,
      dia_chi: data.address,
      dia_diem: data.goPro,
      trieu_chung: { ...data.trieuChung },
      tiep_xuc: { ...data.tiepXuc },
    };
    setTimeout(() => {
      sendDataHandler(body)
        .then((res) => {
          toast({
            position: "bottom",
            title: "Khai báo thành công ❤️",
            description: "Cảm ơn bạn đã dành thời gian cho chũng tôi",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((er) => {
          toast({
            position: "bottom",
            title: "Đã có lỗi xảy ra",
            description: "Hãy thử lại...",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
      setIsSubmitting(false);
    }, 1000);
  };

  const verifyHandler = (event) => {
    event.preventDefault();

    setCheckingCode(true);
  };

  return (
    <>
      <FormOTP
        onConfirm={verifyHandler}
        isSubmitting={isSubmitting}
        checking={checkingCode}
      />
      {isVerify && (
        <Form onConfirm={confirmHandler} isSubmitting={isSubmitting}></Form>
      )}
    </>
  );
};
export default KBYT;
