# SmartClinic

Introducing a cutting-edge medical diagnostic website that harnesses the power of technology to revolutionize healthcare. This innovative platform seamlessly blends a user-friendly React frontend with the robust capabilities of Express.js on the backend to provide you with accurate disease predictions based on your medical reports using 5 specialized machine learning models.

### Live Demo: [SmartClinic Frontend](https://smartclinic.vercel.app/) 🌐
### Backend: [SmartClinic Backend](https://smartclinic-kd8h.onrender.com) 💻

## 🌟 Features

### 🤖 ML-Based Medical Diagnoses

-   *5 Specialized Machine Learning Models* for accurate disease predictions:
    -   Diabetes prediction
    -   Breast Cancer detection
    -   COVID-19 screening
    -   Pneumonia diagnosis
    -   Thyroid evaluation

## 🚀 Unlocking the Potential: Versatile Uses of SmartClinic

SmartClinic offers comprehensive medical diagnostic capabilities with these key benefits:

-   *Medical Symptom Assessment* - Input symptoms, medical history, and test results for disease identification, Get preliminary assessments quickly for better health understanding
-   *Remote Healthcare* - Access guidance when healthcare professionals aren't readily available, Receive lifestyle and treatment recommendations for chronic conditions
-   *Research & Data Collection* - Contribute to medical research and health trend identification
-   *24/7 Accessibility* - Access from anywhere with internet connection at any time

## 🌟 Additional Features

-   Comprehensive hospital directory for Lucknow region, Direct integration with Google Maps for navigation
-   Secure user authentication (JWT-based), User registration and login system, Password recovery functionality
-   Audio recording capabilities for medical consultations, Secure audio upload and storage system
-   Admin dashboard for user management and audio file management
-   Responsive design with Tailwind CSS and Smooth animations with Framer Motion

## 🛠 Technology Stack

### Frontend

-   *React 19.1.0* - Modern React with latest features
-   *Tailwind CSS* - Utility-first CSS framework
-   *Framer Motion* - Animation library

### Backend

-   *Node.js* with *Express.js* - Server-side runtime and framework
-   *MongoDB* with *Mongoose* - Database and ODM

### Machine Learning

-   *Python Flask* - ML model serving API
-   *Pickle/Joblib* - Pre-trained model loading (models developed separately and hosted on Hugging Face)
-   *NumPy* - Numerical computations
-   *OpenCV* - Image processing
-   *TensorFlow* - Deep learning model inference

## 📁 Project Structure


SmartClinic/
├── SmartClinic/                 # Frontend React Application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── styles/             # CSS and styling
│   │   └── utils/              # Utility functions
│   ├── public/
│   │   └── assets/             # Static images and icons
│   ├── package.json
│   └── vite.config.js
│
└── server/                      # Backend Services
    ├── Controllers/             # API route handlers
    ├── Models/                  # Database models
    ├── Routes/                  # API routes
    ├── Ml Models/              # Pre-trained ML models
    ├── uploads/                # File storage
    ├── utils/                  # Backend utilities
    ├── app.js                  # Express app configuration
    ├── server.js               # Main server file
    ├── app.py                  # Flask ML server
    └── package.json


## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   Python (v3.8 or higher)
-   MongoDB
-   npm or yarn

### Installation

1. *Clone the repository*

    bash
    git clone https://github.com/Prudhvi-232/SmartClinic.git
    cd SmartClinic
    

2. *Frontend Setup*

    bash
    cd SmartClinic
    npm install
    npm run dev
    

3. *Backend Setup*

    bash
    cd ../server
    npm install
    npm start
    

4. *Python Dependencies (for ML models)*

    bash
    pip install flask flask-cors numpy opencv-python tensorflow scikit-learn joblib
    

5. *Environment Configuration*

    Create a .env file in the server directory:

    env
    DATABASE=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    EMAIL_USER=your_email
    EMAIL_PASS=your_email_password
    PORT=5000
    

6. *Access the application*
    - Frontend: <http://localhost:5173>
    - Backend API: <http://localhost:5000>

## 🤖 Machine Learning Models

The platform uses several pre-trained models:

1. *Diabetes Model* (diabetes.pkl) - Predicts diabetes risk based on health parameters
2. *Breast Cancer Model* (Breast_Cancer_Model.pkl) - Detects breast cancer from medical data
3. *COVID-19 Model* (Covid2.h5) - Screens for COVID-19 using image analysis
4. *Pneumonia Model* (pneumonia_model.pkl) - Diagnoses pneumonia from chest X-rays
5. *Thyroid Model* (thyroid_model.pkl) - Evaluates thyroid function

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 🚀 Future Improvements

1. Add chatbot functionality
2. Add features such as appointment booking and doctor consultation
3. Expand the range of diseases and models used
4. Improve the scalability of the website
5. Host the backend on AWS or GCP


## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

-  [Prudhvi-232](https://github.com/Prudhvi-232)
-   [nidhishkureti](https://github.com/nidhishkureti)
-  [SiddharthPaladi](https://github.com/SiddharthPaladi)
