# User Stories for Movie Finder App

## Session Overview
**Duration**: 1 hour  
**Goal**: To work through the user stories to improve the overall UX of our movie app. 

**Notes**: We do not expect you to complete all user stories. We are primarily looking to see how you approach the tasks, your problem solving skills, and how you pair with others. Feel free to work how you would normally work, you can look things up, ask us questions. You can use Gen AI extensions if that's part of your workflow - But of course you must be able to explain all the code you create.

Treat us as your pairing buddy. Feel free to ask questions, bounce ideas off us.

---

## User Story 1: Real-Time Search
**As a** user  
**I want to** search as I type and see loading indicators  
**So that** I can find movies quickly without clicking buttons and know the app is working

### Acceptance Criteria:
- [ ] Search results update automatically as I type (no need to click search button)
- [ ] Show a loading indicator while searching
- [ ] Display "No results found" message when search returns empty
- [ ] Implement debouncing to avoid too many API calls (wait 300ms after user stops typing)

---

## User Story 2: Advanced Filtering & Sorting
**As a** movie fan  
**I want to** filter and sort movies by different criteria  
**So that** I can discover movies that match my preferences

### Acceptance Criteria:
- [ ] Add filter options for genre (dropdown/checkboxes)
- [ ] Add filter for release year range (slider or input fields)
- [ ] Add filter for minimum rating (slider)
- [ ] Show active filters with ability to clear them
- [ ] Update URL to reflect current filters (for bookmarking)
