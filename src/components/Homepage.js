import React, { Component } from 'react';
import copertina from '../assets/copertina_manuale.png';

const Homepage = () => {
  return(
    <div className="main-content">
      <h2 className="page-title"><span>Home</span></h2>
      <div className="tale">
        La stanza era invasa da ombre che gettavano in ogni angolo un cesto di paure. Michele ripeteva sottovoce ciò che la sua mano e la
        sua penna andavano vergando sul foglio. Egli non si sarebbe mai aspettato di cadere nel baratro della dannazione. Era un servo fedele di Ryless, del suo
        Pontefice e del suo Vescovo, e come suo braccio destro credeva d'essere un protetto dal Messia.<p> Le ombre si condensarono dietro di lui e un vento
        gelido mosse le fiamme delle candele e ravvivò i ceppi moribondi del camino. Don Michele non si ridestò  dal suo lavoro mentre i passi silenziosi
        prendevano forma dietro di lui. Una mano gelida si posò sulla sua spalla sinistra. Don Michele si voltò e il suo urlo, un urlo che non emise suono, gli
        morì in gola. I suoi occhi strabuzzarono mentre osservava la figura davanti a lui.</p>
        <div className="citation"> [ Oracolo di Giassa - Tomo IX "dei segreti" - libro V, capitolo IX ] </div>
      </div>
      <div className="description">
        <div className="desc-img">
          <img src={copertina} />
          <div> <em>Radix Malorum</em> è un gioco di ruolo dice based (l'elemento caso viene cioè gestito tramite il lancio di dadi) di ambientazione fantasy. Esso
          rispecchia, con le dovute differenze, i capisaldi del genere letterario  fantasy. <em>Radix Malorum</em> (da ora in avanti <em>RM</em>) è, ciononostante,frutto della
          fantasia dei suoi autori e la sua ambientazione è totalmente originale e scaturita insieme alle altre regole da un duro lavoro di sperimentazione durato
          quasi nove anni, senza negare il contributo datoci dagli autori che hanno fatto nascere in noi la passione per questo genere.
          <p>L'appartenenza a questa categoria, è tuttavia solo una scelta, così come giocare l'ambientazione originale proposta nel manuale. <em>Radix Malorum </em>
          è anche un compendio di regole versatile e modulare che possono essere adattate con semplicità alla vostra ambientazione preferita. Gruppi di giocatori
          hanno adattato le meccaniche proposte da <em>RM</em> ad altre ambientazioni fantasy conosciute (come Dragonlance©, Forgotten Realms©, oppure i mondi di
          Moorckock e Tolkien) oppure ad ambientazioni totalmente differenti (cyberpunk, fantascienza e horror). </p>
          <p> Per <em>Radix Malorum</em>  sono state anche sviluppate due avventure introduttive per l'ambientazione originale. "Il segreto di Aquileia" e
          "La Maledizione di Talliskeg" sono due moduli indicati per apprendere le meccaniche di gioco con semplicità e permettervi di entrare nella realtà che cela
          la Radice dei Mali.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Homepage };
