import React from "react";
import { Form, Input, Button, Checkbox} from "antd";
import { FormInstance } from "antd/lib/form";

const AddTodo: React.FC<{ onSubmit: (value: string) => void }> = ({
  onSubmit,
}) => {
  let input: any;
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
  };

  return (
    <div>
      <Form
        initialValues={{ task: "" }}
        form={form}
        size="large"
        layout="inline"
        onFinish={(values) => {
          onSubmit(values.task.trim());
          form.resetFields();
        }}
      >
        <Form.Item
          label=""
          name="task"
          rules={[{ required: true, message: "What task needs to be done?" }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
