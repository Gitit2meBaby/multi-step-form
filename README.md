The app works as it is, but if i was to do it again i would set the values as variables earlier to enable more maintainable code.

I worked through the functions screen by screen as the need appeared. This led to some arguments getting thrown around a bit strangely. I should have laid out a clearer road map for the values before getting stuck in.

There is a few spots that just have to be hardcoded (ie 'monthly', 'yearly'), but the integers should just be a variable in all cases to allow for future updates of the pricing.

The click event on the add-ons section is also a little buggy, there are parts of the card that do not properly register the click, I tried putting the entire div inside the label tags, but this led in some instances to a click event changing the backdrop but not ticking the checkbox.
In the future I think I would just make my own checkboxes as I am not really reading the checked value in the javascript anyway.
This would also enable me to customise the look of the box easier.

