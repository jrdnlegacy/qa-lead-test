# Manual Test Script: Activity Ranking API – City-Based Weather Forecast Integration

## Preconditions
- Application is accessible in a browser
- Backend API is deployed and functional
- Test user is on the homepage with the search input visible

---

## Test Case 1: Happy Path - Valid City Input with Suggestions

**Steps**
1. Navigate to the homepage
2. Type "Lon" in the search box
3. Observe autocomplete suggestions
4. Select "London, UK" from the list
5. Wait for the activity ranking results to load

**Expected Results**
- Suggestions appear for "Lon" (e.g., London, Long Beach)
- Upon selecting "London", 7 days of activity ranking are displayed
- Each day has activities ranked 1–10 with reasoning

---

## Test Case 2: No Suggestions Returned

**Steps**
1. Type "Xyzabc" in the search box

**Expected Results**
- No suggestions are shown
- User remains on the search box with no error

---

## Test Case 3: Invalid City Submitted

**Steps**
1. Type "Xyzabc" and press Enter

**Expected Results**
- Error message: "City not found" or similar
- No API call made or proper error response handled

---

## Test Case 4: API Failure / Timeout

**Steps**
1. Simulate network failure or slow API using browser dev tools (throttle to slow 3G)
2. Type "Paris" and select the suggestion

**Expected Results**
- Loading indicator appears
- Graceful error shown if request fails: "Unable to fetch activity rankings"

---

## Test Case 5: Response Validation

**Steps**
1. Type "Tokyo" and select the suggestion
2. Review the ranking result

**Expected Results**
- Each result contains:
  - Date (in correct format)
  - Activity name (from predefined list)
  - Rank (1–10)
  - Reasoning (clear and contextual)

---

## Edge Cases
- Rapid typing and deleting: Suggestions should not lag or crash
- Accented characters: "São Paulo" should match correctly
- Case insensitivity: "paris" and "Paris" yield same suggestions
