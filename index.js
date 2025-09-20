function tasKagitMakas(kullanici, bilgisayar) {
    const secenekler = ["taş", "kağıt", "makas"];
  
    if (typeof bilgisayar === "undefined") {
      bilgisayar = secenekler[Math.floor(Math.random() * 3)];
    }
  
    let sonuc;
    if (kullanici === bilgisayar) {
      sonuc = "Beraberlik!";
    } else if (
      (kullanici === "taş" && bilgisayar === "makas") ||
      (kullanici === "makas" && bilgisayar === "kağıt") ||
      (kullanici === "kağıt" && bilgisayar === "taş")
    ) {
      sonuc = "Kazandın!";
    } else {
      sonuc = "Kaybettin!";
    }
  
    return "Senin seçimin: " + kullanici + ". Bilgisayarın seçimi: " + bilgisayar + ". " + sonuc;
  }
  
  // Test
  console.log(tasKagitMakas("taş"));
  