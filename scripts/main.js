// Scripting For Buy Now Page

let theForm = document.forms["Form"];

let Company_Prices = new Array();
Company_Prices["Eco-ProductsSL"]=0;
Company_Prices["EcoWare"]=0;
Company_Prices["Trickledown"]=0;
Company_Prices["Backtoearth"]=0;


// Returning Price Value
function getcompanyprice() {

    let Companyprice = 0;
    let theForm = document.forms["Form"];
    let selectitem = theForm.elements["SelectedCompanies"];

    for(let i = 0; i < selectitem.length; i++)
    {
        if(selectitem[i].checked)
        {
            Companyprice = Company_Prices[selectitem[i].value];
            break;
        }
    }
    return Companyprice;

}

//Array for Extras
let eco_extras= new Array();
eco_extras["None"]=0;
eco_extras["Packaging"]=500;
eco_extras["Card"]=1000;
eco_extras["Decos"]=1500;

// Returning Extras Value
function getExtrasPrice() {

    let ExtrasPrice=0;
    let theForm = document.forms["Form"];
    let selectedExtras = theForm.elements["Extras"];

    ExtrasPrice = eco_extras[selectedExtras.value];

    return ExtrasPrice;
}


let eco_sizes = new Array();
eco_sizes["Small"]=0;
eco_sizes["Medium"]=2500;
eco_sizes["Large"]=5000;

function getecosize(){

    let ecosize = 0;
    let theForm = document.forms["Form"];
    let Sizes = theForm.elements["Sizes"];
    
    for(let i = 0; i < Sizes.length; i++)
    {
        if(Sizes[i].checked)
        {
            ecosize = eco_sizes[Sizes[i].value];
            break;
        }
    }
    return ecosize;
}

//Array for Packages
let eco_products= new Array();
eco_products["None"] = 800;
eco_products["Bags"]=1000;
eco_products["Plates"]=2000;
eco_products["Mugs"]=2500;


// Returning Packages Value
function getecoproducts() {

    let ecoproduct = 0;
    let theForm = document.forms["Form"];
    let Product = theForm.elements["Product"];
    
    ecoproduct = eco_products[Product.value];

    return ecoproduct;
}

// Scripting for Calculating Final Total Price


function getTotalPrice(){

    let Price = getcompanyprice();
    let ecoextraprice = getecosize() + getecoproducts() + getExtrasPrice();

    let EcoTotalPrice = Price + ecoextraprice;

    //displaying the result
    document.getElementById('EcoTotalPrice').value ="LKR " + EcoTotalPrice;

}




// ============================== Sripting for Appending Overall Order in the table =======================

let btnAddOrder = document.getElementById('addorder');
btnAddOrder.addEventListener('click', appendOrder);

let company_names = new Array();
company_names["Eco-ProductsSL"]="Eco-ProductsSL";
company_names["EcoWare"]="EcoWare";
company_names["Trickledown"]="Trickledown";
company_names["Backtoearth"]="Backtoearth";



function getcompanyname() {
    let companyname = "";
    let theForm = document.forms["Form"];
    let selectitem = theForm.elements["SelectedCompanies"];

    for(let i = 0; i < selectitem.length; i++)
    {
        if(selectitem[i].checked)
        {
            companyname = company_names[selectitem[i].value];
            break;
        }else{
            companyname = "None"
        }
    }
    return companyname;
}

// Fucntion for Current Order
function cCompanies(){
    let companyname = "";
    let theForm = document.forms["Form"];
    let selectitem = theForm.elements["SelectedCompanies"];

    for(let i = 0; i < selectitem.length; i++)
    {
        if(selectitem[i].checked)
        {
            companyname = company_names[selectitem[i].value];
            break;
        }else{
            companyname = "None"
        }
    }

    document.getElementById('cCompanies').value = companyname;
    return companyname;
}


let extras_name = new Array();
extras_name["None"]="None";
extras_name["Packaging"]="Packaging";
extras_name["Card"]="Greeting Card";
extras_name["Decos"]="Decorations";

function getExtrasName() {

    let ExtrasName="";
    let theForm = document.forms["Form"];
    let selectedExtras = theForm.elements["Extras"];

    ExtrasName = extras_name[selectedExtras.value];

    return ExtrasName;
}

function cExtras(){

    let ExtrasName="";
    let theForm = document.forms["Form"];
    let selectedExtras = theForm.elements["Extras"];

    ExtrasName = extras_name[selectedExtras.value];

    document.getElementById('cExtras').value = ExtrasName;
}

let sizes_name = new Array();
sizes_name["Small"]="Small";
sizes_name["Medium"]="Medium";
sizes_name["Large"]="Large";

function getecosizename() {

    let ecosizename = "";
    let theForm = document.forms["Form"];
    let Sizes = theForm.elements["Sizes"];
    
    for(let i = 0; i < Sizes.length; i++)
    {
        if(Sizes[i].checked)
        {
            ecosizename = sizes_name[Sizes[i].value];
            break;
        }else{
            ecosizename = "None"
        }
    }
    return ecosizename;
}

// Fucntion for Current Order
function cSize(){
    let ecosizename = "";
    let theForm = document.forms["Form"];
    let Sizes = theForm.elements["Sizes"];
    
    for(let i = 0; i < Sizes.length; i++)
    {
        if(Sizes[i].checked)
        {
            ecosizename = sizes_name[Sizes[i].value];
            break;
        }else{
            ecosizename = "None"
        }
    }
    document.getElementById('cSize').value = ecosizename;
}

let products_name = new Array();
products_name["None"] = "None";
products_name["Bags"]="Bags";
products_name["Plates"]="Plates";
products_name["Mugs"]="Mugs";


function getproductname(){

    let productname="";
    let theForm = document.forms["Form"];
    let selectedPackage = theForm.elements["Product"];

    productname = products_name[selectedPackage.value];

    return productname;
}

// Fucntion for Current Order

function cProduct(){
    let productname="";
    let theForm = document.forms["Form"];
    let selectedPackage = theForm.elements["Product"];

    productname = products_name[selectedPackage.value];

    document.getElementById('cProduct').value = productname;

}

function getTotalCost(){

    let Price = getcompanyprice();
    let ecoextraprice = getecosize() + getecoproducts() + getExtrasPrice();

    let EcoTotalPrice = Price + ecoextraprice;

    return EcoTotalPrice;
}


// Appending Current Order to the Overall Order

function appendOrder(){

        let Product = cCompanies();

        if(Product === "None"){
            window.alert("Select Items to Proceed")
        }else{
            let table = document.getElementById('tblOverallOrder');
                  
            let newRow = table.insertRow(table.rows.length/1);
            
            // add cells to the row
            let cel1 = newRow.insertCell(0);
            let cel2 = newRow.insertCell(1);
            let cel3 = newRow.insertCell(2);
            let cel4 = newRow.insertCell(3);
            let cel5 = newRow.insertCell(4);
            let cel6 = newRow.insertCell(5);
        
        
            // Displaying results in the table
            cel1.innerHTML = (table.rows.length - 1); 
            cel2.innerHTML = getcompanyname(); // Brand
            cel3.innerHTML = getecosizename(); // Size 
            cel4.innerHTML = getproductname(); // Product 
            cel5.innerHTML = getExtrasName(); // Extras 
            cel6.innerHTML = getTotalCost()// Total Price
        
            let overallPrice = 0;
        
                    
            for(let i = 1; i < table.rows.length; i++)
            {
                overallPrice = overallPrice + parseInt(table.rows[i].cells[5].innerHTML);
            }
        
            document.getElementById('cCompanies').value ="";
            document.getElementById('cSize').value ="";
            document.getElementById('cProduct').value ="";    
            document.getElementById('cExtras').value ="";    
            document.getElementById('EcoTotalPrice').value ="LKR " + 0;    
            document.getElementById('overallPrice').value ="LKR " + overallPrice;
        }

}

// Scripting for Favorites 

let btnAddFav = document.getElementById("addFav");

btnAddFav.addEventListener('click', addFavOrder);

// Storing Favourites Values in Local Storage 
function addFavOrder() {

    let Product = cCompanies();

    if(Product === "None"){
        window.alert("Select Items to Proceed")
    }else{
    let Favourites = [];
    if("Favourites" in localStorage) {
      TeaParadise = JSON.parse(localStorage.getItem('Favourites'));
    }
    
	let favBrand = getcompanyname();
	let favSize = getecosizename();
    let favproduct = getproductname();
    let favExtra =  getExtrasName();
    let favPrice = getTotalCost();

	Favourites.push(favBrand, favSize, favproduct, favExtra, favPrice);
    localStorage.setItem('Favourites', JSON.stringify(Favourites));
    
    document.getElementById('fCompanies').value = Favourites[0];
    document.getElementById('fSize').value = Favourites[1];
    document.getElementById('fProduct').value = Favourites[2];
    document.getElementById('fExtras').value = Favourites[3];
    document.getElementById('fTotal').value = Favourites[4];

    document.getElementById('cCompanies').value ="";
    document.getElementById('cSize').value ="";
    document.getElementById('cProduct').value ="";    
    document.getElementById('cExtras').value ="";    
    document.getElementById('EcoTotalPrice').value ="LKR " + 0; 
    }   
}

// Adding Favourites to Overall Order
let btnOrderFav = document.getElementById('orderFav');

btnOrderFav.addEventListener('click', orderFav);

function orderFav() {
    let Favourites = [];
    if("Favourites" in localStorage) {
        Favourites = JSON.parse(localStorage.getItem('Favourites'));
    }

    let table = document.getElementById("tblOverallOrder");
                  
    let newRow = table.insertRow(table.rows.length/1);
    
    // add cells to the row
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);
    let cel5 = newRow.insertCell(4);
    let cel6 = newRow.insertCell(5);


    // Displaying results in the table
    cel1.innerHTML = (table.rows.length - 1);
    cel2.innerHTML = Favourites[0]; // Brand
    cel3.innerHTML = Favourites[1]; // Size
    cel4.innerHTML = Favourites[2]; // Product
    cel5.innerHTML = Favourites[3]; // Extras
    cel6.innerHTML = Favourites[4]; // Total Price

    let overallPrice = 0;
            
    for(let i = 1; i < table.rows.length; i++)
    {
        overallPrice = overallPrice + parseInt(table.rows[i].cells[5].innerHTML);
    }
    document.getElementById('overallPrice').value ="LKR " + overallPrice;
}

// Adds Favorites to the Display

let Favourites = [];
if("Favourites" in localStorage) {
    Favourites = JSON.parse(localStorage.getItem('Favourites'));
}

document.getElementById('fCompanies').value = Favourites[0];
document.getElementById('fSize').value = Favourites[1];
document.getElementById('fProduct').value = Favourites[2];
document.getElementById('fExtras').value = Favourites[3];
document.getElementById('fTotal').value = Favourites[4];

// Checking Loyalty 

let btnLoyalty = document.getElementById('checkLoyalty');

btnLoyalty.addEventListener('click', checkLoyalty);


function checkLoyalty() {


    let table1 = document.getElementById("tblOverallOrder");
    // "-1" is to avoid the Header count of the table 
    let points = (table1.rows.length - 1);

    let final = 0;
    
   if (points > 4) {
       final = (points * 20);

       window.alert("You have Earned " + final +" Loyalty Points");
   } else{
       window.alert("You have not Earned Enough Loyalty Points");
   }
   let Loyalty = [];
   if("Loyalty" in localStorage) {
       Loyalty = JSON.parse(localStorage.getItem('Loyalty'));
   }
   
   Loyalty.push(final);
   localStorage.setItem('Loyalty', JSON.stringify(Loyalty));
}

// Place Order

let btnPlaceOrder = document.getElementById('placeOrder');

btnPlaceOrder.addEventListener('click', placeOrder);

function placeOrder(){

    let table2 = document.getElementById("tblOverallOrder");
    let orderNo = (table2.rows.length - 1);
    
    if(orderNo >= 1){
        window.alert("Thanks for Purchasing with Us");
        document.getElementById('overallPrice').value ="LKR " + 0;
        for(let i = 1; i < table2.rows.length; i++){
            table2.rows[i].innerHTML = "";
        }
    }else{
        window.alert("No Final Order to Proceed");
    }

}