let elseIf = (x, y, z) => {
   if(x>y && x>z){
      console.log("X Lebih Besar Dari Y")
   }else if(x>z && x<y){
      console.log("X Besar Dari Y Tapi Tidak Dengan Z")
   }else {
      console.log("Belum tau Apa")}
}

elseIf(25, 30, 20);