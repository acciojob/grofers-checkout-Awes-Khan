const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let rows = document.querySelectorAll("table tr");
	let sum =0;
	for(let i=1; i<rows.length; i++){
		let val = rows[i].children[1];
		sum += Number(val.textContent);
	}
    const newRow = document.createElement("tr");
    const td1 = document.createElement("td"); 
    td1.textContent = `Total Price:`;
    newRow.appendChild(td1);
    const td2 = document.createElement("td"); 
    td2.textContent = sum;
    newRow.appendChild(td2);
    const table = document.querySelector('table');
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

