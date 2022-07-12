	
	Introduction
	Zach Quint webpage demo for PWW

My goal with this project is to meet the visual criteria in a reasonable time,
with my secondary goal being to enjoy doing so. I'll be using React with
home-grown CSS only so I don't have to fight against a library [and fill the
css with `!important`].


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

I move on to the cards. I set up a structure anticipating 3 views:
	- 4x1 cards on large screens
	- 2x2 cards on narrower screens
	- 1x4 cards on mobile devices

Moving on to Popular Services and Links, I use css's column-count to get the
columns automatic, so a maintainer doesn't have to juggle links between divs.
Links are marked as list items and the list item is set to `display: table` to
prevent links from breaking and splitting between columns.

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


----------------------------------------
## FINISH

	Project completion notes
	and goodbyes

This project in total took about 12 hours, split up into multiple sessions.
I had a lot of fun doing it.