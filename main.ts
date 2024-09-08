document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Collect values from the form
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const educationDescription = (document.getElementById("education-description") as HTMLTextAreaElement).value;
    const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
    const workDescription = (document.getElementById("work-description1") as HTMLTextAreaElement).value;
  
    // Display the values in the generated resume
    (document.getElementById("display-name") as HTMLElement).textContent = name;
    (document.getElementById("display-email") as HTMLElement).textContent = email;
    (document.getElementById("display-phone") as HTMLElement).textContent = phone;
    (document.getElementById("display-location") as HTMLElement).textContent = location;
    (document.getElementById("display-degree") as HTMLElement).textContent = degree;
    (document.getElementById("display-school") as HTMLElement).textContent = school;
    (document.getElementById("display-education-description") as HTMLElement).textContent = educationDescription;
    (document.getElementById("display-skills") as HTMLElement).textContent = skill1;
    (document.getElementById("display-work-description") as HTMLElement).textContent = workDescription;
  
    // Show the generated resume
    (document.getElementById("generated-resume") as HTMLElement).style.display = "block";

    (document.getElementById("resume-form") as HTMLFormElement).reset();
  });
  