import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-prices',
  templateUrl: './admin-prices.component.html',
  styleUrls: ['./admin-prices.component.css']
})
export class AdminPricesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert("je suis en train de soumettre mon formulaire et pour ce faire je dois: ");
    alert("1)° Récupérer les données de mon formulaire et les envoyer dans la console ( pour être sur que je les ai ) ");
    alert("2)° Une fois que je suis sur de récupérer les données de mon formulaire, je dois les envoyer à un service, que je dois créer");
    alert("3°) Une fois ce service généré ( avec ng generate ) je dois coder une méthode dessus ( par exemple sendJambon si j'envoie du jambon )");
    alert("4°) Une fois la méthode du service codée, et en s'assurant qu'elle envoie bien les données au serveur ( on peut le vérifier à l'aide du panneau 'reseau du navigateur', je peux passer au back");
  }

}
