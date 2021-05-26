import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useForm } from "react-hook-form";


const FormOTP = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateOTP = (otp) => {
    if (!otp) {
      return "Bạn phải điền số điện thoại";
    } else if (otp.trim().split("").length !== 10) {
      return "Số điện thoại cần 10 chữ số.";
    } else return true;
  };

  let inputEl = (
    <FormControl id="phoneNumber" isInvalid={errors.phoneNumber}>
      <FormLabel>Nhập số điện thoại để được xác thực</FormLabel>
      <Input
        placeholder="Nhập số điện thoại"
        name="phoneNumber"
        {...register("phoneNumber", {
          validate: validateOTP,
        })}
      />
      <FormErrorMessage>
        {errors.phoneNumber && errors.phoneNumber.message}
      </FormErrorMessage>
    </FormControl>
  );
  if (props.checking) {
    inputEl = (
      <HStack justify="center">
        <PinInput otp>
          <PinInputField {...register("OTP1")} />
          <PinInputField {...register("OTP2")} />
          <PinInputField {...register("OTP3")} />
          <PinInputField {...register("OTP4")} />
          <PinInputField {...register("OTP5")} />
          <PinInputField {...register("OTP6")} />
        </PinInput>
      </HStack>
    );
  }
  return (
    <Flex justify="center" align="center" h="60vh">
      <form onSubmit={handleSubmit(props.onConfirm)}>
        <Stack spacing={5}>
          {props.checking && (
            <Text>
              Vui lòng nhập mã OTP vừa được gửi về điện thoại của bạn.
            </Text>
          )}
          {inputEl}
          <Button
            colorScheme="blue"
            type="submit"
            isLoading={props.isSubmitting}
          >
            {props.checking ? "Xác nhận" : " Nhận mã OTP"}
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
export default FormOTP;
