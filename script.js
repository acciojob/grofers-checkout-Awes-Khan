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
	const newRow = document.createElement("tr");
	const td1 = document.createElement("td");
	td1.value = "total price";
	const td2 = document.createElement("td");
	td2.value = sum;
	newRow.appendChild(td1).appendChild(td2);
	return newRow;
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

