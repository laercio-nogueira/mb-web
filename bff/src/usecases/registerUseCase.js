module.exports = {
  validateCase: (req, res) => {
    const result = req.body
    
    if (!result?.email
      || !result.type
      || !result.name
      || !result.document
      || !result.date
      || !result.phone
      || !result.password) {
      
      res.status(400).json({
        success: false,
        message: "Falta uma informação para o cadastro!"
      });

      return;
    }

    if (result.type === "pf" && result.name.split(" ").length < 2) {
      res.status(400).json({
        success: false,
        message: "Informe nome e sobrenome."
      });

      return;
    }

    res.status(200).json({
      success: true,
      message: "Cadastro realizado com sucesso!"
    });
  }
}