(() => {
  const output = document.getElementById("visitor-number");

  if (!output) {
    return;
  }

  const storageKey = "rina-sato-visitor-number";
  const minimum = 10000;
  const maximum = 99999;

  const createVisitorNumber = () =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  let visitorNumber;

  try {
    const storedValue = Number.parseInt(
      window.localStorage.getItem(storageKey),
      10
    );

    if (
      Number.isInteger(storedValue) &&
      storedValue >= minimum &&
      storedValue <= maximum
    ) {
      visitorNumber = storedValue;
    } else {
      visitorNumber = createVisitorNumber();
      window.localStorage.setItem(storageKey, String(visitorNumber));
    }
  } catch (error) {
    // 保存領域を利用できない環境でも、ランダムな数字は表示します。
    visitorNumber = createVisitorNumber();
  }

  output.textContent = visitorNumber.toLocaleString("ja-JP");
})();
