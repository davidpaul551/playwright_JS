Feature: E-commerce Validations

  @Validations
  Scenario Outline: Placing the Order
    Given Login to Ecommerce app with "<username>" and "<password>"
    Then Verify error message

    Examples:
    | username                  | password |
    | pauld51@gmail.com         | Dd@123   |
    | pauld51111111@gmail.com   | Dd@123   |

