/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { editUserAction, getUserProfileAction } from "../../Redux/User/Action";

import { Form } from "react-router-dom";
import ChangeProfilePhotoModal from "./ChangeProfilePhotoModal";
import { uploadToCloudnary } from "../../Config/UploadToCloudnary";
const EditAccountDetail = () => {
  const { user } = useSelector((store) => store);
  const toast = useToast();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageFile, setImageFile] = useState(null);
  const [initialValues, setInitialValues] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    mobile: "",
    gender: "",
    website: "",
    private: false,
  });

  useEffect(() => {
    dispatch(getUserProfileAction(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  useEffect(() => {
    console.log("reqUser: ", user.reqUser);
    const newValues = {};
    for (let item in initialValues) {
      if (user.reqUser && user.reqUser[item]) {
        newValues[item] = user.reqUser[item];
      }
    }
    console.log("new value: ", newValues);
    formik.setValues(newValues);
  }, [user.reqUser]);
  const formik = useFormik({
    initialValues: { ...initialValues },
    onSubmit: (value) => {
      const data = {
        jwt: token,
        data: { ...value, id: user.reqUser?.id },
      };
      dispatch(editUserAction(data));
      toast({
        title: "Account updated...",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });
  async function handleProfileImageChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const image = await uploadToCloudnary(selectedFile);
      setImageFile(image);
      const data = {
        jwt: token,
        data: { image, id: user.reqUser?.id },
      };
      dispatch(editUserAction(data));
    }
    onClose();
  }
  return (
    <div className="border rounded-md p-10  lg:px-40">
      <div className="flex pb-7">
        <div className="w-[15%]">
          <img
            className="w-8 h-8 rounded-full"
            src={
              imageFile ||
              user.reqUser?.image ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            }
            alt=""
          />
        </div>
        <div>
          <p>{user.reqUser?.username}</p>
          <p
            onClick={onOpen}
            className="font-bold text-blue-800 cursor-pointer"
          >
            Change Profile Photo
          </p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="6">
          <FormControl className="flex" id="name">
            <FormLabel className="w-[15%]">Name</FormLabel>
            <div className="w-full">
              <Input
                placeholder="Name"
                className="w-full"
                type="text"
                {...formik.getFieldProps("name")}
              />
              <FormHelperText className="text-xs">
                Help people discover your account by using the name you're known
                by: either your full name, nick name, or business name.
              </FormHelperText>
              <FormHelperText className="text-xs">
                You can only change your name wince within 14 days.
              </FormHelperText>
            </div>
          </FormControl>
          <FormControl className="flex " id="username">
            <FormLabel className="w-[15%]">Username</FormLabel>
            <div className="w-full">
              <Input
                className="w-full"
                placeholder="Username"
                type="text"
                {...formik.getFieldProps("username")}
              />
              <FormHelperText className="text-xs">
                In most cases, you'll be able to change your username back to
                old for another 14 days. Learn more.
              </FormHelperText>
            </div>
          </FormControl>
          <FormControl className="flex " id="website">
            <FormLabel className="w-[15%]">Website</FormLabel>
            <div className="w-full">
              <Input
                className="w-full"
                placeholder="website"
                type="text"
                {...formik.getFieldProps("website")}
              />
              <FormHelperText className="text-xs">
                Editting your links is only available on mobile. Visit the
                Instagram app and edit your profile to change the websites in
                your bio.
              </FormHelperText>
            </div>
          </FormControl>
          <FormControl className="flex " id="bio">
            <FormLabel className="w-[15%]">Bio</FormLabel>
            <div className="w-full">
              <Input
                className="w-full"
                placeholder="bio"
                type="text"
                {...formik.getFieldProps("bio")}
              />
            </div>
          </FormControl>
          <div className="py-10">
            <p className="font-bold text-sm">Personal information</p>
            <p className="text-xs">
              Provide your personal information, even if the account is used for
              a business, a pet or something else. This won't be a part of your
              public profile.
            </p>
          </div>
          <FormControl className="flex " id="email">
            <FormLabel className="w-[15%]">Email</FormLabel>
            <div className="w-full">
              <Input
                className="w-full"
                placeholder="Email"
                type="email"
                {...formik.getFieldProps("email")}
              />
            </div>
          </FormControl>
          <FormControl className="flex " id="mobile">
            <FormLabel className="w-[15%]">Mobile</FormLabel>
            <div className="w-full">
              <Input
                className="w-full"
                placeholder="Phone"
                type="text"
                {...formik.getFieldProps("mobile")}
              />
            </div>
          </FormControl>
          <FormControl className="flex " id="gender">
            <FormLabel className="w-[15%]">Gender</FormLabel>
            <div className="w-full">
              <Input
                className="w-full"
                placeholder="Gender"
                type="text"
                {...formik.getFieldProps("gender")}
              />
            </div>
          </FormControl>
          <div>
            <Button colorScheme="blue" type="submit" className="">
              Submit
            </Button>
          </div>
        </Stack>
      </form>
      <ChangeProfilePhotoModal
        handleProfileImageChange={handleProfileImageChange}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </div>
  );
};

export default EditAccountDetail;
