import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Center, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";

const FormOTP = (props) => {
  let inputEl = (
    <FormControl id="verifyPhoneNumber">
      <FormLabel>Nhập số điện thoại để được xác thực</FormLabel>
      <Input placeholder="Nhập số điện thoại" name="verifyPhoneNumber" />
    </FormControl>
  );
  if (props.checking) {
    inputEl = (
      <HStack justify="center">
        <PinInput otp>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    );
  }
  return (
    <Flex justify="center" align="center" h="60vh">
      <form onSubmit={props.onConfirm}>
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
