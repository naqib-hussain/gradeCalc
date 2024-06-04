document
  .getElementById("gradeCalculator")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const paperOne = parseFloat(document.getElementById("paperOne").value);
    const paperTwo = parseFloat(document.getElementById("paperTwo").value);
    const desiredGrade = parseInt(
      document.getElementById("desiredGrade").value
    );

    var option = `grade` + `${desiredGrade}`;
    console.log(option);

    if (option === "grade9") {
      option = 207;
    } else if (option === "grade8") {
      option = 176;
    } else if (option === "grade7") {
      option = 140;
    } else if (option === "grade6") {
      option = 109;
    } else if (option === "grade5") {
      option = 79;
    } else if (option === "grade4") {
      option = 49;
    } else if (option === "grade3") {
      option = 35;
    } else if (option === "grade2") {
      option = 0;
    } else if (option === "grade1") {
      option = 0;
    }

    // Assuming a maximum of 80 marks for each paper and that the final grade
    // is the average of three papers. Adjust the logic as per your requirements.
    const maxMarks = 80;
    const obtainedMarks = paperOne + paperTwo;
    const totalMarksNeeded = option - obtainedMarks;

    const marksNeededForPaperThree = totalMarksNeeded;

    let resultText;
    if (marksNeededForPaperThree > maxMarks) {
      resultText = `It is not possible to achieve grade ${desiredGrade} with the given marks.`;
    } else if (marksNeededForPaperThree < 0) {
      resultText = `You already have enough marks to achieve grade ${desiredGrade}.`;
    } else {
      resultText = `You need ${marksNeededForPaperThree.toFixed(
        2
      )} marks in Paper 3 to achieve grade ${desiredGrade}.`;
    }

    document.getElementById("result").textContent = resultText;
  });
