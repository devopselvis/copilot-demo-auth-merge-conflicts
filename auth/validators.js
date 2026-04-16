function validateUserInput(userData) {
     const { username, password, email } = userData;
     
     // Basic validation
     if (!username || !password || !email) {
       return { isValid: false, error: 'Missing required fields' };
     }
     
     // Username validation
     if (username.length < 3 || username.length > 20) {
       return { isValid: false, error: 'Username must be between 3-20 characters' };
     }
     
     if (!/^[a-zA-Z0-9_]+$/.test(username)) {
       return { isValid: false, error: 'Username can only contain letters, numbers, and underscores' };
     }
     
     if (/^[0-9]/.test(username)) {
       return { isValid: false, error: 'Username cannot start with a number' };
     }
     
     return { isValid: true };
   }
   
   module.exports = { validateUserInput };
