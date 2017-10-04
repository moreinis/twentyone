// initialization 
index=0;
current=0;
answer=0;
target=0;
var saythem =[];
var game = [];
gamecount = counting("you:",game,1,3);
// counting function

count=gamecount[0];
game=gamecount[1];
counting("me:",game,count,2);

function counting(who,sarray,current,steps){
	for (index = current;index < current+steps; index=index+1) {
		sarray[index-1]=index;
	}
	alert(who+" "+sarray.toString());
	return [current+steps, sarray];
}
