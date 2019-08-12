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
    {
        question: "2. Let's start with your name:",
        inputType: "text",
        placeholder: "(i.e. John Smith)",
        name: "name",
        validation: "name"
    },
    {
        question: "3. Has there been a decrease in your level of sexual desire?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "decreasedDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "4. In the past, was your level of sexual desire good and satisfying to you?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "pastDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "5. How long have you been experiencing symptoms of low sexual desire or interest?",
        inputType: "choice",
        options: ["<3", "3-6", "6-12", ">12"],
        optionsText: ["Less than 3 months", "3-6 months", "6-12 months", "More than 12 months"],
        links: [false, false, false, false],
        name: "decreasedDesireDuration",
        validation: false
    },
    {
        question: "6. Are you bothered by your decrease of sexual desire or interest?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "botheredDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "7. Would you like to increase your level of sexual desire or interest?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "increaseDesire",
        validation: false,
        correctAnswer: "yes"
    },
    {
        question: "8. What is your birth date?",
        inputType: "date",
        name: "dob",
        validation: false
    },
    {
        question: "9. What is your height?",
        questionSub: "type and select ft' in&quot; from list",
        inputType: "datalist",
        options: heights,
        optionsText: heights,
        name: "height",
        validation: false
    },
    {
        question: "10. What is your weight?",
        questionSub: "in pounds",
        placeholder: "(i.e. 250)",
        inputType: "text",
        name: "weight",
        validation: false
    },
    {
        question: "11. Please identify your birth sex.",
        inputType: "choice",
        options: ["male", "female"],
        optionsText: ["Male", "Female"],
        links: [false, false],
        name: "sex",
        validation: false,
        correctAnswer: "female"
    },
    {
        question: "12. When was your last gynecology exam?",
        inputType: "choice",
        options: ["<6", "6-12", ">12"],
        optionsText: ["Less than 6 months ago", "6 - 12 months ago", "More than 12 months ago"],
        links: [false, false, false],
        name: "lastGynecology",
        validation: false
    },
    {
        question: "13. Have you gone through menopause?",
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
        question: "14. Are you currently pregnant?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "pregnant",
        validation: false
    },
    {
        question: "15. Do you drink any alcohol",
        inputType: "choice",
        options: ["none", "1-2", "3-4", "4-6", "7+"],
        optionsText: ["I don't drink alcohol", "1-2 drinks per week", "3-4 drinks per week", "4-6 drinks per week", "7+ drinks per week"],
        links: [false, false, false, false, false],
        name: "drinks",
        validation: false
    },
    {
        question: "16. Which of the factors below (if any) do you feel may be contributing to your current decrease in sexual desire?",
        questionSub: "Select any and all that apply",
        inputType: "checkbox",
        options: ["none", "medical", "substance", "child", "other", "partnerProblems", "partnerDissatisfied", "stress"],
        optionsText: ["None", "An operation, depression, injuries, or other medical condition", "Medications, drugs, or alcohol you are currently taking.", "Pregnancy, recent childbirth, or menopausal symptoms", "Other sexual issues you may be having (pain, decreased arousal, or orgasm)", "Your partner’s sexual problems.", "Dissatisfaction with your relationship or partner", "Stress or fatigue"],
        links: [false, false, false, false, false, false, false, false],
        name: "factors",
        validation: false
    },
    {
        question: "17. Do you have any sexual health symptoms?",
        questionSub: "Could include abnormal menstruation, vaginal odor, discharge, itching or burning.",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "sexualHealth",
        validation: false
    },
    {
        question: "18. Please add any prior medical conditions:",
        questionSub: "i.e. Hearing loss",
        placeholder: "Type your answer here",
        inputType: "text",
        name: "priorConditions",
        validation: false
    },
    {
        question: "19. Please add any current medications:",
        questionSub: "Please include prescription as well as over-the-counter medications and supplements.",
        placeholder: "Type your answer here",
        inputType: "text",
        name: "currentMedications",
        validation: false
    },
    {
        question: "20. Please add any allergies to medications:",
        placeholder: "Type your answer here",
        inputType: "text",
        name: "allergies",
        validation: false
    },
    {
        question: "21. To confirm, do you have any liver problems?",
        questionSub: "Including, but not limited to, viral hepatitis, autoimmune hepatitis, cirrhosis, genetic liver disorders, liver or bile duct cancer, chronic alcohol abuse, or nonalcoholic fatty liver disease.",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "liverDisease",
        validation: false
    },
    {
        question: "22. To confirm, do you have low blood pressure or a condition that may cause low blood pressure?",
        inputType: "choice",
        options: ["yes", "no"],
        optionsText: ["Yes", "No"],
        links: [false, false],
        name: "bloodPressure",
        validation: false
    },
    {
        question: "23. To confirm, are you currently taking any of the following medications?",
        questionSub: "You may select more than one",
        inputType: "checkbox",
        options: ["none", "hiv", "hepC", "heart", "depression", "infection"],
        optionsText: ["None of these", "Certain medicines used to treat HIV-1 infection: Amprenavir, ritonavir (NORVIR), indinavir (CRIXIVAN), atazanavir (REYATAZ), saquinavir (INVIRASE), fosamprenavir (LEXIVA), nelfinavir (VIRACEPT)", "Certain medicines used to treat Hepatitis C infection: Boceprevir (VICTRELIS), telaprevir", "Certain medicines used to treat high blood pressure, chest pain (angina), or other heart problems: Diltiazem (CARDIZEM®, CARDIZEM CD, CARDIZEM LA, CARTIA XT, DILT CD, DILTZAC, TAZTIA XT, Tiazac), verapamil (CALAN, CALAN SR, COVERA-HS, Verelan, Verelan PM)", "Nefazodone: A medicine used to treat depression", "Fluconazole or Ketoconazole: Medicines used to treat fungal infection"],
        links: [false, false, false, false, false, false],
        name: "medications",
        validation: false
    },
    {
        question: "24. Have you ever had counseling or treatment for a mental health disorder?",
        questionSub: "Choose as many as you like",
        inputType: "checkbox",
        options: ["depression", "anxiety", "none", "other"],
        optionsText: ["Depression", "Anxiety", "I have not been treated for a mental health disorder", "Other"],
        links: [false, false, false, false],
        name: "mentalHealth",
        validation: false
    },
    {
        question: "25. What is the best phone number at which to contact you?",
        inputType: "text",
        placeholder: "(i.e. 415-867-5309)",
        name: "phone",
        validation: "phone"
    },
    {
        question: "26. What is the best email address at which to contact you?",
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
    '<p class="privacy-topic align-left">The Digital Millennium Copyright Act of 1998 (the “DMCA“) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that materials appearing on the App or Website infringe your copyright, you (or your agent) may send us a notice requesting that the material be removed, or access to it blocked. In addition, if you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the DMCA permits you to send us a counter-notice. Notices and counternotices must meet statutory requirements imposed by the DMCA. One place to find more information is the U.S. Copyright Office Web site, currently located at https:// www.loc.gov/copyright. Any written Notification of Claimed infringement should comply with Title 17, United States Code, Section 512(c)(3)(A) and should be provided in writing to Director, doctalkgo.com. dba: doctalkgo.com– 1141 North Brand Boulevard, Suite 306, Glendale, CA, 91202' +
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
function createDate() {
    // Assign question variable to store result of incrementing index of the questions array
    var question = $("<h3>" + questionsJSON[questionIndex].question + "</h3>");
    if (questionsJSON[questionIndex].questionSub) {
        var subQuestion = $("<h4>" + questionsJSON[questionIndex].questionSub + "</h4>");
        question.append(subQuestion);
    }
    // Append question to the #question div
    $("#question").html(question);
    // Create a div element to hold the date input fields and labels
    var dateDiv = $('<div class="date-section">');
    // Create a div element to hold the date labels
    var dateLabelsDiv = $('<div class="date-labels">');
    // Create a div element to hold the date input fields
    var dateFieldsDiv = $('<div class="date-fields">');
    // Create a label for the month
    var monthLabelDiv = $('<div class="month-label-div">');
    var monthLabel = $('<label>').attr({ "class": "month-label" }).text("Month: (MM)");
    monthLabelDiv.append(monthLabel);
    // Create an input field the month
    var monthField = $("<input>").attr({ "type": "text", "class": "month-field", "id": "month", "placeholder": "ex. 07", "maxlength": "2" })
    // Create a label for the day
    var dayLabelDiv = $('<div class="day-label-div">');
    var dayLabel = $('<label>').attr({ "class": "day-label" }).text("Day: (DD)");
    dayLabelDiv.append(dayLabel);
    // Create an input field the day
    var dayField = $("<input>").attr({ "type": "text", "class": "day-field", "id": "day", "placeholder": "ex. 14", "maxlength": "2" })
    // Create a label for the year
    var yearLabelDiv = $('<div class="year-label-div">');
    var yearLabel = $('<label>').attr({ "class": "year-label" }).text("Year: (YYYY)");
    yearLabelDiv.append(yearLabel);
    // Create an input field the year
    var yearField = $("<input>").attr({ "type": "text", "class": "year-field", "id": "year", "placeholder": "ex. 1982", "maxlength": "4" })
    // Create button to submit response
    var buttonTag = $("<button>").attr({ "class": "choice-button", "onclick": "submitDate()" }).text("Next");
    // Append to labels div
    dateLabelsDiv.append(monthLabelDiv, dayLabelDiv, yearLabelDiv);
    // Append to fields div
    dateFieldsDiv.append(monthField, dayField, yearField);
    // Append to date div
    dateDiv.append(dateLabelsDiv, dateFieldsDiv);
    // Append to choices div
    $("#choices").append(dateDiv, buttonTag);
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
            var checkboxLabel = $("<label>").attr({ "class": "checkbox-label" }).text(answer); // "for": `${questionsJSON[questionIndex].name + i}`, 
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
$(document.body).on('click', '.checkbox-holder', function () {
    var checkbox = $(this).children('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
});

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