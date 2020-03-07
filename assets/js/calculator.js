function nitroprofil() {
var Nii , ECii , KMGii , KCAii , NCAii , NH4NO3ii , Psoi , Cloi , ECv , ECn , KMGv , KMGn , KCAv , KCAn , NH4NO3v , NH4NO3n , Pv , Pn , Clv , Cln , Nkk , NO3kk , NH4kk , Pkk , Kkk , Cakk , Mgkk , Skk, Clkk , Mgaa , Smaa;
Nii = (Number(document.getElementById('NO3i').value) + Number(document.getElementById('NH4i').value)) ;
(document.getElementById('Ni').innerHTML) = Nii ;
ECii = (6.78246839012758*(10**(-3))*Number(document.getElementById('NH4i').value)+4.74075552672289*(10**(-3))*Number(document.getElementById('Cai').value)+7.81732153877802*(10**(-3))*Number(document.getElementById('Mgi').value)+2.42977316149295*(10**(-3))*Number(document.getElementById('Ki').value)+0.19) ;
(document.getElementById('ECi').innerHTML) = (ECii.toFixed(2)) ;
KMGii = (Number(document.getElementById('Ki').value) / Number(document.getElementById('Mgi').value)) ;
(document.getElementById('KMGi').innerHTML) = (KMGii.toFixed(2)) ;
KCAii = (Number(document.getElementById('Ki').value) / Number(document.getElementById('Cai').value)) ;
(document.getElementById('KCAi').innerHTML) = (KCAii.toFixed(2)) ;
NCAii = (Nii / Number(document.getElementById('Cai').value)) ;
(document.getElementById('NCAi').innerHTML) = (NCAii.toFixed(2)) ;
NH4NO3ii = (Number(document.getElementById('NH4i').value) / Number(document.getElementById('NO3i').value) * 100) ;
(document.getElementById('NH4NO3i').innerHTML) = (NH4NO3ii.toFixed(2)) ;
(document.getElementById('Pso').innerHTML) = (Number(document.getElementById('Pi').value)) ;
(document.getElementById('Clo').innerHTML) = (Number(document.getElementById('Cl').value)) ;
ECv = (Number(document.getElementById('NCAK').value) * Number(document.getElementById('KMGK').value))/(Number(document.getElementById('KCAK').value) + Number(document.getElementById('KMGK').value) * Number(document.getElementById('KCAK').value) + Number(document.getElementById('KMGK').value) + Number(document.getElementById('KMGK').value) * Number(document.getElementById('NCAK').value)) ;
KMGv = ECv/(1+(Number(document.getElementById('NH4NO3K').value)/100)) ;
KCAv = ECv*Number((document.getElementById('NH4NO3K').value)/100)/(1+Number((document.getElementById('NH4NO3K').value)/100)) ;
NH4NO3v = (Number(document.getElementById('KCAK').value)*Number(document.getElementById('KMGK').value))/(Number(document.getElementById('KCAK').value)+Number(document.getElementById('KMGK').value)*Number(document.getElementById('KCAK').value)+Number(document.getElementById('KMGK').value)+Number(document.getElementById('KMGK').value)*Number(document.getElementById('NCAK').value)) ;
Pv = Number(document.getElementById('KMGK').value)/(Number(document.getElementById('KCAK').value)+Number(document.getElementById('KMGK').value)*Number(document.getElementById('KCAK').value)+Number(document.getElementById('KMGK').value)+Number(document.getElementById('KMGK').value)*Number(document.getElementById('NCAK').value)) ;
Clv = Number(document.getElementById('KCAK').value)/(Number(document.getElementById('KCAK').value)+Number(document.getElementById('KMGK').value)*Number(document.getElementById('KCAK').value)+Number(document.getElementById('KMGK').value)+Number(document.getElementById('KMGK').value)*Number(document.getElementById('NCAK').value)) ;
ECn = (10**20)*((-19)+100*Number(document.getElementById('ECK').value))/(67824683901275800000*KCAv+47407555267228900000*Pv+78173215387780200000*Clv+24297731614929500000*NH4NO3v) ;
NO3kk = KMGv * ECn ;
(document.getElementById('NO3k').innerHTML) = NO3kk.toFixed(0) ;
NH4kk = KCAv * ECn ;
(document.getElementById('NH4k').innerHTML) = NH4kk.toFixed(0) ;
(document.getElementById('Pk').innerHTML) = Number(document.getElementById('PsoK').value).toFixed(0) ;
Kkk = NH4NO3v * ECn ;
(document.getElementById('Kk').innerHTML) = Kkk.toFixed(0) ;
Cakk = Pv * ECn ;
(document.getElementById('Cak').innerHTML) = Cakk.toFixed(0) ;
Mgkk = Clv * ECn ;
(document.getElementById('Mgk').innerHTML) = Mgkk.toFixed(0) ;
(document.getElementById('Clk').innerHTML) = Number(document.getElementById('CloK').value).toFixed(0) ;
Nkk = NO3kk + NH4kk ;
(document.getElementById('Nk').innerHTML) = Nkk.toFixed(0) ;

Ppm1r = (Mgkk/Number(document.getElementById('Mga').value)*100) ;
Gl1r = (Ppm1r/1000) ;
Gramm1r = (Gl1r*Number(document.getElementById('Volu').value)) ;
Ml1r = ((Gramm1r/Number(document.getElementById('Konc1').value))*1000) ;
Rash1r = ((2*Number(document.getElementById('Mga').value)*100/24.305)-(2*Number(document.getElementById('Sma').value)*100/32.065))/(2*Number(document.getElementById('Mga').value)*100/24.305) ;
(document.getElementById('Ppm1').innerHTML) = Ppm1r.toFixed(2) ;
(document.getElementById('Gl1').innerHTML) = Gl1r.toFixed(3) ;
(document.getElementById('Gramm1').innerHTML) = Gramm1r.toFixed(2) ;
(document.getElementById('Ml1').innerHTML) = Ml1r.toFixed(1) ;
(document.getElementById('Rash1').innerHTML) = Rash1r.toFixed(0) ;

Ppm2r = (Number(document.getElementById('Kna').value)*Number(document.getElementById('Pka').value)*Number(document.getElementById('NO3nh4a').value)*NH4kk*Number(document.getElementById('Caa').value)-Number(document.getElementById('Kna').value)*Number(document.getElementById('Pka').value)*Number(document.getElementById('NO3nh4a').value)*Cakk*Number(document.getElementById('NH4caa').value)-Number(document.getElementById('Kna').value)*Number(document.getElementById('Pka').value)*NO3kk*Number(document.getElementById('Caa').value)*Number(document.getElementById('NH4a').value)+Number(document.getElementById('Kna').value)*Number(document.getElementById('Pka').value)*Cakk*Number(document.getElementById('NO3caa').value)*Number(document.getElementById('NH4a').value)+Kkk*Number(document.getElementById('Pka').value)*Number(document.getElementById('NO3ka').value)*Number(document.getElementById('Caa').value)*Number(document.getElementById('NH4a').value)-Number(document.getElementById('PsoK').value)*Number(document.getElementById('Kpa').value)*Number(document.getElementById('NO3ka').value)*Number(document.getElementById('Caa').value)*Number(document.getElementById('NH4a').value))/(Number(document.getElementById('Ka').value)*Number(document.getElementById('Pka').value)*Number(document.getElementById('NO3ka').value)*Number(document.getElementById('Caa').value)*Number(document.getElementById('NH4a').value))*100 ;
Gl2r = (Ppm2r/1000) ;
Gramm2r = (Gl2r*Number(document.getElementById('Volu').value)) ;
Ml2r = ((Gramm2r/Number(document.getElementById('Konc2').value))*1000) ;
Rash2r = ((Number(document.getElementById('Ka').value)*100/39.0983)-(2*Number(document.getElementById('Ska').value)*100/32.065))/(Number(document.getElementById('Ka').value)*100/39.0983) ;
(document.getElementById('Ppm2').innerHTML) = Ppm2r.toFixed(2) ;
(document.getElementById('Gl2').innerHTML) = Gl2r.toFixed(3) ;
(document.getElementById('Gramm2').innerHTML) = Gramm2r.toFixed(2) ;
(document.getElementById('Ml2').innerHTML) = Ml2r.toFixed(1) ;
(document.getElementById('Rash2').innerHTML) = Rash2r.toFixed(0) ;

Ppm3r = -(((Number(document.getElementById('NO3nh4a').value)*100)*NH4kk*(Number(document.getElementById('Caa').value)*100))-((Number(document.getElementById('NO3nh4a').value)*100)*Cakk*(Number(document.getElementById('NH4caa').value)*100))-(NO3kk*(Number(document.getElementById('Caa').value)*100)*(Number(document.getElementById('NH4a').value)*100))+(Cakk*(Number(document.getElementById('NO3caa').value)*100)*(Number(document.getElementById('NH4a').value)*100)))/((Number(document.getElementById('NO3ka').value))*(Number(document.getElementById('Caa').value))*(Number(document.getElementById('NH4a').value)))/100 ;
Gl3r = (Ppm3r/1000) ;
Gramm3r = (Gl3r*Number(document.getElementById('Volu').value)) ;
Ml3r = ((Gramm3r/Number(document.getElementById('Konc3').value))*1000) ;
Rash3r = ((Number(document.getElementById('Kna').value)/39.0983)-(Number(document.getElementById('NO3ka').value)/14.0067))/((Number(document.getElementById('Kna').value)/39.0983)) ;
(document.getElementById('Ppm3').innerHTML) = Ppm3r.toFixed(2) ;
(document.getElementById('Gl3').innerHTML) = Gl3r.toFixed(3) ;
(document.getElementById('Gramm3').innerHTML) = Gramm3r.toFixed(2) ;
(document.getElementById('Ml3').innerHTML) = Ml3r.toFixed(1) ;
(document.getElementById('Rash3').innerHTML) = Rash3r.toFixed(0) ;

Ppm4r = (Number(document.getElementById('PsoK').value)/Number(document.getElementById('Pka').value)*100) ;
Gl4r = (Ppm4r/1000) ;
Gramm4r = (Gl4r*Number(document.getElementById('Volu').value)) ;
Ml4r = ((Gramm4r/Number(document.getElementById('Konc4').value))*1000) ;
Rash4r = ((Number(document.getElementById('Kpa').value)*100/39.0983)-(Number(document.getElementById('Pka').value)*100/30.973762))/((Number(document.getElementById('Kpa').value)*100/39.0983)) ;
(document.getElementById('Ppm4').innerHTML) = Ppm4r.toFixed(2) ;
(document.getElementById('Gl4').innerHTML) = Gl4r.toFixed(3) ;
(document.getElementById('Gramm4').innerHTML) = Gramm4r.toFixed(2) ;
(document.getElementById('Ml4').innerHTML) = Ml4r.toFixed(1) ;
(document.getElementById('Rash4').innerHTML) = Rash4r.toFixed(0) ;

Ppm5r = (Cakk/Number(document.getElementById('Caa').value)*100) ;
Gl5r = (Ppm5r/1000) ;
Gramm5r = (Gl5r*Number(document.getElementById('Volu').value)) ;
Ml5r = ((Gramm5r/Number(document.getElementById('Konc5').value))*1000) ;
Rash5r = ((2*(Number(document.getElementById('Caa').value)*100)/40,078+(Number(document.getElementById('NH4caa').value)*100)/14,0067)-((Number(document.getElementById('NO3caa').value)*100)/14,0067))/(2*(Number(document.getElementById('Caa').value)*100)/40,078+(Number(document.getElementById('NH4caa').value)*100)/14,0067) ;
(document.getElementById('Ppm5').innerHTML) = Ppm5r.toFixed(2) ;
(document.getElementById('Gl5').innerHTML) = Gl5r.toFixed(3) ;
(document.getElementById('Gramm5').innerHTML) = Gramm5r.toFixed(2) ;
(document.getElementById('Ml5').innerHTML) = Ml5r.toFixed(1) ;
(document.getElementById('Rash5').innerHTML) = Rash5r.toFixed(0) ;

Ppm6r = ((NH4kk*(Number(document.getElementById('Caa').value)*100))-(Cakk*(Number(document.getElementById('NH4caa').value))))/((Number(document.getElementById('NH4a').value))*(Number(document.getElementById('Caa').value))) ;
Gl6r = (Ppm6r/1000) ;
Gramm6r = (Gl6r*Number(document.getElementById('Volu').value)) ;
Ml6r = ((Gramm6r/Number(document.getElementById('Konc6').value))*1000) ;
Rash6r = (((Number(document.getElementById('NH4a').value)*100)/14,0067)-((Number(document.getElementById('NO3nh4a').value)*100)/14,0067))/((Number(document.getElementById('NH4a').value)*100)/14,0067) ;
(document.getElementById('Ppm6').innerHTML) = Ppm6r.toFixed(2) ;
(document.getElementById('Gl6').innerHTML) = Gl6r.toFixed(3) ;
(document.getElementById('Gramm6').innerHTML) = Gramm6r.toFixed(2) ;
(document.getElementById('Ml6').innerHTML) = Ml6r.toFixed(1) ;
(document.getElementById('Rash6').innerHTML) = Rash6r.toFixed(0) ;

Skk = Ppm1r*Number(document.getElementById('Sma').value)/100+Ppm2r*Number(document.getElementById('Ska').value)/100 ;
(document.getElementById('Sk').innerHTML) = Skk.toFixed(0) ;

Gramlitr1r = Number(document.getElementById('Mgl1').value)*100/Number(document.getElementById('Dol1').value)/1000 ;
Ppmm1r = Number(document.getElementById('Mgl1').value)*100/Number(document.getElementById('Dol1').value) ;
Grams1r = Gramlitr1r*Number(document.getElementById('Volu').value) ;
Milli1r = Grams1r/Number(document.getElementById('Konc7').value)*1000 ;
(document.getElementById('Gramlitr1').innerHTML) = Gramlitr1r.toFixed(5) ;
(document.getElementById('Ppmm1').innerHTML) = Ppmm1r.toFixed(2) ;
(document.getElementById('Grams1').innerHTML) = Grams1r.toFixed(3) ;
(document.getElementById('Milli1').innerHTML) = Milli1r.toFixed(1) ;

Gramlitr2r = Number(document.getElementById('Mgl2').value)*100/Number(document.getElementById('Dol2').value)/1000 ;
Ppmm2r = Number(document.getElementById('Mgl2').value)*100/Number(document.getElementById('Dol2').value) ;
Grams2r = Gramlitr2r*Number(document.getElementById('Volu').value) ;
Milli2r = Grams2r/Number(document.getElementById('Konc8').value)*1000 ;
(document.getElementById('Gramlitr2').innerHTML) = Gramlitr2r.toFixed(5) ;
(document.getElementById('Ppmm2').innerHTML) = Ppmm2r.toFixed(2) ;
(document.getElementById('Grams2').innerHTML) = Grams2r.toFixed(3) ;
(document.getElementById('Milli2').innerHTML) = Milli2r.toFixed(1) ;

Gramlitr3r = Number(document.getElementById('Mgl3').value)*100/Number(document.getElementById('Dol3').value)/1000 ;
Ppmm3r = Number(document.getElementById('Mgl3').value)*100/Number(document.getElementById('Dol3').value) ;
Grams3r = Gramlitr3r*Number(document.getElementById('Volu').value) ;
Milli3r = Grams3r/Number(document.getElementById('Konc9').value)*1000 ;
(document.getElementById('Gramlitr3').innerHTML) = Gramlitr3r.toFixed(5) ;
(document.getElementById('Ppmm3').innerHTML) = Ppmm3r.toFixed(2) ;
(document.getElementById('Grams3').innerHTML) = Grams3r.toFixed(3) ;
(document.getElementById('Milli3').innerHTML) = Milli3r.toFixed(1) ;

Gramlitr4r = Number(document.getElementById('Mgl4').value)*100/Number(document.getElementById('Dol4').value)/1000 ;
Ppmm4r = Number(document.getElementById('Mgl4').value)*100/Number(document.getElementById('Dol4').value) ;
Grams4r = Gramlitr4r*Number(document.getElementById('Volu').value) ;
Milli4r = Grams4r/Number(document.getElementById('Konc10').value)*1000 ;
(document.getElementById('Gramlitr4').innerHTML) = Gramlitr4r.toFixed(5) ;
(document.getElementById('Ppmm4').innerHTML) = Ppmm4r.toFixed(2) ;
(document.getElementById('Grams4').innerHTML) = Grams4r.toFixed(3) ;
(document.getElementById('Milli4').innerHTML) = Milli4r.toFixed(1) ;

Gramlitr5r = Number(document.getElementById('Mgl5').value)*100/Number(document.getElementById('Dol5').value)/1000 ;
Ppmm5r = Number(document.getElementById('Mgl5').value)*100/Number(document.getElementById('Dol5').value) ;
Grams5r = Gramlitr5r*Number(document.getElementById('Volu').value) ;
Milli5r = Grams5r/Number(document.getElementById('Konc11').value)*1000 ;
(document.getElementById('Gramlitr5').innerHTML) = Gramlitr5r.toFixed(5) ;
(document.getElementById('Ppmm5').innerHTML) = Ppmm5r.toFixed(2) ;
(document.getElementById('Grams5').innerHTML) = Grams5r.toFixed(3) ;
(document.getElementById('Milli5').innerHTML) = Milli5r.toFixed(1) ;

Gramlitr6r = Number(document.getElementById('Mgl6').value)*100/Number(document.getElementById('Dol6').value)/1000 ;
Ppmm6r = Number(document.getElementById('Mgl6').value)*100/Number(document.getElementById('Dol6').value) ;
Grams6r = Gramlitr6r*Number(document.getElementById('Volu').value) ;
Milli6r = Grams6r/Number(document.getElementById('Konc12').value)*1000 ;
(document.getElementById('Gramlitr6').innerHTML) = Gramlitr6r.toFixed(5) ;
(document.getElementById('Ppmm6').innerHTML) = Ppmm6r.toFixed(2) ;
(document.getElementById('Grams6').innerHTML) = Grams6r.toFixed(3) ;
(document.getElementById('Milli6').innerHTML) = Milli6r.toFixed(1) ;

Gramssohr1 = (document.getElementById('Gramkonc1').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl1r).toFixed(2) ;
(document.getElementById('Millikonc1').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Ml1r).toFixed(2) ;
(document.getElementById('Price1').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl1r)*Number(document.getElementById('Priceg1').value)).toFixed(2) ;

Gramssohr2 = (document.getElementById('Gramkonc2').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl2r).toFixed(2) ;
(document.getElementById('Millikonc2').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Ml2r).toFixed(2) ;
(document.getElementById('Price2').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl2r)*Number(document.getElementById('Priceg2').value)).toFixed(2) ;

Gramssohr3 = (document.getElementById('Gramkonc3').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl4r).toFixed(2) ;
(document.getElementById('Millikonc3').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Ml4r).toFixed(2) ;
(document.getElementById('Price3').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl4r)*Number(document.getElementById('Priceg3').value)).toFixed(2) ;

Gramssohr4 = (document.getElementById('Gramkonc4').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr1r).toFixed(2) ;
(document.getElementById('Millikonc4').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Milli1r).toFixed(2) ;
(document.getElementById('Price4').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr1r)*Number(document.getElementById('Priceg4').value)).toFixed(2) ;

Gramssohr5 = (document.getElementById('Gramkonc5').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr2r).toFixed(2) ;
(document.getElementById('Millikonc5').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Milli2r).toFixed(2) ;
(document.getElementById('Price5').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr2r)*Number(document.getElementById('Priceg5').value)).toFixed(2) ;

Gramssohr6 = (document.getElementById('Gramkonc6').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr3r).toFixed(2) ;
(document.getElementById('Millikonc6').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Milli3r).toFixed(2) ;
(document.getElementById('Price6').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr3r)*Number(document.getElementById('Priceg6').value)).toFixed(2) ;

Gramssohr7 = (document.getElementById('Gramkonc7').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr4r).toFixed(2) ;
(document.getElementById('Millikonc7').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Milli4r).toFixed(2) ;
(document.getElementById('Price7').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr4r)*Number(document.getElementById('Priceg7').value)).toFixed(2) ;

Gramssohr8 = (document.getElementById('Gramkonc8').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr5r).toFixed(2) ;
(document.getElementById('Millikonc8').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Milli5r).toFixed(2) ;
(document.getElementById('Price8').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr5r)*Number(document.getElementById('Priceg8').value)).toFixed(2) ;

Gramssohr9 = (document.getElementById('Gramkonc9').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr6r).toFixed(2) ;
(document.getElementById('Millikonc9').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Milli6r).toFixed(2) ;
(document.getElementById('Price9').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gramlitr6r)*Number(document.getElementById('Priceg9').value)).toFixed(2) ;

Gramssohr10 = (document.getElementById('Gramkonc10').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl3r).toFixed(2) ;
(document.getElementById('Millikonc10').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Ml3r).toFixed(2) ;
(document.getElementById('Price10').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl3r)*Number(document.getElementById('Priceg10').value)).toFixed(2) ;

Gramssohr11 = (document.getElementById('Gramkonc11').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl5r).toFixed(2) ;
(document.getElementById('Millikonc11').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Ml5r).toFixed(2) ;
(document.getElementById('Price11').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl5r)*Number(document.getElementById('Priceg11').value)).toFixed(2) ;

Gramssohr12 = (document.getElementById('Gramkonc12').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl6r).toFixed(2) ;
(document.getElementById('Millikonc12').innerHTML) = (Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000/Number(document.getElementById('Volu').value)*Ml6r).toFixed(2) ;
(document.getElementById('Price12').innerHTML) = ((Number(document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000*Gl6r)*Number(document.getElementById('Priceg12').value)).toFixed(2) ;

Voluer = Number(document.getElementById('Volu').value) ;
(document.getElementById('Volume').innerHTML) = Voluer ;
(document.getElementById('Rashod').innerHTML) = (1000/Number(document.getElementById('Koncentrat').value)*Voluer).toFixed(0) ;
(document.getElementById('Litre').innerHTML) = ((document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000).toFixed(0) ;
(document.getElementById('Razi').innerHTML) = (((document.getElementById('Koncentrat').value)*Number(document.getElementById('Volkoncentrat').value)/1000)/Voluer).toFixed(0) ;

var type = 'data:application/octet-stream;base64, ';
var text = ' Магний сернокислый 7-водный, хч 10034-99-8хч ' + Gramssohr1 + 'гр.' ;
text2 = '	Калий сернокислый безводный, хч 7757-82-6хч ' + Gramssohr2 + 'гр.' ;
text3 = '	Калий фосфорнокислый 1-замещенный, хч 7778-77-0хч ' + Gramssohr3 + 'гр.' ;
text4 = '	Железная соль Трилона Б, 2х водный (Fe) 6-09-2391-77 ' + Gramssohr4 + 'гр.' ;
text5 = '	Марганец (2) сернокислый 1-водный, ч (Mn) 10034-96-5 ' + Gramssohr5 + 'гр.' ;
text6 = '	Борная кислота, хч (B) 10043-35-3хч	 ' + Gramssohr6 + 'гр.' ;
text7 = '	Цинк сернокислый 7-водный, хч (Zn) 7446-20-0хч ' + Gramssohr7 + 'гр.' ;
text8 = '	Медь (2) сернокислая 5-водная, чда (Cu) 7758-98-7 ' + Gramssohr8 + 'гр.' ;
text9 = '	Аммоний молибденовокислый, чда (Mo) 12054-85-2чда ' + Gramssohr9 + 'гр.' ;
text10 = '	Калий азотнокислый, хч 7757-79-1 ' + Gramssohr10 + 'гр.' ;
text11 = '	Кальций азотнокислый 4-водный, ч 15245-12-2в ' + Gramssohr11 + 'гр.' ;
text12 = '	Аммоний азотнокислый, чда 6484-52-2 ' + Gramssohr12 + 'гр.' ;
var base = Base64.encode(text + text2 + text3 + text4 + text5 + text6 + text7 + text8 + text9 + text10 + text11 + text12);
var res = type + base;
document.getElementById('test').href = res;

}
