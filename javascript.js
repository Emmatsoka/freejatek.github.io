



  const myInput = document.getElementById("gomb");

  // feliratkozunk a focus eseményre
  myInput.addEventListener("focus", () => {
    // ha az elemre fókuszálunk, 3 másodperc múlva eltávolítjuk a fókuszt
    setTimeout(() => {
      myInput.blur(); // eltávolítja a fókuszt
    }, 3000); // 3 másodperc (3000 milliszekundum) után hajtja végre a setTimeout() függvényt
  });

  const myInput = document.getElementById("gorget");

  // feliratkozunk a focus eseményre
  myInput.addEventListener("focus", () => {
    // ha az elemre fókuszálunk, 3 másodperc múlva eltávolítjuk a fókuszt
    setTimeout(() => {
      myInput.blur(); // eltávolítja a fókuszt
    }, 3000); // 3 másodperc (3000 milliszekundum) után hajtja végre a setTimeout() függvényt
  });
