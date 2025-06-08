import logo from './logo.svg';
import './Contact.css';
import { useState } from 'react';


// let count = 0;
function Contact() {

    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        phone: "",
        message: ""
    });



  const [errors, setErrors] = useState({

    fullName: false,
    email: false,
    phone: false,
    message: false

  });
    


    const [submitted, setSubmitted] = useState(false);


 


    const inputData = (e) => {

        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        setFormData({ ...formData, [fieldName]: fieldValue })
        console.log(formData);


    }

    function formSubmission() {

        let newErrors = {}


        if (formData.fullName == "") {

            newErrors.fullName = true;
            
        } else{

            newErrors.fullName = false;
        }

        if (formData.phone == "") {
            newErrors.phone = true;
           
        }else{

            newErrors.phone = false;
        }

        if (formData.message == "") {
            newErrors.message = true;
          
        }else{

            newErrors.message = false;
        }

        if (formData.email == "") {
            newErrors.email = true;
        
        }else{

           newErrors.email = false;
        }

        setErrors({...newErrors});

        let keys = Object.keys(errors)

        let errorPresentInForm = "No";

        for (let i = 0; i < keys.length; i++) {
            if (errors[keys[i]] === true) {
                errorPresentInForm = "Yes"
                

            };
        }

        if (errorPresentInForm == "No") {
            setSubmitted(true)
        }

    }


    function formReset() {

        setErrors({

            fullName: false,
            email: false,
            phone: false,
            message: false

        })


        setFormData({

            fullName: "",
            email: "",
            phone: "",
            message: ""

        })

        setSubmitted(false)


    }




    return (
        <div className="Contact">


            <div className="from">


                <label for="fname">Full Name:</label>
                <input type="text" id="fname" name="fullName" placeholder="Ypur Name" value={formData.fullName} onChange={inputData} />
                {errors.fullName ? <span className="errors">required field*</span> : null}

                <br /><br />

                <label for="email">Email Address:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={inputData} placeholder="Siddhika@gmail.com" />
                {errors.email ? <span className="errors">required field*</span> : null}

                <br /><br />

                <label for="lname">Phone Number:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={inputData} />
                {errors.phone ? <span className="errors">required field*</span> : null}

                <br /><br />

                <label for="lname">Message</label>
                <textarea id="message" name="message" rows="4" cols="30" value={formData.message} onChange={inputData} placeholder="Message"></textarea>
                {errors.message ? <span className="errors">required field*</span> : null}

                <br /><br />


                <input className='submit' type="submit" onClick={formSubmission} value="Submit" />
                <input className='reset' type="reset" onClick={formReset} value="Reset" />

                {submitted ? <span className="submitted">Form submitted successfully!</span> : null}

            </div>


        </div>
    );


}

export default Contact;

