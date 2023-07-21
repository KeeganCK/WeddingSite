import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input, Select, notification } from "antd";
import "./RSVP.css";
import { TitleP, StyledPlant } from "./Wedding";

const { Search } = Input;

interface SectionDivProps {
  color: boolean;
  background?: string;
}

export const SectionDiv = styled.div<SectionDivProps>`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.color ? "#B2BDA0" : "#EBEFE3")};
  background-image: ${(props) =>
    props.background && `url("data:image/svg+xml,${props.background}")`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const RSVPDiv = styled.div`
  width: 70%;
`;

export const EmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomFormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    /* font-family: "DreamAvenue"; */
    /* font-weight: bold; */
    font-size: 16px;
  }
`;

export const CustomInput = styled(Input)`
  font-family: "Ysabeau Infant", sans-serif;
`;

export const CustomSearch = styled(Search)`
  font-family: "Ysabeau Infant", sans-serif;
`;

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

interface GuestOptionsProps {
  value: string;
  label: string;
}

const RSVP = () => {
  const [api, contextHolder] = notification.useNotification();
  const [guests, setGuests] = useState<number>(0);
  const [emailFound, setEmailFound] = useState<boolean>(false);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [guestOptions, setGuestOptions] = useState<Array<GuestOptionsProps>>();
  const [email, setEmail] = useState<string>("");
  const [doneRSVP, setDoneRSVP] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [guestNames, setGuestNames] = useState<Array<string>>([]);

  // const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/api/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          food: values.food,
          email: email,
          attending: values.wedding,
          attendingPre: values.preWedding,
          dietary: values.dietary,
          guestOne: values.guestOne,
          dietaryGuestOne: values.dietaryGuestOne,
          guestOneFood: values.guestOneFood,
          guestOnePre: values.guestOnePre,
          guestTwo: values.guestTwo,
          dietaryGuestTwo: values.dietaryGuestTwo,
          guestTwoFood: values.guestTwoFood,
          guestTwoPre: values.guestTwoPre,
          guestThree: values.guestThree,
          dietaryGuestThree: values.dietaryGuestThree,
          guestThreeFood: values.guestThreeFood,
          guestThreePre: values.guestThreePre,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setDoneRSVP(responseData.doneRSVP);
      setEmailFound(false);
      showNotification(responseData.message);
      setLoading(false);
    } catch (err: any) {
      api.error({
        message: err.message,
        placement: "top",
      });
      setLoading(false);
    }
  };

  const findEmail = async (value: string) => {
    try {
      setEmailLoading(true);
      if (!value) {
        throw new Error("Need to enter an Email");
      }
      const response = await fetch(
        `http://localhost:3001/api/getInviteeInfo/${value}`
      );
      const responseData = await response.json();
      //If reponse not good, throw an error
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setEmailFound(responseData.emailFound);
      let tempArray = [];
      for (let i = 0; i < responseData.guests + 1; i++) {
        const tempObject = {
          value: i.toString(),
          label: i.toString(),
        };
        tempArray.push(tempObject);
      }
      setGuestOptions(tempArray);
      setDoneRSVP(responseData.doneRSVP);
      setName(responseData.name);
      setGuestNames(responseData.guestNames);
      // form.setFieldsValue({
      //   name: responseData.name
      // })
      setEmail(value);
      setEmailLoading(false);
      showNotification(responseData.message);
    } catch (err: any) {
      console.log(err);
      api.error({
        message: err.message,
        placement: "top",
      });
      setEmailLoading(false);
    }
  };

  const showNotification = (message: string) => {
    api.success({
      message: message,
      placement: "top",
      duration: 10
    });
  };

  return (
    <SectionDiv id="RSVP" color={false}>
      {contextHolder}
      {/* <h3>RSVP</h3> */}
      <TitleP>RSVP</TitleP>
      <RSVPDiv>
        {!emailFound || doneRSVP ? (
          <div style={{ textAlign: "center" }}>
            <StyledPlant />
            <p style={{ fontSize: '20px', margin: '0 0 10px 0' }}>
              Please RSVP by October 1st, 2023.
            </p>
            <EmailDiv>
              <CustomSearch
                loading={emailLoading}
                enterButton="Check Email"
                onSearch={findEmail}
                placeholder="Please only use the email that the invitation was sent to"
              />
            </EmailDiv>
          </div>
        ) : (
          <Form
            name="rsvp"
            labelCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <CustomFormItem
              label="Your Name"
              name="name"
              initialValue={name}
              rules={[
                { required: true, message: "Please CustomInput your Name" },
              ]}
            >
              <CustomInput />
            </CustomFormItem>
            <CustomFormItem
              label="Entrée"
              name="food"
              rules={[
                { required: true, message: "Please let us know your choice" },
              ]}
            >
              <Select
                onChange={handleChange}
                options={[
                  { value: "chicken", label: "Chicken" },
                  { value: "pork", label: "Pork" },
                  { value: "vegtarian", label: "Vegetarian" },
                ]}
              />
            </CustomFormItem>
            <CustomFormItem label="Dietary Restriction" name="dietary">
              <CustomInput placeholder="Allergies/Preferences" />
            </CustomFormItem>
            <CustomFormItem
              name="wedding"
              label="Attending wedding"
              rules={[
                { required: true, message: "Please let us know your choice" },
              ]}
            >
              <Select
                onChange={handleChange}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </CustomFormItem>
            <CustomFormItem
              name="preWedding"
              label="Attending Pre-Wedding Event"
              rules={[
                { required: true, message: "Please let us know your choice" },
              ]}
            >
              <Select
                onChange={handleChange}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </CustomFormItem>
            <CustomFormItem label="Number of Guests" name="guests">
              <Select
                defaultValue="0"
                onChange={handleChange}
                options={guestOptions}
                onSelect={(value) => setGuests(parseInt(value))}
              />
            </CustomFormItem>
            {guests > 0 && (
              <>
                <hr />
                <br />
                <CustomFormItem
                  label="Guest Name"
                  name="guestOne"
                  initialValue={guestNames.length > 0 ? guestNames[0] : ""}
                >
                  <CustomInput />
                </CustomFormItem>
                <CustomFormItem
                  label="Entrée"
                  name="guestOneFood"
                  rules={[
                    {
                      required: true,
                      message: "Please let us know your choice",
                    },
                  ]}
                >
                  <Select
                    onChange={handleChange}
                    options={[
                      { value: "chicken", label: "Chicken" },
                      { value: "pork", label: "Pork" },
                      { value: "vegtarian", label: "Vegetarian" },
                    ]}
                  />
                </CustomFormItem>
                <CustomFormItem
                  label="Dietary Restrictions"
                  name="dietaryGuestOne"
                >
                  <CustomInput />
                </CustomFormItem>
                <CustomFormItem
                  label="Attending Pre-Weddding Event"
                  name="guestOnePre"
                  rules={[
                    {
                      required: true,
                      message: "Please let us know your choice",
                    },
                  ]}
                >
                  <Select
                    onChange={handleChange}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </CustomFormItem>
              </>
            )}
            {guests > 1 && (
              <>
                <hr />
                <br />
                <CustomFormItem
                  label="Guest Name"
                  name="guestTwo"
                  initialValue={guestNames.length > 1 ? guestNames[1] : ""}
                >
                  <CustomInput />
                </CustomFormItem>
                <CustomFormItem
                  label="Entrée"
                  name="guestTwoFood"
                  rules={[
                    {
                      required: true,
                      message: "Please let us know your choice",
                    },
                  ]}
                >
                  <Select
                    onChange={handleChange}
                    options={[
                      { value: "chicken", label: "Chicken" },
                      { value: "pork", label: "Pork" },
                      { value: "vegtarian", label: "Vegetarian" },
                    ]}
                  />
                </CustomFormItem>
                <CustomFormItem
                  label="Dietary Restrictions"
                  name="dietaryGuestTwo"
                >
                  <CustomInput />
                </CustomFormItem>
                <CustomFormItem
                  label="Attending Pre-Weddding Event"
                  name="guestTwoPre"
                  rules={[
                    {
                      required: true,
                      message: "Please let us know your choice",
                    },
                  ]}
                >
                  <Select
                    onChange={handleChange}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </CustomFormItem>
              </>
            )}
            {guests > 2 && (
              <>
                <hr />
                <br />
                <CustomFormItem
                  label="Guest Name"
                  name="guestThree"
                  initialValue={guestNames.length > 2 ? guestNames[2] : ""}
                >
                  <CustomInput />
                </CustomFormItem>
                <CustomFormItem
                  label="Food Choice"
                  name="guestThreeFood"
                  rules={[
                    {
                      required: true,
                      message: "Please let us know your choice",
                    },
                  ]}
                >
                  <Select
                    onChange={handleChange}
                    options={[
                      { value: "chicken", label: "Chicken" },
                      { value: "pork", label: "Pork" },
                      { value: "vegtarian", label: "Vegetarian" },
                    ]}
                  />
                </CustomFormItem>
                <CustomFormItem
                  label="Dietary Restrictions"
                  name="dietaryGuestThree"
                >
                  <CustomInput />
                </CustomFormItem>
                <CustomFormItem
                  label="Attending Pre-Weddding Event"
                  name="guestThreePre"
                  rules={[
                    {
                      required: true,
                      message: "Please let us know your choice",
                    },
                  ]}
                >
                  <Select
                    onChange={handleChange}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </CustomFormItem>
              </>
            )}
            <CustomFormItem wrapperCol={{ offset: 10, span: 16 }}>
              <Button loading={loading} type="primary" htmlType="submit">
                Submit
              </Button>
            </CustomFormItem>
          </Form>
        )}
      </RSVPDiv>
    </SectionDiv>
  );
};

export default RSVP;
