window.addEventListener('message', function(event) {
	if(event.data[2]==1){
	console.log(event.data)
	location.href=event.data
	}
})

var data = [JSON.parse(JSON.stringify(location))];
var param ='';
try {
param=JSON.parse?.(document.body.children[0].textContent)?.access_token
console.log(param)
    } catch(e) {
        console.log(e); // error in the above string (in this case, yes)!
    }
    
top.parent.postMessage([data[0],param,2], '*');
opener.postMessage([data[0],param,2], '*');
