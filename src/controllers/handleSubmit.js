import { FeedbackFormObject } from "../modules/FeedbackFormObject";
import { parseResponse } from "../modules/parseResponse";
import { makePromise } from "../utils/makePromise";
import { output } from "../utils/output";

export function handleSubmit(event = new HTMLFormElement()) {
  event.preventDefault();
  const inputs = event.target;
  const nameInput = inputs[0];
  const emailInput = inputs[1];
  const phoneInput = inputs[2];

  const values = [nameInput.value, emailInput.value, phoneInput.value];

  const formObject = new FeedbackFormObject();
  formObject.name = values[0];
  formObject.email = values[1];
  formObject.phone = values[2];

  output(
    `<u>Thank you <b>${formObject.name}</b>, Your information is being processed.</u>`,
    "outputTag1"
  );
  output(`Name: ${formObject.name}<br>`);
  output(`Email: ${formObject.email}<br>`);
  output(`Phone: ${formObject.phone}<br>`);

  debugger;
  const promise = makePromise("https://myserver.com");
  promise.then(parseResponse);
}
