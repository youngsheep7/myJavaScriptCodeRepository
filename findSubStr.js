//return the index of specific string at specific show times(num)
function findIndex(allStr, subStr, num){
	var index = 0;
	var tempindex = 0;
	for (var i=1;i<=num;i++)
	{
		tempindex = allStr.indexOf(subStr,tempindex);
		console.log("after:"+tempindex);
		if(tempindex == -1)
			{return index;}
		tempindex += subStr.length;
		console.log("before:"+tempindex);
		index = tempindex;
	}
	console.log("index:"+index);
	return index;
}