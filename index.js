const company = document.querySelector('#company')
const job = document.querySelector('#job')
const button = document.querySelector('#button')

button.addEventListener('click', function(e) {
  e.preventDefault()

  const result = `Dear HRD of ${company.value},
  \nI trust this message finds you well. My name is Mohammad Ali Al Maduri, and I am writing to express my sincere interest in the ${job.value} position at ${company.value}, as recently advertised. With a Bachelor's Degree in Information System and a solid background in evaluating software quality through manual and automation testing, I am eager to contribute my skills and experiences to your esteemed team.
  \nIn my previous roles, I have played a pivotal role in diverse projects, encompassing web applications, with a primary focus on ensuring IT product quality and reliability through comprehensive automated testing processes. I am proficient in various testing methodologies and tools, specializing in automation tools such as Selenium, Katalon Studio, and Postman.
  \nAdditionally, I bring programming expertise in Java, JavaScript, and Python, allowing me to enhance testing processes and contribute to the development of robust and efficient automated testing frameworks.
  \nI am confident that my technical expertise, attention to detail, and commitment to excellence align seamlessly with the requirements of the ${job.value} role at ${company.value}.
  \nI have attached my CV for your review, providing additional insights into my professional background and notable achievements in the field of automated testing.
  \nThank you for considering my application. I look forward to the possibility of discussing how my qualifications align with the needs of your team in greater detail.
  \nBest Regards,\nMohammad Ali Al Maduri`
  
  navigator.clipboard.writeText(`${result}`)
})
