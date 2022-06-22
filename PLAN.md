FRONT END

1 - Clean out the current react app (remove logo etc.)

HEADING

- Title

MAIN SECTION

- search bar (input field)
- drop down menu
- WEEK SECTION
  - DAY SECTION
    - Day/topic
    - Sub topic
      - mark as complete

NOTES:

- Main section is a div (main section)
  -within main section another div (select, search)
  -below put container to hold all the dats (div) - top level row for headers - left column saysd wqeek and right says complete
  -create map for however many objects get returned
  -e.g. topics.map()
  -e.g. user searchs word 'javascript' which returns 8 objects,
  -map through each opbject & create a row. - within row have left column (topic title and %) and right will have each sub topic related to topic title.
  -if biject.title === title name
  display array - create map - if true return all objects that return true - display each one to be mapped and it will return a row and inside row, you'll have topic, and toggle button to mark as complete

DISPLAY AREA

- Sub topic text
- Sub topic Summary
- Sub topic Resources (links)
- Sub topic user notes
  - input field
    - add
  - edit
  - delete

PROFILE SECTION

- profile photo
- profile info (text box)

DROP DOWN MENU
INPUT FIELD
TICK BOX
NOTE TAKING FIELD
LOG-IN FIELD

ORDER OF PRIORITY

1. MAIN - day section

   - develop a reusable component that renders the day/topic, and top sub-topics. (hard code) DONE
   - add CSS

2. DISPLAY -

   - sub topic sections: text(title), summary, resources, notes(don't need to be functional at this stage)

3. PROFILE -

   - add photo and info (hardcoded)

4. TITLE -
   - add app name(title)



WEDNESDAY

1. Make complete toggle