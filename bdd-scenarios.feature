Feature: Activity Ranking API with City Search and Autocomplete

  Scenario: User searches a valid city and gets ranked activity list
    Given the user is on the search page
    When the user types "San"
    And selects "San Francisco, USA" from the suggestions
    Then the system fetches 7-day weather data
    And shows ranked activities with reasoning for each day

  Scenario: User enters text with no matching suggestions
    Given the user is on the search page
    When the user types "Xyzabc"
    Then no suggestions are displayed

  Scenario: API returns an error or invalid input is given
    Given the user is on the search page
    When the user types "InvalidCity123" and submits
    Then an error message "City not found" is shown
