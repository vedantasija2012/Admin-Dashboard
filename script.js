console.log("Admin Dashboard by vedant");
// For Z1
let btn1 = document.getElementById('show1');
let tableContent = document.querySelector('.table1');
let tableContent2 = document.querySelector('.table2');
let insertHere = document.getElementById('insertHere');
let insertHere2 = document.getElementById('insertHere2')
let count = 1;

btn1.addEventListener('click', () => {
    insertHere.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 1</h2>
    <img src="./images/Z1_pie-chart.png" alt="error!">
    `
    document.getElementById('h2Here').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 1</h2>
    `
    tableContent.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 |</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCHECKED</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING | 20230417 | KB5023696</td>
                        <td>2</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>18</td>
                    </tr>
                </tbody>

        
   </tbody>
    `
    count=1;
    insertHere2.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    <img src="./images/Z1_pie-chart_day30.png" alt="error!">
    `
    document.getElementById('h2Here2').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    `

    tableContent2.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230530 |</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING | 20230530 | KB5026361</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING | 20230530 | KB5026372</td>
                        <td>3</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>21</td>
                    </tr>
                </tbody>

   </tbody>
    `

})

// For Z2
let btn2 = document.getElementById('show2');

btn2.addEventListener('click', () => {
    count = 1;
    insertHere.innerHTML = `
    <h3 style="text-align:center:;">DAY - 1</h3>
    <img src="./images/Z2_pie-chart.png" alt="error!">
    `

    tableContent.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>DANGER</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCHECKED</td>
                        <td>1</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>17</td>
                    </tr>
                </tbody>

   </tbody>
    `
    count=1;
    insertHere2.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    <img src="./images/Z2_pie-chart_day30.png" alt="error!">
    `
    document.getElementById('h2Here2').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    `

    tableContent2.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>DANGER</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE</td>
                        <td>10</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>21</td>
                    </tr>
                </tbody>

   </tbody>
    `
})

// For Z3
let btn3 = document.getElementById('show3');

btn3.addEventListener('click', () => {
    count = 1;
    insertHere.innerHTML = `
    <h3 style="text-align:center:;">DAY - 1</h3>
    <img src="./images/Z3_pie-chart.png" alt="error!">
    `

    tableContent.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>DANGER | 20230417 | LINE</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>DANGER | 20230417 | Skype version 8.83</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 |</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING | 20230417 | TeamViewer</td>
                        <td>1</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>18</td>
                    </tr>
                </tbody>

   </tbody>
    `
    count=1;
    insertHere2.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    <img src="./images/Z3_pie-chart_day30.png" alt="error!">
    `
    document.getElementById('h2Here2').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    `

    tableContent2.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230530 |</td>
                        <td>21</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>21</td>
                    </tr>
                </tbody>

   </tbody>
    `
})

// For Z4
let btn4 = document.getElementById('show4');

btn4.addEventListener('click', () => {
    count = 1;
    insertHere.innerHTML = `
    <h3 style="text-align:center:;">DAY - 1</h3>
    <img src="./images/Z4_pie-chart.png" alt="error!">
    `

    tableContent.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCHECKED</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING</td>
                        <td>17</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>18</td>
                    </tr>
                </tbody>

        
   </tbody>
    `
    count=1;
    insertHere2.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    <img src="./images/Z4_pie-chart_day30.png" alt="error!">
    `
    document.getElementById('h2Here2').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    `

    tableContent2.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>CAUTION</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING</td>
                        <td>2</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>21</td>
                    </tr>
                </tbody>

   </tbody>
    `
})

// For Z5
let btn5 = document.getElementById('show5');

btn5.addEventListener('click',()=>{
    count=1;
    insertHere.innerHTML = `
    <h3 style="text-align:center:;">DAY - 1</h3>
    <img src="./images/Z5_pie-chart.png" alt="error!">
    `

    tableContent.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Microsoft 365 Apps for enterprise - en-us Current Channel | 16.0.16227.20258</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Microsoft 365 Apps for enterprise - ja-jp Current Channel | 16.0.16227.20258</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230417 | Microsoft 365 - en-us Unknown | 16.0.16130.20332</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230417 | Microsoft 365 Apps for business - en-us Unknown | 16.0.16130.20306</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230417 | Microsoft 365 Apps for business - en-us Unknown | 16.0.16130.20332</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230417 | Microsoft 365 Apps for business - en-us Unknown | 16.0.16227.20258</td>
                        <td>4</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>18</td>
                    </tr>
                </tbody>
        
   </tbody>
    `
    count=1;
    insertHere2.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    <img src="./images/Z5_pie-chart_day30.png" alt="error!">
    `
    document.getElementById('h2Here2').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    `

    tableContent2.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>CAUTION | 20230530 | Microsoft 365 Apps for enterprise - en-us Current Channel | 16.0.16327.20214</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230530 | Microsoft 365 Apps for enterprise - en-us Current Channel | 16.0.16327.20248</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230530 | Microsoft 365 Apps for enterprise - ja-jp Current Channel | 16.0.16327.20248</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230530 | Microsoft 365 - en-us Unknown | 16.0.16327.20248</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230530 | Microsoft 365 Apps for business - en-us Unknown | 16.0.16327.20214</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>UNCKECKED | 20230530 | Microsoft 365 Apps for business - en-us Unknown | 16.0.16327.20248</td>
                        <td>12</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>21</td>
                    </tr>
                </tbody>

   </tbody>
    `
})

// For Z7
let btn7 = document.getElementById('show7');

btn7.addEventListener('click', () => {
    count = 1;
    insertHere.innerHTML = `
    <h3 style="text-align:center:;">DAY - 1</h3>
    <img src="./images/Z7_pie-chart.png" alt="error!">
    `

    tableContent.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>Not Installed</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Adobe Acrobat (64-bit) Reader | 22.003.20322</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Adobe Acrobat (64-bit) Reader | 23.001.20093</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Adobe Acrobat (64-bit) Reader | 23.001.20143</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Adobe Acrobat (64-bit) Reader | 23.001.20144</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230417 | Adobe Acrobat Reader | 23.001.20093</td>
                        <td>4</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>18</td>
                    </tr>
                </tbody>
        
   </tbody>
    `
    count=1;
    insertHere2.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; flex-direction:column;">
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    <img src="./images/Z7_pie-chart_day30.png" alt="error!">
    `
    document.getElementById('h2Here2').innerHTML = `
    <h2 style="text-align:center;" class="badge bg-secondary">DAY - 30</h2>
    `

    tableContent2.innerHTML = `
    <thead>
        <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Row Labels</th>
            <th scope="col">Count of Computer Name</th>
        </tr>
    </thead>

    <tbody>    
        <tbody>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>SAFE | 20230530 |</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING | 20230530 | KB5026361</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <th scope="row">${count++}</th>
                        <td>WARNING | 20230530 | KB5026372</td>
                        <td>3</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">${count++}</th>
                        <td>Grand Total: </td>
                        <td>21</td>
                    </tr>
                </tbody>

   </tbody>
    `
})