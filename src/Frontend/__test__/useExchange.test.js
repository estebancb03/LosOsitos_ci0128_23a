import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useContext } from "react";
import useExchange from "../src/hooks/useExchange";

const mockAuthContext = {
  token: `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjEwNjAzMDg2MSAg
    ICAgICIsIlVzZXJuYW1lIjoiY2hpcXVpIiwiVHlwZSI6MCwiaWF0IjoxNjg3M
    jExNzIxLCJleHAiOjE2ODczNDg1MjF9.HnxyhiMF1fHgjZK88fRQXc7GoEeAl
    A8QbRC5irb905U
  `,
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("useExchange", () => {
  test("should fetch exchange rates and set the exchange state", async () => {
    useContext.mockReturnValue(mockAuthContext);
    const mockAxiosClient = jest.fn().mockResolvedValue({
      data: [{ Value: 537.33 }],
    });
    jest.mock("../src/config/AxiosClient", () => mockAxiosClient);

    const { result, waitForNextUpdate } = renderHook(() => useExchange());
    await waitForNextUpdate();
    expect(result.current.exchange).toHaveProperty("USD");
    expect(result.current.exchange).toHaveProperty("CRC");
  });

  test("setExchange shout modify the exchange rates of the currencies", () => {
    const { result } = renderHook(() => useExchange());
    const { setExchange } = result.current;
    act(() => {
      setExchange({
        USD: 536.84,
        CRC: 0.0019,
      });
    });
    const { exchange } = result.current;
    const expectedData = {
      USD: 536.84,
      CRC: 0.0019,
    };
    expect(exchange).toEqual(expectedData);
  });
});
