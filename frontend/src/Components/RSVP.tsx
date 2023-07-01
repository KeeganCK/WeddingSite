import React, { useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input, Select, notification } from "antd";

interface SectionDivProps {
  color: boolean;
}

export const SectionDiv = styled.div<SectionDivProps>`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => (props.color ? "#B2BDA0" : "#EBEFE3")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const RSVPDiv = styled.div`
  width: 70%;
`;

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const RSVP = () => {
  const [api, contextHolder] = notification.useNotification();
  const [guests, setGuests] = useState<number>(0);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      const response = await fetch(`http://localhost:3001/api/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          attending: values.wedding,
          attendingPre: values.preWedding,
          dietary: values.dietary,
					guestOne: values.guestOne,
					guestTwo: values.guestTwo,
					guestThree: values.guestThree
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
    } catch (err: any) {
      api.error({
        message: err.message,
        placement: "top",
      });
    }
  };

  return (
    <SectionDiv id="RSVP" color={false}>
      {contextHolder}
      <h3>RSVP</h3>
      <RSVPDiv>
        <Form
          name="rsvp"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Food Choice" name="food">
            <Select
              defaultValue="chicken"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "chicken", label: "Chicken" },
                { value: "pork", label: "Pork" },
                { value: "vegtarian", label: "Vegetarian" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Dietary Restriction" name="dietary">
            <Input />
          </Form.Item>
          <Form.Item
            name="wedding"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>Attending Wedding</Checkbox>
          </Form.Item>
          <Form.Item
            name="preWedding"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>Attending Pre-Wedding Event</Checkbox>
          </Form.Item>
          <Form.Item label="Number of Guests" name="guests">
            <Select
              defaultValue="0"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "0", label: "0" },
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
              onSelect={(value) => setGuests(parseInt(value))}
            />
          </Form.Item>
          {guests > 0 && (
            <Form.Item
              label="Guest One"
              name="guestOne"
            >
              <Input />
            </Form.Item>
          )}
					{guests > 1 && (
            <Form.Item
              label="Guest Two"
              name="guestTwo"
            >
              <Input />
            </Form.Item>
          )}
					{guests > 2 && (
            <Form.Item
              label="Guest Three"
              name="guestThree"
            >
              <Input />
            </Form.Item>
          )}
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </RSVPDiv>
    </SectionDiv>
  );
};

export default RSVP;
