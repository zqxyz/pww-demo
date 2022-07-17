	
	Introduction
	Zach Quint webpage demo for PWW

My goal with this project is to meet the visual criteria in a reasonable time,
with my secondary goal being to enjoy doing so. I'll be using React with
home-grown CSS only so I don't have to fight against a library [and fill the
css with `!important`]. I think using custom CSS will also demonstrate an
attention to detail and display what matters to me in a user interface.


----------------------------------------
## RESEARCH PHASE

	Collecting information
	Touching my chin and saying "hmmm"

I start by looking at the spec and breaking the layout into setions,
specifically the containers:
	- Navigation 	(this will require the most attention due to 
			the expansion, and in particular the variant
			needed for small screens and vision impaired
			users who use high zooms and non default minimum
			text size)
	- The "hero" above-the-fold contents:
		- Banner image
		- 4 cards	(should collapse into 2x2, and then 1x4,
				but never 3 and then 1)
	- fluid 3-column link dump
	- a 2 column section for
		- Recent updates
		- Calendar events
	- A return to top link
	- A footer	(3 columns, can collapse into 2 then 1 before
			collapsing to 1x3)


----------------------------------------
## INIT PHASE

	Setting up the project
	First steps

create-react-app and remove boilerplate

To help distinguish boundaries for component skeletons, I set up CSS vars
from the spec palette with comments for their designations, e.g.:  
`--blue2: #1B3A61; /* footer bg, card hover border */`




----------------------------------------
## BUILD PHASE

	The good part

I set up the basics of the navigation component structure. Enough to look just
about right, but without adding any of the functionality or fine tuning. I'm
saving this part for last.

Next, I create the hero banner --just the banner image with the photography and
the search bar.

I move on to the cards. These are quite simple, but required some tweaking with
media queries to get working well across screen types.

Moving on to Popular Services and Links, I use css's column-count to get the
columns automatic, so a maintainer doesn't have to juggle links between divs.
Links are marked as list items and the list item is set to `display: table` to
prevent links from breaking and splitting between columns (happens in Firefox).

Next is the Recent Updates and the Calendar of Events. I jam these in a single
component together, each with their own component underneath. They also share
a css file. I add the badges to main.css file because I think those could be
used anywhere. Both sections share a button class. (Input components
would be created if this project were more than a single page, but let's keep
things moving quickly.) These sections are quickly completed and styled.

The footer is quickly completed.

Before returning to finish the navigation I cave and spend about 30 minutes
making little tweaks and adjustments while drinking coffee.

Now onto the navigation menu and search pop-up.

This takes me as long as the rest of the webpage. There are more complex
choices to be made as the navbar has to stray significantly from the design.
I did not go with a sticky navbar as these drive me crazy and leave some
users feeling frustrated that they can't back out of the menu. On this same
note, I allow users to simply click out of the nav menu and also the search pop
up in the navbar, rather than requiring a reclick of the same button, which
is often a small target. This is achieved with an event listener.

Rather than engage in acrobatics of CSS, I hotswap the nav-menu component
with a compacted version which works for tablets, mobile devices, and people
who prefer large text (200% zoom or more by default). I try to assist the user
in keeping the menu entirely on screen (without shrinking the text beyond
readability) by letting only one section of the compact menu open at a time.
I think keeping the components seperate keeps it more maintainable as well.

Another decision made was to swap the insignia in the navbar to a watermark
for small screens. Fitting all that content side-by-side at such sizes wasn't
workign well. I think this is a nice compromise.


----------------------------------------
## FINISH

	Project completion notes
	and goodbyes
	
[Live page](https://pww-demo-scrfa.web.app/)

This project in total took about 20 hours, split up into multiple sessions. Some
concessions were made in the interest of time and getting the project completed.
I genuinely had a lot of fun doing it, and as always, I learned something new.
I look forward to more opportunites to complete projects like this with PWW or elsewhere.
