function wynik()
{
	objimie = document.getElementById("imie");
	objnazwisko = document.getElementById("nazwisko");
	objmiasto = document.getElementById("miasto");
	objulice = document.getElementById("ulice");
	objnrdomu = document.getElementById("numerdomu");
	objnrm = document.getElementById("numermieszkania");
	objdateur = document.getElementById("dateurodzenia");
	objnrtel = document.getElementById("numertelefonu");
	objemail = document.getElementById("email");

	var wyrazenie1 = /^[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}$/g;
	var wyrazenie2 = /^([A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}|[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}[\-]{1}[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30})$/g;
	var wyrazenie3 = /^([A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}|[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}[\-]{1}[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30})$/g;
	var wyrazenie4 = /^([A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}|[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}[\-]{1}[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}|[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}[\s]{1}[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}[\-]{1}[A-ZĄĘŻŹŁŃŚÓ]{1}[a-ząęśńłóźż]{1,30}|[\d]{1,3}[\s]?[A-ZĄĘŻŹŁŃŚÓ]?[a-ząęśńłóźż]{1,30})$/g;
	var wyrazenie5 = /^(([\d]{1,4})|[\d]{1,4}[\s]{0,1}[A-Za-z]{1})$/g;
	var wyrazenie6 = /^(([\d]{1,4})|[\d]{1,4}[\s]{0,1}[A-Za-z]{1}|())$/g;
	var wyrazenie7 = /^(([0-2]{0,1}[0-9]{1})|([3]{1}[0-1]{1}))[\-]{1}(([0]{1}[0-9]{1})|([1]{1}[1-2]{1}))[\-]{1}(([1]{1}[9]{1}[0-9]{2})|([2]{1}[0]{1}[0-1]{1}[0-9]{1}))$/
	var wyrazenie8 = /^([\d]{9})$/g;
	var wyrazenie9 = /^[\w]{0,1000}$/g;
	var wyrazenie10 = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

	var zgodnosc = true;

	if (wyrazenie1.test(objimie.value)) 
	{
		document.getElementById("imie").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("imie").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie2.test(objnazwisko.value))
	{
		document.getElementById("nazwisko").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("nazwisko").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie3.test(objmiasto.value))
	{
		document.getElementById("miasto").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("miasto").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie4.test(objulice.value))
	{
		document.getElementById("ulice").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("ulice").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie5.test(objnrdomu.value))
	{
		document.getElementById("numerdomu").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("numerdomu").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie6.test(objnrm.value))
	{
		document.getElementById("numermieszkania").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("numermieszkania").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie7.test(objdateur.value))
	{
		document.getElementById("dateurodzenia").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("dateurodzenia").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie8.test(objnrtel.value))
	{
		document.getElementById("numertelefonu").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("numertelefonu").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (wyrazenie10.test(objemail.value))
	{
		document.getElementById("email").style.backgroundColor="white";
	}
	else
	{
		document.getElementById("email").style.backgroundColor="#ff4d4d";
		zgodnosc = false;
	}
	if (zgodnosc==true)
	{
		document.getElementById("exception").innerHTML=" ";
		document.getElementById("formularz").submit();
	} 
	else
	{
		document.getElementById("exception").innerHTML="Formularz zawiera błedy lub puste pola!";
	}

}