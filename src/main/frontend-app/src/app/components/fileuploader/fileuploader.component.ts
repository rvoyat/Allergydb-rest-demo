import { Component, OnInit } from '@angular/core';
import { FileService } from "../../services/file.service";
import { saveAs } from 'file-saver/FileSaver';
import { Entryfile } from "../../models/entryfile";

@Component( {
    selector: 'app-fileuploader',
    templateUrl: './fileuploader.component.html',
    styleUrls: ['./fileuploader.component.css']
} )
export class FileuploaderComponent implements OnInit {

    constructor( private fileService: FileService ) { }

    files:Entryfile[];
    
    ngOnInit() {
        this.fetchFiles();
    }

    onFileSelection( e ) {
        console.log( e.target.files[0].name );

        this.fileService.create( e.target.files[0] ).subscribe((res)=>{
            this.fetchFiles();
        });
        
    }
    
    fetchFiles(){
        this.fileService.fetch().subscribe(( data ) => {
            this.files = data;
            console.log(this.files);
        });
    }

    onDownload(entryfile:Entryfile) {
        this.fileService.download(entryfile.index).subscribe(
            ( res ) => {
                saveAs( res, entryfile.name ); //if you want to save it - you need file-saver for this : https://www.npmjs.com/package/file-saver

//                var fileURL = URL.createObjectURL( res );
//                console.log(fileURL);
//                window.open( fileURL ); // if you want to open it in new tab

            }
        );
    }

}
