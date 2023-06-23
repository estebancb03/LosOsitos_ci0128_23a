import { renderHook } from "@testing-library/react-hooks";
import useUser from "../src/hooks/useUser";
import { useContext } from "react";

const mockAuthContext = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3MjExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAlA8QbRC5irb905U",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe('useUser', () => { 
  test('Should return a object with user fields and default data`', () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn();
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);
    const { result } = renderHook(() => useUser());
    const { createUser } = result.current;
    const expectedUser = {
      ID: "",
      Name: "",
      LastName1: "",
      LastName2: "",
      Gender: 0,
      Email: "",
      Country_Name: "Costa Rica",
      Birth_Date: expect.any(String),
      State: "",
      Username: "",
      Password: "",
      Type: 0
    };

    const user = createUser();
    expect(user).toEqual(expectedUser);
  });
});
