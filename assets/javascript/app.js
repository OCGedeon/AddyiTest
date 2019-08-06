// Heights Array
var quotation = '"';
var heights = [
    "3'1" + quotation,
    "3'2" + quotation,
    "3'3" + quotation,
    "3'4" + quotation,
    "3'5" + quotation,
    "3'6" + quotation,
    "3'7" + quotation,
    "3'8" + quotation,
    "3'9" + quotation,
    "3'10" + quotation,
    "3'11" + quotation,
    "4'1" + quotation,
    "4'2" + quotation,
    "4'3" + quotation,
    "4'4" + quotation,
    "4'5" + quotation,
    "4'6" + quotation,
    "4'7" + quotation,
    "4'8" + quotation,
    "4'9" + quotation,
    "4'10" + quotation,
    "4'11" + quotation,
    "5'1" + quotation,
    "5'2" + quotation,
    "5'3" + quotation,
    "5'4" + quotation,
    "5'5" + quotation,
    "5'6" + quotation,
    "5'7" + quotation,
    "5'8" + quotation,
    "5'9" + quotation,
    "5'10" + quotation,
    "5'11" + quotation,
    "6'1" + quotation,
    "6'2" + quotation,
    "6'3" + quotation,
    "6'4" + quotation,
    "6'5" + quotation,
    "6'6" + quotation,
    "6'7" + quotation,
    "6'8" + quotation,
    "6'9" + quotation,
    "6'10" + quotation,
    "6'11" + quotation,
    "7'1" + quotation,
    "7'2" + quotation,
    "7'3" + quotation,
    "7'4" + quotation,
    "7'5" + quotation,
    "7'6" + quotation,
    "7'7" + quotation,
    "7'8" + quotation,
    "7'9" + quotation,
    "7'10" + quotation,
    "7'11" + quotation,
    "8'1" + quotation,
    "8'2" + quotation,
    "8'3" + quotation,
    "8'4" + quotation,
    "8'5" + quotation,
    "8'6" + quotation,
    "8'7" + quotation,
    "8'8" + quotation,
    "8'9" + quotation,
    "8'10" + quotation,
    "8'11" + quotation
];
var statesSelect = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

var paymentHTML = '<div class="payment-section">' +
    '<div class="row">' +
    '<div class="col-75">' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-50">' +
    '<h3>Billing Address</h3>' +
    // '<label for="fname"><i class="fa fa-user"></i> Full Name</label>' +
    // '<input type="text" id="fname" name="firstname" placeholder="John Smith">' +
    '<label for="email"><i class="fa fa-envelope"></i> Email</label>' +
    '<input type="text" id="email" name="email" placeholder="john.smith@example.com">' +
    '<label for="adr"><i class="fa fa-address-card-o"></i> Address</label>' +
    '<input type="text" id="adr" name="address" placeholder="542 15th Street">' +
    '<label for="city"><i class="fa fa-institution"></i> City</label>' +
    '<input type="text" id="city" name="city" placeholder="San Francisco">' +
    '<div class="row">' +
    '<div class="col-50">' +
    '<label for="state">State</label>' +
    '<input type="text" id="state" name="state" placeholder="CA">' +
    '</div>' +
    '<div class="col-50">' +
    '<label for="zip">Zip</label>' +
    '<input type="text" id="zip" name="zip" placeholder="94118">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="col-50">' +
    '<h3>Payment</h3>' +
    '<label for="fname">Accepted Cards</label>' +
    '<div class="icon-container">' +
    '<i class="fa fa-cc-visa" style="color:navy;"></i>' +
    '<i class="fa fa-cc-amex" style="color:blue;"></i>' +
    '<i class="fa fa-cc-mastercard" style="color:red;"></i>' +
    '<i class="fa fa-cc-discover" style="color:orange;"></i>' +
    '<img src="./assets/images/SecurePaymentIcon.png" class="secure-pay" alt="Secure Payment" />' +
    '</div>' +
    // '<label for="cname">Name on Card</label>' +
    // '<input type="text" id="cname" name="cardname" placeholder="John Smith">' +
    '<label for="ccnum">Credit card number</label>' +
    '<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">' +
    '<label for="expmonth">Exp Month</label>' +
    '<input type="text" id="expmonth" name="expmonth" placeholder="September">' +
    '<div class="row">' +
    '<div class="col-50">' +
    '<label for="expyear">Exp Year</label>' +
    '<input type="text" id="expyear" name="expyear" placeholder="2018">' +
    '</div>' +
    '<div class="col-50">' +
    '<label for="cvv">CVV</label>' +
    '<input type="text" id="cvv" name="cvv" placeholder="352">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<input type="button" value="Book your appointment" class="choice-button" onclick="postPayment()">' +
    '<div id="third-party-pay">' +
    '<div id="apple-pay-div">' +
    '<img src="./assets/images/ApplePayIcon.png" class="apple-pay" alt="Apple Pay" />' +
    '</div>' +
    '<div id="paypal-pay-div">' +
    '<img src="./assets/images/PaypalIcon.png" class="paypal-pay" alt="Paypal Pay" />' +
    '</div>' +
    '<div id="google-pay-div">' +
    '<img src="./assets/images/GooglePayIcon.svg" class="google-pay" alt="Google Pay" />' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="col-25">' +
    '<div class="container">' +
    '<h4>Cart <span class="price" style="color:white"><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>' +
    // '<p><a href="#">Tuesday, August 6th 12pm - 3pm</a> <span class="price" style="color:white">$49</span></p>' +
    '<hr>' +
    '<p style="color:white">Total <span class="price" style="color:white"><b>$49</b></span></p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
    ;

var paymentHTMLTwo = '<div class="payment-section">' +
    '<div class="row">' +
    '<div class="col-75">' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-50">' +
    '<h3>Billing Address</h3>' +
    '<label for="fname"><i class="fa fa-user"></i> Full Name</label>' +
    '<input type="text" id="fname" name="firstname" placeholder="John Smith">' +
    '<label for="email"><i class="fa fa-envelope"></i> Email</label>' +
    '<input type="text" id="email" name="email" placeholder="john.smith@example.com">' +
    '<label for="adr"><i class="fa fa-address-card-o"></i> Address</label>' +
    '<input type="text" id="adr" name="address" placeholder="542 15th Street">' +
    '<label for="city"><i class="fa fa-institution"></i> City</label>' +
    '<input type="text" id="city" name="city" placeholder="San Francisco">' +
    '<div class="row">' +
    '<div class="col-50">' +
    '<label for="state">State</label>' +
    '<input type="text" id="state" name="state" placeholder="CA">' +
    '</div>' +
    '<div class="col-50">' +
    '<label for="zip">Zip</label>' +
    '<input type="text" id="zip" name="zip" placeholder="94118">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="col-50">' +
    '<h3>Payment</h3>' +
    '<label for="fname">Accepted Cards</label>' +
    '<div class="icon-container">' +
    '<i class="fa fa-cc-visa" style="color:navy;"></i>' +
    '<i class="fa fa-cc-amex" style="color:blue;"></i>' +
    '<i class="fa fa-cc-mastercard" style="color:red;"></i>' +
    '<i class="fa fa-cc-discover" style="color:orange;"></i>' +
    // '<img src="./assets/images/ApplePayIcon.png" class="apple-pay" alt="Apple Pay" />' +
    // '<img src="./assets/images/PaypalIcon.png" class="paypal-pay" alt="Paypal Pay" />' +
    '</div>' +
    // '<label for="cname">Name on Card</label>' +
    // '<input type="text" id="cname" name="cardname" placeholder="John Smith">' +
    '<label for="ccnum">Credit card number</label>' +
    '<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">' +
    '<label for="expmonth">Exp Month</label>' +
    '<input type="text" id="expmonth" name="expmonth" placeholder="September">' +
    '<div class="row">' +
    '<div class="col-50">' +
    '<label for="expyear">Exp Year</label>' +
    '<input type="text" id="expyear" name="expyear" placeholder="2018">' +
    '</div>' +
    '<div class="col-50">' +
    '<label for="cvv">CVV</label>' +
    '<input type="text" id="cvv" name="cvv" placeholder="352">' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<input type="submit" value="Book your appointment" class="choice-button" disabled>' +
    '</div>' +
    '</div>' +
    '<div class="col-25">' +
    '<div class="container">' +
    '<h4>Cart <span class="price" style="color:white"><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>' +
    '<p><a href="#">Tuesday, August 6th 3pm - 6pm</a> <span class="price" style="color:white">$49</span></p>' +
    '<hr>' +
    '<p style="color:white">Total <span class="price" style="color:white"><b>$49</b></span></p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
    ;
// Questions
var questionsJSON = [
    {
        question: "1. Let's get to know you",
        questionSub: "We respect your data & privacy. We've made it easy to understand how your information is handled to provide a secure and enjoyable experience. (DocTalkGo Privacy Policy)",
        inputType: "choice",
        options: ["agree", false],
        optionsText: ["I Agree & understand, let's get started!", "Terms of Service"],
        links: [false, "showPrivacyPolicy()"],
        name: "privacy",
        validation: false,
        correctAnswer: "agree"
    },
    // {
    //     question: "2. Let's start with your name:",
    //     inputType: "text",
    //     placeholder: "(i.e. John Smith)",
    //     name: "name",
    //     validation: "name"
    // },
    {
        question: "2. Has there been a decrease in your level of sexual desire?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "decreasedDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "3. In the past, was your level of sexual desire good and satisfying to you?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "pastDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "4. How long have you been experiencing symptoms of low sexual desire or interest?",
        inputType: "choice",
        options: ["<3", "3-6", "6-12", ">12"],
        optionsText: ["Less than 3 months", "3-6 months", "6-12 months", "More than 12 months"],
        links: [false, false, false, false],
        name: "decreasedDesireDuration",
        validation: false
    },
    {
        question: "5. Are you bothered by your decrease of sexual desire or interest?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "botheredDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "6. Would you like to increase your level of sexual desire or interest?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "increaseDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "7. What is your birth date?",
        inputType: "date",
        name: "dob",
        validation: false
    },
    {
        question: "8. What is your height?",
        questionSub: "type and select ft' in&quot; from list",
        inputType: "datalist",
        options: heights,
        optionsText: heights,
        name: "height",
        validation: false
    },
    {
        question: "9. What is your weight?",
        questionSub: "in pounds",
        placeholder: "(i.e. 250)",
        inputType: "text",
        name: "weight",
        validation: false
    },
    {
        question: "10. Please identify your birth sex.",
        inputType: "choice",
        options: ["male", "female"],
        optionsText: ["Male", "Female"],
        links: [false, false],
        name: "sex",
        validation: false,
        correctAnswer: "female"
    },
    {
        question: "11. When was your last gynecology exam?",
        inputType: "choice",
        options: ["<6", "6-12", ">12"],
        optionsText: ["Less than 6 months ago", "6 - 12 months ago", "More than 12 months ago"],
        links: [false, false, false],
        name: "lastGynecology",
        validation: false
    },
    {
        question: "12. Have you gone through menopause?",
        questionSub: "more than 12 months since your last menstrual cycle",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "postMenopausal",
        validation: false,
        correctAnswer: "no"
    },
    {
        question: "13. Are you currently pregnant?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "pregnant",
        validation: false
    },
    {
        question: "14. Do you drink any alcohol",
        inputType: "choice",
        options: ["none", "1-2", "3-4", "4-6", "7+"],
        optionsText: ["I don't drink alcohol", "1-2 drinks per week", "3-4 drinks per week", "4-6 drinks per week", "7+ drinks per week"],
        links: [false, false, false, false, false],
        name: "drinks",
        validation: false
    },
    {
        question: "15. Which of the factors below (if any) do you feel may be contributing to your current decrease in sexual desire?",
        questionSub: "Select any and all that apply",
        inputType: "checkbox",
        options: ["none", "medical", "substance", "child", "other", "partnerProblems", "partnerDissatisfied", "stress"],
        optionsText: ["None", "An operation, depression, injuries, or other medical condition", "Medications, drugs, or alcohol you are currently taking.", "Pregnancy, recent childbirth, or menopausal symptoms", "Other sexual issues you may be having (pain, decreased arousal, or orgasm)", "Your partner’s sexual problems.", "Dissatisfaction with your relationship or partner", "Stress or fatigue"],
        links: [false, false, false, false, false, false, false, false],
        name: "factors",
        validation: false
    },
    {
        question: "16. Do you have any sexual health symptoms?",
        questionSub: "Could include abnormal menstruation, vaginal odor, discharge, itching or burning.",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "sexualHealth",
        validation: false
    },
    {
        question: "17. Please add any prior medical conditions:",
        questionSub: "i.e. Hearing loss",
        placeholder: "Type your answer here",
        inputType: "text",
        name: "priorConditions",
        validation: false
    },
    {
        question: "18. Please add any current medications:",
        questionSub: "Please include prescription as well as over-the-counter medications and supplements.",
        placeholder: "Type your answer here",
        inputType: "text",
        name: "currentMedications",
        validation: false
    },
    {
        question: "19. Please add any allergies to medications:",
        placeholder: "Type your answer here",
        inputType: "text",
        name: "allergies",
        validation: false
    },
    {
        question: "20. To confirm, do you have any liver problems?",
        questionSub: "Including, but not limited to, viral hepatitis, autoimmune hepatitis, cirrhosis, genetic liver disorders, liver or bile duct cancer, chronic alcohol abuse, or nonalcoholic fatty liver disease.",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "liverDisease",
        validation: false
    },
    {
        question: "21. To confirm, do you have low blood pressure or a condition that may cause low blood pressure?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "bloodPressure",
        validation: false
    },
    {
        question: "22. To confirm, are you currently taking any of the following medications?",
        questionSub: "You may select more than one",
        inputType: "checkbox",
        options: ["none", "hiv", "hepC", "heart", "depression", "infection"],
        optionsText: ["None of these", "Certain medicines used to treat HIV-1 infection: Amprenavir, ritonavir (NORVIR), indinavir (CRIXIVAN), atazanavir (REYATAZ), saquinavir (INVIRASE), fosamprenavir (LEXIVA), nelfinavir (VIRACEPT)", "Certain medicines used to treat Hepatitis C infection: Boceprevir (VICTRELIS), telaprevir", "Certain medicines used to treat high blood pressure, chest pain (angina), or other heart problems: Diltiazem (CARDIZEM®, CARDIZEM CD, CARDIZEM LA, CARTIA XT, DILT CD, DILTZAC, TAZTIA XT, Tiazac), verapamil (CALAN, CALAN SR, COVERA-HS, Verelan, Verelan PM)", "Nefazodone: A medicine used to treat depression", "Fluconazole or Ketoconazole: Medicines used to treat fungal infection"],
        links: [false, false, false, false, false, false],
        name: "medications",
        validation: false
    },
    {
        question: "23. Have you ever had counseling or treatment for a mental health disorder?",
        questionSub: "Choose as many as you like",
        inputType: "checkbox",
        options: ["depression", "anxiety", "none", "other"],
        optionsText: ["Depression", "Anxiety", "I have not been treated for a mental health disorder", "Other"],
        links: [false, false, false, false],
        name: "mentalHealth",
        validation: false
    },
    {
        question: "24. What is the best phone number at which to contact you?",
        inputType: "text",
        placeholder: "(i.e. 415-867-5309)",
        name: "phone",
        validation: "phone"
    },
    {
        question: "25. What is the best email address at which to contact you?",
        inputType: "text",
        placeholder: "(i.e. john.smith@example.com)",
        name: "email",
        validation: "email"
    },
    // {
    //     question: "24. Please add any operations or surgeries:",
    //     placeholder: "Type your answer here",
    //     inputType: "text",
    //     name: "priorOperations",
    //     validation: false
    // },
    // {
    //     question: "25. What type of health insurance do you have?",
    //     inputType: "radio",
    //     options: ["united", "medicare", "none", "idk"],
    //     optionsText: ["United Health Group, Anthem, Aetna, Humana, etc", "Medicare, Medicaid, etc", "I don't have insurance", "I don't know"],
    //     links: [false, false, false, false],
    //     name: "insuranceCarrier",
    //     validation: false
    // },
    // {
    //     question: "26. Is there anything else you would like your doctor to know?",
    //     placeholder: "Type your answer here",
    //     inputType: "text",
    //     name: "additionalInfo",
    //     validation: false
    // }
];
var privacyPolicy = '<h3>Terms of Service</h3>' +
    '<h4 class="align-left">March 10, 2014</h4>' +
    '<h4 class="align-left">Notice for customers nationwide – you are entering into an agreement with doctalkgo.com.</h4>' +
    '<ul class="align-left" style="list-style-type:disc;margin-left:20px;color:white;">' +
    '<li><p class="privacy-topic"><strong>Use of the App and Website.</strong> doctalkgo.com…, A California Corporation (“<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”), all doing business as doctalkgo.com, operate a doctalkgo.com website. Through the Website we offer online telehealth service (the “Service”) that, when clinically appropriate, lets men and women nationwide get care from our doctors. If you request to use the Service and our doctors consider it appropriate, we will give you a prescription and send it to a pharmacy to fulfill on your behalf. By completing a doctor telehealth consult, you agree to be bound by these Terms of Use, the Consent to Telehealth, and the Privacy Policy that appear on Website. If you do not wish to be bound by these Terms of Use, you may not use our services or request for services.</p></li>' +
    '<li><p class="privacy-topic"><strong>Website Content.</strong> Other than the personalized doctor consult received, or the personalized nutritional advice we give you during a consult, you should not consider content on the Website to be medical advice.</p></li>' +
    '<li><p class="privacy-topic"><strong>Ownership.</strong> The Website and their entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection, and arrangement thereof), are owned or used under license by doctalkgo.com and are protected by United States and international copyright, trademark, trade secret, and other intellectual property or proprietary rights laws. These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on our Website except as generally and ordinarily permitted through the Website according to these Terms of Use. You must not access or use for any commercial purposes any part of the Website.</p></li>' +
    '<li><p class="privacy-topic"><strong>Trademarks.</strong> Certain names, logos, and other materials displayed on the Website may constitute trademarks, trade names, service marks or logos (“Marks“) of doctalkgo.com or other entities. You are not authorized to use any such Marks without the express written permission of doctalkgo.com. Ownership of all such Marks and the goodwill associated therewith remains with us.</p></li>' +
    '<li><p class="privacy-topic"><strong>Right to modify.</strong> We may at our sole discretion change, add, or delete portions of these Terms of Use at any time on a going-forward basis. Continued use of the Website following notice of any such changes will indicate your acknowledgment of such changes and agreement to be bound by the revised Terms of Use, inclusive of such changes.</p></li>' +
    '<li><p class="privacy-topic"><strong>DISCLAIMER OF WARRANTIES.</strong> YOU EXPRESSLY AGREE THAT USE OF THE WEBSITE IS AT YOUR SOLE RISK. WE PROVIDE THE WEBSITE ON AN “AS IS” AND “AS AVAILABLE” BASIS. <strong><a href="https://www.doctalkgo.com/" class="dtg-link" target="_blank">DOCTALKGO.COM</a></strong> EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, NON-INFRINGEMENT, TITLE, OPERABILITY, CONDITION, QUIET ENJOYMENT, VALUE, ACCURACY OF DATA, AND SYSTEM INTEGRATION.</p></li>' +
    '<li><p class="privacy-topic"><strong>LIMITATION OF LIABILITY.</strong> YOU UNDERSTAND THAT TO THE EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT WILL <strong><a href="https://www.doctalkgo.com/" class="dtg-link" target="_blank">DOCTALKGO.COM</a></strong> OR ITS OFFICERS, EMPLOYEES, DIRECTORS, PARENTS, SUBSIDIARIES, AFFILIATES, AGENTS OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF REVENUES, PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OF THE APP, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE AND STRICT LIABILITY), WARRANTY, STATUTE OR OTHERWISE. To the extent that we may not, as a matter of applicable law, disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of our liability will be the minimum permitted under such applicable law.</p></li>' +
    '<li><p class="privacy-topic"><strong>Indemnification.</strong> You agree to indemnify, defend, and hold harmless DOCTALKGO.COM, its officers, directors, employees, agents, subsidiaries, affiliates, licensors, and suppliers, harmless from and against any claim, actions, demands, liabilities, and settlements, including, without limitation, reasonable legal and accounting fees (“Claims”), resulting from, or alleged to result from, your violation of these Terms of Use.</p></li>' +
    '<li><p class="privacy-topic"><strong>Geographical Restrictions.</strong> You may only use the Website from a device located in the states in which we operate. DOCTALKGO.COM makes no representation that the Website is appropriate or available for use in locations outside the states in which we operate.</p></li>' +
    '<li><p class="privacy-topic"><strong>Miscellaneous.</strong></p></li>' +
    '</ul>' +
    '<p class="privacy-topic align-left">These Terms of Use and your use of the App or Website shall be governed by the laws of the State of California, without giving effect to the principles of conflict of laws. Any dispute arising under or relating in any way to these Terms of Use will be resolved exclusively by final and binding arbitration in Los Angeles, California under the rules of the American Arbitration Association, except that either party may bring a claim related to intellectual property rights, or seek temporary and preliminary specific performance and injunctive relief, in any court of competent jurisdiction, without the posting of bond or other security. The parties agree to the personal and subject matter jurisdiction and venue of the courts located in Los Angeles, California, for any action related to these Terms of Use.</p>' +
    '<p class="privacy-topic align-left">You understand that by checking the “I Agree” box for these Terms of Use, the Consent to Telehealth and Privacy Policy, when they are presented to you on the Website you are agreeing to these Terms of Use and the Consent to Telehealth and Privacy Policy and that such action constitutes a legal signature. No waiver by DOCTALKGO of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of DOCTALKGO to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision. If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.' +
    '<p class="privacy-topic align-left">The Digital Millennium Copyright Act of 1998 (the “DMCA“) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that materials appearing on the App or Website infringe your copyright, you (or your agent) may send us a notice requesting that the material be removed, or access to it blocked. In addition, if you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the DMCA permits you to send us a counter-notice. Notices and counternotices must meet statutory requirements imposed by the DMCA. One place to find more information is the U.S. Copyright Office Web site, currently located at https:// www.loc.gov/copyright. Any written Notification of Claimed infringement should comply with Title 17, United States Code, Section 512(c)(3)(A) and should be provided in writing to Director, doctalkgo.com. dba: doctalkgo.com– 1141 North Brand Boulevard, Suite 306, Glendale, CA, 91202'
    +
    '<p class="privacy-topic align-left">1. Introduction. Welcome to DocTalkGo 1.1. Effective Date. The effective date of this Agreement is May 1, 2017. 1.2. Agreement. DocTalkGo (“DocTalkGo“ or “Company“) recommends that you read the following terms and conditions carefully. By accessing or using the DocTalkGo website, the DocTalkGo Service, including any software applications made available by DocTalkGo (together, the “Website“ or “Service“), however accessed or used, you agree to be bound by these terms (the “Terms of Service“ or the “Agreement“). By clicking “I Agree”, you agree to be bound by this Agreement, constituting a legally binding agreement between DocTalkGo and you concerning your use of the Service. We encourage you to print the Agreement or save it to your computer for reference. 1.3. Separate Privacy Policy. By using the Service, you represent and warrant that you have read and understood, and agree to be bound by, this Agreement and DocTalkGo Privacy Policy (the “Privacy Policy“), which is incorporated into this Agreement by reference. The Privacy Policy is available at https://www.doctalkgo.com/privacy-policy/. 1.4. NOT FOR EMERGENCIES. THE SERVICE IS NOT FOR USE IN MEDICAL OR MENTAL HEALTH EMERGENCIES OR OTHER URGENT SITUATIONS. IF YOU THINK YOU MAY HAVE A MEDICAL OR MENTAL HEALTH EMERGENCY, CALL YOUR DOCTOR OR 911 IMMEDIATELY. 1.5. No Permission Without Agreement. If you do not understand this Agreement, or do not agree to be bound by it or the Privacy Policy, you may not access or use the Service, and you must immediately cease accessing or using the Service. 1.6. Arbitration and Remedies. These terms contain a mandatory arbitration of disputes provision that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or class actions, and also limits the remedies available to you in the event of a dispute. See Section 22 (Dispute Resolution) for full details.'
    +
    '<p class="privacy-topic align-left">2. Privacy Policy. By using the Service, you consent to the collection and use of certain information about you, as specified in the Privacy Policy discussed in Section 1.3 (Separate Privacy Policy). DocTalkGo encourages users of the Service to frequently check the Privacy Policy for changes.'
    +
    '<p class="privacy-topic align-left">3. Changes to Agreement and Privacy Policy. Internet technology and the applicable laws, rules, and regulations change frequently. DocTalkGo reserves the right to change this Agreement and its Privacy Policy at any time upon notice to you (including by posting a new version, or sending you a change notice). It is your responsibility to review this Agreement and the Privacy Policy periodically. If at any time you find either this Agreement or the Privacy Policy unacceptable, you must immediately cease accessing Service. Unless DocTalkGo obtains your express consent, any revised Privacy Policy will apply only to information collected by DocTalkGo after the revised Privacy Policy takes effect, and not to information collected under any earlier versions of the Privacy Policy.'
    +
    '<p class="privacy-topic align-left">4. Eligibility. 4.1. By accessing and/or using the Service, including by doing so after accessing this Agreement, you represent and warrant that you are either (1) at least 18 years old, and are otherwise legally qualified to enter into and form contracts under applicable law or (2) between the ages of 13 and 18 and have submitted a signed parental and/or guardian consent form to DocTalkGo. 4.2. Corporate Use. If you are using the Service on behalf of a company, you further represent and warrant that you are authorized to act and enter into contracts on behalf of that company.'
    +
    '<p class="privacy-topic align-left">5. Telehealth Platform; Acceptance Required. Without limitation, you agree that DocTalkGo is merely a telehealth platform, and that you use the Service at your own risk and pursuant to Section 10 (Assumption of Risk; Release). 5.1. No Duty of Care Until Accepted by Doctor. You understand and agree that DocTalkGo and its team of doctors will take responsibility for your care only after you have been accepted as a patient by DocTalkGo. In order to be accepted as a patient, (i) you must complete and answer all the required health questions on the new patient form, the renewal form, and the consent form, as applicable (collectively, the “Patient Forms”; (ii) you must provide a valid driver’s license number to establish you are of legal age; (iii) a doctor must review your requests for treatment, your Patient Forms, any photographs submitted by you, and/or information received from a video, telephonic, or Internet chat consultation (each, a “Teleconsultation”); (iv) the doctor must determine you are a good candidate for the receipt of telehealth services. You understand and agree that the duty of care does not arise at the point of your submission of Patient Forms or other inquiry, at the point of payment, or during a Teleconsultation, but at the point at which a doctor accepts a duty of care. 5.2. Right of Refusal. You understand and agree that any DocTalkGo doctor has the right to refuse to take responsibility for your care if said doctor determines, in the doctor’s exclusive professional judgment, that you are not a proper candidate for the Service. 5.3. Website Material Is Not Medical Advice. You understand and agree that, except for any communications from a DocTalkGo doctor directly to you regarding your personal health, no information provided on the Website or through the Service constitutes professional medical advice and is intended for informational purposes only. You agree that you will never disregard professional medical advice or delay seeking it due to something you have read on the Website. 5.4. Risks Inherent in Teleconsultations. You understand and agree that important differences exist between the telehealth model of care and traditional healthcare. By using a telehealth platform, you are assuming increased responsibility for your own health and treatment option, including the responsibility to apply general information gleaned from the Website and other Internet sources to your personal health and symptoms. You understand and agree that, by choosing to obtain a Teleconsultation, you are assuming all risks of foregoing an in- person, physical consultation, including a physical exam that could identify a medical condition that requires further investigation or immediate treatment. 5.5. Risks Inherent in Medication and Supplements. All medicines prescribed or recommended by a DocTalkGo doctor pose risks of serious side effects and adverse events, including severe allergic reaction, permanent disability, and death. You understand and agree that it is your responsibility to inform all your health care providers of any allergies, past symptoms, your history with tobacco, drugs, or alcohol, or medications or supplements taken by you and to make an informed decision regarding the risks and benefits of any medicine or supplements being prescribed. 5.6. Confidentiality of Medical Information. Federal and State law govern the confidentiality of medical information.'
    +
    '<p class="privacy-topic align-left">6. License. Subject to your compliance with these Terms of Service, DocTalkGo grants you a non-exclusive, non-sublicensable, revocable as stated in this Agreement, non-transferable license to access the Website, and to use the Service. No part of the Service, including the Website, may be reproduced, duplicated, copied, modified, sold, resold, distributed, transmitted, or otherwise exploited for any commercial purpose without the prior express written consent of DocTalkGo. All rights not expressly granted in this Agreement are reserved by DocTalkGo. Without limitation, this Agreement grants you no rights to the intellectual property of DocTalkGo or any other party, except as expressly stated in this Agreement. The license granted in this section is conditioned on your compliance with this Agreement. Your rights under this section will immediately terminate if, in the sole judgment of DocTalkGo, you have breached any provision of this Agreement. 7. Software Updates. DocTalkGo reserves the right, in its sole discretion, to update, modify, or remove the features, functionality, or other aspects of its Website and Service at any time. 8. DocTalkGo Practice. DocTalkGo doctors, nutritionists, and other healthcare professionals are part of the DocTalkGo practice. 9. No Reliance on Third Party Content. Opinions, advice, statements, or other information made available through the Service by third parties are those of their respective authors, and should not necessarily be relied upon. Those authors are solely responsible for their content. DocTalkGo does not: (i) guarantee the accuracy, completeness, or usefulness of any third-party information accessible on or through the Service; or (ii) adopt, endorse, or accept responsibility for the accuracy or reliability of any opinion, advice, or statement made by a third party through the Service. Under no circumstances will DocTalkGo be responsible for any loss or damage resulting from your reliance on information or other content posted through the Service transmitted to or by any third party.'
    +
    '<p class="privacy-topic align-left">10. Assumption of Risk; Release. You knowingly and freely assume all risk when using the Service. You, on behalf of yourself, your personal representatives, and your heirs, voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify DocTalkGo and its stockholders, officers, directors, employees, agents, affiliates, consultants, representatives, sublicensees, successors, and assigns (collectively, the “Company Parties“) from any and all claims, actions, or losses for bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or other damages or harm, whether to you or to third parties, that may result from your use of the Service.'
    +
    '<p class="privacy-topic align-left">11. User Account, Accuracy, and Security. 11.1. User Account. To use the Service, you must register and create a user account (“Account“). During the Account creation process, you will be asked to provide information that personally identifies you (“Personal Information“). 11.2. Patient Form and Account Information Accuracy. You represent and warrant that all user information you provide in connection with any Patient Form, your Account and your use of the Service is current, complete, and accurate, and you agree that you will update that information as necessary to maintain its completeness and accuracy by updating your personal Profile. You agree that you will not submit any fake content (including without limitation any Account, username, likeness, or Profile) to willfully and credibly impersonate another person, whether actual or fictitious. As a non-exhaustive example, you agree that you will not upload a Profile image that is not your likeness, or provide inaccurate information about your health condition. If DocTalkGo believes in its sole discretion that the information you provide is not current, complete, or accurate, DocTalkGo has the right to refuse you access to the Service, or to terminate or suspend your access at any time, or both. For additional information, see the Section concerning “User Ability to Access, Update, and Correct Personal Information” in DocTalkGo Privacy Policy. 11.3. No Pseudonyms. You must use your real name on DocTalkGo; pseudonyms are not allowed. Any use of a pseudonym violates Section 11.2 (Patient Form and Account Information Accuracy) and is cause for suspension or deletion of your Account. 11.4. Account Security. You will also be asked to provide a username, password, and possibly other information to secure your Account. You are entirely responsible for maintaining the confidentiality of your password. You may not use the username or password of any other person, nor may you share your username and password, nor may you circumvent any authentication mechanism requiring the entry of usernames, passwords, or any other information to gain unauthorized access to the Service. You agree to notify DocTalkGo immediately of any unauthorized use of your Account. DocTalkGo shall not be liable for any loss that you incur because of someone else using your Account, either with or without your knowledge. You may be held liable for any losses incurred by DocTalkGo, its affiliates, officers, directors, employees, consultants, agents, and representatives due to someone else’s use of your Account.'
    +
    '<p class="privacy-topic align-left">12. Interactions with Doctors. DocTalkGo facilitates communication between doctors and patients. You are solely responsible for your interactions with DocTalkGo doctors and for providing all necessary information to them. In no event shall DocTalkGo be liable for indirect, special, incidental, or consequential damages arising out of or relating to any user’s conduct in connection with such user’s use of the Service, including, without limitation, bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or any other damages resulting from communications or meetings between users. 13. Consent to Receive Electronic Communications from Company. By registering for the Service and providing your name, email, postal or residential address, and/or phone number through the Service, you expressly consent to receive electronic and other communications from DocTalkGo, over the short term and periodically, including email and short-message service (“SMS” or “text message”) communications. These communications will be about the Service, new product offers, promotions, and other matters. You may opt out of receiving electronic communications at any time by following the unsubscribe instructions contained in each communication, or by sending an email to unsubscribe@DocTalkGo.com. You agree that these electronic communications satisfy any legal requirements that communications or notices to you be in writing. 14. Consent to Receive Electronic Communications from Users. Without limitation, by registering for the Service and providing your name, email, postal or residential address, and/or phone number through the Service, you consent to receive electronic communications, including email, instant messages, video conferencing, and other personal messages from other users of the Service.'
    +
    '<p class="privacy-topic align-left">15. Payments. 15.2. You acknowledge and agree that DocTalkGo reserves the right to charge for access to the Service, including for Teleconsultations. DocTalkGo reserves the right, in its sole discretion, to change the fees and charges in effect, or to add new fees and charges, by posting such changes or providing notice to you. 15.3. All fees and charges are nonrefundable, and there are no refunds. Due to the nature of the Service, DocTalkGo cannot accept any return. 15.4. You agree to timely pay for all products ordered by you and other charges incurred by you through the Service. By using the Service, you authorize DocTalkGo and/or its payment processor to charge DocTalkGo fees to the payment method you provide, in addition to applicable sales and other taxes.'
    +
    '<p class="privacy-topic align-left">16. Third Party Websites. The Service may be linked with the websites of third parties (“Third Party Websites“), some of whom may have established relationships with DocTalkGo and some of whom may not. DocTalkGo does not have control over the content and performance of Third Party Websites. DocTalkGo has not reviewed, and cannot review or control, all of the material, including computer software or other goods or services, made available on Third Party Websites. Accordingly, DocTalkGo does not represent, warrant, or endorse any Third Party Websites, or the accuracy, currency, content, fitness, lawfulness, or quality of the information, material, goods, or services available through Third Party Websites. DocTalkGo disclaims, and you agree to assume, all responsibility and liability for any damages or other harm, whether to you or to third parties, resulting from your use of Third Party Websites.'
    +
    '<p class="privacy-topic align-left">17. Prohibited Uses. DocTalkGo imposes certain restrictions on your use of the Service. Any violation of this section may subject you to civil and/or criminal liability. The following are expressly prohibited: 17.1. harassing or stalking any person, or contacting any person who has requested not to be contacted 17.2. providing false, misleading, or inaccurate information to DocTalkGo or any other person in connection with the Service 17.3. impersonating, or otherwise misrepresenting affiliation, connection, or association with, any person or entity 17.4. modifying or changing the placement and location of any advertisement posted through the Service 17.5. harvesting or otherwise collecting information about users, including email addresses and phone numbers 17.6. without express written permission from DocTalkGo, using or attempt to use any engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders, robots, avatars, or intelligent agents) to harvest or otherwise collect information from the Service for any use, including without limitation use on Third Party Websites 17.7. accessing content or data not intended for you, or logging into a server or account that you are not authorized to access 17.8. attempting to probe, scan, or test the vulnerability of the Service, or any associated system or network, or breaching security or authentication measures without proper authorization 17.9. interfering or attempt to interfere with the use of the Service by any other user, host, or network, including (without limitation) by submitting malware or exploiting software vulnerabilities 17.10. using the Service to send unsolicited email, including without limitation promotions or advertisements for products or services 17.11. forging, modifying, or falsifying any network packet or protocol header or metadata in any connection with, or transmission to, the Service (for example, SMTP email headers, HTTP headers, or Internet Protocol packet headers).'
    +
    '<p class="privacy-topic align-left">17.12. while using the Service, using ad-blocking or other content-blocking software, browser extensions, or built-in browser options designed to hide, block, or prevent the proper display of online advertising 17.13. attempting to modify, reverse-engineer, decompile, disassemble, or otherwise reduce or attempt to reduce to a human-perceivable form any of the source code used by the Company Parties in providing the Service, including without limitation any fraudulent effort to modify software or any other technological mechanism for measuring the number of impressions generated by individual content and/or the overall Service to determine and/or audit advertising revenues and payments, if applicable 17.14. creating additional accounts to promote your (or another’s) business, or causing others to do so 17.15. paying anyone for interactions on the Service 18. Intellectual Property.'
    +
    '<p class="privacy-topic align-left">18.1. Compliance with Law. 18.1.1. You represent and warrant that, when using the Service, you will obey all applicable laws and respect the intellectual property rights of others. Your use of the Service is at all times governed by and subject to copyright and other intellectual property laws. You agree not to upload, post, transmit, display, perform, or distribute any content, information, or other materials in violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. 18.1.2. You represent and warrant that you are the sole and exclusive owner of any User Content that you submit through the Service. You shall be solely responsible for any violations of any laws and for any infringements of third- party rights caused by your use of the Service. DocTalkGo users bear the sole burden of proving that content, information, or other materials do not violate any laws or third-party rights. 18.2. Trademarks. DocTalkGo and the DocTalkGo logo (collectively, the “Company Marks“) are trademarks or registered trademarks of DocTalkGo. Other trademarks, service marks, graphics, logos, and domain names appearing anywhere on, through, or in connection with the Service may be the trademarks of third parties. Neither your use of the Service nor this Agreement grant you any right, title, or interest in, or any license to reproduce or otherwise use, the Company Marks or any third-party trademarks, service marks, graphics, logos, or domain names. You agree that any goodwill in the Company Marks generated as a result of your use of the Service will inure to the benefit of DocTalkGo, and you agree to assign, and do assign, all such goodwill to DocTalkGo. You shall not at any time, nor shall you assist others to, challenge DocTalkGo right, title, or interest in, or the validity of, the Company Marks. 18.3. Copyrighted Materials; Copyright Notice. All content and other materials available through the Service, including without limitation the DocTalkGo logo, design, text, graphics, and other files, and their selection, arrangement, and organization, are either owned by DocTalkGo or are the property of DocTalkGo licensors and suppliers. Except as explicitly provided, neither your use of the Service nor this Agreement grant you any right, title, or interest in any such materials. 18.4. DMCA Policy. 18.4.1. As DocTalkGo asks others to respect DocTalkGo intellectual property rights, DocTalkGo respects the intellectual property rights of others. DocTalkGo follows the notice and takedown procedures in the Digital Millennium Copyright Act (“DMCA“). 18.4.2. If you believe content located on or linked to by the Service violates your copyright, please immediately notify DocTalkGo by emailed DMCA takedown notice (“Infringement Notice“), providing the information described below. If DocTalkGo takes action in response to an Infringement Notice, it will make a good faith attempt to contact the party who made the content available at the most recent email address that party provided to DocTalkGo. 18.4.3. Under the DMCA, you may be held liable for damages based on material misrepresentations in your Infringement Notice. You must also make a good-faith evaluation of whether the use of your content is a fair use; fair uses are not infringing. (See 17 U.S.C. Section 107, available at https://www.law.cornell.edu/uscode/text/17/107(https ://www.law.cornell.edu/us code/text/17/107) , and Lenz v. Universal Music Corp., No. 13- 16106 (9th Cir. Sep. 14, 2015), available at https://www.courtlistener.com/opinion/2937139/stephanie-lenz-vuniversal-music-corp/ (https://www.courtlistener.com/opinion/2937139/stephanie-lenz-vuniversal-music-corp/) .) If you are not sure if content located on or linked to by the Service infringes your copyright, you should first contact an attorney. 18.4.4. The DMCA requires that all Infringement Notices must include the following: 18.4.4.1. A signature, electronic or physical, of the copyright owner or a person authorized to act on their behalf; 18.4.4.2. An identification of the copyright claimed to have been infringed; 18.4.4.3. A description of the nature and location of the material that you claim to infringe your copyright, in sufficient detail to permit DocTalkGo to find and positively identify that material; 18.4.4.4. Your name, address, telephone number, and email address; and 18.4.4.5. A statement by you: (i) that you believe in good faith that the use of the material that you claim to infringe your copyright is not authorized by law, or by the copyright owner or such owner’s agent; and, (ii) under penalty of perjury, that all of the information contained in your Infringement Notice is accurate, and that you are either the copyright owner or a person authorized to act on their behalf. 18.4.5. Infringement Notices should be sent to copyright@DocTalkGo.com with the subject line “DMCA Notice: (INSERT YOUR NAME OR YOUR COMPANY’S NAME)”. 18.4.6. DocTalkGo will respond to all DMCA-compliant Infringement Notices, including, as required or appropriate, by removing the offending material or disabling all links to the offending material. 18.4.7. Disclosure. All received Infringement Notices may be posted in full to the Lumen database (https://lumendatabase.org/ (https://lumendatabase.org/) ), previously known as the Chilling Effects Clearinghouse.'
    +
    '<p class="privacy-topic align-left">19. Disclaimers; Limitation of Liability. 19.1. No Warranties. DocTalkGo, on behalf of itself and its licensors and suppliers, expressly disclaims any and all warranties, express or implied, regarding the Service, arising by operation of law or otherwise, including without limitation any and all implied warranties of merchantability, fitness for a particular purpose, non-infringement, no encumbrance, or title, in addition to any warranties arising from a course of dealing, usage, or trade practice. Neither DocTalkGo nor its licensors or suppliers warrants that the Service will meet your requirements, or that the operation of the Service will be uninterrupted or error- free. DocTalkGo disclaims all implied liability for damages arising out of the furnishing of the Service pursuant to this Agreement, including without limitation, mistakes, omissions, interruptions, delays, tortious conduct, errors, representations, or other defects arising out of the failure to the furnish the Service, whether caused by acts of commission or omission, or any other damage occurring. DocTalkGo shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation damages for lost profits or lost revenues), whether caused by the acts or omissions of DocTalkGo, Company Parties, or DocTalkGo users, or their agents or representatives. 19.2. Your Responsibility for Loss or Damage; Backup of Data. 19.2.1. You agree that your use of the Service is at your sole risk. You will not hold DocTalkGo or its licensors and suppliers, as applicable, responsible for any loss or damage that results from your access to and/or use of the Service, including without limitation any loss or damage to any of your computers, mobile devices, including without limitations tablets and/or smartphones, or data. The Service may contain bugs, errors, problems, or other limitations. 19.2.2. Importantly, you acknowledge that a catastrophic disk failure or other similar event could result in the loss of all of the data related to your account. You agree and understand that it is your responsibility to backup your data to your personal computer or external storage device and to ensure such backups are secure. 19.3. Limitation of Liability. In no event shall DocTalkGo or its licensors or suppliers be liable to you for any claims arising from your use with the Service, including without limitation for special, incidental, or consequential damages, lost profits, lost data or confidential or other information, loss of privacy, costs of procurement of substitute goods or services, failure to meet any duty including without limitation of good faith or of reasonable care, negligence, or otherwise, regardless of the foreseeability of those damages or of any advice or notice given to DocTalkGo or its licensors and suppliers arising out of or in connection with your use of the Service. This limitation shall apply regardless of whether the damages arise out of breach of contract, tort, or any other legal theory or form of action. You agree that this limitation of liability represents a reasonable allocation of risk and is a fundamental element of the basis of the bargain between DocTalkGo and you. The Service would not be provided without such limitations. 19.4. Application of Disclaimers. The above disclaimers, waivers, and limitations do not in any way limit any other disclaimer of warranties or any other limitation of liability in any other agreement between you and DocTalkGo or between you and any of DocTalkGo licensors and suppliers. Some jurisdictions may not allow the exclusion of certain implied warranties or the limitation of certain damages, so some of the above disclaimers, waivers, and limitations of liability may not apply to you. DocTalkGo licensors and suppliers are intended third-party beneficiaries of these disclaimers, waivers, and limitations. No advice or information, whether oral or written, obtained by you through the Service or otherwise shall alter any of the disclaimers or limitations stated in this section.'
    +
    '<p class="privacy-topic align-left">20. Your Representations and Warranties. You represent and warrant that your use of the Service will be in accordance with this Agreement and any other DocTalkGo policies, and with any applicable laws or regulations. 21. Indemnity by You. 21.1. Without limiting any indemnification provision of this Agreement, you (the “Indemnitor“) agree to defend, indemnify, and hold harmless DocTalkGo and the Company Parties (collectively, the “Indemnitees“) from and against any and all claims, actions, demands, causes of action, and other proceedings (individually, “Claim“, and collectively, “Claims”), including but not limited to legal costs and fees, and providing sole and exclusive control of the defense of any action to DocTalkGo, including the choice of legal counsel and all related settlement negotiations, arising out of or relating to: (i) the relationship between you and DocTalkGo, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory; (ii) your breach of this Agreement, including without limitation any representation or warranty contained in this Agreement; (iii) your access to or use of the Service; (iv) your provision to DocTalkGo or any of the Indemnitees of information or other data; (v) your violation or alleged violation of any foreign or domestic, international, federal, state, or local law or regulation; or (vi) your violation or alleged violation of any third party’s copyrights, trademarks, or other intellectual property or proprietary rights. 21.2. The Indemnitees each have the individual right, but not the obligation, to participate through counsel of their choice in any defense by you of any Claim as to which you are required to defend, indemnify, or hold harmless any, each, and/or all Indemnitees. You may not settle any Claim without the prior written consent of the concerned Company Parties. 21.3. Without limitation, the Indemnitor also agrees to compensate DocTalkGo for any and all lost revenues, future lost profits, reasonable search costs, and any other reasonable expenses resulting from any Indemnitor violation of Section 20 (Prohibited Uses), including without limitation any suspension of affiliate accounts or affiliate payment attributable to fraudulent efforts to manipulate or otherwise modify reported impressions generated by the Company Parties under any affiliate advertising agreement.'
    +
    '<p class="privacy-topic align-left">22. Dispute Resolution. 22.1. Binding Arbitration. 22.1.1. If you and DocTalkGo cannot resolve a Claim through negotiations, either party may elect to have the Claim finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party shall be final and binding on the other(s). 22.1.2. You acknowledge that without this provision, you would have the right to sue in court with a jury trial or to participate in a class action. 22.1.3. The language in this Agreement shall be interpreted in accordance with its fair meaning and not strictly for or against either party. 22.1.4. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (“AAA“), as modified by this Agreement, available at the AAA website www.adr.org or by calling the AAA at 1-800-778-7879. Except as otherwise provided for in this Agreement, DocTalkGo will pay the AAA filing, administration, and arbitrator fees. If, however, the arbitrator finds that either the substance of your claim or the relief sought is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then you will pay the arbitrator fees, in addition to any amount that exceeds the filing fees. In that case, you also agree to reimburse DocTalkGo for all payments disbursed that are your obligation to reimburse under the AAA Rules. The arbitrator is bound by the terms of this Agreement. All issues are for the arbitrator to resolve, except that issues relating to the enforceability of the arbitration provision are for a Court of Competent Jurisdiction to resolve. The arbitration may be conducted in person, through document submission, through telephone, or online. The arbitrator will issue a decision in writing, but need only provide a statement of reasons if requested by a party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. DocTalkGo may litigate to compel arbitration in court, to stay proceedings pending arbitration, or to modify, confirm, vacate, or enter judgment on the award entered by the arbitrator. The arbitrator shall award costs to the prevailing party (including, without limitation, fees, expenses, and reasonable attorneys’ fees) at any time during the proceeding and upon request from either party, within 14 days of the arbitrator’s ruling on the merits. 22.2. Restrictions Against Joinder of Claims. 22.2.1. You and DocTalkGo agree that any arbitration shall be limited to each Claim individually. You and DocTalkGo agree that each may only bring claims against the other in your or DocTalkGo individual capacity and not as a plaintiff or class member in any purported class or representative proceeding. 22.2.2. If this specific provision is found to be unenforceable in a Court of Competent Jurisdiction, the Claim will still be finally and exclusively resolved by binding arbitration upon the election of either party, and any election to arbitrate by one party shall be final and binding on the other(s). In addition: (1) no arbitration shall be joined with any other arbitration, and (2) there is no right for any Claim to be arbitrated on a class-action basis or to employ class action procedures, and (3) there is no right of authority for any dispute to be brought in a purported representative capacity on behalf either of the general public or any other individuals. 22.3. Remedies in Aid of Arbitration; Equitable Relief. This agreement to arbitrate will not preclude you or DocTalkGo from seeking provisional remedies in aid of arbitration, including without limitation orders to stay a court action, compel arbitration, or confirm an arbitral award, from a Court of Competent Jurisdiction. Furthermore, this agreement to arbitrate will not preclude you or DocTalkGo from applying to a Court of Competent Jurisdiction for a temporary restraining order, preliminary injunction, or other interim or conservatory relief, as necessary. “Court of Competent Jurisdiction“ means any federal or state court: (1) that has jurisdiction over the subject matter; and (2) that is located in San Diego County in the State of California. 22.4. Venue for any Judicial Proceeding. 22.4.1. This Agreement, including without limitation this Agreement’s interpretation, shall be treated as though this Agreement were executed and performed in the State of California, and shall be governed by and construed in accordance with the laws of the State of California without regard to its conflict of law principles. The language in this Agreement shall be interpreted in accordance with its fair meaning and not strictly for or against either party. 22.4.2. The proper venue for any judicial action arising out of, relating to, or in connection with this Agreement will be the state and federal courts located in or nearest to San Diego, California. The parties stipulate to, and agree to waive any objection to, the personal jurisdiction and venue of such courts, and further expressly submit to extraterritorial service of process.'
    +
    '<p class="privacy-topic align-left">23. Termination. 23.1. By Company. Without limiting any other provision of this Agreement, DocTalkGo reserves the right to, in DocTalkGo sole discretion and without notice or liability, deny use of the Service to any person for any reason or for no reason at all, including without limitation for any breach or suspected breach of any representation, warranty, or covenant contained in this Agreement, or of any applicable law or regulation. 23.2. Automatic Termination Upon Breach by You. This Agreement shall automatically terminate if you breach any of this Agreement’s representations, warranties, or covenants. Such termination shall be automatic, and shall not require any action by DocTalkGo. 23.3. By You. You may terminate this Agreement and your rights under it at any time, for any or no reason at all, by providing to DocTalkGo notice of your intention to do so, in the manner required by Section 27 (Notices). 23.4. Effect of Termination. 23.4.1. Any termination of this Agreement automatically terminates all rights and licenses granted to you under this Agreement, including all rights to use the Service. Upon termination, DocTalkGo may, but has no obligation to, in DocTalkGo sole discretion, rescind any services and/or delete from DocTalkGo systems all your Personal Information and any other files or information that you made available to DocTalkGo or that otherwise relate to your use of the Service. Upon termination, you shall cease any use of the Service. 23.4.2. After termination, DocTalkGo reserves the right to exercise whatever means it deems necessary to prevent your unauthorized use of the Service, including without limitation technological barriers such as IP blocking and direct contact with your Internet Service Provider. 23.5. Legal Action.'
    +
    '<p class="privacy-topic align-left">24.1. DocTalkGo shall give any notice by email sent to the most recent email address, if any, provided by the intended recipient to DocTalkGo. You agree that any notice received from DocTalkGo electronically satisfies any legal requirement that such notice be in writing. 24.2. You bear the sole responsibility of ensuring that your email address on file with DocTalkGo is accurate and current, and notice to you shall be deemed effective upon the sending by DocTalkGo of an email to that address. 24.3. You shall give any notice to DocTalkGo by email to notices@DocTalkGo.com'
    +
    '<p class="privacy-topic align-left">25. General. 25.1. Entire Agreement. This Agreement constitutes the entire agreement between DocTalkGo and you concerning your use of the Service. 25.2. Partial Invalidity. Should any part of this Agreement be declared invalid, void, or unenforceable by a Court of Competent Jurisdiction, such decision shall not affect the validity of any remaining portion of this Agreement, which shall remain in full force and effect, and the parties acknowledge and agree that they would have executed the remaining portion without including the part so declared by a Court of Competent Jurisdiction to be invalid, void, or unenforceable. 25.3. Amendments. This Agreement may only be modified by a written amendment signed by an authorized executive of DocTalkGo, or by the unilateral amendment of this Agreement by DocTalkGo along with the posting by DocTalkGo of that amended version. 25.4. No Waiver. A waiver by either party of any term or condition of this Agreement, or any breach, in any one instance, will not waive that term or condition or any later breach. 25.5. Assignment. This Agreement and all of your rights and obligations under it will not be assignable or transferable by you without the prior written consent of DocTalkGo. This Agreement will be binding upon and will inure to the benefit of the parties, their successors, and permitted assigns. 25.6. Independent Contractors. You and DocTalkGo are independent contractors, and no agency, partnership, joint venture, or employee-employer relationship is intended or created by this Agreement. 25.7. No Third Party Beneficiaries. There are no third-party beneficiaries to this Agreement, with the following exceptions: the Company Parties; DocTalkGo licensors and suppliers (to the extent expressly stated in this Agreement); and to the extent stated in the following Sections: Section 9 (No Reliance on Third Party Content), Section 16 (Third Party Websites), Section 19.4 (Application of Disclaimers). 25.8. Injunctive Relief. You acknowledge and agree that any actual or threatened breach of this Agreement or infringement of proprietary or other third-party rights by you would cause irreparable injury to DocTalkGo and DocTalkGo licensors and suppliers, and would therefore entitle DocTalkGo or DocTalkGo licensors or suppliers, as the case may be, to injunctive relief. 25.9. Headings. The headings in this Agreement are for convenience only, and shall have no legal or contractual effect.'
    +
    '<button class="choice-button" onclick="hidePrivacyPolicy()">Back</button>';
var schedulingJSON = [
    {
        question: "a. What state do you live in?",
        questionSub: "type and/or select from list",
        inputType: "datalist",
        options: statesSelect,
        optionsText: statesSelect,
        name: "state",
        validation: false
    },
    {
        question: "b. What is your zipcode?",
        inputType: "text",
        placeholder: "(i.e. 94118)",
        name: "zipcode",
        validation: false
    }
]
// Assign tracking variables
var questionIndex;
var scheduleIndex;
var data = {};
var scheduleData = {};

// Set event listener 
$(".begin").on("click", beginQuestionnaire);

// Function for the start of the questionnaire
function beginQuestionnaire() {
    questionIndex = 0;
    $("#start").empty();
    $(".begin-well").empty();
    $('#start').attr('style', 'margin-top: 150px;');
    // Call the function for a new question
    newQuestion();
}
// Temp scheduling function
function schedule() {
    scheduleIndex = 0;
    $("#start").empty();
    $('#start').removeClass('qualified');
    $("#start").html('<h2>Scheduling:</h2>');
    // newScheduleQuestion(); // Add back in if you decide to do scheduling questions
    displaySchedule();
}

function newQuestion() {
    console.log("Current data object: ", data);
    console.log("Current question: ", questionsJSON[questionIndex].question);
    // Clear the start box if it contains the previous question
    $("#start").empty();
    // Clear the question-alert box if it contains content from previous question
    $("#question-alert").empty();

    // Set conditional to end the questionnaire for when all the questions have been completed
    if (questionIndex === questionsJSON.length - 1) {
        // Empty the #questions div
        $("#question").empty();
        // Empty the #choices div
        $("#choices").empty();

        // Display qualified candidate message
        qualifiedCand();

    }
    // Set else condition to create a new question with choices
    else {
        // Empty the #questions div
        $("#question").empty();
        // Empty the #choices div
        $("#choices").empty();
        $("#privacy-policy").empty();

        switch (questionsJSON[questionIndex].inputType) {
            case "choice":
                createChoice();
                break;
            case "text":
                createText();
                break;
            case "date":
                createDate();
                break;
            case "checkbox":
                createCheckbox();
                break;
            case "radio":
                createRadio();
                break;
            case "datalist":
                createDatalist();
                break;
        }
    }
}
// Schedule
function newScheduleQuestion() {
    console.log("Current data object: ", scheduleData);
    console.log("Current question: ", schedulingJSON[scheduleIndex].question);
    // Clear the question-alert box if it contains content from previous question
    $("#question-alert").empty();
    var tMaxlength = schedulingJSON[scheduleIndex].name === "zipcode" ? 5 : false;
    // Set conditional to end the questionnaire for when all the questions have been completed
    if (scheduleIndex === schedulingJSON.length - 1) {
        // Empty the #questions div
        $("#question").empty();
        // Empty the #choices div
        $("#choices").empty();

        // Display payment
        displaySchedule();

    }
    // Set else condition to create a new question with choices
    else {
        // Empty the #questions div
        $("#question").empty();
        // Empty the #choices div
        $("#choices").empty();

        switch (schedulingJSON[scheduleIndex].inputType) {
            case "text":
                createScheduleText(tMaxlength);
                break;
            case "radio":
                createScheduleRadio();
                break;
            case "datalist":
                createScheduleDatalist();
                break;
        }
    }
}

// ====================== Function to display qualified candidate ====================== \\

function qualifiedCand() {
    console.log("Current data object: ", data);
    // Clear the the page
    $("#start").empty();
    $('#start').attr({ 'class': 'qualified' });
    $("#question-alert").empty();
    $("#question").empty();
    $("#choices").empty();
    // Add in background and logo       
    var backgroundAndLogo = '<div class="background"></div>' +
        '<div class="logo-wrapper">' +
        '<img src="./assets/images/logo.jpg" class="logo" alt="DocTalkGo" />'
    '</div>';
    $("#start").html(backgroundAndLogo);
    // Generate message
    var candidateMessage = '<h4 style="color:black;">Addyi can be subscribed to you.</h4>';
    var buttonTag = $("<button>").attr({ "class": `choice-button`, "onclick": "schedule()" }).text("Continue to Scheduling");
    $("#start").append(candidateMessage, buttonTag);
    $('.logo').addClass("qualified");
}

// ====================== END Function to display qualified candidate ====================== \\

// ====================== Functions to generate questions based on type ====================== \\

// Function to construct 'choice' type questions
function createChoice() {
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
    if (questionsJSON[questionIndex].questionSub) {
        var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);

    // Iterate through the array of options
    for (var i = 0; i < (questionsJSON[questionIndex].optionsText.length); i++) {
        // Creating a div to hold the buttons
        var buttonDiv = $("<div id='button-holder" + i + "'>");

        // Storing the choices data
        var answer = questionsJSON[questionIndex]['optionsText'][i];
        if (questionsJSON[questionIndex].links[i]) {
            var buttonTag = $("<button>").attr({ "class": `choice-button`, "onclick": `${questionsJSON[questionIndex].links[i]}`, "value": `${questionsJSON[questionIndex].options[i]}` }).text(answer);
        } else {
            // Creating a button tag to have the choices displayed on
            var buttonTag = $("<button>").attr({ "class": `choice-button ${questionsJSON[questionIndex].name}`, "id": `${questionsJSON[questionIndex].name + i}`, "onclick": `submitAnswer("${questionsJSON[questionIndex].name + i}", ${questionIndex})`, "value": `${questionsJSON[questionIndex].options[i]}` }).text(answer);
        }
        // Appending the button tag to the new div
        buttonDiv.append(buttonTag);

        // Put some space below the buttons
        var spacerTwo = "<br>";

        // Appending the entire div to the HTML
        $("#choices").append(buttonDiv, spacerTwo);
    };
}

// Function to construct 'text' type questions
function createText(maxlength) {
    maxlength = maxlength || false;
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
    if (questionsJSON[questionIndex].questionSub) {
        var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);

    // Create an input field with the specified placeholder
    var inputField = $("<input>").attr({ "type": `${questionsJSON[questionIndex].inputType}`, "class": `input-field ${questionsJSON[questionIndex].name}`, "id": `${questionsJSON[questionIndex].name}`, "placeholder": `${questionsJSON[questionIndex].placeholder}` })
    // <input id="input_4" class="form-textbox" maxlength="15" name="atn" size="25" onKeyup='addDashes(this)' />
    if (questionsJSON[questionIndex].validation == "phone") {
        inputField.attr({ "maxlength": "15", "onKeyup": "addDashes(this)" });
    }
    // Create button to submit response
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `submitAnswer("${questionsJSON[questionIndex].name}", ${questionIndex})` }).text("Next");
    // Append to choices div
    $("#choices").append(inputField, buttonTag);
}

// Function to construct 'date' type questions
// function createDate() {
//     // Assign question variable to store result of incrementing index of the questions array
//     var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
//     if (questionsJSON[questionIndex].questionSub) {
//         var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
//         question.append(subQuestion);
//     }
//     // Append question to the #question div
//     $("#question").html(question);
//     // Create a div element to hold the date input fields and labels
//     var dateDiv = $('<div class="date-section">');
//     // Create a div element to hold the date labels
//     var dateLabelsDiv = $('<div class="date-labels">');
//     // Create a div element to hold the date input fields
//     var dateFieldsDiv = $('<div class="date-fields">');
//     // Create a label for the month
//     var monthLabelDiv = $('<div class="month-label-div">');
//     var monthLabel = $('<label>').attr({ "class": "month-label" }).text("Month: (MM)");
//     monthLabelDiv.append(monthLabel);
//     // Create an input field the month
//     var monthField = $("<input>").attr({ "type": "text", "class": "month-field", "id": "month", "placeholder": "ex. 07", "maxlength": "2" })
//     // Create a label for the day
//     var dayLabelDiv = $('<div class="day-label-div">');
//     var dayLabel = $('<label>').attr({ "class": "day-label" }).text("Day: (DD)");
//     dayLabelDiv.append(dayLabel);
//     // Create an input field the day
//     var dayField = $("<input>").attr({ "type": "text", "class": "day-field", "id": "day", "placeholder": "ex. 14", "maxlength": "2" })
//     // Create a label for the year
//     var yearLabelDiv = $('<div class="year-label-div">');
//     var yearLabel = $('<label>').attr({ "class": "year-label" }).text("Year: (YYYY)");
//     yearLabelDiv.append(yearLabel);
//     // Create an input field the year
//     var yearField = $("<input>").attr({ "type": "text", "class": "year-field", "id": "year", "placeholder": "ex. 1982", "maxlength": "4" })
//     // Create button to submit response
//     var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": "submitDate()" }).text("Next");
//     // Append to labels div
//     dateLabelsDiv.append(monthLabelDiv, dayLabelDiv, yearLabelDiv);
//     // Append to fields div
//     dateFieldsDiv.append(monthField, dayField, yearField);
//     // Append to date div
//     dateDiv.append(dateLabelsDiv, dateFieldsDiv);
//     // Append to choices div
//     $("#choices").append(dateDiv, buttonTag);
// }

function createDate() {
    // Assign question variable to store result of incrementing index of the schedule array
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var days = ["01", "02", "03", "04", "05", "06", "07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

    var years = ["2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1958", "1956", "1955", "1954", "1953", "1952", "1951", "1950", "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941", "1940", "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931", "1930", "1929", "1928", "1927", "1926", "1925", "1924", "1923", "1922", "1921", "1920", "1919", "1918", "1917", "1916", "1915", "1914", "1913", "1912", "1911", "1910", "1909", "1908", "1907", "1906", "1905", "1904", "1903", "1902", "1901", "1900"];
  
    
    // Append question to the #question div
    var row = $('<div class="schedule-row">');
    var columnOne = $('<div class="col-one">');
    var columnTwo = $('<div class="col-two">');
    var columnThree = $('<div class="col-three">');
    //   <option value="volvo">Volvo</option>
    //   <option value="saab">Saab</option>
    //   <option value="mercedes">Mercedes</option>
    //   <option value="audi">Audi</option>
    $("#choices").html(row);
    // Creating a select tag to reference the options
    var selectTag1 = $(`<select id='month-picker'`);
    var selectTag2 = $(`<select id='day-picker'`);
    var selectTag3 = $(`<select id='year-picker'`);
    // Iterate through the array of options
    for (var i = 0; i < months; i++) {
        // Storing the choices data
        var textAndValue = months[i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-months`, "id": `option-months${i}`, "value": `${textAndValue}` }).text(textAndValue);
        // Appending the tags to the new select
        selectTag1.append(optionTag);
    };
    for (var i = 0; i < days; i++) {
        // Storing the choices data
        var textAndValue = days[i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-day`, "id": `option-day${i}`, "value": `${textAndValue}` }).text(textAndValue);
        // Appending the tags to the new select
        selectTag2.append(optionTag);
    };
    for (var i = 0; i < years; i++) {
        // Storing the choices data
        var textAndValue = years[i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-years`, "id": `option-years${i}`, "value": `${textAndValue}` }).text(textAndValue);
        // Appending the tags to the new select
        selectTag3.append(optionTag);
    };
    columnOne.append(selectTag1);
    columnTwo.append(selectTag2);
    columnThree.append(selectTag3);
    // Appending the entire select to the HTML
    $("#choices").append(columnOne, columnTwo, columnThree);
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `displayPayment()` }).text("Next");
    $("#choices").append(buttonTag);

}

// Function to construct 'checkbox' type questions
function createCheckbox() {
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
    if (questionsJSON[questionIndex].questionSub) {
        var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);

    // Iterate through the array of options
    for (var i = 0; i < (questionsJSON[questionIndex].optionsText.length); i++) {
        // Creating a div to hold the checkboxes
        var checkboxDiv = $("<div>").attr({ "class": "checkbox-holder" });

        // Storing the choices data
        var answer = questionsJSON[questionIndex]['optionsText'][i];
        if (questionsJSON[questionIndex].links[i]) {

            // *** Update this if you ever add links ***

            // var buttonTag = $("<button>").attr({ "class": `choice-button`, "onclick": `${questionsJSON[questionIndex].links[i]}`, "value": `${questionsJSON[questionIndex].options[i]}` }).text(answer);
        } else {
            // Creating a input type checkbox tag to have the choices displayed next to
            var checkboxTag = $("<input>").attr({ "type": "checkbox", "class": `checkbox-${questionsJSON[questionIndex].name}`, "id": `${questionsJSON[questionIndex].name + i}`, "value": `${questionsJSON[questionIndex].options[i]}` });
            var checkboxLabel = $("<label>").attr({"for": `${questionsJSON[questionIndex].name + i}`, "class": "checkbox-label" }).text(answer); // "for": `${questionsJSON[questionIndex].name + i}`, 
        }
        // Appending the tags to the new div
        checkboxDiv.append(checkboxTag, checkboxLabel);

        // Put some space below the checkboxes
        // var spacerTwo = "<br>";

        // Appending the entire div to the HTML
        $("#choices").append(checkboxDiv);
    };
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": "submitCheckbox()" }).text("Next");
    $("#choices").append(buttonTag);
}
// Event listener for click of checkbox div to check boxes
// $(document.body).on('click', '.checkbox-holder', function () {
//     var checkbox = $(this).children('input[type="checkbox"]');
//     checkbox.prop('checked', !checkbox.prop('checked'));
// });

// Function to construct 'radio' type questions
function createRadio() {
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
    if (questionsJSON[questionIndex].questionSub) {
        var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);

    // Iterate through the array of options
    for (var i = 0; i < (questionsJSON[questionIndex].optionsText.length); i++) {
        // Creating a div to hold the radios
        var radioDiv = $("<div class='radio-holder'>");

        // Storing the choices data
        var answer = questionsJSON[questionIndex]['optionsText'][i];
        if (questionsJSON[questionIndex].links[i]) {

            // *** Update this if you ever add links ***

            // var buttonTag = $("<button>").attr({ "class": `choice-button`, "onclick": `${questionsJSON[questionIndex].links[i]}`, "value": `${questionsJSON[questionIndex].options[i]}` }).text(answer);
        } else {
            // Creating a input type radio tag to have the choices displayed next to
            var radioTag = $("<input>").attr({ "type": "radio", "class": `radio-${questionsJSON[questionIndex].name}`, "id": `${questionsJSON[questionIndex].name + i}`, "name": `${questionsJSON[questionIndex].name}`, "value": `${questionsJSON[questionIndex].options[i]}` });
            var radioLabel = $("<label>").attr({ "class": "radio-label" }).text(answer);
            // "for": `${questionsJSON[questionIndex].name + i}`, 
        }
        // Appending the tags to the new div
        radioDiv.append(radioTag, radioLabel);

        // Put some space below the radios
        var spacerTwo = "<br>";

        // Appending the entire div to the HTML
        $("#choices").append(radioDiv, spacerTwo);
    };
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": "submitRadio()" }).text("Next");
    $("#choices").append(buttonTag);
}
// Event listener for click of radio div to check boxes
$(document.body).on('click', '.radio-holder', function () {
    var radio = $(this).children('input[type="radio"]');
    radio.prop('checked', !radio.prop('checked'));
});

// *** Alternative to Datalist for compatibility ***
// https://codepen.io/gilles/pen/LZbQxw

// Function for height or anything that uses a datalist
function createDatalist() {
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
    if (questionsJSON[questionIndex].questionSub) {
        var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);
    // Creating an input to reference the datalist
    var datalistInput = $(`<input class='datalist-input' list='heights' id='${questionsJSON[questionIndex].name}' name='${questionsJSON[questionIndex].name}s'>`);
    // Creating the datalist to hold the options
    var datalist = $(`<datalist class='datalist-holder' id="heights">`);
    // Iterate through the array of options
    for (var i = 0; i < (questionsJSON[questionIndex].optionsText.length); i++) {
        // Storing the choices data
        var answer = questionsJSON[questionIndex]['optionsText'][i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-${questionsJSON[questionIndex].name}`, "id": `${questionsJSON[questionIndex].name + i}`, "value": `${answer}` });
        // Appending the tags to the new datalist
        datalist.append(optionTag);
    };
    // Line break after datalist
    var spacer = "<br>";
    // Appending the entire datalist to the HTML
    $("#choices").append(datalistInput, datalist, spacer);
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `submitAnswer("${questionsJSON[questionIndex].name}", ${questionIndex})` }).text("Next");
    $("#choices").append(buttonTag);

}

// Function to construct Schedule 'text' type questions
function createScheduleText(maxlength) {
    maxlength = maxlength || false;
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + schedulingJSON[scheduleIndex].question + "</h3>");
    if (schedulingJSON[scheduleIndex].questionSub) {
        var subQuestion = $("<h4>" + schedulingJSON[scheduleIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);

    // Create an input field with the specified placeholder
    var inputField = $("<input>").attr({ "type": `${schedulingJSON[scheduleIndex].inputType}`, "class": `input-field ${schedulingJSON[scheduleIndex].name}`, "id": `${schedulingJSON[scheduleIndex].name}`, "placeholder": `${schedulingJSON[scheduleIndex].placeholder}` })
    // <input id="input_4" class="form-textbox" maxlength="15" name="atn" size="25" onKeyup='addDashes(this)' />
    if (maxlength) {
        inputField.attr({ "maxlength": `${maxlength}` });
    }
    // Create button to submit response
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `submitScheduleAnswer("${schedulingJSON[scheduleIndex].name}", ${questionIndex})` }).text("Next");
    // Append to choices div
    $("#choices").append(inputField, buttonTag);
}
// Function for states - improve in the future by passing the JSON object and index to the other function
function createScheduleDatalist() {
    // Assign question variable to store result of incrementing index of the schedule array
    var question = $("<h3>" + schedulingJSON[scheduleIndex].question + "</h3>");
    if (schedulingJSON[scheduleIndex].questionSub) {
        var subQuestion = $("<h4>" + schedulingJSON[scheduleIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);
    // Creating an input to reference the datalist
    var datalistInput = $(`<input class='datalist-input' list='heights' id='${schedulingJSON[scheduleIndex].name}' name='${schedulingJSON[scheduleIndex].name}s'>`);
    // Creating the datalist to hold the options
    var datalist = $(`<datalist class='datalist-holder' id="heights">`);
    // Iterate through the array of options
    for (var i = 0; i < (schedulingJSON[scheduleIndex].optionsText.length); i++) {
        // Storing the choices data
        var answer = schedulingJSON[scheduleIndex]['optionsText'][i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-${schedulingJSON[scheduleIndex].name}`, "id": `${schedulingJSON[scheduleIndex].name + i}`, "value": `${answer}` });
        // Appending the tags to the new datalist
        datalist.append(optionTag);
    };
    // Line break after datalist
    var spacer = "<br>";
    // Appending the entire datalist to the HTML
    $("#choices").append(datalistInput, datalist, spacer);
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `submitScheduleAnswer("${schedulingJSON[scheduleIndex].name}", ${scheduleIndex})` }).text("Next");
    $("#choices").append(buttonTag);

}

// FUnction for day picker Mon-Fri just before payment
// Function for states - improve in the future by passing the JSON object and index to the other function
function createScheduleSelect() {
    // Assign question variable to store result of incrementing index of the schedule array
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // Append question to the #question div
    var row = $('<div class="schedule-row">');
    var columnOne = $('<div class="col-one">');
    var columnTwo = $('<div class="col-two">');
    //   <option value="volvo">Volvo</option>
    //   <option value="saab">Saab</option>
    //   <option value="mercedes">Mercedes</option>
    //   <option value="audi">Audi</option>
    $("#choices").html(row);
    // Creating a select tag to reference the options
    var selectTag = $(`<select id='day-picker'`);
    // Iterate through the array of options
    for (var i = 0; i < days; i++) {
        // Storing the choices data
        var textAndValue = days[i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-day`, "id": `option-day${i}`, "value": `${textAndValue}` }).text(textAndValue);
        // Appending the tags to the new select
        selectTag.append(optionTag);
    };
    columnOne.append(selectTag);
    // Appending the entire select to the HTML
    $("#choices").append(columnOne, columnTwo);
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `displayPayment()` }).text("Next");
    $("#choices").append(buttonTag);

}
// ====================== END Functions to generate questions based on type ====================== \\

// ====================== Functions to evaluate answers based on type ====================== \\

// Submit checkbox
function submitCheckbox() {
    var checkedValues = {};
    var inputElements = document.getElementsByClassName(`checkbox-${questionsJSON[questionIndex].name}`);
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValues[inputElements[i].value] = true;
        }
    }
    // Check if object is empty, meaning no checked boxes
    if (Object.keys(checkedValues).length === 0 && checkedValues.constructor === Object) {
        $('#question-alert').text("Please select at least one");
        handlePageScroll("question-alert");
        return;
    } else {
        constructPatientData(checkedValues, questionIndex);
    }
}

// Submit radio
function submitRadio() {
    var localValue = $(`input[name="${questionsJSON[questionIndex].name}"]:checked`).val().trim();
    var submittedValue = localValue.toString();
    // Check if string is empty, meaning no checked radios
    if (submittedValue === "") {
        $('#question-alert').text("Please select at least one");
        handlePageScroll("question-alert");
        return;
    } else {
        constructPatientData(submittedValue, questionIndex);
    }
}

// Function to parse out which button was clicked i.e. which answer was chosen by the user
function submitAnswer(inputId, index) {
    // Isolate the value submitted and trim it
    var value = $(`#${inputId}`).val().trim();
    // toString to prevent XSS entries
    var submittedValue = value.toString();
    // Assign a variable to the correctAnswer for each, question-respective value
    var correctAnswer = questionsJSON[questionIndex].correctAnswer ? questionsJSON[questionIndex].correctAnswer : false;
    console.log("Submitted value: ", submittedValue);
    console.log("Correct answer: ", correctAnswer);
    // Make sure value isn't empty
    if (submittedValue === "") {
        $('#question-alert').text("Please complete this field or type N/A if Not Applicable");
        return;
    } else {
        // Set conditions for correctly versus incorrectly answered questions
        if (!correctAnswer) {
            // Empty the #questions div
            $("#question").empty();
            // Empty the #choices div
            $("#choices").empty();
            // Call constructPatientData function - pass the submitted text field value and the current question index
            constructPatientData(submittedValue, index);
            console.log("text");
        } else if (submittedValue === correctAnswer) {
            // Empty the #questions div
            $("#question").empty();
            // Empty the #choices div
            $("#choices").empty();
            // Call constructPatientData function - pass the submitted value and current question index to indicate user chose correctly
            constructPatientData(submittedValue, index);
            console.log("choice");
        } else {
            // Empty the #questions div
            $("#questions").empty();
            // Empty the #choices div
            $("#choices").empty();
            // Call constructPatientData function - pass false to indicate user chose incorrectly
            constructPatientData(false);
            console.log("incorrect");
        }
    }
}
// SCHEDULING Function to parse out which button was clicked i.e. which answer was chosen by the user
function submitScheduleAnswer(inputId, index) {
    // Isolate the value submitted and trim it
    var value = $(`#${inputId}`).val().trim();
    // toString to prevent XSS entries
    var submittedValue = value.toString();
    // Assign a variable to the correctAnswer for each, question-respective value
    var correctAnswer = schedulingJSON[scheduleIndex].correctAnswer ? schedulingJSON[scheduleIndex].correctAnswer : false;
    console.log("Submitted value: ", submittedValue);
    console.log("Correct answer: ", correctAnswer);
    // Make sure value isn't empty
    if (submittedValue === "") {
        $('#question-alert').text("Please complete this field or type N/A if Not Applicable");
        return;
    } else {
        // Set conditions for correctly versus incorrectly answered questions
        if (!correctAnswer) {
            // Empty the #questions div
            $("#question").empty();
            // Empty the #choices div
            $("#choices").empty();
            // Call constructScheduleData function - pass the submitted text field value and the current question index
            constructScheduleData(submittedValue, index);
            console.log("text");
        } else if (submittedValue === correctAnswer) {
            // Empty the #questions div
            $("#question").empty();
            // Empty the #choices div
            $("#choices").empty();
            // Call constructScheduleData function - pass the submitted value and current question index to indicate user chose correctly
            constructScheduleData(submittedValue, index);
            console.log("choice");
        } else {
            // Empty the #questions div
            $("#questions").empty();
            // Empty the #choices div
            $("#choices").empty();
            // Call constructScheduleData function - pass false to indicate user chose incorrectly
            constructScheduleData(false);
            console.log("incorrect");
        }
    }
}


// Function to submit a date related question and parse it into SQL format
function submitDate() {
    // Storing the value of each input field
    var year = $('#year').val().toString(),
        month = $('#month').val().toString(),
        day = $('#day').val().toString();
    // Make sure fields filled out correctly
    if ((year === "" || month === "" || day === "") || (year.length < 4 || month.length < 2 || day.length < 2)) {
        $('#question-alert').text("Please fill out the month, day and year as MM/DD/YYYY");
        return;
    } else {
        var submittedValue = year + "-" + month + "-" + day;
        console.log("Submitted value: ", submittedValue);
        // Empty the #questions div
        $("#question").empty();
        // Empty the #choices div
        $("#choices").empty();
        // Call constructPatientData function - pass the submitted value and current question index to indicate user chose correctly
        constructPatientData(submittedValue, questionIndex);
    }
}

// ====================== END Functions to evaluate answers based on type ====================== \\

// ====================== Function to construct patient data ====================== \\

function constructPatientData(value, index) {
    if (!value) {
        displayNotQualified();
    } else {
        data[questionsJSON[index].name] = value;
        questionIndex++;
        newQuestion();
    }
}

function constructScheduleData(value, index) {
    if (!value) {
        displayNotQualified();
    } else {
        scheduleData[schedulingJSON[index].name] = value;
        scheduleIndex++;
        newScheduleQuestion();
    }
}

// ====================== END Function to construct patient data ====================== \\

// ====================== Function for displaying schedule info ====================== \\
function displaySchedule() {
    $("#start").empty();
    $("#question").empty();
    $("#choices").empty();
    var title = $('<h2>').text('It seems you are experiencing low sexual desire. Fortunately, it’s treatable with Addyi.');
    var subTitle = $('<h4>').text('Book your $49 appointment (similar to an in-office co-pay) below and the doctor will call you directly at your requested day/time. If approved for a prescription, you will receive your first 8 weeks of Addyi FREE (a $50 value).');
    $("#start").append(title, subTitle);
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var times = ["9:00am - 9:30am", "9:30am - 10:00am", "10:00am - 10:30am", "10:30am - 11:00am", "11:00am - 11:30am", "11:30am - 12:00pm", "12:00pm - 12:30pm", "12:30pm - 1:00pm", "1:00pm - 1:30pm", "1:30pm - 2:00pm", "2:00pm - 2:30pm", "2:30pm - 3:00pm", "3:00pm - 3:30pm", "3:30pm - 4:00pm", "4:00pm - 4:30pm", "4:30pm - 5:00pm"];
    // Append question to the #question div
    var row = $('<div class="schedule-row">');
    var columnOne = $('<div class="col-one">');
    var columnTwo = $('<div class="col-two">');
    //   <option value="volvo">Volvo</option>
    //   <option value="saab">Saab</option>
    //   <option value="mercedes">Mercedes</option>
    //   <option value="audi">Audi</option>
    $("#choices").html(row);
    // Creating a select tag to reference the options
    var selectTag = $(`<select id='day-picker'>`);
    // Iterate through the array of options
    for (var i = 0; i < days.length; i++) {
        // Storing the choices data
        var textAndValue = days[i];
        // Creating an option tag to have the choices
        var optionTag = $("<option>").attr({ "class": `option-day`, "id": `option-day${i}`, "value": `${textAndValue}` }).text(textAndValue);
        // Appending the tags to the new select
        selectTag.append(optionTag);
    };
    columnOne.append(selectTag);
    // Creating a select tag to reference the options
    var selectTagTimes = $(`<select id='time-picker'>`);
    // Iterate through the array of options
    for (var j = 0; j < times.length; j++) {
        // Storing the choices data
        var textAndValueTime = times[j];
        // Creating an option tag to have the choices
        var optionTagTime = $("<option>").attr({ "class": `option-time`, "id": `option-time${j}`, "value": `${textAndValueTime}` }).text(textAndValueTime);
        // Appending the tags to the new select
        selectTagTimes.append(optionTagTime);
    };
    columnTwo.append(selectTagTimes);
    // Appending the entire select to the HTML
    $(".schedule-row").append(columnOne, columnTwo);
    // Next button
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": `displayPayment()` }).text("Next");
    $("#choices").append(buttonTag);

    // Old method

    // Creating a div to hold the radios
    // var radioDivOne = $("<div class='radio-holder'>");
    // Creating a input type radio tag to have the choices displayed next to
    // var radioTagOne = $("<input>").attr({ "type": "radio", "class": `radio-schedule-item`, "id": `radio-schedule-item-one`, "name": `appointment`, "value": `appointment-one` });
    // var radioLabelOne = $("<label>").attr({ "class": "radio-label" }).text('Tuesday, August 6th'); // "for": `radio-schedule-item-one`,  including this makes the empty space on the divs the only part you can click to check the radio
    // var radioLabelSpanOne = $('<span class="time-span">').text("12pm-3pm");
    // radioLabelOne.append(radioLabelSpanOne);
    // radioDivOne.append(radioTagOne, radioLabelOne);

    // var radioDivTwo = $("<div class='radio-holder'>");
    // var radioTagTwo = $("<input>").attr({ "type": "radio", "class": `radio-schedule-item`, "id": `radio-schedule-item-two`, "name": `appointment`, "value": `appointment-two` });
    // var radioLabelTwo = $("<label>").attr({ "class": "radio-label" }).text('Tuesday, August 6th'); // "for": `radio-schedule-item-two`, including this makes the empty space on the divs the only part you can click to check the radio
    // var radioLabelSpanTwo = $('<span class="time-span">').text("3pm-6pm");
    // radioLabelTwo.append(radioLabelSpanTwo);
    // Appending the tags to the new div
    // radioDivTwo.append(radioTagTwo, radioLabelTwo);

    // Appending the entire div to the HTML
    // $("#choices").append(radioDivOne, radioDivTwo);
    // Next button
    // var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": "submitAppointment()" }).text("Next");
    // $("#choices").append(buttonTag);
}

// Submit appointment
function submitAppointment() {
    var localValue = $("#day-picker").val();
    // var localValue = $(`input[name="appointment"]:checked`).val().trim();
    var submittedValue = localValue.toString();
    // Check if string is empty, meaning no checked radios
    if (submittedValue === "") {
        $('#question-alert').text("Please select at least one");
        handlePageScroll("question-alert");
        return;
    } else {
        displayPayment(submittedValue);
    }
}

// Display Payment
function displayPayment(appointment) {
    appointment = appointment || "appointment-one";
    $("#start").empty();
    $("#question").empty();
    $('#question-alert').empty();
    $("#choices").empty();
    $('.main-content').attr({ "style": "height: 20vh;" });
    $('.begin-well').addClass("payment");
    if (appointment === "appointment-one") {
        var message = $('<h3>').text('Your appointment for Tuesday, August 6th from 12pm to 3pm PST is confirmed');
        var subMessage = $('<h4>').text('Please enter your payment information to book the appointment');
        $('#start').append(message, subMessage);
        $('.begin-well').html(paymentHTML);
    } else {
        var messageTwo = $('<h3>').text('Your appointment for Tuesday, August 6th from 3pm to 6pm PST is confirmed');
        var subMessageTwo = $('<h4>').text('Please enter your payment information to book the appointment');
        $('#start').append(messageTwo, subMessageTwo);
        $('.begin-well').html(paymentHTMLTwo);
    }
}

// Post Payment
function postPayment() {
    $("#start").empty();
    $("#question").empty();
    $('#question-alert').empty();
    $("#choices").empty();
    $(".payment-section").empty();
    $("#start").attr({ "style": "margin-top:0;" });
    $('.main-content').attr({ "style": "height: 20vh;" });
    $("#question").addClass("post-payment-shrink");
    var backgroundAndLogoPostPayment = '<div class="background"></div>' +
        '<div class="logo-wrapper">' +
        '<img src="./assets/images/logo.jpg" class="logo" alt="DocTalkGo" />' +
        '</div>';
    $('#start').append(backgroundAndLogoPostPayment);
    var message = $('<h3>').attr({ "style": "color:black;" }).text('Thank you, your appointment has been scheduled');
    var subMessage = $('<h4>').attr({ "style": "color:black;" }).text('Our team of consultants will contact you within the next 24 hours');
    $('#question').append(message, subMessage);
}

// Display not qualified
function displayNotQualified() {
    $("#start").empty();
    $("#question").empty();
    $('#question-alert').empty();
    $("#choices").empty();
    var message = $('<h3>').text('We found some possible concerns');
    var subMessage = $('<h4>').text('Based on your information, we recommend seeing a doctor in-person to discuss whether Addyi® may be right for you. Your doctor will help make the right decision for your health.');
    var buttonTag = $("<button>").attr({ "class": `choice-button`, "onclick": "redirectToAddyi()" }).text("Learn more about HSDD");
    $('#start').append(message, subMessage);
    $('#choices').append(buttonTag);
}

function redirectToAddyi() {
    window.open('http://www.ashasexualhealth.org/hypoactive-sexual-desire-disorder/', '_blank');
}

// Show Privacy Policy
function showPrivacyPolicy() {
    $("#privacy-policy").html(privacyPolicy);
    handlePageScroll("privacy-policy");
};

// Hide Privacy Policy
function hidePrivacyPolicy() {
    $('#privacy-policy').empty();
};

// Helper functions
function offset(elm) {
    var rect = elm.getBoundingClientRect(),
        currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + currentScrollTop;
};
function handlePageScroll(hash) {
    var element = document.getElementById(hash),
        target = offset(element);
    window.scroll({
        top: target,
        left: 0,
        behavior: 'smooth'
    });
};
function addDashes(f) {
    var r = /(\D+)/g,
        npa = '',
        nxx = '',
        last4 = '';
    f.value = f.value.replace(r, '');
    npa = f.value.substr(0, 3);
    nxx = f.value.substr(3, 3);
    last4 = f.value.substr(6, 4);
    f.value = npa + (nxx.length > 0 ? '-' : '') + nxx + (last4.length > 0 ? '-' : '') + last4;
}