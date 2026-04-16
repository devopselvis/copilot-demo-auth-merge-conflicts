function validateUserInput(userData) {
     const { username, password, email } = userData;
     
     // Basic validation
     if (!username || !password || !email) {
       return { isValid: false, error: 'Missing required fields' };
     }
     
     // Password security validation
     if (password.length < 8) {
       return { isValid: false, error: 'Password must be at least 8 characters long' };
     }
     
     if (!/(?=.*[a-z])/.test(password)) {
       return { isValid: false, error: 'Password must contain at least one lowercase letter' };
     }
     
     if (!/(?=.*[A-Z])/.test(password)) {
       return { isValid: false, error: 'Password must contain at least one uppercase letter' };
     }
     
     if (!/(?=.*\d)/.test(password)) {
       return { isValid: false, error: 'Password must contain at least one number' };
     }
     
     if (!/(?=.*[@$!%*?&])/.test(password)) {
       return { isValid: false, error: 'Password must contain at least one special character (@$!%*?&)' };
     }
     
     return { isValid: true };
   }
   
   module.exports = { validateUserInput };
