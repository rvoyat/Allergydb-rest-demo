La classe WeAppInitializer si preoccupa dell'inizializazzione della web app e richiama SptingConfig che si occupa della creazione dei bean.

Nel package rest si trovano le api rest che vengono mappate con annotation di spring
https://it.wikipedia.org/wiki/Representational_State_Transfer#La_relazione_tra_gli_URL_e_i_metodi_HTTP

Elenco delle API 

/api/allergyDeductor  method POST carica modello SVM e dopo il predict classifica se malato o no  