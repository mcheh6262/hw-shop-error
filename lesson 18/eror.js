function a(x,y) {
    
    try {
      //  b();
        console.log('erorr');
    }
    catch (e) {
        console.log(`${e} method does not exist`);
        
    }
    finally {
        console.log( 'finally code- after method a');

    }
}
a()