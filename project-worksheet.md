# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 2| Wireframes / Priority Matrix / Functional Components | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


## Project Description

This App provides a list of US Representatives by state and the information attached to each rep.
The user will start off by entering the state's name and then once they click submit, 
a list of the reps of the state will render. When the user clicks on the rep, the rep's info will appear along with the representative's bio, contact info, social network, and office expenditures. 

## Wireframes

| Components | (https://res.cloudinary.com/jperalta/image/upload/v1539700346/IMG_0988.jpg) | 
| Webpage blueprints| (https://res.cloudinary.com/jperalta/image/upload/v1539700346/IMG_0989.jpg) |
| Webpage blueprints| (https://res.cloudinary.com/jperalta/image/upload/v1539700348/IMG_0990.jpg) |
| Webpage blueprints| (https://res.cloudinary.com/jperalta/image/upload/v1539700348/IMG_0991.jpg) |


## Priority Matrix

(https://res.cloudinary.com/jperalta/image/upload/v1539700348/IMG_0987.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Fetching information for each Rep 
    - Generating a list of reps and clicking the rep for their info 
- Organize reps by state or zip
- Searching reps by location using the form 
- CSS Styling

#### PostMVP 
- New York Times profile
- button to redirect user to register to vote
- Generating a picture for each member
- Adding more relevant info

## React Architectural Design

- It will start with the App component and break off into two components, the States and the form.  Within the states, I will break out another component that will be responsible for the Representatives for each state.  The form will be used for the search of states for us reps.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the title of the page and the saved list |
| App | Fetches the data from api |  
| States | organizes the data by location first by state and post-MVP will be by zip code|  
| Candidates | component is responsible for the list of candidates appearing after for is submitted |  
| Form | responsible for the location information the user enters |  
| Footer | renders  | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 4hrs|  |  |
| Fetching info for each rep | H | 4hrs|  |  |
| Organize by State | H | 5hrs  |  |  |
| Clicking on rep for more info | M |  4hrs |  |  |
| CSS Styling | M | 3hrs  |  |  |
| NYT Profiles | L | 1hr |  |  |
| Adding more relevant info | L |  2hr |  |  |
| Total | H | 23hrs |  |  |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
