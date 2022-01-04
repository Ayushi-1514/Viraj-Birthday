const EventTarget= document.getElementById("clickButton");

EventTarget.addEventListener("click", function() {

    // Do something cool
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

    var image1 = document.querySelectorAll("img")[15];

    image1.setAttribute("src", randomImageSource);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[16].setAttribute("src", randomImageSource2);
    var x= (randomNumber1+randomNumber2)*100;

    setTimeout(ans,200);
    function ans(){
      alert("Congratulations!!! You have won a gift voucher of worth "+ x+"rs . It will be reflected in your bank account shortly!");
      document.querySelector("#clickButton").innerHTML = "Bass or kitna gift chahiye?";
    }


}, {once : true});

const array=[];
array[0]="Apni first anniversary... Kya mast bike se beach gaye or cake kaate...or fir raat ko candle light dinner🥰"
array[1]="Mera birthday...vese to wo mere liye happy memory hai zadaa...par meli khushi me teli khushi...or kya hi bolu apne bday ke baare me...mere liye kbhi koi itna kuch kiya hi nhiii"
array[2]="Iit bombay...maza aaya tha kaafi buu... international night...day events...saath me hostels me khaana...bahoot accha experience tha"
array[3]="Apni daman trip...kitna maza aaya tha nahane me na? Fir jo waha chimken khae wo bhi kitna mast"
array[4]="Dumas trip...yaad hai jab baarish ke waqt gaye the? Kitna mast bheege the yaar...teleko choot bhi lag gya tha perr par🤭🤭🤭 ese or bhi bhigne jana hai buu"
array[5]="Vapas Dumas trip...jab subah subah uthke gaye the...6baje...or lautte waqt movie bhi dekhi thi ek🤭...movie itni acchi nhi thi vese"
array[6]="Suvalli trip...2 bandar ke saath gaye the🤭 par bike se gaye the...maza aaya tha usme bhii"
array[7]="First year wala holii yaad hainaa.... dhaniya bhi aai thi...mast staff club ke paas bhig bhig ke...kichad bhi daala tha tu mujhpar"
array[8]="Wo yaad hai jo shiv ji ke mandir gaye the jaha swimming pool tha? 😁 Kitna mast nahae the...mandir bhi kitna mast🥰"
array[9]="Garba night...bahar jo gaye the sabke saath first year me...tu to naacha hi nhi...par mujhe or sakshi ko chunni dilwa ke bhej diya naachne😏"
array[10]="Garba night 2.0...clg ka...mast tha wo bhi...yaad hai mujhe leke gya tha tu ladko ke grp me dj ke waqt...sab ladka log naach rhe the mere upar hii😏"
array[11]="Freshers party🥰...ye kese bhool skte hai? Jab me karwachauth ka vrat rakhi thi tere liye...or tu ring laaya tha mere liye👫🏻"
array[12]="Apna first meeting...vr mall...or2 bandaro ke saath...lekin mast tha wo bhi😁 itna shaaant ab kyu nhi rehta😏"
array[13]="Library...apna harr ek time wala kitna mast hota tha...vese to sari hi jgah happy memories hai😝 sab hi jagah happy memory hai jab tak hum saath ho...fir bhii!"
array[14]="Lawns par baithna...series dekhna...khana order krnaaa🥰 or wo piche wala garden bhi...yaad haina? 😁 Waha ghaas Katt jae to chalte hai dobara";

const happy= document.querySelector(".happy");
const sad= document.querySelector(".sad");
const funny= document.querySelector(".funny");
var i=0;

happy.addEventListener("click", function(){
  if(i<15){
document.querySelector(".container").innerHTML =array[i];
i++;
}
else{
  document.querySelector(".container").innerHTML ="Khatam ab...or kitni happy memories chahiye?";

}

});
sad.addEventListener("click", function(){
document.querySelector(".container").innerHTML ="Bday ke din sad memory chahiye? maarungi naa... chappal kaha hai mera👡👡 Happy memory dekh jaake!";

});
funny.addEventListener("click", function(){
document.querySelector(".container").innerHTML ="Funny? Tu funny hai jo funny memory hogii? koi na...ab click kar hi liya hai to ek funny moment yaad kar hi le..jisko yaad krke humesha hassta rehta hai tu... jab wo chupa chupi khel rhe the staff club me or tu pedd par chup gya tha😏 or me 10hr tak yaha waha ghumtii rahii😪";

});
