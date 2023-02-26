$(document).ready(function () {

    $.getJSON("text.json", 
            function (data) {
        var d = '';
        

        $.each(data, function (key, value) {

            $('.orderid').html(data.order_id)
            $('.campsite').html(data.camp_site)
            $('.accomodation1').html(data.accomodation1+<br/>+data.accomodation2)
            $('.arriving').html(data.arriving_date)            
            $('.delivery').html(data.delivery_date)            

            $('.totalDays').html(data.total_days)
            $('.totalPersons').html(data.total_persons)
            $('.travelCompany1').html(data.travel_company1+<br/>+data.travel_company2)

            // let a=document.getElementById("details");
            // let p=a.getElementsByTagName("td");
            // console.log(p);
            // for(let i=1;i<p.length;i=i+2){
            //     p[i].innerHTML=
            // }
 
        });
          
       
    });
});

