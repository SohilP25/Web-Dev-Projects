itemsjsonarray = [];
        function getdata() {
            let stitle = document.getElementById("title").value;
            let sdisc = document.getElementById("disc").value;
            if (localStorage.getItem("jsonitem") == null) {
                localStorage.clear();
                itemsjsonarray.push([stitle, sdisc]);
                localStorage.setItem("jsonitem", JSON.stringify(itemsjsonarray))
            }
            else {
                itemsjsonarray.push([stitle, sdisc]);
                localStorage.setItem("jsonitem", JSON.stringify(itemsjsonarray))
            }
            update();
        }
        function update() {
            let gethtml = document.getElementById("tbody");
            let str = "";
            if (localStorage.getItem("jsonitem") == null) {
                itemsjsonarray = [];
                str = "";
            }
            else {
                itemsjsonarray = JSON.parse(localStorage.getItem("jsonitem"));
                itemsjsonarray.forEach(function (element, index){
                    str += `
              <tr>
                    <th>${index + 1}</th>
                    <td>${element[0]}</td>
                    <td> ${element[1]}</td>
                    <td><button id="delete" onclick="deleteit(${index})">Delete &#128465</button></td>
                </tr>
              `;
                });
            }
            gethtml.innerHTML = str;
            localStorage.getItem("jsonitem");
        }
        function deleteit(index) {
            itemsjsonarray = JSON.parse(localStorage.getItem("jsonitem"));
            itemsjsonarray.splice(index, 1);
            localStorage.setItem("jsonitem", JSON.stringify(itemsjsonarray))
            update();
        }
        function clearall() {
            if(confirm("Are you really want to delete all items?")){
            localStorage.clear();
            update();
            }
        }   