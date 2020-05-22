export class FileItem {
    
    public archivo: File;
    public nameFile: string;
    public url: string;
    public uploading: boolean;
    public progress: number;

    constructor( archivo: File ) {

        this.archivo = archivo;
        this.nameFile = archivo.name;
        // this.url = archivo.url;
        this.uploading = false;
        this.progress = 0;
    }
}