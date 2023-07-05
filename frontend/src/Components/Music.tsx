import React, { useState } from "react";
import {
  EmailDiv,
  SectionDiv,
  CustomSearch,
  RSVPDiv,
  CustomFormItem,
  CustomInput,
} from "./RSVP";
import { notification, Form, Select, Button } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Music = () => {
  const [emailFound, setEmailFound] = useState<boolean>(false);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [api, contextHolder] = notification.useNotification();

  const findEmail = async (value: string) => {
    try {
      setEmailLoading(true);
      if (!value) {
        throw new Error("Need to enter an Email");
      }
      const response = await fetch(
        `http://localhost:3001/api/checkEmail/${value}`
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
    });
  };

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(`http://localhost:3001/api/addMusic`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artist: values.artist,
          track: values.track,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      showNotification(responseData.message);
    } catch (err: any) {
      api.error({
        message: err.message,
        placement: "top",
      });
    }
  };

  return (
    <SectionDiv id="music" color={true}>
      {contextHolder}
      <RSVPDiv>
        {!emailFound ? (
          <EmailDiv>
            <h4 style={{ marginRight: "10px" }}>Email: </h4>
            <CustomSearch
              loading={emailLoading}
              enterButton="Check Email"
              onSearch={findEmail}
              placeholder="Please only use the email that the invitation was sent to"
            />
          </EmailDiv>
        ) : (
          <Form
            name="rsvp"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <CustomFormItem label="Artist" name="artist">
              <CustomInput />
            </CustomFormItem>
            <CustomFormItem label="Track" name="track">
              <CustomInput />
            </CustomFormItem>
            <CustomFormItem wrapperCol={{ offset: 6, span: 16 }}>
              <Button loading={loading} type="primary" htmlType="submit">
                Add Song
              </Button>
            </CustomFormItem>
          </Form>
        )}
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Music;
