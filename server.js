const express = require('express');
   const { validateUserInput } = require('./auth/validators');
   
   const app = express();
   app.use(express.json());
   
   app.post('/register', (req, res) => {
     const validation = validateUserInput(req.body);
     if (!validation.isValid) {
       return res.status(400).json({ error: validation.error });
     }
     res.json({ message: 'User registration successful' });
   });
   
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });