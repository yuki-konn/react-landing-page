import { output } from "../utils/output";

export function parseResponse(resolveValue) {
  const response = JSON.parse(resolveValue);
  const message = response.message;
  output(message, "outputTag1", false);
}
