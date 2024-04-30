//To create own resume data in JSON format

var resume={
    "Name": "Yukesh Chandran",
    "Email": "yukesh@gmail.com",
    "Phone": "+91-9876543210",
    "Address": "1/123 Street, City, Country, Pincode",
    "Summary": "Experienced full-stack developer proficient in front-end and back-end technologies, adept at designing, developing, and maintaining scalable web applications.",  
    "Hobbies": "Reading Books",
    "Education": [
      {
        "Degree": "Bachelor of Engineering in Electronics and Communication",
        "College": "Bannari Amman Institute of Technology",
        "Graduation_year": 2024,
      }
    ],
    "Skills": [
      "JavaScript",
      "HTML",
      "CSS",
    ]
    
  }

  //For Loop
  console.log("ForLoop")
  let keys=Object.keys(resume)
  let values=Object.values(resume)
  for(var i=0;i<keys.length;i++)
  {
    console.log(keys[i],":",values[i])
  }
  console.log("Details of Education using ForLoop")
  for(var k=0;k<resume.Education.length;k++)
  {
    console.log("Degree :" + resume.Education[0].Degree)
    console.log("College :" + resume.Education[0].University)
    console.log("Graduation Year :" + resume.Education[0].Graduation_year)
  }
  

  //For...in Loop
  console.log("For...In Loop")
  for(var j in resume)
  {
    console.log(resume[j]);
  }
  console.log("Details of Education using For...in Loop");
  for (var key in resume.Education[0]) {
    if (key === "Degree") {
      console.log("Degree"+ " : " +resume.Education[0][key]);
      }
  } 

  //For...of Loop
  console.log("For...ofLoop")
  for (const [key, value] of Object.entries(resume)) {
    console.log(key + " : " + value);
  }
  console.log("Details of Skills using For...Of Loop")
  for (const [key, value] of Object.entries(resume.Skills)) {
    console.log(value);
  }

  //For...each Loop
  let entry = Object.entries(resume)
  console.log("For...each Loop")
  entry.forEach(([Name,element]) => 
    console.log(Name + " : " +element)
  );
  console.log("Details of Skill using For...each loop")
  resume.Skills.forEach((Skills) => 
    console.log(Skills)
  );
