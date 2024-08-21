const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let rows = document.querySelectorAll("table tr");
	let sum =0;
	for(let i=1; i<rows.length; i++){
		let val = row[i].children[1];
		sum += Number(val.textContent);
	}
//Add your code here
	return sum;
  
};

getSumBtn.addEventListener("click", getSum);

