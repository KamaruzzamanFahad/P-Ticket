const allseat = document.querySelectorAll(".seats");
let  count = 0;

const totalseat = document.getElementById('totalseat');
const totalprices = document.getElementById('totalprice');
const grandTotals = document.getElementById('grandTotal');
const seatcontiner = document.getElementById('seatlist');
const howmanyseats = document.getElementById('howmanyseat');
const copunfilds = document.getElementById('copunfild');
const copundiv = document.getElementById('copundiv');
const discounts = document.getElementById('discount');
const discountvalues = document.getElementById('discountvalue');
const PassengerName = document.getElementById('PassengerName');
const PhoneNumber = document.getElementById('PhoneNumber');
const nextbutton = document.getElementById('nextbutton');
const applybtn = document.getElementById('apply');

for(let i =0; i< allseat.length; i++){

    const selectseat = allseat[i];

    selectseat.addEventListener('click', function(){
        const element =document.getElementById(allseat[i].innerText)
        const selected = element.className;
        const isselect = selected.includes('bg-green')
        if(isselect != true){
            count++;
            if(count <= 4){
                element.classList.add('bg-green');
                totalseat.innerText = parseFloat(totalseat.innerText)-1;
                totalprices.innerText = parseFloat(totalprices.innerText)+550;
                grandTotal.innerText = totalprices.innerText;
                howmanyseats.innerText = count;


               const newdiv = document.createElement("div");
               seatcontiner.appendChild(newdiv);

               newdiv.setAttribute("class", "flex justify-between items-center")

               const p = document.createElement("p");
               const p2 = document.createElement("p");
               const p3 = document.createElement("p");

               p.innerText = allseat[i].innerText;
               p2.innerText = 'Economoy';
               p3.innerText = '550';

               newdiv.appendChild(p);
               newdiv.appendChild(p2);
               newdiv.appendChild(p3);

            }
            
        }
        
        if(count >=4){
            applybtn.disabled = false;
            applybtn.classList.remove('bg-[#dddddd]');
            applybtn.classList.add('bg-[#1cd100]');
        }

        if(count >=1 && PassengerName.value.length > 2 && PhoneNumber.value.length >2 ){
            nextbutton.disabled = false;
            nextbutton.classList.remove('bg-[#dddddd]');
            nextbutton.classList.add('bg-[#1cd100]');
        }
    })
}

document.addEventListener("keyup", function(){
    if(count >=1 && PassengerName.value.length > 2 && PhoneNumber.value.length >2 ){
        nextbutton.disabled = false;
        nextbutton.classList.remove('bg-[#dddddd]');
        nextbutton.classList.add('bg-[#1cd100]');
        
    }

    if(count >=4){
        applybtn.disabled = false;
        applybtn.classList.remove('bg-[#dddddd]');
        applybtn.classList.add('bg-[#1cd100]');
    }

    
})


let discount;
document.getElementById("apply").addEventListener('click',function(){
    const copunfildsvalue = copunfilds.value;
    if(count == 4){

        if(copunfildsvalue == "NEW15"){
             discount = totalprices.innerText*0.15;
        }else if(copunfildsvalue == 'Couple 20'){
             discount = totalprices.innerText*0.2;
        }
        else{
            alert("Wrong Copun Code. Please Use: NEW15 or Couple 20")
        }
        
        if(copunfildsvalue == "NEW15" || copunfildsvalue == 'Couple 20'){
        discountvalues.innerText = discount;
        grandTotal.innerText = grandTotal.innerText - discount;
        copundiv.classList.add('hidden');
        discounts.classList.remove('hidden');
        }        
    }
})
