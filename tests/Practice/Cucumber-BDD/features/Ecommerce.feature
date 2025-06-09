Feature: E-commerce Validations

  Scenario: Placing the Order
        Given Login with "pauldavid551@gmail.com" and "David@123"
        When Add "ZARA COAT 3" to cart
        Then Verify "ZARA COAT 3" is displayed in the cart
        When Enter valid details and place the Order
        Then Verify order is present in order history

