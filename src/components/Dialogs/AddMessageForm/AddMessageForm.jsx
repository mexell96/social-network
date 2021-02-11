import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validator";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageText"}
          placeholder="Enter your message"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
