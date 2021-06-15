
createMainTable("mainTable");
createCompareTable("compareTable")

    async function getData() {
    const response = await fetch('https://api.opendota.com/api/heroStats');
    const data = await response.json();
    return data;
  }

    function searchHero (){    
      
      let mainTable = document.getElementById("mainTable");
      mainTable.style.display = "none";

      let resultTable = document.getElementById("resultTable");
      resultTable.style.display = "inline-table"; 

      let viewAllButton = document.getElementById("viewAllButton");
      viewAllButton.style.display = "inline";
      
      let goToCompareButton = document.getElementById("goToCompareButton");
      goToCompareButton.style.display = "inline";

      dataInResultTable("name","resultTable");
     
    }

    function compareHeroes (){
    
      let compareTable = document.getElementById("compareTable");
      compareTable.style.display = "inline-table"; 
      
      dataInCompareTable("name1", "name2", "compareTable");
    }

    function returnHeroesButton (){

      let resultTable = document.getElementById("resultTable");
      resultTable.style.display = "none"; 

      let returnMainTable = document.getElementById("mainTable");
      returnMainTable.style.display = "inline-table";

      let viewAllButton = document.getElementById("viewAllButton");
      viewAllButton.style.display = "none";

      let goToCompareButton = document.getElementById("goToCompareButton");
      goToCompareButton.style.display = "none";

    }

    function goToCompareButton (){

      let resultTable = document.getElementById("resultTable");
      resultTable.style.display = "none"; 

      let viewAllButton = document.getElementById("viewAllButton");
      viewAllButton.style.display = "none";

      let goToCompareButton = document.getElementById("goToCompareButton");
      goToCompareButton.style.display = "none";

      let name = document.getElementById("name");
      name.style.visibility = "hidden";

      let name1 = document.getElementById("name1");
      name1.style.visibility = "visible";

      let name2 = document.getElementById("name2");
      name2.style.visibility = "visible";

      let searchButton = document.getElementById("searchButton");
      searchButton.style.display = "none";
      
      let compareButton = document.getElementById("compareButton");
      compareButton.style.display = "inline";


    }

    function createMainTable(tableID){
    
      let data = getData(); 
      data.then(data => {
       for (let i = 0; i < data.length; i++) {

        const a = i+1;
        const b = data[i].localized_name;
        const c = data[i].attack_type;
        const d = data[i].roles;            
        
        let tda = document.createElement("td");
        let tdb = document.createElement("td");
        let tdc = document.createElement("td");
        let tdd = document.createElement("td");
        
        let nodea = document.createTextNode(a);
        let nodeb = document.createTextNode(b);
        let nodec = document.createTextNode(c);
        let noded = document.createTextNode(d);

        tda.appendChild(nodea);
        tdb.appendChild(nodeb);
        tdc.appendChild(nodec);
        tdd.appendChild(noded);

        let tr = document.createElement("tr"); 
        tr.appendChild(tda);
        tr.appendChild(tdb);
        tr.appendChild(tdc);
        tr.appendChild(tdd);
        
        let table = document.getElementById(tableID); 
        table.appendChild(tr);
       } 
      }); 
    }

    function createCompareTable(tableID){
    
      let data = getData(); 
      data.then(data => {
       for (let i = 0; i < 17; i++) {
  
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        
        let tr = document.createElement("tr"); 
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        
        let table = document.getElementById(tableID); 
        table.appendChild(tr);
       } 
      }); 
    }

    function dataInResultTable(inputID, tableID){
    
      let inputValue = document.getElementById(inputID).value;
      let table = document.getElementById(tableID);
      let td = table.getElementsByTagName("td");
            
      let data = getData();
      data.then(data => {
       for (let i = 0; i < data.length; i++){
        if(inputValue == data[i].localized_name){         
          td[0].innerHTML = i+1;
          td[1].innerHTML = data[i].localized_name;
          td[2].innerHTML = data[i].attack_type;
          td[3].innerHTML = data[i].roles;
        }
       } 
      }); 
    }
          
    function dataInCompareTable(input1ID, input2ID, tableID){
    
    let data = getData();
    
    let name1 = document.getElementById(input1ID).value;
    let name2 = document.getElementById(input2ID).value;
    
    let table = document.getElementById(tableID);
    table.style.display = "inline-table";

    let td = table.getElementsByTagName("td");
       
    let th = table.getElementsByTagName("th")
    let index = 1;

        td[index].innerHTML = "Move Speed"; index = index + 3;
        td[index].innerHTML = "Minimum Damage"; index = index + 3;
        td[index].innerHTML = "Maximum Damage"; index = index + 3;
        td[index].innerHTML = "Mana"; index = index + 3;
        td[index].innerHTML = "Mana Regen"; index = index + 3;
        td[index].innerHTML = "Armor"; index = index + 3;
        td[index].innerHTML = "Range"; index = index + 3;
        td[index].innerHTML = "Projectile Speed"; index = index + 3;
        td[index].innerHTML = "Base Strength"; index = index + 3;
        td[index].innerHTML = "Base Agility"; index = index + 3;
        td[index].innerHTML = "Base Intelligence"; index = index + 3;
        td[index].innerHTML = "Strength Gain"; index = index + 3;
        td[index].innerHTML = "Agility Gain"; index = index + 3;
        td[index].innerHTML = "Intelligence Gain"; index = index + 3;
        td[index].innerHTML = "Base Attack Time"; index = index + 3;
        td[index].innerHTML = 'Base Health'; index = index + 3;
        td[index].innerHTML = "Base Health Regen";

      data.then(data =>{
      for (let i = 0; i < data.length; i++){
        if(name1 == data[i].localized_name){
        let index = 0;
        th[0].innerHTML = data[i].localized_name;   
        td[index].innerHTML = data[i].move_speed; index = index + 3;
        td[index].innerHTML = data[i].base_attack_min; index = index + 3;
        td[index].innerHTML = data[i].base_attack_max; index = index + 3;
        td[index].innerHTML = data[i].base_mana; index = index + 3;
        td[index].innerHTML = data[i].base_mana_regen; index = index + 3;
        td[index].innerHTML = data[i].base_armor; index = index + 3;
        td[index].innerHTML = data[i].attack_range; index = index + 3;
        td[index].innerHTML = data[i].projectile_speed; index = index + 3;
        td[index].innerHTML = data[i].base_str; index = index + 3;
        td[index].innerHTML = data[i].base_agi; index = index + 3;
        td[index].innerHTML = data[i].base_int; index = index + 3;
        td[index].innerHTML = data[i].str_gain; index = index + 3;
        td[index].innerHTML = data[i].agi_gain; index = index + 3;
        td[index].innerHTML = data[i].int_gain; index = index + 3;
        td[index].innerHTML = data[i].attack_rate; index = index + 3;
        td[index].innerHTML = data[i].base_health;; index = index + 3;
        td[index].innerHTML = data[i].base_health_regen;      
        } else
        if(name2 == data[i].localized_name){
        let index = 2;
        th[2].innerHTML = data[i].localized_name;  
        td[index].innerHTML = data[i].move_speed; index = index + 3;
        td[index].innerHTML = data[i].base_attack_min; index = index + 3;
        td[index].innerHTML = data[i].base_attack_max; index = index + 3;
        td[index].innerHTML = data[i].base_mana; index = index + 3;
        td[index].innerHTML = data[i].base_mana_regen; index = index + 3;
        td[index].innerHTML = data[i].base_armor; index = index + 3;
        td[index].innerHTML = data[i].attack_range; index = index + 3;
        td[index].innerHTML = data[i].projectile_speed; index = index + 3;
        td[index].innerHTML = data[i].base_str; index = index + 3;
        td[index].innerHTML = data[i].base_agi; index = index + 3;
        td[index].innerHTML = data[i].base_int; index = index + 3;
        td[index].innerHTML = data[i].str_gain; index = index + 3;
        td[index].innerHTML = data[i].agi_gain; index = index + 3;
        td[index].innerHTML = data[i].int_gain; index = index + 3;
        td[index].innerHTML = data[i].attack_rate; index = index + 3;
        td[index].innerHTML = data[i].base_health;; index = index + 3;
        td[index].innerHTML = data[i].base_health_regen; 
        }
      }  

      for (let a = 0; a < td.length; a=a+3){
        if(td[a].innerText > td[a+2].innerText){
          td[a].style.textDecoration = "underline";
          td[a].style.fontSize = "18px";
          td[a].style.textShadow = "0 0 10px white";
        } else 
        if(td[a].innerText < td[a+2].innerText){
          td[a+2].style.textDecoration = "underline";
          td[a+2].style.fontSize = "18px";
          td[a+2].style.textShadow = "0 0 10px white";
        }
        else 
        if(td[a].innerText == td[a+2].innerText){
          td[a+1].style.textDecoration = "underline";
          td[a+1].style.textShadow = "0 0 10px white";
        }
      }  
      
     });
  
    }
  