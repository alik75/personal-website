"use server"

export async function verifyCaptcha(token: string | null) {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  ,{
    method:"POST"
  }).then(res=>res.json());
  console.log(res);
  if (res.success) {
    return "success!"
  } else {
    throw new Error("Failed Captcha")
  }
}