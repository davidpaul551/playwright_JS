import { expect } from "allure-playwright";
class APIUtils {
  constructor(apiContext, LoginPayload) {
    this.apiContext = apiContext;
    this.LoginPayload = LoginPayload;
  }

  async getToken() {
    const LoginResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: this.LoginPayload,
      }
    );
    expect(LoginResponse.ok()).toBeTruthy();
    const LoginResponseJson = await LoginResponse.json();
    console.log(LoginResponseJson);
    const token = LoginResponseJson.token;
    console.log("Token:", token);
    return token;
  }

  async createOrder(OrderPayload) {
    const OrderResponse = await this.apiContext.post(
      "https://rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: OrderPayload,
        headers: {
          Authorization: await this.getToken(),
          "Content-Type": "application/json",
        },
      }
    );
    const OrderRespJson = await OrderResponse.json();
    console.log(OrderRespJson);
    const orderID = OrderRespJson.orders[0];
    return orderID;
  }
}
module.exports = { APIUtils };
