 const reproductor = {
        reproducir:(id) => console.log(`Reproduciendo canción con el id ${id}`),
      
        pausar: () => console.log('Pausando...'),
            
    
        borrar: (id) =>console.log(`Borrando la canción con el id ${id}`),
    

        crearPlaylist: (nombre) => console.log(`Creando la playlist ${nombre}`),
        
        reproducirPlaylist: (nombre) => console.log(`Reproduciendo la playlist ${nombre}`),
        
}






    reproductor.reproducir(30);
    reproductor.pausar(); 
    reproductor.borrar(2);
    reproductor.crearPlaylist('Heavy Metal');
    reproductor.crearPlaylist('Rock 90s');
    reproductor.crearPlaylist('Cumbia Santafesina');
    reproductor.reproducirPlaylist('Cumbia Santafesina');
    
