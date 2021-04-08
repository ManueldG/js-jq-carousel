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

$(document).ready(function(){ // onload al caricamento della pagina avvio la funzione principale 

    $(document).keydown(function(e){ // legge l0evento keydown
        if (e.originalEvent.keyCode===39) // nel caso premo direzione destra chiamo la funzione next()
            next(); 
        if (e.originalEvent.keyCode===37) // se premo direzione sinistra chiamo la funzione prev()
            prev();
    })

    $(".next").click(function(){ // se clicco sulla classe next chiama la funzione next()
        next();        
    });

    $( ".prev").click(function(){ // se clicco sulla classe prev chiama la funzione prev()
        prev();        
    });

    $('.fa-circle').click(function(){ // se clicco sulla classe fa-circle chiama la funzione anonima
        
        $(".active").removeClass("active"); // rimuove la classe active
        $(this).addClass("active"); // aggiunge la classe active all'elemento cliccato
        var index = ($(this).index()+1); // restituisce l'index dell'elemento cliccato 
        var image= $("img:nth-of-type("+index+")");  // identifica l'img in posizione index 
        console.log(image); // stampo in console l'oggetto image
        image.addClass("active"); // aggiungo la classe active all'oggetto image
        
    })


})

function next(){
    console.log($(".active")[0].className);
    if (!($(".active")[0].className).includes("last")) // se nelle classi non c'è la classe last 
        {
            $(".active").removeClass("active").next().addClass("active"); // rimuovo la classe active e aggiungo la classe active all'elemento successivo
        }
    
    else
        {
            console.log($('.last')); // altrimenti 
            $(".last").removeClass("active"); // rimuovo la classe active dalla classe last
            $(".first").addClass("active"); // e aggiungo la classe active alla classe first
        }
}


function prev(){
    console.log($(".active")[0].className);
    if (!($(".active")[0].className).includes("first")) // se nelle classi non c'è la classe first    
        {
            $(".active").removeClass("active").prev().addClass("active");// rimuovo la classe active e aggiungo la classe active all'elemento successivo
        }
        
    else// altrimenti
        {
            console.log($('.last'));
            $(".first").removeClass("active");// rimuovo la classe active dalla classe first
            $(".last").addClass("active");// e aggiungo la classe active alla classe last
        }

}


