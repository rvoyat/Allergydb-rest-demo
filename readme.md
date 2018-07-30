La classe WeAppInitializer si preoccupa dell'inizializazzione della web app e richiama SptingConfig che si occupa della creazione dei bean.

Nel package rest si trovano le api rest che vengono mappate con annotation di spring
https://it.wikipedia.org/wiki/Representational_State_Transfer#La_relazione_tra_gli_URL_e_i_metodi_HTTP

Elenco delle API

GET  /utenti lista degli utenti
GET  /utenti/{id} dettaglio singolo utente
POST /utenti crea un nuovo utente
PUT  /utenti/{id} aggiorna l'utente identificato da id

GET /user/{id}/group elenco dei gruppi dell'utente
PUT /user/{id}/group aggiunge un nuovo gruppo
POST /user/{id} aggiunge una lista di groups {groups :[{group_id: 1}, {group_is: 2}]}
DELETE /user/{id}/group/{idGroup} cancella l'associazione utente gruppo

/role

/group

/menu

L'accesso al database avviene tramite API JPA. La configurazione del datasource e fatta dalla classe JpaConfiguration



ANGULAR 2 FRONTEND
Per creare il progetto angular

ng new frontend-app // crea l'app

ng serve  // esegue l'app