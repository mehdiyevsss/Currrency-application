const api_key = "ae3b69f958cf805c1be4612a";
const url = "https://v6.exchangerate-api.com/v6/"+api_key;

//elements
const currency_one=document.getElementById("currency_one");
const currency_two=document.getElementById("currency_two");

const list_one=document.getElementById("list_one");
const list_two=document.getElementById("list_two");

const amount=document.getElementById("amount");
const calculate=document.getElementById("calculate");
const result=document.querySelector(".result");


fetch(url+"/codes")
    .then(res=>res.json())
    .then(data=>{
        let options;

        const items=data.supported_codes;
        for (let item of items){
            options+=  `<option value=${item[0]}>${item[1]}</option>`;
        }
        list_one.innerHTML=options;
        list_two.innerHTML=options;
    });

calculate.addEventListener("click",function(){
    const currency1=currency_one.value; 
    const currency2=currency_two.value;
    const amountt=amount.value;
    
    fetch(url + "/latest/" + currency1)
        .then(res=>res.json())
        .then(data=>{
            const calculationResult = (data.conversion_rates[currency2] * amountt).toFixed(1);
            result.innerHTML = `
                <div class="card border-primary">
                    <div class="card-body text-center" style="font-size:30px;">
                        ${amountt} ${currency1} = ${calculationResult} ${currency2}
                    </div>
                </div>
                `

          
        });
});











