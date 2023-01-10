clear all
set more off

cd "C:\Users\julyn\Documents\University of Bristol\3rd Year\1) Data Science\Week 1\Project"

capture log close

import excel using Chart_4_Urbanization.xlsx, firstrow
browse

replace PARLIAMENTARYNAME=strproper(PARLIAMENTARYNAME)
replace URBANRURALCLASSIFICATION2022=strproper(URBANRURALCLASSIFICATION2022)

gen parlimen= UNIQUECODE+" "+PARLIAMENTARYNAME

*merging the two datasets
merge m:1 parlimen using "C:\Users\julyn\Documents\University of Bristol\3rd Year\1) Data Science\Week 1\Project\Chart_2_candidates_ge15_top.dta"

export delimited using Chart_4_Urbanization.csv

log close