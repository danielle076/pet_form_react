## Context

Als klant wil ik een formulier waarmee ik aan kan geven welk huisdier de gebruiker leuk vind.

## Acceptatie Criteria

* De applicatie is gebouwd met create-react-app
* De applicatie maakt gebruik van react-hook-form
* Het formulier heeft de volgende velden:
  * Voornaam:
    * Verplicht
  * Achternaam:
    * Verplicht
  * Leeftijd:
    * Verplicht
    * Minimaal 18 jaar
  * Postcode:
    * Verplicht
    * Valide postcode (bonus)
  * Huisnummer zonder toevoeging:
    * Verplicht
  * Radiobuttons Favoriete huisdier:
    * Opties: kat, hond, hamster, muis, anders
    * Verplicht
  * Ander huisdier
    * Verplicht bij optie anders
    * Wordt alleen getoond als optie anders is geselecteerd
  * Opmerking
    * Textarea
  * Akkoord met de voorwaarden
  * Verzendbutton

* Alle velden worden gevalideerd tijdens typen
* Bij success versturen wordt er een melding getoond dat het versturen succesvol was
* Bij een error tijdens versturen wordt er een error-melding getoond
* Het klikken op een label activeert de input