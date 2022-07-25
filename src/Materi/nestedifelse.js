let nestedIfElse = (x, y, z) => {
   if(x>y){
      if(x>z){
         console.log("Nilai X Terbesar dari Semua")
      }else{
         console.log("Nilai X Terbesar Kedua")
      }
   }else{
      if(x<z){
         console.log("Nilai X Terkecil Dari Semua")
      }else {
         console.log("Nilai X Terkecil Kedua")
      }
   }

}

nestedIfElse(22, 18, 23);