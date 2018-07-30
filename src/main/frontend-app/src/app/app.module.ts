import 'materialize-css';
import 'rxjs/Rx';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'angular-crumbs';
import { Ng2Webstorage } from 'ngx-webstorage';
import { Select2Module } from 'ng2-select2';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { routes } from "./app.routing";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RicercautenteComponent } from './components/ricercautente/ricercautente.component';
import { UtenteService } from "./services/utente.service";
import { LinguaService } from "./services/lingua.service";
import { DettaglioutenteComponent } from './components/dettaglioutente/dettaglioutente.component';
import { UtenteformComponent } from './components/utenteform/utenteform.component';
import { AmministrazioneComponent } from './components/amministrazione/amministrazione.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortablecolumnComponent } from './components/sortablecolumn/sortablecolumn.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatacolumnComponent } from './components/datacolumn/datacolumn.component';
import { FunctioncolumnComponent } from './components/functioncolumn/functioncolumn.component';
import { RicercagruppoComponent } from './components/ricercagruppo/ricercagruppo.component';
import { GruppoService } from "./services/gruppo.service";
import { DettagliogruppoComponent } from './components/dettagliogruppo/dettagliogruppo.component';
import { GruppoformComponent } from './components/gruppoform/gruppoform.component';
import { RuoloService } from "./services/ruolo.service";
import { RicercaruoloComponent } from './components/ricercaruolo/ricercaruolo.component';
import { DettaglioruoloComponent } from './components/dettaglioruolo/dettaglioruolo.component';
import { RuoloformComponent } from './components/ruoloform/ruoloform.component';
import { AuditService } from "./services/audit.service";
import { RuoloauditComponent } from './components/ruoloaudit/ruoloaudit.component';
import { GroupGuard } from "./guards/group.guard";
import { AuthService } from "./services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { FileService } from "./services/file.service";
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { Select2Component } from './components/select2/select2.component';

@NgModule( {
    declarations: [
        AppComponent,
        HeaderComponent,
        RicercautenteComponent,
        DettaglioutenteComponent,
        UtenteformComponent,
        AmministrazioneComponent,
        FooterComponent,
        SortablecolumnComponent,
        DatatableComponent,
        DatacolumnComponent,
        FunctioncolumnComponent,
        RicercagruppoComponent,
        DettagliogruppoComponent,
        GruppoformComponent,
        RicercaruoloComponent,
        DettaglioruoloComponent,
        RuoloformComponent,
        RuoloauditComponent,
        HomeComponent,
        FileuploaderComponent,
        AutocompleteComponent,
        Select2Component
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        Ng2Webstorage,
        NgxPaginationModule,
        BreadcrumbModule,
        Select2Module,
        MatButtonModule, 
        MatCheckboxModule,
        routes
    ],
    providers: [
        UtenteService,
        LinguaService,
        GruppoService,
        RuoloService,
        AuditService,
        AuthService,
        GroupGuard,
        FileService,
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
