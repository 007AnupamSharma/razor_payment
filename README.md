# **Razorpay Payment Gateway Integration**

This project demonstrates the seamless integration of the **Razorpay** payment gateway into a web application. The goal was to create a secure and user-friendly payment system, providing real-time transaction updates and a smooth checkout experience.

---

## **Features**

- **Payment Gateway Integration**: Supports secure payment processing using Razorpay.
- **Seamless User Experience**: Offers a clean and intuitive checkout interface.
- **Webhook Handling**: Listens for Razorpay webhooks to update transaction status in real-time.
- **Error Handling**: Comprehensive error messages and responses for failed transactions.
- **Customizable UI**: The payment UI can be tailored to fit various design requirements.

---

## **Tech Stack**

- **Frontend**: React, Chakra ui
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay

---

## **Setup and Installation**

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Add your Razorpay API keys:
   - Create a `.env` file in the project root.
   - Add the following variables:
     ```env
     RAZORPAY_KEY_ID=your_key_id
     RAZORPAY_KEY_SECRET=your_key_secret
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser to test the payment gateway.

---

## **How It Works**

1. The user clicks the **Pay Now** button on the frontend.
2. A Razorpay order is created on the backend, and a payment form is displayed.
3. Once the user completes the payment, Razorpay confirms the transaction.
4. Webhooks are used to update the payment status in real-time.
5. The user is notified of the successful or failed transaction.

---

## **Screenshots**
![image](https://github.com/user-attachments/assets/1d0be336-2feb-4c97-8c34-5312f69eeb0f)
![image](https://github.com/user-attachments/assets/210a14c2-13d8-48ca-9cee-acfb5c79b209)
![image](https://github.com/user-attachments/assets/0b415b32-21bd-4aac-b376-68f36501efc3)


![image](https://github.com/user-attachments/assets/9ec98973-70a8-403d-b5a1-fd6004258353)


---

## **Learning Outcomes**

- Gained expertise in integrating third-party payment gateways.
- Learned how to handle webhooks for real-time updates.
- Improved backend development skills with Node.js and Express.js.
- Understood the importance of secure payment handling.

---

## **Future Enhancements**

- Add support for multiple currencies.
- Implement a subscription-based payment model.
- Improve the UI for a more modern look.

---

## **Contributing**

Contributions are welcome! Feel free to open issues or submit pull requests.

Happy Coding 
---
