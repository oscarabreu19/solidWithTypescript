(() => {

    // arreglo de temperaturas celsius
    const tempDegreeCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const usersById = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const usersEmails = usersById.map( eachUser => eachUser.email );

    // Variables booleanas de un video juego
    const leap = false;
    const isRunning = true;
    const emptyItems = true;
    const isRead = false;

    // Otros ejercicios
    // tiempo inicial
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const finalTime = new Date().getTime() - initialTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( booksUrl: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getAreaSquare( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJobByStatus(isActive: boolean) {
        throw new Error('Function not implemented.');
    }
})();
