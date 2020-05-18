# react-coding-challenge

#need to build a web app which allow user to login and view/search/filter games.

#screenshots(images) are attached for reference.

#APIs are provided: vendors.json and games.json


taks:
  1) Login screen and validation login. (any username and password)
  2) Once user logged in, able to see game lobby in 3 setions. Latest, Hot, Popular. 
  3) Able to see individual categories when see All.
 
 #Vendors
  vendors list are horizontally scrollable.
  when you click on particular vendor it shows game lobby of selected vendor.
  default first vendor selected.
  
 #Latest(flag `new` identifies latest games)
  Latest will display first 6 games horizontally.
  When you click See All, it shows popup of Latest games with infinite scroll view showing all latest games.
  
 #Hot(flag `hot` identifies hot games)
  Hot will display first 9 games horizontally (2*2 grid) (`1`st game occupies 2 rows* columns) .
  When you click See All, it shows popup of Hot games with infinite scroll view showing all hot games.

#Popular(not `hot` and not `new` games)
  Hot will display first 9 games vertically (3*3 grid).
  When you click See All, it shows popup of Popular games with infinite scroll view showing all popular games.
 
 
 
 #requirements:
 you have to use React 16.X latet features.
  
  
  
