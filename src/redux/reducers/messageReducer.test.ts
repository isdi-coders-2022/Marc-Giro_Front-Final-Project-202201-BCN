import { actionsTypes } from "../actions/actionsTypes";
import messageReducer from "./messageReducer";

describe("Given an mesageReducer function", () => {
  describe("When it is called with a setMessage action with a message", () => {
    test("then it should return the message as the new state", () => {
      const currentState = {};
      const message = "hello";
      const action = {
        type: actionsTypes.setMessage,
        message: message,
      };

      const newState = messageReducer(currentState, action);

      expect(newState).toEqual(message);
    });
  });

  describe("When it is called with a cleartMessage action", () => {
    test("then it should return an empty message the new state", () => {
      const currentState = {};
      const message = { message: "" };
      const action = {
        type: actionsTypes.clearMessage,
      };

      const newState = messageReducer(currentState, action);

      expect(newState).toEqual(message);
    });
  });

  describe("When it is called with the wrong action", () => {
    test("then it should return the state as the new state", () => {
      const currentState = {};
      const action = { type: "" };

      const newState = messageReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
