---

# 🔐 Password Generator

A customizable password generator built with HTML, CSS, and JavaScript that allows users to create secure and random passwords with various options.

---

## Features ✨

- **Customizable Password Length**: Set the length of the generated password (1 to 30 characters).
- **Character Types**: Choose from:
  - Lowercase (a-z)
  - Uppercase (A-Z)
  - Numbers (0-9)
  - Symbols (^!$%&|[](){}:;.,*+-#@<>~)
- **Exclude Duplicate Characters**: Option to exclude duplicate characters from the generated password.
- **Include Spaces**: Option to add spaces in the password.
- **Password Strength Indicator**: Visual feedback on password strength based on its length.
- **Copy to Clipboard**: One-click option to copy the generated password.

---

## How to Use 🛠️

1. **Select Password Settings**: Check the boxes for the types of characters you want in your password (lowercase, uppercase, numbers, symbols).
2. **Set Password Length**: Use the slider to choose the desired length of the password.
3. **Generate Password**: Click the "Generate Password" button to create a random password based on your selected settings.
4. **Copy Password**: Click the copy icon to copy the generated password to your clipboard.

---

## How to Change Dataset 🔄

To change the character set or customize the available options:

1. **Modify the `characters` Object**:  
   In the JavaScript file (`script.js`), the `characters` object defines the available characters for lowercase, uppercase, numbers, and symbols. You can add or modify these values based on your needs.

   Example:
   ```javascript
   const characters = {
       lowercase: "abcdefghijklmnopqrstuvwxyz",
       uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
       numbers: "0123456789",
       symbols: "^!$%&|[](){}:;.,*+-#@<>~"
   }
   ```

2. **Customize Password Options**:  
   If you want to add more password settings (like more character categories or constraints), simply add more checkboxes in the HTML under the `.pass-settings` section and update the logic in `script.js`.

---

## Technologies Used 🛠️

- **HTML**: Structure and layout of the page.
- **CSS**: Styling and layout of the elements.
- **JavaScript**: Logic for password generation, event handling, and interactions.

---

