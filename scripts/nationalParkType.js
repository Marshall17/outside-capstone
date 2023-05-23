const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];
const selects = document.querySelector("select");

document.getElementById("parkType").onclick = function displayType() {
  clearDropDownList();
  for (let i = 0; i < parkTypesArray.length; i++) {
    const options = document.createElement("option");
    options.value = parkTypesArray[i];
    options.innerText = parkTypesArray[i];
    selects.appendChild(options);
  }
};

function clearDropDownList() {
  selects.innerHTML = " ";
}
function clearTableList() {
  outputTable.innerHTML = " ";
}

let outputTable = document.querySelector("#outputTable");
let fullTable = document.querySelector("#fullTable");
console.log(outputTable);
function tableBuilder(tbody, array) {
  let row = tbody.insertRow(-1);

  if (array.LocationName === 0) {
    array.LocationName = "";
  }
  let cell1 = row.insertCell(0);
  cell1.innerText = array.LocationName;

  if (array.ZipCode === 0) {
    array.ZipCode = " ";
  }
  if (array.State === 0) {
    array.State = " ";
  }
  if (array.City === 0) {
    array.City = " ";
  }
  if (array.Address === 0) {
    array.Address = " ";
  }
  let cell2 = row.insertCell(1);
  cell2.innerText =
    array.Address + " " + array.City + ", " + array.State + " " + array.ZipCode;

  if (array.Phone === 0) {
    array.Phone = "";
  }
  let cell3 = row.insertCell(2);
  cell3.innerText = array.Phone;

  if (array.Visit == null) {
    array.Visit = "";
  }

  let cell4 = row.insertCell(3);
  cell4.innerHTML = `<a href="${array.Visit}"> ${array.Visit} </a>`;
}

function displayTableParkType(value) {
  let valueValue = document.querySelector(
    'input[name="buttonChoice"]:checked'
  ).value;
  let search2 = value.split(" ");
  if (valueValue == 2 && search2.length > 1) {
    outputTable.innerHTML = " ";

    let filterType = nationalParksArray.filter(
      (a) =>
        a.LocationName.includes(search2[0]) && a.LocationName.includes(search2[1])
 
    );
    for (let i = 0; i < filterType.length; i++) {
      tableBuilder(outputTable, filterType[i]);
    }
  }
  else if (valueValue == 2)
  outputTable.innerHTML = " ";

    let filterType = nationalParksArray.filter((a) =>
      a.LocationName.includes(value)
    );

    for (let i = 0; i < filterType.length; i++) {
      tableBuilder(outputTable, filterType[i]);
    }
}


function selectedSearch(value) {
  clearTableList();
  let filteredLocation = nationalParksArray.filter((s) => s.State == value);
  for (let i = 0; i < filteredLocation.length; i++) {
    tableBuilder(outputTable, filteredLocation[i]);
  }
  displayTableParkType(value)

}
