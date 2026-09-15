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

- [ ] Search results update automatically when the title or keyword changes
- [ ] Wait 300 ms after the user stops typing before searching
- [ ] The user does not need to select the search button
- [ ] If requests overlap, only results for the latest search are shown

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

Genre options are available from `GET /api/genres`. The movie search endpoint
accepts a `genre` query parameter.

### Acceptance criteria

- [ ] Add a genre filter
- [ ] Combine the genre with the current search
- [ ] Update results when the genre changes
- [ ] Allow the genre filter to be cleared

## Story 4: Release year and rating filters

**As a** movie fan\
**I want to** filter by release year and rating\
**So that** I can narrow the results further

### Acceptance criteria

- [ ] Replace the single year field with a release year range
- [ ] Add a minimum rating filter
- [ ] Combine these filters with the current search and genre
- [ ] Update results when a filter changes

## Story 5: Active filters

**As a** user\
**I want to** see and remove active filters\
**So that** I can understand and adjust the current search

### Acceptance criteria

- [ ] Show each active filter
- [ ] Allow an individual filter to be removed
- [ ] Add an option to clear all filters
- [ ] Update results when filters are removed

## Story 6: Bookmarkable searches

**As a** user\
**I want to** share or return to a search\
**So that** I do not need to enter the same options again

### Acceptance criteria

- [ ] Reflect the current search, filters and sort order in the URL
- [ ] Restore the search when the page opens from that URL
- [ ] Keep browser back and forward navigation working
