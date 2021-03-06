/**
 * Pour déclarer une classe comme composant
 * de notre application, on importe "component"
 * via @angular/core
 */
import {Component} from '@angular/core';

/**
 * C'est ce qu'on appel un décorateur.
 * Il va nous permettre de donner des renseignements
 * sur notre composants
 */
@Component({
  /**
   * Le sélecteur est l'ID, l'identifiant
   * unique du composant au sein de l'application.
   */
  selector: 'app-root',
  /**
   * C'est la partie visible de notre composant.
   * C'est ce qui s'affiche à notre utilisateur.
   */
  templateUrl: './app.component.html',
  /**
   * Déclarer les styles CSS spécifique a ce composant.
   */
  styleUrls: ['./app.component.css']
})
/**
 * La classe contient les données du composant.
 * Dans notre architecture MVVM, notre classe correspond au Model.
 */
export class AppComponent {

  // -- Déclaration d'une variable / propriété
  title = 'Gestion de Contact';
  contactProfil = null;

  // -- Déclaration d'un objet contact
  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    email: 'hugo@biyn.media',
    tel: '07 83 97 15 15'
  };

  // -- Tableau de Contact
  mesContacts = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      email: 'hugo@biyn.media',
      tel: '07 83 97 15 15'
    },
    {
      id: 2,
      name: 'Vanessa DEHECQ',
      email: 'vanessa.dehecq@gmail.com',
      tel: '07 89 45 23 56'
    },
    {
      id: 3,
      name: 'Manon DERYDT',
      email: 'manon.derydt@gmail.com',
      tel: '07 96 52 41 23'
    },
    {
      id: 4,
      name: 'Olga KORDIAK',
      email: 'olga.kordiak@gmail.com',
      tel: '01 56 89 78 45'
    },
  ];

  /*
  Permet d'afficher les informations d'un objet Contact.
   */
  displayContact(contactCliqueParMonUtilisateur): void {
    console.log(contactCliqueParMonUtilisateur);

    this.contactProfil = contactCliqueParMonUtilisateur;
  }

  /*
  Cette fonction est automatiquement appelée par Angular lorsqu'un nouveau contact est créee.
   */
  addContact(contact): void {
    this.mesContacts.push( contact );
  }
}
