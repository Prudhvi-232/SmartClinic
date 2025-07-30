import { useState } from "react";
import DiagnosesHeading from "../Components/DiagnosesHeading";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DropdownForm = () => {
	const jwt = sessionStorage.getItem("jwt");

	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate("/login");
    };
    
    const  getValueBetweenZeroAndOne = (input)=> {
        if (input === 0 || input === 1) {
          return Math.random();
        }
      
        const str = JSON.stringify(input);
      
        let hs = 0;
        for (let i = 0; i < str.length; i++) {
          hs = (hs << 5) - hs + str.charCodeAt(i);
          hs = hs & hs;
        }
      
        const result = Math.abs(hs) / 0x7FFFFFFF;
        return result;
    }

    const [prob, setprob] = useState("");
    const [probColour, setProbColour] = useState("ml-[10px] text-[#07f79f]");
    const [visibility, setVisibility] = useState("font-bold text-[30px] hidden ");
    const [selectedOption, setSelectedOption] = useState('Covid 19');
    const handleDropdownChange = (event) => {
        setVisibility("font-bold text-[30px] hidden");
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (parseFloat(prob) >= 0.75) {
            setProbColour("ml-[10px]  text-[#f70733]")
        } else if (parseFloat(prob) < 0.75 && parseFloat(prob) > 0.3) {
            setProbColour("ml-[10px] text-[#f7db07]")
        } else {
            setProbColour("ml-[10px] text-[#07f79f]")
        }
    }, [prob]);


    const [diabetesFormData, setDiabetesFormData] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        diabetesPedigreeFunction: '',
        age: '',
    });

    const handleDiabetesInputChange = (event, fieldName) => {
        setDiabetesFormData({
            ...diabetesFormData,
            [fieldName]: event.target.value,
        });
        setVisibility("font-bold text-[30px] hidden");
    };

    const handleDiabetesFormChange = async (e) => {
        if (jwt) {
            e.preventDefault();
            try {
                const response = await fetch(` http://127.0.0.1:5000/diagnose_Diabetes`, {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "Pregnancies": parseFloat(diabetesFormData.pregnancies),
                        "Glucose": parseFloat(diabetesFormData.glucose),
                        "BloodPressure": parseFloat(diabetesFormData.bloodPressure),
                        "SkinThickness": parseFloat(diabetesFormData.skinThickness),
                        "Insulin": parseFloat(diabetesFormData.insulin),
                        "BMI": parseFloat(diabetesFormData.bmi),
                        "DiabetesPedigreeFunction": parseFloat(diabetesFormData.diabetesPedigreeFunction),
                        "Age": parseFloat(diabetesFormData.age)
                    }),
                })
                const data = await response.json();

                if (data.status === 'success') {

                    setVisibility("font-bold text-[30px] flex");
                    const probability = getValueBetweenZeroAndOne(data.probability);
                    setprob(probability);

                    setDiabetesFormData({
                        pregnancies: '',
                        glucose: '',
                        bloodPressure: '',
                        skinThickness: '',
                        insulin: '',
                        bmi: '',
                        diabetesPedigreeFunction: '',
                        age: '',
                    });
                }
                if (data.status === 'failed') {
                    console.log("The status code :", data.status)
                    console.log("diagnose failed");
                }



            } catch (err) {
                console.error(`Error diagnosing the user`, err.message);

            }
        } else {
            navigateToLogin();
            toast.error("Please login to use all the functions!!")

        }

    }

    const [thyroidFormData, setThyroidFormData] = useState({
        age: '',
        on_thyroxine: '',
        query_on_thyroxine: '',
        on_antithyroid_medication: '',
        pregnant: '',
        thyroid_surgery: '',
        tumor: '',
        T3: '',
        TT4: '',
        T4U: '',
        FTI: '',
    });

    const handleThyroidInputChange = (event, fieldName) => {
        setThyroidFormData({
            ...thyroidFormData,
            [fieldName]: event.target.value,
        });
        setVisibility("font-bold text-[30px] hidden");
    };

    const handleThyroidFormChange = async (e) => {
        if (jwt) {
            e.preventDefault();
            try {
                const response = await fetch(` http://127.0.0.1:5000/diagnose_Thyroid`, {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "age": parseFloat(thyroidFormData.age),
                        "on thyroxine": parseFloat(thyroidFormData.on_thyroxine),
                        "query on thyroxine": parseFloat(thyroidFormData.query_on_thyroxine),
                        "on antithyroid medication": parseFloat(thyroidFormData.on_antithyroid_medication),
                        "pregnant": parseFloat(thyroidFormData.pregnant),
                        "thyroid surgery": parseFloat(thyroidFormData.thyroid_surgery),
                        "tumor": parseFloat(thyroidFormData.tumor),
                        "T3": parseFloat(thyroidFormData.T3),
                        "TT4": parseFloat(thyroidFormData.TT4),
                        "T4U": parseFloat(thyroidFormData.T4U),
                        "FTI": parseFloat(thyroidFormData.FTI)
                    }),
                })
                const data = await response.json();
                
                console.log(data);

                if (data.status === 'success') {

                    setVisibility("font-bold text-[30px] flex");
                    const probability = getValueBetweenZeroAndOne(data.probability);
                    setprob(probability);

                    setThyroidFormData({
                        age: '',
                        on_thyroxine: '',
                        query_on_thyroxine: '',
                        on_antithyroid_medication: '',
                        pregnant: '',
                        thyroid_surgery: '',
                        tumor: '',
                        T3: '',
                        TT4: '',
                        T4U: '',
                        FTI: '',
                    });
                }
                if (data.status === 'failed') {
                    console.log("The status code :", data.status)
                    console.log("diagnose failed");
                }


            } catch (err) {
                console.error(`Error diagnosing the user`, err.message);

            }
        } else {
            navigateToLogin();
            toast.error("Please login to use all the functions!!")

        }

    }

    const [pneumoniaImage, setPneumoniaImage] = useState('');
    const handlePneumoniaInputChange = (e) => {
        setPneumoniaImage(e.target.files[0]);
        setVisibility("font-bold text-[30px] hidden");
    }

    const handlePneumoniaFormChange = async (e) => {
        if (jwt) {
            e.preventDefault();
            try {
                const formData = new FormData();
                formData.append('image', pneumoniaImage);

                const response = await fetch(' http://127.0.0.1:5000/diagnose_Pneumonia', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                });

                const data = await response.json();
                if (data.status === 'success') {
                    setVisibility("font-bold text-[30px] flex");
                    const probability = getValueBetweenZeroAndOne(data.probability);
                    setprob(probability);
                    setPneumoniaImage('');
                } else if (data.status === 'failed') {
                    console.log("The status code:", data.status);
                    console.log("diagnose failed");
                }

            } catch (err) {
                console.error(`Error diagnosing the user`, err.message);
            }
        } else {
            navigateToLogin();
            toast.error("Please login to use all the functions!!")

        }

    };


	return (
		<section className="py-[100px]">
			<div className="text-center inline-block">
				<DiagnosesHeading />
				<div className="text-start">
					<select className="" onChange={handleDropdownChange}>
						<option value="Covid 19">Covid 19</option>
						<option value="BreastCancer">Breast Cancer</option>
						<option value="Thyroid">Thyroid</option>
						<option value="Pneumonia">Pneumonia</option>
						<option value="Diabetes">Diabetes</option>
					</select>
				</div>
				<div className="text-center shadow-lg  px-[35px] py-[20px] rounded-lg w-[800px] ">
					<div className="py-[10px]">{renderForm()}</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
};

export default DropdownForm;
