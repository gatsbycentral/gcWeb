import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-flow: wrap column;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.2rem;
  width: 100%;
  line-height: 2rem;
  margin-bottom: 1rem;
  border: 1px solid rgb(238, 238, 238);
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  line-height: 2rem;
  border-color: rgb(238, 238, 238);
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  font-weight: bold;
  font-size: 1rem;
  color: white;
  padding: 0.5rem;
  width: 30%;
  line-height: 2rem;
`;

// Use the `path` (frontmatter) as the identifier for the post.
const CommentForm = ({ postId }) => {
  return (
    <Form
      method="POST"
      action="https://api.staticman.net/v2/entry/GatsbyCentral/gatsbycentral.com/master/comments"
    >
      <input
        type="hidden"
        name="options[reCaptcha][siteKey]"
        value="6LeCvWMUAAAAAAYxtvLnM1HMzHIdoofRlV_4wPy4"
      />
      <input
        type="hidden"
        name="options[reCaptcha][secret]"
        value="u6dW0vbgpaQLAYN8HS1WLaWQl1d2c5QTrLzmvOzQQPnjlfoj5+H2WmIn4KPf+QoB8LCk/6DftbqyWRWS1A8rgMwx4KAX6vKIy64UgVDABPt/gACE45FiPNUZtCqIHD03Ndf8ITjtbDPrOfP+jqOiVd3ibCIbSdRWEHiZMavF9PI="
      />
      <input
        name="options[redirect]"
        type="hidden"
        value="https://www.gatsbycentral.com/comments/success"
      />
      <input name="fields[postPath]" type="hidden" value={postId} />
      <label>
        <Input name="fields[name]" type="text" placeholder="Name" required />
      </label>
      <label>
        <Input name="fields[email]" type="email" placeholder="eMail" required />
      </label>
      <label>
        <Textarea name="fields[message]" required />
      </label>
      <div
        className="g-recaptcha"
        data-sitekey="6LeCvWMUAAAAAAYxtvLnM1HMzHIdoofRlV_4wPy4"
      />
      <Button type="submit">Comment</Button>
    </Form>
  );
};

export default CommentForm;
