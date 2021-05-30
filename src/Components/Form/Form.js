import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/layout";
import HalfBox from "../UI/HalfBox";
import { useForm, Controller } from "react-hook-form";
import { Select } from "@chakra-ui/select";
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm();

  if (props.declarer) {
    setValue("name", props.declarer.ho_ten);
    setValue("dob", props.declarer.nam_sinh);
    setValue("email", props.declarer.email);
    setValue("gender", props.declarer.gioi_tinh);
    setValue("phoneNumber", props.declarer.sdt);
    setValue("address", props.declarer.dia_chi);
    setValue("goPro", props.declarer.dia_diem);
    setValue("trieuChung", props.declarer.trieu_chung);
    setValue("tiepXuc", props.declarer.tiep_xuc);
  }

  console.log(getValues());
  return (
    <Flex justify="center" align="center" w="60%" margin="auto">
      <Box w="100%">
        <form onSubmit={handleSubmit(props.onConfirm)}>
          <Stack spacing={3}>
            <Heading
              as="h2"
              size="lg"
              textAlign="center"
              textTransform="uppercase"
            >
              Khai báo y tế online
            </Heading>
            <Box>
              <FormControl id="name" isInvalid={errors.name}>
                <FormLabel>
                  Họ và tên <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Input
                  type="name"
                  placeholder="Nguyễn Văn A"
                  {...register("name", {
                    required: "Trường này là bắt buộc",
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Flex justify="space-between" flexWrap="wrap">
              <HalfBox>
                <FormControl id="dob" isInvalid={errors.dob}>
                  <FormLabel>
                    Năm sinh <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    type="name"
                    placeholder="Ngày/Tháng/Năm (VD:26/08/2000)"
                    {...register("dob", {
                      required: "Trường này là bắt buộc",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.dob && errors.dob.message}
                  </FormErrorMessage>
                </FormControl>
              </HalfBox>
              <HalfBox>
                <FormControl id="email" isInvalid={errors.email}>
                  <FormLabel>
                    Email <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="nguyenvana@gmail.com"
                    {...register("email", {
                      required: "Trường này là bắt buộc",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
              </HalfBox>
            </Flex>
            <Flex justify="space-between" flexWrap="wrap">
              <HalfBox>
                <FormControl id="gender">
                  <FormLabel>Giới tính </FormLabel>
                  <Select
                    name="gender"
                    defaultValue="1"
                    {...register("gender")}
                  >
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                    <option value="3">Khác</option>
                  </Select>
                </FormControl>
              </HalfBox>
              <HalfBox>
                <FormControl id="phoneNumber" isInvalid={errors.email}>
                  <FormLabel>
                    Số điện thoại <span style={{ color: "red" }}>*</span>
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Số điện thoại"
                    {...register("phoneNumber", {
                      required: "Trường này là bắt buộc",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.phoneNumber && errors.phoneNumber.message}
                  </FormErrorMessage>
                </FormControl>
              </HalfBox>
            </Flex>
            <Box>
              <FormControl id="address" isInvalid={errors.address}>
                <FormLabel>
                  Địa chỉ (ít nhất 3 cấp Thành Phố - Huyện - Xã)
                  <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Input
                  type="address"
                  placeholder="Địa chỉ"
                  {...register("address", {
                    required: "Trường này là bắt buộc",
                  })}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="goPro" isInvalid={errors.goPro}>
                <FormLabel>
                  Trong vòng 14 ngày, Anh/chị có đến Quốc gia/vùng lãnh thổ nào
                  (có thể đi qua nhiều quốc gia)
                  <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Nhập thông tin"
                  {...register("goPro", {
                    required: "Trường này là bắt buộc",
                  })}
                />
                <FormErrorMessage>
                  {errors.goPro && errors.goPro.message}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Flex justify="space-between">
              <HalfBox>
                <FormControl id="trieuChung">
                  <FormLabel>
                    Trong vòng 14 ngày, Anh/chị có thấy xuất hiện dấu hiệu nào
                    sau đây không?
                  </FormLabel>
                  <Controller
                    name="trieuChung"
                    control={control}
                    defaultValue={[""]}
                    render={({ field }) => (
                      <CheckboxGroup {...field} colorScheme="green">
                        <Stack spacing={1}>
                          <Checkbox
                            value="sốt"
                            mb="0"
                            {...register("trieuChung")}
                          >
                            Sốt
                          </Checkbox>
                          <Checkbox value="ho" {...register("trieuChung")}>
                            Ho
                          </Checkbox>
                          <Checkbox value="khó thở" {...register("trieuChung")}>
                            Khó thở
                          </Checkbox>
                          <Checkbox
                            value="viêm phổi"
                            {...register("trieuChung")}
                          >
                            Viêm phổi
                          </Checkbox>
                          <Checkbox
                            value="đau bụng"
                            {...register("trieuChung")}
                          >
                            Đau bụng
                          </Checkbox>
                          <Checkbox value="mệt mỏi" {...register("trieuChung")}>
                            Mệt mỏi
                          </Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    )}
                  />
                </FormControl>
              </HalfBox>
              <HalfBox>
                <FormControl id="tiepXuc">
                  <FormLabel>
                    Trong vòng 14 ngày, Anh/chị có tiếp xúc với:
                  </FormLabel>
                  <Controller
                    name="tiepXuc"
                    control={control}
                    defaultValue={[""]}
                    render={({ field }) => (
                      <CheckboxGroup {...field} colorScheme="green">
                        <Stack spacing={1}>
                          <Checkbox
                            value="Người bệnh, nghi ngờ mắc bệnh COVID-19"
                            mb="0"
                            {...register("tiepXuc")}
                          >
                            Người bệnh, nghi ngờ mắc bệnh COVID-19
                          </Checkbox>
                          <Checkbox
                            value="Người từ nước có bệnh COVID-19"
                            {...register("tiepXuc")}
                          >
                            Người từ nước có bệnh COVID-19
                          </Checkbox>
                          <Checkbox
                            value="Người có biểu hiện(sốt, ho,khó thở, viêm phổi)"
                            {...register("tiepXuc")}
                          >
                            Người có biểu hiện(sốt, ho,khó thở, viêm phổi)
                          </Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    )}
                  />
                  
                </FormControl>
              </HalfBox>
            </Flex>
          </Stack>
          <Center>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Flex>
  );
};
export default Form;
