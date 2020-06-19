
Senior Research Ideas


SENIOR PROJ. IDEAS

TOPIC: low vs. high income during COVID (spread rate, containment, death toll, etc.)


QUESTIONS TO ASK: 

- [ ] what’s considered “low income” and “high income”?
- [ ] are those defined already?
- [ ] how does density affect the spread of COVID?
- [ ] how easily can it be contained in both income categories?

RESOURCES:

- API ZILLOW (https://www.zillow.com/howto/api/APIOverview.htm)
- API JOHNS HOPKINS (https://coronavirus.jhu.edu/data/cumulative-cases)
- API Mapbox
- API Rapid Lines 
- API USEFUL Map for Income http://www.justicemap.org/index.php?giAdvanced=1  (has API from Census) 
	http://www.justicemap.org/data.php
- CENSUS DENSITY https://www.census.gov/dmd/www/pdf/512popdn.pdf




ARTICLES: 
- https://www.pewsocialtrends.org/2020/04/21/about-half-of-lower-income-americans-report-household-job-or-wage-loss-due-to-covid-19/

CONCEPTS: 

- COVID Visualizer https://www.covidvisualizer.com
- Cool visualizer https://kitware.github.io/covid-19-vis/


COMPARE + CONTRAST

HIGH INCOME	LOW INCOME
better access to healthcare 	unable to get access to healthcare
more funding	less funds
can finance their insurance, might not need it thru their job	needs a job that gives them health insurance

DENSITY

APTS	HOMES/HOME OWNERSHIP
	

IMPLEMENTATION


- [ ] get API for j.h. + zillow
- [ ] real time updates/duration (start of COVID-present)
- [ ] data can be pulled from API on the fly
- [ ] can be displayed via a geo chart (google charts or d3)
- [ ] map of high/low areas can be overlaid to show exactly how each area is impacted
- [ ] data can be stored in a database (mongodb)
- [ ] correlation analysis can be used to solidify graph results
- [ ] multiple maps can show different ideas (high vs low density, high vs low incomes)
- [ ] density can be broken up into ranges, as well as incomes
- [ ] start/end dates and/or real time updates via a refresh button
- [ ] Show curve overtime 




LAYOUT / DESIGN 

This one will most likely be the implemented one 
https://app.creately.com/diagram/wvXfGxRMWNA/edit


Component Set Up 
https://app.creately.com/diagram/TVcnllccsE3/edit


 @danny: i’m unsure of what some of these terms mean but that doesn’t matter, i think it looks pretty good, excited to see how it comes out

Secondary Ideas 

https://app.creately.com/diagram/JIH61XPMMxN/edit


￼







NEXT STEPS

Week of the June 16
- Find good/reliable resources for income data (api, csv)
- Make a map and get income data to show up (zoom in for more details)  

	Wednesday/Thursday 	
        - [x] Add Redux 
        - [x] Implement Map 



Take Aways from 6/17/20

	Accomplished 
		Set up Redux Store 
		Set up selection reducer and action 
	
	
	Still to do 	
	What pieces of state do we need to keep in the store?
        - [x] Current Selection (density, income) 
        - [x] Different Classes (income)
        - [x] Density Ranger Selection
				https://www.census.gov/dmd/www/pdf/512popdn.pdf
				Density will show options not a slider 	

        - [x] Need to find out how to change state from Controller Component

	


Saturday 6/20
        - [ ] Start looking into overlay for income / density 
        - [ ] Figure out Heroku Deployment issue 
        - [ ] Implement Overlay if possible 
	
Map 
	onClick() coordinates range to get area (easier/more efficient than onBlur)

