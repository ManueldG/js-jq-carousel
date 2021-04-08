/*Esercizio di oggi: Slider jQuery
nome repo: js-jq-carousel
Descrizione
Creare uno slider di immagini come visto questa mattina a lezione.
Potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni :faccia_leggermente_sorridente:
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
Se volete potete partire dal layout base visto in classe https://bitbucket.org/booleancareers/lc-ex-slider-layout/downloads/
Bonus
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Consiglio
Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare la memoria sulle funzioni che potrebbero esserci utili.*/

$(document).ready(function(){

    
    $(".next").click(function(){
        console.log($(".active")[0].className);
        if (!($(".active")[0].className).includes("last"))
        {
            $(".active").removeClass("active").next().addClass("active");
        }
        
        else{
            console.log($('.last'));
            $(".last").removeClass("active");
            $(".first").addClass("active");
        }
        
    });

    $( ".prev").click(function(){
        
        console.log($(".active")[0].className);
        if (!($(".active")[0].className).includes("first"))
        {
            $(".active").removeClass("active").prev().addClass("active");
        }
        
        else{
            console.log($('.last'));
            $(".first").removeClass("active");
            $(".last").addClass("active");
        }
    });


})