import { Form, Input as InputAntd } from "antd";
import React from "react";

function Input({ ...props }) {
  return (
    <Form.Item>
      <InputAntd placeholder="Input here" {...props} />
    </Form.Item>
  );
}

export default Input;
