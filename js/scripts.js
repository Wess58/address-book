$(document).ready(function() {
  $("form#todoListForm").submit(function(event) {
    event.preventDefault();
    var listItem = $("input#todoItem").val();

    $("ul#listDisplay").append('<li class="item"><input type="checkbox" class="lsItem"> '+listItem+'</li>');
    $("input#todoItem").val("");

    $('input.lsItem').last().change(function(){
      if($('input.lsItem').is(':checked')){
        //console.log(listItem + " is selected");
        $(this).parent().toggleClass('inactive');
      }else{
        //console.log(listItem + " is not selected");
        $(this).parent().toggleClass('inactive');
      }
    });

  });

});


/*
Haiya this is how this works.
I found the solution in a completely different stackoverflow problem which is at the very least slightly related https://stackoverflow.com/questions/26964513/change-class-of-li-element-using-jquery

Alright. when we have a look at the list we are printing out, we are nesting input inside each list item.... making the input tag a child of each <li> tag.
Hadi hapo i believe you don't have a problem

The magic part of the code (btw this is completely similar to the last code we had, ni venye i retyped it ndio nielewe) ....is this part "$(this).parent()
"

the 'this' used here is referring to the input tag itself, its pointing back to itself.... if we replaced 'this' with 'input.lsItem' it will still work. Got it?
Good... haiya, the second part 'parent()' is a method that tells the JS to target whatever is housing 'this' i.e. the input tag. Since the <input> tag is inside the <li> tag as so -> <li><input></li>  ..... <li> is housing the input tag, making the <li> tag a parent and the <input> a child and since $(this).parent() will target whatever is housing that individual input tag, the <li> tag is the targeted one.... (which we tried to target with .last() but failed coz didn't fully get how it works)..... so the class 'inactive' will be applied to the parent of that input tag, which is the <li> and that's what we want AND THAT IS WHY IT IS WORKING. YEEEEEEEEEEEEEEES!!!i

i hope umeelewa. re-read again if you're stll puzzled.

Haiya, if you're asking how i knew the checkboxes respond to the individual list items and not the whole list, you see the console.log code i've commented out? That's how. I used that to print out the name of the specific list item + ' is selected' e.g. (This is where the .last() method comes in like the LMS example)

* []maziwa
* []Rice
* []Unga

selecting maziwa will say "maziwa is selected" and unselecting it will say "maziwa is not selected"
Now confident that the .last() function was returning individual list items, i searched for a solution to the other problem and just clicked a stack overflow link and read the problem and the solutions offered.

search term used: jquery change class of individial list item

hope that clears every question that might pop up

*/
