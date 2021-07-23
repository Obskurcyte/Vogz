import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SEND_GRID)

export default async (req, res) => {

  const {values, token} = req.body;

  console.log(values)
  const human = await validateHuman(token);

  console.log(human)
  if(!human) {
    res.status(400);
    res.json({errors: ['Vous êtes un robot']})
    return
  }

  async function validateHuman(token) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch (`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {
        method: 'POST'
      }
    );
    const data = await response.json();
    console.log(data)
    return data.success
  }

  const message= `
    Nom: ${values.name}\r\n
    Prénom: ${values.prenom}\r\n
    Téléphone: ${values.phone}\r\n
    Email: ${values.email}\r\n
  `

  const data = {
    to: `${values.email}`,
    from: 'hadrien.jaubert99@gmail.com',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  await mail.send(data)
  console.log(values)
}
