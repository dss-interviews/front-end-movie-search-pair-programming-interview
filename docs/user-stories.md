# User Stories for Movie Finder

## Session overview

**Duration:** 1 hour

Work through the stories in order. We do not expect you to finish them all. We
are interested in how you approach the work, solve problems and pair with us.

You may look things up, ask questions and use the tools you normally use,
including generative AI. You must be able to explain the code you produce.
Treat us as your pairing partner and talk through your thinking as you work.

## Story 1: Search as you type

**As a** user\
**I want to** see results as I type\
**So that** I can find a movie without submitting the form

### Acceptance criteria

- [ ] Results update automatically as the user types, without pressing a search button
- [ ] Typing shouldn't flood the app with a request per keystroke — searching should feel responsive, not janky
- [ ] The movies on screen always reflect the most recent search, even though network responses can arrive in a different order than they were sent

## Story 2: Search feedback

**As a** user\
**I want to** understand what the search is doing\
**So that** I know whether it is loading, empty or has failed

### Acceptance criteria

- [ ] Show a loading indicator while a search is in progress
- [ ] Show "No results found" after a completed search returns no movies
- [ ] Keep the welcome message before the first search
- [ ] Show a useful message if a search fails

## Story 3: Genre filtering

**As a** movie fan\
**I want to** filter movies by genre\
**So that** I can narrow the results to films I might enjoy

### Acceptance criteria

- [ ] The user can narrow results to a specific genre
- [ ] Genre and search combine — results reflect both at once, not one or the other
- [ ] Results update when the genre selection changes
- [ ] The genre filter can be cleared back to showing all genres

## Story 4: Release year and rating filters

**As a** movie fan\
**I want to** filter by release year and rating\
**So that** I can narrow the results further

### Acceptance criteria

- [ ] The user can narrow results to a release year range, not just a single exact year
- [ ] The user can filter out movies below a minimum rating
- [ ] These combine with the current search and genre, not replace them
- [ ] Results update as any filter changes

## Story 5: Active filters

**As a** user\
**I want to** see and remove active filters\
**So that** I can understand and adjust the current search

### Acceptance criteria

- [ ] The user can see which filters are currently applied
- [ ] Any single filter can be removed on its own
- [ ] All filters can be cleared at once
- [ ] Removing a filter updates the results immediately

## Story 6: Bookmarkable searches

**As a** user\
**I want to** share or return to a search\
**So that** I do not need to enter the same options again

### Acceptance criteria

- [ ] The URL reflects the current search, filters and sort order, so the page can be bookmarked or shared
- [ ] Opening that URL restores the same search
- [ ] Browser back and forward navigation keeps working
