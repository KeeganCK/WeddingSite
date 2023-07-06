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
import MusicTable from "./MusicTable";
import { styled } from "styled-components";

const MusicTableDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Music = () => {
  const [emailFound, setEmailFound] = useState<boolean>(false);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchAgain, setSearchAgain] = useState<boolean>(false);
	const [cssClass, setCssClass] = useState<string>("");

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
      setLoading(true);
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
      setSearchAgain(!searchAgain);
      changeCSS();
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      api.error({
        message: err.message,
        placement: "top",
      });
    }
  };

  const changeCSS = async () => {
    setCssClass("table-row-bordered");
    await new Promise((res) => setTimeout(res, 2500));
    setCssClass("table-row-unbordered");
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
          <MusicTableDiv>
            <Form
              name="rsvp"
              labelCol={{ span: 0 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              style={{ width: '75%' }}
            >
              <CustomFormItem label="Artist" name="artist">
                <CustomInput />
              </CustomFormItem>
              <CustomFormItem label="Track" name="track">
                <CustomInput />
              </CustomFormItem>
              <CustomFormItem wrapperCol={{ offset: 10, span: 16 }}>
                <Button loading={loading} type="primary" htmlType="submit">
                  Add Song
                </Button>
              </CustomFormItem>
            </Form>
            <MusicTable searchAgain={searchAgain} setSearchAgain={setSearchAgain} cssClass={cssClass}/>
          </MusicTableDiv >
        )}
      </RSVPDiv>
    </SectionDiv>
  );
};

export default Music;
