import { RouterModule, Routes } from "@angular/router";
import { RicercautenteComponent } from "./components/ricercautente/ricercautente.component";
import { DettaglioutenteComponent } from "./components/dettaglioutente/dettaglioutente.component";
import { AmministrazioneComponent } from "./components/amministrazione/amministrazione.component";
import { RicercagruppoComponent } from "./components/ricercagruppo/ricercagruppo.component";
import { DettagliogruppoComponent } from "./components/dettagliogruppo/dettagliogruppo.component";
import { RicercaruoloComponent } from "./components/ricercaruolo/ricercaruolo.component";
import { DettaglioruoloComponent } from "./components/dettaglioruolo/dettaglioruolo.component";
import { GroupGuard } from "./guards/group.guard";
import { HomeComponent } from "./components/home/home.component";
import { FileuploaderComponent } from "./components/fileuploader/fileuploader.component";
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";
import { Select2Component } from "./components/select2/select2.component";


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'}},
    {
        path: 'amministrazione', component: AmministrazioneComponent, data: { breadcrumb: 'Amministrazione' },
        children: [
            { path: 'ricercautente', component: RicercautenteComponent,canActivate: [GroupGuard],  data: { breadcrumb: 'Ricerca Utente', groups: ['Amministrazione'] } },
            { path: 'dettaglioutente/:id', component: DettaglioutenteComponent, data: { breadcrumb: 'Dettaglio Utente' } },
            { path: 'dettaglioutente', component: DettaglioutenteComponent, data: { breadcrumb: 'Dettaglio Utente' } },
            { path: 'ricercagruppo', component: RicercagruppoComponent, data: { breadcrumb: 'Ricerca Gruppo' } },
            { path: 'dettagliogruppo/:id', component: DettagliogruppoComponent, data: { breadcrumb: 'Dettaglio Gruppo' } },
            { path: 'dettagliogruppo', component: DettagliogruppoComponent, data: { breadcrumb: 'Dettaglio Gruppo' } },
            { path: 'ricercaruolo', component: RicercaruoloComponent, data: { breadcrumb: 'Ricerca Ruolo' } },
            { path: 'dettaglioruolo/:id', component: DettaglioruoloComponent, data: { breadcrumb: 'Dettaglio Ruolo' } },
            { path: 'dettaglioruolo', component: DettaglioruoloComponent, data: { breadcrumb: 'Dettaglio Ruolo' } },
        ]
    },
    { path: 'fileuploader', component: FileuploaderComponent, data: { breadcrumb: 'Fileuploader'}},
    { path: 'autocomplete', component: AutocompleteComponent, data: { breadcrumb: 'Autocomplete'}},
    { path: 'select2', component: Select2Component, data: { breadcrumb: 'Select2'}},
    
];

export const routes = RouterModule.forRoot( appRoutes );